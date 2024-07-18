/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_234Z45VS.mjs';
import { $ as $$PostPreviewA } from '../../chunks/PostPreviewA_Btr9o_iS.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CljY7TT_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://arfat.me");
const getStaticPaths = async ({ paginate }) => {
  const allProjects = await getCollection("project", ({ data }) => {
    return data.draft !== true ;
  });
  const sortedByDateProjects = allProjects.sort((a, b) => {
    const aDate = new Date(a.data.pubDate).valueOf();
    const bDate = new Date(b.data.pubDate).valueOf();
    return bDate - aDate;
  });
  const sortedByPinned = sortedByDateProjects.sort((a, b) => {
    const aOrder = a.data.order ?? 100;
    const bOrder = b.data.order ?? 100;
    return aOrder - bOrder;
  });
  return paginate(sortedByPinned, { pageSize: 10 });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h2 class="title">Projects</h2> <ul role="list" class="space-y-2 sm:space-y-4"> ${page.data.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewA, { "post": p, "withDesc": true })}`)} </ul> </section> ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/projects/[...page].astro", void 0);
const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/projects/[...page].astro";
const $$url = "/projects/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
