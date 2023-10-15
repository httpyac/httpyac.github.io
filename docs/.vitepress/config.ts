import { defineConfig } from "vitepress";

export default defineConfig({
  vite: {
    esbuild: {
      minifyIdentifiers: false,
      minifyWhitespace: false,
    },
  },
  base: "/",
  lang: "en-US",
  title: "httpYac",
  description: "Quickly and easily send REST, SOAP, GraphQL and gRPC requests",
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
  ],
  markdown: {
    lineNumbers: true,
    languages: [
      {
        id: "http",
        scopeName: "source.http",
        path: "./http.tmLanguage.json",
        aliases: ["Http", "HTTP"],
      },
    ],
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
              { text: "Assert", link: "/guide/assert" },
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
      {
        text: "Source",
        items: [
          { text: "httpyac CLI", link: "https://github.com/anweber/httpyac" },
          {
            text: "vscode-httpyac",
            link: "https://github.com/anweber/vscode-httpyac",
          },
          { text: "httpbook", link: "https://github.com/anweber/httpbook" },
          {
            text: "httpyac.github.io",
            link: "https://github.com/httpyac/httpyac.github.io",
          },
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
              { text: "Assert", link: "/guide/assert" },
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
            link: "/plugins/plugin-api.md",
          },
        ],
      },
    ],
    footer: {
      copyright: `MIT Licensed | Copyright © 2020-present <a href="https://github.com/anweber">Andreas Weber</a>`,
    },
  },
});
