var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);
import { Y as __vitePreload, h as ref, y as watch, aq as unrefElement, ar as tryOnScopeDispose, d as defineComponent, H as shallowRef, as as computedAsync, k as computed, at as useSessionStorage, au as useLocalStorage, z as watchEffect, av as watchDebounced, l as onMounted, U as nextTick, S as onKeyStroke, aw as useRouter, ax as useEventListener, Z as useScrollLock, j as inBrowser, ay as onBeforeUnmount, o as openBlock, b as createBlock, m as createBaseVNode, a2 as withModifiers, p as unref, az as withDirectives, aA as vModelText, aB as isRef, c as createElementBlock, n as normalizeClass, e as createCommentVNode, G as renderList, F as Fragment, a as createTextVNode, t as toDisplayString, aC as Teleport, q as pushScopeId, s as popScopeId, aD as markRaw, aE as createApp, af as dataSymbol, al as pathToFile, aF as escapeRegExp, _ as _export_sfc } from "./framework.CL6Y9brc.js";
import { u as useData, c as createSearchTranslate } from "./theme.DCsQFvwz.js";
const localSearchIndex = { root: () => __vitePreload(() => import("./@localSearchIndexroot.DC_x_6fO.js"), []) };
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], candidateSelector = /* @__PURE__ */ candidateSelectors.join(","), NoElement = typeof Element > "u", matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element == null || (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element == null ? void 0 : element.ownerDocument;
}, isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  lookUp === void 0 && (lookUp = !0);
  var inertAtt = node == null || (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert"), inert = inertAtt === "" || inertAtt === "true", result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
}, isContentEditable = function(node) {
  var _node$getAttribute2, attValue = node == null || (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
}, getCandidates = function(el, includeContainer, filter) {
  if (isInert(el))
    return [];
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  return includeContainer && matches.call(el, candidateSelector) && candidates.unshift(el), candidates = candidates.filter(filter), candidates;
}, getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  for (var candidates = [], elementsToCheck = Array.from(elements); elementsToCheck.length; ) {
    var element = elementsToCheck.shift();
    if (!isInert(element, !1))
      if (element.tagName === "SLOT") {
        var assigned = element.assignedElements(), content = assigned.length ? assigned : element.children, nestedCandidates = getCandidatesIteratively2(content, !0, options);
        options.flatten ? candidates.push.apply(candidates, nestedCandidates) : candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      } else {
        var validCandidate = matches.call(element, candidateSelector);
        validCandidate && options.filter(element) && (includeContainer || !elements.includes(element)) && candidates.push(element);
        var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
        typeof options.getShadowRoot == "function" && options.getShadowRoot(element), validShadowRoot = !isInert(shadowRoot, !1) && (!options.shadowRootFilter || options.shadowRootFilter(element));
        if (shadowRoot && validShadowRoot) {
          var _nestedCandidates = getCandidatesIteratively2(shadowRoot === !0 ? element.children : shadowRoot.children, !0, options);
          options.flatten ? candidates.push.apply(candidates, _nestedCandidates) : candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        } else
          elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
  }
  return candidates;
}, hasTabIndex = function(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
}, getTabIndex = function(node) {
  if (!node)
    throw new Error("No node provided");
  return node.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node) ? 0 : node.tabIndex;
}, getSortOrderTabIndex = function(node, isScope) {
  var tabIndex = getTabIndex(node);
  return tabIndex < 0 && isScope && !hasTabIndex(node) ? 0 : tabIndex;
}, sortOrderedTabbables = function(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}, isInput = function(node) {
  return node.tagName === "INPUT";
}, isHiddenInput = function(node) {
  return isInput(node) && node.type === "hidden";
}, isDetailsWithSummary = function(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
}, getCheckedRadio = function(nodes, form) {
  for (var i = 0; i < nodes.length; i++)
    if (nodes[i].checked && nodes[i].form === form)
      return nodes[i];
}, isTabbableRadio = function(node) {
  if (!node.name)
    return !0;
  var radioScope = node.form || getRootNode(node), queryRadios = function(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  }, radioSet;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    radioSet = queryRadios(window.CSS.escape(node.name));
  else
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message), !1;
    }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
}, isRadio = function(node) {
  return isInput(node) && node.type === "radio";
}, isNonTabbableRadio = function(node) {
  return isRadio(node) && !isTabbableRadio(node);
}, isNodeAttached = function(node) {
  var _nodeRoot, nodeRoot = node && getRootNode(node), nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host, attached = !1;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    for (attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node != null && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node)); !attached && nodeRootHost; ) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost), nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host, attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
}, isZeroArea = function(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
}, isHidden = function(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden")
    return !0;
  var isDirectSummary = matches.call(node, "details>summary:first-of-type"), nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *"))
    return !0;
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot == "function") {
      for (var originalNode = node; node; ) {
        var parentElement = node.parentElement, rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === !0)
          return isZeroArea(node);
        node.assignedSlot ? node = node.assignedSlot : !parentElement && rootNode !== node.ownerDocument ? node = rootNode.host : node = parentElement;
      }
      node = originalNode;
    }
    if (isNodeAttached(node))
      return !node.getClientRects().length;
    if (displayCheck !== "legacy-full")
      return !0;
  } else if (displayCheck === "non-zero-area")
    return isZeroArea(node);
  return !1;
}, isDisabledFromFieldset = function(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName))
    for (var parentNode = node.parentElement; parentNode; ) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND")
            return matches.call(parentNode, "fieldset[disabled] *") ? !0 : !child.contains(node);
        }
        return !0;
      }
      parentNode = parentNode.parentElement;
    }
  return !1;
}, isNodeMatchingSelectorFocusable = function(options, node) {
  return !(node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node));
}, isNodeMatchingSelectorTabbable = function(options, node) {
  return !(isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node));
}, isValidShadowRootTabbable = function(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  return !!(isNaN(tabIndex) || tabIndex >= 0);
}, sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [], orderedTabbables = [];
  return candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent, element = isScope ? item.scopeParent : item, candidateTabindex = getSortOrderTabIndex(element, isScope), elements = isScope ? sortByOrder2(item.candidates) : element;
    candidateTabindex === 0 ? isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element) : orderedTabbables.push({
      documentOrder: i,
      tabIndex: candidateTabindex,
      item,
      isScope,
      content: elements
    });
  }), orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    return sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content), acc;
  }, []).concat(regularTabbables);
}, tabbable = function(container, options) {
  options = options || {};
  var candidates;
  return options.getShadowRoot ? candidates = getCandidatesIteratively([container], options.includeContainer, {
    filter: isNodeMatchingSelectorTabbable.bind(null, options),
    flatten: !1,
    getShadowRoot: options.getShadowRoot,
    shadowRootFilter: isValidShadowRootTabbable
  }) : candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options)), sortByOrder(candidates);
}, focusable = function(container, options) {
  options = options || {};
  var candidates;
  return options.getShadowRoot ? candidates = getCandidatesIteratively([container], options.includeContainer, {
    filter: isNodeMatchingSelectorFocusable.bind(null, options),
    flatten: !0,
    getShadowRoot: options.getShadowRoot
  }) : candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options)), candidates;
}, isTabbable = function(node, options) {
  if (options = options || {}, !node)
    throw new Error("No node provided");
  return matches.call(node, candidateSelector) === !1 ? !1 : isNodeMatchingSelectorTabbable(options, node);
}, focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(","), isFocusable = function(node, options) {
  if (options = options || {}, !node)
    throw new Error("No node provided");
  return matches.call(node, focusableCandidateSelector) === !1 ? !1 : isNodeMatchingSelectorFocusable(options, node);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _toPrimitive(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
var activeFocusTraps = {
  activateTrap: function(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      activeTrap !== trap && activeTrap.pause();
    }
    var trapIndex = trapStack.indexOf(trap);
    trapIndex === -1 || trapStack.splice(trapIndex, 1), trapStack.push(trap);
  },
  deactivateTrap: function(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    trapIndex !== -1 && trapStack.splice(trapIndex, 1), trapStack.length > 0 && trapStack[trapStack.length - 1].unpause();
  }
}, isSelectableInput = function(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select == "function";
}, isEscapeEvent = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, isTabEvent = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, isKeyForward = function(e) {
  return isTabEvent(e) && !e.shiftKey;
}, isKeyBackward = function(e) {
  return isTabEvent(e) && e.shiftKey;
}, delay = function(fn) {
  return setTimeout(fn, 0);
}, findIndex = function(arr, fn) {
  var idx = -1;
  return arr.every(function(value, i) {
    return fn(value) ? (idx = i, !1) : !0;
  }), idx;
}, valueOrHandler = function(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    params[_key - 1] = arguments[_key];
  return typeof value == "function" ? value.apply(void 0, params) : value;
}, getActualTarget = function(event) {
  return event.target.shadowRoot && typeof event.composedPath == "function" ? event.composedPath()[0] : event.target;
}, internalTrapStack = [], createFocusTrap = function(elements, userOptions) {
  var doc = (userOptions == null ? void 0 : userOptions.document) || document, trapStack = (userOptions == null ? void 0 : userOptions.trapStack) || internalTrapStack, config = _objectSpread2({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward,
    isKeyBackward
  }, userOptions), state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, trap, getOption = function(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  }, findContainerIndex = function(element, event) {
    var composedPath = typeof (event == null ? void 0 : event.composedPath) == "function" ? event.composedPath() : void 0;
    return state.containerGroups.findIndex(function(_ref) {
      var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (composedPath == null ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  }, getNodeForOption = function(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue == "function") {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
        params[_key2 - 1] = arguments[_key2];
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === !0 && (optionValue = void 0), !optionValue) {
      if (optionValue === void 0 || optionValue === !1)
        return optionValue;
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue == "string" && (node = doc.querySelector(optionValue), !node))
      throw new Error("`".concat(optionName, "` as selector refers to no known node"));
    return node;
  }, getInitialFocusNode = function() {
    var node = getNodeForOption("initialFocus");
    if (node === !1)
      return !1;
    if (node === void 0 || !isFocusable(node, config.tabbableOptions))
      if (findContainerIndex(doc.activeElement) >= 0)
        node = doc.activeElement;
      else {
        var firstTabbableGroup = state.tabbableGroups[0], firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    if (!node)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return node;
  }, updateTabbableNodes = function() {
    if (state.containerGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions), focusableNodes = focusable(container, config.tabbableOptions), firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0, lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0, firstDomTabbableNode = focusableNodes.find(function(node) {
        return isTabbable(node);
      }), lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
        return isTabbable(node);
      }), posTabIndexesFound = !!tabbableNodes.find(function(node) {
        return getTabIndex(node) > 0;
      });
      return {
        container,
        tabbableNodes,
        focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, nodeIdx = tabbableNodes.indexOf(node);
          return nodeIdx < 0 ? forward ? focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
            return isTabbable(el);
          }) : focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
            return isTabbable(el);
          }) : tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    }), state.tabbableGroups = state.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    }), state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (state.containerGroups.find(function(g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, getActiveElement = function getActiveElement2(el) {
    var activeElement = el.activeElement;
    if (activeElement)
      return activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null ? getActiveElement2(activeElement.shadowRoot) : activeElement;
  }, tryFocus = function tryFocus2(node) {
    if (node !== !1 && node !== getActiveElement(document)) {
      if (!node || !node.focus) {
        tryFocus2(getInitialFocusNode());
        return;
      }
      node.focus({
        preventScroll: !!config.preventScroll
      }), state.mostRecentlyFocusedNode = node, isSelectableInput(node) && node.select();
    }
  }, getReturnFocusNode = function(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", previousActiveElement);
    return node || (node === !1 ? !1 : previousActiveElement);
  }, findNextNavNode = function(_ref2) {
    var target = _ref2.target, event = _ref2.event, _ref2$isBackward = _ref2.isBackward, isBackward = _ref2$isBackward === void 0 ? !1 : _ref2$isBackward;
    target = target || getActualTarget(event), updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target, event), containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0)
        isBackward ? destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode : destinationNode = state.tabbableGroups[0].firstTabbableNode;
      else if (isBackward) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
          var firstTabbableNode = _ref3.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, !1)) && (startOfGroupIndex = containerIndex), startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1, destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else
          isTabEvent(event) || (destinationNode = containerGroup.nextTabbableNode(target, !1));
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref4) {
          var lastTabbableNode = _ref4.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target)) && (lastOfGroupIndex = containerIndex), lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1, _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else
          isTabEvent(event) || (destinationNode = containerGroup.nextTabbableNode(target));
      }
    } else
      destinationNode = getNodeForOption("fallbackFocus");
    return destinationNode;
  }, checkPointerDown = function(e) {
    var target = getActualTarget(e);
    if (!(findContainerIndex(target, e) >= 0)) {
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        trap.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: config.returnFocusOnDeactivate
        });
        return;
      }
      valueOrHandler(config.allowOutsideClick, e) || e.preventDefault();
    }
  }, checkFocusIn = function(event) {
    var target = getActualTarget(event), targetContained = findContainerIndex(target, event) >= 0;
    if (targetContained || target instanceof Document)
      targetContained && (state.mostRecentlyFocusedNode = target);
    else {
      event.stopImmediatePropagation();
      var nextNode, navAcrossContainers = !0;
      if (state.mostRecentlyFocusedNode)
        if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode), tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            var mruTabIdx = tabbableNodes.findIndex(function(node) {
              return node === state.mostRecentlyFocusedNode;
            });
            mruTabIdx >= 0 && (config.isKeyForward(state.recentNavEvent) ? mruTabIdx + 1 < tabbableNodes.length && (nextNode = tabbableNodes[mruTabIdx + 1], navAcrossContainers = !1) : mruTabIdx - 1 >= 0 && (nextNode = tabbableNodes[mruTabIdx - 1], navAcrossContainers = !1));
          }
        } else
          state.containerGroups.some(function(g) {
            return g.tabbableNodes.some(function(n) {
              return getTabIndex(n) > 0;
            });
          }) || (navAcrossContainers = !1);
      else
        navAcrossContainers = !1;
      navAcrossContainers && (nextNode = findNextNavNode({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: state.mostRecentlyFocusedNode,
        isBackward: config.isKeyBackward(state.recentNavEvent)
      })), tryFocus(nextNode || state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
    state.recentNavEvent = void 0;
  }, checkKeyNav = function(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event,
      isBackward
    });
    destinationNode && (isTabEvent(event) && event.preventDefault(), tryFocus(destinationNode));
  }, checkKey = function(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== !1) {
      event.preventDefault(), trap.deactivate();
      return;
    }
    (config.isKeyForward(event) || config.isKeyBackward(event)) && checkKeyNav(event, config.isKeyBackward(event));
  }, checkClick = function(e) {
    var target = getActualTarget(e);
    findContainerIndex(target, e) >= 0 || valueOrHandler(config.clickOutsideDeactivates, e) || valueOrHandler(config.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
  }, addListeners = function() {
    if (state.active)
      return activeFocusTraps.activateTrap(trapStack, trap), state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode()), doc.addEventListener("focusin", checkFocusIn, !0), doc.addEventListener("mousedown", checkPointerDown, {
        capture: !0,
        passive: !1
      }), doc.addEventListener("touchstart", checkPointerDown, {
        capture: !0,
        passive: !1
      }), doc.addEventListener("click", checkClick, {
        capture: !0,
        passive: !1
      }), doc.addEventListener("keydown", checkKey, {
        capture: !0,
        passive: !1
      }), trap;
  }, removeListeners = function() {
    if (state.active)
      return doc.removeEventListener("focusin", checkFocusIn, !0), doc.removeEventListener("mousedown", checkPointerDown, !0), doc.removeEventListener("touchstart", checkPointerDown, !0), doc.removeEventListener("click", checkClick, !0), doc.removeEventListener("keydown", checkKey, !0), trap;
  }, checkDomRemoval = function(mutations) {
    var isFocusedNodeRemoved = mutations.some(function(mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function(node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });
    isFocusedNodeRemoved && tryFocus(getInitialFocusNode());
  }, mutationObserver = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0, updateObservedNodes = function() {
    mutationObserver && (mutationObserver.disconnect(), state.active && !state.paused && state.containers.map(function(container) {
      mutationObserver.observe(container, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function(activateOptions) {
      if (state.active)
        return this;
      var onActivate = getOption(activateOptions, "onActivate"), onPostActivate = getOption(activateOptions, "onPostActivate"), checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      checkCanFocusTrap || updateTabbableNodes(), state.active = !0, state.paused = !1, state.nodeFocusedBeforeActivation = doc.activeElement, onActivate == null || onActivate();
      var finishActivation = function() {
        checkCanFocusTrap && updateTabbableNodes(), addListeners(), updateObservedNodes(), onPostActivate == null || onPostActivate();
      };
      return checkCanFocusTrap ? (checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation), this) : (finishActivation(), this);
    },
    deactivate: function(deactivateOptions) {
      if (!state.active)
        return this;
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer), state.delayInitialFocusTimer = void 0, removeListeners(), state.active = !1, state.paused = !1, updateObservedNodes(), activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, "onDeactivate"), onPostDeactivate = getOption(options, "onPostDeactivate"), checkCanReturnFocus = getOption(options, "checkCanReturnFocus"), returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      onDeactivate == null || onDeactivate();
      var finishDeactivation = function() {
        delay(function() {
          returnFocus && tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)), onPostDeactivate == null || onPostDeactivate();
        });
      };
      return returnFocus && checkCanReturnFocus ? (checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation), this) : (finishDeactivation(), this);
    },
    pause: function(pauseOptions) {
      if (state.paused || !state.active)
        return this;
      var onPause = getOption(pauseOptions, "onPause"), onPostPause = getOption(pauseOptions, "onPostPause");
      return state.paused = !0, onPause == null || onPause(), removeListeners(), updateObservedNodes(), onPostPause == null || onPostPause(), this;
    },
    unpause: function(unpauseOptions) {
      if (!state.paused || !state.active)
        return this;
      var onUnpause = getOption(unpauseOptions, "onUnpause"), onPostUnpause = getOption(unpauseOptions, "onPostUnpause");
      return state.paused = !1, onUnpause == null || onUnpause(), updateTabbableNodes(), addListeners(), updateObservedNodes(), onPostUnpause == null || onPostUnpause(), this;
    },
    updateContainerElements: function(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      return state.containers = elementsAsArray.map(function(element) {
        return typeof element == "string" ? doc.querySelector(element) : element;
      }), state.active && updateTabbableNodes(), updateObservedNodes(), this;
    }
  }, trap.updateContainerElements(elements), trap;
};
function useFocusTrap(target, options = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = options, hasFocus = ref(!1), isPaused = ref(!1), activate = (opts) => trap && trap.activate(opts), deactivate = (opts) => trap && trap.deactivate(opts), pause = () => {
    trap && (trap.pause(), isPaused.value = !0);
  }, unpause = () => {
    trap && (trap.unpause(), isPaused.value = !1);
  };
  return watch(
    () => unrefElement(target),
    (el) => {
      el && (trap = createFocusTrap(el, {
        ...focusTrapOptions,
        onActivate() {
          hasFocus.value = !0, options.onActivate && options.onActivate();
        },
        onDeactivate() {
          hasFocus.value = !1, options.onDeactivate && options.onDeactivate();
        }
      }), immediate && activate());
    },
    { flush: "post" }
  ), tryOnScopeDispose(() => deactivate()), {
    hasFocus,
    isPaused,
    activate,
    deactivate,
    pause,
    unpause
  };
}
class DOMIterator {
  /**
   * @param {HTMLElement|HTMLElement[]|NodeList|string} ctx - The context DOM
   * element, an array of DOM elements, a NodeList or a selector
   * @param {boolean} [iframes=true] - A boolean indicating if iframes should
   * be handled
   * @param {string[]} [exclude=[]] - An array containing exclusion selectors
   * for iframes
   * @param {number} [iframesTimeout=5000] - A number indicating the ms to
   * wait before an iframe should be skipped, in case the load event isn't
   * fired. This also applies if the user is offline and the resource of the
   * iframe is online (either by the browsers "offline" mode or because
   * there's no internet connection)
   */
  constructor(ctx, iframes = !0, exclude = [], iframesTimeout = 5e3) {
    this.ctx = ctx, this.iframes = iframes, this.exclude = exclude, this.iframesTimeout = iframesTimeout;
  }
  /**
   * Checks if the specified DOM element matches the selector
   * @param  {HTMLElement} element - The DOM element
   * @param  {string|string[]} selector - The selector or an array with
   * selectors
   * @return {boolean}
   * @access public
   */
  static matches(element, selector) {
    const selectors = typeof selector == "string" ? [selector] : selector, fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
    if (fn) {
      let match = !1;
      return selectors.every((sel) => fn.call(element, sel) ? (match = !0, !1) : !0), match;
    } else
      return !1;
  }
  /**
   * Returns all contexts filtered by duplicates (even nested)
   * @return {HTMLElement[]} - An array containing DOM contexts
   * @access protected
   */
  getContexts() {
    let ctx, filteredCtx = [];
    return typeof this.ctx > "u" || !this.ctx ? ctx = [] : NodeList.prototype.isPrototypeOf(this.ctx) ? ctx = Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? ctx = this.ctx : typeof this.ctx == "string" ? ctx = Array.prototype.slice.call(
      document.querySelectorAll(this.ctx)
    ) : ctx = [this.ctx], ctx.forEach((ctx2) => {
      const isDescendant = filteredCtx.filter((contexts) => contexts.contains(ctx2)).length > 0;
      filteredCtx.indexOf(ctx2) === -1 && !isDescendant && filteredCtx.push(ctx2);
    }), filteredCtx;
  }
  /**
   * @callback DOMIterator~getIframeContentsSuccessCallback
   * @param {HTMLDocument} contents - The contentDocument of the iframe
   */
  /**
   * Calls the success callback function with the iframe document. If it can't
   * be accessed it calls the error callback function
   * @param {HTMLElement} ifr - The iframe DOM element
   * @param {DOMIterator~getIframeContentsSuccessCallback} successFn
   * @param {function} [errorFn]
   * @access protected
   */
  getIframeContents(ifr, successFn, errorFn = () => {
  }) {
    let doc;
    try {
      const ifrWin = ifr.contentWindow;
      if (doc = ifrWin.document, !ifrWin || !doc)
        throw new Error("iframe inaccessible");
    } catch {
      errorFn();
    }
    doc && successFn(doc);
  }
  /**
   * Checks if an iframe is empty (if about:blank is the shown page)
   * @param {HTMLElement} ifr - The iframe DOM element
   * @return {boolean}
   * @access protected
   */
  isIframeBlank(ifr) {
    const bl = "about:blank", src = ifr.getAttribute("src").trim();
    return ifr.contentWindow.location.href === bl && src !== bl && src;
  }
  /**
   * Observes the onload event of an iframe and calls the success callback or
   * the error callback if the iframe is inaccessible. If the event isn't
   * fired within the specified {@link DOMIterator#iframesTimeout}, then it'll
   * call the error callback too
   * @param {HTMLElement} ifr - The iframe DOM element
   * @param {DOMIterator~getIframeContentsSuccessCallback} successFn
   * @param {function} errorFn
   * @access protected
   */
  observeIframeLoad(ifr, successFn, errorFn) {
    let called = !1, tout = null;
    const listener = () => {
      if (!called) {
        called = !0, clearTimeout(tout);
        try {
          this.isIframeBlank(ifr) || (ifr.removeEventListener("load", listener), this.getIframeContents(ifr, successFn, errorFn));
        } catch {
          errorFn();
        }
      }
    };
    ifr.addEventListener("load", listener), tout = setTimeout(listener, this.iframesTimeout);
  }
  /**
   * Callback when the iframe is ready
   * @callback DOMIterator~onIframeReadySuccessCallback
   * @param {HTMLDocument} contents - The contentDocument of the iframe
   */
  /**
   * Callback if the iframe can't be accessed
   * @callback DOMIterator~onIframeReadyErrorCallback
   */
  /**
   * Calls the callback if the specified iframe is ready for DOM access
   * @param  {HTMLElement} ifr - The iframe DOM element
   * @param  {DOMIterator~onIframeReadySuccessCallback} successFn - Success
   * callback
   * @param {DOMIterator~onIframeReadyErrorCallback} errorFn - Error callback
   * @see {@link http://stackoverflow.com/a/36155560/3894981} for
   * background information
   * @access protected
   */
  onIframeReady(ifr, successFn, errorFn) {
    try {
      ifr.contentWindow.document.readyState === "complete" ? this.isIframeBlank(ifr) ? this.observeIframeLoad(ifr, successFn, errorFn) : this.getIframeContents(ifr, successFn, errorFn) : this.observeIframeLoad(ifr, successFn, errorFn);
    } catch {
      errorFn();
    }
  }
  /**
   * Callback when all iframes are ready for DOM access
   * @callback DOMIterator~waitForIframesDoneCallback
   */
  /**
   * Iterates over all iframes and calls the done callback when all of them
   * are ready for DOM access (including nested ones)
   * @param {HTMLElement} ctx - The context DOM element
   * @param {DOMIterator~waitForIframesDoneCallback} done - Done callback
   */
  waitForIframes(ctx, done) {
    let eachCalled = 0;
    this.forEachIframe(ctx, () => !0, (ifr) => {
      eachCalled++, this.waitForIframes(ifr.querySelector("html"), () => {
        --eachCalled || done();
      });
    }, (handled) => {
      handled || done();
    });
  }
  /**
   * Callback allowing to filter an iframe. Must return true when the element
   * should remain, otherwise false
   * @callback DOMIterator~forEachIframeFilterCallback
   * @param {HTMLElement} iframe - The iframe DOM element
   */
  /**
   * Callback for each iframe content
   * @callback DOMIterator~forEachIframeEachCallback
   * @param {HTMLElement} content - The iframe document
   */
  /**
   * Callback if all iframes inside the context were handled
   * @callback DOMIterator~forEachIframeEndCallback
   * @param {number} handled - The number of handled iframes (those who
   * wheren't filtered)
   */
  /**
   * Iterates over all iframes inside the specified context and calls the
   * callbacks when they're ready. Filters iframes based on the instance
   * exclusion selectors
   * @param {HTMLElement} ctx - The context DOM element
   * @param {DOMIterator~forEachIframeFilterCallback} filter - Filter callback
   * @param {DOMIterator~forEachIframeEachCallback} each - Each callback
   * @param {DOMIterator~forEachIframeEndCallback} [end] - End callback
   * @access protected
   */
  forEachIframe(ctx, filter, each, end = () => {
  }) {
    let ifr = ctx.querySelectorAll("iframe"), open = ifr.length, handled = 0;
    ifr = Array.prototype.slice.call(ifr);
    const checkEnd = () => {
      --open <= 0 && end(handled);
    };
    open || checkEnd(), ifr.forEach((ifr2) => {
      DOMIterator.matches(ifr2, this.exclude) ? checkEnd() : this.onIframeReady(ifr2, (con) => {
        filter(ifr2) && (handled++, each(con)), checkEnd();
      }, checkEnd);
    });
  }
  /**
   * Creates a NodeIterator on the specified context
   * @see {@link https://developer.mozilla.org/en/docs/Web/API/NodeIterator}
   * @param {HTMLElement} ctx - The context DOM element
   * @param {DOMIterator~whatToShow} whatToShow
   * @param {DOMIterator~filterCb} filter
   * @return {NodeIterator}
   * @access protected
   */
  createIterator(ctx, whatToShow, filter) {
    return document.createNodeIterator(ctx, whatToShow, filter, !1);
  }
  /**
   * Creates an instance of DOMIterator in an iframe
   * @param {HTMLDocument} contents - Iframe document
   * @return {DOMIterator}
   * @access protected
   */
  createInstanceOnIframe(contents) {
    return new DOMIterator(contents.querySelector("html"), this.iframes);
  }
  /**
   * Checks if an iframe occurs between two nodes, more specifically if an
   * iframe occurs before the specified node and after the specified prevNode
   * @param {HTMLElement} node - The node that should occur after the iframe
   * @param {HTMLElement} prevNode - The node that should occur before the
   * iframe
   * @param {HTMLElement} ifr - The iframe to check against
   * @return {boolean}
   * @access protected
   */
  compareNodeIframe(node, prevNode, ifr) {
    const compCurr = node.compareDocumentPosition(ifr), prev = Node.DOCUMENT_POSITION_PRECEDING;
    if (compCurr & prev)
      if (prevNode !== null) {
        const compPrev = prevNode.compareDocumentPosition(ifr), after = Node.DOCUMENT_POSITION_FOLLOWING;
        if (compPrev & after)
          return !0;
      } else
        return !0;
    return !1;
  }
  /**
   * @typedef {DOMIterator~getIteratorNodeReturn}
   * @type {object.<string>}
   * @property {HTMLElement} prevNode - The previous node or null if there is
   * no
   * @property {HTMLElement} node - The current node
   */
  /**
   * Returns the previous and current node of the specified iterator
   * @param {NodeIterator} itr - The iterator
   * @return {DOMIterator~getIteratorNodeReturn}
   * @access protected
   */
  getIteratorNode(itr) {
    const prevNode = itr.previousNode();
    let node;
    return prevNode === null ? node = itr.nextNode() : node = itr.nextNode() && itr.nextNode(), {
      prevNode,
      node
    };
  }
  /**
   * An array containing objects. The object key "val" contains an iframe
   * DOM element. The object key "handled" contains a boolean indicating if
   * the iframe was handled already.
   * It wouldn't be enough to save all open or all already handled iframes.
   * The information of open iframes is necessary because they may occur after
   * all other text nodes (and compareNodeIframe would never be true). The
   * information of already handled iframes is necessary as otherwise they may
   * be handled multiple times
   * @typedef DOMIterator~checkIframeFilterIfr
   * @type {object[]}
   */
  /**
   * Checks if an iframe wasn't handled already and if so, calls
   * {@link DOMIterator#compareNodeIframe} to check if it should be handled.
   * Information wheter an iframe was or wasn't handled is given within the
   * <code>ifr</code> dictionary
   * @param {HTMLElement} node - The node that should occur after the iframe
   * @param {HTMLElement} prevNode - The node that should occur before the
   * iframe
   * @param {HTMLElement} currIfr - The iframe to check
   * @param {DOMIterator~checkIframeFilterIfr} ifr - The iframe dictionary.
   * Will be manipulated (by reference)
   * @return {boolean} Returns true when it should be handled, otherwise false
   * @access protected
   */
  checkIframeFilter(node, prevNode, currIfr, ifr) {
    let key = !1, handled = !1;
    return ifr.forEach((ifrDict, i) => {
      ifrDict.val === currIfr && (key = i, handled = ifrDict.handled);
    }), this.compareNodeIframe(node, prevNode, currIfr) ? (key === !1 && !handled ? ifr.push({
      val: currIfr,
      handled: !0
    }) : key !== !1 && !handled && (ifr[key].handled = !0), !0) : (key === !1 && ifr.push({
      val: currIfr,
      handled: !1
    }), !1);
  }
  /**
   * Creates an iterator on all open iframes in the specified array and calls
   * the end callback when finished
   * @param {DOMIterator~checkIframeFilterIfr} ifr
   * @param {DOMIterator~whatToShow} whatToShow
   * @param  {DOMIterator~forEachNodeCallback} eCb - Each callback
   * @param {DOMIterator~filterCb} fCb
   * @access protected
   */
  handleOpenIframes(ifr, whatToShow, eCb, fCb) {
    ifr.forEach((ifrDict) => {
      ifrDict.handled || this.getIframeContents(ifrDict.val, (con) => {
        this.createInstanceOnIframe(con).forEachNode(
          whatToShow,
          eCb,
          fCb
        );
      });
    });
  }
  /**
   * Iterates through all nodes in the specified context and handles iframe
   * nodes at the correct position
   * @param {DOMIterator~whatToShow} whatToShow
   * @param {HTMLElement} ctx - The context
   * @param  {DOMIterator~forEachNodeCallback} eachCb - Each callback
   * @param {DOMIterator~filterCb} filterCb - Filter callback
   * @param {DOMIterator~forEachNodeEndCallback} doneCb - End callback
   * @access protected
   */
  iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
    const itr = this.createIterator(ctx, whatToShow, filterCb);
    let ifr = [], elements = [], node, prevNode, retrieveNodes = () => ({
      prevNode,
      node
    } = this.getIteratorNode(itr), node);
    for (; retrieveNodes(); )
      this.iframes && this.forEachIframe(ctx, (currIfr) => this.checkIframeFilter(node, prevNode, currIfr, ifr), (con) => {
        this.createInstanceOnIframe(con).forEachNode(
          whatToShow,
          (ifrNode) => elements.push(ifrNode),
          filterCb
        );
      }), elements.push(node);
    elements.forEach((node2) => {
      eachCb(node2);
    }), this.iframes && this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb), doneCb();
  }
  /**
   * Callback for each node
   * @callback DOMIterator~forEachNodeCallback
   * @param {HTMLElement} node - The DOM text node element
   */
  /**
   * Callback if all contexts were handled
   * @callback DOMIterator~forEachNodeEndCallback
   */
  /**
   * Iterates over all contexts and initializes
   * {@link DOMIterator#iterateThroughNodes iterateThroughNodes} on them
   * @param {DOMIterator~whatToShow} whatToShow
   * @param  {DOMIterator~forEachNodeCallback} each - Each callback
   * @param {DOMIterator~filterCb} filter - Filter callback
   * @param {DOMIterator~forEachNodeEndCallback} done - End callback
   * @access public
   */
  forEachNode(whatToShow, each, filter, done = () => {
  }) {
    const contexts = this.getContexts();
    let open = contexts.length;
    open || done(), contexts.forEach((ctx) => {
      const ready = () => {
        this.iterateThroughNodes(whatToShow, ctx, each, filter, () => {
          --open <= 0 && done();
        });
      };
      this.iframes ? this.waitForIframes(ctx, ready) : ready();
    });
  }
  /**
   * Callback to filter nodes. Can return e.g. NodeFilter.FILTER_ACCEPT or
   * NodeFilter.FILTER_REJECT
   * @see {@link http://tinyurl.com/zdczmm2}
   * @callback DOMIterator~filterCb
   * @param {HTMLElement} node - The node to filter
   */
  /**
   * @typedef DOMIterator~whatToShow
   * @see {@link http://tinyurl.com/zfqqkx2}
   * @type {number}
   */
}
let Mark$1 = class {
  // eslint-disable-line no-unused-vars
  /**
   * @param {HTMLElement|HTMLElement[]|NodeList|string} ctx - The context DOM
   * element, an array of DOM elements, a NodeList or a selector
   */
  constructor(ctx) {
    this.ctx = ctx, this.ie = !1;
    const ua = window.navigator.userAgent;
    (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1) && (this.ie = !0);
  }
  /**
   * Options defined by the user. They will be initialized from one of the
   * public methods. See {@link Mark#mark}, {@link Mark#markRegExp},
   * {@link Mark#markRanges} and {@link Mark#unmark} for option properties.
   * @type {object}
   * @param {object} [val] - An object that will be merged with defaults
   * @access protected
   */
  set opt(val) {
    this._opt = Object.assign({}, {
      element: "",
      className: "",
      exclude: [],
      iframes: !1,
      iframesTimeout: 5e3,
      separateWordSearch: !0,
      diacritics: !0,
      synonyms: {},
      accuracy: "partially",
      acrossElements: !1,
      caseSensitive: !1,
      ignoreJoiners: !1,
      ignoreGroups: 0,
      ignorePunctuation: [],
      wildcards: "disabled",
      each: () => {
      },
      noMatch: () => {
      },
      filter: () => !0,
      done: () => {
      },
      debug: !1,
      log: window.console
    }, val);
  }
  get opt() {
    return this._opt;
  }
  /**
   * An instance of DOMIterator
   * @type {DOMIterator}
   * @access protected
   */
  get iterator() {
    return new DOMIterator(
      this.ctx,
      this.opt.iframes,
      this.opt.exclude,
      this.opt.iframesTimeout
    );
  }
  /**
   * Logs a message if log is enabled
   * @param {string} msg - The message to log
   * @param {string} [level="debug"] - The log level, e.g. <code>warn</code>
   * <code>error</code>, <code>debug</code>
   * @access protected
   */
  log(msg, level = "debug") {
    const log = this.opt.log;
    this.opt.debug && typeof log == "object" && typeof log[level] == "function" && log[level](`mark.js: ${msg}`);
  }
  /**
   * Escapes a string for usage within a regular expression
   * @param {string} str - The string to escape
   * @return {string}
   * @access protected
   */
  escapeStr(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  /**
   * Creates a regular expression string to match the specified search
   * term including synonyms, diacritics and accuracy if defined
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  createRegExp(str) {
    return this.opt.wildcards !== "disabled" && (str = this.setupWildcardsRegExp(str)), str = this.escapeStr(str), Object.keys(this.opt.synonyms).length && (str = this.createSynonymsRegExp(str)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (str = this.setupIgnoreJoinersRegExp(str)), this.opt.diacritics && (str = this.createDiacriticsRegExp(str)), str = this.createMergedBlanksRegExp(str), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (str = this.createJoinersRegExp(str)), this.opt.wildcards !== "disabled" && (str = this.createWildcardsRegExp(str)), str = this.createAccuracyRegExp(str), str;
  }
  /**
   * Creates a regular expression string to match the defined synonyms
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  createSynonymsRegExp(str) {
    const syn = this.opt.synonyms, sens = this.opt.caseSensitive ? "" : "i", joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
    for (let index in syn)
      if (syn.hasOwnProperty(index)) {
        const value = syn[index], k1 = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(index) : this.escapeStr(index), k2 = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
        k1 !== "" && k2 !== "" && (str = str.replace(
          new RegExp(
            `(${this.escapeStr(k1)}|${this.escapeStr(k2)})`,
            `gm${sens}`
          ),
          joinerPlaceholder + `(${this.processSynomyms(k1)}|${this.processSynomyms(k2)})` + joinerPlaceholder
        ));
      }
    return str;
  }
  /**
   * Setup synonyms to work with ignoreJoiners and or ignorePunctuation
   * @param {string} str - synonym key or value to process
   * @return {string} - processed synonym string
   */
  processSynomyms(str) {
    return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (str = this.setupIgnoreJoinersRegExp(str)), str;
  }
  /**
   * Sets up the regular expression string to allow later insertion of
   * wildcard regular expression matches
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  setupWildcardsRegExp(str) {
    return str = str.replace(/(?:\\)*\?/g, (val) => val.charAt(0) === "\\" ? "?" : ""), str.replace(/(?:\\)*\*/g, (val) => val.charAt(0) === "\\" ? "*" : "");
  }
  /**
   * Sets up the regular expression string to allow later insertion of
   * wildcard regular expression matches
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  createWildcardsRegExp(str) {
    let spaces = this.opt.wildcards === "withSpaces";
    return str.replace(/\u0001/g, spaces ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, spaces ? "[\\S\\s]*?" : "\\S*");
  }
  /**
   * Sets up the regular expression string to allow later insertion of
   * designated characters (soft hyphens & zero width characters)
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  setupIgnoreJoinersRegExp(str) {
    return str.replace(/[^(|)\\]/g, (val, indx, original) => {
      let nextChar = original.charAt(indx + 1);
      return /[(|)\\]/.test(nextChar) || nextChar === "" ? val : val + "\0";
    });
  }
  /**
   * Creates a regular expression string to allow ignoring of designated
   * characters (soft hyphens, zero width characters & punctuation) based on
   * the specified option values of <code>ignorePunctuation</code> and
   * <code>ignoreJoiners</code>
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  createJoinersRegExp(str) {
    let joiner = [];
    const ignorePunctuation = this.opt.ignorePunctuation;
    return Array.isArray(ignorePunctuation) && ignorePunctuation.length && joiner.push(this.escapeStr(ignorePunctuation.join(""))), this.opt.ignoreJoiners && joiner.push("\\u00ad\\u200b\\u200c\\u200d"), joiner.length ? str.split(/\u0000+/).join(`[${joiner.join("")}]*`) : str;
  }
  /**
   * Creates a regular expression string to match diacritics
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  createDiacriticsRegExp(str) {
    const sens = this.opt.caseSensitive ? "" : "i", dct = this.opt.caseSensitive ? [
      "aàáảãạăằắẳẵặâầấẩẫậäåāą",
      "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
      "cçćč",
      "CÇĆČ",
      "dđď",
      "DĐĎ",
      "eèéẻẽẹêềếểễệëěēę",
      "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
      "iìíỉĩịîïī",
      "IÌÍỈĨỊÎÏĪ",
      "lł",
      "LŁ",
      "nñňń",
      "NÑŇŃ",
      "oòóỏõọôồốổỗộơởỡớờợöøō",
      "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
      "rř",
      "RŘ",
      "sšśșş",
      "SŠŚȘŞ",
      "tťțţ",
      "TŤȚŢ",
      "uùúủũụưừứửữựûüůū",
      "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
      "yýỳỷỹỵÿ",
      "YÝỲỶỸỴŸ",
      "zžżź",
      "ZŽŻŹ"
    ] : [
      "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
      "cçćčCÇĆČ",
      "dđďDĐĎ",
      "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
      "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
      "lłLŁ",
      "nñňńNÑŇŃ",
      "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
      "rřRŘ",
      "sšśșşSŠŚȘŞ",
      "tťțţTŤȚŢ",
      "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
      "yýỳỷỹỵÿYÝỲỶỸỴŸ",
      "zžżźZŽŻŹ"
    ];
    let handled = [];
    return str.split("").forEach((ch) => {
      dct.every((dct2) => {
        if (dct2.indexOf(ch) !== -1) {
          if (handled.indexOf(dct2) > -1)
            return !1;
          str = str.replace(
            new RegExp(`[${dct2}]`, `gm${sens}`),
            `[${dct2}]`
          ), handled.push(dct2);
        }
        return !0;
      });
    }), str;
  }
  /**
   * Creates a regular expression string that merges whitespace characters
   * including subsequent ones into a single pattern, one or multiple
   * whitespaces
   * @param  {string} str - The search term to be used
   * @return {string}
   * @access protected
   */
  createMergedBlanksRegExp(str) {
    return str.replace(/[\s]+/gmi, "[\\s]+");
  }
  /**
   * Creates a regular expression string to match the specified string with
   * the defined accuracy. As in the regular expression of "exactly" can be
   * a group containing a blank at the beginning, all regular expressions will
   * be created with two groups. The first group can be ignored (may contain
   * the said blank), the second contains the actual match
   * @param  {string} str - The searm term to be used
   * @return {str}
   * @access protected
   */
  createAccuracyRegExp(str) {
    const chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿";
    let acc = this.opt.accuracy, val = typeof acc == "string" ? acc : acc.value, ls = typeof acc == "string" ? [] : acc.limiters, lsJoin = "";
    switch (ls.forEach((limiter) => {
      lsJoin += `|${this.escapeStr(limiter)}`;
    }), val) {
      case "partially":
      default:
        return `()(${str})`;
      case "complementary":
        return lsJoin = "\\s" + (lsJoin || this.escapeStr(chars)), `()([^${lsJoin}]*${str}[^${lsJoin}]*)`;
      case "exactly":
        return `(^|\\s${lsJoin})(${str})(?=$|\\s${lsJoin})`;
    }
  }
  /**
   * @typedef Mark~separatedKeywords
   * @type {object.<string>}
   * @property {array.<string>} keywords - The list of keywords
   * @property {number} length - The length
   */
  /**
   * Returns a list of keywords dependent on whether separate word search
   * was defined. Also it filters empty keywords
   * @param {array} sv - The array of keywords
   * @return {Mark~separatedKeywords}
   * @access protected
   */
  getSeparatedKeywords(sv) {
    let stack = [];
    return sv.forEach((kw) => {
      this.opt.separateWordSearch ? kw.split(" ").forEach((kwSplitted) => {
        kwSplitted.trim() && stack.indexOf(kwSplitted) === -1 && stack.push(kwSplitted);
      }) : kw.trim() && stack.indexOf(kw) === -1 && stack.push(kw);
    }), {
      // sort because of https://git.io/v6USg
      keywords: stack.sort((a, b) => b.length - a.length),
      length: stack.length
    };
  }
  /**
   * Check if a value is a number
   * @param {number|string} value - the value to check;
   * numeric strings allowed
   * @return {boolean}
   * @access protected
   */
  isNumeric(value) {
    return Number(parseFloat(value)) == value;
  }
  /**
   * @typedef Mark~rangeObject
   * @type {object}
   * @property {number} start - The start position within the composite value
   * @property {number} length - The length of the string to mark within the
   * composite value.
   */
  /**
   * @typedef Mark~setOfRanges
   * @type {object[]}
   * @property {Mark~rangeObject}
   */
  /**
   * Returns a processed list of integer offset indexes that do not overlap
   * each other, and remove any string values or additional elements
   * @param {Mark~setOfRanges} array - unprocessed raw array
   * @return {Mark~setOfRanges} - processed array with any invalid entries
   * removed
   * @throws Will throw an error if an array of objects is not passed
   * @access protected
   */
  checkRanges(array) {
    if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== "[object Object]")
      return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(array), [];
    const stack = [];
    let last2 = 0;
    return array.sort((a, b) => a.start - b.start).forEach((item) => {
      let { start, end, valid } = this.callNoMatchOnInvalidRanges(item, last2);
      valid && (item.start = start, item.length = end - start, stack.push(item), last2 = end);
    }), stack;
  }
  /**
   * @typedef Mark~validObject
   * @type {object}
   * @property {number} start - The start position within the composite value
   * @property {number} end - The calculated end position within the composite
   * value.
   * @property {boolean} valid - boolean value indicating that the start and
   * calculated end range is valid
   */
  /**
    * Initial validation of ranges for markRanges. Preliminary checks are done
    * to ensure the start and length values exist and are not zero or non-
    * numeric
    * @param {Mark~rangeObject} range - the current range object
    * @param {number} last - last index of range
    * @return {Mark~validObject}
    * @access protected
    */
  callNoMatchOnInvalidRanges(range, last2) {
    let start, end, valid = !1;
    return range && typeof range.start < "u" ? (start = parseInt(range.start, 10), end = start + parseInt(range.length, 10), this.isNumeric(range.start) && this.isNumeric(range.length) && end - last2 > 0 && end - start > 0 ? valid = !0 : (this.log(
      `Ignoring invalid or overlapping range: ${JSON.stringify(range)}`
    ), this.opt.noMatch(range))) : (this.log(`Ignoring invalid range: ${JSON.stringify(range)}`), this.opt.noMatch(range)), {
      start,
      end,
      valid
    };
  }
  /**
   * Check valid range for markRanges. Check ranges with access to the context
   * string. Range values are double checked, lengths that extend the mark
   * beyond the string length are limitied and ranges containing only
   * whitespace are ignored
   * @param {Mark~rangeObject} range - the current range object
   * @param {number} originalLength - original length of the context string
   * @param {string} string - current content string
   * @return {Mark~validObject}
   * @access protected
   */
  checkWhitespaceRanges(range, originalLength, string) {
    let end, valid = !0, max = string.length, offset = originalLength - max, start = parseInt(range.start, 10) - offset;
    return start = start > max ? max : start, end = start + parseInt(range.length, 10), end > max && (end = max, this.log(`End range automatically set to the max value of ${max}`)), start < 0 || end - start < 0 || start > max || end > max ? (valid = !1, this.log(`Invalid range: ${JSON.stringify(range)}`), this.opt.noMatch(range)) : string.substring(start, end).replace(/\s+/g, "") === "" && (valid = !1, this.log("Skipping whitespace only range: " + JSON.stringify(range)), this.opt.noMatch(range)), {
      start,
      end,
      valid
    };
  }
  /**
   * @typedef Mark~getTextNodesDict
   * @type {object.<string>}
   * @property {string} value - The composite value of all text nodes
   * @property {object[]} nodes - An array of objects
   * @property {number} nodes.start - The start position within the composite
   * value
   * @property {number} nodes.end - The end position within the composite
   * value
   * @property {HTMLElement} nodes.node - The DOM text node element
   */
  /**
   * Callback
   * @callback Mark~getTextNodesCallback
   * @param {Mark~getTextNodesDict}
   */
  /**
   * Calls the callback with an object containing all text nodes (including
   * iframe text nodes) with start and end positions and the composite value
   * of them (string)
   * @param {Mark~getTextNodesCallback} cb - Callback
   * @access protected
   */
  getTextNodes(cb) {
    let val = "", nodes = [];
    this.iterator.forEachNode(NodeFilter.SHOW_TEXT, (node) => {
      nodes.push({
        start: val.length,
        end: (val += node.textContent).length,
        node
      });
    }, (node) => this.matchesExclude(node.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT, () => {
      cb({
        value: val,
        nodes
      });
    });
  }
  /**
   * Checks if an element matches any of the specified exclude selectors. Also
   * it checks for elements in which no marks should be performed (e.g.
   * script and style tags) and optionally already marked elements
   * @param  {HTMLElement} el - The element to check
   * @return {boolean}
   * @access protected
   */
  matchesExclude(el) {
    return DOMIterator.matches(el, this.opt.exclude.concat([
      // ignores the elements itself, not their childrens (selector *)
      "script",
      "style",
      "title",
      "head",
      "html"
    ]));
  }
  /**
   * Wraps the instance element and class around matches that fit the start
   * and end positions within the node
   * @param  {HTMLElement} node - The DOM text node
   * @param  {number} start - The position where to start wrapping
   * @param  {number} end - The position where to end wrapping
   * @return {HTMLElement} Returns the splitted text node that will appear
   * after the wrapped text node
   * @access protected
   */
  wrapRangeInTextNode(node, start, end) {
    const hEl = this.opt.element ? this.opt.element : "mark", startNode = node.splitText(start), ret = startNode.splitText(end - start);
    let repl = document.createElement(hEl);
    return repl.setAttribute("data-markjs", "true"), this.opt.className && repl.setAttribute("class", this.opt.className), repl.textContent = startNode.textContent, startNode.parentNode.replaceChild(repl, startNode), ret;
  }
  /**
   * @typedef Mark~wrapRangeInMappedTextNodeDict
   * @type {object.<string>}
   * @property {string} value - The composite value of all text nodes
   * @property {object[]} nodes - An array of objects
   * @property {number} nodes.start - The start position within the composite
   * value
   * @property {number} nodes.end - The end position within the composite
   * value
   * @property {HTMLElement} nodes.node - The DOM text node element
   */
  /**
   * Each callback
   * @callback Mark~wrapMatchesEachCallback
   * @param {HTMLElement} node - The wrapped DOM element
   * @param {number} lastIndex - The last matching position within the
   * composite value of text nodes
   */
  /**
   * Filter callback
   * @callback Mark~wrapMatchesFilterCallback
   * @param {HTMLElement} node - The matching text node DOM element
   */
  /**
   * Determines matches by start and end positions using the text node
   * dictionary even across text nodes and calls
   * {@link Mark#wrapRangeInTextNode} to wrap them
   * @param  {Mark~wrapRangeInMappedTextNodeDict} dict - The dictionary
   * @param  {number} start - The start position of the match
   * @param  {number} end - The end position of the match
   * @param  {Mark~wrapMatchesFilterCallback} filterCb - Filter callback
   * @param  {Mark~wrapMatchesEachCallback} eachCb - Each callback
   * @access protected
   */
  wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
    dict.nodes.every((n, i) => {
      const sibl = dict.nodes[i + 1];
      if (typeof sibl > "u" || sibl.start > start) {
        if (!filterCb(n.node))
          return !1;
        const s = start - n.start, e = (end > n.end ? n.end : end) - n.start, startStr = dict.value.substr(0, n.start), endStr = dict.value.substr(e + n.start);
        if (n.node = this.wrapRangeInTextNode(n.node, s, e), dict.value = startStr + endStr, dict.nodes.forEach((k, j) => {
          j >= i && (dict.nodes[j].start > 0 && j !== i && (dict.nodes[j].start -= e), dict.nodes[j].end -= e);
        }), end -= e, eachCb(n.node.previousSibling, n.start), end > n.end)
          start = n.end;
        else
          return !1;
      }
      return !0;
    });
  }
  /**
   * Filter callback before each wrapping
   * @callback Mark~wrapMatchesFilterCallback
   * @param {string} match - The matching string
   * @param {HTMLElement} node - The text node where the match occurs
   */
  /**
   * Callback for each wrapped element
   * @callback Mark~wrapMatchesEachCallback
   * @param {HTMLElement} element - The marked DOM element
   */
  /**
   * Callback on end
   * @callback Mark~wrapMatchesEndCallback
   */
  /**
   * Wraps the instance element and class around matches within single HTML
   * elements in all contexts
   * @param {RegExp} regex - The regular expression to be searched for
   * @param {number} ignoreGroups - A number indicating the amount of RegExp
   * matching groups to ignore
   * @param {Mark~wrapMatchesFilterCallback} filterCb
   * @param {Mark~wrapMatchesEachCallback} eachCb
   * @param {Mark~wrapMatchesEndCallback} endCb
   * @access protected
   */
  wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
    const matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
    this.getTextNodes((dict) => {
      dict.nodes.forEach((node) => {
        node = node.node;
        let match;
        for (; (match = regex.exec(node.textContent)) !== null && match[matchIdx] !== ""; ) {
          if (!filterCb(match[matchIdx], node))
            continue;
          let pos = match.index;
          if (matchIdx !== 0)
            for (let i = 1; i < matchIdx; i++)
              pos += match[i].length;
          node = this.wrapRangeInTextNode(
            node,
            pos,
            pos + match[matchIdx].length
          ), eachCb(node.previousSibling), regex.lastIndex = 0;
        }
      }), endCb();
    });
  }
  /**
   * Callback for each wrapped element
   * @callback Mark~wrapMatchesAcrossElementsEachCallback
   * @param {HTMLElement} element - The marked DOM element
   */
  /**
   * Filter callback before each wrapping
   * @callback Mark~wrapMatchesAcrossElementsFilterCallback
   * @param {string} match - The matching string
   * @param {HTMLElement} node - The text node where the match occurs
   */
  /**
   * Callback on end
   * @callback Mark~wrapMatchesAcrossElementsEndCallback
   */
  /**
   * Wraps the instance element and class around matches across all HTML
   * elements in all contexts
   * @param {RegExp} regex - The regular expression to be searched for
   * @param {number} ignoreGroups - A number indicating the amount of RegExp
   * matching groups to ignore
   * @param {Mark~wrapMatchesAcrossElementsFilterCallback} filterCb
   * @param {Mark~wrapMatchesAcrossElementsEachCallback} eachCb
   * @param {Mark~wrapMatchesAcrossElementsEndCallback} endCb
   * @access protected
   */
  wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
    const matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
    this.getTextNodes((dict) => {
      let match;
      for (; (match = regex.exec(dict.value)) !== null && match[matchIdx] !== ""; ) {
        let start = match.index;
        if (matchIdx !== 0)
          for (let i = 1; i < matchIdx; i++)
            start += match[i].length;
        const end = start + match[matchIdx].length;
        this.wrapRangeInMappedTextNode(dict, start, end, (node) => filterCb(match[matchIdx], node), (node, lastIndex) => {
          regex.lastIndex = lastIndex, eachCb(node);
        });
      }
      endCb();
    });
  }
  /**
   * Callback for each wrapped element
   * @callback Mark~wrapRangeFromIndexEachCallback
   * @param {HTMLElement} element - The marked DOM element
   * @param {Mark~rangeObject} range - the current range object; provided
   * start and length values will be numeric integers modified from the
   * provided original ranges.
   */
  /**
   * Filter callback before each wrapping
   * @callback Mark~wrapRangeFromIndexFilterCallback
   * @param {HTMLElement} node - The text node which includes the range
   * @param {Mark~rangeObject} range - the current range object
   * @param {string} match - string extracted from the matching range
   * @param {number} counter - A counter indicating the number of all marks
   */
  /**
   * Callback on end
   * @callback Mark~wrapRangeFromIndexEndCallback
   */
  /**
   * Wraps the indicated ranges across all HTML elements in all contexts
   * @param {Mark~setOfRanges} ranges
   * @param {Mark~wrapRangeFromIndexFilterCallback} filterCb
   * @param {Mark~wrapRangeFromIndexEachCallback} eachCb
   * @param {Mark~wrapRangeFromIndexEndCallback} endCb
   * @access protected
   */
  wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
    this.getTextNodes((dict) => {
      const originalLength = dict.value.length;
      ranges.forEach((range, counter) => {
        let { start, end, valid } = this.checkWhitespaceRanges(
          range,
          originalLength,
          dict.value
        );
        valid && this.wrapRangeInMappedTextNode(dict, start, end, (node) => filterCb(
          node,
          range,
          dict.value.substring(start, end),
          counter
        ), (node) => {
          eachCb(node, range);
        });
      }), endCb();
    });
  }
  /**
   * Unwraps the specified DOM node with its content (text nodes or HTML)
   * without destroying possibly present events (using innerHTML) and
   * normalizes the parent at the end (merge splitted text nodes)
   * @param  {HTMLElement} node - The DOM node to unwrap
   * @access protected
   */
  unwrapMatches(node) {
    const parent = node.parentNode;
    let docFrag = document.createDocumentFragment();
    for (; node.firstChild; )
      docFrag.appendChild(node.removeChild(node.firstChild));
    parent.replaceChild(docFrag, node), this.ie ? this.normalizeTextNode(parent) : parent.normalize();
  }
  /**
   * Normalizes text nodes. It's a workaround for the native normalize method
   * that has a bug in IE (see attached link). Should only be used in IE
   * browsers as it's slower than the native method.
   * @see {@link http://tinyurl.com/z5asa8c}
   * @param {HTMLElement} node - The DOM node to normalize
   * @access protected
   */
  normalizeTextNode(node) {
    if (node) {
      if (node.nodeType === 3)
        for (; node.nextSibling && node.nextSibling.nodeType === 3; )
          node.nodeValue += node.nextSibling.nodeValue, node.parentNode.removeChild(node.nextSibling);
      else
        this.normalizeTextNode(node.firstChild);
      this.normalizeTextNode(node.nextSibling);
    }
  }
  /**
   * Callback when finished
   * @callback Mark~commonDoneCallback
   * @param {number} totalMatches - The number of marked elements
   */
  /**
   * @typedef Mark~commonOptions
   * @type {object.<string>}
   * @property {string} [element="mark"] - HTML element tag name
   * @property {string} [className] - An optional class name
   * @property {string[]} [exclude] - An array with exclusion selectors.
   * Elements matching those selectors will be ignored
   * @property {boolean} [iframes=false] - Whether to search inside iframes
   * @property {Mark~commonDoneCallback} [done]
   * @property {boolean} [debug=false] - Wheter to log messages
   * @property {object} [log=window.console] - Where to log messages (only if
   * debug is true)
   */
  /**
   * Callback for each marked element
   * @callback Mark~markRegExpEachCallback
   * @param {HTMLElement} element - The marked DOM element
   */
  /**
   * Callback if there were no matches
   * @callback Mark~markRegExpNoMatchCallback
   * @param {RegExp} regexp - The regular expression
   */
  /**
   * Callback to filter matches
   * @callback Mark~markRegExpFilterCallback
   * @param {HTMLElement} textNode - The text node which includes the match
   * @param {string} match - The matching string for the RegExp
   * @param {number} counter - A counter indicating the number of all marks
   */
  /**
   * These options also include the common options from
   * {@link Mark~commonOptions}
   * @typedef Mark~markRegExpOptions
   * @type {object.<string>}
   * @property {Mark~markRegExpEachCallback} [each]
   * @property {Mark~markRegExpNoMatchCallback} [noMatch]
   * @property {Mark~markRegExpFilterCallback} [filter]
   */
  /**
   * Marks a custom regular expression
   * @param  {RegExp} regexp - The regular expression
   * @param  {Mark~markRegExpOptions} [opt] - Optional options object
   * @access public
   */
  markRegExp(regexp, opt) {
    this.opt = opt, this.log(`Searching with expression "${regexp}"`);
    let totalMatches = 0, fn = "wrapMatches";
    const eachCb = (element) => {
      totalMatches++, this.opt.each(element);
    };
    this.opt.acrossElements && (fn = "wrapMatchesAcrossElements"), this[fn](regexp, this.opt.ignoreGroups, (match, node) => this.opt.filter(node, match, totalMatches), eachCb, () => {
      totalMatches === 0 && this.opt.noMatch(regexp), this.opt.done(totalMatches);
    });
  }
  /**
   * Callback for each marked element
   * @callback Mark~markEachCallback
   * @param {HTMLElement} element - The marked DOM element
   */
  /**
   * Callback if there were no matches
   * @callback Mark~markNoMatchCallback
   * @param {RegExp} term - The search term that was not found
   */
  /**
   * Callback to filter matches
   * @callback Mark~markFilterCallback
   * @param {HTMLElement} textNode - The text node which includes the match
   * @param {string} match - The matching term
   * @param {number} totalCounter - A counter indicating the number of all
   * marks
   * @param {number} termCounter - A counter indicating the number of marks
   * for the specific match
   */
  /**
   * @typedef Mark~markAccuracyObject
   * @type {object.<string>}
   * @property {string} value - A accuracy string value
   * @property {string[]} limiters - A custom array of limiters. For example
   * <code>["-", ","]</code>
   */
  /**
   * @typedef Mark~markAccuracySetting
   * @type {string}
   * @property {"partially"|"complementary"|"exactly"|Mark~markAccuracyObject}
   * [accuracy="partially"] - Either one of the following string values:
   * <ul>
   *   <li><i>partially</i>: When searching for "lor" only "lor" inside
   *   "lorem" will be marked</li>
   *   <li><i>complementary</i>: When searching for "lor" the whole word
   *   "lorem" will be marked</li>
   *   <li><i>exactly</i>: When searching for "lor" only those exact words
   *   will be marked. In this example nothing inside "lorem". This value
   *   is equivalent to the previous option <i>wordBoundary</i></li>
   * </ul>
   * Or an object containing two properties:
   * <ul>
   *   <li><i>value</i>: One of the above named string values</li>
   *   <li><i>limiters</i>: A custom array of string limiters for accuracy
   *   "exactly" or "complementary"</li>
   * </ul>
   */
  /**
   * @typedef Mark~markWildcardsSetting
   * @type {string}
   * @property {"disabled"|"enabled"|"withSpaces"}
   * [wildcards="disabled"] - Set to any of the following string values:
   * <ul>
   *   <li><i>disabled</i>: Disable wildcard usage</li>
   *   <li><i>enabled</i>: When searching for "lor?m", the "?" will match zero
   *   or one non-space character (e.g. "lorm", "loram", "lor3m", etc). When
   *   searching for "lor*m", the "*" will match zero or more non-space
   *   characters (e.g. "lorm", "loram", "lor123m", etc).</li>
   *   <li><i>withSpaces</i>: When searching for "lor?m", the "?" will
   *   match zero or one space or non-space character (e.g. "lor m", "loram",
   *   etc). When searching for "lor*m", the "*" will match zero or more space
   *   or non-space characters (e.g. "lorm", "lore et dolor ipsum", "lor: m",
   *   etc).</li>
   * </ul>
   */
  /**
   * @typedef Mark~markIgnorePunctuationSetting
   * @type {string[]}
   * @property {string} The strings in this setting will contain punctuation
   * marks that will be ignored:
   * <ul>
   *   <li>These punctuation marks can be between any characters, e.g. setting
   *   this option to <code>["'"]</code> would match "Worlds", "World's" and
   *   "Wo'rlds"</li>
   *   <li>One or more apostrophes between the letters would still produce a
   *   match (e.g. "W'o''r'l'd's").</li>
   *   <li>A typical setting for this option could be as follows:
   *   <pre>ignorePunctuation: ":;.,-–—‒_(){}[]!'\"+=".split(""),</pre> This
   *   setting includes common punctuation as well as a minus, en-dash,
   *   em-dash and figure-dash
   *   ({@link https://en.wikipedia.org/wiki/Dash#Figure_dash ref}), as well
   *   as an underscore.</li>
   * </ul>
   */
  /**
   * These options also include the common options from
   * {@link Mark~commonOptions}
   * @typedef Mark~markOptions
   * @type {object.<string>}
   * @property {boolean} [separateWordSearch=true] - Whether to search for
   * each word separated by a blank instead of the complete term
   * @property {boolean} [diacritics=true] - If diacritic characters should be
   * matched. ({@link https://en.wikipedia.org/wiki/Diacritic Diacritics})
   * @property {object} [synonyms] - An object with synonyms. The key will be
   * a synonym for the value and the value for the key
   * @property {Mark~markAccuracySetting} [accuracy]
   * @property {Mark~markWildcardsSetting} [wildcards]
   * @property {boolean} [acrossElements=false] - Whether to find matches
   * across HTML elements. By default, only matches within single HTML
   * elements will be found
   * @property {boolean} [ignoreJoiners=false] - Whether to ignore word
   * joiners inside of key words. These include soft-hyphens, zero-width
   * space, zero-width non-joiners and zero-width joiners.
   * @property {Mark~markIgnorePunctuationSetting} [ignorePunctuation]
   * @property {Mark~markEachCallback} [each]
   * @property {Mark~markNoMatchCallback} [noMatch]
   * @property {Mark~markFilterCallback} [filter]
   */
  /**
   * Marks the specified search terms
   * @param {string|string[]} [sv] - Search value, either a search string or
   * an array containing multiple search strings
   * @param  {Mark~markOptions} [opt] - Optional options object
   * @access public
   */
  mark(sv, opt) {
    this.opt = opt;
    let totalMatches = 0, fn = "wrapMatches";
    const {
      keywords: kwArr,
      length: kwArrLen
    } = this.getSeparatedKeywords(typeof sv == "string" ? [sv] : sv), sens = this.opt.caseSensitive ? "" : "i", handler = (kw) => {
      let regex = new RegExp(this.createRegExp(kw), `gm${sens}`), matches2 = 0;
      this.log(`Searching with expression "${regex}"`), this[fn](regex, 1, (term, node) => this.opt.filter(node, kw, totalMatches, matches2), (element) => {
        matches2++, totalMatches++, this.opt.each(element);
      }, () => {
        matches2 === 0 && this.opt.noMatch(kw), kwArr[kwArrLen - 1] === kw ? this.opt.done(totalMatches) : handler(kwArr[kwArr.indexOf(kw) + 1]);
      });
    };
    this.opt.acrossElements && (fn = "wrapMatchesAcrossElements"), kwArrLen === 0 ? this.opt.done(totalMatches) : handler(kwArr[0]);
  }
  /**
   * Callback for each marked element
   * @callback Mark~markRangesEachCallback
   * @param {HTMLElement} element - The marked DOM element
   * @param {array} range - array of range start and end points
   */
  /**
   * Callback if a processed range is invalid, out-of-bounds, overlaps another
   * range, or only matches whitespace
   * @callback Mark~markRangesNoMatchCallback
   * @param {Mark~rangeObject} range - a range object
   */
  /**
   * Callback to filter matches
   * @callback Mark~markRangesFilterCallback
   * @param {HTMLElement} node - The text node which includes the range
   * @param {array} range - array of range start and end points
   * @param {string} match - string extracted from the matching range
   * @param {number} counter - A counter indicating the number of all marks
   */
  /**
   * These options also include the common options from
   * {@link Mark~commonOptions}
   * @typedef Mark~markRangesOptions
   * @type {object.<string>}
   * @property {Mark~markRangesEachCallback} [each]
   * @property {Mark~markRangesNoMatchCallback} [noMatch]
   * @property {Mark~markRangesFilterCallback} [filter]
   */
  /**
   * Marks an array of objects containing a start with an end or length of the
   * string to mark
   * @param  {Mark~setOfRanges} rawRanges - The original (preprocessed)
   * array of objects
   * @param  {Mark~markRangesOptions} [opt] - Optional options object
   * @access public
   */
  markRanges(rawRanges, opt) {
    this.opt = opt;
    let totalMatches = 0, ranges = this.checkRanges(rawRanges);
    ranges && ranges.length ? (this.log(
      "Starting to mark with the following ranges: " + JSON.stringify(ranges)
    ), this.wrapRangeFromIndex(
      ranges,
      (node, range, match, counter) => this.opt.filter(node, range, match, counter),
      (element, range) => {
        totalMatches++, this.opt.each(element, range);
      },
      () => {
        this.opt.done(totalMatches);
      }
    )) : this.opt.done(totalMatches);
  }
  /**
   * Removes all marked elements inside the context with their HTML and
   * normalizes the parent at the end
   * @param  {Mark~commonOptions} [opt] - Optional options object
   * @access public
   */
  unmark(opt) {
    this.opt = opt;
    let sel = this.opt.element ? this.opt.element : "*";
    sel += "[data-markjs]", this.opt.className && (sel += `.${this.opt.className}`), this.log(`Removal selector "${sel}"`), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, (node) => {
      this.unwrapMatches(node);
    }, (node) => {
      const matchesSel = DOMIterator.matches(node, sel), matchesExclude = this.matchesExclude(node);
      return !matchesSel || matchesExclude ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }, this.opt.done);
  }
};
function Mark2(ctx) {
  const instance = new Mark$1(ctx);
  return this.mark = (sv, opt) => (instance.mark(sv, opt), this), this.markRegExp = (sv, opt) => (instance.markRegExp(sv, opt), this), this.markRanges = (sv, opt) => (instance.markRanges(sv, opt), this), this.unmark = (opt) => (instance.unmark(opt), this), this;
}
var __assign = function() {
  return __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; )
      try {
        if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            return _.label++, { value: op[1], done: !1 };
          case 5:
            _.label++, y = op[1], op = [0];
            continue;
          case 7:
            op = _.ops.pop(), _.trys.pop();
            continue;
          default:
            if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1], t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2], _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop(), _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e], y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}
