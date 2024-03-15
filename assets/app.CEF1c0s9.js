function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { j as inBrowser, ag as useUpdateHead, ah as RouterSymbol, ai as initData, aj as dataSymbol, ak as Content, al as ClientOnly, am as siteDataRef, an as createSSRApp, ao as createRouter, ap as pathToFile, Y as __vitePreload, d as defineComponent, u as useData, l as onMounted, z as watchEffect, aq as usePrefetch, ar as useCopyCode, as as useCodeGroups, at as h } from "./chunks/framework.DHk-hcUK.js";
import { t as theme } from "./chunks/theme.CUyPuuID.js";
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        base.enhanceApp && await base.enhanceApp(ctx), theme2.enhanceApp && await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(theme), VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData();
    return onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value, document.documentElement.dir = dir.value;
      });
    }), site.value.router.prefetchLinks && usePrefetch(), useCopyCode(), useCodeGroups(), Theme.setup && Theme.setup(), () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = !0;
  const router = newRouter(), app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  return app.provide(dataSymbol, data), app.component("Content", Content), app.component("ClientOnly", ClientOnly), Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  }), Theme.enhanceApp && await Theme.enhanceApp({
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
    let pageFilePath = pathToFile(path), pageModule = null;
    return pageFilePath && (isInitialPageLoad && (initialPath = pageFilePath), (isInitialPageLoad || initialPath === pageFilePath) && (pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js")), pageModule = __vitePreload(() => import(
      /*@vite-ignore*/
      pageFilePath
    ), __vite__mapDeps([]))), inBrowser && (isInitialPageLoad = !1), pageModule;
  }, Theme.NotFound);
}
inBrowser && createApp().then(({ app, router, data }) => {
  router.go().then(() => {
    useUpdateHead(router.route, data.site), app.mount("#app");
  });
});
export {
  createApp
};
