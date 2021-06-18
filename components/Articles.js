import  Post from './Post'

export default function Articles({ articles }) {

    return (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {articles.map((article) => {
            return (
            <li key={article.slug} className="py-12">
            <Post article={article} key={article.slug} />
            </li>
            );
          })}
        </ul>
    )
}
