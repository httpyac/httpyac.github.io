import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.346b35e8.js";
const __pageData = JSON.parse('{"title":"Injected Languages","description":"","frontmatter":{},"headers":[{"level":2,"title":"Markdown","slug":"markdown","link":"#markdown","children":[]},{"level":2,"title":"Asciidoctor","slug":"asciidoctor","link":"#asciidoctor","children":[]}],"relativePath":"guide/injected_languages.md"}'), _sfc_main = { name: "guide/injected_languages.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode(`<h1 id="injected-languages" tabindex="-1">Injected Languages <a class="header-anchor" href="#injected-languages" aria-hidden="true">#</a></h1><p>The parser logic allows to parse other file formats as well and to determine the respective Http blocks. This makes it possible, for example, to extend Http code blocks from Markdown with httpyac functionality. The idea is that directly from the documentation, the respective endpoints can be tested.</p><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-hidden="true">#</a></h2><p>In Markdown, code blocks can be given a language. If this is set to <code>http</code>, httpyac activates and offers to send the request.</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Markdown</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C3E88D;">\`\`\`</span><span style="color:#A6ACCD90;">http</span></span>
<span class="line"><span style="color:#A6ACCD90;">GET https://httpbin.org/json</span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="asciidoctor" tabindex="-1">Asciidoctor <a class="header-anchor" href="#asciidoctor" aria-hidden="true">#</a></h2><p>In Asciidoctor, code blocks can be given a language. If this is set to <code>http</code>, httpyac activates and offers to send the request.</p><div class="language-apl line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">apl</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> Asciidoctor</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">----</span></span>
<span class="line"><span style="color:#A6ACCD;">GET https:</span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;">httpbin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">org</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#89DDFF;">----</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`, 8), _hoisted_9 = [
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
