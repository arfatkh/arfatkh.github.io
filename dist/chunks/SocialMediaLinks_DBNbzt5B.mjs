import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './index_XQ6BpzAl.mjs';
import { a as socialLinks } from './consts_BLxkOGPb.mjs';

const $$SocialMediaLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-end gap-x-4"> <ul class="flex flex-wrap flex-1 items-center gap-x-2 sm:flex-initial"> ${socialLinks.map(({ link, icon, friendlyName }) => renderTemplate`<li class="flex"> <a class="inline-block p-1 sm:hover:text-accent"${addAttribute(link, "href")} target="_blank"${addAttribute(`noopener noreferrer`, "rel")}${addAttribute(friendlyName, "title")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "name": icon, "aria-hidden": "true", "focusable": "false" })} <span class="sr-only">${friendlyName}</span> </a> </li>`)} </ul> </div>`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/components/SocialMediaLinks.astro", void 0);

export { $$SocialMediaLinks as $ };
