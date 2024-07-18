import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This is just a post to test big overflowing tables.\nA horizontal scrolling bar should show up at the bottom of the table.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>A long title</th><th>Another long header title</th><th>And yet another one :)</th><th>4th time is the charm</th></tr></thead><tbody><tr><td>Lorem ipsum dolor sit amet, qui minim</td><td>labore adipisicing minim sint cillum</td><td>sint consectetur cupidatat.</td><td>ipsum dolor sit amet, qui minim</td></tr><tr><td>Lorem ipsum dolor sit amet, qui minim</td><td>labore adipisicing minim sint cillum</td><td>sint consectetur cupidatat.</td><td>ipsum dolor sit amet, qui minim</td></tr><tr><td>Lorem ipsum dolor sit amet, qui minim</td><td>labore adipisicing minim sint cillum</td><td>sint consectetur cupidatat.</td><td>ipsum dolor sit amet, qui minim</td></tr><tr><td>Lorem ipsum dolor sit amet, qui minim</td><td>labore adipisicing minim sint cillum</td><td>sint consectetur cupidatat.</td><td>ipsum dolor sit amet, qui minim</td></tr><tr><td>Lorem ipsum dolor sit amet, qui minim</td><td>labore adipisicing minim sint cillum</td><td>sint consectetur cupidatat.</td><td>ipsum dolor sit amet, qui minim</td></tr></tbody></table>";

				const frontmatter = {"title":"Test Table","description":"This is a test post for overflowing tables","pubDate":"2024-04-21T00:00:00.000Z","draft":true,"minutesRead":"1 min read"};
				const file = "/Users/arfat/Coding/arfatkh.github.io/src/content/blog/test-tables.md";
				const url = undefined;
				function rawContent() {
					return "\nThis is just a post to test big overflowing tables.\nA horizontal scrolling bar should show up at the bottom of the table.\n\n| A long title | Another long header title | And yet another one :)| 4th time is the charm|\n|---|---|---|---| \n| Lorem ipsum dolor sit amet, qui minim  | labore adipisicing minim sint cillum|  sint consectetur cupidatat.| ipsum dolor sit amet, qui minim |\n| Lorem ipsum dolor sit amet, qui minim  | labore adipisicing minim sint cillum|  sint consectetur cupidatat.| ipsum dolor sit amet, qui minim |\n| Lorem ipsum dolor sit amet, qui minim  | labore adipisicing minim sint cillum|  sint consectetur cupidatat.| ipsum dolor sit amet, qui minim |\n| Lorem ipsum dolor sit amet, qui minim  | labore adipisicing minim sint cillum|  sint consectetur cupidatat.| ipsum dolor sit amet, qui minim |\n| Lorem ipsum dolor sit amet, qui minim  | labore adipisicing minim sint cillum|  sint consectetur cupidatat.| ipsum dolor sit amet, qui minim |\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
