const id = "hidden-post.md";
						const collection = "blog";
						const slug = "hidden-post";
						const body = "\nThis post is supposed to be hidden from `/blog` but not from `/archive`.\n";
						const data = {title:"Test Hidden Post",description:"This is a test post for hidden post.",pubDate:new Date(1716508800000),draft:true,hide:true};
						const _internal = {
							type: 'content',
							filePath: "/Users/arfat/Coding/arfatkh.github.io/src/content/blog/hidden-post.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
