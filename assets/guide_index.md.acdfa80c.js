import { _ as _export_sfc, o as openBlock, c as createElementBlock, Q as createStaticVNode } from "./chunks/framework.1082274c.js";
const __pageData = JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'), _sfc_main = { name: "guide/index.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode(`<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>httpYac provides a system to provide a simple way to create, execute, and store information about HTTP requests:</p><ul><li>VS Code extension to create and execute requests</li><li>CLI application to allow CI to use created http requests for testing</li><li>httpBook for documentation of requests in a Jupyter Notebook Format</li></ul><p>The goal is to create a simple, free and extensible development tool that follows known standards if possible. For example, for the description language of the requests, the specification mostly repeats <a href="https://tools.ietf.org/html/rfc7230#section-3https://tools.ietf.org/html/rfc7230#section-3" target="_blank" rel="noreferrer">RFC 7230</a> with several extensions intended for easier requests composing and editing.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><ul><li>CLI:</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">httpyac</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">httpyac</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">httpyac</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">httpyac</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>VSCode Extension</li></ul><p><a href="https://marketplace.visualstudio.com/items?itemName=anweber.vscode-httpyac" target="_blank" rel="noreferrer"><img src="https://img.shields.io/visual-studio-marketplace/v/anweber.vscode-httpyac?style=flat-square" alt="Visual Studio Marketplace Version"></a></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">code</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--install-extension</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anweber.vscode-httpyac</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">code</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--install-extension</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anweber.vscode-httpyac</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>VSCode Notebook Extension</li></ul><p><a href="https://marketplace.visualstudio.com/items?itemName=anweber.httpbook" target="_blank" rel="noreferrer"><img src="https://img.shields.io/visual-studio-marketplace/v/anweber.httpbook?style=flat-square" alt="Visual Studio Marketplace Version"></a></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">code</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--install-extension</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anweber.httpbook</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">code</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--install-extension</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anweber.httpbook</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Docker</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">alias</span><span style="color:#E1E4E8;"> httpyac</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;docker run -it -v \${</span><span style="color:#E1E4E8;">PWD</span><span style="color:#9ECBFF;">}:/data ghcr.io/anweber/httpyac:latest&quot;</span></span>
<span class="line"><span style="color:#B392F0;">httpyac</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">alias</span><span style="color:#24292E;"> httpyac</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;docker run -it -v \${</span><span style="color:#24292E;">PWD</span><span style="color:#032F62;">}:/data ghcr.io/anweber/httpyac:latest&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">httpyac</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="feature-comparisons" tabindex="-1">Feature comparisons <a class="header-anchor" href="#feature-comparisons" aria-label="Permalink to &quot;Feature comparisons&quot;">​</a></h2><table><thead><tr><th>Feature</th><th style="text-align:center;">httpYac</th><th style="text-align:center;"><a href="https://www.postman.com/" target="_blank" rel="noreferrer">Postman</a></th><th style="text-align:center;"><a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client" target="_blank" rel="noreferrer">Rest Client</a></th><th style="text-align:center;"><a href="https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html" target="_blank" rel="noreferrer">Intellij Idea</a></th></tr></thead><tbody><tr><td>Send Request and View</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td></tr><tr><td>-- Rest</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td></tr><tr><td>-- GraphQL</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td></tr><tr><td>-- gRPC</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td>Variable support</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td></tr><tr><td>Custom Scripting support</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">- (<a href="https://github.com/Huachao/vscode-restclient/pull/674" target="_blank" rel="noreferrer">pull request</a>)</td><td style="text-align:center;">partially</td></tr><tr><td>Test/ Assert Response</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">- (<a href="https://github.com/Huachao/vscode-restclient/pull/773" target="_blank" rel="noreferrer">pull request</a>)</td><td style="text-align:center;">✓</td></tr><tr><td>Authorization support</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">partially (no custom auth flow)</td><td style="text-align:center;">-</td></tr><tr><td>-- OAuth2/ OpenId Connect</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td>-- AWS Signature v4</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td></tr><tr><td>-- Basic Authentication</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td></tr><tr><td>-- Digest Authentication</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td></tr><tr><td>-- SSL Client Certificate</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td></tr><tr><td>-- Custom Authentication</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td>Code Generation</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td></tr><tr><td>Built-in Preview Support (Image, PDF, ...)</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td><td style="text-align:center;">✓ (only Image)</td><td style="text-align:center;">-</td></tr><tr><td>Share workspace</td><td style="text-align:center;">✓</td><td style="text-align:center;">paywall</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td></tr><tr><td>extensible/ plugin support</td><td style="text-align:center;">✓</td><td style="text-align:center;">partially</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td>cli support</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table>`, 17), _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};