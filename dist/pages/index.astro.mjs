/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from '../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_234Z45VS.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_uD7rdcie.mjs';
import { $ as $$Icon } from '../chunks/index_XQ6BpzAl.mjs';
import { $ as $$SocialMediaLinks } from '../chunks/SocialMediaLinks_DBNbzt5B.mjs';
import 'reading-time';
import { g as getAllPosts, s as sortMDByDate, a as sortMDByPinned } from '../chunks/post_DcQnnQEM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://arfat.me");
const $$PostPreviewB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostPreviewB;
  const { post, withDesc = false } = Astro2.props;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const pinned = !!post.data.order;
  return renderTemplate`${maybeRenderHead()}<li> <div class="flex flex-col gap-x-0 sm:flex-row sm:divide-x sm:divide-accent"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "class": "min-w-[125px] text-gray-600 dark:text-gray-400" })} <span class="sm:before:ml-4"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="cody-link" data-astro-prefetch> ${post.data.title} </a> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5 inline text-accent rotate-45 ml-1", "name": "mdi:pin", "aria-hidden": "true", "focusable": "false" })}`} </span> </div> ${withDesc && renderTemplate`<p class="italic">${post.data.description}</p>`} </li>`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/components/blog/PostPreviewB.astro", void 0);

const $$Astro = createAstro("https://arfat.me");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  const allPostsByPinned = sortMDByPinned(allPostsByDate);
  const tech = [
    {
      title: "Astro",
      desc: "Build fast websites, faster.",
      href: "https://astro.build"
    },
    {
      title: "Astro Assets",
      desc: "Built-in optimized asset support.",
      href: "https://docs.astro.build/en/guides/assets/"
    },
    {
      title: "Tailwind CSS",
      desc: "Rapidly build modern websites without ever leaving your HTML.",
      href: "https://tailwindcss.com"
    },
    {
      title: "Markdown",
      desc: "Simple and easy-to-use markup language.",
      href: "https://www.markdownguide.org/"
    },
    {
      title: "MDX",
      desc: "Markdown for the component era.",
      href: "https://mdxjs.com/"
    },
    {
      title: "Astro Icon",
      desc: "An easy to use Icon component for Astro.",
      href: "https://github.com/natemoo-re/astro-icon#readme"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Hello World</h1> <p class="mb-4 sm:mb-8">
I'm Arfat. A <b>computer science student at FAST Islamabad,</b> . I am deeply interested in <b>low-level programming</b> and <b>back-end development</b>.</p>  <div> <span>You can find me on: </span> ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, {})} </div> </section> <section class="mt-8 sm:mt-16"> <h2 class="title">Posts</h2> <ul class="space-y-4 sm:space-y-2"> ${allPostsByPinned.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewB, { "post": p })}`)} </ul> </section> <section class="mt-16"> <h2 class="title">Technologies</h2> <ul class="space-y-4 sm:space-y-2"> ${tech.map(({ href, title, desc }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="cody-link inline-block"> ${title} </a>:
<p class="inline-block sm:mt-2">${desc}</p> </li>`)} </ul> </section> ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
