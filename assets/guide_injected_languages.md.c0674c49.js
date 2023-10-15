import { _ as _export_sfc, o as openBlock, c as createElementBlock, Q as createStaticVNode } from "./chunks/framework.1082274c.js";
const __pageData = JSON.parse('{"title":"Injected Languages","description":"","frontmatter":{},"headers":[],"relativePath":"guide/injected_languages.md","filePath":"guide/injected_languages.md"}'), _sfc_main = { name: "guide/injected_languages.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode(`<h1 id="injected-languages" tabindex="-1">Injected Languages <a class="header-anchor" href="#injected-languages" aria-label="Permalink to &quot;Injected Languages&quot;">​</a></h1><p>The parser logic allows to parse other file formats as well and to determine the respective Http blocks. This makes it possible, for example, to extend Http code blocks from Markdown with httpyac functionality. The idea is that directly from the documentation, the respective endpoints can be tested.</p><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h2><p>In Markdown, code blocks can be given a language. If this is set to <code>http</code>, httpyac activates and offers to send the request.</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;">## Markdown</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">\`\`\`http</span></span>
<span class="line"><span style="color:#E1E4E8;">GET https://httpbin.org/json</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;">## Markdown</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">\`\`\`http</span></span>
<span class="line"><span style="color:#24292E;">GET https://httpbin.org/json</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="asciidoctor" tabindex="-1">Asciidoctor <a class="header-anchor" href="#asciidoctor" aria-label="Permalink to &quot;Asciidoctor&quot;">​</a></h2><p>In Asciidoctor, code blocks can be given a language. If this is set to <code>http</code>, httpyac activates and offers to send the request.</p><div class="language-apl vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">apl</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> Asciidoctor</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">[source</span><span style="color:#F97583;">,</span><span style="color:#E1E4E8;">http]</span></span>
<span class="line"><span style="color:#F97583;">----</span></span>
<span class="line"><span style="color:#E1E4E8;">GET https:</span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">httpbin</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">org</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">json</span></span>
<span class="line"><span style="color:#F97583;">----</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">==</span><span style="color:#24292E;"> Asciidoctor</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">[source</span><span style="color:#D73A49;">,</span><span style="color:#24292E;">http]</span></span>
<span class="line"><span style="color:#D73A49;">----</span></span>
<span class="line"><span style="color:#24292E;">GET https:</span><span style="color:#D73A49;">//</span><span style="color:#24292E;">httpbin</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">org</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">json</span></span>
<span class="line"><span style="color:#D73A49;">----</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`, 8), _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const injected_languages = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  injected_languages as default
};
