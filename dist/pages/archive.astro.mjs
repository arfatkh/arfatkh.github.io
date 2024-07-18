/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import 'reading-time';
import { g as getAllPosts, s as sortMDByDate } from '../chunks/post_DcQnnQEM.mjs';
import { $ as $$Base } from '../chunks/Base_234Z45VS.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_uD7rdcie.mjs';
import { s as siteConfig } from '../chunks/consts_BLxkOGPb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts, "ascending");
  const getGroupsByYear = (posts) => {
    const initialValue = {};
    return posts.reduce(
      (groups, p) => {
        const date = new Date(p.data.pubDate);
        const year = date.getFullYear().toString();
        if (!groups[year]) {
          groups[year] = [];
        }
        groups[year].push(p);
        return groups;
      },
      initialValue
    );
  };
  const groupArray = (posts) => {
    const groups = getGroupsByYear(posts);
    const keys = Object.keys(groups);
    return keys.map((year) => {
      return {
        year,
        posts: groups[year]
      };
    });
  };
  const archivedPosts = groupArray(allPostsByDate).reverse();
  const dateFormat = {
    locale: "en-US",
    options: {
      month: "short",
      day: "2-digit"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": `Archive | ${siteConfig.title}`, "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-4"> ${archivedPosts.map((group) => renderTemplate`<ul class="space-y-2"> <h2 class="title"${addAttribute(group.year, "id")}> <a${addAttribute(`#${group.year}`, "href")} class="-ml-2 cody-link"> <time${addAttribute(group.year, "datetime")}>${group.year}</time> </a> </h2> ${group.posts.map((p) => renderTemplate`<li> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": p.data.updatedDate ?? p.data.pubDate, "dateTimeOptions": dateFormat.options, "locale": dateFormat.locale })} <a class="cody-link"${addAttribute(`/blog/${p.slug}`, "href")}> ${p.data.title} </a> </li>`)} </ul>`)} </main> ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/archive/index.astro", void 0);

const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/archive/index.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
