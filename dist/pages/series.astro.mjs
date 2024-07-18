/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CljY7TT_.mjs';
import { $ as $$Base } from '../chunks/Base_234Z45VS.mjs';
import 'reading-time';
import { a as getUniqueWithCountByProperty } from '../chunks/frontmatter_B2LgIGvU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true ;
  });
  const series = getUniqueWithCountByProperty("series", posts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Series" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title flex font-bold text-xl items-center mb-4">
Series
</h1> <ul> ${series.map(([s, count]) => renderTemplate`<li class="my-2"> <a class="cody-link"${addAttribute(`/series/${s}`, "href")}>#${s}</a>
(${count})
</li>`)} </ul> ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/series/index.astro", void 0);
const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/series/index.astro";
const $$url = "/series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
