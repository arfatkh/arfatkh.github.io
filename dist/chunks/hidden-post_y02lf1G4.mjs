import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This post is supposed to be hidden from <code>/blog</code> but not from <code>/archive</code>.</p>";

				const frontmatter = {"title":"Test Hidden Post","description":"This is a test post for hidden post.","pubDate":"2024-05-24T00:00:00.000Z","hide":true,"draft":true,"minutesRead":"1 min read"};
				const file = "/Users/arfat/Coding/arfatkh.github.io/src/content/blog/hidden-post.md";
				const url = undefined;
				function rawContent() {
					return "\nThis post is supposed to be hidden from `/blog` but not from `/archive`.\n";
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
