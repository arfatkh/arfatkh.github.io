import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
/* empty css                          */

const $$Astro$1 = createAstro("https://arfat.me");
const $$TableOfContentsHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-zekvapgs> <a${addAttribute("#" + heading.slug, "href")}${addAttribute(`toc-${heading.slug}`, "id")} data-astro-cid-zekvapgs> ${heading.text} </a> ${heading.subheadings.length > 0 && renderTemplate`<ul class="ml-2" data-astro-cid-zekvapgs> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading, "data-astro-cid-zekvapgs": true })}`)} </ul>`} </li> `;
}, "/Users/arfat/Coding/arfatkh.github.io/src/components/TableOfContentsHeading.astro", void 0);

const $$Astro = createAstro("https://arfat.me");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  function diveChildren(item, depth) {
    if (depth === 1 || !item.subheadings.length) {
      return item.subheadings;
    } else {
      return diveChildren(item.subheadings[item.subheadings.length - 1], depth - 1);
    }
  }
  function buildToc(headings2) {
    const bodyHeadings = headings2.filter(({ depth }) => depth > 1);
    const toc2 = [];
    bodyHeadings.forEach((h) => {
      const heading = { ...h, subheadings: [] };
      if (heading.depth === 2) {
        toc2.push(heading);
      } else {
        const lastItemInToc = toc2[toc2.length - 1];
        if (heading.depth < lastItemInToc.depth) {
          throw new Error(`Orphan heading found: ${heading.text}.`);
        }
        const gap = heading.depth - lastItemInToc.depth;
        const target = diveChildren(lastItemInToc, gap);
        target.push(heading);
      }
    });
    return toc2;
  }
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-20 order-2 hidden basis-64 lg:block"> <hr> <h2 class="font-bold text-lg">Table of Contents</h2> <ul class="-me-32" id="toc"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TableOfContentsHeading, { "heading": heading })}`)} </ul> </nav> `;
}, "/Users/arfat/Coding/arfatkh.github.io/src/components/TableOfContents.astro", void 0);

export { $$TableOfContents as $ };
