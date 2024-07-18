import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus a tortor at molestie. Sed pellentesque leo auctor, auctor lorem nec, venenatis risus. Vivamus commodo ipsum vitae orci finibus, vel porta nunc viverra. In hac habitasse platea dictumst. Nunc pretium, ligula ultricies consequat sollicitudin, enim ex ullamcorper nisl.</p>";

				const frontmatter = {"title":"Project 3","description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci","pubDate":"Mar 03 2023","heroImage":{"url":"/blog-placeholder-about.jpg","alt":"GitHub wallpaper"},"platform":"Web","stack":["Reactjs","Typescript","Mongo"],"website":"https://github.com/kirontoo/astro-theme-cody","github":"https://github.com/kirontoo/astro-theme-cody","draft":true,"minutesRead":"1 min read"};
				const file = "/Users/arfat/Coding/arfatkh.github.io/src/content/project/project-3.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus a tortor at molestie. Sed pellentesque leo auctor, auctor lorem nec, venenatis risus. Vivamus commodo ipsum vitae orci finibus, vel porta nunc viverra. In hac habitasse platea dictumst. Nunc pretium, ligula ultricies consequat sollicitudin, enim ex ullamcorper nisl.\n";
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
