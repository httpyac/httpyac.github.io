function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null), list = str.split(",");
  for (let i = 0; i < list.length; i++)
    map[list[i]] = !0;
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i], normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized)
        for (const key in normalized)
          res[key] = normalized[key];
    }
    return res;
  } else {
    if (isString$1(value))
      return value;
    if (isObject(value))
      return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g, propertyDelimiterRE = /:([^]+)/, styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
  const ret = {};
  return cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  }), ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value))
    res = value;
  else if (isArray(value))
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      normalized && (res += normalized + " ");
    }
  else if (isObject(value))
    for (const name in value)
      value[name] && (res += name + " ");
  return res.trim();
}
const specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => isString$1(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val), replacer = (_key, val) => val && val.__v_isRef ? replacer(_key, val.value) : isMap(val) ? {
  [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => (entries[`${key} =>`] = val2, entries), {})
} : isSet(val) ? {
  [`Set(${val.size})`]: [...val.values()]
} : isObject(val) && !isArray(val) && !isPlainObject(val) ? String(val) : val, EMPTY_OBJ = {}, EMPTY_ARR = [], NOOP = () => {
}, NO = () => !1, onRE = /^on[^a-z]/, isOn = (key) => onRE.test(key), isModelListener = (key) => key.startsWith("onUpdate:"), extend = Object.assign, remove = (arr, el) => {
  const i = arr.indexOf(el);
  i > -1 && arr.splice(i, 1);
}, hasOwnProperty$1 = Object.prototype.hasOwnProperty, hasOwn = (val, key) => hasOwnProperty$1.call(val, key), isArray = Array.isArray, isMap = (val) => toTypeString(val) === "[object Map]", isSet = (val) => toTypeString(val) === "[object Set]", isFunction = (val) => typeof val == "function", isString$1 = (val) => typeof val == "string", isSymbol = (val) => typeof val == "symbol", isObject = (val) => val !== null && typeof val == "object", isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch), objectToString = Object.prototype.toString, toTypeString = (value) => objectToString.call(value), toRawType = (value) => toTypeString(value).slice(8, -1), isPlainObject = (val) => toTypeString(val) === "[object Object]", isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key, isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => cache[str] || (cache[str] = fn(str));
}, camelizeRE = /-(\w)/g, camelize = cacheStringFunction((str) => str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "")), hyphenateRE = /\B([A-Z])/g, hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase()), capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1)), toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ""), hasChanged = (value, oldValue) => !Object.is(value, oldValue), invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++)
    fns[i](arg);
}, def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: !0,
    enumerable: !1,
    value
  });
}, looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}, toNumber = (val) => {
  const n = isString$1(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => _globalThis || (_globalThis = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let activeEffectScope;
class EffectScope {
  constructor(detached = !1) {
    this.detached = detached, this._active = !0, this.effects = [], this.cleanups = [], this.parent = activeEffectScope, !detached && activeEffectScope && (this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        return activeEffectScope = this, fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++)
        this.effects[i].stop();
      for (i = 0, l = this.cleanups.length; i < l; i++)
        this.cleanups[i]();
      if (this.scopes)
        for (i = 0, l = this.scopes.length; i < l; i++)
          this.scopes[i].stop(!0);
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        last && last !== this && (this.parent.scopes[this.index] = last, last.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  scope && scope.active && scope.effects.push(effect);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  activeEffectScope && activeEffectScope.cleanups.push(fn);
}
const createDep = (effects) => {
  const dep = new Set(effects);
  return dep.w = 0, dep.n = 0, dep;
}, wasTracked = (dep) => (dep.w & trackOpBit) > 0, newTracked = (dep) => (dep.n & trackOpBit) > 0, initDepMarkers = ({ deps }) => {
  if (deps.length)
    for (let i = 0; i < deps.length; i++)
      deps[i].w |= trackOpBit;
}, finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      wasTracked(dep) && !newTracked(dep) ? dep.delete(effect) : deps[ptr++] = dep, dep.w &= ~trackOpBit, dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
}, targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0, trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(""), MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn, this.scheduler = scheduler, this.active = !0, this.deps = [], this.parent = void 0, recordEffectScope(this, scope);
  }
  run() {
    if (!this.active)
      return this.fn();
    let parent = activeEffect, lastShouldTrack = shouldTrack;
    for (; parent; ) {
      if (parent === this)
        return;
      parent = parent.parent;
    }
    try {
      return this.parent = activeEffect, activeEffect = this, shouldTrack = !0, trackOpBit = 1 << ++effectTrackDepth, effectTrackDepth <= maxMarkerBits ? initDepMarkers(this) : cleanupEffect(this), this.fn();
    } finally {
      effectTrackDepth <= maxMarkerBits && finalizeDepMarkers(this), trackOpBit = 1 << --effectTrackDepth, activeEffect = this.parent, shouldTrack = lastShouldTrack, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    activeEffect === this ? this.deferStop = !0 : this.active && (cleanupEffect(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++)
      deps[i].delete(effect);
    deps.length = 0;
  }
}
let shouldTrack = !0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack), shouldTrack = !1;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? !0 : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    depsMap || targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    let dep = depsMap.get(key);
    dep || depsMap.set(key, dep = createDep()), trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = !1;
  effectTrackDepth <= maxMarkerBits ? newTracked(dep) || (dep.n |= trackOpBit, shouldTrack2 = !wasTracked(dep)) : shouldTrack2 = !dep.has(activeEffect), shouldTrack2 && (dep.add(activeEffect), activeEffect.deps.push(dep));
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap)
    return;
  let deps = [];
  if (type === "clear")
    deps = [...depsMap.values()];
  else if (key === "length" && isArray(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      (key2 === "length" || key2 >= newLength) && deps.push(dep);
    });
  } else
    switch (key !== void 0 && deps.push(depsMap.get(key)), type) {
      case "add":
        isArray(target) ? isIntegerKey(key) && deps.push(depsMap.get("length")) : (deps.push(depsMap.get(ITERATE_KEY)), isMap(target) && deps.push(depsMap.get(MAP_KEY_ITERATE_KEY)));
        break;
      case "delete":
        isArray(target) || (deps.push(depsMap.get(ITERATE_KEY)), isMap(target) && deps.push(depsMap.get(MAP_KEY_ITERATE_KEY)));
        break;
      case "set":
        isMap(target) && deps.push(depsMap.get(ITERATE_KEY));
        break;
    }
  if (deps.length === 1)
    deps[0] && triggerEffects(deps[0]);
  else {
    const effects = [];
    for (const dep of deps)
      dep && effects.push(...dep);
    triggerEffects(createDep(effects));
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects)
    effect.computed && triggerEffect(effect);
  for (const effect of effects)
    effect.computed || triggerEffect(effect);
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  (effect !== activeEffect || effect.allowRecurse) && (effect.scheduler ? effect.scheduler() : effect.run());
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap("__proto__,__v_isRef,__isVue"), builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
), get$1 = /* @__PURE__ */ createGetter(), shallowGet = /* @__PURE__ */ createGetter(!1, !0), readonlyGet = /* @__PURE__ */ createGetter(!0), arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++)
        track(arr, "get", i + "");
      const res = arr[key](...args);
      return res === -1 || res === !1 ? arr[key](...args.map(toRaw)) : res;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      return resetTracking(), res;
    };
  }), instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  return track(obj, "has", key), obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = !1, shallow = !1) {
  return function(target, key, receiver) {
    if (key === "__v_isReactive")
      return !isReadonly2;
    if (key === "__v_isReadonly")
      return isReadonly2;
    if (key === "__v_isShallow")
      return shallow;
    if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target))
      return target;
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key))
        return Reflect.get(arrayInstrumentations, key, receiver);
      if (key === "hasOwnProperty")
        return hasOwnProperty;
    }
    const res = Reflect.get(target, key, receiver);
    return (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) || (isReadonly2 || track(target, "get", key), shallow) ? res : isRef(res) ? targetIsArray && isIntegerKey(key) ? res : res.value : isObject(res) ? isReadonly2 ? readonly(res) : reactive(res) : res;
  };
}
const set$1 = /* @__PURE__ */ createSetter(), shallowSet = /* @__PURE__ */ createSetter(!0);
function createSetter(shallow = !1) {
  return function(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value))
      return !1;
    if (!shallow && (!isShallow(value) && !isReadonly(value) && (oldValue = toRaw(oldValue), value = toRaw(value)), !isArray(target) && isRef(oldValue) && !isRef(value)))
      return oldValue.value = value, !0;
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key), result = Reflect.set(target, key, value, receiver);
    return target === toRaw(receiver) && (hadKey ? hasChanged(value, oldValue) && trigger(target, "set", key, value) : trigger(target, "add", key, value)), result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  return result && hadKey && trigger(target, "delete", key, void 0), result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  return (!isSymbol(key) || !builtInSymbols.has(key)) && track(target, "has", key), result;
}
function ownKeys(target) {
  return track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY), Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty,
  has: has$1,
  ownKeys
}, readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return !0;
  },
  deleteProperty(target, key) {
    return !0;
  }
}, shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}), toShallow = (value) => value, getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = !1, isShallow2 = !1) {
  target = target.__v_raw;
  const rawTarget = toRaw(target), rawKey = toRaw(key);
  isReadonly2 || (key !== rawKey && track(rawTarget, "get", key), track(rawTarget, "get", rawKey));
  const { has: has2 } = getProto(rawTarget), wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key))
    return wrap(target.get(key));
  if (has2.call(rawTarget, rawKey))
    return wrap(target.get(rawKey));
  target !== rawTarget && target.get(key);
}
function has(key, isReadonly2 = !1) {
  const target = this.__v_raw, rawTarget = toRaw(target), rawKey = toRaw(key);
  return isReadonly2 || (key !== rawKey && track(rawTarget, "has", key), track(rawTarget, "has", rawKey)), key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = !1) {
  return target = target.__v_raw, !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY), Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  return getProto(target).has.call(target, value) || (target.add(value), trigger(target, "add", value, value)), this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this), { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  hadKey || (key = toRaw(key), hadKey = has2.call(target, key));
  const oldValue = get2.call(target, key);
  return target.set(key, value), hadKey ? hasChanged(value, oldValue) && trigger(target, "set", key, value) : trigger(target, "add", key, value), this;
}
function deleteEntry(key) {
  const target = toRaw(this), { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  hadKey || (key = toRaw(key), hadKey = has2.call(target, key)), get2 && get2.call(target, key);
  const result = target.delete(key);
  return hadKey && trigger(target, "delete", key, void 0), result;
}
function clear() {
  const target = toRaw(this), hadItems = target.size !== 0, result = target.clear();
  return hadItems && trigger(target, "clear", void 0, void 0), result;
}
function createForEach(isReadonly2, isShallow2) {
  return function(callback, thisArg) {
    const observed = this, target = observed.__v_raw, rawTarget = toRaw(target), wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    return !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY), target.forEach((value, key) => callback.call(thisArg, wrap(value), wrap(key), observed));
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this.__v_raw, rawTarget = toRaw(target), targetIsMap = isMap(rawTarget), isPair = method === "entries" || method === Symbol.iterator && targetIsMap, isKeyOnly = method === "keys" && targetIsMap, innerIterator = target[method](...args), wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    return !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY), {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? !1 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(!1, !1)
  }, shallowInstrumentations2 = {
    get(key) {
      return get(this, key, !1, !0);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(!1, !0)
  }, readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, !0);
    },
    get size() {
      return size(this, !0);
    },
    has(key) {
      return has.call(this, key, !0);
    },
    add: createReadonlyMethod(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(!0, !1)
  }, shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, !0, !0);
    },
    get size() {
      return size(this, !0);
    },
    has(key) {
      return has.call(this, key, !0);
    },
    add: createReadonlyMethod(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, !1, !1), readonlyInstrumentations2[method] = createIterableMethod(method, !0, !1), shallowInstrumentations2[method] = createIterableMethod(method, !1, !0), shallowReadonlyInstrumentations2[method] = createIterableMethod(method, !0, !0);
  }), [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => key === "__v_isReactive" ? !isReadonly2 : key === "__v_isReadonly" ? isReadonly2 : key === "__v_raw" ? target : Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(!1, !1)
}, shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(!1, !0)
}, readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(!0, !1)
}, reactiveMap = /* @__PURE__ */ new WeakMap(), shallowReactiveMap = /* @__PURE__ */ new WeakMap(), readonlyMap = /* @__PURE__ */ new WeakMap(), shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value.__v_skip || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  return isReadonly(target) ? target : createReactiveObject(target, !1, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, !1, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, !0, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target) || target.__v_raw && !(isReadonly2 && target.__v_isReactive))
    return target;
  const existingProxy = proxyMap.get(target);
  if (existingProxy)
    return existingProxy;
  const targetType = getTargetType(target);
  if (targetType === 0)
    return target;
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  return proxyMap.set(target, proxy), proxy;
}
function isReactive(value) {
  return isReadonly(value) ? isReactive(value.__v_raw) : !!(value && value.__v_isReactive);
}
function isReadonly(value) {
  return !!(value && value.__v_isReadonly);
}
function isShallow(value) {
  return !!(value && value.__v_isShallow);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed.__v_raw;
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  return def(value, "__v_skip", !0), value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value, toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  shouldTrack && activeEffect && (ref2 = toRaw(ref2), trackEffects(ref2.dep || (ref2.dep = createDep())));
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  dep && triggerEffects(dep);
}
function isRef(r) {
  return !!(r && r.__v_isRef === !0);
}
function ref(value) {
  return createRef(value, !1);
}
function shallowRef(value) {
  return createRef(value, !0);
}
function createRef(rawValue, shallow) {
  return isRef(rawValue) ? rawValue : new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow, this.dep = void 0, this.__v_isRef = !0, this._rawValue = __v_isShallow ? value : toRaw(value), this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    return trackRefValue(this), this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal), hasChanged(newVal, this._rawValue) && (this._rawValue = newVal, this._value = useDirectValue ? newVal : toReactive(newVal), triggerRefValue(this));
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    return isRef(oldValue) && !isRef(value) ? (oldValue.value = value, !0) : Reflect.set(target, key, value, receiver);
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a$1;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter, this.dep = void 0, this.__v_isRef = !0, this[_a$1] = !1, this._dirty = !0, this.effect = new ReactiveEffect(getter, () => {
      this._dirty || (this._dirty = !0, triggerRefValue(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !isSSR, this.__v_isReadonly = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    return trackRefValue(self2), (self2._dirty || !self2._cacheable) && (self2._dirty = !1, self2._value = self2.effect.run()), self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a$1 = "__v_isReadonly";
function computed$1(getterOrOptions, debugOptions, isSSR = !1) {
  let getter, setter;
  const onlyGetter = isFunction(getterOrOptions);
  return onlyGetter ? (getter = getterOrOptions, setter = NOOP) : (getter = getterOrOptions.get, setter = getterOrOptions.set), new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    return res && isPromise(res) && res.catch((err) => {
      handleError(err, instance, type);
    }), res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++)
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  return values;
}
function handleError(err, instance, type, throwInDev = !0) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy, errorInfo = type;
    for (; cur; ) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++)
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === !1)
            return;
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = !0) {
  console.error(err);
}
let isFlushing = !1, isFlushPending = !1;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null, postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1, end = queue.length;
  for (; start < end; ) {
    const middle = start + end >>> 1;
    getId(queue[middle]) < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && (job.id == null ? queue.push(job) : queue.splice(findInsertionIndex(job.id), 0, job), queueFlush());
}
function queueFlush() {
  !isFlushing && !isFlushPending && (isFlushPending = !0, currentFlushPromise = resolvedPromise.then(flushJobs));
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  i > flushIndex && queue.splice(i, 1);
}
function queuePostFlushCb(cb) {
  isArray(cb) ? pendingPostFlushCbs.push(...cb) : (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) && pendingPostFlushCbs.push(cb), queueFlush();
}
function flushPreFlushCbs(seen2, i = isFlushing ? flushIndex + 1 : 0) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    cb && cb.pre && (queue.splice(i, 1), i--, cb());
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    if (pendingPostFlushCbs.length = 0, activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    for (activePostFlushCbs = deduped, activePostFlushCbs.sort((a, b) => getId(a) - getId(b)), postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++)
      activePostFlushCbs[postFlushIndex]();
    activePostFlushCbs = null, postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? 1 / 0 : job.id, comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen2) {
  isFlushPending = !1, isFlushing = !0, queue.sort(comparator);
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      job && job.active !== !1 && callWithErrorHandling(
        job,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    flushIndex = 0, queue.length = 0, flushPostFlushCbs(), isFlushing = !1, currentFlushPromise = null, (queue.length || pendingPostFlushCbs.length) && flushJobs();
  }
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:"), modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`, { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    trim && (args = rawArgs.map((a) => isString$1(a) ? a.trim() : a)), number && (args = rawArgs.map(looseToNumber));
  }
  let handlerName, handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  !handler && isModelListener2 && (handler = props[handlerName = toHandlerKey(hyphenate(event))]), handler && callWithAsyncErrorHandling(handler, instance, 6, args);
  const onceHandler = props[handlerName + "Once"];
  if (onceHandler) {
    if (!instance.emitted)
      instance.emitted = {};
    else if (instance.emitted[handlerName])
      return;
    instance.emitted[handlerName] = !0, callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = !1) {
  const cache = appContext.emitsCache, cached = cache.get(comp);
  if (cached !== void 0)
    return cached;
  const raw = comp.emits;
  let normalized = {}, hasExtends = !1;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, !0);
      normalizedFromExtend && (hasExtends = !0, extend(normalized, normalizedFromExtend));
    };
    !asMixin && appContext.mixins.length && appContext.mixins.forEach(extendEmits), comp.extends && extendEmits(comp.extends), comp.mixins && comp.mixins.forEach(extendEmits);
  }
  return !raw && !hasExtends ? (isObject(comp) && cache.set(comp, null), null) : (isArray(raw) ? raw.forEach((key) => normalized[key] = null) : extend(normalized, raw), isObject(comp) && cache.set(comp, normalized), normalized);
}
function isEmitListener(options, key) {
  return !options || !isOn(key) ? !1 : (key = key.slice(2).replace(/Once$/, ""), hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key));
}
let currentRenderingInstance = null, currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  return currentRenderingInstance = instance, currentScopeId = instance && instance.type.__scopeId || null, prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx || fn._n)
    return fn;
  const renderFnWithContext = (...args) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance), renderFnWithContext._d && setBlockTracking(1);
    }
    return res;
  };
  return renderFnWithContext._n = !0, renderFnWithContext._c = !0, renderFnWithContext._d = !0, renderFnWithContext;
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result, fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx)), fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      result = normalizeVNode(render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(
        props,
        null
        /* we know it doesn't need it */
      )), fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0, handleError(
      err,
      instance,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== !1) {
    const keys = Object.keys(fallthroughAttrs), { shapeFlag } = root;
    keys.length && shapeFlag & 7 && (propsOptions && keys.some(isModelListener) && (fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions)), root = cloneVNode(root, fallthroughAttrs));
  }
  return vnode.dirs && (root = cloneVNode(root), root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs), vnode.transition && (root.transition = vnode.transition), result = root, setCurrentRenderingInstance(prev), result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs)
    (key === "class" || key === "style" || isOn(key)) && ((res || (res = {}))[key] = attrs[key]);
  return res;
}, filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs)
    (!isModelListener(key) || !(key.slice(9) in props)) && (res[key] = attrs[key]);
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode, { props: nextProps, children: nextChildren, patchFlag } = nextVNode, emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition)
    return !0;
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024)
      return !0;
    if (patchFlag & 16)
      return prevProps ? hasPropsChanged(prevProps, nextProps, emits) : !!nextProps;
    if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key))
          return !0;
      }
    }
  } else
    return (prevChildren || nextChildren) && (!nextChildren || !nextChildren.$stable) ? !0 : prevProps === nextProps ? !1 : prevProps ? nextProps ? hasPropsChanged(prevProps, nextProps, emits) : !0 : !!nextProps;
  return !1;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length)
    return !0;
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key))
      return !0;
  }
  return !1;
}
function updateHOCHostEl({ vnode, parent }, el) {
  for (; parent && parent.subTree === vnode; )
    (vnode = parent.vnode).el = el, parent = parent.parent;
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  suspense && suspense.pendingBranch ? isArray(fn) ? suspense.effects.push(...fn) : suspense.effects.push(fn) : queuePostFlushCb(fn);
}
function provide(key, value) {
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    parentProvides === provides && (provides = currentInstance.provides = Object.create(parentProvides)), provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = !1) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides)
      return provides[key];
    if (arguments.length > 1)
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = getCurrentScope() === (currentInstance == null ? void 0 : currentInstance.scope) ? currentInstance : null;
  let getter, forceTrigger = !1, isMultiSource = !1;
  if (isRef(source) ? (getter = () => source.value, forceTrigger = isShallow(source)) : isReactive(source) ? (getter = () => source, deep = !0) : isArray(source) ? (isMultiSource = !0, forceTrigger = source.some((s) => isReactive(s) || isShallow(s)), getter = () => source.map((s) => {
    if (isRef(s))
      return s.value;
    if (isReactive(s))
      return traverse(s);
    if (isFunction(s))
      return callWithErrorHandling(
        s,
        instance,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : isFunction(source) ? cb ? getter = () => callWithErrorHandling(
    source,
    instance,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : getter = () => {
    if (!(instance && instance.isUnmounted))
      return cleanup && cleanup(), callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
  } : getter = NOOP, cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup, onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(
        fn,
        instance,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, ssrCleanup;
  if (isInSSRComponentSetup)
    if (onCleanup = NOOP, cb ? immediate && callWithAsyncErrorHandling(cb, instance, 3, [
      getter(),
      isMultiSource ? [] : void 0,
      onCleanup
    ]) : getter(), flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else
      return NOOP;
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (effect.active)
      if (cb) {
        const newValue = effect.run();
        (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) && (cleanup && cleanup(), callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]), oldValue = newValue);
      } else
        effect.run();
  };
  job.allowRecurse = !!cb;
  let scheduler;
  flush === "sync" ? scheduler = job : flush === "post" ? scheduler = () => queuePostRenderEffect(job, instance && instance.suspense) : (job.pre = !0, instance && (job.id = instance.uid), scheduler = () => queueJob(job));
  const effect = new ReactiveEffect(getter, scheduler);
  cb ? immediate ? job() : oldValue = effect.run() : flush === "post" ? queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense) : effect.run();
  const unwatch = () => {
    effect.stop(), instance && instance.scope && remove(instance.scope.effects, effect);
  };
  return ssrCleanup && ssrCleanup.push(unwatch), unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy, getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  isFunction(value) ? cb = value : (cb = value.handler, options = value);
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  return cur ? setCurrentInstance(cur) : unsetCurrentInstance(), res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++)
      cur = cur[segments[i]];
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject(value) || value.__v_skip || (seen2 = seen2 || /* @__PURE__ */ new Set(), seen2.has(value)))
    return value;
  if (seen2.add(value), isRef(value))
    traverse(value.value, seen2);
  else if (isArray(value))
    for (let i = 0; i < value.length; i++)
      traverse(value[i], seen2);
  else if (isSet(value) || isMap(value))
    value.forEach((v) => {
      traverse(v, seen2);
    });
  else if (isPlainObject(value))
    for (const key in value)
      traverse(value[key], seen2);
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return onMounted(() => {
    state.isMounted = !0;
  }), onBeforeUnmount(() => {
    state.isUnmounting = !0;
  }), state;
}
const TransitionHookValidator = [Function, Array], BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance(), state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), !0);
      if (!children || !children.length)
        return;
      let child = children[0];
      if (children.length > 1) {
        for (const c of children)
          if (c.type !== Comment) {
            child = c;
            break;
          }
      }
      const rawProps = toRaw(props), { mode } = rawProps;
      if (state.isLeaving)
        return emptyPlaceholder(child);
      const innerChild = getKeepAliveChild(child);
      if (!innerChild)
        return emptyPlaceholder(child);
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree, oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = !1;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        prevTransitionKey === void 0 ? prevTransitionKey = key : key !== prevTransitionKey && (prevTransitionKey = key, transitionKeyChanged = !0);
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        if (setTransitionHooks(oldInnerChild, leavingHooks), mode === "out-in")
          return state.isLeaving = !0, leavingHooks.afterLeave = () => {
            state.isLeaving = !1, instance.update.active !== !1 && instance.update();
          }, emptyPlaceholder(child);
        mode === "in-out" && innerChild.type !== Comment && (leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
          const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
          leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild, el._leaveCb = () => {
            earlyRemove(), el._leaveCb = void 0, delete enterHooks.delayedLeave;
          }, enterHooks.delayedLeave = delayedLeave;
        });
      }
      return child;
    };
  }
}, BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  return leavingVNodesCache || (leavingVNodesCache = /* @__PURE__ */ Object.create(null), leavingVNodes.set(vnode.type, leavingVNodesCache)), leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = !1, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props, key = String(vnode.key), leavingVNodesCache = getLeavingNodesForType(state, vnode), callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  }, callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args), isArray(hook) ? hook.every((hook2) => hook2.length <= 1) && done() : hook.length <= 1 && done();
  }, hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted)
        if (appear)
          hook = onBeforeAppear || onBeforeEnter;
        else
          return;
      el._leaveCb && el._leaveCb(
        !0
        /* cancelled */
      );
      const leavingVNode = leavingVNodesCache[key];
      leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb && leavingVNode.el._leaveCb(), callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter, afterHook = onAfterEnter, cancelHook = onEnterCancelled;
      if (!state.isMounted)
        if (appear)
          hook = onAppear || onEnter, afterHook = onAfterAppear || onAfterEnter, cancelHook = onAppearCancelled || onEnterCancelled;
        else
          return;
      let called = !1;
      const done = el._enterCb = (cancelled) => {
        called || (called = !0, cancelled ? callHook2(cancelHook, [el]) : callHook2(afterHook, [el]), hooks.delayedLeave && hooks.delayedLeave(), el._enterCb = void 0);
      };
      hook ? callAsyncHook(hook, [el, done]) : done();
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb && el._enterCb(
        !0
        /* cancelled */
      ), state.isUnmounting)
        return remove2();
      callHook2(onBeforeLeave, [el]);
      let called = !1;
      const done = el._leaveCb = (cancelled) => {
        called || (called = !0, remove2(), cancelled ? callHook2(onLeaveCancelled, [el]) : callHook2(onAfterLeave, [el]), el._leaveCb = void 0, leavingVNodesCache[key2] === vnode && delete leavingVNodesCache[key2]);
      };
      leavingVNodesCache[key2] = vnode, onLeave ? callAsyncHook(onLeave, [el, done]) : done();
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode))
    return vnode = cloneVNode(vnode), vnode.children = null, vnode;
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  vnode.shapeFlag & 6 && vnode.component ? setTransitionHooks(vnode.component.subTree, hooks) : vnode.shapeFlag & 128 ? (vnode.ssContent.transition = hooks.clone(vnode.ssContent), vnode.ssFallback.transition = hooks.clone(vnode.ssFallback)) : vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = !1, parentKey) {
  let ret = [], keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    child.type === Fragment ? (child.patchFlag & 128 && keyedFragmentCount++, ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key))) : (keepComment || child.type !== Comment) && ret.push(key != null ? cloneVNode(child, { key }) : child);
  }
  if (keyedFragmentCount > 1)
    for (let i = 0; i < ret.length; i++)
      ret[i].patchFlag = -2;
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader, isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    for (; current; ) {
      if (current.isDeactivated)
        return;
      current = current.parent;
    }
    return hook();
  });
  if (injectHook(type, wrappedHook, target), target) {
    let current = target.parent;
    for (; current && current.parent; )
      isKeepAlive(current.parent.vnode) && injectToKeepAliveRoot(wrappedHook, type, target, current), current = current.parent;
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    !0
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = !1) {
  if (target) {
    const hooks = target[type] || (target[type] = []), wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted)
        return;
      pauseTracking(), setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      return unsetCurrentInstance(), resetTracking(), res;
    });
    return prepend ? hooks.unshift(wrappedHook) : hooks.push(wrappedHook), wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
), onBeforeMount = createHook(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), onMounted = createHook(
  "m"
  /* LifecycleHooks.MOUNTED */
), onBeforeUpdate = createHook(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), onUpdated = createHook(
  "u"
  /* LifecycleHooks.UPDATED */
), onBeforeUnmount = createHook(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), onUnmounted = createHook(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), onServerPrefetch = createHook(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), onRenderTriggered = createHook(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), onRenderTracked = createHook(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null)
    return vnode;
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy, bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    dir && (isFunction(dir) && (dir = {
      mounted: dir,
      updated: dir
    }), dir.deep && traverse(value), bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    }));
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs, oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    oldBindings && (binding.oldValue = oldBindings[i].value);
    let hook = binding.dir[name];
    hook && (pauseTracking(), callWithAsyncErrorHandling(hook, instance, 8, [
      vnode.el,
      binding,
      vnode,
      prevVNode
    ]), resetTracking());
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, !0, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  return isString$1(component) ? resolveAsset(COMPONENTS, component, !1) || component : component || NULL_DYNAMIC_COMPONENT;
}
function resolveAsset(type, name, warnMissing = !0, maybeSelfReference = !1) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name))))
        return Component;
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    return !res && maybeSelfReference ? Component : res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if (isArray(source) || isString$1(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++)
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
  } else if (typeof source == "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++)
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
  } else if (isObject(source))
    if (source[Symbol.iterator])
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  else
    ret = [];
  return cache && (cache[index] = ret), ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE)
    return name !== "default" && (props.name = name), createVNode("slot", props, fallback && fallback());
  let slot = slots[name];
  slot && slot._c && (slot._d = !1), openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props)), rendered = createBlock(
    Fragment,
    {
      key: props.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !noSlotted && rendered.scopeId && (rendered.slotScopeIds = [rendered.scopeId + "-s"]), slot && slot._c && (slot._d = !0), rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => isVNode(child) ? !(child.type === Comment || child.type === Fragment && !ensureValidVNode(child.children)) : !0) ? vnodes : null;
}
const getPublicInstance = (i) => i ? isStatefulComponent(i) ? getExposeProxy(i) || i.proxy : getPublicInstance(i.parent) : null, publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
), hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key), PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0)
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      else {
        if (hasSetupBinding(setupState, key))
          return accessCache[key] = 1, setupState[key];
        if (data !== EMPTY_OBJ && hasOwn(data, key))
          return accessCache[key] = 2, data[key];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
        )
          return accessCache[key] = 3, props[key];
        if (ctx !== EMPTY_OBJ && hasOwn(ctx, key))
          return accessCache[key] = 4, ctx[key];
        shouldCacheAccess && (accessCache[key] = 0);
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter)
      return key === "$attrs" && track(instance, "get", key), publicGetter(instance);
    if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    )
      return cssModule;
    if (ctx !== EMPTY_OBJ && hasOwn(ctx, key))
      return accessCache[key] = 4, ctx[key];
    if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    )
      return globalProperties[key];
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    return hasSetupBinding(setupState, key) ? (setupState[key] = value, !0) : data !== EMPTY_OBJ && hasOwn(data, key) ? (data[key] = value, !0) : hasOwn(instance.props, key) || key[0] === "$" && key.slice(1) in instance ? !1 : (ctx[key] = value, !0);
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    return descriptor.get != null ? target._.accessCache[key] = 0 : hasOwn(descriptor, "value") && this.set(target, key, descriptor.value, null), Reflect.defineProperty(target, key, descriptor);
  }
};
let shouldCacheAccess = !0;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance), publicThis = instance.proxy, ctx = instance.ctx;
  shouldCacheAccess = !1, options.beforeCreate && callHook$1(
    options.beforeCreate,
    instance,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  if (injectOptions && resolveInjections(injectOptions, ctx, null, instance.appContext.config.unwrapInjectedRef), methods)
    for (const key in methods) {
      const methodHandler = methods[key];
      isFunction(methodHandler) && (ctx[key] = methodHandler.bind(publicThis));
    }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    isObject(data) && (instance.data = reactive(data));
  }
  if (shouldCacheAccess = !0, computedOptions)
    for (const key in computedOptions) {
      const opt = computedOptions[key], get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP, set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP, c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: !0,
        configurable: !0,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  if (watchOptions)
    for (const key in watchOptions)
      createWatcher(watchOptions[key], ctx, publicThis, key);
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  created && callHook$1(
    created,
    instance,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function registerLifecycleHook(register2, hook) {
    isArray(hook) ? hook.forEach((_hook) => register2(_hook.bind(publicThis))) : hook && register2(hook.bind(publicThis));
  }
  if (registerLifecycleHook(onBeforeMount, beforeMount), registerLifecycleHook(onMounted, mounted), registerLifecycleHook(onBeforeUpdate, beforeUpdate), registerLifecycleHook(onUpdated, updated), registerLifecycleHook(onActivated, activated), registerLifecycleHook(onDeactivated, deactivated), registerLifecycleHook(onErrorCaptured, errorCaptured), registerLifecycleHook(onRenderTracked, renderTracked), registerLifecycleHook(onRenderTriggered, renderTriggered), registerLifecycleHook(onBeforeUnmount, beforeUnmount), registerLifecycleHook(onUnmounted, unmounted), registerLifecycleHook(onServerPrefetch, serverPrefetch), isArray(expose))
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else
      instance.exposed || (instance.exposed = {});
  render && instance.render === NOOP && (instance.render = render), inheritAttrs != null && (instance.inheritAttrs = inheritAttrs), components && (instance.components = components), directives && (instance.directives = directives);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = !1) {
  isArray(injectOptions) && (injectOptions = normalizeInject(injectOptions));
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    isObject(opt) ? "default" in opt ? injected = inject(
      opt.from || key,
      opt.default,
      !0
      /* treat default function as factory */
    ) : injected = inject(opt.from || key) : injected = inject(opt), isRef(injected) && unwrapRef ? Object.defineProperty(ctx, key, {
      enumerable: !0,
      configurable: !0,
      get: () => injected.value,
      set: (v) => injected.value = v
    }) : ctx[key] = injected;
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    isFunction(handler) && watch(getter, handler);
  } else if (isFunction(raw))
    watch(getter, raw.bind(publicThis));
  else if (isObject(raw))
    if (isArray(raw))
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      isFunction(handler) && watch(getter, handler, raw);
    }
}
function resolveMergedOptions(instance) {
  const base = instance.type, { mixins, extends: extendsOptions } = base, { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext, cached = cache.get(base);
  let resolved;
  return cached ? resolved = cached : !globalMixins.length && !mixins && !extendsOptions ? resolved = base : (resolved = {}, globalMixins.length && globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, !0)), mergeOptions(resolved, base, optionMergeStrategies)), isObject(base) && cache.set(base, resolved), resolved;
}
function mergeOptions(to, from, strats, asMixin = !1) {
  const { mixins, extends: extendsOptions } = from;
  extendsOptions && mergeOptions(to, extendsOptions, strats, !0), mixins && mixins.forEach((m) => mergeOptions(to, m, strats, !0));
  for (const key in from)
    if (!(asMixin && key === "expose")) {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  return from ? to ? function() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  } : from : to;
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++)
      res[raw[i]] = raw[i];
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from)
    merged[key] = mergeAsArray(to[key], from[key]);
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = !1) {
  const props = {}, attrs = {};
  def(attrs, InternalObjectKey, 1), instance.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0])
    key in props || (props[key] = void 0);
  isStateful ? instance.props = isSSR ? props : shallowReactive(props) : instance.type.props ? instance.props = props : instance.props = attrs, instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance, rawCurrentProps = toRaw(props), [options] = instance.propsOptions;
  let hasAttrsChanged = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key))
          continue;
        const value = rawProps[key];
        if (options)
          if (hasOwn(attrs, key))
            value !== attrs[key] && (attrs[key] = value, hasAttrsChanged = !0);
          else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              !1
              /* isAbsent */
            );
          }
        else
          value !== attrs[key] && (attrs[key] = value, hasAttrsChanged = !0);
      }
    }
  } else {
    setFullProps(instance, rawProps, props, attrs) && (hasAttrsChanged = !0);
    let kebabKey;
    for (const key in rawCurrentProps)
      (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) && (options ? rawPrevProps && // for camelCase
      (rawPrevProps[key] !== void 0 || // for kebab-case
      rawPrevProps[kebabKey] !== void 0) && (props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        void 0,
        instance,
        !0
        /* isAbsent */
      )) : delete props[key]);
    if (attrs !== rawCurrentProps)
      for (const key in attrs)
        (!rawProps || !hasOwn(rawProps, key)) && (delete attrs[key], hasAttrsChanged = !0);
  }
  hasAttrsChanged && trigger(instance, "set", "$attrs");
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = !1, rawCastValues;
  if (rawProps)
    for (let key in rawProps) {
      if (isReservedProp(key))
        continue;
      const value = rawProps[key];
      let camelKey;
      options && hasOwn(options, camelKey = camelize(key)) ? !needCastKeys || !needCastKeys.includes(camelKey) ? props[camelKey] = value : (rawCastValues || (rawCastValues = {}))[camelKey] = value : isEmitListener(instance.emitsOptions, key) || (!(key in attrs) || value !== attrs[key]) && (attrs[key] = value, hasAttrsChanged = !0);
    }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props), castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        key in propsDefaults ? value = propsDefaults[key] : (setCurrentInstance(instance), value = propsDefaults[key] = defaultValue.call(null, props), unsetCurrentInstance());
      } else
        value = defaultValue;
    }
    opt[
      0
      /* BooleanFlags.shouldCast */
    ] && (isAbsent && !hasDefault ? value = !1 : opt[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (value === "" || value === hyphenate(key)) && (value = !0));
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = !1) {
  const cache = appContext.propsCache, cached = cache.get(comp);
  if (cached)
    return cached;
  const raw = comp.props, normalized = {}, needCastKeys = [];
  let hasExtends = !1;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = !0;
      const [props, keys] = normalizePropsOptions(raw2, appContext, !0);
      extend(normalized, props), keys && needCastKeys.push(...keys);
    };
    !asMixin && appContext.mixins.length && appContext.mixins.forEach(extendProps), comp.extends && extendProps(comp.extends), comp.mixins && comp.mixins.forEach(extendProps);
  }
  if (!raw && !hasExtends)
    return isObject(comp) && cache.set(comp, EMPTY_ARR), EMPTY_ARR;
  if (isArray(raw))
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      validatePropName(normalizedKey) && (normalized[normalizedKey] = EMPTY_OBJ);
    }
  else if (raw)
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key], prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type), stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* BooleanFlags.shouldCast */
          ] = booleanIndex > -1, prop[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex, (booleanIndex > -1 || hasOwn(prop, "default")) && needCastKeys.push(normalizedKey);
        }
      }
    }
  const res = [normalized, needCastKeys];
  return isObject(comp) && cache.set(comp, res), res;
}
function validatePropName(key) {
  return key[0] !== "$";
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  return isArray(expectedTypes) ? expectedTypes.findIndex((t) => isSameType(t, type)) : isFunction(expectedTypes) && isSameType(expectedTypes, type) ? 0 : -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable", normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)], normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n)
    return rawSlot;
  const normalized = withCtx((...args) => normalizeSlotValue(rawSlot(...args)), ctx);
  return normalized._c = !1, normalized;
}, normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value))
      slots[key] = normalizeSlot(key, value, ctx);
    else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
}, normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
}, initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    type ? (instance.slots = toRaw(children), def(children, "_", type)) : normalizeObjectSlots(children, instance.slots = {});
  } else
    instance.slots = {}, children && normalizeVNodeSlots(instance, children);
  def(instance.slots, InternalObjectKey, 1);
}, updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = !0, deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    type ? optimized && type === 1 ? needDeletionCheck = !1 : (extend(slots, children), !optimized && type === 1 && delete slots._) : (needDeletionCheck = !children.$stable, normalizeObjectSlots(children, slots)), deletionComparisonTarget = children;
  } else
    children && (normalizeVNodeSlots(instance, children), deletionComparisonTarget = { default: 1 });
  if (needDeletionCheck)
    for (const key in slots)
      !isInternalKey(key) && !(key in deletionComparisonTarget) && delete slots[key];
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function(rootComponent, rootProps = null) {
    isFunction(rootComponent) || (rootComponent = Object.assign({}, rootComponent)), rootProps != null && !isObject(rootProps) && (rootProps = null);
    const context = createAppContext(), installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = !1;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        return installedPlugins.has(plugin) || (plugin && isFunction(plugin.install) ? (installedPlugins.add(plugin), plugin.install(app, ...options)) : isFunction(plugin) && (installedPlugins.add(plugin), plugin(app, ...options))), app;
      },
      mixin(mixin) {
        return context.mixins.includes(mixin) || context.mixins.push(mixin), app;
      },
      component(name, component) {
        return component ? (context.components[name] = component, app) : context.components[name];
      },
      directive(name, directive) {
        return directive ? (context.directives[name] = directive, app) : context.directives[name];
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          return vnode.appContext = context, isHydrate && hydrate ? hydrate(vnode, rootContainer) : render(vnode, rootContainer, isSVG), isMounted = !0, app._container = rootContainer, rootContainer.__vue_app__ = app, getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        isMounted && (render(null, app._container), delete app._container.__vue_app__);
      },
      provide(key, value) {
        return context.provides[key] = value, app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = !1) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount)
    return;
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el, value = isUnmount ? null : refValue, { i: owner, r: ref2 } = rawRef, oldRef = oldRawRef && oldRawRef.r, refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs, setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2 && (isString$1(oldRef) ? (refs[oldRef] = null, hasOwn(setupState, oldRef) && (setupState[oldRef] = null)) : isRef(oldRef) && (oldRef.value = null)), isFunction(ref2))
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  else {
    const _isString = isString$1(ref2), _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          isUnmount ? isArray(existing) && remove(existing, refValue) : isArray(existing) ? existing.includes(refValue) || existing.push(refValue) : _isString ? (refs[ref2] = [refValue], hasOwn(setupState, ref2) && (setupState[ref2] = refs[ref2])) : (ref2.value = [refValue], rawRef.k && (refs[rawRef.k] = ref2.value));
        } else
          _isString ? (refs[ref2] = value, hasOwn(setupState, ref2) && (setupState[ref2] = value)) : _isRef && (ref2.value = value, rawRef.k && (refs[rawRef.k] = value));
      };
      value ? (doSet.id = -1, queuePostRenderEffect(doSet, parentSuspense)) : doSet();
    }
  }
}
let hasMismatch = !1;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject", isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals, hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container), flushPostFlushCbs(), container._vnode = vnode;
      return;
    }
    hasMismatch = !1, hydrateNode(container.firstChild, vnode, null, null, null), flushPostFlushCbs(), container._vnode = vnode, hasMismatch && console.error("Hydration completed but contains mismatches.");
  }, hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = !1) => {
    const isFragmentStart = isComment(node) && node.data === "[", onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart), { type, ref: ref2, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node, patchFlag === -2 && (optimized = !1, vnode.dynamicChildren = null);
    let nextNode = null;
    switch (type) {
      case Text:
        domType !== 3 ? vnode.children === "" ? (insert(vnode.el = createText(""), parentNode(node), node), nextNode = node) : nextNode = onMismatch() : (node.data !== vnode.children && (hasMismatch = !0, node.data = vnode.children), nextNode = nextSibling(node));
        break;
      case Comment:
        domType !== 8 || isFragmentStart ? nextNode = onMismatch() : nextNode = nextSibling(node);
        break;
      case Static:
        if (isFragmentStart && (node = nextSibling(node), domType = node.nodeType), domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++)
            needToAdoptContent && (vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data), i === vnode.staticCount - 1 && (vnode.anchor = nextNode), nextNode = nextSibling(nextNode);
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else
          onMismatch();
        break;
      case Fragment:
        isFragmentStart ? nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) : nextNode = onMismatch();
        break;
      default:
        if (shapeFlag & 1)
          domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase() ? nextNode = onMismatch() : nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized), nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node), nextNode && isComment(nextNode) && nextNode.data === "teleport end" && (nextNode = nextSibling(nextNode)), isAsyncWrapper(vnode)) {
            let subTree;
            isFragmentStart ? (subTree = createVNode(Fragment), subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild) : subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div"), subTree.el = node, vnode.component.subTree = subTree;
          }
        } else
          shapeFlag & 64 ? domType !== 8 ? nextNode = onMismatch() : nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren) : shapeFlag & 128 && (nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode));
    }
    return ref2 != null && setRef(ref2, null, parentSuspense, vnode), nextNode;
  }, hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode, forcePatchValue = type === "input" && dirs || type === "option";
    if (forcePatchValue || patchFlag !== -1) {
      if (dirs && invokeDirectiveHook(vnode, null, parentComponent, "created"), props)
        if (forcePatchValue || !optimized || patchFlag & 48)
          for (const key in props)
            (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) && patchProp2(el, key, null, props[key], !1, void 0, parentComponent);
        else
          props.onClick && patchProp2(el, "onClick", null, props.onClick, !1, void 0, parentComponent);
      let vnodeHooks;
      if ((vnodeHooks = props && props.onVnodeBeforeMount) && invokeVNodeHook(vnodeHooks, parentComponent, vnode), dirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeMount"), ((vnodeHooks = props && props.onVnodeMounted) || dirs) && queueEffectWithSuspense(() => {
        vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode), dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense), shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        for (; next; ) {
          hasMismatch = !0;
          const cur = next;
          next = next.nextSibling, remove2(cur);
        }
      } else
        shapeFlag & 8 && el.textContent !== vnode.children && (hasMismatch = !0, el.textContent = vnode.children);
    }
    return el.nextSibling;
  }, hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children, l = children.length;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node)
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      else {
        if (vnode.type === Text && !vnode.children)
          continue;
        hasMismatch = !0, patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }
    return node;
  }, hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    fragmentSlotScopeIds && (slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds);
    const container = parentNode(node), next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    return next && isComment(next) && next.data === "]" ? nextSibling(vnode.anchor = next) : (hasMismatch = !0, insert(vnode.anchor = createComment("]"), container, next), next);
  }, handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (hasMismatch = !0, vnode.el = null, isFragment) {
      const end = locateClosingAsyncAnchor(node);
      for (; ; ) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end)
          remove2(next2);
        else
          break;
      }
    }
    const next = nextSibling(node), container = parentNode(node);
    return remove2(node), patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds), next;
  }, locateClosingAsyncAnchor = (node) => {
    let match = 0;
    for (; node; )
      if (node = nextSibling(node), node && isComment(node) && (node.data === "[" && match++, node.data === "]")) {
        if (match === 0)
          return nextSibling(node);
        match--;
      }
    return node;
  };
  return [hydrate, hydrateNode];
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = !0;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options, patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = !1, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2)
      return;
    n1 && !isSameVNodeType(n1, n2) && (anchor = getNextHostNode(n1), unmount(n1, parentComponent, parentSuspense, !0), n1 = null), n2.patchFlag === -2 && (optimized = !1, n2.dynamicChildren = null);
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        n1 == null && mountStaticNode(n2, container, anchor, isSVG);
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        shapeFlag & 1 ? processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : shapeFlag & 6 ? processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : (shapeFlag & 64 || shapeFlag & 128) && type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
    }
    ref2 != null && parentComponent && setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
  }, processText = (n1, n2, container, anchor) => {
    if (n1 == null)
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    else {
      const el = n2.el = n1.el;
      n2.children !== n1.children && hostSetText(el, n2.children);
    }
  }, processCommentNode = (n1, n2, container, anchor) => {
    n1 == null ? hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor) : n2.el = n1.el;
  }, mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  }, moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    for (; el && el !== anchor; )
      next = hostNextSibling(el), hostInsert(el, container, nextSibling), el = next;
    hostInsert(anchor, container, nextSibling);
  }, removeStaticNode = ({ el, anchor }) => {
    let next;
    for (; el && el !== anchor; )
      next = hostNextSibling(el), hostRemove(el), el = next;
    hostRemove(anchor);
  }, processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg", n1 == null ? mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
  }, mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el, vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    if (el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props), shapeFlag & 8 ? hostSetElementText(el, vnode.children) : shapeFlag & 16 && mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized), dirs && invokeDirectiveHook(vnode, null, parentComponent, "created"), setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent), props) {
      for (const key in props)
        key !== "value" && !isReservedProp(key) && hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
      "value" in props && hostPatchProp(el, "value", null, props.value), (vnodeHook = props.onVnodeBeforeMount) && invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    dirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    needCallTransitionHooks && transition.beforeEnter(el), hostInsert(el, container, anchor), ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) && queuePostRenderEffect(() => {
      vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode), needCallTransitionHooks && transition.enter(el), dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
    }, parentSuspense);
  }, setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId && hostSetScopeId(el, scopeId), slotScopeIds)
      for (let i = 0; i < slotScopeIds.length; i++)
        hostSetScopeId(el, slotScopeIds[i]);
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  }, mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  }, patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ, newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, !1), (vnodeHook = newProps.onVnodeBeforeUpdate) && invokeVNodeHook(vnodeHook, parentComponent, n2, n1), dirs && invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate"), parentComponent && toggleRecurse(parentComponent, !0);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren ? patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds) : optimized || patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, !1), patchFlag > 0) {
      if (patchFlag & 16)
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      else if (patchFlag & 2 && oldProps.class !== newProps.class && hostPatchProp(el, "class", null, newProps.class, isSVG), patchFlag & 4 && hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG), patchFlag & 8) {
        const propsToUpdate = n2.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          const key = propsToUpdate[i], prev = oldProps[key], next = newProps[key];
          (next !== prev || key === "value") && hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      patchFlag & 1 && n1.children !== n2.children && hostSetElementText(el, n2.children);
    } else
      !optimized && dynamicChildren == null && patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    ((vnodeHook = newProps.onVnodeUpdated) || dirs) && queuePostRenderEffect(() => {
      vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1), dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
    }, parentSuspense);
  }, patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i], newVNode = newChildren[i], container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, !0);
    }
  }, patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ)
        for (const key in oldProps)
          !isReservedProp(key) && !(key in newProps) && hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key], prev = oldProps[key];
        next !== prev && key !== "value" && hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
      }
      "value" in newProps && hostPatchProp(el, "value", oldProps.value, newProps.value);
    }
  }, processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText(""), fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    fragmentSlotScopeIds && (slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds), n1 == null ? (hostInsert(fragmentStartAnchor, container, anchor), hostInsert(fragmentEndAnchor, container, anchor), mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)) : patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    n1.dynamicChildren ? (patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (n2.key != null || parentComponent && n2 === parentComponent.subTree) && traverseStaticChildren(
      n1,
      n2,
      !0
      /* shallow */
    )) : patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
  }, processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds, n1 == null ? n2.shapeFlag & 512 ? parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized) : mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) : updateComponent(n1, n2, optimized);
  }, mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode) && (instance.ctx.renderer = internals), setupComponent(instance), instance.asyncDep) {
      if (parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect), !initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  }, updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized))
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else
        instance.next = n2, invalidateJob(instance.update), instance.update();
    else
      n2.el = n1.el, instance.vnode = n2;
  }, setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (instance.isMounted) {
        let { next, bu, u, parent, vnode } = instance, originNext = next, vnodeHook;
        toggleRecurse(instance, !1), next ? (next.el = vnode.el, updateComponentPreRender(instance, next, optimized)) : next = vnode, bu && invokeArrayFns(bu), (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) && invokeVNodeHook(vnodeHook, parent, next, vnode), toggleRecurse(instance, !0);
        const nextTree = renderComponentRoot(instance), prevTree = instance.subTree;
        instance.subTree = nextTree, patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        ), next.el = nextTree.el, originNext === null && updateHOCHostEl(instance, nextTree.el), u && queuePostRenderEffect(u, parentSuspense), (vnodeHook = next.props && next.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
      } else {
        let vnodeHook;
        const { el, props } = initialVNode, { bm, m, parent } = instance, isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        if (toggleRecurse(instance, !1), bm && invokeArrayFns(bm), !isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount) && invokeVNodeHook(vnodeHook, parent, initialVNode), toggleRecurse(instance, !0), el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance), hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          isAsyncWrapperVNode ? initialVNode.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !instance.isUnmounted && hydrateSubTree()
          ) : hydrateSubTree();
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG), initialVNode.el = subTree.el;
        }
        if (m && queuePostRenderEffect(m, parentSuspense), !isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) && instance.a && queuePostRenderEffect(instance.a, parentSuspense), instance.isMounted = !0, initialVNode = container = anchor = null;
      }
    }, effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    ), update = instance.update = () => effect.run();
    update.id = instance.uid, toggleRecurse(instance, !0), update();
  }, updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode, instance.next = null, updateProps(instance, nextVNode.props, prevProps, optimized), updateSlots(instance, nextVNode.children, optimized), pauseTracking(), flushPreFlushCbs(), resetTracking();
  }, patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = !1) => {
    const c1 = n1 && n1.children, prevShapeFlag = n1 ? n1.shapeFlag : 0, c2 = n2.children, { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    shapeFlag & 8 ? (prevShapeFlag & 16 && unmountChildren(c1, parentComponent, parentSuspense), c2 !== c1 && hostSetElementText(container, c2)) : prevShapeFlag & 16 ? shapeFlag & 16 ? patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : unmountChildren(c1, parentComponent, parentSuspense, !0) : (prevShapeFlag & 8 && hostSetElementText(container, ""), shapeFlag & 16 && mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized));
  }, patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR, c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length, newLength = c2.length, commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    oldLength > newLength ? unmountChildren(c1, parentComponent, parentSuspense, !0, !1, commonLength) : mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
  }, patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1, e2 = l2 - 1;
    for (; i <= e1 && i <= e2; ) {
      const n1 = c1[i], n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2))
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      else
        break;
      i++;
    }
    for (; i <= e1 && i <= e2; ) {
      const n1 = c1[e1], n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2))
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      else
        break;
      e1--, e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1, anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        for (; i <= e2; )
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized), i++;
      }
    } else if (i > e2)
      for (; i <= e1; )
        unmount(c1[i], parentComponent, parentSuspense, !0), i++;
    else {
      const s1 = i, s2 = i, keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        nextChild.key != null && keyToNewIndexMap.set(nextChild.key, i);
      }
      let j, patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = !1, maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, !0);
          continue;
        }
        let newIndex;
        if (prevChild.key != null)
          newIndex = keyToNewIndexMap.get(prevChild.key);
        else
          for (j = s2; j <= e2; j++)
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
        newIndex === void 0 ? unmount(prevChild, parentComponent, parentSuspense, !0) : (newIndexToOldIndexMap[newIndex - s2] = i + 1, newIndex >= maxNewIndexSoFar ? maxNewIndexSoFar = newIndex : moved = !0, patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized), patched++);
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      for (j = increasingNewIndexSequence.length - 1, i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i, nextChild = c2[nextIndex], anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        newIndexToOldIndexMap[i] === 0 ? patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : moved && (j < 0 || i !== increasingNewIndexSequence[j] ? move(
          nextChild,
          container,
          anchor,
          2
          /* MoveType.REORDER */
        ) : j--);
      }
    }
  }, move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++)
        move(children[i], container, anchor, moveType);
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    if (moveType !== 2 && shapeFlag & 1 && transition)
      if (moveType === 0)
        transition.beforeEnter(el), hostInsert(el, container, anchor), queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      else {
        const { leave, delayLeave, afterLeave } = transition, remove3 = () => hostInsert(el, container, anchor), performLeave = () => {
          leave(el, () => {
            remove3(), afterLeave && afterLeave();
          });
        };
        delayLeave ? delayLeave(el, remove3, performLeave) : performLeave();
      }
    else
      hostInsert(el, container, anchor);
  }, unmount = (vnode, parentComponent, parentSuspense, doRemove = !1, optimized = !1) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null && setRef(ref2, null, parentSuspense, vnode, !0), shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs, shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount) && invokeVNodeHook(vnodeHook, parentComponent, vnode), shapeFlag & 6)
      unmountComponent(vnode.component, parentSuspense, doRemove);
    else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount"), shapeFlag & 64 ? vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove) : dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64) ? unmountChildren(dynamicChildren, parentComponent, parentSuspense, !1, !0) : (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) && unmountChildren(children, parentComponent, parentSuspense), doRemove && remove2(vnode);
    }
    (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) && queuePostRenderEffect(() => {
      vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode), shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
    }, parentSuspense);
  }, remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el), transition && !transition.persisted && transition.afterLeave && transition.afterLeave();
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition, performLeave = () => leave(el, performRemove);
      delayLeave ? delayLeave(vnode.el, performRemove, performLeave) : performLeave();
    } else
      performRemove();
  }, removeFragment = (cur, end) => {
    let next;
    for (; cur !== end; )
      next = hostNextSibling(cur), hostRemove(cur), cur = next;
    hostRemove(end);
  }, unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    bum && invokeArrayFns(bum), scope.stop(), update && (update.active = !1, unmount(subTree, instance, parentSuspense, doRemove)), um && queuePostRenderEffect(um, parentSuspense), queuePostRenderEffect(() => {
      instance.isUnmounted = !0;
    }, parentSuspense), parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId && (parentSuspense.deps--, parentSuspense.deps === 0 && parentSuspense.resolve());
  }, unmountChildren = (children, parentComponent, parentSuspense, doRemove = !1, optimized = !1, start = 0) => {
    for (let i = start; i < children.length; i++)
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
  }, getNextHostNode = (vnode) => vnode.shapeFlag & 6 ? getNextHostNode(vnode.component.subTree) : vnode.shapeFlag & 128 ? vnode.suspense.next() : hostNextSibling(vnode.anchor || vnode.el), render = (vnode, container, isSVG) => {
    vnode == null ? container._vnode && unmount(container._vnode, null, null, !0) : patch(container._vnode || null, vnode, container, null, null, null, isSVG), flushPreFlushCbs(), flushPostFlushCbs(), container._vnode = vnode;
  }, internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate, hydrateNode;
  return createHydrationFns && ([hydrate, hydrateNode] = createHydrationFns(internals)), {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = !1) {
  const ch1 = n1.children, ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2))
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      c2.shapeFlag & 1 && !c2.dynamicChildren && ((c2.patchFlag <= 0 || c2.patchFlag === 32) && (c2 = ch2[i] = cloneIfMounted(ch2[i]), c2.el = c1.el), shallow || traverseStaticChildren(c1, c2)), c2.type === Text && (c2.el = c1.el);
    }
}
function getSequence(arr) {
  const p2 = arr.slice(), result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      if (j = result[result.length - 1], arr[j] < arrI) {
        p2[i] = j, result.push(i);
        continue;
      }
      for (u = 0, v = result.length - 1; u < v; )
        c = u + v >> 1, arr[result[c]] < arrI ? u = c + 1 : v = c;
      arrI < arr[result[u]] && (u > 0 && (p2[i] = result[u - 1]), result[u] = i);
    }
  }
  for (u = result.length, v = result[u - 1]; u-- > 0; )
    result[u] = v, v = p2[v];
  return result;
}
const isTeleport = (type) => type.__isTeleport, isTeleportDisabled = (props) => props && (props.disabled || props.disabled === ""), isTargetSVG = (target) => typeof SVGElement < "u" && target instanceof SVGElement, resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  return isString$1(targetSelector) ? select ? select(targetSelector) : null : targetSelector;
}, TeleportImpl = {
  __isTeleport: !0,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals, disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText(""), mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor), insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector), targetAnchor = n2.targetAnchor = createText("");
      target && (insert(targetAnchor, target), isSVG = isSVG || isTargetSVG(target));
      const mount = (container2, anchor2) => {
        shapeFlag & 16 && mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      };
      disabled ? mount(container, mainAnchor) : target && mount(target, targetAnchor);
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor, target = n2.target = n1.target, targetAnchor = n2.targetAnchor = n1.targetAnchor, wasDisabled = isTeleportDisabled(n1.props), currentContainer = wasDisabled ? container : target, currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (isSVG = isSVG || isTargetSVG(target), dynamicChildren ? (patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds), traverseStaticChildren(n1, n2, !0)) : optimized || patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, !1), disabled)
        wasDisabled || moveTeleport(
          n2,
          container,
          mainAnchor,
          internals,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
      else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
        const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
        nextTarget && moveTeleport(
          n2,
          nextTarget,
          null,
          internals,
          0
          /* TeleportMoveTypes.TARGET_CHANGE */
        );
      } else
        wasDisabled && moveTeleport(
          n2,
          target,
          targetAnchor,
          internals,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target && hostRemove(targetAnchor), (doRemove || !isTeleportDisabled(props)) && (hostRemove(anchor), shapeFlag & 16))
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(child, parentComponent, parentSuspense, !0, !!child.dynamicChildren);
      }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  moveType === 0 && insert(vnode.targetAnchor, container, parentAnchor);
  const { el, anchor, shapeFlag, children, props } = vnode, isReorder = moveType === 2;
  if (isReorder && insert(el, container, parentAnchor), (!isReorder || isTeleportDisabled(props)) && shapeFlag & 16)
    for (let i = 0; i < children.length; i++)
      move(
        children[i],
        container,
        parentAnchor,
        2
        /* MoveType.REORDER */
      );
  isReorder && insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16)
      if (isTeleportDisabled(vnode.props))
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized), vnode.targetAnchor = targetNode;
      else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        for (; targetAnchor; )
          if (targetAnchor = nextSibling(targetAnchor), targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor, target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    updateCssVars(vnode);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node = vnode.children[0].el;
    for (; node !== vnode.targetAnchor; )
      node.nodeType === 1 && node.setAttribute("data-v-owner", ctx.uid), node = node.nextSibling;
    ctx.ut();
  }
}
const Fragment = Symbol(void 0), Text = Symbol(void 0), Comment = Symbol(void 0), Static = Symbol(void 0), blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = !1) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop(), currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  return vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null, closeBlock(), isBlockTreeEnabled > 0 && currentBlock && currentBlock.push(vnode), vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    !0
    /* isBlock */
  ));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function isVNode(value) {
  return value ? value.__v_isVNode === !0 : !1;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = "__vInternal", normalizeKey = ({ key }) => key ?? null, normalizeRef = ({ ref: ref2, ref_key, ref_for }) => ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = !1, needFullChildrenNormalization = !1) {
  const vnode = {
    __v_isVNode: !0,
    __v_skip: !0,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  return needFullChildrenNormalization ? (normalizeChildren(vnode, children), shapeFlag & 128 && type.normalize(vnode)) : children && (vnode.shapeFlag |= isString$1(children) ? 8 : 16), isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32 && currentBlock.push(vnode), vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = !1) {
  if ((!type || type === NULL_DYNAMIC_COMPONENT) && (type = Comment), isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      !0
      /* mergeRef: true */
    );
    return children && normalizeChildren(cloned, children), isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (cloned.shapeFlag & 6 ? currentBlock[currentBlock.indexOf(type)] = cloned : currentBlock.push(cloned)), cloned.patchFlag |= -2, cloned;
  }
  if (isClassComponent(type) && (type = type.__vccOpts), props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    klass && !isString$1(klass) && (props.class = normalizeClass(klass)), isObject(style) && (isProxy(style) && !isArray(style) && (style = extend({}, style)), props.style = normalizeStyle(style));
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, !0);
}
function guardReactiveProps(props) {
  return props ? isProxy(props) || InternalObjectKey in props ? extend({}, props) : props : null;
}
function cloneVNode(vnode, extraProps, mergeRef = !1) {
  const { props, ref: ref2, patchFlag, children } = vnode, mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  return vnode.staticCount = numberOfNodes, vnode;
}
function createCommentVNode(text = "", asBlock = !1) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  return child == null || typeof child == "boolean" ? createVNode(Comment) : isArray(child) ? createVNode(
    Fragment,
    null,
    // #3666, avoid reference pollution when reusing vnode
    child.slice()
  ) : typeof child == "object" ? cloneIfMounted(child) : createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null)
    children = null;
  else if (isArray(children))
    type = 16;
  else if (typeof children == "object")
    if (shapeFlag & 65) {
      const slot = children.default;
      slot && (slot._c && (slot._d = !1), normalizeChildren(vnode, slot()), slot._c && (slot._d = !0));
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      !slotFlag && !(InternalObjectKey in children) ? children._ctx = currentRenderingInstance : slotFlag === 3 && currentRenderingInstance && (currentRenderingInstance.slots._ === 1 ? children._ = 1 : (children._ = 2, vnode.patchFlag |= 1024));
    }
  else
    isFunction(children) ? (children = { default: children, _ctx: currentRenderingInstance }, type = 32) : (children = String(children), shapeFlag & 64 ? (type = 16, children = [createTextVNode(children)]) : type = 8);
  vnode.children = children, vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge)
      if (key === "class")
        ret.class !== toMerge.class && (ret.class = normalizeClass([ret.class, toMerge.class]));
      else if (key === "style")
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      else if (isOn(key)) {
        const existing = ret[key], incoming = toMerge[key];
        incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming)) && (ret[key] = existing ? [].concat(existing, incoming) : incoming);
      } else
        key !== "" && (ret[key] = toMerge[key]);
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type, appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext, instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return instance.ctx = { _: instance }, instance.root = parent ? parent.root : instance, instance.emit = emit.bind(null, instance), vnode.ce && vnode.ce(instance), instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance, setCurrentInstance = (instance) => {
  currentInstance = instance, instance.scope.on();
}, unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off(), currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = !1;
function setupComponent(instance, isSSR = !1) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode, isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR), initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  return isInSSRComponentSetup = !1, setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null), instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance), pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    if (resetTracking(), unsetCurrentInstance(), isPromise(setupResult)) {
      if (setupResult.then(unsetCurrentInstance, unsetCurrentInstance), isSSR)
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(
            e,
            instance,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      instance.asyncDep = setupResult;
    } else
      handleSetupResult(instance, setupResult, isSSR);
  } else
    finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
  isFunction(setupResult) ? instance.type.__ssrInlineRender ? instance.ssrRender = setupResult : instance.render = setupResult : isObject(setupResult) && (instance.setupState = proxyRefs(setupResult)), finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config, { delimiters, compilerOptions: componentCompilerOptions } = Component, finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  setCurrentInstance(instance), pauseTracking(), applyOptions(instance), resetTracking(), unsetCurrentInstance();
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      return track(instance, "get", "$attrs"), target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  return {
    get attrs() {
      return attrs || (attrs = createAttrsProxy(instance));
    },
    slots: instance.slots,
    emit: instance.emit,
    expose
  };
}
function getExposeProxy(instance) {
  if (instance.exposed)
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target)
          return target[key];
        if (key in publicPropertiesMap)
          return publicPropertiesMap[key](instance);
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
}
function getComponentName(Component, includeInferred = !0) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
function useSlots() {
  return getContext().slots;
}
function getContext() {
  const i = getCurrentInstance();
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  return l === 2 ? isObject(propsOrChildren) && !isArray(propsOrChildren) ? isVNode(propsOrChildren) ? createVNode(type, null, [propsOrChildren]) : createVNode(type, propsOrChildren) : createVNode(type, null, propsOrChildren) : (l > 3 ? children = Array.prototype.slice.call(arguments, 2) : l === 3 && isVNode(children) && (children = [children]), createVNode(type, propsOrChildren, children));
}
const ssrContextKey = Symbol(""), useSSRContext = () => inject(ssrContextKey), version = "3.2.47", svgNS = "http://www.w3.org/2000/svg", doc = typeof document < "u" ? document : null, templateContainer = doc && /* @__PURE__ */ doc.createElement("template"), nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    parent && parent.removeChild(child);
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    return tag === "select" && props && props.multiple != null && el.setAttribute("multiple", props.multiple), el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling))
      for (; parent.insertBefore(start.cloneNode(!0), anchor), !(start === end || !(start = start.nextSibling)); )
        ;
    else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        for (; wrapper.firstChild; )
          template.appendChild(wrapper.firstChild);
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  transitionClasses && (value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ")), value == null ? el.removeAttribute("class") : isSVG ? el.setAttribute("class", value) : el.className = value;
}
function patchStyle(el, prev, next) {
  const style = el.style, isCssString = isString$1(next);
  if (next && !isCssString) {
    if (prev && !isString$1(prev))
      for (const key in prev)
        next[key] == null && setStyle(style, key, "");
    for (const key in next)
      setStyle(style, key, next[key]);
  } else {
    const currentDisplay = style.display;
    isCssString ? prev !== next && (style.cssText = next) : prev && el.removeAttribute("style"), "_vod" in el && (style.display = currentDisplay);
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val))
    val.forEach((v) => setStyle(style, name, v));
  else if (val == null && (val = ""), name.startsWith("--"))
    style.setProperty(name, val);
  else {
    const prefixed = autoPrefix(style, name);
    importantRE.test(val) ? style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important") : style[prefixed] = val;
  }
}
const prefixes = ["Webkit", "Moz", "ms"], prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached)
    return cached;
  let name = camelize(rawName);
  if (name !== "filter" && name in style)
    return prefixCache[rawName] = name;
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style)
      return prefixCache[rawName] = prefixed;
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:"))
    value == null ? el.removeAttributeNS(xlinkNS, key.slice(6, key.length)) : el.setAttributeNS(xlinkNS, key, value);
  else {
    const isBoolean = isSpecialBooleanAttr(key);
    value == null || isBoolean && !includeBooleanAttr(value) ? el.removeAttribute(key) : el.setAttribute(key, isBoolean ? "" : value);
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    prevChildren && unmountChildren(prevChildren, parentComponent, parentSuspense), el[key] = value ?? "";
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && // custom elements may use _value internally
  !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value ?? "";
    (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    el.tagName === "OPTION") && (el.value = newValue), value == null && el.removeAttribute(key);
    return;
  }
  let needRemove = !1;
  if (value === "" || value == null) {
    const type = typeof el[key];
    type === "boolean" ? value = includeBooleanAttr(value) : value == null && type === "string" ? (value = "", needRemove = !0) : type === "number" && (value = 0, needRemove = !0);
  }
  try {
    el[key] = value;
  } catch {
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {}), existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker)
    existingInvoker.value = nextValue;
  else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else
      existingInvoker && (removeEventListener(el, name, existingInvoker, options), invokers[rawName] = void 0);
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    for (; m = name.match(optionsModifierRE); )
      name = name.slice(0, name.length - m[0].length), options[m[0].toLowerCase()] = !0;
  }
  return [name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2)), options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve(), getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts)
      e._vts = Date.now();
    else if (e._vts <= invoker.attached)
      return;
    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  return invoker.value = initialValue, invoker.attached = getNow(), invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      originalStop.call(e), e._stopped = !0;
    }, value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else
    return value;
}
const nativeOnRE = /^on[a-z]/, patchProp = (el, key, prevValue, nextValue, isSVG = !1, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  key === "class" ? patchClass(el, nextValue, isSVG) : key === "style" ? patchStyle(el, prevValue, nextValue) : isOn(key) ? isModelListener(key) || patchEvent(el, key, prevValue, nextValue, parentComponent) : (key[0] === "." ? (key = key.slice(1), !0) : key[0] === "^" ? (key = key.slice(1), !1) : shouldSetAsProp(el, key, nextValue, isSVG)) ? patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren) : (key === "true-value" ? el._trueValue = nextValue : key === "false-value" && (el._falseValue = nextValue), patchAttr(el, key, nextValue, isSVG));
};
function shouldSetAsProp(el, key, value, isSVG) {
  return isSVG ? !!(key === "innerHTML" || key === "textContent" || key in el && nativeOnRE.test(key) && isFunction(value)) : key === "spellcheck" || key === "draggable" || key === "translate" || key === "form" || key === "list" && el.tagName === "INPUT" || key === "type" && el.tagName === "TEXTAREA" || nativeOnRE.test(key) && isString$1(value) ? !1 : key in el;
}
const TRANSITION = "transition", ANIMATION = "animation", Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  isArray(hook) ? hook.forEach((h2) => h2(...args)) : hook && hook(...args);
}, hasExplicitCallback = (hook) => hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : !1;
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps)
    key in DOMTransitionPropsValidators || (baseProps[key] = rawProps[key]);
  if (rawProps.css === !1)
    return baseProps;
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps, durations = normalizeDuration(duration), enterDuration = durations && durations[0], leaveDuration = durations && durations[1], { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps, finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass), removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass), done && done();
  }, finishLeave = (el, done) => {
    el._isLeaving = !1, removeTransitionClass(el, leaveFromClass), removeTransitionClass(el, leaveToClass), removeTransitionClass(el, leaveActiveClass), done && done();
  }, makeEnterHook = (isAppear) => (el, done) => {
    const hook = isAppear ? onAppear : onEnter, resolve2 = () => finishEnter(el, isAppear, done);
    callHook(hook, [el, resolve2]), nextFrame(() => {
      removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass), addTransitionClass(el, isAppear ? appearToClass : enterToClass), hasExplicitCallback(hook) || whenTransitionEnds(el, type, enterDuration, resolve2);
    });
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]), addTransitionClass(el, enterFromClass), addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]), addTransitionClass(el, appearFromClass), addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(!1),
    onAppear: makeEnterHook(!0),
    onLeave(el, done) {
      el._isLeaving = !0;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass), forceReflow(), addTransitionClass(el, leaveActiveClass), nextFrame(() => {
        el._isLeaving && (removeTransitionClass(el, leaveFromClass), addTransitionClass(el, leaveToClass), hasExplicitCallback(onLeave) || whenTransitionEnds(el, type, leaveDuration, resolve2));
      }), callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, !1), callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, !0), callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el), callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null)
    return null;
  if (isObject(duration))
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  return toNumber(val);
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c)), (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  _vtc && (_vtc.delete(cls), _vtc.size || (el._vtc = void 0));
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId, resolveIfNotStale = () => {
    id === el._endId && resolve2();
  };
  if (explicitTimeout)
    return setTimeout(resolveIfNotStale, explicitTimeout);
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type)
    return resolve2();
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd), resolveIfNotStale();
  }, onEnd = (e) => {
    e.target === el && ++ended >= propCount && end();
  };
  setTimeout(() => {
    ended < propCount && end();
  }, timeout + 1), el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el), getStyleProperties = (key) => (styles[key] || "").split(", "), transitionDelays = getStyleProperties(`${TRANSITION}Delay`), transitionDurations = getStyleProperties(`${TRANSITION}Duration`), transitionTimeout = getTimeout(transitionDelays, transitionDurations), animationDelays = getStyleProperties(`${ANIMATION}Delay`), animationDurations = getStyleProperties(`${ANIMATION}Duration`), animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null, timeout = 0, propCount = 0;
  expectedType === TRANSITION ? transitionTimeout > 0 && (type = TRANSITION, timeout = transitionTimeout, propCount = transitionDurations.length) : expectedType === ANIMATION ? animationTimeout > 0 && (type = ANIMATION, timeout = animationTimeout, propCount = animationDurations.length) : (timeout = Math.max(transitionTimeout, animationTimeout), type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null, propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0);
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  for (; delays.length < durations.length; )
    delays = delays.concat(delays);
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || !1;
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = !0;
}
function onCompositionEnd(e) {
  const target = e.target;
  target.composing && (target.composing = !1, target.dispatchEvent(new Event("input")));
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing)
        return;
      let domValue = el.value;
      trim && (domValue = domValue.trim()), castToNumber && (domValue = looseToNumber(domValue)), el._assign(domValue);
    }), trim && addEventListener(el, "change", () => {
      el.value = el.value.trim();
    }), lazy || (addEventListener(el, "compositionstart", onCompositionStart), addEventListener(el, "compositionend", onCompositionEnd), addEventListener(el, "change", onCompositionEnd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value ?? "";
  },
  beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
    if (el._assign = getModelAssigner(vnode), el.composing || document.activeElement === el && el.type !== "range" && (lazy || trim && el.value.trim() === value || (number || el.type === "number") && looseToNumber(el.value) === value))
      return;
    const newValue = value ?? "";
    el.value !== newValue && (el.value = newValue);
  }
}, systemModifiers = ["ctrl", "shift", "alt", "meta"], modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
}, withModifiers = (fn, modifiers) => (event, ...args) => {
  for (let i = 0; i < modifiers.length; i++) {
    const guard = modifierGuards[modifiers[i]];
    if (guard && guard(event, modifiers))
      return;
  }
  return fn(event, ...args);
}, vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display, transition && value ? transition.beforeEnter(el) : setDisplay(el, value);
  },
  mounted(el, { value }, { transition }) {
    transition && value && transition.enter(el);
  },
  updated(el, { value, oldValue }, { transition }) {
    !value != !oldValue && (transition ? value ? (transition.beforeEnter(el), setDisplay(el, !0), transition.enter(el)) : transition.leave(el, () => {
      setDisplay(el, !1);
    }) : setDisplay(el, value));
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer, enabledHydration = !1;
function ensureHydrationRenderer() {
  return renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions), enabledHydration = !0, renderer;
}
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args), { mount } = app;
  return app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container)
      return mount(container, !0, container instanceof SVGElement);
  }, app;
};
function normalizeContainer(container) {
  return isString$1(container) ? document.querySelector(container) : container;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props)
    target[key] = val;
  return target;
}, scriptRel = "modulepreload", assetsURL = function(dep) {
  return "/" + dep;
}, seen = {}, __vitePreload = function(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0)
    return baseModule();
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    if (dep = assetsURL(dep), dep in seen)
      return;
    seen[dep] = !0;
    const isCss = dep.endsWith(".css"), cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (!!importerUrl)
      for (let i = links.length - 1; i >= 0; i--) {
        const link3 = links[i];
        if (link3.href === dep && (!isCss || link3.rel === "stylesheet"))
          return;
      }
    else if (document.querySelector(`link[href="${dep}"]${cssSelector}`))
      return;
    const link2 = document.createElement("link");
    if (link2.rel = isCss ? "stylesheet" : scriptRel, isCss || (link2.as = "script", link2.crossOrigin = ""), link2.href = dep, document.head.appendChild(link2), isCss)
      return new Promise((res, rej) => {
        link2.addEventListener("load", res), link2.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
  })).then(() => baseModule());
};
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: null,
    type: null
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["VPBadge", __props.type ?? "tip"])
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(__props.text), 1)
      ], !0)
    ], 2));
  }
});
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-350d3852"]]), siteData = JSON.parse('{"lang":"en-US","dir":"ltr","title":"httpYac","description":"Quickly and easily send REST, SOAP, GraphQL and gRPC requests","base":"/","head":[],"appearance":true,"themeConfig":{"logo":"/favicon.png","nav":[{"text":"Guide","items":[{"text":"Installation","items":[{"text":"CLI","link":"/guide/installation_cli"},{"text":"VSCode","link":"/guide/installation_vscode"},{"text":"VSCode Notebook","link":"/guide/installation_httpbook"},{"text":"Docker","link":"/guide/installation_docker"}]},{"text":"Language","items":[{"text":"Request","link":"/guide/request"},{"text":"MetaData","link":"/guide/metaData"},{"text":"Variables","link":"/guide/variables"},{"text":"Environments","link":"/guide/environments"},{"text":"Scripting","link":"/guide/scripting"},{"text":"Assert","link":"/guide/assert"},{"text":"Comment","link":"/guide/comment"},{"text":"Hooks","link":"/guide/hooks"},{"text":"Response","link":"/guide/response"},{"text":"Injected Languages","link":"/guide/injected_languages"}]}]},{"text":"Support","items":[{"text":"Examples","link":"/guide/examples"},{"text":"Troubleshooting","link":"/guide/troubleshooting"}]},{"text":"Configuration","link":"/config/"},{"text":"Plugins","items":[{"text":"Development Guide","link":"/plugins/"},{"text":"API Reference","link":"/plugins/plugin-api.md"}]},{"text":"Source","items":[{"text":"httpyac CLI","link":"https://github.com/anweber/httpyac"},{"text":"vscode-httpyac","link":"https://github.com/anweber/vscode-httpyac"},{"text":"httpbook","link":"https://github.com/anweber/httpbook"},{"text":"httpyac.github.io","link":"https://github.com/httpyac/httpyac.github.io"}]}],"sidebar":[{"text":"Guide","items":[{"text":"Installation","items":[{"text":"CLI","link":"/guide/installation_cli"},{"text":"VSCode","link":"/guide/installation_vscode"},{"text":"VSCode Notebook","link":"/guide/installation_httpbook"},{"text":"Docker","link":"/guide/installation_docker"}]},{"text":"Language","items":[{"text":"Request","link":"/guide/request"},{"text":"MetaData","link":"/guide/metaData"},{"text":"Variables","link":"/guide/variables"},{"text":"Environments","link":"/guide/environments"},{"text":"Scripting","link":"/guide/scripting"},{"text":"Comment","link":"/guide/comment"},{"text":"Hooks","link":"/guide/hooks"},{"text":"Response","link":"/guide/response"},{"text":"Injected Languages","link":"/guide/injected_languages"}]}]},{"text":"Support","items":[{"text":"Examples","link":"/guide/examples"},{"text":"Troubleshooting","link":"/guide/troubleshooting"}]},{"text":"Plugins","items":[{"text":"Development Guide","link":"/plugins/"},{"text":"API reference","link":"/plugins/plugin-api.md"}]}],"footer":{"copyright":"MIT Licensed | Copyright © 2020-present <a href=\\"https://github.com/anweber\\">Andreas Weber</a>"}},"locales":{},"scrollOffset":90,"cleanUrls":false}'), EXTERNAL_URL_RE = /^[a-z]+:/i, PATHNAME_PROTOCOL_RE = /^pathname:\/\//, APPEARANCE_KEY = "vitepress-theme-appearance", HASH_RE = /#.*$/, EXT_RE = /(index)?\.(md|html)$/, inBrowser = typeof document < "u", notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: !1, layout: "page" },
  lastUpdated: 0
};
function isActive(currentPath, matchPath, asRegex = !1) {
  if (matchPath === void 0)
    return !1;
  if (currentPath = normalize(`/${currentPath}`), asRegex)
    return new RegExp(matchPath).test(currentPath);
  if (normalize(matchPath) !== currentPath)
    return !1;
  const hashMatch = matchPath.match(HASH_RE);
  return hashMatch ? (inBrowser ? location.hash : "") === hashMatch[0] : !0;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a2, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, !0)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a2 = siteData2.locales[localeIndex]) == null ? void 0 : _a2.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title, template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template == "string" && template.includes(":title"))
    return template.replace(/:title/g, title);
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  return template === !1 ? "" : template === !0 || template === void 0 ? ` | ${siteTitle}` : siteTitle === template ? "" : ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return !1;
  const keyAttr = Object.entries(tagAttrs)[0];
  return keyAttr == null ? !1 : head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g, DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name), driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol(), siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark: ref(!1)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data)
    throw new Error("vitepress data not properly injected in app");
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  if (pagePath = decodeURIComponent(pagePath), pagePath = pagePath.replace(/\/$/, "/index"), inBrowser) {
    const base = "/";
    pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
    let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
    pageHash || (pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md", pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()]), pagePath = `${base}assets/${pagePath}.${pageHash}.js`;
  } else
    pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
  return pagePath;
}
const RouterSymbol = Symbol(), fakeHost = "http://a.com", getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute()), router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a2, _b;
    await ((_a2 = router.onBeforeRouteChange) == null ? void 0 : _a2.call(router, href));
    const url = new URL(href, fakeHost);
    siteDataRef.value.cleanUrls || !url.pathname.endsWith("/") && !url.pathname.endsWith(".html") && (url.pathname += ".html", href = url.pathname + url.search + url.hash), inBrowser && href !== location.href && (history.replaceState({ scrollPosition: window.scrollY }, document.title), history.pushState(null, "", href)), await loadPage(href), await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = !1) {
    const targetLoc = new URL(href, fakeHost), pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp)
          throw new Error(`Invalid route component: ${comp}`);
        route.path = inBrowser ? pendingPath : withBase(pendingPath), route.component = markRaw(comp), route.data = markRaw(__pageData), inBrowser && nextTick(() => {
          let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
          if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/") && (actualPathname += ".html"), actualPathname !== targetLoc.pathname && (targetLoc.pathname = actualPathname, href = actualPathname + targetLoc.search + targetLoc.hash, history.replaceState(null, "", href)), targetLoc.hash && !scrollPosition) {
            let target = null;
            try {
              target = document.querySelector(decodeURIComponent(targetLoc.hash));
            } catch (e) {
              console.warn(e);
            }
            if (target) {
              scrollTo(target, targetLoc.hash);
              return;
            }
          }
          window.scrollTo(0, scrollPosition);
        });
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href) && console.error(err), !isRetry)
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json(), await loadPage(href, scrollPosition, !0);
          return;
        } catch {
        }
      latestPendingPath === pendingPath && (latestPendingPath = null, route.path = inBrowser ? pendingPath : withBase(pendingPath), route.component = fallbackComponent ? markRaw(fallbackComponent) : null, route.data = notFoundPageData);
    }
  }
  return inBrowser && (window.addEventListener("click", (e) => {
    if (e.target.closest("button"))
      return;
    const link2 = e.target.closest("a");
    if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
      const { target } = link2, { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI), currentUrl = window.location, extMatch = pathname.match(/\.\w+$/);
      !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== "_blank" && origin === currentUrl.origin && // don't intercept if non-html extension is present
      !(extMatch && extMatch[0] !== ".html") && (e.preventDefault(), pathname === currentUrl.pathname && search === currentUrl.search ? hash && hash !== currentUrl.hash && (history.pushState(null, "", hash), window.dispatchEvent(new Event("hashchange")), scrollTo(link2, hash, link2.classList.contains("header-anchor"))) : go(href));
    }
  }, { capture: !0 }), window.addEventListener("popstate", (e) => {
    loadPage(location.href, e.state && e.state.scrollPosition || 0);
  }), window.addEventListener("hashchange", (e) => {
    e.preventDefault();
  })), router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router)
    throw new Error("useRouter() is called without provider.");
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = !1) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    typeof offset == "string" && (offset = document.querySelector(offset).getBoundingClientRect().bottom + 24);
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10), targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    !smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight ? window.scrollTo(0, targetTop) : window.scrollTo({
      left: 0,
      top: targetTop,
      behavior: "smooth"
    });
  }
}
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    onContentUpdated: Function
  },
  setup(props) {
    const route = useRoute();
    return onUpdated(() => {
      var _a2;
      (_a2 = props.onContentUpdated) == null || _a2.call(props);
    }), () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
}), useData = useData$1;
var _a;
const isClient = typeof window < "u", isString = (val) => typeof val == "string", noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) != null && _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r == "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  return getCurrentScope() ? (onScopeDispose(fn), !0) : !1;
}
function resolveRef(r) {
  return typeof r == "function" ? computed(r) : ref(r);
}
function tryOnMounted(fn, sync = !0) {
  getCurrentInstance() ? onMounted(fn) : sync ? fn() : nextTick(fn);
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target, events, listeners2, options;
  if (isString(args[0]) || Array.isArray(args[0]) ? ([events, listeners2, options] = args, target = defaultWindow) : [target, events, listeners2, options] = args, !target)
    return noop;
  Array.isArray(events) || (events = [events]), Array.isArray(listeners2) || (listeners2 = [listeners2]);
  const cleanups = [], cleanup = () => {
    cleanups.forEach((fn) => fn()), cleanups.length = 0;
  }, register2 = (el, event, listener, options2) => (el.addEventListener(event, listener, options2), () => el.removeEventListener(event, listener, options2)), stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup(), el && cleanups.push(...events.flatMap((event) => listeners2.map((listener) => register2(el, event, listener, options2))));
  }, { immediate: !0, flush: "post" }), stop = () => {
    stopWatch(), cleanup();
  };
  return tryOnScopeDispose(stop), stop;
}
function useSupported(callback, sync = !1) {
  const isSupported = ref(), update = () => isSupported.value = Boolean(callback());
  return update(), tryOnMounted(update, sync), isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options, isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia == "function");
  let mediaQuery;
  const matches = ref(!1), cleanup = () => {
    mediaQuery && ("removeEventListener" in mediaQuery ? mediaQuery.removeEventListener("change", update) : mediaQuery.removeListener(update));
  }, update = () => {
    isSupported.value && (cleanup(), mediaQuery = window2.matchMedia(resolveRef(query).value), matches.value = mediaQuery.matches, "addEventListener" in mediaQuery ? mediaQuery.addEventListener("change", update) : mediaQuery.addListener(update));
  };
  return watchEffect(update), tryOnScopeDispose(() => cleanup()), matches;
}
const _global = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2.UP = "UP", SwipeDirection2.RIGHT = "RIGHT", SwipeDirection2.DOWN = "DOWN", SwipeDirection2.LEFT = "LEFT", SwipeDirection2.NONE = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2)
    return {
      x: ref(0),
      y: ref(0)
    };
  const x = ref(window2.scrollX), y = ref(window2.scrollY);
  return useEventListener(window2, "scroll", () => {
    x.value = window2.scrollX, y.value = window2.scrollY;
  }, {
    capture: !1,
    passive: !0
  }), { x, y };
}
function throttleAndDebounce(fn, delay) {
  let timeoutId, called = !1;
  return () => {
    timeoutId && clearTimeout(timeoutId), called ? timeoutId = setTimeout(fn, delay) : (fn(), called = !0, setTimeout(() => {
      called = !1;
    }, delay));
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  if (isExternal(url))
    return url.replace(PATHNAME_PROTOCOL_RE, "");
  const { site } = useData(), { pathname, search, hash } = new URL(url, "http://example.com"), normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar))
    return sidebar;
  if (sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(sidebar).sort((a, b) => b.split("/").length - a.split("/").length).find((dir2) => path.startsWith(ensureStartingSlash(dir2)));
  return dir ? sidebar[dir] : [];
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
      item.text && item.link && links.push({ text: item.text, link: item.link }), item.items && recursivelyExtractLinks(item.items);
  }
  return recursivelyExtractLinks(sidebar), links;
}
function hasActiveLink(path, items) {
  return Array.isArray(items) ? items.some((item) => hasActiveLink(path, item)) : isActive(path, items.link) ? !0 : items.items ? hasActiveLink(path, items.items) : !1;
}
function useSidebar() {
  const route = useRoute(), { theme: theme2, frontmatter } = useData(), is960 = useMediaQuery("(min-width: 960px)"), isOpen = ref(!1), sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar, relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  }), hasSidebar = computed(() => frontmatter.value.sidebar !== !1 && sidebar.value.length > 0 && frontmatter.value.layout !== "home"), hasAside = computed(() => frontmatter.value.layout === "home" ? !1 : frontmatter.value.aside != null ? !!frontmatter.value.aside : theme2.value.aside !== !1), isSidebarEnabled = computed(() => hasSidebar.value && is960.value), sidebarGroups = computed(() => hasSidebar.value ? getSidebarGroups(sidebar.value) : []);
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
  const { page } = useData(), collapsed = ref(!1), collapsible = computed(() => item.value.collapsed != null), isLink = computed(() => !!item.value.link), isActiveLink = computed(() => isActive(page.value.relativePath, item.value.link)), hasActiveLink$1 = computed(() => isActiveLink.value ? !0 : item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : !1), hasChildren = computed(() => !!(item.value.items && item.value.items.length));
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  }), watchEffect(() => {
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
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const route = useRoute(), backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    function focusOnTargetAnchor({ target }) {
      const el = document.querySelector(
        target.hash
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
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-151f2593"]]), _hoisted_1$Q = {
  key: 0,
  class: "VPBackdrop"
}, _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$Q)) : createCommentVNode("", !0)
      ]),
      _: 1
    }));
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-c79a1216"]]);
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
function useLangs({ removeCurrent = !0, correspondingLink = !1 } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData(), currentLang = computed(() => {
    var _a2, _b;
    return {
      label: (_a2 = site.value.locales[localeIndex.value]) == null ? void 0 : _a2.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  return { localeLinks: computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== !1 && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  })), currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)?index.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _hoisted_1$P = ["src", "alt"], __default__ = {
  inheritAttrs: !1
}, _sfc_main$$ = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  props: {
    image: null,
    alt: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", !0);
      return __props.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof __props.image == "string" || "src" in __props.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "VPImage"
        }, typeof __props.image == "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof __props.image == "string" ? __props.image : __props.image.src),
          alt: __props.alt ?? (typeof __props.image == "string" ? "" : __props.image.alt || "")
        }), null, 16, _hoisted_1$P)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", !0);
    };
  }
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-6db2186b"]]), _hoisted_1$O = ["href"], _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { hasSidebar } = useSidebar(), { currentLang } = useLangs();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
    }, [
      createBaseVNode("a", {
        class: "title",
        href: unref(normalizeLink$1)(unref(currentLang).link)
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
      ], 8, _hoisted_1$O)
    ], 2));
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-6d2fb2d9"]]), _imports_0 = "/assets/flex-logo.2489261b.svg";
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
  for (let h2, j, k = 0; k < d; k++)
    h2 = c[k], j = a[h2], j ? (e[g++] = regex(b ? "(?!\\b)" + h2 + "(\\b|_)" : h2), e[g++] = j) : f += (f ? "|" : "") + h2;
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
  let f, g, h2 = [], i = 0;
  d && (d = []);
  for (let j = e - 1; 0 <= j; j--) {
    const k = a[j], l = k.length, m = create_object();
    let n = !f;
    for (let a2 = 0; a2 < l; a2++) {
      const l2 = k[a2], o = l2.length;
      if (o)
        for (let a3, k2, p2 = 0; p2 < o; p2++)
          if (k2 = l2[p2], f) {
            if (f[k2]) {
              if (!j) {
                if (c)
                  c--;
                else if (h2[i++] = k2, i === b)
                  return h2;
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
          else if (h2[i++] = d2, i === b)
            return h2;
          f[d2] = 1;
        }
    }
  return h2;
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
  let f, g, h2 = a.context || {};
  this.encode = a.encode || c && c.encode || encode, this.register = b || create_object(), this.resolution = f = a.resolution || 9, this.tokenize = e = c && c.tokenize || a.tokenize || "strict", this.depth = e === "strict" && h2.depth, this.bidirectional = parse_option(h2.bidirectional, !0), this.optimize = g = parse_option(a.optimize, !0), this.fastupdate = parse_option(a.fastupdate, !0), this.minlength = a.minlength || 1, this.boost = a.boost, this.map = g ? create_object_array(f) : create_object(), this.resolution_ctx = f = h2.resolution || 1, this.ctx = g ? create_object_array(f) : create_object(), this.rtl = c && c.rtl || a.rtl, this.matcher = (e = a.matcher || d && d.matcher) && init_stemmer_or_matcher(e, !1), this.stemmer = (e = a.stemmer || d && d.stemmer) && init_stemmer_or_matcher(e, !0), this.filter = (e = a.filter || d && d.filter) && init_filter(e), this.cache = (e = a.cache) && new CacheClass(e);
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
      const d2 = create_object(), f = create_object(), g = this.depth, h2 = this.resolution;
      for (let j = 0; j < e; j++) {
        let i = b[this.rtl ? e - 1 - j : j], k = i.length;
        if (i && k >= this.minlength && (g || !f[i])) {
          let l = get_score(h2, e, j), m = "";
          switch (this.tokenize) {
            case "full":
              if (3 < k) {
                for (let b2 = 0; b2 < k; b2++)
                  for (let d3 = k; d3 > b2; d3--)
                    if (d3 - b2 >= this.minlength) {
                      const g2 = get_score(h2, e, j, k, b2);
                      m = i.substring(b2, d3), this.push_index(f, m, g2, a, c);
                    }
                break;
              }
            case "reverse":
              if (2 < k) {
                for (let b2 = k - 1; 0 < b2; b2--)
                  if (m = i[b2] + m, m.length >= this.minlength) {
                    const d3 = get_score(h2, e, j, k, b2);
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
              if (this.boost && (l = Math.min(0 | l / this.boost(b, i, j), h2 - 1)), this.push_index(f, i, l, a, c), g && 1 < e && j < e - 1) {
                const f2 = create_object(), h3 = this.resolution_ctx, k2 = i, l2 = Math.min(g + 1, e - j);
                f2[k2] = 1;
                for (let g2 = 1; g2 < l2; g2++)
                  if (i = b[this.rtl ? e - 1 - j - g2 : j + g2], i && i.length >= this.minlength && !f2[i]) {
                    f2[i] = 1;
                    const b2 = get_score(h3 + (e / 2 > h3 ? 0 : 1), e, j, l2 - 1, g2 - 1), m2 = this.bidirectional && i > k2;
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
  let d, e, f, g = [], h2 = 0;
  if (c && (b = c.limit, h2 = c.offset || 0, e = c.context, f = c.suggest), a && (a = this.encode(a), d = a.length, 1 < d)) {
    const b2 = create_object(), c2 = [];
    for (let e2, h3 = 0, i2 = 0; h3 < d; h3++)
      if (e2 = a[h3], e2 && e2.length >= this.minlength && !b2[e2]) {
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
    if (l = a[k], j ? (e2 = this.add_result(g, f, b, h2, d === 2, l, i), (!f || e2 !== !1 || !g.length) && (i = l)) : e2 = this.add_result(g, f, b, h2, d === 1, l), e2)
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
        return single_result(g[0], b, h2);
    }
  }
  return intersect(g, b, h2, f);
}, Index.prototype.add_result = function(a, b, c, d, e, f, g) {
  let h2 = [], i = g ? this.ctx : this.map;
  if (this.optimize || (i = get_array(i, f, g, this.bidirectional)), i) {
    let b2 = 0;
    const j = Math.min(i.length, g ? this.resolution_ctx : this.resolution);
    for (let a2, k, l = 0, m = 0; l < j && (a2 = i[l], !(a2 && (this.optimize && (a2 = get_array(a2, f, g, this.bidirectional)), d && a2 && e && (k = a2.length, k <= d ? (d -= k, a2 = null) : (a2 = a2.slice(d), d = 0)), a2 && (h2[b2++] = a2, e && (m += a2.length, m >= c))))); l++)
      ;
    if (b2)
      return e ? single_result(h2, c, 0) : void (a[a.length] = h2);
  }
  return !b && h2;
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
      for (let g, h2 = 0; h2 < e; h2++)
        g = a[h2], g && (f = remove_index(g, b, c, d, e), !d && !f && delete a[h2]);
    }
  else
    for (let g in a)
      f = remove_index(a[g], b, c, d, e), f || delete a[g];
  return f;
}
Index.prototype.searchCache = searchCache, Index.prototype.export = exportIndex, Index.prototype.import = importIndex, apply_async(Index.prototype);
const _hoisted_1$N = { class: "VPNavBarSearch" }, _hoisted_2$A = { class: "DocSearch-Form" }, _hoisted_3$r = /* @__PURE__ */ createBaseVNode("label", {
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
], -1), _hoisted_4$e = ["placeholder"], _hoisted_5$9 = { class: "search-list" }, _hoisted_6$7 = { class: "search-group" }, _hoisted_7$5 = ["href"], _hoisted_8$4 = { class: "search-item" }, _hoisted_9$2 = { class: "search-item-icon" }, _hoisted_10$2 = { style: { width: "100%" } }, _hoisted_11$2 = ["innerHTML"], _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", { class: "search-item-icon" }, "↪", -1), _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  class: "flex-logo",
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
], -1), _hoisted_17 = { class: "DocSearch-Button-Placeholder" }, _hoisted_18 = { class: "DocSearch-Button-Keys" }, _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Key" }, "K", -1), _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "Search",
  setup(__props) {
    const VPData = useData$1(), locale = VPData.localeIndex || VPData.localePath, metaKey = ref(), open = ref(!1), searchTerm = ref(), origin = ref(""), input = ref(), INDEX_DATA = ref(), PREVIEW_LOOKUP = ref(), Options = ref(), searchIndex = ref(), buttonLabel = ref("Search"), placeholder = ref("Search docs"), result = computed(() => {
      if (searchTerm.value) {
        for (var searchResults = searchIndex.value.search(searchTerm.value, { enrich: !0 }), search = [], i = 0; i < searchResults.length; i++) {
          var id = searchResults[i], item = PREVIEW_LOOKUP.value[id], title = item.t, preview = item.p, link2 = item.l, anchor = item.a;
          link2 = link2.split(" ").join("-"), search.push({ id: i, link: link2, title, preview, anchor });
        }
        return search;
      }
    }), GroupBy = (array, func) => !array || !array.length ? [] : array.reduce((acc, value) => (acc[func(value)] || (acc[func(value)] = []), acc[func(value)].push(value), acc), {}), openSearch = () => {
      setTimeout(() => {
        input.value && input.value.focus();
      }, 100), cleanSearch(), open.value = !0;
    };
    onMounted(async () => {
      var _a2, _b;
      const data = await __vitePreload(() => import("./chunks/virtual_search-data.4ca4e42e.js"), []);
      INDEX_DATA.value = data.default.INDEX_DATA, PREVIEW_LOOKUP.value = data.default.PREVIEW_LOOKUP, Options.value = data.default.Options, origin.value = window.location.origin + withBase(locale.value === "root" ? "/" : locale.value), buttonLabel.value = ((_a2 = Options.value) == null ? void 0 : _a2.buttonLabel) || buttonLabel.value, placeholder.value = ((_b = Options.value) == null ? void 0 : _b.placeholder) || placeholder.value;
      var document2 = new Index(Options.value);
      document2.import("reg", INDEX_DATA.value.reg), document2.import("cfg", INDEX_DATA.value.cfg), document2.import("map", INDEX_DATA.value.map), document2.import("ctx", INDEX_DATA.value.ctx), searchIndex.value = document2, metaKey.value.innerHTML = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl";
      const handleSearchHotKey = (e) => {
        e.key === "k" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), openSearch());
      };
      window.addEventListener("keydown", handleSearchHotKey);
    });
    function cleanSearch() {
      open.value = !1, searchTerm.value = "";
    }
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", _hoisted_1$N, [
        createVNode(_component_ClientOnly, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(Teleport, { to: "body" }, [
              withDirectives(createBaseVNode("div", {
                class: "modal-back",
                onClick: _cache[2] || (_cache[2] = ($event) => open.value = !1)
              }, [
                createBaseVNode("div", {
                  class: "modal",
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createBaseVNode("form", _hoisted_2$A, [
                    _hoisted_3$r,
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
                    }, null, 8, _hoisted_4$e), [
                      [vModelText, searchTerm.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_5$9, [
                    (openBlock(!0), createElementBlock(Fragment, null, renderList(GroupBy(
                      unref(result),
                      (x) => x.link.split("/").slice(0, -1).join("-")
                    ), (group, groupKey) => (openBlock(), createElementBlock("div", { key: groupKey }, [
                      createBaseVNode("span", _hoisted_6$7, toDisplayString(groupKey ? groupKey.toString()[0].toUpperCase() + groupKey.toString().slice(1) : "Home"), 1),
                      (openBlock(!0), createElementBlock(Fragment, null, renderList(group, (item) => (openBlock(), createElementBlock("a", {
                        href: origin.value + item.link,
                        key: item.id,
                        onClick: cleanSearch
                      }, [
                        createBaseVNode("div", _hoisted_8$4, [
                          createBaseVNode("span", _hoisted_9$2, toDisplayString(item.link.includes("#") ? "#" : "▤"), 1),
                          createBaseVNode("div", _hoisted_10$2, [
                            createBaseVNode("h3", null, toDisplayString(item.title), 1),
                            createBaseVNode("p", null, [
                              createBaseVNode("div", {
                                innerHTML: item.preview
                              }, null, 8, _hoisted_11$2)
                            ])
                          ]),
                          _hoisted_12$1
                        ])
                      ], 8, _hoisted_7$5))), 128))
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
const _sfc_main$Y = {}, _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
}, _hoisted_2$z = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1), _hoisted_3$q = /* @__PURE__ */ createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1), _hoisted_4$d = [
  _hoisted_2$z,
  _hoisted_3$q
];
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_4$d);
}
const VPIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$c]]), _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: null,
    href: null,
    noIcon: { type: Boolean },
    target: null,
    rel: null
  },
  setup(__props) {
    const props = __props, tag = computed(() => props.tag ?? props.href ? "a" : "span"), isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _cache) => (openBlock(), createBlock(resolveDynamicComponent(unref(tag)), {
      class: normalizeClass(["VPLink", { link: __props.href }]),
      href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
      target: __props.target || (unref(isExternal2) ? "_blank" : void 0),
      rel: __props.rel || (unref(isExternal2) ? "noreferrer" : void 0)
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, !0),
        unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(VPIconExternalLink, {
          key: 0,
          class: "icon"
        })) : createCommentVNode("", !0)
      ]),
      _: 3
    }, 8, ["class", "href", "target", "rel"]));
  }
});
const VPLink = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-a8b5c975"]]), _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createBlock(VPLink, {
      class: normalizeClass({
        VPNavBarMenuLink: !0,
        active: unref(isActive)(
          unref(page).relativePath,
          __props.item.activeMatch || __props.item.link,
          !!__props.item.activeMatch
        )
      }),
      href: __props.item.link,
      target: __props.item.target,
      rel: __props.item.rel
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(__props.item.text), 1)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
});
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-f2ec7ecf"]]), focusedElement = ref();
let active = !1, listeners = 0;
function useFlyout(options) {
  const focus = ref(!1);
  if (inBrowser) {
    !active && activateFocusTracking(), listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b, _c;
      el === options.el.value || (_a2 = options.el.value) != null && _a2.contains(el) ? (focus.value = !0, (_b = options.onFocus) == null || _b.call(options)) : (focus.value = !1, (_c = options.onBlur) == null || _c.call(options));
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
const _sfc_main$V = {}, _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$y = /* @__PURE__ */ createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1), _hoisted_3$p = [
  _hoisted_2$y
];
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$p);
}
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$b]]), _sfc_main$U = {}, _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$x = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}, null, -1), _hoisted_3$o = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "19",
  cy: "12",
  r: "2"
}, null, -1), _hoisted_4$c = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "5",
  cy: "12",
  r: "2"
}, null, -1), _hoisted_5$8 = [
  _hoisted_2$x,
  _hoisted_3$o,
  _hoisted_4$c
];
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_5$8);
}
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$a]]), _hoisted_1$J = { class: "VPMenuLink" }, _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$J, [
      createVNode(VPLink, {
        class: normalizeClass({ active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link, !!__props.item.activeMatch) }),
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"])
    ]));
  }
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-88f937c6"]]), _hoisted_1$I = { class: "VPMenuGroup" }, _hoisted_2$w = {
  key: 0,
  class: "title"
}, _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$I, [
      __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$w, toDisplayString(__props.text), 1)) : createCommentVNode("", !0),
      (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.items, (item) => (openBlock(), createElementBlock(Fragment, null, [
        "link" in item ? (openBlock(), createBlock(VPMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : createCommentVNode("", !0)
      ], 64))), 256))
    ]));
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-b66affaf"]]), _hoisted_1$H = { class: "VPMenu" }, _hoisted_2$v = {
  key: 0,
  class: "items"
}, _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$H, [
      __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$v, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.items, (item) => (openBlock(), createElementBlock(Fragment, {
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
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-e7ea1737"]]), _hoisted_1$G = ["aria-expanded", "aria-label"], _hoisted_2$u = {
  key: 0,
  class: "text"
}, _hoisted_3$n = { class: "menu" }, _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    icon: null,
    button: null,
    label: null,
    items: null
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
        "aria-label": __props.label,
        onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
      }, [
        __props.button || __props.icon ? (openBlock(), createElementBlock("span", _hoisted_2$u, [
          __props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
            key: 0,
            class: "option-icon"
          })) : createCommentVNode("", !0),
          createTextVNode(" " + toDisplayString(__props.button) + " ", 1),
          createVNode(VPIconChevronDown, { class: "text-icon" })
        ])) : (openBlock(), createBlock(VPIconMoreHorizontal, {
          key: 1,
          class: "icon"
        }))
      ], 8, _hoisted_1$G),
      createBaseVNode("div", _hoisted_3$n, [
        createVNode(VPMenu, { items: __props.items }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["items"])
      ])
    ], 544));
  }
});
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-96001b6b"]]), _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => (openBlock(), createBlock(VPFlyout, {
      class: normalizeClass({
        VPNavBarMenuGroup: !0,
        active: unref(isActive)(
          unref(page).relativePath,
          __props.item.activeMatch,
          !!__props.item.activeMatch
        )
      }),
      button: __props.item.text,
      items: __props.item.items
    }, null, 8, ["class", "button", "items"]));
  }
}), _withScopeId$9 = (n) => (pushScopeId("data-v-bdedfc22"), n = n(), popScopeId(), n), _hoisted_1$F = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
}, _hoisted_2$t = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1)), _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$F, [
      _hoisted_2$t,
      (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => (openBlock(), createElementBlock(Fragment, {
        key: item.text
      }, [
        "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
          key: 0,
          item
        }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$P, {
          key: 1,
          item
        }, null, 8, ["item"]))
      ], 64))), 128))
    ])) : createCommentVNode("", !0);
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-bdedfc22"]]), _sfc_main$N = {}, _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$s = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1), _hoisted_3$m = /* @__PURE__ */ createBaseVNode("path", {
  d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
  class: "css-c4d79v"
}, null, -1), _hoisted_4$b = [
  _hoisted_2$s,
  _hoisted_3$m
];
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_4$b);
}
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$9]]), _hoisted_1$D = { class: "items" }, _hoisted_2$r = { class: "title" }, _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: !0 });
    return (_ctx, _cache) => unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock(VPFlyout, {
      key: 0,
      class: "VPNavBarTranslations",
      icon: VPIconLanguages
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$D, [
          createBaseVNode("p", _hoisted_2$r, toDisplayString(unref(currentLang).label), 1),
          (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createBlock(VPMenuLink, {
            key: locale.link,
            item: locale
          }, null, 8, ["item"]))), 128))
        ])
      ]),
      _: 1
    })) : createCommentVNode("", !0);
  }
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-fdaf79b7"]]);
const _sfc_main$L = {}, _hoisted_1$C = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
}, _hoisted_2$q = { class: "check" }, _hoisted_3$l = {
  key: 0,
  class: "icon"
};
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$C, [
    createBaseVNode("span", _hoisted_2$q, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$l, [
        renderSlot(_ctx.$slots, "default", {}, void 0, !0)
      ])) : createCommentVNode("", !0)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$8], ["__scopeId", "data-v-f3c41672"]]), _sfc_main$K = {}, _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$p = /* @__PURE__ */ createStaticVNode('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9), _hoisted_11$1 = [
  _hoisted_2$p
];
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_11$1);
}
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$7]]), _sfc_main$J = {}, _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$o = /* @__PURE__ */ createBaseVNode("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1), _hoisted_3$k = [
  _hoisted_2$o
];
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$k);
}
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$6]]), _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const { site, isDark } = useData(), checked = ref(!1), toggle = typeof localStorage < "u" ? useAppearance() : () => {
    };
    onMounted(() => {
      checked.value = document.documentElement.classList.contains("dark");
    });
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)"), classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY), isDark2 = site.value.appearance === "dark" && userPreference == null || (userPreference === "auto" || userPreference == null ? query.matches : userPreference === "dark");
      query.onchange = (e) => {
        userPreference === "auto" && setClass(isDark2 = e.matches);
      };
      function toggle2() {
        setClass(isDark2 = !isDark2), userPreference = isDark2 ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto", localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        const css = document.createElement("style");
        css.type = "text/css", css.appendChild(
          document.createTextNode(
            `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
          )
        ), document.head.appendChild(css), checked.value = dark, classList[dark ? "add" : "remove"]("dark"), window.getComputedStyle(css).opacity, document.head.removeChild(css);
      }
      return toggle2;
    }
    return watch(checked, (newIsDark) => {
      isDark.value = newIsDark;
    }), (_ctx, _cache) => (openBlock(), createBlock(VPSwitch, {
      class: "VPSwitchAppearance",
      "aria-label": "toggle dark mode",
      "aria-checked": checked.value,
      onClick: unref(toggle)
    }, {
      default: withCtx(() => [
        createVNode(VPIconSun, { class: "sun" }),
        createVNode(VPIconMoon, { class: "moon" })
      ]),
      _: 1
    }, 8, ["aria-checked", "onClick"]));
  }
});
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-0d529b6d"]]), _hoisted_1$z = {
  key: 0,
  class: "VPNavBarAppearance"
}, _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$z, [
      createVNode(VPSwitchAppearance)
    ])) : createCommentVNode("", !0);
  }
});
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-da3f667a"]]), icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
}, _hoisted_1$y = ["href", "innerHTML"], _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props, svg = computed(() => typeof props.icon == "object" ? props.icon.svg : icons[props.icon]);
    return (_ctx, _cache) => (openBlock(), createElementBlock("a", {
      class: "VPSocialLink",
      href: __props.link,
      target: "_blank",
      rel: "noopener",
      innerHTML: unref(svg)
    }, null, 8, _hoisted_1$y));
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-e57698f6"]]), _hoisted_1$x = { class: "VPSocialLinks" }, _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: null
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$x, [
      (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.links, ({ link: link2, icon }) => (openBlock(), createBlock(VPSocialLink, {
        key: link2,
        icon,
        link: link2
      }, null, 8, ["icon", "link"]))), 128))
    ]));
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-f6988cfb"]]), _sfc_main$E = /* @__PURE__ */ defineComponent({
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
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-2ab2a029"]]), _hoisted_1$w = {
  key: 0,
  class: "group translations"
}, _hoisted_2$n = { class: "trans-title" }, _hoisted_3$j = {
  key: 1,
  class: "group"
}, _hoisted_4$a = { class: "item appearance" }, _hoisted_5$7 = { class: "label" }, _hoisted_6$6 = { class: "appearance-action" }, _hoisted_7$4 = {
  key: 2,
  class: "group"
}, _hoisted_8$3 = { class: "item social-links" }, _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { site, theme: theme2 } = useData(), { localeLinks, currentLang } = useLangs({ correspondingLink: !0 }), hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _cache) => unref(hasExtraContent) ? (openBlock(), createBlock(VPFlyout, {
      key: 0,
      class: "VPNavBarExtra",
      label: "extra navigation"
    }, {
      default: withCtx(() => [
        unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", _hoisted_1$w, [
          createBaseVNode("p", _hoisted_2$n, toDisplayString(unref(currentLang).label), 1),
          (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createBlock(VPMenuLink, {
            key: locale.link,
            item: locale
          }, null, 8, ["item"]))), 128))
        ])) : createCommentVNode("", !0),
        unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_3$j, [
          createBaseVNode("div", _hoisted_4$a, [
            createBaseVNode("p", _hoisted_5$7, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
            createBaseVNode("div", _hoisted_6$6, [
              createVNode(VPSwitchAppearance)
            ])
          ])
        ])) : createCommentVNode("", !0),
        unref(theme2).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_7$4, [
          createBaseVNode("div", _hoisted_8$3, [
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
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-66bb1f24"]]), _withScopeId$8 = (n) => (pushScopeId("data-v-e5dd9c1c"), n = n(), popScopeId(), n), _hoisted_1$v = ["aria-expanded"], _hoisted_2$m = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("span", { class: "container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "bottom" })
], -1)), _hoisted_3$i = [
  _hoisted_2$m
], _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: normalizeClass(["VPNavBarHamburger", { active: __props.active }]),
      "aria-label": "mobile navigation",
      "aria-expanded": __props.active,
      "aria-controls": "VPNavScreen",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, _hoisted_3$i, 10, _hoisted_1$v));
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-e5dd9c1c"]]), _withScopeId$7 = (n) => (pushScopeId("data-v-be450ad9"), n = n(), popScopeId(), n), _hoisted_1$u = { class: "container" }, _hoisted_2$l = { class: "title" }, _hoisted_3$h = { class: "content" }, _hoisted_4$9 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("div", { class: "curtain" }, null, -1)), _hoisted_5$6 = { class: "content-body" }, _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll(), { hasSidebar } = useSidebar(), classes = computed(() => ({
      "has-sidebar": hasSidebar.value,
      fill: y.value > 0
    }));
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPNavBar", unref(classes)])
    }, [
      createBaseVNode("div", _hoisted_1$u, [
        createBaseVNode("div", _hoisted_2$l, [
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
        createBaseVNode("div", _hoisted_3$h, [
          _hoisted_4$9,
          createBaseVNode("div", _hoisted_5$6, [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, !0),
            createVNode(_sfc_main$Z, { class: "search" }),
            createVNode(VPNavBarMenu, { class: "menu" }),
            createVNode(VPNavBarTranslations, { class: "translations" }),
            createVNode(VPNavBarAppearance, { class: "appearance" }),
            createVNode(VPNavBarSocialLinks, { class: "social-links" }),
            createVNode(VPNavBarExtra, { class: "extra" }),
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, !0),
            createVNode(VPNavBarHamburger, {
              class: "hamburger",
              active: __props.isScreenOpen,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
            }, null, 8, ["active"])
          ])
        ])
      ])
    ], 2));
  }
});
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-be450ad9"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  } else
    return Array.from(arr);
}
var hasPassiveEvents = !1;
if (typeof window < "u") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = !0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions), window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), locks = [], documentListenerAdded = !1, initialClientY = -1, previousBodyOverflowSetting = void 0, previousBodyPosition = void 0, previousBodyPaddingRight = void 0, allowTouchMove = function(el) {
  return locks.some(function(lock) {
    return !!(lock.options.allowTouchMove && lock.options.allowTouchMove(el));
  });
}, preventDefault = function(rawEvent) {
  var e = rawEvent || window.event;
  return allowTouchMove(e.target) || e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}, setOverflowHidden = function(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === !0, scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      previousBodyPaddingRight = document.body.style.paddingRight, document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
    }
  }
  previousBodyOverflowSetting === void 0 && (previousBodyOverflowSetting = document.body.style.overflow, document.body.style.overflow = "hidden");
}, restoreOverflowSetting = function() {
  previousBodyPaddingRight !== void 0 && (document.body.style.paddingRight = previousBodyPaddingRight, previousBodyPaddingRight = void 0), previousBodyOverflowSetting !== void 0 && (document.body.style.overflow = previousBodyOverflowSetting, previousBodyOverflowSetting = void 0);
}, setPositionFixed = function() {
  return window.requestAnimationFrame(function() {
    if (previousBodyPosition === void 0) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
      document.body.style.position = "fixed", document.body.style.top = -scrollY, document.body.style.left = -scrollX, setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var bottomBarHeight = innerHeight - window.innerHeight;
          bottomBarHeight && scrollY >= innerHeight && (document.body.style.top = -(scrollY + bottomBarHeight));
        });
      }, 300);
    }
  });
}, restorePositionSetting = function() {
  if (previousBodyPosition !== void 0) {
    var y = -parseInt(document.body.style.top, 10), x = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position, document.body.style.top = previousBodyPosition.top, document.body.style.left = previousBodyPosition.left, window.scrollTo(x, y), previousBodyPosition = void 0;
  }
}, isTargetElementTotallyScrolled = function(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : !1;
}, handleScroll = function(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  return allowTouchMove(event.target) ? !1 : targetElement && targetElement.scrollTop === 0 && clientY > 0 || isTargetElementTotallyScrolled(targetElement) && clientY < 0 ? preventDefault(event) : (event.stopPropagation(), !0);
}, disableBodyScroll = function(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    var lock = {
      targetElement,
      options: options || {}
    };
    locks = [].concat(_toConsumableArray(locks), [lock]), isIosDevice ? setPositionFixed() : setOverflowHidden(options), isIosDevice && (targetElement.ontouchstart = function(event) {
      event.targetTouches.length === 1 && (initialClientY = event.targetTouches[0].clientY);
    }, targetElement.ontouchmove = function(event) {
      event.targetTouches.length === 1 && handleScroll(event, targetElement);
    }, documentListenerAdded || (document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: !1 } : void 0), documentListenerAdded = !0));
  }
}, clearAllBodyScrollLocks = function() {
  isIosDevice && (locks.forEach(function(lock) {
    lock.targetElement.ontouchstart = null, lock.targetElement.ontouchmove = null;
  }), documentListenerAdded && (document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: !1 } : void 0), documentListenerAdded = !1), initialClientY = -1), isIosDevice ? restorePositionSetting() : restoreOverflowSetting(), locks = [];
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => (openBlock(), createBlock(VPLink, {
      class: "VPNavScreenMenuLink",
      href: __props.link,
      onClick: unref(closeScreen)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(__props.text), 1)
      ]),
      _: 1
    }, 8, ["href", "onClick"]));
  }
});
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-c328f34f"]]), _sfc_main$z = {}, _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", { d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" }, null, -1), _hoisted_3$g = [
  _hoisted_2$k
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$g);
}
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$5]]), _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => (openBlock(), createBlock(VPLink, {
      class: "VPNavScreenMenuGroupLink",
      href: __props.link,
      onClick: unref(closeScreen)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(__props.text), 1)
      ]),
      _: 1
    }, 8, ["href", "onClick"]));
  }
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-3d20956d"]]), _hoisted_1$s = { class: "VPNavScreenMenuGroupSection" }, _hoisted_2$j = {
  key: 0,
  class: "title"
}, _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$s, [
      __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$j, toDisplayString(__props.text), 1)) : createCommentVNode("", !0),
      (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.items, (item) => (openBlock(), createBlock(VPNavScreenMenuGroupLink, {
        key: item.text,
        text: item.text,
        link: item.link
      }, null, 8, ["text", "link"]))), 128))
    ]));
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-7478538b"]]), _hoisted_1$r = ["aria-controls", "aria-expanded"], _hoisted_2$i = { class: "button-text" }, _hoisted_3$f = ["id"], _hoisted_4$8 = {
  key: 1,
  class: "group"
}, _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: null,
    items: null
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
        "aria-controls": unref(groupId),
        "aria-expanded": isOpen.value,
        onClick: toggle
      }, [
        createBaseVNode("span", _hoisted_2$i, toDisplayString(__props.text), 1),
        createVNode(VPIconPlus, { class: "button-icon" })
      ], 8, _hoisted_1$r),
      createBaseVNode("div", {
        id: unref(groupId),
        class: "items"
      }, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.items, (item) => (openBlock(), createElementBlock(Fragment, {
          key: item.text
        }, [
          "link" in item ? (openBlock(), createElementBlock("div", {
            key: item.text,
            class: "item"
          }, [
            createVNode(VPNavScreenMenuGroupLink, {
              text: item.text,
              link: item.link
            }, null, 8, ["text", "link"])
          ])) : (openBlock(), createElementBlock("div", _hoisted_4$8, [
            createVNode(VPNavScreenMenuGroupSection, {
              text: item.text,
              items: item.items
            }, null, 8, ["text", "items"])
          ]))
        ], 64))), 128))
      ], 8, _hoisted_3$f)
    ], 2));
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-a9a19324"]]), _hoisted_1$q = {
  key: 0,
  class: "VPNavScreenMenu"
}, _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$q, [
      (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => (openBlock(), createElementBlock(Fragment, {
        key: item.text
      }, [
        "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
          key: 0,
          text: item.text,
          link: item.link
        }, null, 8, ["text", "link"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
          key: 1,
          text: item.text || "",
          items: item.items
        }, null, 8, ["text", "items"]))
      ], 64))), 128))
    ])) : createCommentVNode("", !0);
  }
}), _hoisted_1$p = {
  key: 0,
  class: "VPNavScreenAppearance"
}, _hoisted_2$h = { class: "text" }, _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _cache) => unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$p, [
      createBaseVNode("p", _hoisted_2$h, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
      createVNode(VPSwitchAppearance)
    ])) : createCommentVNode("", !0);
  }
});
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-7e6603c2"]]), _hoisted_1$o = { class: "list" }, _sfc_main$t = /* @__PURE__ */ defineComponent({
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
      createBaseVNode("ul", _hoisted_1$o, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => (openBlock(), createElementBlock("li", {
          key: locale.link,
          class: "item"
        }, [
          createVNode(VPLink, {
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
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-8982effe"]]), _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
      key: 0,
      class: "VPNavScreenSocialLinks",
      links: unref(theme2).socialLinks
    }, null, 8, ["links"])) : createCommentVNode("", !0);
  }
}), _hoisted_1$n = { class: "container" }, _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(screen.value, { reserveScrollBarGap: !0 });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return (_ctx, _cache) => (openBlock(), createBlock(Transition, {
      name: "fade",
      onEnter: lockBodyScroll,
      onAfterLeave: unlockBodyScroll
    }, {
      default: withCtx(() => [
        __props.open ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, [
          createBaseVNode("div", _hoisted_1$n, [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, !0),
            createVNode(_sfc_main$v, { class: "menu" }),
            createVNode(VPNavScreenTranslations, { class: "translations" }),
            createVNode(VPNavScreenAppearance, { class: "appearance" }),
            createVNode(_sfc_main$s, { class: "social-links" }),
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, !0)
          ])
        ], 512)) : createCommentVNode("", !0)
      ]),
      _: 3
    }));
  }
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-724636ae"]]), _hoisted_1$m = { class: "VPNav" }, _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    return provide("close-screen", closeScreen), (_ctx, _cache) => (openBlock(), createElementBlock("header", _hoisted_1$m, [
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
    ]));
  }
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-0fa0e57d"]]), _sfc_main$p = {}, _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", { d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z" }, null, -1), _hoisted_3$e = /* @__PURE__ */ createBaseVNode("path", { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" }, null, -1), _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("path", { d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z" }, null, -1), _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("path", { d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z" }, null, -1), _hoisted_6$5 = [
  _hoisted_2$g,
  _hoisted_3$e,
  _hoisted_4$7,
  _hoisted_5$5
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_6$5);
}
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$4]]), _hoisted_1$k = {
  key: 0,
  class: "VPLocalNav"
}, _hoisted_2$f = ["aria-expanded"], _hoisted_3$d = { class: "menu-text" }, _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2 } = useData(), { hasSidebar } = useSidebar();
    function scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => unref(hasSidebar) ? (openBlock(), createElementBlock("div", _hoisted_1$k, [
      createBaseVNode("button", {
        class: "menu",
        "aria-expanded": __props.open,
        "aria-controls": "VPSidebarNav",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
      }, [
        createVNode(VPIconAlignLeft, { class: "menu-icon" }),
        createBaseVNode("span", _hoisted_3$d, toDisplayString(unref(theme2).sidebarMenuLabel || "Menu"), 1)
      ], 8, _hoisted_2$f),
      createBaseVNode("a", {
        class: "top-link",
        href: "#",
        onClick: scrollToTop
      }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)
    ])) : createCommentVNode("", !0);
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-2817d72e"]]), _sfc_main$n = {}, _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", { d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z" }, null, -1), _hoisted_3$c = [
  _hoisted_2$e
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$c);
}
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$3]]), _withScopeId$6 = (n) => (pushScopeId("data-v-983f6b21"), n = n(), popScopeId(), n), _hoisted_1$i = ["role"], _hoisted_2$d = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, null, -1)), _hoisted_3$b = {
  key: 1,
  class: "items"
}, _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: null,
    depth: null
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
    function onItemClick() {
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", !0);
      return openBlock(), createBlock(resolveDynamicComponent(unref(sectionTag)), {
        class: normalizeClass(["VPSidebarItem", unref(classes)])
      }, {
        default: withCtx(() => [
          __props.item.text ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "item",
            role: unref(itemRole),
            onClick: onItemClick
          }, [
            _hoisted_2$d,
            createVNode(VPLink, {
              tag: unref(linkTag),
              class: "link",
              href: __props.item.link
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(textTag)), {
                  class: "text",
                  innerHTML: __props.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href"]),
            __props.item.collapsed != null ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "caret",
              role: "button",
              onClick: onCaretClick
            }, [
              createVNode(VPIconChevronRight, { class: "caret-icon" })
            ])) : createCommentVNode("", !0)
          ], 8, _hoisted_1$i)) : createCommentVNode("", !0),
          __props.item.items && __props.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_3$b, [
            __props.depth < 5 ? (openBlock(!0), createElementBlock(Fragment, { key: 0 }, renderList(__props.item.items, (i) => (openBlock(), createBlock(_component_VPSidebarItem, {
              key: i.text,
              item: i,
              depth: __props.depth + 1
            }, null, 8, ["item", "depth"]))), 128)) : createCommentVNode("", !0)
          ])) : createCommentVNode("", !0)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-983f6b21"]]), _withScopeId$5 = (n) => (pushScopeId("data-v-c79ccefa"), n = n(), popScopeId(), n), _hoisted_1$h = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "curtain" }, null, -1)), _hoisted_2$c = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
}, _hoisted_3$a = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "sidebar-aria-label"
}, " Sidebar Navigation ", -1)), _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props, { sidebarGroups, hasSidebar } = useSidebar();
    let navEl = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(navEl.value, { reserveScrollBarGap: !0 });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return watchPostEffect(async () => {
      var _a2;
      props.open ? (lockBodyScroll(), (_a2 = navEl.value) == null || _a2.focus()) : unlockBodyScroll();
    }), (_ctx, _cache) => unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
      key: 0,
      class: normalizeClass(["VPSidebar", { open: __props.open }]),
      ref_key: "navEl",
      ref: navEl,
      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["stop"]))
    }, [
      _hoisted_1$h,
      createBaseVNode("nav", _hoisted_2$c, [
        _hoisted_3$a,
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
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-c79ccefa"]]), _sfc_main$k = {}, _hoisted_1$g = { class: "VPPage" };
function _sfc_render$2(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(_component_Content)
  ]);
}
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$2]]), _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: null,
    size: null,
    theme: null,
    text: null,
    href: null
  },
  setup(__props) {
    const props = __props, classes = computed(() => [
      props.size ?? "medium",
      props.theme ?? "brand"
    ]), isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href)), component = computed(() => props.tag ? props.tag : props.href ? "a" : "button");
    return (_ctx, _cache) => (openBlock(), createBlock(resolveDynamicComponent(unref(component)), {
      class: normalizeClass(["VPButton", unref(classes)]),
      href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
      target: unref(isExternal2) ? "_blank" : void 0,
      rel: unref(isExternal2) ? "noreferrer" : void 0
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(__props.text), 1)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
});
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-a7c4128c"]]), _withScopeId$4 = (n) => (pushScopeId("data-v-c39d0f9a"), n = n(), popScopeId(), n), _hoisted_1$f = { class: "container" }, _hoisted_2$b = { class: "main" }, _hoisted_3$9 = {
  key: 0,
  class: "name"
}, _hoisted_4$6 = { class: "clip" }, _hoisted_5$4 = {
  key: 1,
  class: "text"
}, _hoisted_6$4 = {
  key: 2,
  class: "tagline"
}, _hoisted_7$3 = {
  key: 3,
  class: "actions"
}, _hoisted_8$2 = {
  key: 0,
  class: "image"
}, _hoisted_9$1 = { class: "image-container" }, _hoisted_10$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "image-bg" }, null, -1)), _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  props: {
    name: null,
    text: null,
    tagline: null,
    image: null,
    actions: null
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPHero", { "has-image": __props.image || unref(heroImageSlotExists) }])
    }, [
      createBaseVNode("div", _hoisted_1$f, [
        createBaseVNode("div", _hoisted_2$b, [
          __props.name ? (openBlock(), createElementBlock("h1", _hoisted_3$9, [
            createBaseVNode("span", _hoisted_4$6, toDisplayString(__props.name), 1)
          ])) : createCommentVNode("", !0),
          __props.text ? (openBlock(), createElementBlock("p", _hoisted_5$4, toDisplayString(__props.text), 1)) : createCommentVNode("", !0),
          __props.tagline ? (openBlock(), createElementBlock("p", _hoisted_6$4, toDisplayString(__props.tagline), 1)) : createCommentVNode("", !0),
          __props.actions ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
            (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.actions, (action) => (openBlock(), createElementBlock("div", {
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
        __props.image || unref(heroImageSlotExists) ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
          createBaseVNode("div", _hoisted_9$1, [
            _hoisted_10$1,
            renderSlot(_ctx.$slots, "home-hero-image", {}, () => [
              __props.image ? (openBlock(), createBlock(VPImage, {
                key: 0,
                class: "image-src",
                image: __props.image
              }, null, 8, ["image"])) : createCommentVNode("", !0)
            ], !0)
          ])
        ])) : createCommentVNode("", !0)
      ])
    ], 2));
  }
});
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c39d0f9a"]]), _sfc_main$h = /* @__PURE__ */ defineComponent({
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
      "home-hero-image": withCtx(() => [
        renderSlot(_ctx.$slots, "home-hero-image")
      ]),
      _: 3
    }, 8, ["name", "text", "tagline", "image", "actions"])) : createCommentVNode("", !0);
  }
}), _sfc_main$g = {}, _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", { d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z" }, null, -1), _hoisted_3$8 = [
  _hoisted_2$a
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$8);
}
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$1]]), _hoisted_1$d = { class: "box" }, _hoisted_2$9 = {
  key: 1,
  class: "icon"
}, _hoisted_3$7 = ["innerHTML"], _hoisted_4$5 = ["innerHTML"], _hoisted_5$3 = {
  key: 3,
  class: "link-text"
}, _hoisted_6$3 = { class: "link-text-value" }, _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  props: {
    icon: null,
    title: null,
    details: null,
    link: null,
    linkText: null
  },
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createBlock(VPLink, {
      class: "VPFeature",
      href: __props.link,
      "no-icon": !0
    }, {
      default: withCtx(() => [
        createBaseVNode("article", _hoisted_1$d, [
          typeof __props.icon == "object" ? (openBlock(), createBlock(VPImage, {
            key: 0,
            image: __props.icon,
            alt: __props.icon.alt,
            height: __props.icon.height,
            width: __props.icon.width
          }, null, 8, ["image", "alt", "height", "width"])) : __props.icon ? (openBlock(), createElementBlock("div", _hoisted_2$9, toDisplayString(__props.icon), 1)) : createCommentVNode("", !0),
          createBaseVNode("h2", {
            class: "title",
            innerHTML: __props.title
          }, null, 8, _hoisted_3$7),
          __props.details ? (openBlock(), createElementBlock("p", {
            key: 2,
            class: "details",
            innerHTML: __props.details
          }, null, 8, _hoisted_4$5)) : createCommentVNode("", !0),
          __props.linkText ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
            createBaseVNode("p", _hoisted_6$3, [
              createTextVNode(toDisplayString(__props.linkText) + " ", 1),
              createVNode(VPIconArrowRight, { class: "link-text-icon" })
            ])
          ])) : createCommentVNode("", !0)
        ])
      ]),
      _: 1
    }, 8, ["href"]));
  }
});
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a5828f43"]]), _hoisted_1$c = {
  key: 0,
  class: "VPFeatures"
}, _hoisted_2$8 = { class: "container" }, _hoisted_3$6 = { class: "items" }, _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  props: {
    features: null
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
        if (length % 2 === 0)
          return "grid-4";
      } else
        return;
    });
    return (_ctx, _cache) => __props.features ? (openBlock(), createElementBlock("div", _hoisted_1$c, [
      createBaseVNode("div", _hoisted_2$8, [
        createBaseVNode("div", _hoisted_3$6, [
          (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.features, (feature) => (openBlock(), createElementBlock("div", {
            key: feature.title,
            class: normalizeClass(["item", [unref(grid)]])
          }, [
            createVNode(VPFeature, {
              icon: feature.icon,
              title: feature.title,
              details: feature.details,
              link: feature.link,
              "link-text": feature.linkText
            }, null, 8, ["icon", "title", "details", "link", "link-text"])
          ], 2))), 128))
        ])
      ])
    ])) : createCommentVNode("", !0);
  }
});
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-6816157f"]]), _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => unref(fm).features ? (openBlock(), createBlock(VPFeatures, {
      key: 0,
      class: "VPHomeFeatures",
      features: unref(fm).features
    }, null, 8, ["features"])) : createCommentVNode("", !0);
  }
}), _hoisted_1$b = { class: "VPHome" }, _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0),
        createVNode(_sfc_main$h, null, {
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, !0)
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, !0),
        renderSlot(_ctx.$slots, "home-features-before", {}, void 0, !0),
        createVNode(_sfc_main$d),
        renderSlot(_ctx.$slots, "home-features-after", {}, void 0, !0),
        createVNode(_component_Content)
      ]);
    };
  }
});
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-b07783ac"]]);
function useAside() {
  const { hasSidebar } = useSidebar(), is960 = useMediaQuery("(min-width: 960px)"), is1280 = useMediaQuery("(min-width: 1280px)");
  return {
    isAsideEnabled: computed(() => !is1280.value && !is960.value ? !1 : hasSidebar.value ? is1280.value : is960.value)
  };
}
const PAGE_OFFSET = 71;
function getHeaders(pageOutline, outlineBadges) {
  if (pageOutline === !1)
    return [];
  let updatedHeaders = [];
  return document.querySelectorAll("h2, h3, h4, h5, h6").forEach((el) => {
    if (el.textContent && el.id) {
      let title = el.textContent;
      if (outlineBadges === !1) {
        const clone = el.cloneNode(!0);
        for (const child of clone.querySelectorAll(".VPBadge"))
          child.remove();
        title = clone.textContent || "";
      }
      updatedHeaders.push({
        level: Number(el.tagName[1]),
        title: title.replace(/\s+#\s*$/, ""),
        link: `#${el.id}`
      });
    }
  }), resolveHeaders(updatedHeaders, pageOutline);
}
function resolveHeaders(headers, range) {
  const levelsRange = (typeof range == "object" && !Array.isArray(range) ? range.level : range) || 2;
  return groupHeaders(headers, typeof levelsRange == "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange);
}
function groupHeaders(headers, levelsRange) {
  const result = [];
  return headers = headers.map((h2) => ({ ...h2 })), headers.forEach((h2, index) => {
    h2.level >= levelsRange[0] && h2.level <= levelsRange[1] && addToParent(index, headers, levelsRange) && result.push(h2);
  }), result;
}
function addToParent(currIndex, headers, levelsRange) {
  if (currIndex === 0)
    return !0;
  const currentHeader = headers[currIndex];
  for (let index = currIndex - 1; index >= 0; index--) {
    const header = headers[index];
    if (header.level < currentHeader.level && header.level >= levelsRange[0] && header.level <= levelsRange[1])
      return header.children == null && (header.children = []), header.children.push(currentHeader), !1;
  }
  return !0;
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
    const links = [].slice.call(container.value.querySelectorAll(".outline-link")), anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => links.some((link2) => link2.hash === anchor.hash && anchor.offsetParent !== null)), scrollY = window.scrollY, innerHeight = window.innerHeight, offsetHeight = document.body.offsetHeight, isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
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
    prevActiveLink && prevActiveLink.classList.remove("active"), hash !== null && (prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`));
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
const _hoisted_1$a = ["href"], _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutlineItem",
  props: {
    headers: null,
    onClick: { type: Function },
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPDocAsideOutlineItem = resolveComponent("VPDocAsideOutlineItem", !0);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(__props.root ? "root" : "nested")
      }, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(__props.headers, ({ children, link: link2, title }) => (openBlock(), createElementBlock("li", null, [
          createBaseVNode("a", {
            class: "outline-link",
            href: link2,
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => __props.onClick && __props.onClick(...args))
          }, toDisplayString(title), 9, _hoisted_1$a),
          children != null && children.length ? (openBlock(), createBlock(_component_VPDocAsideOutlineItem, {
            key: 0,
            headers: children,
            onClick: __props.onClick
          }, null, 8, ["headers", "onClick"])) : createCommentVNode("", !0)
        ]))), 256))
      ], 2);
    };
  }
});
const VPDocAsideOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1188541a"]]), _withScopeId$3 = (n) => (pushScopeId("data-v-5dd9d5f6"), n = n(), popScopeId(), n), _hoisted_1$9 = { class: "content" }, _hoisted_2$7 = { class: "outline-title" }, _hoisted_3$5 = { "aria-labelledby": "doc-outline-aria-label" }, _hoisted_4$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "visually-hidden",
  id: "doc-outline-aria-label"
}, " Table of Contents for current page ", -1)), _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData(), pageOutline = computed(
      () => frontmatter.value.outline ?? theme2.value.outline
    ), onContentUpdated = inject("onContentUpdated");
    onContentUpdated.value = () => {
      headers.value = getHeaders(pageOutline.value, theme2.value.outlineBadges);
    };
    const headers = ref([]), hasOutline = computed(() => headers.value.length > 0), container = ref(), marker = ref();
    useActiveAnchor(container, marker);
    function handleClick({ target: el }) {
      const id = "#" + el.href.split("#")[1], heading = document.querySelector(
        decodeURIComponent(id)
      );
      heading == null || heading.focus();
    }
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPDocAsideOutline", { "has-outline": unref(hasOutline) }]),
      ref_key: "container",
      ref: container
    }, [
      createBaseVNode("div", _hoisted_1$9, [
        createBaseVNode("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        createBaseVNode("div", _hoisted_2$7, toDisplayString(typeof unref(theme2).outline == "object" && !Array.isArray(unref(theme2).outline) && unref(theme2).outline.label || unref(theme2).outlineTitle || "On this page"), 1),
        createBaseVNode("nav", _hoisted_3$5, [
          _hoisted_4$4,
          createVNode(VPDocAsideOutlineItem, {
            headers: headers.value,
            root: !0,
            onClick: handleClick
          }, null, 8, ["headers"])
        ])
      ])
    ], 2));
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-5dd9d5f6"]]), _hoisted_1$8 = { class: "VPDocAsideCarbonAds" }, _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: null
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$8, [
      createVNode(unref(VPCarbonAds), { "carbon-ads": __props.carbonAds }, null, 8, ["carbon-ads"])
    ]));
  }
}), _withScopeId$2 = (n) => (pushScopeId("data-v-cdc66372"), n = n(), popScopeId(), n), _hoisted_1$7 = { class: "VPDocAside" }, _hoisted_2$6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer" }, null, -1)), _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1$7, [
      renderSlot(_ctx.$slots, "aside-top", {}, void 0, !0),
      renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, !0),
      createVNode(VPDocAsideOutline),
      renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, !0),
      _hoisted_2$6,
      renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, !0),
      unref(theme2).carbonAds ? (openBlock(), createBlock(_sfc_main$9, {
        key: 0,
        "carbon-ads": unref(theme2).carbonAds
      }, null, 8, ["carbon-ads"])) : createCommentVNode("", !0),
      renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, !0),
      renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, !0)
    ]));
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-cdc66372"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {}, { relativePath } = page.value;
    return { url: pattern.replace(/:path/g, relativePath), text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a2, _b, _c, _d;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath), candidates = getFlatSideBarLinks(sidebar), index = candidates.findIndex((link2) => isActive(page.value.relativePath, link2.link));
    return {
      prev: frontmatter.value.prev === !1 ? void 0 : {
        text: (typeof frontmatter.value.prev == "string" ? frontmatter.value.prev : typeof frontmatter.value.prev == "object" ? frontmatter.value.prev.text : void 0) ?? ((_a2 = candidates[index - 1]) == null ? void 0 : _a2.text),
        link: (typeof frontmatter.value.prev == "object" ? frontmatter.value.prev.link : void 0) ?? ((_b = candidates[index - 1]) == null ? void 0 : _b.link)
      },
      next: frontmatter.value.next === !1 ? void 0 : {
        text: (typeof frontmatter.value.next == "string" ? frontmatter.value.next : typeof frontmatter.value.next == "object" ? frontmatter.value.next.text : void 0) ?? ((_c = candidates[index + 1]) == null ? void 0 : _c.text),
        link: (typeof frontmatter.value.next == "object" ? frontmatter.value.next.link : void 0) ?? ((_d = candidates[index + 1]) == null ? void 0 : _d.link)
      }
    };
  });
}
const _sfc_main$7 = {}, _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", { d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z" }, null, -1), _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z" }, null, -1), _hoisted_4$3 = [
  _hoisted_2$5,
  _hoisted_3$4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$3);
}
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render]]), _hoisted_1$5 = { class: "VPLastUpdated" }, _hoisted_2$4 = ["datetime"], _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  setup(__props) {
    const { theme: theme2, page } = useData(), date = computed(() => new Date(page.value.lastUpdated)), isoDatetime = computed(() => date.value.toISOString()), datetime = ref("");
    return onMounted(() => {
      watchEffect(() => {
        datetime.value = date.value.toLocaleString(window.navigator.language);
      });
    }), (_ctx, _cache) => (openBlock(), createElementBlock("p", _hoisted_1$5, [
      createTextVNode(toDisplayString(unref(theme2).lastUpdatedText || "Last updated") + ": ", 1),
      createBaseVNode("time", { datetime: unref(isoDatetime) }, toDisplayString(datetime.value), 9, _hoisted_2$4)
    ]));
  }
});
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-355aa5ef"]]), _hoisted_1$4 = {
  key: 0,
  class: "VPDocFooter"
}, _hoisted_2$3 = {
  key: 0,
  class: "edit-info"
}, _hoisted_3$3 = {
  key: 0,
  class: "edit-link"
}, _hoisted_4$2 = {
  key: 1,
  class: "last-updated"
}, _hoisted_5$2 = {
  key: 1,
  class: "prev-next"
}, _hoisted_6$2 = { class: "pager" }, _hoisted_7$2 = ["href"], _hoisted_8$1 = ["innerHTML"], _hoisted_9 = ["innerHTML"], _hoisted_10 = ["href"], _hoisted_11 = ["innerHTML"], _hoisted_12 = ["innerHTML"], _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData(), editLink = useEditLink(), control = usePrevNext(), hasEditLink = computed(() => theme2.value.editLink && frontmatter.value.editLink !== !1), hasLastUpdated = computed(() => page.value.lastUpdated && frontmatter.value.lastUpdated !== !1), showFooter = computed(() => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next);
    return (_ctx, _cache) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      return unref(showFooter) ? (openBlock(), createElementBlock("footer", _hoisted_1$4, [
        unref(hasEditLink) || unref(hasLastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          unref(hasEditLink) ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
            createVNode(VPLink, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": !0
            }, {
              default: withCtx(() => [
                createVNode(VPIconEdit, { class: "edit-link-icon" }),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", !0),
          unref(hasLastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", !0)
        ])) : createCommentVNode("", !0),
        (_a2 = unref(control).prev) != null && _a2.link || (_b = unref(control).next) != null && _b.link ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          createBaseVNode("div", _hoisted_6$2, [
            (_c = unref(control).prev) != null && _c.link ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "pager-link prev",
              href: unref(normalizeLink$1)(unref(control).prev.link)
            }, [
              createBaseVNode("span", {
                class: "desc",
                innerHTML: ((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"
              }, null, 8, _hoisted_8$1),
              createBaseVNode("span", {
                class: "title",
                innerHTML: unref(control).prev.text
              }, null, 8, _hoisted_9)
            ], 8, _hoisted_7$2)) : createCommentVNode("", !0)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["pager", { "has-prev": (_e = unref(control).prev) == null ? void 0 : _e.link }])
          }, [
            (_f = unref(control).next) != null && _f.link ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "pager-link next",
              href: unref(normalizeLink$1)(unref(control).next.link)
            }, [
              createBaseVNode("span", {
                class: "desc",
                innerHTML: ((_g = unref(theme2).docFooter) == null ? void 0 : _g.next) || "Next page"
              }, null, 8, _hoisted_11),
              createBaseVNode("span", {
                class: "title",
                innerHTML: unref(control).next.text
              }, null, 8, _hoisted_12)
            ], 8, _hoisted_10)) : createCommentVNode("", !0)
          ], 2)
        ])) : createCommentVNode("", !0)
      ])) : createCommentVNode("", !0);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2813752b"]]), _withScopeId$1 = (n) => (pushScopeId("data-v-c5936a1e"), n = n(), popScopeId(), n), _hoisted_1$3 = { class: "container" }, _hoisted_2$2 = {
  key: 0,
  class: "aside"
}, _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "aside-curtain" }, null, -1)), _hoisted_4$1 = { class: "aside-container" }, _hoisted_5$1 = { class: "aside-content" }, _hoisted_6$1 = { class: "content" }, _hoisted_7$1 = { class: "content-container" }, _hoisted_8 = { class: "main" }, _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const route = useRoute(), { hasSidebar, hasAside } = useSidebar(), pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    ), onContentUpdated = ref();
    return provide("onContentUpdated", onContentUpdated), (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            _hoisted_3$2,
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
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
          ])) : createCommentVNode("", !0),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, !0),
              createBaseVNode("main", _hoisted_8, [
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", unref(pageName)]),
                  onContentUpdated: onContentUpdated.value
                }, null, 8, ["class", "onContentUpdated"])
              ]),
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, !0),
              createVNode(VPDocFooter),
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, !0)
            ])
          ])
        ])
      ], 2);
    };
  }
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c5936a1e"]]), _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const route = useRoute(), { frontmatter } = useData(), { hasSidebar } = useSidebar(), NotFound2 = inject("NotFound");
    return (_ctx, _cache) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["VPContent", {
        "has-sidebar": unref(hasSidebar),
        "is-home": unref(frontmatter).layout === "home"
      }]),
      id: "VPContent"
    }, [
      unref(route).component === unref(NotFound2) ? (openBlock(), createBlock(unref(NotFound2), { key: 0 })) : unref(frontmatter).layout === "page" ? (openBlock(), createBlock(VPPage, { key: 1 })) : unref(frontmatter).layout === "home" ? (openBlock(), createBlock(VPHome, { key: 2 }, {
        "home-hero-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0)
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
      })) : (openBlock(), createBlock(VPDoc, { key: 3 }, {
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
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0bd490fb"]]), _hoisted_1$2 = { class: "container" }, _hoisted_2$1 = ["innerHTML"], _hoisted_3$1 = ["innerHTML"], _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme: theme2 } = useData(), { hasSidebar } = useSidebar();
    return (_ctx, _cache) => unref(theme2).footer ? (openBlock(), createElementBlock("footer", {
      key: 0,
      class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
    }, [
      createBaseVNode("div", _hoisted_1$2, [
        unref(theme2).footer.message ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: "message",
          innerHTML: unref(theme2).footer.message
        }, null, 8, _hoisted_2$1)) : createCommentVNode("", !0),
        unref(theme2).footer.copyright ? (openBlock(), createElementBlock("p", {
          key: 1,
          class: "copyright",
          innerHTML: unref(theme2).footer.copyright
        }, null, 8, _hoisted_3$1)) : createCommentVNode("", !0)
      ])
    ], 2)) : createCommentVNode("", !0);
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d24360a6"]]), _hoisted_1$1 = {
  key: 0,
  class: "Layout"
}, _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar(), route = useRoute();
    watch(() => route.path, closeSidebar), useCloseSidebarOnEscape(isSidebarOpen, closeSidebar), provide("close-sidebar", closeSidebar), provide("is-sidebar-open", isSidebarOpen);
    const { frontmatter } = useData(), slots = useSlots(), heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    return provide("hero-image-slot-exists", heroImageSlotExists), (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return unref(frontmatter).layout !== !1 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
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
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, !0)
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
      ])) : (openBlock(), createBlock(_component_Content, { key: 1 }));
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-93a960b4"]]), _withScopeId = (n) => (pushScopeId("data-v-63c9cdeb"), n = n(), popScopeId(), n), _hoisted_1 = { class: "NotFound" }, _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "code" }, "404", -1)), _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title" }, "PAGE NOT FOUND", -1)), _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1)), _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("blockquote", { class: "quote" }, " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ", -1)), _hoisted_6 = { class: "action" }, _hoisted_7 = ["href"], _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { site } = useData(), { localeLinks } = useLangs({ removeCurrent: !1 }), root = ref("/");
    return onMounted(() => {
      var _a2;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      localeLinks.value.length && (root.value = ((_a2 = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a2.link) || localeLinks.value[0].link);
    }), (_ctx, _cache) => (openBlock(), createElementBlock("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      _hoisted_4,
      _hoisted_5,
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("a", {
          class: "link",
          href: unref(withBase)(root.value),
          "aria-label": "go to home"
        }, " Take me home ", 8, _hoisted_7)
      ])
    ]));
  }
});
const NotFound$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63c9cdeb"]]);
const theme = {
  Layout,
  NotFound: NotFound$1,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [], isFirstUpdate = !0;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = !1;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el)), managedHeadTags = [], newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el), managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data, siteData2 = siteDataByRouteRef.value, pageDescription = pageData && pageData.description, frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData), document.querySelector("meta[name=description]").setAttribute("content", pageDescription || siteData2.description), updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs)
    el.setAttribute(key, attrs[key]);
  return innerHTML && (el.innerHTML = innerHTML), el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set(), createLink = () => document.createElement("link"), viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = "prefetch", link2.href = url, document.head.appendChild(link2);
}, viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = !0), req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser || !window.IntersectionObserver)
    return;
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType)))
    return;
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    observer && observer.disconnect(), observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    }), rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target } = link2, { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI), extMatch = pathname.match(/\.\w+$/);
        extMatch && extMatch[0] !== ".html" || // only prefetch same tab navigation, since a new tab will load
        // the lean js chunk instead.
        target !== "_blank" && // only prefetch inbound links
        hostname === location.hostname && (pathname !== location.pathname ? observer.observe(link2) : hasFetched.add(pathname));
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks), onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(!1);
    return onMounted(() => {
      show.value = !0;
    }), () => show.value && slots.default ? slots.default() : null;
  }
});
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new Map();
    window.addEventListener("click", (e) => {
      var _a2;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement, sibling = (_a2 = el.nextElementSibling) == null ? void 0 : _a2.nextElementSibling;
        if (!parent || !sibling)
          return;
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + `
`), text = text.slice(0, -1), isShell && (text = text.replace(/^ *(\$|>) /gm, "").trim()), copyToClipboard(text).then(() => {
          el.classList.add("copied"), clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied"), el.blur(), timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea"), previouslyFocusedElement = document.activeElement;
    element.value = text, element.setAttribute("readonly", ""), element.style.contain = "strict", element.style.position = "absolute", element.style.left = "-9999px", element.style.fontSize = "12pt";
    const selection = document.getSelection(), originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element), element.select(), element.selectionStart = 0, element.selectionEnd = text.length, document.execCommand("copy"), document.body.removeChild(element), originalRange && (selection.removeAllRanges(), selection.addRange(originalRange)), previouslyFocusedElement && previouslyFocusedElement.focus();
  }
}
function useCodeGroups() {
  inBrowser && window.addEventListener("click", (e) => {
    var _a2, _b;
    const el = e.target;
    if (el.matches(".vp-code-group input")) {
      const group = (_a2 = el.parentElement) == null ? void 0 : _a2.parentElement, i = Array.from((group == null ? void 0 : group.querySelectorAll("input")) || []).indexOf(el), current = group == null ? void 0 : group.querySelector('div[class*="language-"].active'), next = (_b = group == null ? void 0 : group.querySelectorAll('div[class*="language-"]')) == null ? void 0 : _b[i];
      current && next && current !== next && (current.classList.remove("active"), next.classList.add("active"));
    }
  });
}
const NotFound = theme.NotFound || (() => "404 Not Found"), VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData$1();
    return onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang, document.documentElement.dir = site.value.dir;
      });
    }), usePrefetch(), useCopyCode(), useCodeGroups(), theme.setup && theme.setup(), () => h(theme.Layout);
  }
});
async function createApp() {
  const router = newRouter(), app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  return app.provide(dataSymbol, data), app.provide("NotFound", NotFound), app.component("Content", Content), app.component("ClientOnly", ClientOnly), Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  }), theme.enhanceApp && await theme.enhanceApp({
    app,
    router,
    siteData: siteDataRef
  }), { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser, initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    return isInitialPageLoad && (initialPath = pageFilePath), (isInitialPageLoad || initialPath === pageFilePath) && (pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js")), inBrowser && (isInitialPageLoad = !1), __vitePreload(() => import(
      /*@vite-ignore*/
      pageFilePath
    ), []);
  }, NotFound);
}
inBrowser && createApp().then(({ app, router, data }) => {
  router.go().then(() => {
    useUpdateHead(router.route, data.site), app.mount("#app");
  });
});
export {
  _export_sfc as _,
  createStaticVNode as a,
  createBaseVNode as b,
  createElementBlock as c,
  createApp,
  createTextVNode as d,
  openBlock as o,
  toDisplayString as t
};
