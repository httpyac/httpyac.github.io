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
], -1), _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 8);
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