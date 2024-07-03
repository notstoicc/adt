import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const collection2022 = await getCollection('2024')
  const collection2023 = await getCollection('2025')
  const posts = [...collection2024, ...collection2025]
  return rss({
    title: 'ad',
    description: 'posts',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.slug}/`,
    })),
  })
}
