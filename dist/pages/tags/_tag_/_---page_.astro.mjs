/* empty css                                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../chunks/Base_234Z45VS.mjs';
import 'reading-time';
import { g as getUniqueTags } from '../../../chunks/tags_PLAQJ566.mjs';
import { g as getAllPosts, s as sortMDByDate, c as getPostsByTag } from '../../../chunks/post_DcQnnQEM.mjs';
import { $ as $$PostPreviewA } from '../../../chunks/PostPreviewA_Btr9o_iS.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_C_OL9y13.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://arfat.me");
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPostsByDate);
  return uniqueTags.flatMap((tag) => {
    const filteredPosts = getPostsByTag(tag, allPostsByDate);
    return paginate(filteredPosts, {
      params: { tag },
      pageSize: 10
    });
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  const meta = {
    title: `Tag: ${tag}`,
    description: `View all posts with the tag - ${tag}`
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        url: page.url.prev,
        text: `\u2190 Previous Tags`
      }
    },
    ...page.url.next && {
      nextUrl: {
        url: page.url.next,
        text: `Next Tags \u2192`
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": meta.title, "description": meta.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title flex items-center"> <a href="/tags/" class="text-accent sm:hover:underline">Tags</a> <span class="me-3 ms-2">→</span> <span>#${tag}</span> </h1> <ul class="flex flex-col gap-4"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewA, { "post": post, "withDesc": true })}`)} </ul> ${renderComponent($$result2, "Pagination", $$Pagination, { ...paginationProps })} ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/tags/[tag]/[...page].astro", void 0);

const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
