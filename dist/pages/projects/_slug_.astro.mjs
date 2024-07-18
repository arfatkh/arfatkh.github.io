/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot } from '../../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_CljY7TT_.mjs';
import { s as siteConfig } from '../../chunks/consts_BLxkOGPb.mjs';
import { $ as $$Sidebar } from '../../chunks/Sidebar_B3_bDamd.mjs';
import { $ as $$SocialMediaLinks } from '../../chunks/SocialMediaLinks_DBNbzt5B.mjs';
import { $ as $$TableOfContents } from '../../chunks/TableOfContents_bJqGQYut.mjs';
import { $ as $$Icon } from '../../chunks/index_XQ6BpzAl.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://arfat.me");
const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Project;
  const { project } = Astro2.props;
  const {
    data: {
      title,
      pubDate,
      description,
      heroImage,
      platform,
      stack,
      website,
      github
    }
  } = project;
  const { headings } = project.render && await project.render();
  const articleDate = pubDate.toISOString();
  return renderTemplate`${renderComponent($$result, "SidebarLayout", $$Sidebar, { "title": title, "description": description, "articleDate": articleDate, "data-astro-cid-uogrpsp5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="cody-bg space-y-2 sm:space-y-4" data-astro-cid-uogrpsp5> <h2 class="title" data-astro-cid-uogrpsp5>${title}</h2> ${heroImage && renderTemplate`<div class="aspect-h-9 aspect-w-16 mb-6 w-full" data-astro-cid-uogrpsp5> <img${addAttribute(heroImage.url, "src")}${addAttribute(heroImage.alt, "alt")} data-astro-cid-uogrpsp5> </div>`} <ul class="space-y-2" data-astro-cid-uogrpsp5> ${platform && renderTemplate`<li class="project-frontmatter-item" data-astro-cid-uogrpsp5> <small data-astro-cid-uogrpsp5>PLATFORM</small> <span data-astro-cid-uogrpsp5>${platform}</span> </li>`} ${stack && renderTemplate`<li class="project-frontmatter-item" data-astro-cid-uogrpsp5> <small data-astro-cid-uogrpsp5>STACK</small> <ul class="inline-flex gap-2 sm:gap-4" data-astro-cid-uogrpsp5> ${stack.map((s) => renderTemplate`<li data-astro-cid-uogrpsp5> ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-6 w-6 text-textColor", "name": `vscode-icons:file-type-${s.toLowerCase()}`, "focusable": "false", "title": s, "data-astro-cid-uogrpsp5": true })} </li>`)} </ul> </li>`} ${website && renderTemplate`<li class="project-frontmatter-item" data-astro-cid-uogrpsp5> <small data-astro-cid-uogrpsp5>WEBSITE</small> <a${addAttribute(website, "href")} target="_blank" class="cody-link" data-astro-cid-uogrpsp5>${website}</a> </li>`} ${github && renderTemplate`<li class="project-frontmatter-item" data-astro-cid-uogrpsp5> <small data-astro-cid-uogrpsp5>GITHUB</small> <a${addAttribute(github, "href")} target="_blank" class="cody-link" data-astro-cid-uogrpsp5>${github}</a> </li>`} </ul> <hr data-astro-cid-uogrpsp5> <div class="prose dark:prose-invert prose-sm prose-headings:font-semibold prose-headings:ml-4 prose-headings:before:absolute prose-headings:before:-ms-4 prose-headings:before:text-accent prose-headings:before:content-['#'] prose-th:before:content-none" data-astro-cid-uogrpsp5> ${renderSlot($$result2, $$slots["default"])} </div> </section>  `, "sidebar": ($$result2) => renderTemplate`<aside data-astro-cid-uogrpsp5> <div class="flex flex-col space-y-2" data-astro-cid-uogrpsp5> <h2 class="font-semibold text-lg text-textColor" data-astro-cid-uogrpsp5>${siteConfig.profile.author}</h2> ${renderTemplate`<p data-astro-cid-uogrpsp5>${siteConfig.profile.description}</p>`} ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, { "data-astro-cid-uogrpsp5": true })} <span class="!my-4 text-accent" aria-hidden data-astro-cid-uogrpsp5>---</span> <p data-astro-cid-uogrpsp5> ${description} </p> </div> ${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TableOfContents, { "headings": headings, "data-astro-cid-uogrpsp5": true })}`} </aside>` })} `;
}, "/Users/arfat/Coding/arfatkh.github.io/src/layouts/Project.astro", void 0);

const $$Astro = createAstro("https://arfat.me");
const getStaticPaths = async () => {
  const allProjects = await getCollection("project", ({ data }) => {
    return data.draft !== true ;
  });
  return allProjects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$Project, { "project": project }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/projects/[slug].astro", void 0);
const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
