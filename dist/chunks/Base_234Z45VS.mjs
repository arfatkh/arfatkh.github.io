import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, f as renderHead, e as renderSlot } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_D6BfAzLl.mjs';
import { s as siteConfig } from './consts_BLxkOGPb.mjs';

const $$Astro = createAstro("https://arfat.me");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "", description = siteConfig.description, image } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <section class="cody-bg"> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})}
</html</body></html>`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/layouts/Base.astro", void 0);

export { $$Base as $ };
