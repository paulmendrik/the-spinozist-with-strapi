import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function ListLayout({ post }) { 

return (
<article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
<dl>
<dt className="sr-only">Published on</dt>
<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
<time dateTime={post.Date}>{new Date(post.Date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}</time>
</dd>
</dl>
<div className="space-y-3 xl:col-span-3">
<div>
<h3 className="text-2xl font-bold leading-8 tracking-tight">
<Link href={`/blog/${post.slug}`} className="text-gray-900 dark:text-gray-100">{post.Title}</Link>
</h3>
<div className="flex flex-wrap"></div>
</div>
<div className="prose text-gray-500 max-w-none dark:text-gray-400">
{post.Excerpt}
</div>
</div>
</article>
)
}
