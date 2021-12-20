---
home: true
heroImage: /favicon.png
actions:
  - text: Get Started
    link: /guide/
    type: primary
features:
  - title: Feature Rich
    details: Create and execute any REST, SOAP, GraphQL and gRPC queries from within VS Code or CLI
  - title: Extensible
    details: The plugin system allows the community to build and share reusable solutions to common needs.
  - title: Manage Authentication
    details: httpYac supports many authentication out of the box (OAuth2, AWS, Basic, Digest, SSL Client Certificates)
  - title: Variables
    details: Built in support for variables and environments (dotenv, intellij variable support).
  - title: Node JS Scripting Support
    details: enrich requests with custom scripts like custom authentication or test scripts
  - title: Automated Test
    details: Automate manual tests and integrate them into your CI/CD pipeline
footer: MIT Licensed | Copyright © 2020-present Andreas Weber
---


## Getting Started

Install CLI:

``` bash
npm install -g httpyac
# OR
yarn global add httpyac
```


Install VS Code Extension

[![Marketplace Version](https://vsmarketplacebadge.apphb.com/version-short/anweber.vscode-httpyac.svg)](https://marketplace.visualstudio.com/items?itemName=anweber.vscode-httpyac)

``` bash
code --install-extension anweber.vscode-httpyac
```


Install VS Code Notebook Extension

[![Marketplace Version](https://vsmarketplacebadge.apphb.com/version-short/anweber.httpbook.svg)](https://marketplace.visualstudio.com/items?itemName=anweber.httpbook)

``` bash
code --install-extension anweber.httpbook
```