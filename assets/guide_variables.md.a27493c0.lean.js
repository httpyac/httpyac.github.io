import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode, t as toDisplayString, a as createStaticVNode } from "./app.18e01c26.js";
const __pageData = JSON.parse('{"title":"Variables","description":"","frontmatter":{},"headers":[{"level":2,"title":"Variable Scope","slug":"variable-scope","link":"#variable-scope","children":[]},{"level":2,"title":"Inline Variables","slug":"inline-variables","link":"#inline-variables","children":[]},{"level":2,"title":"Import Variables","slug":"import-variables","link":"#import-variables","children":[]},{"level":2,"title":"Variable Substitution in Request","slug":"variable-substitution-in-request","link":"#variable-substitution-in-request","children":[{"level":3,"title":"NodeJs Script","slug":"nodejs-script","link":"#nodejs-script","children":[]},{"level":3,"title":"Host","slug":"host","link":"#host","children":[]},{"level":3,"title":"Input, Password and QuickPick","slug":"input-password-and-quickpick","link":"#input-password-and-quickpick","children":[]},{"level":3,"title":"OAuth2 / OpenID Connect","slug":"oauth2-openid-connect","link":"#oauth2-openid-connect","children":[]},{"level":3,"title":"AWS Signature v4","slug":"aws-signature-v4","link":"#aws-signature-v4","children":[]},{"level":3,"title":"SSL Client Certificate","slug":"ssl-client-certificate","link":"#ssl-client-certificate","children":[]},{"level":3,"title":"Basic Authentication","slug":"basic-authentication","link":"#basic-authentication","children":[]},{"level":3,"title":"Digest Authentication","slug":"digest-authentication","link":"#digest-authentication","children":[]},{"level":3,"title":"Intellij Dynamic Variables","slug":"intellij-dynamic-variables","link":"#intellij-dynamic-variables","children":[]},{"level":3,"title":"Rest Client Dynamic Variables","slug":"rest-client-dynamic-variables","link":"#rest-client-dynamic-variables","children":[]},{"level":3,"title":"XPath Query","slug":"xpath-query","link":"#xpath-query","children":[]}]}],"relativePath":"guide/variables.md"}'), _sfc_main = { name: "guide/variables.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 51), _hoisted_52 = { class: "tip custom-block" }, _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "TIP", -1), _hoisted_54 = /* @__PURE__ */ createBaseVNode("code", null, "oauth2_serverPort", -1), _hoisted_55 = /* @__PURE__ */ createBaseVNode("code", null, "https://port-8000.external-domain", -1), _hoisted_56 = /* @__PURE__ */ createBaseVNode("code", null, "https://port-8000.external-domain/callback", -1), _hoisted_57 = /* @__PURE__ */ createBaseVNode("code", null, "oauth2_serverPort", -1), _hoisted_58 = /* @__PURE__ */ createStaticVNode("", 46);
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
