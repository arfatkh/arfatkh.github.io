import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_dKrzgqTF.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://arfat.me", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/draft.md": () => import('./draft_BPnsfPUk.mjs'),"/src/content/blog/first-post.md": () => import('./first-post_C3Rxjaef.mjs'),"/src/content/blog/hidden-post.md": () => import('./hidden-post_Bj2yWuDC.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_YOkl_g4F.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_DV8DmuAA.mjs'),"/src/content/blog/test-tables.md": () => import('./test-tables_Blgid9Us.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_CfY7nyy6.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_CpYW7IVh.mjs'),"/src/content/project/project-2.md": () => import('./project-2_EiSTTFBo.mjs'),"/src/content/project/project-3.md": () => import('./project-3_hahA-Pts.mjs'),"/src/content/project/project-4.md": () => import('./project-4_CwTDJyEG.mjs'),"/src/content/project/yts.md": () => import('./yts_BDRbs9uz.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"draft":"/src/content/blog/draft.md","hidden-post":"/src/content/blog/hidden-post.md","first-post":"/src/content/blog/first-post.md","test-tables":"/src/content/blog/test-tables.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx","second-post":"/src/content/blog/second-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md"}},"project":{"type":"content","entries":{"project-2":"/src/content/project/project-2.md","project-3":"/src/content/project/project-3.md","project-4":"/src/content/project/project-4.md","yts":"/src/content/project/yts.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/draft.md": () => import('./draft_BrE4U62d.mjs'),"/src/content/blog/first-post.md": () => import('./first-post_DYGNPlYY.mjs'),"/src/content/blog/hidden-post.md": () => import('./hidden-post_CLnz8se5.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_Bhk91jeS.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_CO086hAy.mjs'),"/src/content/blog/test-tables.md": () => import('./test-tables_Bk0J_qH4.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_BMY2anub.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_iiV8s7t0.mjs'),"/src/content/project/project-2.md": () => import('./project-2_Ctggio-T.mjs'),"/src/content/project/project-3.md": () => import('./project-3_BKG-wGM_.mjs'),"/src/content/project/project-4.md": () => import('./project-4_CybOFYBt.mjs'),"/src/content/project/yts.md": () => import('./yts_BFDRRadU.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
