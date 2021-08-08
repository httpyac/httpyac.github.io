---
sidebarDepth: 0
---

# Overview

httpYac provides a system to provide a simple way to create, execute, and store information about HTTP requests:

- VS Code extension to create and execute requests
- CLI application to allow CI to use created http requests for testing
- httpBook for documentation of requests in a Jupyter Notebook Format

The goal is to create a simple, free and extensible development tool that follows known standards if possible. For example, for the description language of the requests, the specification mostly repeats [RFC 7230](https://tools.ietf.org/html/rfc7230#section-3https://tools.ietf.org/html/rfc7230#section-3) with several extensions intended for easier requests composing and editing.

## Feature comparisons

| Feature | httpYac | [Postman](https://www.postman.com/) | [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) | [Intellij Idea](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html) |
| - | :-: | :-: | :-: | :-: |
| Send Request and View | ✓ | ✓ | ✓ | ✓ |
| Variable support | ✓ | ✓ | ✓ | ✓ |
| Custom Scripting support | ✓ | ✓ | - ([pull request](https://github.com/Huachao/vscode-restclient/pull/674)) | partially |
| Test/ Assert Response | ✓ | ✓ | - ([pull request](https://github.com/Huachao/vscode-restclient/pull/773)) | ✓ |
| Authorization support | ✓ | ✓ | partially (no custom auth flow) | - |
| -- OAuth2/ OpenId Connect | ✓ | ✓ | - | - |
| -- AWS Signnature v4 | ✓ | ✓ | ✓ | - |
| -- Basic Authentication | ✓ | ✓ | ✓ | ✓ |
| -- Digest Authentication | ✓ | ✓ | ✓ | ✓ |
| -- SSL Client Certificate | ✓ | ✓ | ✓ | - |
| -- Custom Authentication | ✓ | ✓ | - | - |
| Code Generation | ✓ | ✓ | ✓ | - |
| Built-in Preview Support (Image, PDF, ...) | ✓ | - | ✓ (only Image) | - |
| Share workspace | ✓ | paywall | ✓ | ✓ |
| extensible/ plugin support | ✓ | partially | - | - |
| cli support | ✓ | ✓ | - | - |