import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts")).filter((p) => !p.data.draft);
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: "inference lab",
    description:
      "A working log of serving LLMs on real hardware — measured from first principles.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      author: p.data.author,
      categories: p.data.topics,
      link: `/posts/${p.id}/`,
    })),
  });
}
