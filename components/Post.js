import Link from '@/components/Link'
import ReactMarkdown from "react-markdown";

export default function Post({ article }) {

    const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
         <dl>
         <dd className="font-medium text-gray-500 dark:text-gray-400 post-meta">
         <time dateTime={article.date}>
         {new Date(article.date).toLocaleDateString(postDateTemplate)}
         </time> 
         </dd>
         </dl> 
         <div className="space-y-5 xl:col-span-3">
         <div className="space-y-6">
         <div>
         <h2 className="tracking-tight post-title">
         <Link href={`/blog/${article.slug}`} className="text-gray-900 dark:text-gray-100">{article.title}</Link>  
         </h2>
         <div className="flex flex-wrap">
         </div>
         </div>
         <div className="prose text-gray-500 max-w-none dark:text-gray-400">
         <ReactMarkdown>
         {article.intro}
         </ReactMarkdown>
         </div>
         </div>  
         <div className="text-base font-medium leading-6">
         <Link href={`/blog/${article.slug}`} className="text-black dark:text-gray-200 hover:text-current dark:hover:text-blue-200">Read more &rarr;</Link> 
         </div>
         </div>
         </div>
        </article>
    )
}

