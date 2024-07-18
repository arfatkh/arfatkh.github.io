import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate } from './FormattedDate_uD7rdcie.mjs';
import { $ as $$Icon } from './index_XQ6BpzAl.mjs';
/* empty css                          */

const $$Astro = createAstro("https://arfat.me");
const $$PostPreviewA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreviewA;
  const { post, withDesc = false } = Astro2.props;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const pinned = !!post.data.order;
  const urlBasePath = post.collection === "project" ? "projects" : post.collection;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-b4gyc6eq> <span data-astro-cid-b4gyc6eq> <a${addAttribute(`/${urlBasePath}/${post.slug}/`, "href")} class="post-item" data-astro-cid-b4gyc6eq> <h4 class="cody-link inline font-bold" data-astro-cid-b4gyc6eq>${post.data.title}</h4> </a> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5 inline text-accent rotate-45 -ml-1", "name": "mdi:pin", "aria-hidden": "true", "focusable": "false", "data-astro-cid-b4gyc6eq": true })}`} </span> <p class="date pr-2 mt-1" data-astro-cid-b4gyc6eq> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "data-astro-cid-b4gyc6eq": true })} </p> ${withDesc && renderTemplate`<p class="italic" data-astro-cid-b4gyc6eq>${post.data.description}</p>`} </li> `;
}, "/Users/arfat/Coding/arfatkh.github.io/src/components/blog/PostPreviewA.astro", void 0);

export { $$PostPreviewA as $ };
