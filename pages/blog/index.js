import Link from '@/components/Link'
import Layout from '@/components/Layout'
import { PageSeo } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import ListLayout from '@/layouts/ListLayout'
import Pagination from '@/components/Pagination'
import siteMetadata from '@/data/siteMetadata'
import Quote from '@/components/Quote'
import Articles from '@/components/Articles'
import { API_URL } from '../../lib/api'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function Blog({ articles, page, total }) {

  return (   
  <Layout>
  <PageSeo title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} url={`${siteMetadata.siteUrl}/blog`} />
  <div className="divide-y">
   <div className="pt-6 pb-8 space-y-2 md:space-y-5">
   <PageTitle>All Posts</PageTitle>  
   </div>
   </div>
   <Articles articles={articles} />
  <Pagination page={page}  total={total}  />
  </Layout>
  )
}


export async function getServerSideProps({ query: { page = 1 } }) {
  
  const start = +page === 1 ? 0 : (+page - 1) * 4

  const totalRes = await fetch(`${API_URL}/articles/count`)
  const total = await totalRes.json()

  const data = await fetch( `${API_URL}/articles?_sort=date:DESC&_limit=4&_start=${start}`)

  const articles = await data.json()

  return {
    props: { articles, page: +page, total },
  
  }
}

