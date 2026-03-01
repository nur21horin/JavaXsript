import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/posts'

export default function Post({ post }) {
  if (!post) return <Layout><div className="p-8">Post not found</div></Layout>
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return { props: { post } }
}
