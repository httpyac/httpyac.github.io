import { _ as _export_sfc, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, t as toDisplayString, Q as createStaticVNode } from "./chunks/framework.1082274c.js";
const __pageData = JSON.parse('{"title":"Response","description":"","frontmatter":{},"headers":[],"relativePath":"guide/response.md","filePath":"guide/response.md"}'), _sfc_main = { name: "guide/response.md" }, _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "response",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Response "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#response",
    "aria-label": 'Permalink to "Response"'
  }, "​")
], -1), _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Responses can also be specified within an http file. This feature is mainly intended for documentation purposes.", -1), _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "response-documentation",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Response Documentation "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#response-documentation",
    "aria-label": 'Permalink to "Response Documentation"'
  }, "​")
], -1), _hoisted_4 = /* @__PURE__ */ createStaticVNode(`<div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> https://httpbin.org/get</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:05 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">295</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept-Encoding&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;gzip, deflate, br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpbin.org&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;User-Agent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Root=1-60d0ea9d-3dfb873f497a9e6d50b2eccc&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79.243.57.74&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> https://httpbin.org/get</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:05 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">295</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;headers&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept-Encoding&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;gzip, deflate, br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpbin.org&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;User-Agent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Root=1-60d0ea9d-3dfb873f497a9e6d50b2eccc&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79.243.57.74&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The response is not used further in the program. Instead, it is only used to initially set up the display in <code>httpbook</code> correctly, for example.</p></div><h2 id="output-redirection" tabindex="-1">Output Redirection <a class="header-anchor" href="#output-redirection" aria-label="Permalink to &quot;Output Redirection&quot;">​</a></h2><p>httpYac canc redirect response body to a custom file. It supports two operators:</p><ul><li><code>&gt;&gt;</code> operator always creates a new file, adding an <code>-n</code> suffix to a file name if the requested file name already exists.</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;">  https://httpbin.org/anything</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&gt;&gt; ./outputRedirection.json</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;">  https://httpbin.org/anything</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">&gt;&gt; ./outputRedirection.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>&gt;&gt;!</code> operator overrides the file, if it already exists.</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;">  https://httpbin.org/anything</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&gt;&gt;! ./outputRedirection.json</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;">  https://httpbin.org/anything</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">&gt;&gt;! ./outputRedirection.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`, 8);
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
