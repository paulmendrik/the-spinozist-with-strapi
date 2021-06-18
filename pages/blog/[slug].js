import Single from '@/components/Single'
import { API_URL } from '../../lib/api'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function Post({ article }) {

  return (
    <Single  article={article} />
  )
}

//export async function getStaticPaths() {

//  const res = await fetch(`${API_URL}/articles`)
//  const articles = await res.json()

//  const paths = articles.map((article) => ({
//   params: { slug: article.slug },
// }))

//  return {
//    paths,
//    fallback: true,
//  }

//}

//export async function getStaticProps({ params: { slug } }) {

//  const res = await fetch(`${API_URL}/articles?slug=${slug}`)
//  const articles = await res.json()

//  return {
//   props: {
//     article: articles[0],
//   },
//   revalidate: 1,
//  }
// }

 export async function getServerSideProps({ query: { slug } }) {
      const res = await fetch(`${API_URL}/articles?slug=${slug}`)
      const articles = await res.json()
    
      return {
         props: {
          article: articles[0],
        },
      }
  }
