function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { d as defineComponent, o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass, a as createTextVNode, t as toDisplayString, b as createBlock, w as withCtx, T as Transition, e as createCommentVNode, _ as _export_sfc, u as useData$1, i as isExternal, f as treatAsHtml, g as withBase, h as ref, j as inBrowser, k as computed, l as onMounted, m as createBaseVNode, p as unref, q as pushScopeId, s as popScopeId, v as isActive, x as useMediaQuery, y as watch, z as watchEffect, A as onUnmounted, B as watchPostEffect, C as onUpdated, D as getScrollOffset, E as resolveComponent, F as Fragment, G as renderList, H as shallowRef, I as onContentUpdated, J as createVNode, K as resolveDynamicComponent, L as EXTERNAL_URL_RE, M as useRoute, N as mergeProps, O as inject, P as useWindowSize, Q as normalizeStyle, R as onClickOutside, S as onKeyStroke, U as nextTick, V as useWindowScroll, W as readonly, X as useRouter, Y as __vitePreload, Z as withDirectives, $ as vShow, a0 as withModifiers, a1 as vModelText, a2 as Teleport, a3 as useScrollLock, a4 as provide, a5 as withKeys, a6 as toHandlers, a7 as useSlots } from "./framework.DHk-hcUK.js";
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["VPBadge", _ctx.type])
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.text), 1)
      ])
    ], 2));
  }
}), _hoisted_1$H = {
  key: 0,
  class: "VPBackdrop"
}, _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$H)) : createCommentVNode("", !0)
      ]),
      _: 1
    }));
  }
}), VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-c79a1216"]]), useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId, called = !1;
  return () => {
    timeoutId && clearTimeout(timeoutId), called ? timeoutId = setTimeout(fn, delay) : (fn(), (called = !0) && setTimeout(() => called = !1, delay));
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData(), normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
const hashRef = ref(inBrowser ? location.hash : "");
inBrowser && window.addEventListener("hashchange", () => {
  hashRef.value = location.hash;
});
function useLangs({ removeCurrent = !0, correspondingLink = !1 } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData(), currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  return { localeLinks: computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== !1 && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hashRef.value
  })), currentLang };
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link;
}
const _withScopeId$h = (n) => (pushScopeId("data-v-f87ff6e4"), n = n(), popScopeId(), n), _hoisted_1$G = { class: "NotFound" }, _hoisted_2$t = { class: "code" }, _hoisted_3$k = { class: "title" }, _hoisted_4$c = /* @__PURE__ */ _withScopeId$h(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1)), _hoisted_5$a = { class: "quote" }, _hoisted_6$8 = { class: "action" }, _hoisted_7$6 = ["href", "aria-label"], _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { localeLinks } = useLangs({ removeCurrent: !1 }), root = ref("/");
    return onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      localeLinks.value.length && (root.value = ((_a = localeLinks.value.find(({ link }) => link.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link);
    }), (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$G, [
        createBaseVNode("p", _hoisted_2$t, toDisplayString(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404"), 1),
        createBaseVNode("h1", _hoisted_3$k, toDisplayString(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND"), 1),
        _hoisted_4$c,
        createBaseVNode("blockquote", _hoisted_5$a, toDisplayString(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        createBaseVNode("div", _hoisted_6$8, [
          createBaseVNode("a", {
            class: "link",
            href: unref(withBase)(root.value),
            "aria-label": ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home"
          }, toDisplayString(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home"), 9, _hoisted_7$6)
        ])
      ]);
    };
  }
}), NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-f87ff6e4"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => b.split("/").length - a.split("/").length).find((dir2) => path.startsWith(ensureStartingSlash(dir2))), sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    groups[lastGroupIndex] || groups.push({ items: [] }), groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items)
      item.text && item.link && links.push({
        text: item.text,
        link: item.link,
        docFooterText: item.docFooterText
      }), item.items && recursivelyExtractLinks(item.items);
  }
  return recursivelyExtractLinks(sidebar), links;
}
function hasActiveLink(path, items) {
  return Array.isArray(items) ? items.some((item) => hasActiveLink(path, item)) : isActive(path, items.link) ? !0 : items.items ? hasActiveLink(path, items.items) : !1;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item }, base = item.base || _base;
    return base && item.link && (item.link = base + item.link), item.items && (item.items = addBase(item.items, base)), item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData(), is960 = useMediaQuery("(min-width: 960px)"), isOpen = ref(!1), _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar, relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  }), sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    JSON.stringify(next) !== JSON.stringify(prev) && (sidebar.value = _sidebar.value);
  });
  const hasSidebar = computed(() => frontmatter.value.sidebar !== !1 && sidebar.value.length > 0 && frontmatter.value.layout !== "home"), leftAside = computed(() => hasAside ? frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left" : !1), hasAside = computed(() => frontmatter.value.layout === "home" ? !1 : frontmatter.value.aside != null ? !!frontmatter.value.aside : theme2.value.aside !== !1), isSidebarEnabled = computed(() => hasSidebar.value && is960.value), sidebarGroups = computed(() => hasSidebar.value ? getSidebarGroups(sidebar.value) : []);
  function open() {
    isOpen.value = !0;
  }
  function close() {
    isOpen.value = !1;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  }), onMounted(() => {
    window.addEventListener("keyup", onEscape);
  }), onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    e.key === "Escape" && isOpen.value && (close(), triggerElement == null || triggerElement.focus());
  }
}
function useSidebarControl(item) {
  const { page } = useData(), collapsed = ref(!1), collapsible = computed(() => item.value.collapsed != null), isLink = computed(() => !!item.value.link), isActiveLink = ref(!1), updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hashRef], updateIsActiveLink), onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => isActiveLink.value ? !0 : item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : !1), hasChildren = computed(() => !!(item.value.items && item.value.items.length));
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  }), watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = !1);
  });
  function toggle() {
    collapsible.value && (collapsed.value = !collapsed.value);
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar(), is960 = useMediaQuery("(min-width: 960px)"), is1280 = useMediaQuery("(min-width: 1280px)");
  return {
    isAsideEnabled: computed(() => !is1280.value && !is960.value ? !1 : hasSidebar.value ? is1280.value : is960.value)
  };
}
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline == "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h) {
  let ret = "";
  for (const node of h.childNodes)
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor") || node.classList.contains("ignore-header"))
        continue;
      ret += node.textContent;
    } else
      node.nodeType === 3 && (ret += node.textContent);
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === !1)
    return [];
  const levelsRange = (typeof range == "object" && !Array.isArray(range) ? range.level : range) || 2, [high, low] = typeof levelsRange == "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h) => h.level >= high && h.level <= low), resolvedHeaders.length = 0;
  for (const { element, link } of headers)
    resolvedHeaders.push({ element, link });
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0)
        ret.push(cur);
      else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside(), onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink), window.addEventListener("scroll", onScroll);
  }), onUpdated(() => {
    activateLink(location.hash);
  }), onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value)
      return;
    const scrollY = window.scrollY, innerHeight = window.innerHeight, offsetHeight = document.body.offsetHeight, isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1, headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4)
        break;
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    prevActiveLink && prevActiveLink.classList.remove("active"), hash == null ? prevActiveLink = null : prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    const activeLink = prevActiveLink;
    activeLink ? (activeLink.classList.add("active"), marker.value.style.top = activeLink.offsetTop + 39 + "px", marker.value.style.opacity = "1") : (marker.value.style.top = "33px", marker.value.style.opacity = "0");
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  for (; element !== document.body; ) {
    if (element === null)
      return NaN;
    offsetTop += element.offsetTop, element = element.offsetParent;
  }
  return offsetTop;
}
const _hoisted_1$F = ["href", "title"], _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    function onClick({ target: el }) {
      const id = el.href.split("#")[1], heading = document.getElementById(decodeURIComponent(id));
      heading == null || heading.focus({ preventScroll: !0 });
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", !0);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["VPDocOutlineItem", _ctx.root ? "root" : "nested"])
      }, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.headers, ({ children, link, title }) => (openBlock(), createElementBlock("li", null, [
          createBaseVNode("a", {
            class: "outline-link",
            href: link,
            onClick,
            title
          }, toDisplayString(title), 9, _hoisted_1$F),
          children != null && children.length ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
            key: 0,
            headers: children
          }, null, 8, ["headers"])) : createCommentVNode("", !0)
        ]))), 256))
      ], 2);
    };
  }
}), VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-b933a997"]]), _withScopeId$g = (n) => (pushScopeId("data-v-935f8a84"), n = n(), popScopeId(), n), _hoisted_1$E = { class: "content" }, _hoisted_2$s = {
  class: "outline-title",
  role: "heading",
  "aria-level": "2"
}, _hoisted_3$j = { "aria-labelledby": "doc-outline-aria-label" }, _hoisted_4$b = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "doc-outline-aria-label"
}, " Table of Contents for current page ", -1)), _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData(), headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref(), marker = ref();
    return useActiveAnchor(container, marker), (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }]),
      ref_key: "container",
      ref: container,
      role: "navigation"
    }, [
      createBaseVNode("div", _hoisted_1$E, [
        createBaseVNode("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        createBaseVNode("div", _hoisted_2$s, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
        createBaseVNode("nav", _hoisted_3$j, [
          _hoisted_4$b,
          createVNode(VPDocOutlineItem, {
            headers: headers.value,
            root: !0
          }, null, 8, ["headers"])
        ])
      ])
    ], 2));
  }
}), VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-935f8a84"]]), _hoisted_1$D = { class: "VPDocAsideCarbonAds" }, _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$D, [
      createVNode(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, 8, ["carbon-ads"])
    ]));
  }
}), _withScopeId$f = (n) => (pushScopeId("data-v-3f215769"), n = n(), popScopeId(), n), _hoisted_1$C = { class: "VPDocAside" }, _hoisted_2$r = /* @__PURE__ */ _withScopeId$f(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer" }, null, -1)), _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$C, [
      renderSlot(_ctx.$slots, "aside-top", {}, void 0, !0),
      renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, !0),
      createVNode(VPDocAsideOutline),
      renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, !0),
      _hoisted_2$r,
      renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, !0),
      unref(theme2).carbonAds ? (openBlock(), createBlock(_sfc_main$Q, {
        key: 0,
        "carbon-ads": unref(theme2).carbonAds
      }, null, 8, ["carbon-ads"])) : createCommentVNode("", !0),
      renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, !0),
      renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, !0)
    ]));
  }
}), VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-3f215769"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    return typeof pattern == "function" ? url = pattern(page.value) : url = pattern.replace(/:path/g, page.value.filePath), { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath), candidates = getFlatSideBarLinks(sidebar), index = candidates.findIndex((link) => isActive(page.value.relativePath, link.link)), hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === !1 && !frontmatter.value.prev || frontmatter.value.prev === !1, hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === !1 && !frontmatter.value.next || frontmatter.value.next === !1;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev == "string" ? frontmatter.value.prev : typeof frontmatter.value.prev == "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev == "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next == "string" ? frontmatter.value.next : typeof frontmatter.value.next == "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next == "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props, tag = computed(() => props.tag ?? (props.href ? "a" : "span")), isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _cache) => (openBlock(), createBlock(resolveDynamicComponent(tag.value), {
      class: normalizeClass(["VPLink", {
        link: _ctx.href,
        "vp-external-link-icon": isExternal2.value,
        "no-icon": _ctx.noIcon
      }]),
      href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
      target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
      rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "href", "target", "rel"]));
  }
}), _hoisted_1$B = { class: "VPLastUpdated" }, _hoisted_2$q = ["datetime"], _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  setup(__props) {
    const { theme: theme2, page, frontmatter, lang } = useData(), date = computed(
      () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
    ), isoDatetime = computed(() => date.value.toISOString()), datetime = ref("");
    return onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          (_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) != null && _b.forceLocale ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    }), (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("p", _hoisted_1$B, [
        createTextVNode(toDisplayString(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated") + ": ", 1),
        createBaseVNode("time", { datetime: isoDatetime.value }, toDisplayString(datetime.value), 9, _hoisted_2$q)
      ]);
    };
  }
}), VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-7e05ebdb"]]), _withScopeId$e = (n) => (pushScopeId("data-v-09de1c0f"), n = n(), popScopeId(), n), _hoisted_1$A = {
  key: 0,
  class: "VPDocFooter"
}, _hoisted_2$p = {
  key: 0,
  class: "edit-info"
}, _hoisted_3$i = {
  key: 0,
  class: "edit-link"
}, _hoisted_4$a = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-square-pen edit-link-icon" }, null, -1)), _hoisted_5$9 = {
  key: 1,
  class: "last-updated"
}, _hoisted_6$7 = {
  key: 1,
  class: "prev-next"
}, _hoisted_7$5 = { class: "pager" }, _hoisted_8$4 = ["innerHTML"], _hoisted_9$2 = ["innerHTML"], _hoisted_10$2 = { class: "pager" }, _hoisted_11$1 = ["innerHTML"], _hoisted_12$1 = ["innerHTML"], _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData(), editLink = useEditLink(), control = usePrevNext(), hasEditLink = computed(() => theme2.value.editLink && frontmatter.value.editLink !== !1), hasLastUpdated = computed(() => page.value.lastUpdated && frontmatter.value.lastUpdated !== !1), showFooter = computed(() => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$A, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, !0),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$p, [
          hasEditLink.value ? (openBlock(), createElementBlock("div", _hoisted_3$i, [
            createVNode(_sfc_main$O, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": !0
            }, {
              default: withCtx(() => [
                _hoisted_4$a,
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", !0),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_5$9, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", !0)
        ])) : createCommentVNode("", !0),
        (_a = unref(control).prev) != null && _a.link || (_b = unref(control).next) != null && _b.link ? (openBlock(), createElementBlock("nav", _hoisted_6$7, [
          createBaseVNode("div", _hoisted_7$5, [
            (_c = unref(control).prev) != null && _c.link ? (openBlock(), createBlock(_sfc_main$O, {
              key: 0,
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"
                  }, null, 8, _hoisted_8$4),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).prev.text
                  }, null, 8, _hoisted_9$2)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", !0)
          ]),
          createBaseVNode("div", _hoisted_10$2, [
            (_d = unref(control).next) != null && _d.link ? (openBlock(), createBlock(_sfc_main$O, {
              key: 0,
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"
                  }, null, 8, _hoisted_11$1),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).next.text
                  }, null, 8, _hoisted_12$1)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", !0)
          ])
        ])) : createCommentVNode("", !0)
      ])) : createCommentVNode("", !0);
    };
  }
}), VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-09de1c0f"]]), _withScopeId$d = (n) => (pushScopeId("data-v-39a288b8"), n = n(), popScopeId(), n), _hoisted_1$z = { class: "container" }, _hoisted_2$o = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode("div", { class: "aside-curtain" }, null, -1)), _hoisted_3$h = { class: "aside-container" }, _hoisted_4$9 = { class: "aside-content" }, _hoisted_5$8 = { class: "content" }, _hoisted_6$6 = { class: "content-container" }, _hoisted_7$4 = { class: "main" }, _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const { theme: theme2 } = useData(), route = useRoute(), { hasSidebar, hasAside, leftAside } = useSidebar(), pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }])
      }, [
        renderSlot(_ctx.$slots, "doc-top", {}, void 0, !0),
        createBaseVNode("div", _hoisted_1$z, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }])
          }, [
            _hoisted_2$o,
            createBaseVNode("div", _hoisted_3$h, [
              createBaseVNode("div", _hoisted_4$9, [
                createVNode(VPDocAside, null, {
                  "aside-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-top", {}, void 0, !0)
                  ]),
                  "aside-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, !0)
                  ]),
                  "aside-outline-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, !0)
                  ]),
                  "aside-outline-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, !0)
                  ]),
                  "aside-ads-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, !0)
                  ]),
                  "aside-ads-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, !0)
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)) : createCommentVNode("", !0),
          createBaseVNode("div", _hoisted_5$8, [
            createBaseVNode("div", _hoisted_6$6, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, !0),
              createBaseVNode("main", _hoisted_7$4, [
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", [
                    pageName.value,
                    unref(theme2).externalLinkIcon && "external-link-icon-enabled"
                  ]])
                }, null, 8, ["class"])
              ]),
              createVNode(VPDocFooter, null, {
                "doc-footer-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, !0)
                ]),
                _: 3
              }),
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, !0)
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, !0)
      ], 2);
    };
  }
}), VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-39a288b8"]]), _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props, isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    ), component = computed(() => props.tag || props.href ? "a" : "button");
    return (_ctx, _cache) => (openBlock(), createBlock(resolveDynamicComponent(component.value), {
      class: normalizeClass(["VPButton", [_ctx.size, _ctx.theme]]),
      href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
      target: props.target ?? (isExternal2.value ? "_blank" : void 0),
      rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.text), 1)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
}), VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-cad61b99"]]), _hoisted_1$y = ["src", "alt"], _sfc_main$J = /* @__PURE__ */ defineComponent({
  inheritAttrs: !1,
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", !0);
      return _ctx.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof _ctx.image == "string" || "src" in _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "VPImage"
        }, typeof _ctx.image == "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof _ctx.image == "string" ? _ctx.image : _ctx.image.src),
          alt: _ctx.alt ?? (typeof _ctx.image == "string" ? "" : _ctx.image.alt || "")
        }), null, 16, _hoisted_1$y)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", !0);
    };
  }
}), VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-8426fc1a"]]), _withScopeId$c = (n) => (pushScopeId("data-v-303bb580"), n = n(), popScopeId(), n), _hoisted_1$x = { class: "container" }, _hoisted_2$n = { class: "main" }, _hoisted_3$g = {
  key: 0,
  class: "name"
}, _hoisted_4$8 = ["innerHTML"], _hoisted_5$7 = ["innerHTML"], _hoisted_6$5 = ["innerHTML"], _hoisted_7$3 = {
  key: 0,
  class: "actions"
}, _hoisted_8$3 = {
  key: 0,
  class: "image"
}, _hoisted_9$1 = { class: "image-container" }, _hoisted_10$1 = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode("div", { class: "image-bg" }, null, -1)), _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }])
    }, [
      createBaseVNode("div", _hoisted_1$x, [
        createBaseVNode("div", _hoisted_2$n, [
          renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, !0),
          renderSlot(_ctx.$slots, "home-hero-info", {}, () => [
            _ctx.name ? (openBlock(), createElementBlock("h1", _hoisted_3$g, [
              createBaseVNode("span", {
                innerHTML: _ctx.name,
                class: "clip"
              }, null, 8, _hoisted_4$8)
            ])) : createCommentVNode("", !0),
            _ctx.text ? (openBlock(), createElementBlock("p", {
              key: 1,
              innerHTML: _ctx.text,
              class: "text"
            }, null, 8, _hoisted_5$7)) : createCommentVNode("", !0),
            _ctx.tagline ? (openBlock(), createElementBlock("p", {
              key: 2,
              innerHTML: _ctx.tagline,
              class: "tagline"
            }, null, 8, _hoisted_6$5)) : createCommentVNode("", !0)
          ], !0),
          renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, !0),
          _ctx.actions ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
            (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => (openBlock(), createElementBlock("div", {
              key: action.link,
              class: "action"
            }, [
              createVNode(VPButton, {
                tag: "a",
                size: "medium",
                theme: action.theme,
                text: action.text,
                href: action.link,
                target: action.target,
                rel: action.rel
              }, null, 8, ["theme", "text", "href", "target", "rel"])
            ]))), 128))
          ])) : createCommentVNode("", !0),
          renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, !0)
        ]),
        _ctx.image || unref(heroImageSlotExists) ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
          createBaseVNode("div", _hoisted_9$1, [
            _hoisted_10$1,
            renderSlot(_ctx.$slots, "home-hero-image", {}, () => [
              _ctx.image ? (openBlock(), createBlock(VPImage, {
                key: 0,
                class: "image-src",
                image: _ctx.image
              }, null, 8, ["image"])) : createCommentVNode("", !0)
            ], !0)
          ])
        ])) : createCommentVNode("", !0)
      ])
    ], 2));
  }
}), VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-303bb580"]]), _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => unref(fm).hero ? (openBlock(), createBlock(VPHero, {
      key: 0,
      class: "VPHomeHero",
      name: unref(fm).hero.name,
      text: unref(fm).hero.text,
      tagline: unref(fm).hero.tagline,
      image: unref(fm).hero.image,
      actions: unref(fm).hero.actions
    }, {
      "home-hero-info-before": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-info-before")
      ]),
      "home-hero-info": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-info")
      ]),
      "home-hero-info-after": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-info-after")
      ]),
      "home-hero-actions-after": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-actions-after")
      ]),
      "home-hero-image": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-image")
      ]),
      _: 3
    }, 8, ["name", "text", "tagline", "image", "actions"])) : createCommentVNode("", !0);
  }
}), _withScopeId$b = (n) => (pushScopeId("data-v-a3976bdc"), n = n(), popScopeId(), n), _hoisted_1$w = { class: "box" }, _hoisted_2$m = {
  key: 0,
  class: "icon"
}, _hoisted_3$f = ["innerHTML"], _hoisted_4$7 = ["innerHTML"], _hoisted_5$6 = ["innerHTML"], _hoisted_6$4 = {
  key: 4,
  class: "link-text"
}, _hoisted_7$2 = { class: "link-text-value" }, _hoisted_8$2 = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-arrow-right link-text-icon" }, null, -1)), _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$O, {
      class: "VPFeature",
      href: _ctx.link,
      rel: _ctx.rel,
      target: _ctx.target,
      "no-icon": !0,
      tag: _ctx.link ? "a" : "div"
    }, {
      default: withCtx(() => [
        createBaseVNode("article", _hoisted_1$w, [
          typeof _ctx.icon == "object" && _ctx.icon.wrap ? (openBlock(), createElementBlock("div", _hoisted_2$m, [
            createVNode(VPImage, {
              image: _ctx.icon,
              alt: _ctx.icon.alt,
              height: _ctx.icon.height || 48,
              width: _ctx.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])
          ])) : typeof _ctx.icon == "object" ? (openBlock(), createBlock(VPImage, {
            key: 1,
            image: _ctx.icon,
            alt: _ctx.icon.alt,
            height: _ctx.icon.height || 48,
            width: _ctx.icon.width || 48
          }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: "icon",
            innerHTML: _ctx.icon
          }, null, 8, _hoisted_3$f)) : createCommentVNode("", !0),
          createBaseVNode("h2", {
            class: "title",
            innerHTML: _ctx.title
          }, null, 8, _hoisted_4$7),
          _ctx.details ? (openBlock(), createElementBlock("p", {
            key: 3,
            class: "details",
            innerHTML: _ctx.details
          }, null, 8, _hoisted_5$6)) : createCommentVNode("", !0),
          _ctx.linkText ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
            createBaseVNode("p", _hoisted_7$2, [
              createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
              _hoisted_8$2
            ])
          ])) : createCommentVNode("", !0)
        ])
      ]),
      _: 1
    }, 8, ["href", "rel", "target", "tag"]));
  }
}), VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-a3976bdc"]]), _hoisted_1$v = {
  key: 0,
  class: "VPFeatures"
}, _hoisted_2$l = { class: "container" }, _hoisted_3$e = { class: "items" }, _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props, grid = computed(() => {
      const length = props.features.length;
      if (length) {
        if (length === 2)
          return "grid-2";
        if (length === 3)
          return "grid-3";
        if (length % 3 === 0)
          return "grid-6";
        if (length > 3)
          return "grid-4";
      } else
        return;
    });
    return (_ctx, _cache) => _ctx.features ? (openBlock(), createElementBlock("div", _hoisted_1$v, [
      createBaseVNode("div", _hoisted_2$l, [
        createBaseVNode("div", _hoisted_3$e, [
          (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.features, (feature) => (openBlock(), createElementBlock("div", {
            key: feature.title,
            class: normalizeClass(["item", [grid.value]])
          }, [
            createVNode(VPFeature, {
              icon: feature.icon,
              title: feature.title,
              details: feature.details,
              link: feature.link,
              "link-text": feature.linkText,
              rel: feature.rel,
              target: feature.target
            }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])
          ], 2))), 128))
        ])
      ])
    ])) : createCommentVNode("", !0);
  }
}), VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-a6181336"]]), _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => unref(fm).features ? (openBlock(), createBlock(VPFeatures, {
      key: 0,
      class: "VPHomeFeatures",
      features: unref(fm).features
    }, null, 8, ["features"])) : createCommentVNode("", !0);
  }
}), _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  setup(__props) {
    const { width: vw } = useWindowSize({ includeScrollbar: !1 });
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: "vp-doc container",
      style: normalizeStyle(unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {})
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-82d4af08"]]), _hoisted_1$u = { class: "VPHome" }, _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0),
        createVNode(_sfc_main$H, null, {
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, !0)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, !0)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, !0)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, !0)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, !0)
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, !0),
        renderSlot(_ctx.$slots, "home-features-before", {}, void 0, !0),
        createVNode(_sfc_main$E),
        renderSlot(_ctx.$slots, "home-features-after", {}, void 0, !0),
        unref(frontmatter).markdownStyles !== !1 ? (openBlock(), createBlock(VPHomeContent, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_Content)
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_Content, { key: 1 }))
      ]);
    };
  }
}), VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-686f80a6"]]), _sfc_main$B = {}, _hoisted_1$t = { class: "VPPage" };
function _sfc_render$1(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$t, [
    renderSlot(_ctx.$slots, "page-top"),
    createVNode(_component_Content),
    renderSlot(_ctx.$slots, "page-bottom")
  ]);
}
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$1]]), _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const { page, frontmatter } = useData(), { hasSidebar } = useSidebar();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPContent", {
        "has-sidebar": unref(hasSidebar),
        "is-home": unref(frontmatter).layout === "home"
      }]),
      id: "VPContent"
    }, [
      unref(page).isNotFound ? renderSlot(_ctx.$slots, "not-found", { key: 0 }, () => [
        createVNode(NotFound)
      ], !0) : unref(frontmatter).layout === "page" ? (openBlock(), createBlock(VPPage, { key: 1 }, {
        "page-top": withCtx(() => [
          renderSlot(_ctx.$slots, "page-top", {}, void 0, !0)
        ]),
        "page-bottom": withCtx(() => [
          renderSlot(_ctx.$slots, "page-bottom", {}, void 0, !0)
        ]),
        _: 3
      })) : unref(frontmatter).layout === "home" ? (openBlock(), createBlock(VPHome, { key: 2 }, {
        "home-hero-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0)
        ]),
        "home-hero-info-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, !0)
        ]),
        "home-hero-info": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, !0)
        ]),
        "home-hero-info-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, !0)
        ]),
        "home-hero-actions-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, !0)
        ]),
        "home-hero-image": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, !0)
        ]),
        "home-hero-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, !0)
        ]),
        "home-features-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-features-before", {}, void 0, !0)
        ]),
        "home-features-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-features-after", {}, void 0, !0)
        ]),
        _: 3
      })) : unref(frontmatter).layout && unref(frontmatter).layout !== "doc" ? (openBlock(), createBlock(resolveDynamicComponent(unref(frontmatter).layout), { key: 3 })) : (openBlock(), createBlock(VPDoc, { key: 4 }, {
        "doc-top": withCtx(() => [
          renderSlot(_ctx.$slots, "doc-top", {}, void 0, !0)
        ]),
        "doc-bottom": withCtx(() => [
          renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, !0)
        ]),
        "doc-footer-before": withCtx(() => [
          renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, !0)
        ]),
        "doc-before": withCtx(() => [
          renderSlot(_ctx.$slots, "doc-before", {}, void 0, !0)
        ]),
        "doc-after": withCtx(() => [
          renderSlot(_ctx.$slots, "doc-after", {}, void 0, !0)
        ]),
        "aside-top": withCtx(() => [
          renderSlot(_ctx.$slots, "aside-top", {}, void 0, !0)
        ]),
        "aside-outline-before": withCtx(() => [
          renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, !0)
        ]),
        "aside-outline-after": withCtx(() => [
          renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, !0)
        ]),
        "aside-ads-before": withCtx(() => [
          renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, !0)
        ]),
        "aside-ads-after": withCtx(() => [
          renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, !0)
        ]),
        "aside-bottom": withCtx(() => [
          renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, !0)
        ]),
        _: 3
      }))
    ], 2));
  }
}), VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-1428d186"]]), _hoisted_1$s = { class: "container" }, _hoisted_2$k = ["innerHTML"], _hoisted_3$d = ["innerHTML"], _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme: theme2, frontmatter } = useData(), { hasSidebar } = useSidebar();
    return (_ctx, _cache) => unref(theme2).footer && unref(frontmatter).footer !== !1 ? (openBlock(), createElementBlock("footer", {
      key: 0,
      class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
    }, [
      createBaseVNode("div", _hoisted_1$s, [
        unref(theme2).footer.message ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: "message",
          innerHTML: unref(theme2).footer.message
        }, null, 8, _hoisted_2$k)) : createCommentVNode("", !0),
        unref(theme2).footer.copyright ? (openBlock(), createElementBlock("p", {
          key: 1,
          class: "copyright",
          innerHTML: unref(theme2).footer.copyright
        }, null, 8, _hoisted_3$d)) : createCommentVNode("", !0)
      ])
    ], 2)) : createCommentVNode("", !0);
  }
}), VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-e315a0ad"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData(), headers = shallowRef([]), hasLocalNav = computed(() => headers.value.length > 0);
  return onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  }), {
    headers,
    hasLocalNav
  };
}
const _withScopeId$a = (n) => (pushScopeId("data-v-d2ecc192"), n = n(), popScopeId(), n), _hoisted_1$r = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1)), _hoisted_2$j = { class: "header" }, _hoisted_3$c = { class: "outline" }, _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const props = __props, { theme: theme2 } = useData(), open = ref(!1), vh = ref(0), main = ref(), items = ref();
    onClickOutside(main, () => {
      open.value = !1;
    }), onKeyStroke("Escape", () => {
      open.value = !1;
    }), onContentUpdated(() => {
      open.value = !1;
    });
    function toggle() {
      open.value = !open.value, vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
    }
    function onItemClick(e) {
      e.target.classList.contains("outline-link") && (items.value && (items.value.style.transition = "none"), nextTick(() => {
        open.value = !1;
      }));
    }
    function scrollToTop() {
      open.value = !1, window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: "VPLocalNavOutlineDropdown",
      style: normalizeStyle({ "--vp-vh": vh.value + "px" }),
      ref_key: "main",
      ref: main
    }, [
      _ctx.headers.length > 0 ? (openBlock(), createElementBlock("button", {
        key: 0,
        onClick: toggle,
        class: normalizeClass({ open: open.value })
      }, [
        createTextVNode(toDisplayString(unref(resolveTitle)(unref(theme2))) + " ", 1),
        _hoisted_1$r
      ], 2)) : (openBlock(), createElementBlock("button", {
        key: 1,
        onClick: scrollToTop
      }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)),
      createVNode(Transition, { name: "flyout" }, {
        default: withCtx(() => [
          open.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "items",
            ref: items,
            class: "items",
            onClick: onItemClick
          }, [
            createBaseVNode("div", _hoisted_2$j, [
              createBaseVNode("a", {
                class: "top-link",
                href: "#",
                onClick: scrollToTop
              }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)
            ]),
            createBaseVNode("div", _hoisted_3$c, [
              createVNode(VPDocOutlineItem, { headers: _ctx.headers }, null, 8, ["headers"])
            ])
          ], 512)) : createCommentVNode("", !0)
        ]),
        _: 1
      })
    ], 4));
  }
}), VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-d2ecc192"]]), _withScopeId$9 = (n) => (pushScopeId("data-v-a6f0e41e"), n = n(), popScopeId(), n), _hoisted_1$q = { class: "container" }, _hoisted_2$i = ["aria-expanded"], _hoisted_3$b = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-align-left menu-icon" }, null, -1)), _hoisted_4$6 = { class: "menu-text" }, _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData(), { hasSidebar } = useSidebar(), { headers } = useLocalNav(), { y } = useWindowScroll(), navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    }), onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => headers.value.length === 0), emptyAndNoSidebar = computed(() => empty.value && !hasSidebar.value), classes = computed(() => ({
      VPLocalNav: !0,
      "has-sidebar": hasSidebar.value,
      empty: empty.value,
      fixed: emptyAndNoSidebar.value
    }));
    return (_ctx, _cache) => unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(classes.value)
    }, [
      createBaseVNode("div", _hoisted_1$q, [
        unref(hasSidebar) ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "menu",
          "aria-expanded": _ctx.open,
          "aria-controls": "VPSidebarNav",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
        }, [
          _hoisted_3$b,
          createBaseVNode("span", _hoisted_4$6, toDisplayString(unref(theme2).sidebarMenuLabel || "Menu"), 1)
        ], 8, _hoisted_2$i)) : createCommentVNode("", !0),
        createVNode(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, 8, ["headers", "navHeight"])
      ])
    ], 2)) : createCommentVNode("", !0);
  }
}), VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-a6f0e41e"]]);
function useNav() {
  const isScreenOpen = ref(!1);
  function openScreen() {
    isScreenOpen.value = !0, window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = !1, window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  return watch(() => route.path, closeScreen), {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$w = {}, _hoisted_1$p = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
}, _hoisted_2$h = { class: "check" }, _hoisted_3$a = {
  key: 0,
  class: "icon"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$p, [
    createBaseVNode("span", _hoisted_2$h, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$a, [
        renderSlot(_ctx.$slots, "default", {}, void 0, !0)
      ])) : createCommentVNode("", !0)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render], ["__scopeId", "data-v-1d5665e3"]]), _withScopeId$8 = (n) => (pushScopeId("data-v-d1f28634"), n = n(), popScopeId(), n), _hoisted_1$o = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-sun sun" }, null, -1)), _hoisted_2$g = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-moon moon" }, null, -1)), _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const { isDark, theme: theme2 } = useData(), toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    }), switchTitle = computed(() => isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme");
    return (_ctx, _cache) => (openBlock(), createBlock(VPSwitch, {
      title: switchTitle.value,
      class: "VPSwitchAppearance",
      "aria-checked": unref(isDark),
      onClick: unref(toggleAppearance)
    }, {
      default: withCtx(() => [
        _hoisted_1$o,
        _hoisted_2$g
      ]),
      _: 1
    }, 8, ["title", "aria-checked", "onClick"]));
  }
}), VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-d1f28634"]]), _hoisted_1$n = {
  key: 0,
  class: "VPNavBarAppearance"
}, _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$n, [
      createVNode(VPSwitchAppearance)
    ])) : createCommentVNode("", !0);
  }
}), VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-e6aabb21"]]), focusedElement = ref();
let active = !1, listeners = 0;
function useFlyout(options) {
  const focus = ref(!1);
  if (inBrowser) {
    !active && activateFocusTracking(), listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      el === options.el.value || (_a = options.el.value) != null && _a.contains(el) ? (focus.value = !0, (_b = options.onFocus) == null || _b.call(options)) : (focus.value = !1, (_c = options.onBlur) == null || _c.call(options));
    });
    onUnmounted(() => {
      unwatch(), listeners--, listeners || deactivateFocusTracking();
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn), active = !0, focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _hoisted_1$m = { class: "VPMenuLink" }, _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$m, [
      createVNode(_sfc_main$O, {
        class: normalizeClass({ active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) }),
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"])
    ]));
  }
}), VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-43f1e123"]]), _hoisted_1$l = { class: "VPMenuGroup" }, _hoisted_2$f = {
  key: 0,
  class: "title"
}, _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$l, [
      _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$f, toDisplayString(_ctx.text), 1)) : createCommentVNode("", !0),
      (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => (openBlock(), createElementBlock(Fragment, null, [
        "link" in item ? (openBlock(), createBlock(VPMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : createCommentVNode("", !0)
      ], 64))), 256))
    ]));
  }
}), VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-69e747b5"]]), _hoisted_1$k = { class: "VPMenu" }, _hoisted_2$e = {
  key: 0,
  class: "items"
}, _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$k, [
      _ctx.items ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => (openBlock(), createElementBlock(Fragment, {
          key: item.text
        }, [
          "link" in item ? (openBlock(), createBlock(VPMenuLink, {
            key: 0,
            item
          }, null, 8, ["item"])) : (openBlock(), createBlock(VPMenuGroup, {
            key: 1,
            text: item.text,
            items: item.items
          }, null, 8, ["text", "items"]))
        ], 64))), 128))
      ])) : createCommentVNode("", !0),
      renderSlot(_ctx.$slots, "default", {}, void 0, !0)
    ]));
  }
}), VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-e7ea1737"]]), _withScopeId$7 = (n) => (pushScopeId("data-v-b6c34ac9"), n = n(), popScopeId(), n), _hoisted_1$j = ["aria-expanded", "aria-label"], _hoisted_2$d = {
  key: 0,
  class: "text"
}, _hoisted_3$9 = ["innerHTML"], _hoisted_4$5 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1)), _hoisted_5$5 = {
  key: 1,
  class: "vpi-more-horizontal icon"
}, _hoisted_6$3 = { class: "menu" }, _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(!1), el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = !1;
    }
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: "VPFlyout",
      ref_key: "el",
      ref: el,
      onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = !0),
      onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = !1)
    }, [
      createBaseVNode("button", {
        type: "button",
        class: "button",
        "aria-haspopup": "true",
        "aria-expanded": open.value,
        "aria-label": _ctx.label,
        onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
      }, [
        _ctx.button || _ctx.icon ? (openBlock(), createElementBlock("span", _hoisted_2$d, [
          _ctx.icon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([_ctx.icon, "option-icon"])
          }, null, 2)) : createCommentVNode("", !0),
          _ctx.button ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: _ctx.button
          }, null, 8, _hoisted_3$9)) : createCommentVNode("", !0),
          _hoisted_4$5
        ])) : (openBlock(), createElementBlock("span", _hoisted_5$5))
      ], 8, _hoisted_1$j),
      createBaseVNode("div", _hoisted_6$3, [
        createVNode(VPMenu, { items: _ctx.items }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["items"])
      ])
    ], 544));
  }
}), VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-b6c34ac9"]]), _hoisted_1$i = ["href", "aria-label", "innerHTML"], _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props, svg = computed(() => typeof props.icon == "object" ? props.icon.svg : `<span class="vpi-social-${props.icon}" />`);
    return (_ctx, _cache) => (openBlock(), createElementBlock("a", {
      class: "VPSocialLink no-icon",
      href: _ctx.link,
      "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon == "string" ? _ctx.icon : ""),
      target: "_blank",
      rel: "noopener",
      innerHTML: svg.value
    }, null, 8, _hoisted_1$i));
  }
}), VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-eee4e7cb"]]), _hoisted_1$h = { class: "VPSocialLinks" }, _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$h, [
      (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.links, ({ link, icon, ariaLabel }) => (openBlock(), createBlock(VPSocialLink, {
        key: link,
        icon,
        link,
        ariaLabel
      }, null, 8, ["icon", "link", "ariaLabel"]))), 128))
    ]));
  }
}), VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-7bc22406"]]), _hoisted_1$g = {
  key: 0,
  class: "group translations"
}, _hoisted_2$c = { class: "trans-title" }, _hoisted_3$8 = {
  key: 1,
  class: "group"
}, _hoisted_4$4 = { class: "item appearance" }, _hoisted_5$4 = { class: "label" }, _hoisted_6$2 = { class: "appearance-action" }, _hoisted_7$1 = {
  key: 2,
  class: "group"
}, _hoisted_8$1 = { class: "item social-links" }, _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { localeLinks, currentLang } = useLangs({ correspondingLink: !0 }), hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _cache) => hasExtraContent.value ? (openBlock(), createBlock(VPFlyout, {
      key: 0,
      class: "VPNavBarExtra",
      label: "extra navigation"
    }, {
      default: withCtx(() => [
        unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
          createBaseVNode("p", _hoisted_2$c, toDisplayString(unref(currentLang).label), 1),
          (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createBlock(VPMenuLink, {
            key: locale.link,
            item: locale
          }, null, 8, ["item"]))), 128))
        ])) : createCommentVNode("", !0),
        unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
          createBaseVNode("div", _hoisted_4$4, [
            createBaseVNode("p", _hoisted_5$4, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
            createBaseVNode("div", _hoisted_6$2, [
              createVNode(VPSwitchAppearance)
            ])
          ])
        ])) : createCommentVNode("", !0),
        unref(theme2).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createVNode(VPSocialLinks, {
              class: "social-links-list",
              links: unref(theme2).socialLinks
            }, null, 8, ["links"])
          ])
        ])) : createCommentVNode("", !0)
      ]),
      _: 1
    })) : createCommentVNode("", !0);
  }
}), VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d0bd9dde"]]), _withScopeId$6 = (n) => (pushScopeId("data-v-e5dd9c1c"), n = n(), popScopeId(), n), _hoisted_1$f = ["aria-expanded"], _hoisted_2$b = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("span", { class: "container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "bottom" })
], -1)), _hoisted_3$7 = [
  _hoisted_2$b
], _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: normalizeClass(["VPNavBarHamburger", { active: _ctx.active }]),
      "aria-label": "mobile navigation",
      "aria-expanded": _ctx.active,
      "aria-controls": "VPNavScreen",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, _hoisted_3$7, 10, _hoisted_1$f));
  }
}), VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-e5dd9c1c"]]), _hoisted_1$e = ["innerHTML"], _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$O, {
      class: normalizeClass({
        VPNavBarMenuLink: !0,
        active: unref(isActive)(
          unref(page).relativePath,
          _ctx.item.activeMatch || _ctx.item.link,
          !!_ctx.item.activeMatch
        )
      }),
      href: _ctx.item.link,
      target: _ctx.item.target,
      rel: _ctx.item.rel,
      tabindex: "0"
    }, {
      default: withCtx(() => [
        createBaseVNode("span", {
          innerHTML: _ctx.item.text
        }, null, 8, _hoisted_1$e)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
}), VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-42ef59de"]]), _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props, { page } = useData(), isChildActive = (navItem) => "link" in navItem ? isActive(
      page.value.relativePath,
      navItem.link,
      !!props.item.activeMatch
    ) : navItem.items.some(isChildActive), childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _cache) => (openBlock(), createBlock(VPFlyout, {
      class: normalizeClass({
        VPNavBarMenuGroup: !0,
        active: unref(isActive)(
          unref(page).relativePath,
          _ctx.item.activeMatch,
          !!_ctx.item.activeMatch
        ) || childrenActive.value
      }),
      button: _ctx.item.text,
      items: _ctx.item.items
    }, null, 8, ["class", "button", "items"]));
  }
}), _withScopeId$5 = (n) => (pushScopeId("data-v-7f418b0f"), n = n(), popScopeId(), n), _hoisted_1$d = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
}, _hoisted_2$a = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1)), _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$d, [
      _hoisted_2$a,
      (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => (openBlock(), createElementBlock(Fragment, {
        key: item.text
      }, [
        "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$k, {
          key: 1,
          item
        }, null, 8, ["item"]))
      ], 64))), 128))
    ])) : createCommentVNode("", !0);
  }
}), VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7f418b0f"]]), _imports_0 = "/assets/flex-logo.BJA2J7hW.svg";
function parse_option(a, b) {
  return typeof a > "u" ? b : a;
}
function create_object_array(a) {
  const b = Array(a);
  for (let c = 0; c < a; c++)
    b[c] = create_object();
  return b;
}
function get_keys(a) {
  return Object.keys(a);
}
function create_object() {
  return /* @__PURE__ */ Object.create(null);
}
function concat(a) {
  return [].concat.apply([], a);
}
function sort_by_length_down(c, a) {
  return a.length - c.length;
}
function is_array(a) {
  return a.constructor === Array;
}
function is_string(a) {
  return typeof a == "string";
}
function is_object(a) {
  return typeof a == "object";
}
function is_function(a) {
  return typeof a == "function";
}
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || c === "")) {
    const b2 = a.split(c);
    return this.filter ? filter(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
function init_filter(a) {
  const b = create_object();
  for (let c = 0, d = a.length; c < d; c++)
    b[a[c]] = 1;
  return b;
}
function init_stemmer_or_matcher(a, b) {
  const c = get_keys(a), d = c.length, e = [];
  let f = "", g = 0;
  for (let h, j, k = 0; k < d; k++)
    h = c[k], j = a[h], j ? (e[g++] = regex(b ? "(?!\\b)" + h + "(\\b|_)" : h), e[g++] = j) : f += (f ? "|" : "") + h;
  return f && (e[g++] = regex(b ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = ""), e;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
function encode(a) {
  return pipeline.call(this, ("" + a).toLowerCase(), !1, regex_whitespace, !1);
}
const global_lang = {}, global_charset = {};
function apply_async(a) {
  register(a, "add"), register(a, "append"), register(a, "search"), register(a, "update"), register(a, "remove");
}
function register(a, b) {
  a[b + "Async"] = function() {
    const a2 = this, c = arguments, d = c[c.length - 1];
    let e;
    is_function(d) && (e = d, delete c[c.length - 1]);
    const f = new Promise(function(d2) {
      setTimeout(function() {
        a2.async = !0;
        const e2 = a2[b].apply(a2, c);
        a2.async = !1, d2(e2);
      });
    });
    return e ? (f.then(e), this) : f;
  };
}
function intersect(a, b, c, d) {
  const e = a.length;
  let f, g, h = [], i = 0;
  d && (d = []);
  for (let j = e - 1; 0 <= j; j--) {
    const k = a[j], l = k.length, m = create_object();
    let n = !f;
    for (let a2 = 0; a2 < l; a2++) {
      const l2 = k[a2], o = l2.length;
      if (o)
        for (let a3, k2, p = 0; p < o; p++)
          if (k2 = l2[p], f) {
            if (f[k2]) {
              if (!j) {
                if (c)
                  c--;
                else if (h[i++] = k2, i === b)
                  return h;
              }
              (j || d) && (m[k2] = 1), n = !0;
            }
            if (d && (g[k2] = (a3 = g[k2]) ? ++a3 : a3 = 1, a3 < e)) {
              const b2 = d[a3 - 2] || (d[a3 - 2] = []);
              b2[b2.length] = k2;
            }
          } else
            m[k2] = 1;
    }
    if (d)
      f || (g = m);
    else if (!n)
      return [];
    f = m;
  }
  if (d)
    for (let a2, e2, g2 = d.length - 1; 0 <= g2; g2--) {
      a2 = d[g2], e2 = a2.length;
      for (let d2, g3 = 0; g3 < e2; g3++)
        if (d2 = a2[g3], !f[d2]) {
          if (c)
            c--;
          else if (h[i++] = d2, i === b)
            return h;
          f[d2] = 1;
        }
    }
  return h;
}
function CacheClass(a) {
  this.limit = a !== !0 && a, this.cache = create_object(), this.queue = [];
}
function searchCache(a, b, c) {
  is_object(a) && (a = a.query);
  let d = this.cache.get(a);
  return d || (d = this.search(a, b, c), this.cache.set(a, d)), d;
}
CacheClass.prototype.set = function(a, b) {
  if (!this.cache[a]) {
    let b2 = this.queue.length;
    b2 === this.limit ? delete this.cache[this.queue[b2 - 1]] : b2++;
    for (let a2 = b2 - 1; 0 < a2; a2--)
      this.queue[a2] = this.queue[a2 - 1];
    this.queue[0] = a;
  }
  this.cache[a] = b;
}, CacheClass.prototype.get = function(a) {
  const b = this.cache[a];
  if (this.limit && b) {
    const b2 = this.queue.indexOf(a);
    if (b2) {
      const a2 = this.queue[b2 - 1];
      this.queue[b2 - 1] = this.queue[b2], this.queue[b2] = a2;
    }
  }
  return b;
}, CacheClass.prototype.del = function(a) {
  for (let b, c, d = 0; d < this.queue.length; d++)
    c = this.queue[d], b = this.cache[c], b.indexOf(a) !== -1 && (this.queue.splice(d--, 1), delete this.cache[c]);
};
const preset = { memory: { charset: "latin:extra", resolution: 3, minlength: 4, fastupdate: !1 }, performance: { resolution: 3, minlength: 3, optimize: !1, context: { depth: 2, resolution: 1 } }, match: { charset: "latin:extra", tokenize: "reverse" }, score: { charset: "latin:advanced", resolution: 20, minlength: 3, context: { depth: 3, resolution: 9 } }, default: {} };
function apply_preset(a) {
  if (is_string(a))
    a = preset[a];
  else {
    const b = a.preset;
    b && (a = Object.assign({}, b[b], a));
  }
  return a;
}
function async(a, b, c, d, e, f) {
  setTimeout(function() {
    const g = a(c, JSON.stringify(f));
    g && g.then ? g.then(function() {
      b.export(a, b, c, d, e + 1);
    }) : b.export(a, b, c, d, e + 1);
  });
}
function exportIndex(a, b, c, d, e) {
  let f, g;
  switch (e || (e = 0)) {
    case 0:
      if (f = "reg", this.fastupdate)
        for (let a2 in g = create_object(), this.register)
          g[a2] = 1;
      else
        g = this.register;
      break;
    case 1:
      f = "cfg", g = { doc: 0, opt: this.optimize ? 1 : 0 };
      break;
    case 2:
      f = "map", g = this.map;
      break;
    case 3:
      f = "ctx", g = this.ctx;
      break;
    default:
      return;
  }
  return async(a, b || this, c ? c + "." + f : f, d, e, g), !0;
}
function importIndex(a, b) {
  b && (is_string(b) && (b = JSON.parse(b)), a === "cfg" ? this.optimize = !!b.opt : a === "reg" ? (this.fastupdate = !1, this.register = b) : a === "map" ? this.map = b : a === "ctx" && (this.ctx = b));
}
function Index(a, b) {
  if (!(this instanceof Index))
    return new Index(a);
  let c, d, e;
  a ? (a = apply_preset(a), c = a.charset, d = a.lang, is_string(c) && (c.indexOf(":") === -1 && (c += ":default"), c = global_charset[c]), is_string(d) && (d = global_lang[d])) : a = {};
  let f, g, h = a.context || {};
  this.encode = a.encode || c && c.encode || encode, this.register = b || create_object(), this.resolution = f = a.resolution || 9, this.tokenize = e = c && c.tokenize || a.tokenize || "strict", this.depth = e === "strict" && h.depth, this.bidirectional = parse_option(h.bidirectional, !0), this.optimize = g = parse_option(a.optimize, !0), this.fastupdate = parse_option(a.fastupdate, !0), this.minlength = a.minlength || 1, this.boost = a.boost, this.map = g ? create_object_array(f) : create_object(), this.resolution_ctx = f = h.resolution || 1, this.ctx = g ? create_object_array(f) : create_object(), this.rtl = c && c.rtl || a.rtl, this.matcher = (e = a.matcher || d && d.matcher) && init_stemmer_or_matcher(e, !1), this.stemmer = (e = a.stemmer || d && d.stemmer) && init_stemmer_or_matcher(e, !0), this.filter = (e = a.filter || d && d.filter) && init_filter(e), this.cache = (e = a.cache) && new CacheClass(e);
}
Index.prototype.append = function(a, b) {
  return this.add(a, b, !0);
}, Index.prototype.add = function(a, b, c, d) {
  if (b && (a || a === 0)) {
    if (!d && !c && this.register[a])
      return this.update(a, b);
    b = this.encode(b);
    const e = b.length;
    if (e) {
      const d2 = create_object(), f = create_object(), g = this.depth, h = this.resolution;
      for (let j = 0; j < e; j++) {
        let i = b[this.rtl ? e - 1 - j : j], k = i.length;
        if (i && k >= this.minlength && (g || !f[i])) {
          let l = get_score(h, e, j), m = "";
          switch (this.tokenize) {
            case "full":
              if (3 < k) {
                for (let b2 = 0; b2 < k; b2++)
                  for (let d3 = k; d3 > b2; d3--)
                    if (d3 - b2 >= this.minlength) {
                      const g2 = get_score(h, e, j, k, b2);
                      m = i.substring(b2, d3), this.push_index(f, m, g2, a, c);
                    }
                break;
              }
            case "reverse":
              if (2 < k) {
                for (let b2 = k - 1; 0 < b2; b2--)
                  if (m = i[b2] + m, m.length >= this.minlength) {
                    const d3 = get_score(h, e, j, k, b2);
                    this.push_index(f, m, d3, a, c);
                  }
                m = "";
              }
            case "forward":
              if (1 < k) {
                for (let b2 = 0; b2 < k; b2++)
                  m += i[b2], m.length >= this.minlength && this.push_index(f, m, l, a, c);
                break;
              }
            default:
              if (this.boost && (l = Math.min(0 | l / this.boost(b, i, j), h - 1)), this.push_index(f, i, l, a, c), g && 1 < e && j < e - 1) {
                const f2 = create_object(), h2 = this.resolution_ctx, k2 = i, l2 = Math.min(g + 1, e - j);
                f2[k2] = 1;
                for (let g2 = 1; g2 < l2; g2++)
                  if (i = b[this.rtl ? e - 1 - j - g2 : j + g2], i && i.length >= this.minlength && !f2[i]) {
                    f2[i] = 1;
                    const b2 = get_score(h2 + (e / 2 > h2 ? 0 : 1), e, j, l2 - 1, g2 - 1), m2 = this.bidirectional && i > k2;
                    this.push_index(d2, m2 ? k2 : i, b2, a, c, m2 ? i : k2);
                  }
              }
          }
        }
      }
      this.fastupdate || (this.register[a] = 1);
    }
  }
  return this;
};
function get_score(a, b, c, d, e) {
  return c && 1 < a ? b + (d || 0) <= a ? c + (e || 0) : 0 | (a - 1) / (b + (d || 0)) * (c + (e || 0)) + 1 : 0;
}
Index.prototype.push_index = function(a, b, c, d, e, f) {
  let g = f ? this.ctx : this.map;
  if ((!a[b] || f && !a[b][f]) && (this.optimize && (g = g[c]), f ? (a = a[b] || (a[b] = create_object()), a[f] = 1, g = g[f] || (g[f] = create_object())) : a[b] = 1, g = g[b] || (g[b] = []), this.optimize || (g = g[c] || (g[c] = [])), (!e || g.indexOf(d) === -1) && (g[g.length] = d, this.fastupdate))) {
    const a2 = this.register[d] || (this.register[d] = []);
    a2[a2.length] = g;
  }
}, Index.prototype.search = function(a, b, c) {
  c || (!b && is_object(a) ? (c = a, a = c.query) : is_object(b) && (c = b));
  let d, e, f, g = [], h = 0;
  if (c && (b = c.limit, h = c.offset || 0, e = c.context, f = c.suggest), a && (a = this.encode(a), d = a.length, 1 < d)) {
    const b2 = create_object(), c2 = [];
    for (let e2, h2 = 0, i2 = 0; h2 < d; h2++)
      if (e2 = a[h2], e2 && e2.length >= this.minlength && !b2[e2]) {
        if (!this.optimize && !f && !this.map[e2])
          return g;
        c2[i2++] = e2, b2[e2] = 1;
      }
    a = c2, d = a.length;
  }
  if (!d)
    return g;
  b || (b = 100);
  let i, j = this.depth && 1 < d && e !== !1, k = 0;
  j ? (i = a[0], k = 1) : 1 < d && a.sort(sort_by_length_down);
  for (let e2, l; k < d; k++) {
    if (l = a[k], j ? (e2 = this.add_result(g, f, b, h, d === 2, l, i), (!f || e2 !== !1 || !g.length) && (i = l)) : e2 = this.add_result(g, f, b, h, d === 1, l), e2)
      return e2;
    if (f && k == d - 1) {
      let a2 = g.length;
      if (!a2) {
        if (j) {
          j = 0, k = -1;
          continue;
        }
        return g;
      }
      if (a2 === 1)
        return single_result(g[0], b, h);
    }
  }
  return intersect(g, b, h, f);
}, Index.prototype.add_result = function(a, b, c, d, e, f, g) {
  let h = [], i = g ? this.ctx : this.map;
  if (this.optimize || (i = get_array(i, f, g, this.bidirectional)), i) {
    let b2 = 0;
    const j = Math.min(i.length, g ? this.resolution_ctx : this.resolution);
    for (let a2, k, l = 0, m = 0; l < j && (a2 = i[l], !(a2 && (this.optimize && (a2 = get_array(a2, f, g, this.bidirectional)), d && a2 && e && (k = a2.length, k <= d ? (d -= k, a2 = null) : (a2 = a2.slice(d), d = 0)), a2 && (h[b2++] = a2, e && (m += a2.length, m >= c))))); l++)
      ;
    if (b2)
      return e ? single_result(h, c, 0) : void (a[a.length] = h);
  }
  return !b && h;
};
function single_result(a, b, c) {
  return a = a.length === 1 ? a[0] : concat(a), c || a.length > b ? a.slice(c, c + b) : a;
}
function get_array(a, b, c, d) {
  if (c) {
    const e = d && b > c;
    a = a[e ? b : c], a = a && a[e ? c : b];
  } else
    a = a[b];
  return a;
}
Index.prototype.contain = function(a) {
  return !!this.register[a];
}, Index.prototype.update = function(a, b) {
  return this.remove(a).add(a, b);
}, Index.prototype.remove = function(a, b) {
  const c = this.register[a];
  if (c) {
    if (this.fastupdate)
      for (let b2, d = 0; d < c.length; d++)
        b2 = c[d], b2.splice(b2.indexOf(a), 1);
    else
      remove_index(this.map, a, this.resolution, this.optimize), this.depth && remove_index(this.ctx, a, this.resolution_ctx, this.optimize);
    b || delete this.register[a], this.cache && this.cache.del(a);
  }
  return this;
};
function remove_index(a, b, c, d, e) {
  let f = 0;
  if (is_array(a))
    if (e) {
      const c2 = a.indexOf(b);
      c2 === -1 ? f++ : 1 < a.length && (a.splice(c2, 1), f++);
    } else {
      e = Math.min(a.length, c);
      for (let g, h = 0; h < e; h++)
        g = a[h], g && (f = remove_index(g, b, c, d, e), !d && !f && delete a[h]);
    }
  else
    for (let g in a)
      f = remove_index(a[g], b, c, d, e), f || delete a[g];
  return f;
}
Index.prototype.searchCache = searchCache, Index.prototype.export = exportIndex, Index.prototype.import = importIndex, apply_async(Index.prototype);
const _hoisted_1$c = { class: "VPNavBarSearch" }, _hoisted_2$9 = { class: "DocSearch-Form" }, _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("label", {
  class: "DocSearch-MagnifierLabel",
  for: "docsearch-input",
  id: "docsearch-label"
}, [
  /* @__PURE__ */ createBaseVNode("svg", {
    width: "20",
    height: "20",
    class: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
      stroke: "currentColor",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  ])
], -1), _hoisted_4$3 = ["placeholder"], _hoisted_5$3 = { class: "VPPluginSearch-search-list" }, _hoisted_6$1 = { class: "VPPluginSearch-search-group" }, _hoisted_7 = ["href", "onMouseenter", "id"], _hoisted_8 = { class: "VPPluginSearch-search-item" }, _hoisted_9 = { class: "VPPluginSearch-search-item-icon" }, _hoisted_10 = { style: { width: "100%" } }, _hoisted_11 = ["innerHTML"], _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "VPPluginSearch-search-item-icon" }, "↪", -1), _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  class: "VPPluginSearch-flex-logo",
  src: _imports_0,
  alt: "flex logo"
}, null, -1), _hoisted_14 = {
  type: "button",
  class: "DocSearch DocSearch-Button",
  "aria-label": "Search"
}, _hoisted_15 = { class: "DocSearch-Button-Container" }, _hoisted_16 = /* @__PURE__ */ createBaseVNode("svg", {
  width: "20",
  height: "20",
  class: "DocSearch-Search-Icon",
  viewBox: "0 0 20 20"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
    stroke: "currentColor",
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), _hoisted_17 = { class: "DocSearch-Button-Placeholder" }, _hoisted_18 = { class: "DocSearch-Button-Keys" }, _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Key" }, "K", -1), _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Search",
  setup(__props) {
    const VPData = useData$1(), locale = VPData.localeIndex || VPData.localePath, metaKey = ref(), open = ref(!1), searchTerm = ref(), origin = ref(""), input = ref(), INDEX_DATA = ref(), PREVIEW_LOOKUP = ref(), Options = ref(), searchIndex = ref(), buttonLabel = ref("Search"), placeholder = ref("Search docs"), focused = ref(0), modal = ref(), router = useRouter(), result = computed(() => {
      if (searchTerm.value) {
        for (var searchResults = searchIndex.value.search(searchTerm.value, { enrich: !0 }), search = [], i = 0; i < searchResults.length; i++) {
          var id = searchResults[i], item = PREVIEW_LOOKUP.value[id], title = item.t, preview = item.p, link = item.l, anchor = item.a;
          link = link.split(" ").join("-"), search.push({ id: i, link, title, preview, anchor });
        }
        return search;
      }
    }), GroupBy = (array, func) => !array || !array.length ? [] : array.reduce((acc, value) => (acc[func(value)] || (acc[func(value)] = []), acc[func(value)].push(value), acc), {}), openSearch = () => {
      setTimeout(() => {
        input.value && input.value.focus();
      }, 100), cleanSearch(), open.value = !0;
    };
    onMounted(async () => {
      var _a, _b;
      const data = await __vitePreload(() => import("./virtual_search-data.D0u32SRz.js"), __vite__mapDeps([]));
      INDEX_DATA.value = data.default.INDEX_DATA, PREVIEW_LOOKUP.value = data.default.PREVIEW_LOOKUP, Options.value = data.default.Options, origin.value = window.location.origin + withBase(locale.value === "root" ? "/" : locale.value), buttonLabel.value = ((_a = Options.value) == null ? void 0 : _a.buttonLabel) || buttonLabel.value, placeholder.value = ((_b = Options.value) == null ? void 0 : _b.placeholder) || placeholder.value;
      var document2 = new Index(Options.value);
      document2.import("reg", INDEX_DATA.value.reg), document2.import("cfg", INDEX_DATA.value.cfg), document2.import("map", INDEX_DATA.value.map), document2.import("ctx", INDEX_DATA.value.ctx), searchIndex.value = document2, metaKey.value.innerHTML = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl";
      const handleSearchHotKey = (e) => {
        var _a2;
        e.key === "k" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), openSearch()), e.key === "Escape" && ((_a2 = searchTerm.value) == null ? void 0 : _a2.length) == 0 && open.value && (open.value = !1);
      };
      window.addEventListener("keydown", handleSearchHotKey);
    });
    const groupedResults = computed(() => GroupBy(
      result.value,
      (x) => x.link.split("/").slice(0, -1).join("-")
    )), linksOrder = computed(() => Object.values(groupedResults.value).flat().map((i) => i.id));
    function cleanSearch() {
      open.value = !1, searchTerm.value = "";
    }
    const handleNavigation = (e) => {
      var _a, _b;
      if (document.getElementsByClassName("search-group")[0]) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
          const currentIndex = linksOrder.value.indexOf(focused.value);
          if (e.key == "ArrowUp") {
            const previousIndex = currentIndex == 0 ? linksOrder.value.length - 1 : currentIndex - 1;
            focused.value = linksOrder.value[previousIndex];
          }
          if (e.key == "ArrowDown") {
            const nextIndex = currentIndex > linksOrder.value.length - 2 ? 0 : currentIndex + 1;
            focused.value = linksOrder.value[nextIndex];
          }
          if (currentIndex < 5) {
            const el = modal.value.getElementsByClassName("VPPluginSearch-search-group")[0];
            el == null || el.scrollIntoView(!0);
          } else
            (_a = document.getElementById(linksOrder.value[focused.value])) == null || _a.scrollIntoView(!0);
          nextTick();
        }
        e.key == "Enter" && router.go(VPData.site.value.base + ((_b = modal.value.getElementsByClassName("link-focused")[0].getAttribute("href")) == null ? void 0 : _b.replace(origin.value, "")));
      }
    };
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(_component_ClientOnly, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(Teleport, { to: "body" }, [
              withDirectives(createBaseVNode("div", {
                class: "VPPluginSearch-modal-back",
                onClick: _cache[2] || (_cache[2] = ($event) => open.value = !1),
                onKeydown: handleNavigation
              }, [
                createBaseVNode("div", {
                  class: "VPPluginSearch-modal",
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"])),
                  ref_key: "modal",
                  ref: modal
                }, [
                  createBaseVNode("form", _hoisted_2$9, [
                    _hoisted_3$6,
                    withDirectives(createBaseVNode("input", {
                      class: "DocSearch-Input",
                      "aria-autocomplete": "both",
                      "aria-labelledby": "docsearch-label",
                      id: "docsearch-input",
                      autocomplete: "off",
                      autocorrect: "off",
                      autocapitalize: "off",
                      enterkeyhint: "search",
                      spellcheck: "false",
                      autofocus: "true",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchTerm.value = $event),
                      placeholder: placeholder.value,
                      maxlength: "64",
                      type: "search",
                      ref_key: "input",
                      ref: input
                    }, null, 8, _hoisted_4$3), [
                      [vModelText, searchTerm.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_5$3, [
                    (openBlock(!0), createElementBlock(Fragment, null, renderList(groupedResults.value, (group, groupKey) => (openBlock(), createElementBlock("div", {
                      class: "search-group",
                      key: groupKey
                    }, [
                      createBaseVNode("span", _hoisted_6$1, toDisplayString(groupKey ? groupKey.toString()[0].toUpperCase() + groupKey.toString().slice(1) : "Home"), 1),
                      (openBlock(!0), createElementBlock(Fragment, null, renderList(group, (item, index) => (openBlock(), createElementBlock("a", {
                        href: origin.value + item.link,
                        key: item.id,
                        onClick: cleanSearch,
                        onMouseenter: ($event) => focused.value = item.id,
                        class: normalizeClass({ "link-focused": focused.value == item.id }),
                        id: index.toString()
                      }, [
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("span", _hoisted_9, toDisplayString(item.link.includes("#") ? "#" : "▤"), 1),
                          createBaseVNode("div", _hoisted_10, [
                            createBaseVNode("h3", null, toDisplayString(item.title), 1),
                            createBaseVNode("p", null, [
                              createBaseVNode("div", {
                                innerHTML: item.preview
                              }, null, 8, _hoisted_11)
                            ])
                          ]),
                          _hoisted_12
                        ])
                      ], 42, _hoisted_7))), 128))
                    ]))), 128))
                  ]),
                  _hoisted_13
                ], 512)
              ], 544), [
                [vShow, open.value]
              ])
            ]))
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          id: "docsearch",
          onClick: _cache[3] || (_cache[3] = ($event) => openSearch())
        }, [
          createBaseVNode("button", _hoisted_14, [
            createBaseVNode("span", _hoisted_15, [
              _hoisted_16,
              createBaseVNode("span", _hoisted_17, toDisplayString(buttonLabel.value), 1)
            ]),
            createBaseVNode("span", _hoisted_18, [
              createBaseVNode("span", {
                class: "DocSearch-Button-Key",
                ref_key: "metaKey",
                ref: metaKey
              }, "Meta", 512),
              _hoisted_19
            ])
          ])
        ])
      ]);
    };
  }
}), _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
      key: 0,
      class: "VPNavBarSocialLinks",
      links: unref(theme2).socialLinks
    }, null, 8, ["links"])) : createCommentVNode("", !0);
  }
}), VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-0394ad82"]]), _hoisted_1$b = ["href", "rel", "target"], _hoisted_2$8 = { key: 1 }, _hoisted_3$5 = { key: 2 }, _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { hasSidebar } = useSidebar(), { currentLang } = useLangs(), link = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink == "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    ), rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink == "string" || (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    ), target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink == "string" || (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
    }, [
      createBaseVNode("a", {
        class: "title",
        href: link.value ?? unref(normalizeLink$1)(unref(currentLang).link),
        rel: rel.value,
        target: target.value
      }, [
        renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, !0),
        unref(theme2).logo ? (openBlock(), createBlock(VPImage, {
          key: 0,
          class: "logo",
          image: unref(theme2).logo
        }, null, 8, ["image"])) : createCommentVNode("", !0),
        unref(theme2).siteTitle ? (openBlock(), createElementBlock("span", _hoisted_2$8, toDisplayString(unref(theme2).siteTitle), 1)) : unref(theme2).siteTitle === void 0 ? (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString(unref(site).title), 1)) : createCommentVNode("", !0),
        renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, !0)
      ], 8, _hoisted_1$b)
    ], 2));
  }
}), VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-ab179fa1"]]), _hoisted_1$a = { class: "items" }, _hoisted_2$7 = { class: "title" }, _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { theme: theme2 } = useData(), { localeLinks, currentLang } = useLangs({ correspondingLink: !0 });
    return (_ctx, _cache) => unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock(VPFlyout, {
      key: 0,
      class: "VPNavBarTranslations",
      icon: "vpi-languages",
      label: unref(theme2).langMenuLabel || "Change language"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("p", _hoisted_2$7, toDisplayString(unref(currentLang).label), 1),
          (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createBlock(VPMenuLink, {
            key: locale.link,
            item: locale
          }, null, 8, ["item"]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["label"])) : createCommentVNode("", !0);
  }
}), VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-88af2de4"]]), _withScopeId$4 = (n) => (pushScopeId("data-v-19c990f1"), n = n(), popScopeId(), n), _hoisted_1$9 = { class: "wrapper" }, _hoisted_2$6 = { class: "container" }, _hoisted_3$4 = { class: "title" }, _hoisted_4$2 = { class: "content" }, _hoisted_5$2 = { class: "content-body" }, _hoisted_6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "divider-line" })
], -1)), _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll(), { hasSidebar } = useSidebar(), { hasLocalNav } = useLocalNav(), { frontmatter } = useData(), classes = ref({});
    return watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "has-local-nav": hasLocalNav.value,
        top: frontmatter.value.layout === "home" && y.value === 0
      };
    }), (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavBar", classes.value])
    }, [
      createBaseVNode("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$4, [
            createVNode(VPNavBarTitle, null, {
              "nav-bar-title-before": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, !0)
              ]),
              "nav-bar-title-after": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, !0),
              createVNode(_sfc_main$i, { class: "search" }),
              createVNode(VPNavBarMenu, { class: "menu" }),
              createVNode(VPNavBarTranslations, { class: "translations" }),
              createVNode(VPNavBarAppearance, { class: "appearance" }),
              createVNode(VPNavBarSocialLinks, { class: "social-links" }),
              createVNode(VPNavBarExtra, { class: "extra" }),
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, !0),
              createVNode(VPNavBarHamburger, {
                class: "hamburger",
                active: _ctx.isScreenOpen,
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
              }, null, 8, ["active"])
            ])
          ])
        ])
      ]),
      _hoisted_6
    ], 2));
  }
}), VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-19c990f1"]]), _hoisted_1$8 = {
  key: 0,
  class: "VPNavScreenAppearance"
}, _hoisted_2$5 = { class: "text" }, _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _cache) => unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
      createBaseVNode("p", _hoisted_2$5, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
      createVNode(VPSwitchAppearance)
    ])) : createCommentVNode("", !0);
  }
}), VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-2d7af913"]]), _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$O, {
      class: "VPNavScreenMenuLink",
      href: _ctx.item.link,
      target: _ctx.item.target,
      rel: _ctx.item.rel,
      onClick: unref(closeScreen)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.item.text), 1)
      ]),
      _: 1
    }, 8, ["href", "target", "rel", "onClick"]));
  }
}), VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-05f27b2a"]]), _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$O, {
      class: "VPNavScreenMenuGroupLink",
      href: _ctx.item.link,
      target: _ctx.item.target,
      rel: _ctx.item.rel,
      onClick: unref(closeScreen)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.item.text), 1)
      ]),
      _: 1
    }, 8, ["href", "target", "rel", "onClick"]));
  }
}), VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-19976ae1"]]), _hoisted_1$7 = { class: "VPNavScreenMenuGroupSection" }, _hoisted_2$4 = {
  key: 0,
  class: "title"
}, _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$7, [
      _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$4, toDisplayString(_ctx.text), 1)) : createCommentVNode("", !0),
      (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => (openBlock(), createBlock(VPNavScreenMenuGroupLink, {
        key: item.text,
        item
      }, null, 8, ["item"]))), 128))
    ]));
  }
}), VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8133b170"]]), _withScopeId$3 = (n) => (pushScopeId("data-v-ff6087d4"), n = n(), popScopeId(), n), _hoisted_1$6 = ["aria-controls", "aria-expanded"], _hoisted_2$3 = ["innerHTML"], _hoisted_3$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-plus button-icon" }, null, -1)), _hoisted_4$1 = ["id"], _hoisted_5$1 = {
  key: 1,
  class: "group"
}, _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props, isOpen = ref(!1), groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
    }, [
      createBaseVNode("button", {
        class: "button",
        "aria-controls": groupId.value,
        "aria-expanded": isOpen.value,
        onClick: toggle
      }, [
        createBaseVNode("span", {
          class: "button-text",
          innerHTML: _ctx.text
        }, null, 8, _hoisted_2$3),
        _hoisted_3$3
      ], 8, _hoisted_1$6),
      createBaseVNode("div", {
        id: groupId.value,
        class: "items"
      }, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => (openBlock(), createElementBlock(Fragment, {
          key: item.text
        }, [
          "link" in item ? (openBlock(), createElementBlock("div", {
            key: item.text,
            class: "item"
          }, [
            createVNode(VPNavScreenMenuGroupLink, { item }, null, 8, ["item"])
          ])) : (openBlock(), createElementBlock("div", _hoisted_5$1, [
            createVNode(VPNavScreenMenuGroupSection, {
              text: item.text,
              items: item.items
            }, null, 8, ["text", "items"])
          ]))
        ], 64))), 128))
      ], 8, _hoisted_4$1)
    ], 2));
  }
}), VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ff6087d4"]]), _hoisted_1$5 = {
  key: 0,
  class: "VPNavScreenMenu"
}, _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$5, [
      (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => (openBlock(), createElementBlock(Fragment, {
        key: item.text
      }, [
        "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
          key: 1,
          text: item.text || "",
          items: item.items
        }, null, 8, ["text", "items"]))
      ], 64))), 128))
    ])) : createCommentVNode("", !0);
  }
}), _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
      key: 0,
      class: "VPNavScreenSocialLinks",
      links: unref(theme2).socialLinks
    }, null, 8, ["links"])) : createCommentVNode("", !0);
  }
}), _withScopeId$2 = (n) => (pushScopeId("data-v-858fe1a4"), n = n(), popScopeId(), n), _hoisted_1$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-languages icon lang" }, null, -1)), _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1)), _hoisted_3$2 = { class: "list" }, _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: !0 }), isOpen = ref(!1);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["VPNavScreenTranslations", { open: isOpen.value }])
    }, [
      createBaseVNode("button", {
        class: "title",
        onClick: toggle
      }, [
        _hoisted_1$4,
        createTextVNode(" " + toDisplayString(unref(currentLang).label) + " ", 1),
        _hoisted_2$2
      ]),
      createBaseVNode("ul", _hoisted_3$2, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createElementBlock("li", {
          key: locale.link,
          class: "item"
        }, [
          createVNode(_sfc_main$O, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(locale.text), 1)
            ]),
            _: 2
          }, 1032, ["href"])
        ]))), 128))
      ])
    ], 2)) : createCommentVNode("", !0);
  }
}), VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-858fe1a4"]]), _hoisted_1$3 = { class: "container" }, _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null), isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => (openBlock(), createBlock(Transition, {
      name: "fade",
      onEnter: _cache[0] || (_cache[0] = ($event) => isLocked.value = !0),
      onAfterLeave: _cache[1] || (_cache[1] = ($event) => isLocked.value = !1)
    }, {
      default: withCtx(() => [
        _ctx.open ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, [
          createBaseVNode("div", _hoisted_1$3, [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, !0),
            createVNode(_sfc_main$8, { class: "menu" }),
            createVNode(VPNavScreenTranslations, { class: "translations" }),
            createVNode(VPNavScreenAppearance, { class: "appearance" }),
            createVNode(_sfc_main$7, { class: "social-links" }),
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, !0)
          ])
        ], 512)) : createCommentVNode("", !0)
      ]),
      _: 3
    }));
  }
}), VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-cc5739dd"]]), _hoisted_1$2 = {
  key: 0,
  class: "VPNav"
}, _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav(), { frontmatter } = useData(), hasNavbar = computed(() => frontmatter.value.navbar !== !1);
    return provide("close-screen", closeScreen), watchEffect(() => {
      inBrowser && document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
    }), (_ctx, _cache) => hasNavbar.value ? (openBlock(), createElementBlock("header", _hoisted_1$2, [
      createVNode(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, {
        "nav-bar-title-before": withCtx(() => [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, !0)
        ]),
        "nav-bar-title-after": withCtx(() => [
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, !0)
        ]),
        "nav-bar-content-before": withCtx(() => [
          renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, !0)
        ]),
        "nav-bar-content-after": withCtx(() => [
          renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["is-screen-open", "onToggleScreen"]),
      createVNode(VPNavScreen, { open: unref(isScreenOpen) }, {
        "nav-screen-content-before": withCtx(() => [
          renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, !0)
        ]),
        "nav-screen-content-after": withCtx(() => [
          renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["open"])
    ])) : createCommentVNode("", !0);
  }
}), VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ae24b3ad"]]), _withScopeId$1 = (n) => (pushScopeId("data-v-93e7e794"), n = n(), popScopeId(), n), _hoisted_1$1 = ["role", "tabindex"], _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, null, -1)), _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-right caret-icon" }, null, -1)), _hoisted_4 = [
  _hoisted_3$1
], _hoisted_5 = {
  key: 1,
  class: "items"
}, _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props, {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item)), sectionTag = computed(() => hasChildren.value ? "section" : "div"), linkTag = computed(() => isLink.value ? "a" : "div"), textTag = computed(() => hasChildren.value ? props.depth + 2 === 7 ? "p" : `h${props.depth + 2}` : "p"), itemRole = computed(() => isLink.value ? void 0 : "button"), classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      "key" in e && e.key !== "Enter" || !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", !0);
      return openBlock(), createBlock(resolveDynamicComponent(sectionTag.value), {
        class: normalizeClass(["VPSidebarItem", classes.value])
      }, {
        default: withCtx(() => [
          _ctx.item.text ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: itemRole.value
          }, toHandlers(
            _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
            !0
          ), {
            tabindex: _ctx.item.items && 0
          }), [
            _hoisted_2$1,
            _ctx.item.link ? (openBlock(), createBlock(_sfc_main$O, {
              key: 0,
              tag: linkTag.value,
              class: "link",
              href: _ctx.item.link,
              rel: _ctx.item.rel,
              target: _ctx.item.target
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 1,
              class: "text",
              innerHTML: _ctx.item.text
            }, null, 8, ["innerHTML"])),
            _ctx.item.collapsed != null ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"]),
              tabindex: "0"
            }, _hoisted_4, 32)) : createCommentVNode("", !0)
          ], 16, _hoisted_1$1)) : createCommentVNode("", !0),
          _ctx.item.items && _ctx.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_5, [
            _ctx.depth < 5 ? (openBlock(!0), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => (openBlock(), createBlock(_component_VPSidebarItem, {
              key: i.text,
              item: i,
              depth: _ctx.depth + 1
            }, null, 8, ["item", "depth"]))), 128)) : createCommentVNode("", !0)
          ])) : createCommentVNode("", !0)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-93e7e794"]]), _withScopeId = (n) => (pushScopeId("data-v-575e6a36"), n = n(), popScopeId(), n), _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "curtain" }, null, -1)), _hoisted_2 = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
}, _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "sidebar-aria-label"
}, " Sidebar Navigation ", -1)), _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar(), props = __props, navEl = ref(null), isLocked = useScrollLock(inBrowser ? document.body : null);
    return watch(
      [props, navEl],
      () => {
        var _a;
        props.open ? (isLocked.value = !0, (_a = navEl.value) == null || _a.focus()) : isLocked.value = !1;
      },
      { immediate: !0, flush: "post" }
    ), (_ctx, _cache) => unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
      key: 0,
      class: normalizeClass(["VPSidebar", { open: _ctx.open }]),
      ref_key: "navEl",
      ref: navEl,
      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["stop"]))
    }, [
      _hoisted_1,
      createBaseVNode("nav", _hoisted_2, [
        _hoisted_3,
        renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, !0),
        (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(sidebarGroups), (item) => (openBlock(), createElementBlock("div", {
          key: item.text,
          class: "group"
        }, [
          createVNode(VPSidebarItem, {
            item,
            depth: 0
          }, null, 8, ["item"])
        ]))), 128)),
        renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, !0)
      ])
    ], 2)) : createCommentVNode("", !0);
  }
}), VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-575e6a36"]]), _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const route = useRoute(), backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    function focusOnTargetAnchor({ target }) {
      const el = document.getElementById(
        decodeURIComponent(target.hash).slice(1)
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex"), el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1"), el.addEventListener("blur", removeTabIndex), el.focus(), window.scrollTo(0, 0);
      }
    }
    return (_ctx, _cache) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("span", {
        ref_key: "backToTop",
        ref: backToTop,
        tabindex: "-1"
      }, null, 512),
      createBaseVNode("a", {
        href: "#VPContent",
        class: "VPSkipLink visually-hidden",
        onClick: focusOnTargetAnchor
      }, " Skip to content ")
    ], 64));
  }
}), VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f60ec36"]]), _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar(), route = useRoute();
    watch(() => route.path, closeSidebar), useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData(), slots = useSlots(), heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    return provide("hero-image-slot-exists", heroImageSlotExists), (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return unref(frontmatter).layout !== !1 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["Layout", unref(frontmatter).pageClass])
      }, [
        renderSlot(_ctx.$slots, "layout-top", {}, void 0, !0),
        createVNode(VPSkipLink),
        createVNode(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        createVNode(VPNav, null, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, !0)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, !0)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, !0)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, !0)
          ]),
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, !0)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, !0)
          ]),
          _: 3
        }),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, !0)
          ]),
          "sidebar-nav-after": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, !0)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, !0)
          ]),
          "not-found": withCtx(() => [
            renderSlot(_ctx.$slots, "not-found", {}, void 0, !0)
          ]),
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, !0)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, !0)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, !0)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, !0)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, !0)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, !0)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, !0)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, !0)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, !0)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, !0)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, !0)
          ]),
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, !0)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, !0)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, !0)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, !0)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, !0)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, !0)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, !0)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, !0)
          ]),
          _: 3
        }),
        createVNode(VPFooter),
        renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, !0)
      ], 2)) : (openBlock(), createBlock(_component_Content, { key: 1 }));
    };
  }
}), Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d98c3a5"]]), theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$V);
  }
};
export {
  theme as t
};
