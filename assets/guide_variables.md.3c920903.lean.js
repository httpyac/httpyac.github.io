import { _ as _export_sfc, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, t as toDisplayString, Q as createStaticVNode } from "./chunks/framework.1082274c.js";
const __pageData = JSON.parse('{"title":"Variables","description":"","frontmatter":{},"headers":[],"relativePath":"guide/variables.md","filePath":"guide/variables.md"}'), _sfc_main = { name: "guide/variables.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 51), _hoisted_52 = { class: "tip custom-block" }, _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "TIP", -1), _hoisted_54 = /* @__PURE__ */ createBaseVNode("code", null, "oauth2_serverPort", -1), _hoisted_55 = /* @__PURE__ */ createBaseVNode("code", null, "https://port-8000.external-domain", -1), _hoisted_56 = /* @__PURE__ */ createBaseVNode("code", null, "https://port-8000.external-domain/callback", -1), _hoisted_57 = /* @__PURE__ */ createBaseVNode("code", null, "oauth2_serverPort", -1), _hoisted_58 = /* @__PURE__ */ createStaticVNode("", 55);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_52, [
      _hoisted_53,
      createBaseVNode("p", null, [
        createTextVNode("The http server started for the Authorization Flow and Implicit Flow listens on the port of "),
        createBaseVNode("code", null, toDisplayString(_ctx.prefix) + "_redirectUri", 1),
        createTextVNode(". You can configure a different port for the server to listen to with variable "),
        _hoisted_54,
        createTextVNode(". If the port localhost:8000 is mapped to host "),
        _hoisted_55,
        createTextVNode(" in a reverse proxy, you can set variable "),
        createBaseVNode("code", null, toDisplayString(_ctx.prefix) + "_redirectUri", 1),
        createTextVNode(" as "),
        _hoisted_56,
        createTextVNode(" and set variable "),
        _hoisted_57,
        createTextVNode(" to 8000.")
      ])
    ]),
    _hoisted_58
  ]);
}
const variables = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  variables as default
};
