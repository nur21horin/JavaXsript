import { marked } from 'marked'

const posts = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2026-03-01',
    excerpt: 'Welcome to the sample Next.js + Tailwind blog.',
    content: `# Hello World\n\nThis is a sample blog post created with Next.js and Tailwind CSS.\n\n- Built-in routing\n- Static generation\n\nEnjoy!`
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    date: '2026-03-01',
    excerpt: 'Another short post to demonstrate listing and pages.',
    content: `# Second Post\n\nMore content here.`
  }
]

export function getAllPosts() {
  return posts.map(p => ({ ...p, html: marked.parse(p.content) }))
}

export function getPostBySlug(slug) {
  const p = posts.find(x => x.slug === slug)
  return p ? { ...p, html: marked.parse(p.content) } : null
}
