import { getCollection } from 'astro:content'
const Posts2024 = await getCollection('2024')
const Posts2025 = await getCollection('2025')
export const allPosts = [Posts2025, Posts2024]
