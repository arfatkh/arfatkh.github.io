import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_Bgp1Q2Tz.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/archive/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archive","isIndex":true,"type":"page","pattern":"^\\/archive\\/?$","segments":[[{"content":"archive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive/index.astro","pathname":"/archive","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/series/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/series","isIndex":true,"type":"page","pattern":"^\\/series\\/?$","segments":[[{"content":"series","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/series/index.astro","pathname":"/series","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/arfat/Coding/arfatkh.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://arfat.me","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/arfat/Coding/arfatkh.github.io/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/archive/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/projects/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/series/[series]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/series/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/series/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/components/blog/PostPreviewA.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/series/[series]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/components/blog/PostPreviewB.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/arfat/Coding/arfatkh.github.io/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/archive/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/archive/index@_@astro":"pages/archive.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects/[...page]@_@astro":"pages/projects/_---page_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/series/[series]/[...page]@_@astro":"pages/series/_series_/_---page_.astro.mjs","\u0000@astro-page:src/pages/series/index@_@astro":"pages/series.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CAILs-aZ.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/draft.md?astroContentCollectionEntry=true":"chunks/draft_BPnsfPUk.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_C3Rxjaef.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/hidden-post.md?astroContentCollectionEntry=true":"chunks/hidden-post_Bj2yWuDC.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_YOkl_g4F.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_DV8DmuAA.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/test-tables.md?astroContentCollectionEntry=true":"chunks/test-tables_Blgid9Us.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_CfY7nyy6.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_CpYW7IVh.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-2.md?astroContentCollectionEntry=true":"chunks/project-2_EiSTTFBo.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-3.md?astroContentCollectionEntry=true":"chunks/project-3_hahA-Pts.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-4.md?astroContentCollectionEntry=true":"chunks/project-4_CwTDJyEG.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/yts.md?astroContentCollectionEntry=true":"chunks/yts_BDRbs9uz.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/draft.md?astroPropagatedAssets":"chunks/draft_BrE4U62d.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_DYGNPlYY.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/hidden-post.md?astroPropagatedAssets":"chunks/hidden-post_CLnz8se5.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_Bhk91jeS.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_CO086hAy.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/test-tables.md?astroPropagatedAssets":"chunks/test-tables_Bk0J_qH4.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_BMY2anub.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_iiV8s7t0.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-2.md?astroPropagatedAssets":"chunks/project-2_Ctggio-T.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-3.md?astroPropagatedAssets":"chunks/project-3_BKG-wGM_.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-4.md?astroPropagatedAssets":"chunks/project-4_CybOFYBt.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/yts.md?astroPropagatedAssets":"chunks/yts_BFDRRadU.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/draft.md":"chunks/draft_B4Yh6I_x.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/first-post.md":"chunks/first-post_D1G9dnEH.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/hidden-post.md":"chunks/hidden-post_y02lf1G4.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_DVNUmG-v.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/second-post.md":"chunks/second-post_BihmyPcy.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/test-tables.md":"chunks/test-tables_B2GakmDE.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/third-post.md":"chunks/third-post_BPRxN7xH.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/blog/using-mdx.mdx":"chunks/using-mdx_Bxa7ewAf.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-2.md":"chunks/project-2_Bgv8pF9j.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-3.md":"chunks/project-3_BRCclm0w.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-4.md":"chunks/project-4_DhriXKwM.mjs","/Users/arfat/Coding/arfatkh.github.io/src/content/project/yts.md":"chunks/yts_C6meYyuF.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.DEvmU2-5.js","/astro/hoisted.js?q=1":"_astro/hoisted.DWBFCYtM.js","/astro/hoisted.js?q=0":"_astro/hoisted.-a8rPBSx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/arfat/Coding/arfatkh.github.io/dist/404.html","/file:///Users/arfat/Coding/arfatkh.github.io/dist/about/index.html","/file:///Users/arfat/Coding/arfatkh.github.io/dist/archive/index.html","/file:///Users/arfat/Coding/arfatkh.github.io/dist/rss.xml","/file:///Users/arfat/Coding/arfatkh.github.io/dist/series/index.html","/file:///Users/arfat/Coding/arfatkh.github.io/dist/tags/index.html","/file:///Users/arfat/Coding/arfatkh.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
