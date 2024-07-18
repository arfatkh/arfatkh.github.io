/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_234Z45VS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://arfat.me");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "image": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title">About</h1> <p>
Hi, I'm Arfat. A <b>computer science student at FAST Islamabad,</b> . I am deeply interested in <b>low-level programming</b> and <b>back-end development</b>.</p> <div>
I was based on two other themes:
<a class="cody-link" href="https://astro-theme-cactus.netlify.app" target="_blank" rel="noopener noreferrer">Astro Cactus</a>
and
<a class="cody-link" target="_blank" rel="noopener noreferrer" href="https://risotto.joeroe.io">Risotto</a>.
</div>  <h2 class="title mt-4">Here are my built-in features:</h2> <ul class="list-inside list-disc"> <li>Looks great on any device</li> <li>Fully Responsive</li> <li>Comes light and dark mode</li> <li>Easy to customize and add content</li> <li>Built with tailwindcss</li> <li>Pin posts and projects</li> </ul> <p class="mt-4">
Clone or fork my
<a class="cody-link inline-block" href="https://github.com/kirontoo/astro-theme-cody" target="_blank" rel="noopener noreferrer" aria-label="github repository">
repo
</a>
if you like me!
</p> ` })}`;
}, "/Users/arfat/Coding/arfatkh.github.io/src/pages/about.astro", void 0);

const $$file = "/Users/arfat/Coding/arfatkh.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