function __values(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length == "number")
    return {
      next: function() {
        return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; )
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
var ENTRIES = "ENTRIES", KEYS = "KEYS", VALUES = "VALUES", LEAF = "", TreeIterator = (
  /** @class */
  function() {
    function TreeIterator2(set, type) {
      var node = set._tree, keys = Array.from(node.keys());
      this.set = set, this._type = type, this._path = keys.length > 0 ? [{ node, keys }] : [];
    }
    return TreeIterator2.prototype.next = function() {
      var value = this.dive();
      return this.backtrack(), value;
    }, TreeIterator2.prototype.dive = function() {
      if (this._path.length === 0)
        return { done: !0, value: void 0 };
      var _a2 = last$1(this._path), node = _a2.node, keys = _a2.keys;
      if (last$1(keys) === LEAF)
        return { done: !1, value: this.result() };
      var child = node.get(last$1(keys));
      return this._path.push({ node: child, keys: Array.from(child.keys()) }), this.dive();
    }, TreeIterator2.prototype.backtrack = function() {
      if (this._path.length !== 0) {
        var keys = last$1(this._path).keys;
        keys.pop(), !(keys.length > 0) && (this._path.pop(), this.backtrack());
      }
    }, TreeIterator2.prototype.key = function() {
      return this.set._prefix + this._path.map(function(_a2) {
        var keys = _a2.keys;
        return last$1(keys);
      }).filter(function(key) {
        return key !== LEAF;
      }).join("");
    }, TreeIterator2.prototype.value = function() {
      return last$1(this._path).node.get(LEAF);
    }, TreeIterator2.prototype.result = function() {
      switch (this._type) {
        case VALUES:
          return this.value();
        case KEYS:
          return this.key();
        default:
          return [this.key(), this.value()];
      }
    }, TreeIterator2.prototype[Symbol.iterator] = function() {
      return this;
    }, TreeIterator2;
  }()
), last$1 = function(array) {
  return array[array.length - 1];
}, fuzzySearch = function(node, query, maxDistance) {
  var results = /* @__PURE__ */ new Map();
  if (query === void 0)
    return results;
  for (var n = query.length + 1, m = n + maxDistance, matrix = new Uint8Array(m * n).fill(maxDistance + 1), j = 0; j < n; ++j)
    matrix[j] = j;
  for (var i = 1; i < m; ++i)
    matrix[i * n] = i;
  return recurse(node, query, maxDistance, results, matrix, 1, n, ""), results;
}, recurse = function(node, query, maxDistance, results, matrix, m, n, prefix) {
  var e_1, _a2, offset = m * n;
  try {
    key:
      for (var _b = __values(node.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        if (key === LEAF) {
          var distance = matrix[offset - 1];
          distance <= maxDistance && results.set(prefix, [node.get(key), distance]);
        } else {
          for (var i = m, pos = 0; pos < key.length; ++pos, ++i) {
            for (var char = key[pos], thisRowOffset = n * i, prevRowOffset = thisRowOffset - n, minDistance = matrix[thisRowOffset], jmin = Math.max(0, i - maxDistance - 1), jmax = Math.min(n - 1, i + maxDistance), j = jmin; j < jmax; ++j) {
              var different = char !== query[j], rpl = matrix[prevRowOffset + j] + +different, del = matrix[prevRowOffset + j + 1] + 1, ins = matrix[thisRowOffset + j] + 1, dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
              dist < minDistance && (minDistance = dist);
            }
            if (minDistance > maxDistance)
              continue key;
          }
          recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
        }
      }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
}, SearchableMap = (
  /** @class */
  function() {
    function SearchableMap2(tree, prefix) {
      tree === void 0 && (tree = /* @__PURE__ */ new Map()), prefix === void 0 && (prefix = ""), this._size = void 0, this._tree = tree, this._prefix = prefix;
    }
    return SearchableMap2.prototype.atPrefix = function(prefix) {
      var e_1, _a2;
      if (!prefix.startsWith(this._prefix))
        throw new Error("Mismatched prefix");
      var _b = __read(trackDown(this._tree, prefix.slice(this._prefix.length)), 2), node = _b[0], path = _b[1];
      if (node === void 0) {
        var _c = __read(last(path), 2), parentNode = _c[0], key = _c[1];
        try {
          for (var _d = __values(parentNode.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var k = _e.value;
            if (k !== LEAF && k.startsWith(key)) {
              var node_1 = /* @__PURE__ */ new Map();
              return node_1.set(k.slice(key.length), parentNode.get(k)), new SearchableMap2(node_1, prefix);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            _e && !_e.done && (_a2 = _d.return) && _a2.call(_d);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      return new SearchableMap2(node, prefix);
    }, SearchableMap2.prototype.clear = function() {
      this._size = void 0, this._tree.clear();
    }, SearchableMap2.prototype.delete = function(key) {
      return this._size = void 0, remove(this._tree, key);
    }, SearchableMap2.prototype.entries = function() {
      return new TreeIterator(this, ENTRIES);
    }, SearchableMap2.prototype.forEach = function(fn) {
      var e_2, _a2;
      try {
        for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
          fn(key, value, this);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }, SearchableMap2.prototype.fuzzyGet = function(key, maxEditDistance) {
      return fuzzySearch(this._tree, key, maxEditDistance);
    }, SearchableMap2.prototype.get = function(key) {
      var node = lookup(this._tree, key);
      return node !== void 0 ? node.get(LEAF) : void 0;
    }, SearchableMap2.prototype.has = function(key) {
      var node = lookup(this._tree, key);
      return node !== void 0 && node.has(LEAF);
    }, SearchableMap2.prototype.keys = function() {
      return new TreeIterator(this, KEYS);
    }, SearchableMap2.prototype.set = function(key, value) {
      if (typeof key != "string")
        throw new Error("key must be a string");
      this._size = void 0;
      var node = createPath(this._tree, key);
      return node.set(LEAF, value), this;
    }, Object.defineProperty(SearchableMap2.prototype, "size", {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
       */
      get: function() {
        if (this._size)
          return this._size;
        this._size = 0;
        for (var iter = this.entries(); !iter.next().done; )
          this._size += 1;
        return this._size;
      },
      enumerable: !1,
      configurable: !0
    }), SearchableMap2.prototype.update = function(key, fn) {
      if (typeof key != "string")
        throw new Error("key must be a string");
      this._size = void 0;
      var node = createPath(this._tree, key);
      return node.set(LEAF, fn(node.get(LEAF))), this;
    }, SearchableMap2.prototype.fetch = function(key, initial) {
      if (typeof key != "string")
        throw new Error("key must be a string");
      this._size = void 0;
      var node = createPath(this._tree, key), value = node.get(LEAF);
      return value === void 0 && node.set(LEAF, value = initial()), value;
    }, SearchableMap2.prototype.values = function() {
      return new TreeIterator(this, VALUES);
    }, SearchableMap2.prototype[Symbol.iterator] = function() {
      return this.entries();
    }, SearchableMap2.from = function(entries) {
      var e_3, _a2, tree = new SearchableMap2();
      try {
        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
          var _b = __read(entries_1_1.value, 2), key = _b[0], value = _b[1];
          tree.set(key, value);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          entries_1_1 && !entries_1_1.done && (_a2 = entries_1.return) && _a2.call(entries_1);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      return tree;
    }, SearchableMap2.fromObject = function(object) {
      return SearchableMap2.from(Object.entries(object));
    }, SearchableMap2;
  }()
), trackDown = function(tree, key, path) {
  var e_4, _a2;
  if (path === void 0 && (path = []), key.length === 0 || tree == null)
    return [tree, path];
  try {
    for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var k = _c.value;
      if (k !== LEAF && key.startsWith(k))
        return path.push([tree, k]), trackDown(tree.get(k), key.slice(k.length), path);
    }
  } catch (e_4_1) {
    e_4 = { error: e_4_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_4)
        throw e_4.error;
    }
  }
  return path.push([tree, key]), trackDown(void 0, "", path);
}, lookup = function(tree, key) {
  var e_5, _a2;
  if (key.length === 0 || tree == null)
    return tree;
  try {
    for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var k = _c.value;
      if (k !== LEAF && key.startsWith(k))
        return lookup(tree.get(k), key.slice(k.length));
    }
  } catch (e_5_1) {
    e_5 = { error: e_5_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_5)
        throw e_5.error;
    }
  }
}, createPath = function(node, key) {
  var e_6, _a2, keyLength = key.length;
  outer:
    for (var pos = 0; node && pos < keyLength; ) {
      try {
        for (var _b = (e_6 = void 0, __values(node.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
          var k = _c.value;
          if (k !== LEAF && key[pos] === k[0]) {
            for (var len = Math.min(keyLength - pos, k.length), offset = 1; offset < len && key[pos + offset] === k[offset]; )
              ++offset;
            var child_1 = node.get(k);
            if (offset === k.length)
              node = child_1;
            else {
              var intermediate = /* @__PURE__ */ new Map();
              intermediate.set(k.slice(offset), child_1), node.set(key.slice(pos, pos + offset), intermediate), node.delete(k), node = intermediate;
            }
            pos += offset;
            continue outer;
          }
        }
      } catch (e_6_1) {
        e_6 = { error: e_6_1 };
      } finally {
        try {
          _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
        } finally {
          if (e_6)
            throw e_6.error;
        }
      }
      var child = /* @__PURE__ */ new Map();
      return node.set(key.slice(pos), child), child;
    }
  return node;
}, remove = function(tree, key) {
  var _a2 = __read(trackDown(tree, key), 2), node = _a2[0], path = _a2[1];
  if (node !== void 0) {
    if (node.delete(LEAF), node.size === 0)
      cleanup(path);
    else if (node.size === 1) {
      var _b = __read(node.entries().next().value, 2), key_1 = _b[0], value = _b[1];
      merge(path, key_1, value);
    }
  }
}, cleanup = function(path) {
  if (path.length !== 0) {
    var _a2 = __read(last(path), 2), node = _a2[0], key = _a2[1];
    if (node.delete(key), node.size === 0)
      cleanup(path.slice(0, -1));
    else if (node.size === 1) {
      var _b = __read(node.entries().next().value, 2), key_2 = _b[0], value = _b[1];
      key_2 !== LEAF && merge(path.slice(0, -1), key_2, value);
    }
  }
}, merge = function(path, key, value) {
  if (path.length !== 0) {
    var _a2 = __read(last(path), 2), node = _a2[0], nodeKey = _a2[1];
    node.set(nodeKey + key, value), node.delete(nodeKey);
  }
}, last = function(array) {
  return array[array.length - 1];
}, _a, OR = "or", AND = "and", AND_NOT = "and_not", MiniSearch = (
  /** @class */
  function() {
    function MiniSearch2(options) {
      if ((options == null ? void 0 : options.fields) == null)
        throw new Error('MiniSearch: option "fields" must be provided');
      var autoVacuum = options.autoVacuum == null || options.autoVacuum === !0 ? defaultAutoVacuumOptions : options.autoVacuum;
      this._options = __assign(__assign(__assign({}, defaultOptions), options), { autoVacuum, searchOptions: __assign(__assign({}, defaultSearchOptions), options.searchOptions || {}), autoSuggestOptions: __assign(__assign({}, defaultAutoSuggestOptions), options.autoSuggestOptions || {}) }), this._index = new SearchableMap(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldIds = {}, this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = /* @__PURE__ */ new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = defaultVacuumConditions, this.addFields(this._options.fields);
    }
    return MiniSearch2.prototype.add = function(document2) {
      var e_1, _a2, e_2, _b, e_3, _c, _d = this._options, extractField = _d.extractField, tokenize = _d.tokenize, processTerm = _d.processTerm, fields = _d.fields, idField = _d.idField, id = extractField(document2, idField);
      if (id == null)
        throw new Error('MiniSearch: document does not have ID field "'.concat(idField, '"'));
      if (this._idToShortId.has(id))
        throw new Error("MiniSearch: duplicate ID ".concat(id));
      var shortDocumentId = this.addDocumentId(id);
      this.saveStoredFields(shortDocumentId, document2);
      try {
        for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
          var field = fields_1_1.value, fieldValue = extractField(document2, field);
          if (fieldValue != null) {
            var tokens = tokenize(fieldValue.toString(), field), fieldId = this._fieldIds[field], uniqueTerms = new Set(tokens).size;
            this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
            try {
              for (var tokens_1 = (e_2 = void 0, __values(tokens)), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
                var term = tokens_1_1.value, processedTerm = processTerm(term, field);
                if (Array.isArray(processedTerm))
                  try {
                    for (var processedTerm_1 = (e_3 = void 0, __values(processedTerm)), processedTerm_1_1 = processedTerm_1.next(); !processedTerm_1_1.done; processedTerm_1_1 = processedTerm_1.next()) {
                      var t = processedTerm_1_1.value;
                      this.addTerm(fieldId, shortDocumentId, t);
                    }
                  } catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                  } finally {
                    try {
                      processedTerm_1_1 && !processedTerm_1_1.done && (_c = processedTerm_1.return) && _c.call(processedTerm_1);
                    } finally {
                      if (e_3)
                        throw e_3.error;
                    }
                  }
                else
                  processedTerm && this.addTerm(fieldId, shortDocumentId, processedTerm);
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                tokens_1_1 && !tokens_1_1.done && (_b = tokens_1.return) && _b.call(tokens_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          fields_1_1 && !fields_1_1.done && (_a2 = fields_1.return) && _a2.call(fields_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }, MiniSearch2.prototype.addAll = function(documents) {
      var e_4, _a2;
      try {
        for (var documents_1 = __values(documents), documents_1_1 = documents_1.next(); !documents_1_1.done; documents_1_1 = documents_1.next()) {
          var document_1 = documents_1_1.value;
          this.add(document_1);
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          documents_1_1 && !documents_1_1.done && (_a2 = documents_1.return) && _a2.call(documents_1);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
    }, MiniSearch2.prototype.addAllAsync = function(documents, options) {
      var _this = this;
      options === void 0 && (options = {});
      var _a2 = options.chunkSize, chunkSize = _a2 === void 0 ? 10 : _a2, acc = { chunk: [], promise: Promise.resolve() }, _b = documents.reduce(function(_a3, document2, i) {
        var chunk2 = _a3.chunk, promise2 = _a3.promise;
        return chunk2.push(document2), (i + 1) % chunkSize === 0 ? {
          chunk: [],
          promise: promise2.then(function() {
            return new Promise(function(resolve) {
              return setTimeout(resolve, 0);
            });
          }).then(function() {
            return _this.addAll(chunk2);
          })
        } : { chunk: chunk2, promise: promise2 };
      }, acc), chunk = _b.chunk, promise = _b.promise;
      return promise.then(function() {
        return _this.addAll(chunk);
      });
    }, MiniSearch2.prototype.remove = function(document2) {
      var e_5, _a2, e_6, _b, e_7, _c, _d = this._options, tokenize = _d.tokenize, processTerm = _d.processTerm, extractField = _d.extractField, fields = _d.fields, idField = _d.idField, id = extractField(document2, idField);
      if (id == null)
        throw new Error('MiniSearch: document does not have ID field "'.concat(idField, '"'));
      var shortId = this._idToShortId.get(id);
      if (shortId == null)
        throw new Error("MiniSearch: cannot remove document with ID ".concat(id, ": it is not in the index"));
      try {
        for (var fields_2 = __values(fields), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
          var field = fields_2_1.value, fieldValue = extractField(document2, field);
          if (fieldValue != null) {
            var tokens = tokenize(fieldValue.toString(), field), fieldId = this._fieldIds[field], uniqueTerms = new Set(tokens).size;
            this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
            try {
              for (var tokens_2 = (e_6 = void 0, __values(tokens)), tokens_2_1 = tokens_2.next(); !tokens_2_1.done; tokens_2_1 = tokens_2.next()) {
                var term = tokens_2_1.value, processedTerm = processTerm(term, field);
                if (Array.isArray(processedTerm))
                  try {
                    for (var processedTerm_2 = (e_7 = void 0, __values(processedTerm)), processedTerm_2_1 = processedTerm_2.next(); !processedTerm_2_1.done; processedTerm_2_1 = processedTerm_2.next()) {
                      var t = processedTerm_2_1.value;
                      this.removeTerm(fieldId, shortId, t);
                    }
                  } catch (e_7_1) {
                    e_7 = { error: e_7_1 };
                  } finally {
                    try {
                      processedTerm_2_1 && !processedTerm_2_1.done && (_c = processedTerm_2.return) && _c.call(processedTerm_2);
                    } finally {
                      if (e_7)
                        throw e_7.error;
                    }
                  }
                else
                  processedTerm && this.removeTerm(fieldId, shortId, processedTerm);
              }
            } catch (e_6_1) {
              e_6 = { error: e_6_1 };
            } finally {
              try {
                tokens_2_1 && !tokens_2_1.done && (_b = tokens_2.return) && _b.call(tokens_2);
              } finally {
                if (e_6)
                  throw e_6.error;
              }
            }
          }
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          fields_2_1 && !fields_2_1.done && (_a2 = fields_2.return) && _a2.call(fields_2);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      this._storedFields.delete(shortId), this._documentIds.delete(shortId), this._idToShortId.delete(id), this._fieldLength.delete(shortId), this._documentCount -= 1;
    }, MiniSearch2.prototype.removeAll = function(documents) {
      var e_8, _a2;
      if (documents)
        try {
          for (var documents_2 = __values(documents), documents_2_1 = documents_2.next(); !documents_2_1.done; documents_2_1 = documents_2.next()) {
            var document_2 = documents_2_1.value;
            this.remove(document_2);
          }
        } catch (e_8_1) {
          e_8 = { error: e_8_1 };
        } finally {
          try {
            documents_2_1 && !documents_2_1.done && (_a2 = documents_2.return) && _a2.call(documents_2);
          } finally {
            if (e_8)
              throw e_8.error;
          }
        }
      else {
        if (arguments.length > 0)
          throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
        this._index = new SearchableMap(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._storedFields = /* @__PURE__ */ new Map(), this._nextId = 0;
      }
    }, MiniSearch2.prototype.discard = function(id) {
      var _this = this, shortId = this._idToShortId.get(id);
      if (shortId == null)
        throw new Error("MiniSearch: cannot discard document with ID ".concat(id, ": it is not in the index"));
      this._idToShortId.delete(id), this._documentIds.delete(shortId), this._storedFields.delete(shortId), (this._fieldLength.get(shortId) || []).forEach(function(fieldLength, fieldId) {
        _this.removeFieldLength(shortId, fieldId, _this._documentCount, fieldLength);
      }), this._fieldLength.delete(shortId), this._documentCount -= 1, this._dirtCount += 1, this.maybeAutoVacuum();
    }, MiniSearch2.prototype.maybeAutoVacuum = function() {
      if (this._options.autoVacuum !== !1) {
        var _a2 = this._options.autoVacuum, minDirtFactor = _a2.minDirtFactor, minDirtCount = _a2.minDirtCount, batchSize = _a2.batchSize, batchWait = _a2.batchWait;
        this.conditionalVacuum({ batchSize, batchWait }, { minDirtCount, minDirtFactor });
      }
    }, MiniSearch2.prototype.discardAll = function(ids) {
      var e_9, _a2, autoVacuum = this._options.autoVacuum;
      try {
        this._options.autoVacuum = !1;
        try {
          for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var id = ids_1_1.value;
            this.discard(id);
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            ids_1_1 && !ids_1_1.done && (_a2 = ids_1.return) && _a2.call(ids_1);
          } finally {
            if (e_9)
              throw e_9.error;
          }
        }
      } finally {
        this._options.autoVacuum = autoVacuum;
      }
      this.maybeAutoVacuum();
    }, MiniSearch2.prototype.replace = function(updatedDocument) {
      var _a2 = this._options, idField = _a2.idField, extractField = _a2.extractField, id = extractField(updatedDocument, idField);
      this.discard(id), this.add(updatedDocument);
    }, MiniSearch2.prototype.vacuum = function(options) {
      return options === void 0 && (options = {}), this.conditionalVacuum(options);
    }, MiniSearch2.prototype.conditionalVacuum = function(options, conditions) {
      var _this = this;
      return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && conditions, this._enqueuedVacuum != null ? this._enqueuedVacuum : (this._enqueuedVacuum = this._currentVacuum.then(function() {
        var conditions2 = _this._enqueuedVacuumConditions;
        return _this._enqueuedVacuumConditions = defaultVacuumConditions, _this.performVacuuming(options, conditions2);
      }), this._enqueuedVacuum)) : this.vacuumConditionsMet(conditions) === !1 ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(options), this._currentVacuum);
    }, MiniSearch2.prototype.performVacuuming = function(options, conditions) {
      return __awaiter(this, void 0, void 0, function() {
        var initialDirtCount, batchSize, batchWait_1, i, _a2, _b, _c, term, fieldsData, fieldsData_1, fieldsData_1_1, _d, fieldId, fieldIndex, fieldIndex_1, fieldIndex_1_1, _e, shortId, e_10_1, e_10, _f, e_11, _g, e_12, _h;
        return __generator(this, function(_j) {
          switch (_j.label) {
            case 0:
              if (initialDirtCount = this._dirtCount, !this.vacuumConditionsMet(conditions))
                return [3, 10];
              batchSize = options.batchSize || defaultVacuumOptions.batchSize, batchWait_1 = options.batchWait || defaultVacuumOptions.batchWait, i = 1, _j.label = 1;
            case 1:
              _j.trys.push([1, 7, 8, 9]), _a2 = __values(this._index), _b = _a2.next(), _j.label = 2;
            case 2:
              if (_b.done)
                return [3, 6];
              _c = __read(_b.value, 2), term = _c[0], fieldsData = _c[1];
              try {
                for (fieldsData_1 = (e_11 = void 0, __values(fieldsData)), fieldsData_1_1 = fieldsData_1.next(); !fieldsData_1_1.done; fieldsData_1_1 = fieldsData_1.next()) {
                  _d = __read(fieldsData_1_1.value, 2), fieldId = _d[0], fieldIndex = _d[1];
                  try {
                    for (fieldIndex_1 = (e_12 = void 0, __values(fieldIndex)), fieldIndex_1_1 = fieldIndex_1.next(); !fieldIndex_1_1.done; fieldIndex_1_1 = fieldIndex_1.next())
                      _e = __read(fieldIndex_1_1.value, 1), shortId = _e[0], !this._documentIds.has(shortId) && (fieldIndex.size <= 1 ? fieldsData.delete(fieldId) : fieldIndex.delete(shortId));
                  } catch (e_12_1) {
                    e_12 = { error: e_12_1 };
                  } finally {
                    try {
                      fieldIndex_1_1 && !fieldIndex_1_1.done && (_h = fieldIndex_1.return) && _h.call(fieldIndex_1);
                    } finally {
                      if (e_12)
                        throw e_12.error;
                    }
                  }
                }
              } catch (e_11_1) {
                e_11 = { error: e_11_1 };
              } finally {
                try {
                  fieldsData_1_1 && !fieldsData_1_1.done && (_g = fieldsData_1.return) && _g.call(fieldsData_1);
                } finally {
                  if (e_11)
                    throw e_11.error;
                }
              }
              return this._index.get(term).size === 0 && this._index.delete(term), i % batchSize !== 0 ? [3, 4] : [4, new Promise(function(resolve) {
                return setTimeout(resolve, batchWait_1);
              })];
            case 3:
              _j.sent(), _j.label = 4;
            case 4:
              i += 1, _j.label = 5;
            case 5:
              return _b = _a2.next(), [3, 2];
            case 6:
              return [3, 9];
            case 7:
              return e_10_1 = _j.sent(), e_10 = { error: e_10_1 }, [3, 9];
            case 8:
              try {
                _b && !_b.done && (_f = _a2.return) && _f.call(_a2);
              } finally {
                if (e_10)
                  throw e_10.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 9:
              this._dirtCount -= initialDirtCount, _j.label = 10;
            case 10:
              return [4, null];
            case 11:
              return _j.sent(), this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null, [
                2
                /*return*/
              ];
          }
        });
      });
    }, MiniSearch2.prototype.vacuumConditionsMet = function(conditions) {
      if (conditions == null)
        return !0;
      var minDirtCount = conditions.minDirtCount, minDirtFactor = conditions.minDirtFactor;
      return minDirtCount = minDirtCount || defaultAutoVacuumOptions.minDirtCount, minDirtFactor = minDirtFactor || defaultAutoVacuumOptions.minDirtFactor, this.dirtCount >= minDirtCount && this.dirtFactor >= minDirtFactor;
    }, Object.defineProperty(MiniSearch2.prototype, "isVacuuming", {
      /**
       * Is `true` if a vacuuming operation is ongoing, `false` otherwise
       */
      get: function() {
        return this._currentVacuum != null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(MiniSearch2.prototype, "dirtCount", {
      /**
       * The number of documents discarded since the most recent vacuuming
       */
      get: function() {
        return this._dirtCount;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(MiniSearch2.prototype, "dirtFactor", {
      /**
       * A number between 0 and 1 giving an indication about the proportion of
       * documents that are discarded, and can therefore be cleaned up by vacuuming.
       * A value close to 0 means that the index is relatively clean, while a higher
       * value means that the index is relatively dirty, and vacuuming could release
       * memory.
       */
      get: function() {
        return this._dirtCount / (1 + this._documentCount + this._dirtCount);
      },
      enumerable: !1,
      configurable: !0
    }), MiniSearch2.prototype.has = function(id) {
      return this._idToShortId.has(id);
    }, MiniSearch2.prototype.getStoredFields = function(id) {
      var shortId = this._idToShortId.get(id);
      if (shortId != null)
        return this._storedFields.get(shortId);
    }, MiniSearch2.prototype.search = function(query, searchOptions) {
      var e_13, _a2;
      searchOptions === void 0 && (searchOptions = {});
      var rawResults = this.executeQuery(query, searchOptions), results = [];
      try {
        for (var rawResults_1 = __values(rawResults), rawResults_1_1 = rawResults_1.next(); !rawResults_1_1.done; rawResults_1_1 = rawResults_1.next()) {
          var _b = __read(rawResults_1_1.value, 2), docId = _b[0], _c = _b[1], score = _c.score, terms = _c.terms, match = _c.match, quality = terms.length || 1, result = {
            id: this._documentIds.get(docId),
            score: score * quality,
            terms: Object.keys(match),
            queryTerms: terms,
            match
          };
          Object.assign(result, this._storedFields.get(docId)), (searchOptions.filter == null || searchOptions.filter(result)) && results.push(result);
        }
      } catch (e_13_1) {
        e_13 = { error: e_13_1 };
      } finally {
        try {
          rawResults_1_1 && !rawResults_1_1.done && (_a2 = rawResults_1.return) && _a2.call(rawResults_1);
        } finally {
          if (e_13)
            throw e_13.error;
        }
      }
      return query === MiniSearch2.wildcard && searchOptions.boostDocument == null && this._options.searchOptions.boostDocument == null || results.sort(byScore), results;
    }, MiniSearch2.prototype.autoSuggest = function(queryString, options) {
      var e_14, _a2, e_15, _b;
      options === void 0 && (options = {}), options = __assign(__assign({}, this._options.autoSuggestOptions), options);
      var suggestions = /* @__PURE__ */ new Map();
      try {
        for (var _c = __values(this.search(queryString, options)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var _e = _d.value, score = _e.score, terms = _e.terms, phrase = terms.join(" "), suggestion = suggestions.get(phrase);
          suggestion != null ? (suggestion.score += score, suggestion.count += 1) : suggestions.set(phrase, { score, terms, count: 1 });
        }
      } catch (e_14_1) {
        e_14 = { error: e_14_1 };
      } finally {
        try {
          _d && !_d.done && (_a2 = _c.return) && _a2.call(_c);
        } finally {
          if (e_14)
            throw e_14.error;
        }
      }
      var results = [];
      try {
        for (var suggestions_1 = __values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
          var _f = __read(suggestions_1_1.value, 2), suggestion = _f[0], _g = _f[1], score = _g.score, terms = _g.terms, count = _g.count;
          results.push({ suggestion, terms, score: score / count });
        }
      } catch (e_15_1) {
        e_15 = { error: e_15_1 };
      } finally {
        try {
          suggestions_1_1 && !suggestions_1_1.done && (_b = suggestions_1.return) && _b.call(suggestions_1);
        } finally {
          if (e_15)
            throw e_15.error;
        }
      }
      return results.sort(byScore), results;
    }, Object.defineProperty(MiniSearch2.prototype, "documentCount", {
      /**
       * Total number of documents available to search
       */
      get: function() {
        return this._documentCount;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(MiniSearch2.prototype, "termCount", {
      /**
       * Number of terms in the index
       */
      get: function() {
        return this._index.size;
      },
      enumerable: !1,
      configurable: !0
    }), MiniSearch2.loadJSON = function(json, options) {
      if (options == null)
        throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
      return this.loadJS(JSON.parse(json), options);
    }, MiniSearch2.getDefault = function(optionName) {
      if (defaultOptions.hasOwnProperty(optionName))
        return getOwnProperty(defaultOptions, optionName);
      throw new Error('MiniSearch: unknown option "'.concat(optionName, '"'));
    }, MiniSearch2.loadJS = function(js, options) {
      var e_16, _a2, e_17, _b, e_18, _c, index = js.index, documentCount = js.documentCount, nextId = js.nextId, documentIds = js.documentIds, fieldIds = js.fieldIds, fieldLength = js.fieldLength, averageFieldLength = js.averageFieldLength, storedFields = js.storedFields, dirtCount = js.dirtCount, serializationVersion = js.serializationVersion;
      if (serializationVersion !== 1 && serializationVersion !== 2)
        throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
      var miniSearch = new MiniSearch2(options);
      miniSearch._documentCount = documentCount, miniSearch._nextId = nextId, miniSearch._documentIds = objectToNumericMap(documentIds), miniSearch._idToShortId = /* @__PURE__ */ new Map(), miniSearch._fieldIds = fieldIds, miniSearch._fieldLength = objectToNumericMap(fieldLength), miniSearch._avgFieldLength = averageFieldLength, miniSearch._storedFields = objectToNumericMap(storedFields), miniSearch._dirtCount = dirtCount || 0, miniSearch._index = new SearchableMap();
      try {
        for (var _d = __values(miniSearch._documentIds), _e = _d.next(); !_e.done; _e = _d.next()) {
          var _f = __read(_e.value, 2), shortId = _f[0], id = _f[1];
          miniSearch._idToShortId.set(id, shortId);
        }
      } catch (e_16_1) {
        e_16 = { error: e_16_1 };
      } finally {
        try {
          _e && !_e.done && (_a2 = _d.return) && _a2.call(_d);
        } finally {
          if (e_16)
            throw e_16.error;
        }
      }
      try {
        for (var index_1 = __values(index), index_1_1 = index_1.next(); !index_1_1.done; index_1_1 = index_1.next()) {
          var _g = __read(index_1_1.value, 2), term = _g[0], data = _g[1], dataMap = /* @__PURE__ */ new Map();
          try {
            for (var _h = (e_18 = void 0, __values(Object.keys(data))), _j = _h.next(); !_j.done; _j = _h.next()) {
              var fieldId = _j.value, indexEntry = data[fieldId];
              serializationVersion === 1 && (indexEntry = indexEntry.ds), dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
            }
          } catch (e_18_1) {
            e_18 = { error: e_18_1 };
          } finally {
            try {
              _j && !_j.done && (_c = _h.return) && _c.call(_h);
            } finally {
              if (e_18)
                throw e_18.error;
            }
          }
          miniSearch._index.set(term, dataMap);
        }
      } catch (e_17_1) {
        e_17 = { error: e_17_1 };
      } finally {
        try {
          index_1_1 && !index_1_1.done && (_b = index_1.return) && _b.call(index_1);
        } finally {
          if (e_17)
            throw e_17.error;
        }
      }
      return miniSearch;
    }, MiniSearch2.prototype.executeQuery = function(query, searchOptions) {
      var _this = this;
      if (searchOptions === void 0 && (searchOptions = {}), query === MiniSearch2.wildcard)
        return this.executeWildcardQuery(searchOptions);
      if (typeof query != "string") {
        var options_1 = __assign(__assign(__assign({}, searchOptions), query), { queries: void 0 }), results_1 = query.queries.map(function(subquery) {
          return _this.executeQuery(subquery, options_1);
        });
        return this.combineResults(results_1, options_1.combineWith);
      }
      var _a2 = this._options, tokenize = _a2.tokenize, processTerm = _a2.processTerm, globalSearchOptions = _a2.searchOptions, options = __assign(__assign({ tokenize, processTerm }, globalSearchOptions), searchOptions), searchTokenize = options.tokenize, searchProcessTerm = options.processTerm, terms = searchTokenize(query).flatMap(function(term) {
        return searchProcessTerm(term);
      }).filter(function(term) {
        return !!term;
      }), queries = terms.map(termToQuerySpec(options)), results = queries.map(function(query2) {
        return _this.executeQuerySpec(query2, options);
      });
      return this.combineResults(results, options.combineWith);
    }, MiniSearch2.prototype.executeQuerySpec = function(query, searchOptions) {
      var e_19, _a2, e_20, _b, options = __assign(__assign({}, this._options.searchOptions), searchOptions), boosts = (options.fields || this._options.fields).reduce(function(boosts2, field) {
        var _a3;
        return __assign(__assign({}, boosts2), (_a3 = {}, _a3[field] = getOwnProperty(options.boost, field) || 1, _a3));
      }, {}), boostDocument = options.boostDocument, weights = options.weights, maxFuzzy = options.maxFuzzy, bm25params = options.bm25, _c = __assign(__assign({}, defaultSearchOptions.weights), weights), fuzzyWeight = _c.fuzzy, prefixWeight = _c.prefix, data = this._index.get(query.term), results = this.termResults(query.term, query.term, 1, data, boosts, boostDocument, bm25params), prefixMatches, fuzzyMatches;
      if (query.prefix && (prefixMatches = this._index.atPrefix(query.term)), query.fuzzy) {
        var fuzzy = query.fuzzy === !0 ? 0.2 : query.fuzzy, maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
        maxDistance && (fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance));
      }
      if (prefixMatches)
        try {
          for (var prefixMatches_1 = __values(prefixMatches), prefixMatches_1_1 = prefixMatches_1.next(); !prefixMatches_1_1.done; prefixMatches_1_1 = prefixMatches_1.next()) {
            var _d = __read(prefixMatches_1_1.value, 2), term = _d[0], data_1 = _d[1], distance = term.length - query.term.length;
            if (distance) {
              fuzzyMatches == null || fuzzyMatches.delete(term);
              var weight = prefixWeight * term.length / (term.length + 0.3 * distance);
              this.termResults(query.term, term, weight, data_1, boosts, boostDocument, bm25params, results);
            }
          }
        } catch (e_19_1) {
          e_19 = { error: e_19_1 };
        } finally {
          try {
            prefixMatches_1_1 && !prefixMatches_1_1.done && (_a2 = prefixMatches_1.return) && _a2.call(prefixMatches_1);
          } finally {
            if (e_19)
              throw e_19.error;
          }
        }
      if (fuzzyMatches)
        try {
          for (var _e = __values(fuzzyMatches.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var term = _f.value, _g = __read(fuzzyMatches.get(term), 2), data_2 = _g[0], distance = _g[1];
            if (distance) {
              var weight = fuzzyWeight * term.length / (term.length + distance);
              this.termResults(query.term, term, weight, data_2, boosts, boostDocument, bm25params, results);
            }
          }
        } catch (e_20_1) {
          e_20 = { error: e_20_1 };
        } finally {
          try {
            _f && !_f.done && (_b = _e.return) && _b.call(_e);
          } finally {
            if (e_20)
              throw e_20.error;
          }
        }
      return results;
    }, MiniSearch2.prototype.executeWildcardQuery = function(searchOptions) {
      var e_21, _a2, results = /* @__PURE__ */ new Map(), options = __assign(__assign({}, this._options.searchOptions), searchOptions);
      try {
        for (var _b = __values(this._documentIds), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), shortId = _d[0], id = _d[1], score = options.boostDocument ? options.boostDocument(id, "", this._storedFields.get(shortId)) : 1;
          results.set(shortId, {
            score,
            terms: [],
            match: {}
          });
        }
      } catch (e_21_1) {
        e_21 = { error: e_21_1 };
      } finally {
        try {
          _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
        } finally {
          if (e_21)
            throw e_21.error;
        }
      }
      return results;
    }, MiniSearch2.prototype.combineResults = function(results, combineWith) {
      if (combineWith === void 0 && (combineWith = OR), results.length === 0)
        return /* @__PURE__ */ new Map();
      var operator = combineWith.toLowerCase();
      return results.reduce(combinators[operator]) || /* @__PURE__ */ new Map();
    }, MiniSearch2.prototype.toJSON = function() {
      var e_22, _a2, e_23, _b, index = [];
      try {
        for (var _c = __values(this._index), _d = _c.next(); !_d.done; _d = _c.next()) {
          var _e = __read(_d.value, 2), term = _e[0], fieldIndex = _e[1], data = {};
          try {
            for (var fieldIndex_2 = (e_23 = void 0, __values(fieldIndex)), fieldIndex_2_1 = fieldIndex_2.next(); !fieldIndex_2_1.done; fieldIndex_2_1 = fieldIndex_2.next()) {
              var _f = __read(fieldIndex_2_1.value, 2), fieldId = _f[0], freqs = _f[1];
              data[fieldId] = Object.fromEntries(freqs);
            }
          } catch (e_23_1) {
            e_23 = { error: e_23_1 };
          } finally {
            try {
              fieldIndex_2_1 && !fieldIndex_2_1.done && (_b = fieldIndex_2.return) && _b.call(fieldIndex_2);
            } finally {
              if (e_23)
                throw e_23.error;
            }
          }
          index.push([term, data]);
        }
      } catch (e_22_1) {
        e_22 = { error: e_22_1 };
      } finally {
        try {
          _d && !_d.done && (_a2 = _c.return) && _a2.call(_c);
        } finally {
          if (e_22)
            throw e_22.error;
        }
      }
      return {
        documentCount: this._documentCount,
        nextId: this._nextId,
        documentIds: Object.fromEntries(this._documentIds),
        fieldIds: this._fieldIds,
        fieldLength: Object.fromEntries(this._fieldLength),
        averageFieldLength: this._avgFieldLength,
        storedFields: Object.fromEntries(this._storedFields),
        dirtCount: this._dirtCount,
        index,
        serializationVersion: 2
      };
    }, MiniSearch2.prototype.termResults = function(sourceTerm, derivedTerm, termWeight, fieldTermData, fieldBoosts, boostDocumentFn, bm25params, results) {
      var e_24, _a2, e_25, _b, _c;
      if (results === void 0 && (results = /* @__PURE__ */ new Map()), fieldTermData == null)
        return results;
      try {
        for (var _d = __values(Object.keys(fieldBoosts)), _e = _d.next(); !_e.done; _e = _d.next()) {
          var field = _e.value, fieldBoost = fieldBoosts[field], fieldId = this._fieldIds[field], fieldTermFreqs = fieldTermData.get(fieldId);
          if (fieldTermFreqs != null) {
            var matchingFields = fieldTermFreqs.size, avgFieldLength = this._avgFieldLength[fieldId];
            try {
              for (var _f = (e_25 = void 0, __values(fieldTermFreqs.keys())), _g = _f.next(); !_g.done; _g = _f.next()) {
                var docId = _g.value;
                if (!this._documentIds.has(docId)) {
                  this.removeTerm(fieldId, docId, derivedTerm), matchingFields -= 1;
                  continue;
                }
                var docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm, this._storedFields.get(docId)) : 1;
                if (docBoost) {
                  var termFreq = fieldTermFreqs.get(docId), fieldLength = this._fieldLength.get(docId)[fieldId], rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength, bm25params), weightedScore = termWeight * fieldBoost * docBoost * rawScore, result = results.get(docId);
                  if (result) {
                    result.score += weightedScore, assignUniqueTerm(result.terms, sourceTerm);
                    var match = getOwnProperty(result.match, derivedTerm);
                    match ? match.push(field) : result.match[derivedTerm] = [field];
                  } else
                    results.set(docId, {
                      score: weightedScore,
                      terms: [sourceTerm],
                      match: (_c = {}, _c[derivedTerm] = [field], _c)
                    });
                }
              }
            } catch (e_25_1) {
              e_25 = { error: e_25_1 };
            } finally {
              try {
                _g && !_g.done && (_b = _f.return) && _b.call(_f);
              } finally {
                if (e_25)
                  throw e_25.error;
              }
            }
          }
        }
      } catch (e_24_1) {
        e_24 = { error: e_24_1 };
      } finally {
        try {
          _e && !_e.done && (_a2 = _d.return) && _a2.call(_d);
        } finally {
          if (e_24)
            throw e_24.error;
        }
      }
      return results;
    }, MiniSearch2.prototype.addTerm = function(fieldId, documentId, term) {
      var indexData = this._index.fetch(term, createMap), fieldIndex = indexData.get(fieldId);
      if (fieldIndex == null)
        fieldIndex = /* @__PURE__ */ new Map(), fieldIndex.set(documentId, 1), indexData.set(fieldId, fieldIndex);
      else {
        var docs = fieldIndex.get(documentId);
        fieldIndex.set(documentId, (docs || 0) + 1);
      }
    }, MiniSearch2.prototype.removeTerm = function(fieldId, documentId, term) {
      if (!this._index.has(term)) {
        this.warnDocumentChanged(documentId, fieldId, term);
        return;
      }
      var indexData = this._index.fetch(term, createMap), fieldIndex = indexData.get(fieldId);
      fieldIndex == null || fieldIndex.get(documentId) == null ? this.warnDocumentChanged(documentId, fieldId, term) : fieldIndex.get(documentId) <= 1 ? fieldIndex.size <= 1 ? indexData.delete(fieldId) : fieldIndex.delete(documentId) : fieldIndex.set(documentId, fieldIndex.get(documentId) - 1), this._index.get(term).size === 0 && this._index.delete(term);
    }, MiniSearch2.prototype.warnDocumentChanged = function(shortDocumentId, fieldId, term) {
      var e_26, _a2;
      try {
        for (var _b = __values(Object.keys(this._fieldIds)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var fieldName = _c.value;
          if (this._fieldIds[fieldName] === fieldId) {
            this._options.logger("warn", "MiniSearch: document with ID ".concat(this._documentIds.get(shortDocumentId), ' has changed before removal: term "').concat(term, '" was not present in field "').concat(fieldName, '". Removing a document after it has changed can corrupt the index!'), "version_conflict");
            return;
          }
        }
      } catch (e_26_1) {
        e_26 = { error: e_26_1 };
      } finally {
        try {
          _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
        } finally {
          if (e_26)
            throw e_26.error;
        }
      }
    }, MiniSearch2.prototype.addDocumentId = function(documentId) {
      var shortDocumentId = this._nextId;
      return this._idToShortId.set(documentId, shortDocumentId), this._documentIds.set(shortDocumentId, documentId), this._documentCount += 1, this._nextId += 1, shortDocumentId;
    }, MiniSearch2.prototype.addFields = function(fields) {
      for (var i = 0; i < fields.length; i++)
        this._fieldIds[fields[i]] = i;
    }, MiniSearch2.prototype.addFieldLength = function(documentId, fieldId, count, length) {
      var fieldLengths = this._fieldLength.get(documentId);
      fieldLengths == null && this._fieldLength.set(documentId, fieldLengths = []), fieldLengths[fieldId] = length;
      var averageFieldLength = this._avgFieldLength[fieldId] || 0, totalFieldLength = averageFieldLength * count + length;
      this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
    }, MiniSearch2.prototype.removeFieldLength = function(documentId, fieldId, count, length) {
      if (count === 1) {
        this._avgFieldLength[fieldId] = 0;
        return;
      }
      var totalFieldLength = this._avgFieldLength[fieldId] * count - length;
      this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
    }, MiniSearch2.prototype.saveStoredFields = function(documentId, doc) {
      var e_27, _a2, _b = this._options, storeFields = _b.storeFields, extractField = _b.extractField;
      if (!(storeFields == null || storeFields.length === 0)) {
        var documentFields = this._storedFields.get(documentId);
        documentFields == null && this._storedFields.set(documentId, documentFields = {});
        try {
          for (var storeFields_1 = __values(storeFields), storeFields_1_1 = storeFields_1.next(); !storeFields_1_1.done; storeFields_1_1 = storeFields_1.next()) {
            var fieldName = storeFields_1_1.value, fieldValue = extractField(doc, fieldName);
            fieldValue !== void 0 && (documentFields[fieldName] = fieldValue);
          }
        } catch (e_27_1) {
          e_27 = { error: e_27_1 };
        } finally {
          try {
            storeFields_1_1 && !storeFields_1_1.done && (_a2 = storeFields_1.return) && _a2.call(storeFields_1);
          } finally {
            if (e_27)
              throw e_27.error;
          }
        }
      }
    }, MiniSearch2.wildcard = Symbol("*"), MiniSearch2;
  }()
), getOwnProperty = function(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property) ? object[property] : void 0;
}, combinators = (_a = {}, _a[OR] = function(a, b) {
  var e_28, _a2;
  try {
    for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var docId = _c.value, existing = a.get(docId);
      if (existing == null)
        a.set(docId, b.get(docId));
      else {
        var _d = b.get(docId), score = _d.score, terms = _d.terms, match = _d.match;
        existing.score = existing.score + score, existing.match = Object.assign(existing.match, match), assignUniqueTerms(existing.terms, terms);
      }
    }
  } catch (e_28_1) {
    e_28 = { error: e_28_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_28)
        throw e_28.error;
    }
  }
  return a;
}, _a[AND] = function(a, b) {
  var e_29, _a2, combined = /* @__PURE__ */ new Map();
  try {
    for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var docId = _c.value, existing = a.get(docId);
      if (existing != null) {
        var _d = b.get(docId), score = _d.score, terms = _d.terms, match = _d.match;
        assignUniqueTerms(existing.terms, terms), combined.set(docId, {
          score: existing.score + score,
          terms: existing.terms,
          match: Object.assign(existing.match, match)
        });
      }
    }
  } catch (e_29_1) {
    e_29 = { error: e_29_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_29)
        throw e_29.error;
    }
  }
  return combined;
}, _a[AND_NOT] = function(a, b) {
  var e_30, _a2;
  try {
    for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var docId = _c.value;
      a.delete(docId);
    }
  } catch (e_30_1) {
    e_30 = { error: e_30_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_30)
        throw e_30.error;
    }
  }
  return a;
}, _a), defaultBM25params = { k: 1.2, b: 0.7, d: 0.5 }, calcBM25Score = function(termFreq, matchingCount, totalCount, fieldLength, avgFieldLength, bm25params) {
  var k = bm25params.k, b = bm25params.b, d = bm25params.d, invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
  return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
}, termToQuerySpec = function(options) {
  return function(term, i, terms) {
    var fuzzy = typeof options.fuzzy == "function" ? options.fuzzy(term, i, terms) : options.fuzzy || !1, prefix = typeof options.prefix == "function" ? options.prefix(term, i, terms) : options.prefix === !0;
    return { term, fuzzy, prefix };
  };
}, defaultOptions = {
  idField: "id",
  extractField: function(document2, fieldName) {
    return document2[fieldName];
  },
  tokenize: function(text) {
    return text.split(SPACE_OR_PUNCTUATION);
  },
  processTerm: function(term) {
    return term.toLowerCase();
  },
  fields: void 0,
  searchOptions: void 0,
  storeFields: [],
  logger: function(level, message) {
    typeof (console == null ? void 0 : console[level]) == "function" && console[level](message);
  },
  autoVacuum: !0
}, defaultSearchOptions = {
  combineWith: OR,
  prefix: !1,
  fuzzy: !1,
  maxFuzzy: 6,
  boost: {},
  weights: { fuzzy: 0.45, prefix: 0.375 },
  bm25: defaultBM25params
}, defaultAutoSuggestOptions = {
  combineWith: AND,
  prefix: function(term, i, terms) {
    return i === terms.length - 1;
  }
}, defaultVacuumOptions = { batchSize: 1e3, batchWait: 10 }, defaultVacuumConditions = { minDirtFactor: 0.1, minDirtCount: 20 }, defaultAutoVacuumOptions = __assign(__assign({}, defaultVacuumOptions), defaultVacuumConditions), assignUniqueTerm = function(target, term) {
  target.includes(term) || target.push(term);
}, assignUniqueTerms = function(target, source) {
  var e_31, _a2;
  try {
    for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
      var term = source_1_1.value;
      target.includes(term) || target.push(term);
    }
  } catch (e_31_1) {
    e_31 = { error: e_31_1 };
  } finally {
    try {
      source_1_1 && !source_1_1.done && (_a2 = source_1.return) && _a2.call(source_1);
    } finally {
      if (e_31)
        throw e_31.error;
    }
  }
}, byScore = function(_a2, _b) {
  var a = _a2.score, b = _b.score;
  return b - a;
}, createMap = function() {
  return /* @__PURE__ */ new Map();
}, objectToNumericMap = function(object) {
  var e_32, _a2, map = /* @__PURE__ */ new Map();
  try {
    for (var _b = __values(Object.keys(object)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      map.set(parseInt(key, 10), object[key]);
    }
  } catch (e_32_1) {
    e_32 = { error: e_32_1 };
  } finally {
    try {
      _c && !_c.done && (_a2 = _b.return) && _a2.call(_b);
    } finally {
      if (e_32)
        throw e_32.error;
    }
  }
  return map;
}, SPACE_OR_PUNCTUATION = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;
class LRUCache {
  constructor(max = 10) {
    __publicField(this, "max");
    __publicField(this, "cache");
    this.max = max, this.cache = /* @__PURE__ */ new Map();
  }
  get(key) {
    let item = this.cache.get(key);
    return item !== void 0 && (this.cache.delete(key), this.cache.set(key, item)), item;
  }
  set(key, val) {
    this.cache.has(key) ? this.cache.delete(key) : this.cache.size === this.max && this.cache.delete(this.first()), this.cache.set(key, val);
  }
  first() {
    return this.cache.keys().next().value;
  }
  clear() {
    this.cache.clear();
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-43c4f204"), n = n(), popScopeId(), n), _hoisted_1 = ["aria-owns"], _hoisted_2 = { class: "shell" }, _hoisted_3 = ["title"], _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  "aria-hidden": "true",
  class: "vpi-search search-icon local-search-icon"
}, null, -1)), _hoisted_5 = [
  _hoisted_4
], _hoisted_6 = { class: "search-actions before" }, _hoisted_7 = ["title"], _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-arrow-left local-search-icon" }, null, -1)), _hoisted_9 = [
  _hoisted_8
], _hoisted_10 = ["placeholder"], _hoisted_11 = { class: "search-actions" }, _hoisted_12 = ["title"], _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-layout-list local-search-icon" }, null, -1)), _hoisted_14 = [
  _hoisted_13
], _hoisted_15 = ["disabled", "title"], _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-delete local-search-icon" }, null, -1)), _hoisted_17 = [
  _hoisted_16
], _hoisted_18 = ["id", "role", "aria-labelledby"], _hoisted_19 = ["aria-selected"], _hoisted_20 = ["href", "aria-label", "onMouseenter", "onFocusin"], _hoisted_21 = { class: "titles" }, _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "title-icon" }, "#", -1)), _hoisted_23 = ["innerHTML"], _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-chevron-right local-search-icon" }, null, -1)), _hoisted_25 = { class: "title main" }, _hoisted_26 = ["innerHTML"], _hoisted_27 = {
  key: 0,
  class: "excerpt-wrapper"
}, _hoisted_28 = {
  key: 0,
  class: "excerpt",
  inert: ""
}, _hoisted_29 = ["innerHTML"], _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "excerpt-gradient-bottom" }, null, -1)), _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "excerpt-gradient-top" }, null, -1)), _hoisted_32 = {
  key: 0,
  class: "no-results"
}, _hoisted_33 = { class: "search-keyboard-shortcuts" }, _hoisted_34 = ["aria-label"], _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-arrow-up navigate-icon" }, null, -1)), _hoisted_36 = [
  _hoisted_35
], _hoisted_37 = ["aria-label"], _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-arrow-down navigate-icon" }, null, -1)), _hoisted_39 = [
  _hoisted_38
], _hoisted_40 = ["aria-label"], _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "vpi-corner-down-left navigate-icon" }, null, -1)), _hoisted_42 = [
  _hoisted_41
], _hoisted_43 = ["aria-label"], _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VPLocalSearchBox",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a2, _b;
    const emit = __emit, el = shallowRef(), resultsEl = shallowRef(), searchIndexData = shallowRef(localSearchIndex), vitePressData = useData(), { activate } = useFocusTrap(el, {
      immediate: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: !0,
      escapeDeactivates: !0
    }), { localeIndex, theme } = vitePressData, searchIndex = computedAsync(
      async () => {
        var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
        return markRaw(
          MiniSearch.loadJSON(
            (_c = await ((_b2 = (_a3 = searchIndexData.value)[localeIndex.value]) == null ? void 0 : _b2.call(_a3))) == null ? void 0 : _c.default,
            {
              fields: ["title", "titles", "text"],
              storeFields: ["title", "titles"],
              searchOptions: {
                fuzzy: 0.2,
                prefix: !0,
                boost: { title: 4, text: 2, titles: 1 },
                ...((_d = theme.value.search) == null ? void 0 : _d.provider) === "local" && ((_f = (_e = theme.value.search.options) == null ? void 0 : _e.miniSearch) == null ? void 0 : _f.searchOptions)
              },
              ...((_g = theme.value.search) == null ? void 0 : _g.provider) === "local" && ((_i = (_h = theme.value.search.options) == null ? void 0 : _h.miniSearch) == null ? void 0 : _i.options)
            }
          )
        );
      }
    ), filterText = computed(() => {
      var _a3, _b2;
      return ((_a3 = theme.value.search) == null ? void 0 : _a3.provider) === "local" && ((_b2 = theme.value.search.options) == null ? void 0 : _b2.disableQueryPersistence) === !0;
    }).value ? ref("") : useSessionStorage("vitepress:local-search-filter", ""), showDetailedList = useLocalStorage(
      "vitepress:local-search-detailed-list",
      ((_a2 = theme.value.search) == null ? void 0 : _a2.provider) === "local" && ((_b = theme.value.search.options) == null ? void 0 : _b.detailedView) === !0
    ), disableDetailedView = computed(() => {
      var _a3, _b2, _c;
      return ((_a3 = theme.value.search) == null ? void 0 : _a3.provider) === "local" && (((_b2 = theme.value.search.options) == null ? void 0 : _b2.disableDetailedView) === !0 || ((_c = theme.value.search.options) == null ? void 0 : _c.detailedView) === !1);
    }), buttonText = computed(() => {
      var _a3, _b2, _c, _d, _e, _f, _g;
      const options = ((_a3 = theme.value.search) == null ? void 0 : _a3.options) ?? theme.value.algolia;
      return ((_e = (_d = (_c = (_b2 = options == null ? void 0 : options.locales) == null ? void 0 : _b2[localeIndex.value]) == null ? void 0 : _c.translations) == null ? void 0 : _d.button) == null ? void 0 : _e.buttonText) || ((_g = (_f = options == null ? void 0 : options.translations) == null ? void 0 : _f.button) == null ? void 0 : _g.buttonText) || "Search";
    });
    watchEffect(() => {
      disableDetailedView.value && (showDetailedList.value = !1);
    });
    const results = shallowRef([]), enableNoResults = ref(!1);
    watch(filterText, () => {
      enableNoResults.value = !1;
    });
    const mark = computedAsync(async () => {
      if (resultsEl.value)
        return markRaw(new Mark2(resultsEl.value));
    }, null), cache = new LRUCache(16);
    watchDebounced(
      () => [searchIndex.value, filterText.value, showDetailedList.value],
      async ([index, filterTextValue, showDetailedListValue], old, onCleanup) => {
        var _a3, _b2, _c, _d;
        (old == null ? void 0 : old[0]) !== index && cache.clear();
        let canceled = !1;
        if (onCleanup(() => {
          canceled = !0;
        }), !index)
          return;
        results.value = index.search(filterTextValue).slice(0, 16), enableNoResults.value = !0;
        const mods = showDetailedListValue ? await Promise.all(results.value.map((r) => fetchExcerpt(r.id))) : [];
        if (canceled)
          return;
        for (const { id, mod } of mods) {
          const mapId = id.slice(0, id.indexOf("#"));
          let map = cache.get(mapId);
          if (map)
            continue;
          map = /* @__PURE__ */ new Map(), cache.set(mapId, map);
          const comp = mod.default ?? mod;
          if (comp != null && comp.render || comp != null && comp.setup) {
            const app = createApp(comp);
            app.config.warnHandler = () => {
            }, app.provide(dataSymbol, vitePressData), Object.defineProperties(app.config.globalProperties, {
              $frontmatter: {
                get() {
                  return vitePressData.frontmatter.value;
                }
              },
              $params: {
                get() {
                  return vitePressData.page.value.params;
                }
              }
            });
            const div = document.createElement("div");
            app.mount(div), div.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el2) => {
              var _a4;
              const href = (_a4 = el2.querySelector("a")) == null ? void 0 : _a4.getAttribute("href"), anchor = (href == null ? void 0 : href.startsWith("#")) && href.slice(1);
              if (!anchor)
                return;
              let html = "";
              for (; (el2 = el2.nextElementSibling) && !/^h[1-6]$/i.test(el2.tagName); )
                html += el2.outerHTML;
              map.set(anchor, html);
            }), app.unmount();
          }
          if (canceled)
            return;
        }
        const terms = /* @__PURE__ */ new Set();
        if (results.value = results.value.map((r) => {
          const [id, anchor] = r.id.split("#"), map = cache.get(id), text = (map == null ? void 0 : map.get(anchor)) ?? "";
          for (const term in r.match)
            terms.add(term);
          return { ...r, text };
        }), await nextTick(), canceled)
          return;
        await new Promise((r) => {
          var _a4;
          (_a4 = mark.value) == null || _a4.unmark({
            done: () => {
              var _a5;
              (_a5 = mark.value) == null || _a5.markRegExp(formMarkRegex(terms), { done: r });
            }
          });
        });
        const excerpts = ((_a3 = el.value) == null ? void 0 : _a3.querySelectorAll(".result .excerpt")) ?? [];
        for (const excerpt of excerpts)
          (_b2 = excerpt.querySelector('mark[data-markjs="true"]')) == null || _b2.scrollIntoView({ block: "center" });
        (_d = (_c = resultsEl.value) == null ? void 0 : _c.firstElementChild) == null || _d.scrollIntoView({ block: "start" });
      },
      { debounce: 200, immediate: !0 }
    );
    async function fetchExcerpt(id) {
      const file = pathToFile(id.slice(0, id.indexOf("#")));
      try {
        if (!file)
          throw new Error(`Cannot find file for id: ${id}`);
        return { id, mod: await __vitePreload(() => import(
          /*@vite-ignore*/
          file
        ), []) };
      } catch (e) {
        return console.error(e), { id, mod: {} };
      }
    }
    const searchInput = ref(), disableReset = computed(() => {
      var _a3;
      return ((_a3 = filterText.value) == null ? void 0 : _a3.length) <= 0;
    });
    function focusSearchInput(select = !0) {
      var _a3, _b2;
      (_a3 = searchInput.value) == null || _a3.focus(), select && ((_b2 = searchInput.value) == null || _b2.select());
    }
    onMounted(() => {
      focusSearchInput();
    });
    function onSearchBarClick(event) {
      event.pointerType === "mouse" && focusSearchInput();
    }
    const selectedIndex = ref(-1), disableMouseOver = ref(!1);
    watch(results, (r) => {
      selectedIndex.value = r.length ? 0 : -1, scrollToSelectedResult();
    });
    function scrollToSelectedResult() {
      nextTick(() => {
        const selectedEl = document.querySelector(".result.selected");
        selectedEl && selectedEl.scrollIntoView({
          block: "nearest"
        });
      });
    }
    onKeyStroke("ArrowUp", (event) => {
      event.preventDefault(), selectedIndex.value--, selectedIndex.value < 0 && (selectedIndex.value = results.value.length - 1), disableMouseOver.value = !0, scrollToSelectedResult();
    }), onKeyStroke("ArrowDown", (event) => {
      event.preventDefault(), selectedIndex.value++, selectedIndex.value >= results.value.length && (selectedIndex.value = 0), disableMouseOver.value = !0, scrollToSelectedResult();
    });
    const router = useRouter();
    onKeyStroke("Enter", (e) => {
      if (e.isComposing || e.target instanceof HTMLButtonElement && e.target.type !== "submit")
        return;
      const selectedPackage = results.value[selectedIndex.value];
      if (e.target instanceof HTMLInputElement && !selectedPackage) {
        e.preventDefault();
        return;
      }
      selectedPackage && (router.go(selectedPackage.id), emit("close"));
    }), onKeyStroke("Escape", () => {
      emit("close");
    });
    const translate = createSearchTranslate({
      modal: {
        displayDetails: "Display detailed list",
        resetButtonTitle: "Reset search",
        backButtonTitle: "Close search",
        noResultsText: "No results for",
        footer: {
          selectText: "to select",
          selectKeyAriaLabel: "enter",
          navigateText: "to navigate",
          navigateUpKeyAriaLabel: "up arrow",
          navigateDownKeyAriaLabel: "down arrow",
          closeText: "to close",
          closeKeyAriaLabel: "escape"
        }
      }
    });
    onMounted(() => {
      window.history.pushState(null, "", null);
    }), useEventListener("popstate", (event) => {
      event.preventDefault(), emit("close");
    });
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    onMounted(() => {
      nextTick(() => {
        isLocked.value = !0, nextTick().then(() => activate());
      });
    }), onBeforeUnmount(() => {
      isLocked.value = !1;
    });
    function resetSearch() {
      filterText.value = "", nextTick().then(() => focusSearchInput(!1));
    }
    function formMarkRegex(terms) {
      return new RegExp(
        [...terms].sort((a, b) => b.length - a.length).map((term) => `(${escapeRegExp(term)})`).join("|"),
        "gi"
      );
    }
    return (_ctx, _cache) => {
      var _a3, _b2, _c, _d;
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", {
          ref_key: "el",
          ref: el,
          role: "button",
          "aria-owns": (_a3 = results.value) != null && _a3.length ? "localsearch-list" : void 0,
          "aria-expanded": "true",
          "aria-haspopup": "listbox",
          "aria-labelledby": "localsearch-label",
          class: "VPLocalSearchBox"
        }, [
          createBaseVNode("div", {
            class: "backdrop",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("form", {
              class: "search-bar",
              onPointerup: _cache[4] || (_cache[4] = ($event) => onSearchBarClick($event)),
              onSubmit: _cache[5] || (_cache[5] = withModifiers(() => {
              }, ["prevent"]))
            }, [
              createBaseVNode("label", {
                title: buttonText.value,
                id: "localsearch-label",
                for: "localsearch-input"
              }, _hoisted_5, 8, _hoisted_3),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("button", {
                  class: "back-button",
                  title: unref(translate)("modal.backButtonTitle"),
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
                }, _hoisted_9, 8, _hoisted_7)
              ]),
              withDirectives(createBaseVNode("input", {
                ref_key: "searchInput",
                ref: searchInput,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(filterText) ? filterText.value = $event : null),
                placeholder: buttonText.value,
                id: "localsearch-input",
                "aria-labelledby": "localsearch-label",
                class: "search-input"
              }, null, 8, _hoisted_10), [
                [vModelText, unref(filterText)]
              ]),
              createBaseVNode("div", _hoisted_11, [
                disableDetailedView.value ? createCommentVNode("", !0) : (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: normalizeClass(["toggle-layout-button", { "detailed-list": unref(showDetailedList) }]),
                  type: "button",
                  title: unref(translate)("modal.displayDetails"),
                  onClick: _cache[3] || (_cache[3] = ($event) => selectedIndex.value > -1 && (showDetailedList.value = !unref(showDetailedList)))
                }, _hoisted_14, 10, _hoisted_12)),
                createBaseVNode("button", {
                  class: "clear-button",
                  type: "reset",
                  disabled: disableReset.value,
                  title: unref(translate)("modal.resetButtonTitle"),
                  onClick: resetSearch
                }, _hoisted_17, 8, _hoisted_15)
              ])
            ], 32),
            createBaseVNode("ul", {
              ref_key: "resultsEl",
              ref: resultsEl,
              id: (_b2 = results.value) != null && _b2.length ? "localsearch-list" : void 0,
              role: (_c = results.value) != null && _c.length ? "listbox" : void 0,
              "aria-labelledby": (_d = results.value) != null && _d.length ? "localsearch-label" : void 0,
              class: "results",
              onMousemove: _cache[7] || (_cache[7] = ($event) => disableMouseOver.value = !1)
            }, [
              (openBlock(!0), createElementBlock(Fragment, null, renderList(results.value, (p, index) => (openBlock(), createElementBlock("li", {
                key: p.id,
                role: "option",
                "aria-selected": selectedIndex.value === index ? "true" : "false"
              }, [
                createBaseVNode("a", {
                  href: p.id,
                  class: normalizeClass(["result", {
                    selected: selectedIndex.value === index
                  }]),
                  "aria-label": [...p.titles, p.title].join(" > "),
                  onMouseenter: ($event) => !disableMouseOver.value && (selectedIndex.value = index),
                  onFocusin: ($event) => selectedIndex.value = index,
                  onClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("close"))
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_21, [
                      _hoisted_22,
                      (openBlock(!0), createElementBlock(Fragment, null, renderList(p.titles, (t, index2) => (openBlock(), createElementBlock("span", {
                        key: index2,
                        class: "title"
                      }, [
                        createBaseVNode("span", {
                          class: "text",
                          innerHTML: t
                        }, null, 8, _hoisted_23),
                        _hoisted_24
                      ]))), 128)),
                      createBaseVNode("span", _hoisted_25, [
                        createBaseVNode("span", {
                          class: "text",
                          innerHTML: p.title
                        }, null, 8, _hoisted_26)
                      ])
                    ]),
                    unref(showDetailedList) ? (openBlock(), createElementBlock("div", _hoisted_27, [
                      p.text ? (openBlock(), createElementBlock("div", _hoisted_28, [
                        createBaseVNode("div", {
                          class: "vp-doc",
                          innerHTML: p.text
                        }, null, 8, _hoisted_29)
                      ])) : createCommentVNode("", !0),
                      _hoisted_30,
                      _hoisted_31
                    ])) : createCommentVNode("", !0)
                  ])
                ], 42, _hoisted_20)
              ], 8, _hoisted_19))), 128)),
              unref(filterText) && !results.value.length && enableNoResults.value ? (openBlock(), createElementBlock("li", _hoisted_32, [
                createTextVNode(toDisplayString(unref(translate)("modal.noResultsText")) + ' "', 1),
                createBaseVNode("strong", null, toDisplayString(unref(filterText)), 1),
                createTextVNode('" ')
              ])) : createCommentVNode("", !0)
            ], 40, _hoisted_18),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("span", null, [
                createBaseVNode("kbd", {
                  "aria-label": unref(translate)("modal.footer.navigateUpKeyAriaLabel")
                }, _hoisted_36, 8, _hoisted_34),
                createBaseVNode("kbd", {
                  "aria-label": unref(translate)("modal.footer.navigateDownKeyAriaLabel")
                }, _hoisted_39, 8, _hoisted_37),
                createTextVNode(" " + toDisplayString(unref(translate)("modal.footer.navigateText")), 1)
              ]),
              createBaseVNode("span", null, [
                createBaseVNode("kbd", {
                  "aria-label": unref(translate)("modal.footer.selectKeyAriaLabel")
                }, _hoisted_42, 8, _hoisted_40),
                createTextVNode(" " + toDisplayString(unref(translate)("modal.footer.selectText")), 1)
              ]),
              createBaseVNode("span", null, [
                createBaseVNode("kbd", {
                  "aria-label": unref(translate)("modal.footer.closeKeyAriaLabel")
                }, "esc", 8, _hoisted_43),
                createTextVNode(" " + toDisplayString(unref(translate)("modal.footer.closeText")), 1)
              ])
            ])
          ])
        ], 8, _hoisted_1)
      ]);
    };
  }
}), VPLocalSearchBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43c4f204"]]);
export {
  VPLocalSearchBox as default
};
