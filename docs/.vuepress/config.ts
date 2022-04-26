import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
const { defaultTheme, viteBundler } = require('vuepress')

export default defineUserConfig<DefaultThemeOptions>({
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
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
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

  bundler: viteBundler(),
  theme: defaultTheme({
    repo: "httpyac/httpyac.github.io",
    logo: "/favicon.png",
    docsDir: "docs",
    editLink: false,
    contributors: false,
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
        children: [
          {
            text: "Installation",
            target: "/guide/installation",
            children: [
              "/guide/installation_cli",
              "/guide/installation_vscode",
              "/guide/installation_httpbook",
            ],
          },
          {
            text: "Language",
            children: [
              "/guide/request",
              "/guide/metaData",
              "/guide/variables",
              "/guide/environments",
              "/guide/scripting",
              "/guide/comment",
              "/guide/hooks",
              "/guide/response",
              "/guide/injected_languages",
            ],
          },
          {
            text: "Examples",
            children: [
              {
                text: "Examples",
                link: "/guide/examples",
              },
              "/guide/troubleshooting",
            ],
          },
        ],
      },
      {
        text: "Configuration",
        link: "/config/",
      },
      {
        text: "Plugins",
        children: [
          '/plugins/',
          '/plugins/plugin-api.md'
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        '/guide/',
        {
          text: 'Installation',
          target: '/guide/installation',
          children: [
            '/guide/installation_cli',
            '/guide/installation_vscode',
            '/guide/installation_httpbook'
          ]
        },
        {
          text: 'Language',
          children: [
            '/guide/request',
            '/guide/metaData',
            '/guide/variables',
            '/guide/environments',
            '/guide/scripting',
            '/guide/comment',
            '/guide/hooks',
            '/guide/response'
          ]
        },
        '/guide/troubleshooting',
        {
          text: 'Examples',
          link: '/guide/examples',
        },
      ],
      '/plugins/': [
        '/plugins/',
        {
          text: 'API reference',
          children: [
            '/plugins/plugin-api.md'
          ]
        }
      ]
    }
  }),
  plugins: [
    ['@vuepress/plugin-search']
  ]
});
