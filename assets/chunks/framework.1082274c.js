function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null), list = str.split(",");
  for (let i = 0; i < list.length; i++)
    map[list[i]] = !0;
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const EMPTY_OBJ = {}, EMPTY_ARR = [], NOOP = () => {
}, NO = () => !1, onRE = /^on[^a-z]/, isOn = (key) => onRE.test(key), isModelListener = (key) => key.startsWith("onUpdate:"), extend = Object.assign, remove = (arr, el) => {
  const i = arr.indexOf(el);
  i > -1 && arr.splice(i, 1);
}, hasOwnProperty$1 = Object.prototype.hasOwnProperty, hasOwn = (val, key) => hasOwnProperty$1.call(val, key), isArray = Array.isArray, isMap = (val) => toTypeString(val) === "[object Map]", isSet = (val) => toTypeString(val) === "[object Set]", isFunction = (val) => typeof val == "function", isString = (val) => typeof val == "string", isSymbol = (val) => typeof val == "symbol", isObject$1 = (val) => val !== null && typeof val == "object", isPromise = (val) => isObject$1(val) && isFunction(val.then) && isFunction(val.catch), objectToString = Object.prototype.toString, toTypeString = (value) => objectToString.call(value), toRawType = (value) => toTypeString(value).slice(8, -1), isPlainObject = (val) => toTypeString(val) === "[object Object]", isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key, isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => cache[str] || (cache[str] = fn(str));
}, camelizeRE = /-(\w)/g, camelize = cacheStringFunction((str) => str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "")), hyphenateRE = /\B([A-Z])/g, hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
), capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
), toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize(str)}` : ""
), hasChanged = (value, oldValue) => !Object.is(value, oldValue), invokeArrayFns = (fns, arg) => {
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
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => _globalThis || (_globalThis = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i], normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized)
        for (const key in normalized)
          res[key] = normalized[key];
    }
    return res;
  } else {
    if (isString(value))
      return value;
    if (isObject$1(value))
      return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g, propertyDelimiterRE = /:([^]+)/, styleCommentRE = /\/\*[^]*?\*\//g;
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
  if (isString(value))
    res = value;
  else if (isArray(value))
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      normalized && (res += normalized + " ");
    }
  else if (isObject$1(value))
    for (const name in value)
      value[name] && (res += name + " ");
  return res.trim();
}
const specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val), replacer = (_key, val) => val && val.__v_isRef ? replacer(_key, val.value) : isMap(val) ? {
  [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => (entries[`${key} =>`] = val2, entries), {})
} : isSet(val) ? {
  [`Set(${val.size})`]: [...val.values()]
} : isObject$1(val) && !isArray(val) && !isPlainObject(val) ? String(val) : val;
let activeEffectScope;
class EffectScope {
  constructor(detached = !1) {
    this.detached = detached, this._active = !0, this.effects = [], this.cleanups = [], this.parent = activeEffectScope, !detached && activeEffectScope && (this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
      this
    ) - 1);
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
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++)
      deps[i].delete(effect2);
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
  for (const effect2 of effects)
    effect2.computed && triggerEffect(effect2);
  for (const effect2 of effects)
    effect2.computed || triggerEffect(effect2);
}
function triggerEffect(effect2, debuggerEventExtraInfo) {
  (effect2 !== activeEffect || effect2.allowRecurse) && (effect2.scheduler ? effect2.scheduler() : effect2.run());
}
function getDepFromReactive(object, key) {
  var _a;
  return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
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
    return (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) || (isReadonly2 || track(target, "get", key), shallow) ? res : isRef(res) ? targetIsArray && isIntegerKey(key) ? res : res.value : isObject$1(res) ? isReadonly2 ? readonly(res) : reactive(res) : res;
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
}, shallowReactiveHandlers = /* @__PURE__ */ extend(
  {},
  mutableHandlers,
  {
    get: shallowGet,
    set: shallowSet
  }
), toShallow = (value) => value, getProto = (v) => Reflect.getPrototypeOf(v);
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
    return !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    ), {
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
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
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
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      !1,
      !1
    ), readonlyInstrumentations2[method] = createIterableMethod(
      method,
      !0,
      !1
    ), shallowInstrumentations2[method] = createIterableMethod(
      method,
      !1,
      !0
    ), shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      !0,
      !0
    );
  }), [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => key === "__v_isReactive" ? !isReadonly2 : key === "__v_isReadonly" ? isReadonly2 : key === "__v_raw" ? target : Reflect.get(
    hasOwn(instrumentations, key) && key in target ? instrumentations : target,
    key,
    receiver
  );
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
  return isReadonly(target) ? target : createReactiveObject(
    target,
    !1,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    !1,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    !0,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target) || target.__v_raw && !(isReadonly2 && target.__v_isReactive))
    return target;
  const existingProxy = proxyMap.get(target);
  if (existingProxy)
    return existingProxy;
  const targetType = getTargetType(target);
  if (targetType === 0)
    return target;
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
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
const toReactive = (value) => isObject$1(value) ? reactive(value) : value, toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
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
class CustomRefImpl {
  constructor(factory) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: get2, set: set2 } = factory(
      () => trackRefValue(this),
      () => triggerRefValue(this)
    );
    this._get = get2, this._set = set2;
  }
  get value() {
    return this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object, this._key = _key, this._defaultValue = _defaultValue, this.__v_isRef = !0;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function toRef$1(source, key, defaultValue) {
  return isRef(source) ? source : isFunction(source) ? new GetterRefImpl(source) : isObject$1(source) && arguments.length > 1 ? propertyToRef(source, key, defaultValue) : ref(source);
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(
    source,
    key,
    defaultValue
  );
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new ReactiveEffect(getter, () => {
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
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
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
  (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) && (job.id == null ? queue.push(job) : queue.splice(findInsertionIndex(job.id), 0, job), queueFlush());
}
function queueFlush() {
  !isFlushing && !isFlushPending && (isFlushPending = !0, currentFlushPromise = resolvedPromise.then(flushJobs));
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  i > flushIndex && queue.splice(i, 1);
}
function queuePostFlushCb(cb) {
  isArray(cb) ? pendingPostFlushCbs.push(...cb) : (!activePostFlushCbs || !activePostFlushCbs.includes(
    cb,
    cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
  )) && pendingPostFlushCbs.push(cb), queueFlush();
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
      job && job.active !== !1 && callWithErrorHandling(job, null, 14);
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
    trim && (args = rawArgs.map((a) => isString(a) ? a.trim() : a)), number && (args = rawArgs.map(looseToNumber));
  }
  let handlerName, handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  !handler && isModelListener2 && (handler = props[handlerName = toHandlerKey(hyphenate(event))]), handler && callWithAsyncErrorHandling(
    handler,
    instance,
    6,
    args
  );
  const onceHandler = props[handlerName + "Once"];
  if (onceHandler) {
    if (!instance.emitted)
      instance.emitted = {};
    else if (instance.emitted[handlerName])
      return;
    instance.emitted[handlerName] = !0, callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
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
  return !raw && !hasExtends ? (isObject$1(comp) && cache.set(comp, null), null) : (isArray(raw) ? raw.forEach((key) => normalized[key] = null) : extend(normalized, raw), isObject$1(comp) && cache.set(comp, normalized), normalized);
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
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  let result, fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(
        render.call(
          proxyToUse,
          proxyToUse,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      ), fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      result = normalizeVNode(
        render2.length > 1 ? render2(
          props,
          { attrs, slots, emit: emit2 }
        ) : render2(
          props,
          null
          /* we know it doesn't need it */
        )
      ), fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0, handleError(err, instance, 1), result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== !1) {
    const keys = Object.keys(fallthroughAttrs), { shapeFlag } = root;
    keys.length && shapeFlag & 7 && (propsOptions && keys.some(isModelListener) && (fallthroughAttrs = filterModelListeners(
      fallthroughAttrs,
      propsOptions
    )), root = cloneVNode(root, fallthroughAttrs));
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
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(
    effect,
    null,
    { flush: "post" }
  );
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  var _a;
  const instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
  let getter, forceTrigger = !1, isMultiSource = !1;
  if (isRef(source) ? (getter = () => source.value, forceTrigger = isShallow(source)) : isReactive(source) ? (getter = () => source, deep = !0) : isArray(source) ? (isMultiSource = !0, forceTrigger = source.some((s) => isReactive(s) || isShallow(s)), getter = () => source.map((s) => {
    if (isRef(s))
      return s.value;
    if (isReactive(s))
      return traverse(s);
    if (isFunction(s))
      return callWithErrorHandling(s, instance, 2);
  })) : isFunction(source) ? cb ? getter = () => callWithErrorHandling(source, instance, 2) : getter = () => {
    if (!(instance && instance.isUnmounted))
      return cleanup && cleanup(), callWithAsyncErrorHandling(
        source,
        instance,
        3,
        [onCleanup]
      );
  } : getter = NOOP, cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup, onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
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
        (deep || forceTrigger || (isMultiSource ? newValue.some(
          (v, i) => hasChanged(v, oldValue[i])
        ) : hasChanged(newValue, oldValue))) && (cleanup && cleanup(), callWithAsyncErrorHandling(cb, instance, 3, [
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
  cb ? immediate ? job() : oldValue = effect.run() : flush === "post" ? queuePostRenderEffect(
    effect.run.bind(effect),
    instance && instance.suspense
  ) : effect.run();
  const unwatch = () => {
    effect.stop(), instance && instance.scope && remove(instance.scope.effects, effect);
  };
  return ssrCleanup && ssrCleanup.push(unwatch), unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy, getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
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
  if (!isObject$1(value) || value.__v_skip || (seen2 = seen2 || /* @__PURE__ */ new Set(), seen2.has(value)))
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
const TransitionHookValidator = [Function, Array], BaseTransitionPropsValidators = {
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
}, BaseTransitionImpl = {
  name: "BaseTransition",
  props: BaseTransitionPropsValidators,
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
      const enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree, oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = !1;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        prevTransitionKey === void 0 ? prevTransitionKey = key : key !== prevTransitionKey && (prevTransitionKey = key, transitionKeyChanged = !0);
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        if (setTransitionHooks(oldInnerChild, leavingHooks), mode === "out-in")
          return state.isLeaving = !0, leavingHooks.afterLeave = () => {
            state.isLeaving = !1, instance.update.active !== !1 && instance.update();
          }, emptyPlaceholder(child);
        mode === "in-out" && innerChild.type !== Comment && (leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
          const leavingVNodesCache = getLeavingNodesForType(
            state,
            oldInnerChild
          );
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
  const {
    appear,
    mode,
    persisted = !1,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props, key = String(vnode.key), leavingVNodesCache = getLeavingNodesForType(state, vnode), callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
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
    child.type === Fragment ? (child.patchFlag & 128 && keyedFragmentCount++, ret = ret.concat(
      getTransitionRawChildren(child.children, keepComment, key)
    )) : (keepComment || child.type !== Comment) && ret.push(key != null ? cloneVNode(child, { key }) : child);
  }
  if (keyedFragmentCount > 1)
    for (let i = 0; i < ret.length; i++)
      ret[i].patchFlag = -2;
  return ret;
}
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
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
), onBeforeMount = createHook("bm"), onMounted = createHook("m"), onBeforeUpdate = createHook("bu"), onUpdated = createHook("u"), onBeforeUnmount = createHook("bum"), onUnmounted = createHook("um"), onServerPrefetch = createHook("sp"), onRenderTriggered = createHook(
  "rtg"
), onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, !0, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  return isString(component) ? resolveAsset(COMPONENTS, component, !1) || component : component || NULL_DYNAMIC_COMPONENT;
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
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++)
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
  } else if (typeof source == "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++)
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
  } else if (isObject$1(source))
    if (source[Symbol.iterator])
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
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
  );
  return !noSlotted && rendered.scopeId && (rendered.slotScopeIds = [rendered.scopeId + "-s"]), slot && slot._c && (slot._d = !0), rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => isVNode(child) ? !(child.type === Comment || child.type === Fragment && !ensureValidVNode(child.children)) : !0) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key in obj)
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  return ret;
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
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    return descriptor.get != null ? target._.accessCache[key] = 0 : hasOwn(descriptor, "value") && this.set(target, key, descriptor.value, null), Reflect.defineProperty(target, key, descriptor);
  }
};
function useSlots() {
  return getContext().slots;
}
function getContext() {
  const i = getCurrentInstance();
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = !0;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance), publicThis = instance.proxy, ctx = instance.ctx;
  shouldCacheAccess = !1, options.beforeCreate && callHook$1(options.beforeCreate, instance, "bc");
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
  if (injectOptions && resolveInjections(injectOptions, ctx, null), methods)
    for (const key in methods) {
      const methodHandler = methods[key];
      isFunction(methodHandler) && (ctx[key] = methodHandler.bind(publicThis));
    }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    isObject$1(data) && (instance.data = reactive(data));
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
  created && callHook$1(created, instance, "c");
  function registerLifecycleHook(register, hook) {
    isArray(hook) ? hook.forEach((_hook) => register(_hook.bind(publicThis))) : hook && register(hook.bind(publicThis));
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
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  isArray(injectOptions) && (injectOptions = normalizeInject(injectOptions));
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    isObject$1(opt) ? "default" in opt ? injected = inject(
      opt.from || key,
      opt.default,
      !0
      /* treat default function as factory */
    ) : injected = inject(opt.from || key) : injected = inject(opt), isRef(injected) ? Object.defineProperty(ctx, key, {
      enumerable: !0,
      configurable: !0,
      get: () => injected.value,
      set: (v) => injected.value = v
    }) : ctx[key] = injected;
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    isFunction(handler) && watch(getter, handler);
  } else if (isFunction(raw))
    watch(getter, raw.bind(publicThis));
  else if (isObject$1(raw))
    if (isArray(raw))
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      isFunction(handler) && watch(getter, handler, raw);
    }
}
function resolveMergedOptions(instance) {
  const base = instance.type, { mixins, extends: extendsOptions } = base, {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext, cached = cache.get(base);
  let resolved;
  return cached ? resolved = cached : !globalMixins.length && !mixins && !extendsOptions ? resolved = base : (resolved = {}, globalMixins.length && globalMixins.forEach(
    (m) => mergeOptions(resolved, m, optionMergeStrategies, !0)
  ), mergeOptions(resolved, base, optionMergeStrategies)), isObject$1(base) && cache.set(base, resolved), resolved;
}
function mergeOptions(to, from, strats, asMixin = !1) {
  const { mixins, extends: extendsOptions } = from;
  extendsOptions && mergeOptions(to, extendsOptions, strats, !0), mixins && mixins.forEach(
    (m) => mergeOptions(to, m, strats, !0)
  );
  for (const key in from)
    if (!(asMixin && key === "expose")) {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
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
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
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
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  return to ? isArray(to) && isArray(from) ? [.../* @__PURE__ */ new Set([...to, ...from])] : extend(
    /* @__PURE__ */ Object.create(null),
    normalizePropsOrEmits(to),
    normalizePropsOrEmits(from ?? {})
  ) : from;
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
    isFunction(rootComponent) || (rootComponent = extend({}, rootComponent)), rootProps != null && !isObject$1(rootProps) && (rootProps = null);
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
          const vnode = createVNode(
            rootComponent,
            rootProps
          );
          return vnode.appContext = context, isHydrate && hydrate ? hydrate(vnode, rootContainer) : render(vnode, rootContainer, isSVG), isMounted = !0, app._container = rootContainer, rootContainer.__vue_app__ = app, getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        isMounted && (render(null, app._container), delete app._container.__vue_app__);
      },
      provide(key, value) {
        return context.provides[key] = value, app;
      },
      runWithContext(fn) {
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = null;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    parentProvides === provides && (provides = currentInstance.provides = Object.create(parentProvides)), provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = !1) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides)
      return provides[key];
    if (arguments.length > 1)
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
  }
}
function initProps(instance, rawProps, isStateful, isSSR = !1) {
  const props = {}, attrs = {};
  def(attrs, InternalObjectKey, 1), instance.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0])
    key in props || (props[key] = void 0);
  isStateful ? instance.props = isSSR ? props : shallowReactive(props) : instance.type.props ? instance.props = props : instance.props = attrs, instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance, rawCurrentProps = toRaw(props), [options] = instance.propsOptions;
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
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
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
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        key in propsDefaults ? value = propsDefaults[key] : (setCurrentInstance(instance), value = propsDefaults[key] = defaultValue.call(
          null,
          props
        ), unsetCurrentInstance());
      } else
        value = defaultValue;
    }
    opt[
      0
      /* shouldCast */
    ] && (isAbsent && !hasDefault ? value = !1 : opt[
      1
      /* shouldCastTrue */
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
    return isObject$1(comp) && cache.set(comp, EMPTY_ARR), EMPTY_ARR;
  if (isArray(raw))
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      validatePropName(normalizedKey) && (normalized[normalizedKey] = EMPTY_OBJ);
    }
  else if (raw)
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key], prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type), stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1, prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex, (booleanIndex > -1 || hasOwn(prop, "default")) && needCastKeys.push(normalizedKey);
        }
      }
    }
  const res = [normalized, needCastKeys];
  return isObject$1(comp) && cache.set(comp, res), res;
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
    type ? (instance.slots = toRaw(children), def(children, "_", type)) : normalizeObjectSlots(
      children,
      instance.slots = {}
    );
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
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = !1) {
  if (isArray(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount)
    return;
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el, value = isUnmount ? null : refValue, { i: owner, r: ref2 } = rawRef, oldRef = oldRawRef && oldRawRef.r, refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs, setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2 && (isString(oldRef) ? (refs[oldRef] = null, hasOwn(setupState, oldRef) && (setupState[oldRef] = null)) : isRef(oldRef) && (oldRef.value = null)), isFunction(ref2))
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  else {
    const _isString = isString(ref2), _isRef = isRef(ref2);
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
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals, hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container), flushPostFlushCbs(), container._vnode = vnode;
      return;
    }
    hasMismatch = !1, hydrateNode(container.firstChild, vnode, null, null, null), flushPostFlushCbs(), container._vnode = vnode, hasMismatch && console.error("Hydration completed but contains mismatches.");
  }, hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = !1) => {
    const isFragmentStart = isComment(node) && node.data === "[", onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    ), { type, ref: ref2, shapeFlag, patchFlag } = vnode;
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
        isFragmentStart ? nextNode = hydrateFragment(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        ) : nextNode = onMismatch();
        break;
      default:
        if (shapeFlag & 1)
          domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase() ? nextNode = onMismatch() : nextNode = hydrateElement(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVGContainer(container),
            optimized
          ), nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node), nextNode && isComment(nextNode) && nextNode.data === "teleport end" && (nextNode = nextSibling(nextNode)), isAsyncWrapper(vnode)) {
            let subTree;
            isFragmentStart ? (subTree = createVNode(Fragment), subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild) : subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div"), subTree.el = node, vnode.component.subTree = subTree;
          }
        } else
          shapeFlag & 64 ? domType !== 8 ? nextNode = onMismatch() : nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateChildren
          ) : shapeFlag & 128 && (nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            isSVGContainer(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          ));
    }
    return ref2 != null && setRef(ref2, null, parentSuspense, vnode), nextNode;
  }, hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode, forcePatchValue = type === "input" && dirs || type === "option";
    if (forcePatchValue || patchFlag !== -1) {
      if (dirs && invokeDirectiveHook(vnode, null, parentComponent, "created"), props)
        if (forcePatchValue || !optimized || patchFlag & 48)
          for (const key in props)
            (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) && patchProp2(
              el,
              key,
              null,
              props[key],
              !1,
              void 0,
              parentComponent
            );
        else
          props.onClick && patchProp2(
            el,
            "onClick",
            null,
            props.onClick,
            !1,
            void 0,
            parentComponent
          );
      let vnodeHooks;
      if ((vnodeHooks = props && props.onVnodeBeforeMount) && invokeVNodeHook(vnodeHooks, parentComponent, vnode), dirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeMount"), ((vnodeHooks = props && props.onVnodeMounted) || dirs) && queueEffectWithSuspense(() => {
        vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode), dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense), shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
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
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      else {
        if (vnode.type === Text && !vnode.children)
          continue;
        hasMismatch = !0, patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVGContainer(container),
          slotScopeIds
        );
      }
    }
    return node;
  }, hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    fragmentSlotScopeIds && (slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds);
    const container = parentNode(node), next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
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
    return remove2(node), patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      isSVGContainer(container),
      slotScopeIds
    ), next;
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
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options, patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = !1, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
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
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        break;
      default:
        shapeFlag & 1 ? processElement(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        ) : shapeFlag & 6 ? processComponent(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        ) : (shapeFlag & 64 || shapeFlag & 128) && type.process(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized,
          internals
        );
    }
    ref2 != null && parentComponent && setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
  }, processText = (n1, n2, container, anchor) => {
    if (n1 == null)
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    else {
      const el = n2.el = n1.el;
      n2.children !== n1.children && hostSetText(el, n2.children);
    }
  }, processCommentNode = (n1, n2, container, anchor) => {
    n1 == null ? hostInsert(
      n2.el = hostCreateComment(n2.children || ""),
      container,
      anchor
    ) : n2.el = n1.el;
  }, mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      isSVG,
      n2.el,
      n2.anchor
    );
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
    isSVG = isSVG || n2.type === "svg", n1 == null ? mountElement(
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    ) : patchElement(
      n1,
      n2,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    );
  }, mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el, vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    if (el = vnode.el = hostCreateElement(
      vnode.type,
      isSVG,
      props && props.is,
      props
    ), shapeFlag & 8 ? hostSetElementText(el, vnode.children) : shapeFlag & 16 && mountChildren(
      vnode.children,
      el,
      null,
      parentComponent,
      parentSuspense,
      isSVG && type !== "foreignObject",
      slotScopeIds,
      optimized
    ), dirs && invokeDirectiveHook(vnode, null, parentComponent, "created"), setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent), props) {
      for (const key in props)
        key !== "value" && !isReservedProp(key) && hostPatchProp(
          el,
          key,
          null,
          props[key],
          isSVG,
          vnode.children,
          parentComponent,
          parentSuspense,
          unmountChildren
        );
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
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  }, mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  }, patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ, newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, !1), (vnodeHook = newProps.onVnodeBeforeUpdate) && invokeVNodeHook(vnodeHook, parentComponent, n2, n1), dirs && invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate"), parentComponent && toggleRecurse(parentComponent, !0);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren ? patchBlockChildren(
      n1.dynamicChildren,
      dynamicChildren,
      el,
      parentComponent,
      parentSuspense,
      areChildrenSVG,
      slotScopeIds
    ) : optimized || patchChildren(
      n1,
      n2,
      el,
      null,
      parentComponent,
      parentSuspense,
      areChildrenSVG,
      slotScopeIds,
      !1
    ), patchFlag > 0) {
      if (patchFlag & 16)
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          isSVG
        );
      else if (patchFlag & 2 && oldProps.class !== newProps.class && hostPatchProp(el, "class", null, newProps.class, isSVG), patchFlag & 4 && hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG), patchFlag & 8) {
        const propsToUpdate = n2.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          const key = propsToUpdate[i], prev = oldProps[key], next = newProps[key];
          (next !== prev || key === "value") && hostPatchProp(
            el,
            key,
            prev,
            next,
            isSVG,
            n1.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      patchFlag & 1 && n1.children !== n2.children && hostSetElementText(el, n2.children);
    } else
      !optimized && dynamicChildren == null && patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG
      );
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
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        !0
      );
    }
  }, patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ)
        for (const key in oldProps)
          !isReservedProp(key) && !(key in newProps) && hostPatchProp(
            el,
            key,
            oldProps[key],
            null,
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key], prev = oldProps[key];
        next !== prev && key !== "value" && hostPatchProp(
          el,
          key,
          prev,
          next,
          isSVG,
          vnode.children,
          parentComponent,
          parentSuspense,
          unmountChildren
        );
      }
      "value" in newProps && hostPatchProp(el, "value", oldProps.value, newProps.value);
    }
  }, processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText(""), fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    fragmentSlotScopeIds && (slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds), n1 == null ? (hostInsert(fragmentStartAnchor, container, anchor), hostInsert(fragmentEndAnchor, container, anchor), mountChildren(
      n2.children,
      container,
      fragmentEndAnchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )) : patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    n1.dynamicChildren ? (patchBlockChildren(
      n1.dynamicChildren,
      dynamicChildren,
      container,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (n2.key != null || parentComponent && n2 === parentComponent.subTree) && traverseStaticChildren(
      n1,
      n2,
      !0
      /* shallow */
    )) : patchChildren(
      n1,
      n2,
      container,
      fragmentEndAnchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    );
  }, processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds, n1 == null ? n2.shapeFlag & 512 ? parentComponent.ctx.activate(
      n2,
      container,
      anchor,
      isSVG,
      optimized
    ) : mountComponent(
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      optimized
    ) : updateComponent(n1, n2, optimized);
  }, mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode) && (instance.ctx.renderer = internals), setupComponent(instance), instance.asyncDep) {
      if (parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect), !initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    );
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
        ), next.el = nextTree.el, originNext === null && updateHOCHostEl(instance, nextTree.el), u && queuePostRenderEffect(u, parentSuspense), (vnodeHook = next.props && next.props.onVnodeUpdated) && queuePostRenderEffect(
          () => invokeVNodeHook(vnodeHook, parent, next, vnode),
          parentSuspense
        );
      } else {
        let vnodeHook;
        const { el, props } = initialVNode, { bm, m, parent } = instance, isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        if (toggleRecurse(instance, !1), bm && invokeArrayFns(bm), !isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount) && invokeVNodeHook(vnodeHook, parent, initialVNode), toggleRecurse(instance, !0), el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance), hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
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
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            isSVG
          ), initialVNode.el = subTree.el;
        }
        if (m && queuePostRenderEffect(m, parentSuspense), !isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
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
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    shapeFlag & 8 ? (prevShapeFlag & 16 && unmountChildren(c1, parentComponent, parentSuspense), c2 !== c1 && hostSetElementText(container, c2)) : prevShapeFlag & 16 ? shapeFlag & 16 ? patchKeyedChildren(
      c1,
      c2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    ) : unmountChildren(c1, parentComponent, parentSuspense, !0) : (prevShapeFlag & 8 && hostSetElementText(container, ""), shapeFlag & 16 && mountChildren(
      c2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    ));
  }, patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR, c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length, newLength = c2.length, commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
    oldLength > newLength ? unmountChildren(
      c1,
      parentComponent,
      parentSuspense,
      !0,
      !1,
      commonLength
    ) : mountChildren(
      c2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized,
      commonLength
    );
  }, patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1, e2 = l2 - 1;
    for (; i <= e1 && i <= e2; ) {
      const n1 = c1[i], n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2))
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      else
        break;
      i++;
    }
    for (; i <= e1 && i <= e2; ) {
      const n1 = c1[e1], n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2))
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      else
        break;
      e1--, e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1, anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        for (; i <= e2; )
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          ), i++;
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
        newIndex === void 0 ? unmount(prevChild, parentComponent, parentSuspense, !0) : (newIndexToOldIndexMap[newIndex - s2] = i + 1, newIndex >= maxNewIndexSoFar ? maxNewIndexSoFar = newIndex : moved = !0, patch(
          prevChild,
          c2[newIndex],
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        ), patched++);
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      for (j = increasingNewIndexSequence.length - 1, i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i, nextChild = c2[nextIndex], anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        newIndexToOldIndexMap[i] === 0 ? patch(
          null,
          nextChild,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        ) : moved && (j < 0 || i !== increasingNewIndexSequence[j] ? move(nextChild, container, anchor, 2) : j--);
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
        const { leave, delayLeave, afterLeave } = transition, remove22 = () => hostInsert(el, container, anchor), performLeave = () => {
          leave(el, () => {
            remove22(), afterLeave && afterLeave();
          });
        };
        delayLeave ? delayLeave(el, remove22, performLeave) : performLeave();
      }
    else
      hostInsert(el, container, anchor);
  }, unmount = (vnode, parentComponent, parentSuspense, doRemove = !1, optimized = !1) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
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
      shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount"), shapeFlag & 64 ? vnode.type.remove(
        vnode,
        parentComponent,
        parentSuspense,
        optimized,
        internals,
        doRemove
      ) : dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64) ? unmountChildren(
        dynamicChildren,
        parentComponent,
        parentSuspense,
        !1,
        !0
      ) : (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) && unmountChildren(children, parentComponent, parentSuspense), doRemove && remove2(vnode);
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
  return createHydrationFns && ([hydrate, hydrateNode] = createHydrationFns(
    internals
  )), {
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
  return isString(targetSelector) ? select ? select(targetSelector) : null : targetSelector;
}, TeleportImpl = {
  __isTeleport: !0,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals, disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText(""), mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor), insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector), targetAnchor = n2.targetAnchor = createText("");
      target && (insert(targetAnchor, target), isSVG = isSVG || isTargetSVG(target));
      const mount = (container2, anchor2) => {
        shapeFlag & 16 && mountChildren(
          children,
          container2,
          anchor2,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      };
      disabled ? mount(container, mainAnchor) : target && mount(target, targetAnchor);
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor, target = n2.target = n1.target, targetAnchor = n2.targetAnchor = n1.targetAnchor, wasDisabled = isTeleportDisabled(n1.props), currentContainer = wasDisabled ? container : target, currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (isSVG = isSVG || isTargetSVG(target), dynamicChildren ? (patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        currentContainer,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds
      ), traverseStaticChildren(n1, n2, !0)) : optimized || patchChildren(
        n1,
        n2,
        currentContainer,
        currentAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        !1
      ), disabled)
        wasDisabled || moveTeleport(
          n2,
          container,
          mainAnchor,
          internals,
          1
        );
      else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
        const nextTarget = n2.target = resolveTarget(
          n2.props,
          querySelector
        );
        nextTarget && moveTeleport(
          n2,
          nextTarget,
          null,
          internals,
          0
        );
      } else
        wasDisabled && moveTeleport(
          n2,
          target,
          targetAnchor,
          internals,
          1
        );
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target && hostRemove(targetAnchor), (doRemove || !isTeleportDisabled(props)) && (hostRemove(anchor), shapeFlag & 16))
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          !0,
          !!child.dynamicChildren
        );
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
      );
  isReorder && insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16)
      if (isTeleportDisabled(vnode.props))
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        ), vnode.targetAnchor = targetNode;
      else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        for (; targetAnchor; )
          if (targetAnchor = nextSibling(targetAnchor), targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor, target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        hydrateChildren(
          targetNode,
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
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
const Fragment = Symbol.for("v-fgt"), Text = Symbol.for("v-txt"), Comment = Symbol.for("v-cmt"), Static = Symbol.for("v-stc"), blockStack = [];
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
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      !0
      /* isBlock */
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === !0 : !1;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = "__vInternal", normalizeKey = ({ key }) => key ?? null, normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => (typeof ref2 == "number" && (ref2 = "" + ref2), ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null);
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
  return needFullChildrenNormalization ? (normalizeChildren(vnode, children), shapeFlag & 128 && type.normalize(vnode)) : children && (vnode.shapeFlag |= isString(children) ? 8 : 16), isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
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
    klass && !isString(klass) && (props.class = normalizeClass(klass)), isObject$1(style) && (isProxy(style) && !isArray(style) && (style = extend({}, style)), props.style = normalizeStyle(style));
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    !0
  );
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
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
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
    // to be set immediately
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
    attrsProxy: null,
    slotsProxy: null,
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
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance, globalCurrentInstanceSetters, settersKey = "__VUE_INSTANCE_SETTERS__";
(globalCurrentInstanceSetters = getGlobalThis()[settersKey]) || (globalCurrentInstanceSetters = getGlobalThis()[settersKey] = []), globalCurrentInstanceSetters.push((i) => currentInstance = i), internalSetCurrentInstance = (instance) => {
  globalCurrentInstanceSetters.length > 1 ? globalCurrentInstanceSetters.forEach((s) => s(instance)) : globalCurrentInstanceSetters[0](instance);
};
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance), instance.scope.on();
}, unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off(), internalSetCurrentInstance(null);
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
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [instance.props, setupContext]
    );
    if (resetTracking(), unsetCurrentInstance(), isPromise(setupResult)) {
      if (setupResult.then(unsetCurrentInstance, unsetCurrentInstance), isSSR)
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      instance.asyncDep = setupResult;
    } else
      handleSetupResult(instance, setupResult, isSSR);
  } else
    finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
  isFunction(setupResult) ? instance.type.__ssrInlineRender ? instance.ssrRender = setupResult : instance.render = setupResult : isObject$1(setupResult) && (instance.setupState = proxyRefs(setupResult)), finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config, { delimiters, compilerOptions: componentCompilerOptions } = Component, finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  setCurrentInstance(instance), pauseTracking(), applyOptions(instance), resetTracking(), unsetCurrentInstance();
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key) {
        return track(instance, "get", "$attrs"), target[key];
      }
    }
  ));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  return {
    get attrs() {
      return getAttrsProxy(instance);
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
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  return l === 2 ? isObject$1(propsOrChildren) && !isArray(propsOrChildren) ? isVNode(propsOrChildren) ? createVNode(type, null, [propsOrChildren]) : createVNode(type, propsOrChildren) : createVNode(type, null, propsOrChildren) : (l > 3 ? children = Array.prototype.slice.call(arguments, 2) : l === 3 && isVNode(children) && (children = [children]), createVNode(type, propsOrChildren, children));
}
const ssrContextKey = Symbol.for("v-scx"), useSSRContext = () => inject(ssrContextKey), version = "3.3.4", svgNS = "http://www.w3.org/2000/svg", doc = typeof document < "u" ? document : null, templateContainer = doc && /* @__PURE__ */ doc.createElement("template"), nodeOps = {
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
  const style = el.style, isCssString = isString(next);
  if (next && !isCssString) {
    if (prev && !isString(prev))
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
    importantRE.test(val) ? style.setProperty(
      hyphenate(prefixed),
      val.replace(importantRE, ""),
      "important"
    ) : style[prefixed] = val;
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
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    el._value = value;
    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value, newValue = value ?? "";
    oldValue !== newValue && (el.value = newValue), value == null && el.removeAttribute(key);
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
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
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
  key === "class" ? patchClass(el, nextValue, isSVG) : key === "style" ? patchStyle(el, prevValue, nextValue) : isOn(key) ? isModelListener(key) || patchEvent(el, key, prevValue, nextValue, parentComponent) : (key[0] === "." ? (key = key.slice(1), !0) : key[0] === "^" ? (key = key.slice(1), !1) : shouldSetAsProp(el, key, nextValue, isSVG)) ? patchDOMProp(
    el,
    key,
    nextValue,
    prevChildren,
    parentComponent,
    parentSuspense,
    unmountChildren
  ) : (key === "true-value" ? el._trueValue = nextValue : key === "false-value" && (el._falseValue = nextValue), patchAttr(el, key, nextValue, isSVG));
};
function shouldSetAsProp(el, key, value, isSVG) {
  return isSVG ? !!(key === "innerHTML" || key === "textContent" || key in el && nativeOnRE.test(key) && isFunction(value)) : key === "spellcheck" || key === "draggable" || key === "translate" || key === "form" || key === "list" && el.tagName === "INPUT" || key === "type" && el.tagName === "TEXTAREA" || nativeOnRE.test(key) && isString(value) ? !1 : key in el;
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
Transition.props = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  isArray(hook) ? hook.forEach((h2) => h2(...args)) : hook && hook(...args);
}, hasExplicitCallback = (hook) => hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : !1;
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps)
    key in DOMTransitionPropsValidators || (baseProps[key] = rawProps[key]);
  if (rawProps.css === !1)
    return baseProps;
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps, durations = normalizeDuration(duration), enterDuration = durations && durations[0], leaveDuration = durations && durations[1], {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps, finishEnter = (el, isAppear, done) => {
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
  if (isObject$1(duration))
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
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
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
}, keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, withKeys = (fn, modifiers) => (event) => {
  if (!("key" in event))
    return;
  const eventKey = hyphenate(event.key);
  if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey))
    return fn(event);
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
  return isString(container) ? document.querySelector(container) : container;
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
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: !0 });
    if (e.payload = err, window.dispatchEvent(e), !e.defaultPrevented)
      throw err;
  });
}, siteData = window.__VP_SITE_DATA__;
function tryOnScopeDispose(fn) {
  return getCurrentScope() ? (onScopeDispose(fn), !0) : !1;
}
function toValue(r) {
  return typeof r == "function" ? r() : unref(r);
}
const isClient = typeof window < "u" && typeof document < "u", toString = Object.prototype.toString, isObject = (val) => toString.call(val) === "[object Object]", noop = () => {
}, isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve2, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve2).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => invoke();
function pausableFilter(extendFilter = bypassFilter) {
  const isActive2 = ref(!0);
  function pause() {
    isActive2.value = !1;
  }
  function resume() {
    isActive2.value = !0;
  }
  const eventFilter = (...args) => {
    isActive2.value && extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r == "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options, { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter);
  return { stop: watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  ), pause, resume, isActive: isActive2 };
}
function tryOnMounted(fn, sync = !0) {
  getCurrentInstance() ? onMounted(fn) : sync ? fn() : nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target, events, listeners, options;
  if (typeof args[0] == "string" || Array.isArray(args[0]) ? ([events, listeners, options] = args, target = defaultWindow) : [target, events, listeners, options] = args, !target)
    return noop;
  Array.isArray(events) || (events = [events]), Array.isArray(listeners) || (listeners = [listeners]);
  const cleanups = [], cleanup = () => {
    cleanups.forEach((fn) => fn()), cleanups.length = 0;
  }, register = (el, event, listener, options2) => (el.addEventListener(event, listener, options2), () => el.removeEventListener(event, listener, options2)), stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      if (cleanup(), !el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => listeners.map((listener) => register(el, event, listener, optionsClone)))
      );
    },
    { immediate: !0, flush: "post" }
  ), stop = () => {
    stopWatch(), cleanup();
  };
  return tryOnScopeDispose(stop), stop;
}
function useMounted() {
  const isMounted = ref(!1);
  return getCurrentInstance() && onMounted(() => {
    isMounted.value = !0;
  }), isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => (isMounted.value, !!callback()));
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options, isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia == "function");
  let mediaQuery;
  const matches = ref(!1), handler = (event) => {
    matches.value = event.matches;
  }, cleanup = () => {
    mediaQuery && ("removeEventListener" in mediaQuery ? mediaQuery.removeEventListener("change", handler) : mediaQuery.removeListener(handler));
  }, stopWatch = watchEffect(() => {
    isSupported.value && (cleanup(), mediaQuery = window2.matchMedia(toValue(query)), "addEventListener" in mediaQuery ? mediaQuery.addEventListener("change", handler) : mediaQuery.addListener(handler), matches.value = mediaQuery.matches);
  });
  return tryOnScopeDispose(() => {
    stopWatch(), cleanup(), mediaQuery = void 0;
  }), matches;
}
const _global = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, globalKey = "__vueuse_ssr_handlers__", handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  return globalKey in _global || (_global[globalKey] = _global[globalKey] || {}), _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit == "boolean" ? "boolean" : typeof rawInit == "string" ? "string" : typeof rawInit == "object" ? "object" : Number.isNaN(rawInit) ? "any" : "number";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
}, customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = !0,
    listenToStorageChanges = !0,
    writeDefaults = !0,
    mergeDefaults = !1,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options, data = (shallow ? shallowRef : ref)(defaults);
  if (!storage)
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  if (!storage)
    return data;
  const rawInit = toValue(defaults), type = guessSerializerType(rawInit), serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type], { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  return window2 && listenToStorageChanges && (useEventListener(window2, "storage", update), useEventListener(window2, customStorageEventName, updateFromCustomEvent)), update(), data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else {
        const serialized = serializer.write(v), oldValue = storage.getItem(key);
        oldValue !== serialized && (storage.setItem(key, serialized), window2 && window2.dispatchEvent(new CustomEvent(customStorageEventName, {
          detail: {
            key,
            oldValue,
            newValue: serialized,
            storageArea: storage
          }
        })));
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null)
      return writeDefaults && rawInit !== null && storage.setItem(key, serializer.write(rawInit)), rawInit;
    if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      return typeof mergeDefaults == "function" ? mergeDefaults(value, rawInit) : type === "object" && !Array.isArray(value) ? { ...rawInit, ...value } : value;
    } else
      return typeof rawValue != "string" ? rawValue : serializer.read(rawValue);
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (!(event && event.storageArea !== storage)) {
      if (event && event.key == null) {
        data.value = rawInit;
        return;
      }
      if (!(event && event.key !== key)) {
        pauseWatch();
        try {
          (event == null ? void 0 : event.newValue) !== serializer.write(data.value) && (data.value = read(event));
        } catch (e) {
          onError(e);
        } finally {
          event ? nextTick(resumeWatch) : resumeWatch();
        }
      }
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = !0,
    storageRef,
    emitAuto,
    disableTransition = !0
  } = options, modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  }, preferredDark = usePreferredDark({ window: window2 }), system = computed(() => preferredDark.value ? "dark" : "light"), store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges })), state = computed(() => store.value === "auto" ? system.value : store.value), updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 == "string" ? window2 == null ? void 0 : window2.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window2.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString)), window2.document.head.appendChild(style);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          current.includes(v) ? el.classList.add(v) : el.classList.remove(v);
        });
      } else
        el.setAttribute(attribute2, value);
      disableTransition && (window2.getComputedStyle(style).opacity, document.head.removeChild(style));
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    options.onChanged ? options.onChanged(mode, defaultOnChanged) : defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: !0 }), tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch {
    return auto;
  }
}
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = ""
  } = options, mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a;
      options.onChanged ? (_a = options.onChanged) == null || _a.call(options, mode2 === "dark", defaultHandler, mode2) : defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  return computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      mode.system.value === modeVal ? mode.value = "auto" : mode.value = modeVal;
    }
  });
}
function resolveElement(el) {
  return typeof Window < "u" && el instanceof Window ? el.document.documentElement : typeof Document < "u" && el instanceof Document ? el.documentElement : el;
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight)
    return !0;
  {
    const parent = ele.parentNode;
    return !parent || parent.tagName === "BODY" ? !1 : checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event, _target = e.target;
  return checkOverflowScroll(_target) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}
function useScrollLock(element, initialState = !1) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null, initialOverflow;
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      initialOverflow = ele.style.overflow, isLocked.value && (ele.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    !el || isLocked.value || (isIOS && (stopTouchMoveListener = useEventListener(
      el,
      "touchmove",
      (e) => {
        preventDefault(e);
      },
      { passive: !1 }
    )), el.style.overflow = "hidden", isLocked.value = !0);
  }, unlock = () => {
    const el = resolveElement(toValue(element));
    !el || !isLocked.value || (isIOS && (stopTouchMoveListener == null || stopTouchMoveListener()), el.style.overflow = initialOverflow, isLocked.value = !1);
  };
  return tryOnScopeDispose(unlock), computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      v ? lock() : unlock();
    }
  });
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow } = options;
  if (!window2)
    return {
      x: ref(0),
      y: ref(0)
    };
  const x = ref(window2.scrollX), y = ref(window2.scrollY);
  return useEventListener(
    window2,
    "scroll",
    () => {
      x.value = window2.scrollX, y.value = window2.scrollY;
    },
    {
      capture: !1,
      passive: !0
    }
  ), { x, y };
}
const EXTERNAL_URL_RE = /^[a-z]+:/i, APPEARANCE_KEY = "vitepress-theme-appearance", HASH_RE = /#.*$/, EXT_RE = /(index)?\.(md|html)$/, inBrowser = typeof document < "u", notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: !1, layout: "page" },
  lastUpdated: 0,
  isNotFound: !0
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
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, !0)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
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
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath)), appearance = site.value.appearance, isDark = appearance === "force-dark" ? ref(!0) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance == "string" ? appearance : "auto",
    ...typeof appearance == "object" ? appearance : {}
  }) : ref(!1);
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data)
    throw new Error("vitepress data not properly injected in app");
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  if (pagePath = decodeURIComponent(pagePath), pagePath = pagePath.replace(/\/$/, "/index"), inBrowser) {
    const base = "/";
    pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
    let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
    if (pageHash || (pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md", pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()]), !pageHash)
      return null;
    pagePath = `${base}assets/${pagePath}.${pageHash}.js`;
  } else
    pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn), onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
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
    var _a, _b;
    href = normalizeHref(href), await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) !== !1 && (updateHistory(href), await loadPage(href), await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href)));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = !1) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === !1)
      return;
    const targetLoc = new URL(href, fakeHost), pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page)
        throw new Error(`Page not found: ${pendingPath}`);
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
              target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
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
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href) && console.error(err), !isRetry)
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
      !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && // don't intercept if non-html extension is present
      !(extMatch && extMatch[0] !== ".html") && (e.preventDefault(), pathname === currentUrl.pathname && search === currentUrl.search ? (hash !== currentUrl.hash && (history.pushState(null, "", hash), window.dispatchEvent(new Event("hashchange"))), hash ? scrollTo(link2, hash, link2.classList.contains("header-anchor")) : (updateHistory(href), window.scrollTo(0, 0))) : go(href));
    }
  }, { capture: !0 }), window.addEventListener("popstate", (e) => {
    loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
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
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      !smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight ? window.scrollTo(0, targetTop) : window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    }, scrollOffset = siteDataRef.value.scrollOffset, offset = 0, padding = 24;
    if (typeof scrollOffset == "object" && "padding" in scrollOffset && (padding = scrollOffset.padding, scrollOffset = scrollOffset.selector), typeof scrollOffset == "number")
      offset = scrollOffset;
    else if (typeof scrollOffset == "string")
      offset = tryOffsetSelector(scrollOffset, padding);
    else if (Array.isArray(scrollOffset))
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector, padding);
        if (res) {
          offset = res;
          break;
        }
      }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10), targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  return bot < 0 ? 0 : bot + padding;
}
function updateHistory(href) {
  inBrowser && href !== normalizeHref(location.href) && (history.replaceState({ scrollPosition: window.scrollY }, document.title), history.pushState(null, "", href));
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  return url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1"), siteDataRef.value.cleanUrls ? url.pathname = url.pathname.replace(/\.html$/, "") : !url.pathname.endsWith("/") && !url.pathname.endsWith(".html") && (url.pathname += ".html"), url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn()), Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute(), { site } = useData();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
}), ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(!1);
    return onMounted(() => {
      show.value = !0;
    }), () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  inBrowser && window.addEventListener("click", (e) => {
    var _a;
    const el = e.target;
    if (el.matches(".vp-code-group input")) {
      const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
      if (!group)
        return;
      const i = Array.from(group.querySelectorAll("input")).indexOf(el);
      if (i < 0)
        return;
      const blocks = group.querySelector(".blocks");
      if (!blocks)
        return;
      const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
      if (!current)
        return;
      const next = blocks.children[i];
      if (!next || current === next)
        return;
      current.classList.remove("active"), next.classList.add("active");
      const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
      label == null || label.scrollIntoView({ block: "nearest" });
    }
  });
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement, sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
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
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadElements = [], isFirstUpdate = !0;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = !1;
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      matchedIndex !== -1 ? delete newElements[matchedIndex] : (oldEl == null || oldEl.remove(), delete managedHeadElements[oldIndex]);
    }), newElements.forEach((el) => el && document.head.appendChild(el)), managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data, siteData2 = siteDataByRouteRef.value, pageDescription = pageData && pageData.description, frontmatterHead = pageData && pageData.frontmatter.head || [], title = createTitle(siteData2, pageData);
    title !== document.title && (document.title = title);
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector("meta[name=description]");
    metaDescriptionElement ? metaDescriptionElement.getAttribute("content") !== description && metaDescriptionElement.setAttribute("content", description) : createHeadElement(["meta", { name: "description", content: description }]), updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs)
    el.setAttribute(key, attrs[key]);
  return innerHTML && (el.innerHTML = innerHTML), tag === "script" && !attrs.async && (el.async = !1), el;
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
            pageChunkPath && doFetch(pageChunkPath);
          }
        }
      });
    }), rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI), extMatch = pathname.match(/\.\w+$/);
        extMatch && extMatch[0] !== ".html" || // only prefetch same tab navigation, since a new tab will load
        // the lean js chunk instead.
        link2.target !== "_blank" && // only prefetch inbound links
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
export {
  provide as $,
  watchPostEffect as A,
  onUpdated as B,
  resolveComponent as C,
  renderList as D,
  shallowRef as E,
  Fragment as F,
  onContentUpdated as G,
  createVNode as H,
  resolveDynamicComponent as I,
  EXTERNAL_URL_RE as J,
  useRoute as K,
  mergeProps as L,
  inject as M,
  normalizeStyle as N,
  nextTick as O,
  useWindowScroll as P,
  createStaticVNode as Q,
  readonly as R,
  __vitePreload as S,
  Transition as T,
  withDirectives as U,
  vShow as V,
  withModifiers as W,
  vModelText as X,
  Teleport as Y,
  useScrollLock as Z,
  _export_sfc as _,
  createTextVNode as a,
  withKeys as a0,
  toHandlers as a1,
  useSlots as a2,
  useUpdateHead as a3,
  RouterSymbol as a4,
  initData as a5,
  dataSymbol as a6,
  Content as a7,
  ClientOnly as a8,
  siteDataRef as a9,
  createSSRApp as aa,
  createRouter as ab,
  pathToFile as ac,
  usePrefetch as ad,
  useCopyCode as ae,
  useCodeGroups as af,
  h as ag,
  createBlock as b,
  createElementBlock as c,
  defineComponent as d,
  createCommentVNode as e,
  withBase as f,
  computed as g,
  ref as h,
  isExternal as i,
  onMounted as j,
  createBaseVNode as k,
  unref as l,
  popScopeId as m,
  normalizeClass as n,
  openBlock as o,
  pushScopeId as p,
  isActive as q,
  renderSlot as r,
  inBrowser as s,
  toDisplayString as t,
  useData as u,
  useMediaQuery as v,
  withCtx as w,
  watch as x,
  watchEffect as y,
  onUnmounted as z
};
