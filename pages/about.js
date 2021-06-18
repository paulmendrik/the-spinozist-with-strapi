import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import { API_URL } from "../lib/api"
import ReactMarkdown from "react-markdown";

export default function About({ about }) {
  return (
    <>
    <PageSeo title={`About - ${siteMetadata.author}`} description={`About me - ${siteMetadata.author}`} url={`${siteMetadata.siteUrl}/about`} />
    <article>
    <div className="mb-8  title-head">  
    <div className="pt-6 pb-8">
    <PageTitle>About</PageTitle>  
    </div>
    </div>
    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
    <ReactMarkdown>{about.content}</ReactMarkdown>
    </div> 
    </article>
    </>
  )
}


export async function getStaticProps() {

  const res = await fetch(`${API_URL}/about`)
  const about = await res.json()

  
  return {
    props: { about },
    revalidate: 1,
  };
}
