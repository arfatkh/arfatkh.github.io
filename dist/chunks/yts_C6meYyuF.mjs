import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bgp1Q2Tz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"yts-gui-native\">YTS GUI NATIVE</h1>\n<p>Personal Project that searches YTS for movies and automatically downloades it along with subtitles</p>\n<p>Well In my defence I had ni Idea APIs existed back then…\nBut Web Scrapper it is using multi processing to scrape all pages at once :)\nAnd And And it was my first project in python so … gimme a break</p>\n<p>Cuz i thought its harder to just visit YTS.io</p>\n<p><em>Disclaimer : For the GenZ who tries to scrape sites … It might not be legal . Take Permission ( meine ni li thi btw)</em></p>\n<p>No Piracy was supported in this project. <code>YTS</code> used for “Educational Purposes Only”</p>\n<h2 id=\"concepts-used\">Concepts used:</h2>\n<ul>\n<li>Web Scrapping  <code>[BeautifulSoup4]</code></li>\n<li>HTML Requests <code>[</code>requests.py]`</li>\n<li>Graphical User Interface  <code>[Using PyQt5 designer]</code></li>\n<li>Multi-Threading (debatable ,I know in python its a myth but ) <code>[concurrent.futures]</code></li>\n<li>Saving User Configuration <code>[configparser]</code></li>\n<li>Extracting Subtitles From Zipfiles :)</li>\n</ul>\n<h2 id=\"in-action\"><strong>In Action:</strong></h2>\n<p><img src=\"https://raw.githubusercontent.com/arfatkh/YTSDownloader/main/imgs/demo.gif\" alt=\"Demo\"></p>\n<p>It downloads the torrent and stores it in the specified folder</p>";

				const frontmatter = {"title":"Movie Downloader YTS","description":"It searches YTS for movies and automatically downloades it along with subtitles.","pubDate":"Jul 18 2024","stack":["Python","PYQT5"],"github":"https://github.com/arfatkh/YTSDownloader","order":1,"minutesRead":"1 min read"};
				const file = "/Users/arfat/Coding/arfatkh.github.io/src/content/project/yts.md";
				const url = undefined;
				function rawContent() {
					return "\n# YTS GUI NATIVE\n\nPersonal Project that searches YTS for movies and automatically downloades it along with subtitles \n\nWell In my defence I had ni Idea APIs existed back then.....\nBut Web Scrapper it is using multi processing to scrape all pages at once :)\nAnd And And it was my first project in python so ... gimme a break\n\n\nCuz i thought its harder to just visit YTS.io\n\n*Disclaimer : For the GenZ who tries to scrape sites ... It might not be legal . Take Permission ( meine ni li thi btw)*\n\n\nNo Piracy was supported in this project. `YTS` used for \"Educational Purposes Only\"\n\n\n##  Concepts used:\n\n \n\n - Web Scrapping  `[BeautifulSoup4]`\n - HTML Requests `[`requests.py]`\n - Graphical User Interface  `[Using PyQt5 designer]`\n - Multi-Threading (debatable ,I know in python its a myth but ) `[concurrent.futures]`\n - Saving User Configuration `[configparser]`\n -  Extracting Subtitles From Zipfiles :) \n\n\n\n##  **In Action:**\n\n![Demo](https://raw.githubusercontent.com/arfatkh/YTSDownloader/main/imgs/demo.gif)\n\nIt downloads the torrent and stores it in the specified folder\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"yts-gui-native","text":"YTS GUI NATIVE"},{"depth":2,"slug":"concepts-used","text":"Concepts used:"},{"depth":2,"slug":"in-action","text":"In Action:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
