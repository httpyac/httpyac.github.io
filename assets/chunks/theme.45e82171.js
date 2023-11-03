import { d as defineComponent, o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass, a as createTextVNode, t as toDisplayString, _ as _export_sfc, b as createBlock, w as withCtx, T as Transition, e as createCommentVNode, u as useData$1, i as isExternal, f as withBase, g as computed, h as ref, j as onMounted, k as createBaseVNode, l as unref, p as pushScopeId, m as popScopeId, q as isActive, s as inBrowser, v as useMediaQuery, x as watch, y as watchEffect, z as onUnmounted, A as watchPostEffect, B as onUpdated, C as resolveComponent, F as Fragment, D as renderList, E as shallowRef, G as onContentUpdated, H as createVNode, I as resolveDynamicComponent, J as EXTERNAL_URL_RE, K as useRoute, L as mergeProps, M as inject, N as normalizeStyle, O as nextTick, P as useWindowScroll, Q as createStaticVNode, R as readonly, S as __vitePreload, U as withDirectives, V as vShow, W as withModifiers, X as vModelText, Y as Teleport, Z as useScrollLock, $ as provide, a0 as withKeys, a1 as toHandlers, a2 as useSlots } from "./framework.1082274c.js";
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
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
      ], !0)
    ], 2));
  }
});
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-9613cc9f"]]), _hoisted_1$R = {
  key: 0,
  class: "VPBackdrop"
}, _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$R)) : createCommentVNode("", !0)
      ]),
      _: 1
    }));
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-c79a1216"]]), useData = useData$1;
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
  if (isExternal(url))
    return url;
  const { site } = useData(), { pathname, search, hash } = new URL(url, "http://a.com"), normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
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
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== !1 && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  })), currentLang };
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link;
}
const _withScopeId$9 = (n) => (pushScopeId("data-v-f87ff6e4"), n = n(), popScopeId(), n), _hoisted_1$Q = { class: "NotFound" }, _hoisted_2$B = { class: "code" }, _hoisted_3$p = { class: "title" }, _hoisted_4$f = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1)), _hoisted_5$9 = { class: "quote" }, _hoisted_6$7 = { class: "action" }, _hoisted_7$6 = ["href", "aria-label"], _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { localeLinks } = useLangs({ removeCurrent: !1 }), root = ref("/");
    return onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      localeLinks.value.length && (root.value = ((_a = localeLinks.value.find(({ link }) => link.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link);
    }), (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$Q, [
        createBaseVNode("p", _hoisted_2$B, toDisplayString(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404"), 1),
        createBaseVNode("h1", _hoisted_3$p, toDisplayString(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND"), 1),
        _hoisted_4$f,
        createBaseVNode("blockquote", _hoisted_5$9, toDisplayString(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        createBaseVNode("div", _hoisted_6$7, [
          createBaseVNode("a", {
            class: "link",
            href: unref(withBase)(root.value),
            "aria-label": ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home"
          }, toDisplayString(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home"), 9, _hoisted_7$6)
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-f87ff6e4"]]);
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
const hashRef = ref(inBrowser ? location.hash : "");
inBrowser && window.addEventListener("hashchange", () => {
  hashRef.value = location.hash;
});
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
const PAGE_OFFSET = 71;
function resolveTitle(theme2) {
  return typeof theme2.outline == "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
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
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor"))
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
  headers = headers.filter((h) => h.level >= high && h.level <= low);
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
    const links = [].slice.call(container.value.querySelectorAll(".outline-link")), anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => links.some((link) => link.hash === anchor.hash && anchor.offsetParent !== null)), scrollY = window.scrollY, innerHeight = window.innerHeight, offsetHeight = document.body.offsetHeight, isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i], nextAnchor = anchors[i + 1], [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    prevActiveLink && prevActiveLink.classList.remove("active"), hash == null ? prevActiveLink = null : prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    const activeLink = prevActiveLink;
    activeLink ? (activeLink.classList.add("active"), marker.value.style.top = activeLink.offsetTop + 33 + "px", marker.value.style.opacity = "1") : (marker.value.style.top = "33px", marker.value.style.opacity = "0");
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  return index === 0 && scrollTop === 0 ? [!0, null] : scrollTop < getAnchorTop(anchor) ? [!1, null] : !nextAnchor || scrollTop < getAnchorTop(nextAnchor) ? [!0, anchor.hash] : [!1, null];
}
const _hoisted_1$P = ["href", "title"], _sfc_main$10 = /* @__PURE__ */ defineComponent({
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
        class: normalizeClass(_ctx.root ? "root" : "nested")
      }, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.headers, ({ children, link, title }) => (openBlock(), createElementBlock("li", null, [
          createBaseVNode("a", {
            class: "outline-link",
            href: link,
            onClick,
            title
          }, toDisplayString(title), 9, _hoisted_1$P),
          children != null && children.length ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
            key: 0,
            headers: children
          }, null, 8, ["headers"])) : createCommentVNode("", !0)
        ]))), 256))
      ], 2);
    };
  }
});
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-d0ee3533"]]), _withScopeId$8 = (n) => (pushScopeId("data-v-d330b1bb"), n = n(), popScopeId(), n), _hoisted_1$O = { class: "content" }, _hoisted_2$A = {
  class: "outline-title",
  role: "heading",
  "aria-level": "2"
}, _hoisted_3$o = { "aria-labelledby": "doc-outline-aria-label" }, _hoisted_4$e = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "doc-outline-aria-label"
}, " Table of Contents for current page ", -1)), _sfc_main$$ = /* @__PURE__ */ defineComponent({
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
      createBaseVNode("div", _hoisted_1$O, [
        createBaseVNode("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        createBaseVNode("div", _hoisted_2$A, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
        createBaseVNode("nav", _hoisted_3$o, [
          _hoisted_4$e,
          createVNode(VPDocOutlineItem, {
            headers: headers.value,
            root: !0
          }, null, 8, ["headers"])
        ])
      ])
    ], 2));
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-d330b1bb"]]), _hoisted_1$N = { class: "VPDocAsideCarbonAds" }, _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$N, [
      createVNode(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, 8, ["carbon-ads"])
    ]));
  }
}), _withScopeId$7 = (n) => (pushScopeId("data-v-3f215769"), n = n(), popScopeId(), n), _hoisted_1$M = { class: "VPDocAside" }, _hoisted_2$z = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer" }, null, -1)), _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$M, [
      renderSlot(_ctx.$slots, "aside-top", {}, void 0, !0),
      renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, !0),
      createVNode(VPDocAsideOutline),
      renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, !0),
      _hoisted_2$z,
      renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, !0),
      unref(theme2).carbonAds ? (openBlock(), createBlock(_sfc_main$_, {
        key: 0,
        "carbon-ads": unref(theme2).carbonAds
      }, null, 8, ["carbon-ads"])) : createCommentVNode("", !0),
      renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, !0),
      renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, !0)
    ]));
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-3f215769"]]);
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
const _sfc_main$Y = {}, _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _hoisted_2$y = /* @__PURE__ */ createBaseVNode("path", { d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z" }, null, -1), _hoisted_3$n = /* @__PURE__ */ createBaseVNode("path", { d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z" }, null, -1), _hoisted_4$d = [
  _hoisted_2$y,
  _hoisted_3$n
];
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_4$d);
}
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$b]]), _sfc_main$X = /* @__PURE__ */ defineComponent({
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
}), _hoisted_1$K = { class: "VPLastUpdated" }, _hoisted_2$x = ["datetime"], _sfc_main$W = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("p", _hoisted_1$K, [
        createTextVNode(toDisplayString(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated") + ": ", 1),
        createBaseVNode("time", { datetime: isoDatetime.value }, toDisplayString(datetime.value), 9, _hoisted_2$x)
      ]);
    };
  }
});
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-7e05ebdb"]]), _hoisted_1$J = {
  key: 0,
  class: "VPDocFooter"
}, _hoisted_2$w = {
  key: 0,
  class: "edit-info"
}, _hoisted_3$m = {
  key: 0,
  class: "edit-link"
}, _hoisted_4$c = {
  key: 1,
  class: "last-updated"
}, _hoisted_5$8 = {
  key: 1,
  class: "prev-next"
}, _hoisted_6$6 = { class: "pager" }, _hoisted_7$5 = ["href"], _hoisted_8$3 = ["innerHTML"], _hoisted_9$2 = ["innerHTML"], _hoisted_10$2 = { class: "pager" }, _hoisted_11$2 = ["href"], _hoisted_12$1 = ["innerHTML"], _hoisted_13$1 = ["innerHTML"], _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData(), editLink = useEditLink(), control = usePrevNext(), hasEditLink = computed(() => theme2.value.editLink && frontmatter.value.editLink !== !1), hasLastUpdated = computed(() => page.value.lastUpdated && frontmatter.value.lastUpdated !== !1), showFooter = computed(() => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$J, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, !0),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$w, [
          hasEditLink.value ? (openBlock(), createElementBlock("div", _hoisted_3$m, [
            createVNode(_sfc_main$X, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": !0
            }, {
              default: withCtx(() => [
                createVNode(VPIconEdit, {
                  class: "edit-link-icon",
                  "aria-label": "edit icon"
                }),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", !0),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_4$c, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", !0)
        ])) : createCommentVNode("", !0),
        (_a = unref(control).prev) != null && _a.link || (_b = unref(control).next) != null && _b.link ? (openBlock(), createElementBlock("nav", _hoisted_5$8, [
          createBaseVNode("div", _hoisted_6$6, [
            (_c = unref(control).prev) != null && _c.link ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "pager-link prev",
              href: unref(normalizeLink$1)(unref(control).prev.link)
            }, [
              createBaseVNode("span", {
                class: "desc",
                innerHTML: ((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"
              }, null, 8, _hoisted_8$3),
              createBaseVNode("span", {
                class: "title",
                innerHTML: unref(control).prev.text
              }, null, 8, _hoisted_9$2)
            ], 8, _hoisted_7$5)) : createCommentVNode("", !0)
          ]),
          createBaseVNode("div", _hoisted_10$2, [
            (_e = unref(control).next) != null && _e.link ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "pager-link next",
              href: unref(normalizeLink$1)(unref(control).next.link)
            }, [
              createBaseVNode("span", {
                class: "desc",
                innerHTML: ((_f = unref(theme2).docFooter) == null ? void 0 : _f.next) || "Next page"
              }, null, 8, _hoisted_12$1),
              createBaseVNode("span", {
                class: "title",
                innerHTML: unref(control).next.text
              }, null, 8, _hoisted_13$1)
            ], 8, _hoisted_11$2)) : createCommentVNode("", !0)
          ])
        ])) : createCommentVNode("", !0)
      ])) : createCommentVNode("", !0);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-ef5dee53"]]), _sfc_main$U = {}, _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$v = /* @__PURE__ */ createBaseVNode("path", { d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z" }, null, -1), _hoisted_3$l = [
  _hoisted_2$v
];
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_3$l);
}
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$a]]), _hoisted_1$H = {
  key: 0,
  class: "VPDocOutlineDropdown"
}, _hoisted_2$u = {
  key: 0,
  class: "items"
}, _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineDropdown",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData(), open = ref(!1);
    onContentUpdated(() => {
      open.value = !1;
    });
    const headers = shallowRef([]);
    return onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    }), (_ctx, _cache) => headers.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$H, [
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value),
        class: normalizeClass({ open: open.value })
      }, [
        createTextVNode(toDisplayString(unref(resolveTitle)(unref(theme2))) + " ", 1),
        createVNode(VPIconChevronRight, { class: "icon" })
      ], 2),
      open.value ? (openBlock(), createElementBlock("div", _hoisted_2$u, [
        createVNode(VPDocOutlineItem, { headers: headers.value }, null, 8, ["headers"])
      ])) : createCommentVNode("", !0)
    ])) : createCommentVNode("", !0);
  }
});
const VPDocOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-eadfb36b"]]), _withScopeId$6 = (n) => (pushScopeId("data-v-6b87e69f"), n = n(), popScopeId(), n), _hoisted_1$G = { class: "container" }, _hoisted_2$t = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "aside-curtain" }, null, -1)), _hoisted_3$k = { class: "aside-container" }, _hoisted_4$b = { class: "aside-content" }, _hoisted_5$7 = { class: "content" }, _hoisted_6$5 = { class: "content-container" }, _hoisted_7$4 = { class: "main" }, _sfc_main$S = /* @__PURE__ */ defineComponent({
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
        createBaseVNode("div", _hoisted_1$G, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }])
          }, [
            _hoisted_2$t,
            createBaseVNode("div", _hoisted_3$k, [
              createBaseVNode("div", _hoisted_4$b, [
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
          createBaseVNode("div", _hoisted_5$7, [
            createBaseVNode("div", _hoisted_6$5, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, !0),
              createVNode(VPDocOutlineDropdown),
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
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-6b87e69f"]]), _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props, isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    ), component = computed(() => props.tag || props.href ? "a" : "button");
    return (_ctx, _cache) => (openBlock(), createBlock(resolveDynamicComponent(component.value), {
      class: normalizeClass(["VPButton", [_ctx.size, _ctx.theme]]),
      href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
      target: isExternal2.value ? "_blank" : void 0,
      rel: isExternal2.value ? "noreferrer" : void 0
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.text), 1)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
});
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-c1c5efc1"]]), _hoisted_1$F = ["src", "alt"], _sfc_main$Q = /* @__PURE__ */ defineComponent({
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
        }), null, 16, _hoisted_1$F)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
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
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-8426fc1a"]]), _withScopeId$5 = (n) => (pushScopeId("data-v-da5d1713"), n = n(), popScopeId(), n), _hoisted_1$E = { class: "container" }, _hoisted_2$s = { class: "main" }, _hoisted_3$j = {
  key: 0,
  class: "name"
}, _hoisted_4$a = ["innerHTML"], _hoisted_5$6 = ["innerHTML"], _hoisted_6$4 = ["innerHTML"], _hoisted_7$3 = {
  key: 0,
  class: "actions"
}, _hoisted_8$2 = {
  key: 0,
  class: "image"
}, _hoisted_9$1 = { class: "image-container" }, _hoisted_10$1 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "image-bg" }, null, -1)), _sfc_main$P = /* @__PURE__ */ defineComponent({
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
      createBaseVNode("div", _hoisted_1$E, [
        createBaseVNode("div", _hoisted_2$s, [
          renderSlot(_ctx.$slots, "home-hero-info", {}, () => [
            _ctx.name ? (openBlock(), createElementBlock("h1", _hoisted_3$j, [
              createBaseVNode("span", {
                innerHTML: _ctx.name,
                class: "clip"
              }, null, 8, _hoisted_4$a)
            ])) : createCommentVNode("", !0),
            _ctx.text ? (openBlock(), createElementBlock("p", {
              key: 1,
              innerHTML: _ctx.text,
              class: "text"
            }, null, 8, _hoisted_5$6)) : createCommentVNode("", !0),
            _ctx.tagline ? (openBlock(), createElementBlock("p", {
              key: 2,
              innerHTML: _ctx.tagline,
              class: "tagline"
            }, null, 8, _hoisted_6$4)) : createCommentVNode("", !0)
          ], !0),
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
                href: action.link
              }, null, 8, ["theme", "text", "href"])
            ]))), 128))
          ])) : createCommentVNode("", !0)
        ]),
        _ctx.image || unref(heroImageSlotExists) ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
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
});
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-da5d1713"]]), _sfc_main$O = /* @__PURE__ */ defineComponent({
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
      "home-hero-info": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-info")
      ]),
      "home-hero-image": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-image")
      ]),
      _: 3
    }, 8, ["name", "text", "tagline", "image", "actions"])) : createCommentVNode("", !0);
  }
}), _sfc_main$N = {}, _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", { d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z" }, null, -1), _hoisted_3$i = [
  _hoisted_2$r
];
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$i);
}
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$9]]), _hoisted_1$C = { class: "box" }, _hoisted_2$q = {
  key: 0,
  class: "icon"
}, _hoisted_3$h = ["innerHTML"], _hoisted_4$9 = ["innerHTML"], _hoisted_5$5 = ["innerHTML"], _hoisted_6$3 = {
  key: 4,
  class: "link-text"
}, _hoisted_7$2 = { class: "link-text-value" }, _sfc_main$M = /* @__PURE__ */ defineComponent({
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
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$X, {
      class: "VPFeature",
      href: _ctx.link,
      rel: _ctx.rel,
      target: _ctx.target,
      "no-icon": !0,
      tag: _ctx.link ? "a" : "div"
    }, {
      default: withCtx(() => [
        createBaseVNode("article", _hoisted_1$C, [
          typeof _ctx.icon == "object" && _ctx.icon.wrap ? (openBlock(), createElementBlock("div", _hoisted_2$q, [
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
          }, null, 8, _hoisted_3$h)) : createCommentVNode("", !0),
          createBaseVNode("h2", {
            class: "title",
            innerHTML: _ctx.title
          }, null, 8, _hoisted_4$9),
          _ctx.details ? (openBlock(), createElementBlock("p", {
            key: 3,
            class: "details",
            innerHTML: _ctx.details
          }, null, 8, _hoisted_5$5)) : createCommentVNode("", !0),
          _ctx.linkText ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
            createBaseVNode("p", _hoisted_7$2, [
              createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
              createVNode(VPIconArrowRight, { class: "link-text-icon" })
            ])
          ])) : createCommentVNode("", !0)
        ])
      ]),
      _: 1
    }, 8, ["href", "rel", "target", "tag"]));
  }
});
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-33204567"]]), _hoisted_1$B = {
  key: 0,
  class: "VPFeatures"
}, _hoisted_2$p = { class: "container" }, _hoisted_3$g = { class: "items" }, _sfc_main$L = /* @__PURE__ */ defineComponent({
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
    return (_ctx, _cache) => _ctx.features ? (openBlock(), createElementBlock("div", _hoisted_1$B, [
      createBaseVNode("div", _hoisted_2$p, [
        createBaseVNode("div", _hoisted_3$g, [
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
});
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-a6181336"]]), _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => unref(fm).features ? (openBlock(), createBlock(VPFeatures, {
      key: 0,
      class: "VPHomeFeatures",
      features: unref(fm).features
    }, null, 8, ["features"])) : createCommentVNode("", !0);
  }
}), _hoisted_1$A = { class: "VPHome" }, _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$A, [
        renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0),
        createVNode(_sfc_main$O, null, {
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, !0)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, !0)
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, !0),
        renderSlot(_ctx.$slots, "home-features-before", {}, void 0, !0),
        createVNode(_sfc_main$K),
        renderSlot(_ctx.$slots, "home-features-after", {}, void 0, !0),
        createVNode(_component_Content)
      ]);
    };
  }
});
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-d82743a8"]]), _sfc_main$I = {}, _hoisted_1$z = { class: "VPPage" };
function _sfc_render$8(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$z, [
    renderSlot(_ctx.$slots, "page-top"),
    createVNode(_component_Content),
    renderSlot(_ctx.$slots, "page-bottom")
  ]);
}
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$8]]), _sfc_main$H = /* @__PURE__ */ defineComponent({
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
        "home-hero-info": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, !0)
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
});
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-669faec9"]]), _hoisted_1$y = { class: "container" }, _hoisted_2$o = ["innerHTML"], _hoisted_3$f = ["innerHTML"], _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme: theme2, frontmatter } = useData(), { hasSidebar } = useSidebar();
    return (_ctx, _cache) => unref(theme2).footer && unref(frontmatter).footer !== !1 ? (openBlock(), createElementBlock("footer", {
      key: 0,
      class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
    }, [
      createBaseVNode("div", _hoisted_1$y, [
        unref(theme2).footer.message ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: "message",
          innerHTML: unref(theme2).footer.message
        }, null, 8, _hoisted_2$o)) : createCommentVNode("", !0),
        unref(theme2).footer.copyright ? (openBlock(), createElementBlock("p", {
          key: 1,
          class: "copyright",
          innerHTML: unref(theme2).footer.copyright
        }, null, 8, _hoisted_3$f)) : createCommentVNode("", !0)
      ])
    ], 2)) : createCommentVNode("", !0);
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-e03eb2e1"]]), _hoisted_1$x = { class: "header" }, _hoisted_2$n = { class: "outline" }, _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const props = __props, { theme: theme2 } = useData(), open = ref(!1), vh = ref(0), items = ref();
    onContentUpdated(() => {
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
      style: normalizeStyle({ "--vp-vh": vh.value + "px" })
    }, [
      _ctx.headers.length > 0 ? (openBlock(), createElementBlock("button", {
        key: 0,
        onClick: toggle,
        class: normalizeClass({ open: open.value })
      }, [
        createTextVNode(toDisplayString(unref(resolveTitle)(unref(theme2))) + " ", 1),
        createVNode(VPIconChevronRight, { class: "icon" })
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
            createBaseVNode("div", _hoisted_1$x, [
              createBaseVNode("a", {
                class: "top-link",
                href: "#",
                onClick: scrollToTop
              }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)
            ]),
            createBaseVNode("div", _hoisted_2$n, [
              createVNode(VPDocOutlineItem, { headers: _ctx.headers }, null, 8, ["headers"])
            ])
          ], 512)) : createCommentVNode("", !0)
        ]),
        _: 1
      })
    ], 4));
  }
});
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-1c15a60a"]]), _sfc_main$E = {}, _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", { d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z" }, null, -1), _hoisted_3$e = /* @__PURE__ */ createBaseVNode("path", { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" }, null, -1), _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("path", { d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z" }, null, -1), _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z" }, null, -1), _hoisted_6$2 = [
  _hoisted_2$m,
  _hoisted_3$e,
  _hoisted_4$8,
  _hoisted_5$4
];
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_6$2);
}
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$7]]), _hoisted_1$v = ["aria-expanded"], _hoisted_2$l = { class: "menu-text" }, _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData(), { hasSidebar } = useSidebar(), { y } = useWindowScroll(), headers = shallowRef([]), navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    }), onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => headers.value.length === 0 && !hasSidebar.value), classes = computed(() => ({
      VPLocalNav: !0,
      fixed: empty.value,
      "reached-top": y.value >= navHeight.value
    }));
    return (_ctx, _cache) => unref(frontmatter).layout !== "home" && (!empty.value || unref(y) >= navHeight.value) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(classes.value)
    }, [
      unref(hasSidebar) ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "menu",
        "aria-expanded": _ctx.open,
        "aria-controls": "VPSidebarNav",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
      }, [
        createVNode(VPIconAlignLeft, { class: "menu-icon" }),
        createBaseVNode("span", _hoisted_2$l, toDisplayString(unref(theme2).sidebarMenuLabel || "Menu"), 1)
      ], 8, _hoisted_1$v)) : createCommentVNode("", !0),
      createVNode(VPLocalNavOutlineDropdown, {
        headers: headers.value,
        navHeight: navHeight.value
      }, null, 8, ["headers", "navHeight"])
    ], 2)) : createCommentVNode("", !0);
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-79c8c1df"]]);
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
const _sfc_main$C = {}, _hoisted_1$u = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
}, _hoisted_2$k = { class: "check" }, _hoisted_3$d = {
  key: 0,
  class: "icon"
};
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$u, [
    createBaseVNode("span", _hoisted_2$k, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$d, [
        renderSlot(_ctx.$slots, "default", {}, void 0, !0)
      ])) : createCommentVNode("", !0)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$6], ["__scopeId", "data-v-b1685198"]]), _sfc_main$B = {}, _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$j = /* @__PURE__ */ createBaseVNode("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1), _hoisted_3$c = [
  _hoisted_2$j
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$c);
}
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$5]]), _sfc_main$A = {}, _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$i = /* @__PURE__ */ createStaticVNode('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9), _hoisted_11$1 = [
  _hoisted_2$i
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_11$1);
}
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$4]]), _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const { isDark } = useData(), toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    return (_ctx, _cache) => (openBlock(), createBlock(VPSwitch, {
      title: "toggle dark mode",
      class: "VPSwitchAppearance",
      "aria-checked": unref(isDark),
      onClick: unref(toggleAppearance)
    }, {
      default: withCtx(() => [
        createVNode(VPIconSun, { class: "sun" }),
        createVNode(VPIconMoon, { class: "moon" })
      ]),
      _: 1
    }, 8, ["aria-checked", "onClick"]));
  }
});
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-ce54a7d1"]]), _hoisted_1$r = {
  key: 0,
  class: "VPNavBarAppearance"
}, _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
      createVNode(VPSwitchAppearance)
    ])) : createCommentVNode("", !0);
  }
});
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-e6aabb21"]]), focusedElement = ref();
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
const _sfc_main$x = {}, _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1), _hoisted_3$b = [
  _hoisted_2$h
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$b);
}
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$3]]), _sfc_main$w = {}, _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$g = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}, null, -1), _hoisted_3$a = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "19",
  cy: "12",
  r: "2"
}, null, -1), _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "5",
  cy: "12",
  r: "2"
}, null, -1), _hoisted_5$3 = [
  _hoisted_2$g,
  _hoisted_3$a,
  _hoisted_4$7
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_5$3);
}
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$2]]), _hoisted_1$o = { class: "VPMenuLink" }, _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$o, [
      createVNode(_sfc_main$X, {
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
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-43f1e123"]]), _hoisted_1$n = { class: "VPMenuGroup" }, _hoisted_2$f = {
  key: 0,
  class: "title"
}, _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$n, [
      _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$f, toDisplayString(_ctx.text), 1)) : createCommentVNode("", !0),
      (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => (openBlock(), createElementBlock(Fragment, null, [
        "link" in item ? (openBlock(), createBlock(VPMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : createCommentVNode("", !0)
      ], 64))), 256))
    ]));
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-69e747b5"]]), _hoisted_1$m = { class: "VPMenu" }, _hoisted_2$e = {
  key: 0,
  class: "items"
}, _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$m, [
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
});
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-e7ea1737"]]), _hoisted_1$l = ["aria-expanded", "aria-label"], _hoisted_2$d = {
  key: 0,
  class: "text"
}, _hoisted_3$9 = ["innerHTML"], _hoisted_4$6 = { class: "menu" }, _sfc_main$s = /* @__PURE__ */ defineComponent({
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
          _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
            key: 0,
            class: "option-icon"
          })) : createCommentVNode("", !0),
          _ctx.button ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: _ctx.button
          }, null, 8, _hoisted_3$9)) : createCommentVNode("", !0),
          createVNode(VPIconChevronDown, { class: "text-icon" })
        ])) : (openBlock(), createBlock(VPIconMoreHorizontal, {
          key: 1,
          class: "icon"
        }))
      ], 8, _hoisted_1$l),
      createBaseVNode("div", _hoisted_4$6, [
        createVNode(VPMenu, { items: _ctx.items }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["items"])
      ])
    ], 544));
  }
});
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-9c007e85"]]), icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
  x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
}, _hoisted_1$k = ["href", "aria-label", "innerHTML"], _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props, svg = computed(() => typeof props.icon == "object" ? props.icon.svg : icons[props.icon]);
    return (_ctx, _cache) => (openBlock(), createElementBlock("a", {
      class: "VPSocialLink no-icon",
      href: _ctx.link,
      "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon == "string" ? _ctx.icon : ""),
      target: "_blank",
      rel: "noopener",
      innerHTML: svg.value
    }, null, 8, _hoisted_1$k));
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-f80f8133"]]), _hoisted_1$j = { class: "VPSocialLinks" }, _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$j, [
      (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.links, ({ link, icon, ariaLabel }) => (openBlock(), createBlock(VPSocialLink, {
        key: link,
        icon,
        link,
        ariaLabel
      }, null, 8, ["icon", "link", "ariaLabel"]))), 128))
    ]));
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-7bc22406"]]), _hoisted_1$i = {
  key: 0,
  class: "group translations"
}, _hoisted_2$c = { class: "trans-title" }, _hoisted_3$8 = {
  key: 1,
  class: "group"
}, _hoisted_4$5 = { class: "item appearance" }, _hoisted_5$2 = { class: "label" }, _hoisted_6$1 = { class: "appearance-action" }, _hoisted_7$1 = {
  key: 2,
  class: "group"
}, _hoisted_8$1 = { class: "item social-links" }, _sfc_main$p = /* @__PURE__ */ defineComponent({
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
        unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
          createBaseVNode("p", _hoisted_2$c, toDisplayString(unref(currentLang).label), 1),
          (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createBlock(VPMenuLink, {
            key: locale.link,
            item: locale
          }, null, 8, ["item"]))), 128))
        ])) : createCommentVNode("", !0),
        unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
          createBaseVNode("div", _hoisted_4$5, [
            createBaseVNode("p", _hoisted_5$2, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
            createBaseVNode("div", _hoisted_6$1, [
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
});
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-40855f84"]]), _withScopeId$4 = (n) => (pushScopeId("data-v-e5dd9c1c"), n = n(), popScopeId(), n), _hoisted_1$h = ["aria-expanded"], _hoisted_2$b = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", { class: "container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "bottom" })
], -1)), _hoisted_3$7 = [
  _hoisted_2$b
], _sfc_main$o = /* @__PURE__ */ defineComponent({
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
    }, _hoisted_3$7, 10, _hoisted_1$h));
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-e5dd9c1c"]]), _hoisted_1$g = ["innerHTML"], _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$X, {
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
        }, null, 8, _hoisted_1$g)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
});
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-42ef59de"]]), _sfc_main$m = /* @__PURE__ */ defineComponent({
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
}), _withScopeId$3 = (n) => (pushScopeId("data-v-7f418b0f"), n = n(), popScopeId(), n), _hoisted_1$f = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
}, _hoisted_2$a = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1)), _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$f, [
      _hoisted_2$a,
      (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => (openBlock(), createElementBlock(Fragment, {
        key: item.text
      }, [
        "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$m, {
          key: 1,
          item
        }, null, 8, ["item"]))
      ], 64))), 128))
    ])) : createCommentVNode("", !0);
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-7f418b0f"]]), _imports_0 = "/assets/flex-logo.2489261b.svg";
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
const _hoisted_1$e = { class: "VPNavBarSearch" }, _hoisted_2$9 = { class: "DocSearch-Form" }, _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("label", {
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
], -1), _hoisted_4$4 = ["placeholder"], _hoisted_5$1 = { class: "VPPluginSearch-search-list" }, _hoisted_6 = { class: "VPPluginSearch-search-group" }, _hoisted_7 = ["href"], _hoisted_8 = { class: "VPPluginSearch-search-item" }, _hoisted_9 = { class: "VPPluginSearch-search-item-icon" }, _hoisted_10 = { style: { width: "100%" } }, _hoisted_11 = ["innerHTML"], _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "VPPluginSearch-search-item-icon" }, "↪", -1), _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
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
], -1), _hoisted_17 = { class: "DocSearch-Button-Placeholder" }, _hoisted_18 = { class: "DocSearch-Button-Keys" }, _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Key" }, "K", -1), _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Search",
  setup(__props) {
    const VPData = useData$1(), locale = VPData.localeIndex || VPData.localePath, metaKey = ref(), open = ref(!1), searchTerm = ref(), origin = ref(""), input = ref(), INDEX_DATA = ref(), PREVIEW_LOOKUP = ref(), Options = ref(), searchIndex = ref(), buttonLabel = ref("Search"), placeholder = ref("Search docs"), result = computed(() => {
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
      const data = await __vitePreload(() => import("./virtual_search-data.903086cb.js"), []);
      INDEX_DATA.value = data.default.INDEX_DATA, PREVIEW_LOOKUP.value = data.default.PREVIEW_LOOKUP, Options.value = data.default.Options, origin.value = window.location.origin + withBase(locale.value === "root" ? "/" : locale.value), buttonLabel.value = ((_a = Options.value) == null ? void 0 : _a.buttonLabel) || buttonLabel.value, placeholder.value = ((_b = Options.value) == null ? void 0 : _b.placeholder) || placeholder.value;
      var document2 = new Index(Options.value);
      document2.import("reg", INDEX_DATA.value.reg), document2.import("cfg", INDEX_DATA.value.cfg), document2.import("map", INDEX_DATA.value.map), document2.import("ctx", INDEX_DATA.value.ctx), searchIndex.value = document2, metaKey.value.innerHTML = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl";
      const handleSearchHotKey = (e) => {
        var _a2;
        e.key === "k" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), openSearch()), e.key === "Escape" && ((_a2 = searchTerm.value) == null ? void 0 : _a2.length) == 0 && open.value && (open.value = !1);
      };
      window.addEventListener("keydown", handleSearchHotKey);
    });
    function cleanSearch() {
      open.value = !1, searchTerm.value = "";
    }
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createVNode(_component_ClientOnly, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(Teleport, { to: "body" }, [
              withDirectives(createBaseVNode("div", {
                class: "VPPluginSearch-modal-back",
                onClick: _cache[2] || (_cache[2] = ($event) => open.value = !1)
              }, [
                createBaseVNode("div", {
                  class: "VPPluginSearch-modal",
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"]))
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
                    }, null, 8, _hoisted_4$4), [
                      [vModelText, searchTerm.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_5$1, [
                    (openBlock(!0), createElementBlock(Fragment, null, renderList(GroupBy(
                      result.value,
                      (x) => x.link.split("/").slice(0, -1).join("-")
                    ), (group, groupKey) => (openBlock(), createElementBlock("div", { key: groupKey }, [
                      createBaseVNode("span", _hoisted_6, toDisplayString(groupKey ? groupKey.toString()[0].toUpperCase() + groupKey.toString().slice(1) : "Home"), 1),
                      (openBlock(!0), createElementBlock(Fragment, null, renderList(group, (item) => (openBlock(), createElementBlock("a", {
                        href: origin.value + item.link,
                        key: item.id,
                        onClick: cleanSearch
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
                      ], 8, _hoisted_7))), 128))
                    ]))), 128))
                  ]),
                  _hoisted_13
                ])
              ], 512), [
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
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
      key: 0,
      class: "VPNavBarSocialLinks",
      links: unref(theme2).socialLinks
    }, null, 8, ["links"])) : createCommentVNode("", !0);
  }
});
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-0394ad82"]]), _hoisted_1$d = ["href"], _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { hasSidebar } = useSidebar(), { currentLang } = useLangs();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
    }, [
      createBaseVNode("a", {
        class: "title",
        href: unref(theme2).logoLink ?? unref(normalizeLink$1)(unref(currentLang).link)
      }, [
        renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, !0),
        unref(theme2).logo ? (openBlock(), createBlock(VPImage, {
          key: 0,
          class: "logo",
          image: unref(theme2).logo
        }, null, 8, ["image"])) : createCommentVNode("", !0),
        unref(theme2).siteTitle ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(unref(theme2).siteTitle), 1)
        ], 64)) : unref(theme2).siteTitle === void 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createTextVNode(toDisplayString(unref(site).title), 1)
        ], 64)) : createCommentVNode("", !0),
        renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, !0)
      ], 8, _hoisted_1$d)
    ], 2));
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-86d1bed8"]]), _sfc_main$h = {}, _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1), _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
  class: "css-c4d79v"
}, null, -1), _hoisted_4$3 = [
  _hoisted_2$8,
  _hoisted_3$5
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_4$3);
}
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$1]]), _hoisted_1$b = { class: "items" }, _hoisted_2$7 = { class: "title" }, _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { theme: theme2 } = useData(), { localeLinks, currentLang } = useLangs({ correspondingLink: !0 });
    return (_ctx, _cache) => unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock(VPFlyout, {
      key: 0,
      class: "VPNavBarTranslations",
      icon: VPIconLanguages,
      label: unref(theme2).langMenuLabel || "Change language"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$b, [
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
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-74abcbb9"]]), _withScopeId$2 = (n) => (pushScopeId("data-v-a0fd61f4"), n = n(), popScopeId(), n), _hoisted_1$a = { class: "container" }, _hoisted_2$6 = { class: "title" }, _hoisted_3$4 = { class: "content" }, _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "curtain" }, null, -1)), _hoisted_5 = { class: "content-body" }, _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll(), { hasSidebar } = useSidebar(), { frontmatter } = useData(), classes = ref({});
    return watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        top: frontmatter.value.layout === "home" && y.value === 0
      };
    }), (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavBar", classes.value])
    }, [
      createBaseVNode("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$6, [
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
        createBaseVNode("div", _hoisted_3$4, [
          _hoisted_4$2,
          createBaseVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, !0),
            createVNode(_sfc_main$k, { class: "search" }),
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
    ], 2));
  }
});
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a0fd61f4"]]), _hoisted_1$9 = {
  key: 0,
  class: "VPNavScreenAppearance"
}, _hoisted_2$5 = { class: "text" }, _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _cache) => unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
      createBaseVNode("p", _hoisted_2$5, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
      createVNode(VPSwitchAppearance)
    ])) : createCommentVNode("", !0);
  }
});
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-add8f686"]]), _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$X, {
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
});
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-05f27b2a"]]), _sfc_main$c = {}, _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" }, null, -1), _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$3);
}
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render]]), _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => (openBlock(), createBlock(_sfc_main$X, {
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
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-19976ae1"]]), _hoisted_1$7 = { class: "VPNavScreenMenuGroupSection" }, _hoisted_2$3 = {
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
      _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$3, toDisplayString(_ctx.text), 1)) : createCommentVNode("", !0),
      (openBlock(!0), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => (openBlock(), createBlock(VPNavScreenMenuGroupLink, {
        key: item.text,
        item
      }, null, 8, ["item"]))), 128))
    ]));
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8133b170"]]), _hoisted_1$6 = ["aria-controls", "aria-expanded"], _hoisted_2$2 = { class: "button-text" }, _hoisted_3$2 = ["id"], _hoisted_4$1 = {
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
        createBaseVNode("span", _hoisted_2$2, toDisplayString(_ctx.text), 1),
        createVNode(VPIconPlus, { class: "button-icon" })
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
          ])) : (openBlock(), createElementBlock("div", _hoisted_4$1, [
            createVNode(VPNavScreenMenuGroupSection, {
              text: item.text,
              items: item.items
            }, null, 8, ["text", "items"])
          ]))
        ], 64))), 128))
      ], 8, _hoisted_3$2)
    ], 2));
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1ecb84e7"]]), _hoisted_1$5 = {
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
}), _hoisted_1$4 = { class: "list" }, _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
        createVNode(VPIconLanguages, { class: "icon lang" }),
        createTextVNode(" " + toDisplayString(unref(currentLang).label) + " ", 1),
        createVNode(VPIconChevronDown, { class: "icon chevron" })
      ]),
      createBaseVNode("ul", _hoisted_1$4, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createElementBlock("li", {
          key: locale.link,
          class: "item"
        }, [
          createVNode(_sfc_main$X, {
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
});
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d72aa483"]]), _hoisted_1$3 = { class: "container" }, _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-cc5739dd"]]), _hoisted_1$2 = {
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
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ae24b3ad"]]), _withScopeId$1 = (n) => (pushScopeId("data-v-e31bd47b"), n = n(), popScopeId(), n), _hoisted_1$1 = ["role", "tabindex"], _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, null, -1)), _hoisted_3$1 = ["onKeydown"], _hoisted_4 = {
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
            _ctx.item.link ? (openBlock(), createBlock(_sfc_main$X, {
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
            }, [
              createVNode(VPIconChevronRight, { class: "caret-icon" })
            ], 40, _hoisted_3$1)) : createCommentVNode("", !0)
          ], 16, _hoisted_1$1)) : createCommentVNode("", !0),
          _ctx.item.items && _ctx.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_4, [
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
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e31bd47b"]]), _withScopeId = (n) => (pushScopeId("data-v-b00e2fdd"), n = n(), popScopeId(), n), _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "curtain" }, null, -1)), _hoisted_2 = {
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
    const props = __props, { sidebarGroups, hasSidebar } = useSidebar(), navEl = ref(null), isLocked = useScrollLock(inBrowser ? document.body : null);
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
});
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b00e2fdd"]]), _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
});
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f60ec36"]]), _sfc_main = /* @__PURE__ */ defineComponent({
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
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, !0)
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
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a346dfe"]]);
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
export {
  theme as t
};
