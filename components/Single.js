import SectionContainer from '@/components/SectionContainer'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ReactMarkdown from "react-markdown";

export default function Single({ article }) {

    const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <SectionContainer>
        <PageSeo title={siteMetadata.title} description={siteMetadata.description} url={siteMetadata.siteUrl} />
        <article>
        <div className="mb-8  title-head">
         <dl>
         <dd className="font-medium text-gray-500 dark:text-gray-400 post-meta">
         <time dateTime={article.date}>
         {new Date(article.date).toLocaleDateString(postDateTemplate)}
         </time> 
         </dd>
         </dl> 
         <h1 className=" text-gray-900 dark:text-gray-100 font-bold tracking-tight post-title">{article.title}</h1>
         </div>
         <div className="prose text-gray-500 max-w-none dark:text-gray-400">
         <ReactMarkdown children={article.content}  />
         </div>
        </article>
        </SectionContainer>
    )
}
