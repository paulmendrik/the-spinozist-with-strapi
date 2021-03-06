import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'


const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, next, prev }) {
  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">

        <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
        <dl className="space-y-10">
        <div>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        <time dateTime={Date}>{new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}</time>
        </dd>
        </div>
        </dl>
        <div><PageTitle>{title}</PageTitle></div>
        </div>
        </header>

        <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6" style={{ gridTemplateRows: 'auto 1fr' }} >
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">

        <footer>

        {(next || prev) && (
        <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">

        {prev && (
        <div>
        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Previous Article</h2>
        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"><Link href={`/blog/${prev.slug}`}>{prev.title}</Link></div>
        </div>
        )}

        {next && (
        <div>
        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Next Article</h2>
        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"><Link href={`/blog/${next.slug}`}>{next.title}</Link></div>
        </div>
        )}

      </div>
        )}

     
        <div className="pt-4 xl:pt-8">
        <Link href="/blog" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"> &larr; Back to the blog </Link>
        </div>
        </footer>

        </div>
        </div>

   </div>
  </article>
  </SectionContainer>
  )
}
