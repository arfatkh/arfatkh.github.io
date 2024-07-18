import { g as getCollection } from './_astro_content_CljY7TT_.mjs';

async function getAllPosts(filterHidden = false) {
  return await getCollection("blog", ({ data }) => {
    {
      if (filterHidden) {
        return !data.hide;
      }
      return !data.draft;
    }
  });
}
function sortMDByDate(posts, order = "descending") {
  const direction = order === "descending" ? 1 : -1;
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.pubDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.pubDate).valueOf();
    return (bDate - aDate) * direction;
  });
}
function sortMDByPinned(posts) {
  return posts.sort((a, b) => {
    const aOrder = a.data.order ?? 100;
    const bOrder = b.data.order ?? 100;
    return aOrder - bOrder;
  });
}
function getPostsByTag(tag, posts) {
  return posts.filter((post) => {
    if (post.data.tags) {
      return post.data.tags.includes(tag);
    }
    return false;
  });
}
function getPostsBySeries(series, posts) {
  return posts.filter((post) => {
    if (post.data.series) {
      return post.data.series.includes(series);
    }
    return false;
  });
}

export { sortMDByPinned as a, getPostsBySeries as b, getPostsByTag as c, getAllPosts as g, sortMDByDate as s };
