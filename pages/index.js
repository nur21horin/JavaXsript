import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import Layout from '../components/Layout'

export default function Home({ posts }) {
  return (
    <Layout>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="space-y-4">
          {posts.map(post => (
            <article key={post.slug} className="p-4 border rounded-md hover:shadow">
              <h2 className="text-2xl font-semibold">
                <Link href={`/posts/${post.slug}`}>
                  <a className="text-blue-600 hover:underline">{post.title}</a>
                </Link>
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
