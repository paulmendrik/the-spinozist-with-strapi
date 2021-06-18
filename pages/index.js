import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Layout from '@/components/Layout'
import Quote from '@/components/Quote'
import Articles from '@/components/Articles'
import { fetchAPI } from "../lib/api";

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }


export default function Home({ articles }) {


  return (
  
  <Layout>
  <PageSeo title={siteMetadata.title} description={siteMetadata.description} url={siteMetadata.siteUrl} />
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
  <div className="pt-6 pb-8 space-y-2 md:space-y-5">
  <Quote />
  </div>
  <Articles articles={articles} />
  </div>
  </Layout>
  )
}

export async function getStaticProps() {

  const [articles] = await Promise.all([
    fetchAPI("/articles?_sort=date:DESC&_limit=4"),
  ]);
  
  return {
    props: { articles },
    revalidate: 1,
  };
}
