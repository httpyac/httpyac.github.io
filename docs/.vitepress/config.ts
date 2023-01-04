import { defineConfig } from "vitepress";
import { join } from "path";
import type { HtmlRendererOptions } from "shiki";
import {
  createDiffProcessor,
  createFocusProcessor,
  createHighlightProcessor,
  createRangeProcessor,
  defineProcessor,
  getHighlighter,
  type Processor,
} from "shiki-processor";

const processors: Processor[] = [
  createFocusProcessor(),
  createHighlightProcessor({ hasHighlightClass: "highlighted" }),
  createDiffProcessor(),
  defineProcessor({
    name: "error-level",
    handler: createRangeProcessor({
      error: ["highlighted", "error"],
      warning: ["highlighted", "warning"],
    }),
  }),
];


export default async function init() {
  const highlighter = await getHighlighter({
    themes: ["css-variables"],
    processors,
  });

  highlighter.loadLanguage({
    id: "http",
    scopeName: "source.http",
    path: join(__dirname, "./http.tmLanguage.json"),
    aliases: ["Http", "HTTP"],
  });

  return defineConfig({
    vite: {
      esbuild: {
        minifyIdentifiers: false,
        minifyWhitespace: false,
      }
    },
    base: "/",
    lang: "en-US",
    title: "httpYac",
    description:
      "Quickly and easily send REST, SOAP, GraphQL and gRPC requests",
    head: [
      ["link", { rel: "icon", href: "/favicon.png" }],
      ["meta", { name: "theme-color", content: "#706B69" }],
      ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
      [
        "meta",
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      ],
      [
        "link",
        {
          rel: "apple-touch-icon",
          href: `/icons/apple-touch-icon-152x152.png`,
        },
      ],
      [
        "meta",
        {
          name: "msapplication-TileImage",
          content: "/icons/msapplication-icon-144x144.png",
        },
      ],
      ["meta", { name: "msapplication-TileColor", content: "#000000" }],

      ['link', { rel: 'stylesheet', href: '/index.css' }]
    ],
    markdown: {
      lineNumbers: true,
      highlight: (str: string, lang: string, attrs: string) => {
        const vPre =  /-vue$/.test(lang) ? "" : "v-pre";
        lang =
          lang.replace(/:(no-)?line-numbers$/, "").replace( /-vue$/, "").toLowerCase() || "http";

        const lineOptions = attrsToLines(attrs);
        const cleanup = (str: string) =>
          str
            .replace(/^<pre(.*?)>/, (_, attributes) => `<pre ${vPre}${attributes}>`)
            .replace(/<pre[^>]*(style=".*?")/, (_, style) => _.replace(style, ""));

        return cleanup(
          highlighter.codeToHtml(str, {
            lang,
            lineOptions,
          })
        );
      },
    },
    themeConfig: {
      logo: "/favicon.png",
      nav: [
        {
          text: "Guide",
          items: [
            {
              text: "Installation",
              items: [
                { text: "CLI", link: "/guide/installation_cli" },
                { text: "VSCode", link: "/guide/installation_vscode" },
                {
                  text: "VSCode Notebook",
                  link: "/guide/installation_httpbook",
                },
                { text: "Docker", link: "/guide/installation_docker" },
              ],
            },
            {
              text: "Language",
              items: [
                { text: "Request", link: "/guide/request" },
                { text: "MetaData", link: "/guide/metaData" },
                { text: "Variables", link: "/guide/variables" },
                { text: "Environments", link: "/guide/environments" },
                { text: "Scripting", link: "/guide/scripting" },
                { text: "Comment", link: "/guide/comment" },
                { text: "Hooks", link: "/guide/hooks" },
                { text: "Response", link: "/guide/response" },
                {
                  text: "Injected Languages",
                  link: "/guide/injected_languages",
                },
              ],
            },
          ],
        },
        {
          text: "Support",
          items: [
            {
              text: "Examples",
              link: "/guide/examples",
            },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
        {
          text: "Configuration",
          link: "/config/",
        },
        {
          text: "Plugins",
          items: [
            { text: "Development Guide", link: "/plugins/" },
            { text: "API Reference", link: "/plugins/plugin-api.md" },
          ],
        },
      ],
      sidebar: [
        {
          text: "Guide",
          items: [
            {
              text: "Installation",
              items: [
                { text: "CLI", link: "/guide/installation_cli" },
                { text: "VSCode", link: "/guide/installation_vscode" },
                { text: "VSCode Notebook", link: "/guide/installation_httpbook" },
                { text: "Docker", link: "/guide/installation_docker" },
              ],
            },
            {
              text: "Language",
              items: [
                { text: "Request", link: "/guide/request" },
                { text: "MetaData", link: "/guide/metaData" },
                { text: "Variables", link: "/guide/variables" },
                { text: "Environments", link: "/guide/environments" },
                { text: "Scripting", link: "/guide/scripting" },
                { text: "Comment", link: "/guide/comment" },
                { text: "Hooks", link: "/guide/hooks" },
                { text: "Response", link: "/guide/response" },
                {
                  text: "Injected Languages",
                  link: "/guide/injected_languages",
                },
              ],
            },

          ],
        },
        {
          text: "Support",
          items: [
            {
              text: "Examples",
              link: "/guide/examples",
            },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
        {
          text: "Plugins",
          items: [
            { text: "Development Guide", link: "/plugins/" },
            {
              text: "API reference",
              link: "/plugins/plugin-api.md" ,
            },
          ],
        },
      ],
    },
  });
}

/**
 * 2 steps:
 *
 * 1. convert attrs into line numbers:
 *    {4,7-13,16,23-27,40} -> [4,7,8,9,10,11,12,13,16,23,24,25,26,27,40]
 * 2. convert line numbers into line options:
 *    [{ line: number, classes: string[] }]
 */
const attrsToLines = (attrs: string): HtmlRendererOptions["lineOptions"] => {
  attrs = attrs.replace(/^(?:\[.*?\])?.*?([\d,-]+).*/, "$1").trim();
  const result: number[] = [];
  if (!attrs) {
    return [];
  }
  attrs
    .split(",")
    .map((v) => v.split("-").map((v) => parseInt(v, 10)))
    .forEach(([start, end]) => {
      if (start && end) {
        result.push(
          ...Array.from({ length: end - start + 1 }, (_, i) => start + i)
        );
      } else {
        result.push(start);
      }
    });
  return result.map((v) => ({
    line: v,
    classes: ["highlighted"],
  }));
};
