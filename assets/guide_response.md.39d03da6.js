import { _ as _export_sfc, c as createElementBlock, b as createBaseVNode, d as createTextVNode, t as toDisplayString, a as createStaticVNode, o as openBlock } from "./app.0d2193d6.js";
const __pageData = JSON.parse('{"title":"Response","description":"","frontmatter":{},"headers":[{"level":2,"title":"Response Documentation","slug":"response-documentation","link":"#response-documentation","children":[]},{"level":2,"title":"Output Redirection","slug":"output-redirection","link":"#output-redirection","children":[]}],"relativePath":"guide/response.md"}'), _sfc_main = { name: "guide/response.md" }, _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "response",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Response "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#response",
    "aria-hidden": "true"
  }, "#")
], -1), _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Responses can also be specified within an http file. This feature is mainly intended for documentation purposes.", -1), _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "response-documentation",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Response Documentation "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#response-documentation",
    "aria-hidden": "true"
  }, "#")
], -1), _hoisted_4 = /* @__PURE__ */ createStaticVNode(`<div class="language-http line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki css-variables has-highlighted-lines"><code><span class="line"><span style="color:var(--shiki-token-keyword);">GET</span><span style="color:var(--shiki-color-text);"> https://httpbin.org/get</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:var(--shiki-token-keyword);">HTTP</span><span style="color:var(--shiki-color-text);">/</span><span style="color:var(--shiki-token-constant);">1.1</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">200</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">- OK</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">date</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">Mon, 21 Jun 2021 19:38:05 GMT</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">content-type</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">application/json</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">content-length</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">295</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">connection</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">close</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">server</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">access-control-allow-origin</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">*</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression);">access-control-allow-credentials</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string);">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-keyword);">&quot;args&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> {}</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-keyword);">&quot;headers&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">&quot;Accept&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;*/*&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">&quot;Accept-Encoding&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;gzip, deflate, br&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">&quot;Host&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;httpbin.org&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">&quot;User-Agent&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;httpyac&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;Root=1-60d0ea9d-3dfb873f497a9e6d50b2eccc&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  }</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-keyword);">&quot;origin&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;79.243.57.74&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-keyword);">&quot;url&quot;</span><span style="color:var(--shiki-token-punctuation);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The response is not used further in the program. Instead, it is only used to initially set up the display in <code>httpbook</code> correctly, for example.</p></div><h2 id="output-redirection" tabindex="-1">Output Redirection <a class="header-anchor" href="#output-redirection" aria-hidden="true">#</a></h2><p>httpYac canc redirect response body to a custom file. It supports two operators:</p><ul><li><code>&gt;&gt;</code> operator always creates a new file, adding an <code>-n</code> suffix to a file name if the requested file name already exists.</li></ul><div class="language-http line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki css-variables has-highlighted-lines"><code><span class="line"><span style="color:var(--shiki-token-keyword);">GET</span><span style="color:var(--shiki-color-text);">  https://httpbin.org/anything</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:var(--shiki-token-keyword);">&gt;&gt;</span><span style="color:var(--shiki-color-text);"> ./outputRedirection.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>&gt;&gt;!</code> operator overrides the file, if it already exists.</li></ul><div class="language-http line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki css-variables has-highlighted-lines"><code><span class="line"><span style="color:var(--shiki-token-keyword);">GET</span><span style="color:var(--shiki-color-text);">  https://httpbin.org/anything</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:var(--shiki-token-keyword);">&gt;&gt;!</span><span style="color:var(--shiki-color-text);"> ./outputRedirection.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`, 8);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("Once a line starts with "),
      createBaseVNode("code", null, "HTTP/{version}} " + toDisplayString(_ctx.statusCode), 1),
      createTextVNode(", the following content is interpreted as a response and parsed.")
    ]),
    _hoisted_4
  ]);
}
const response = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  response as default
};
