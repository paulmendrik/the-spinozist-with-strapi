import Link from '@/components/Link'
import { useRouter } from 'next/router'

export default function Pagination({ page, total}) {

  const router = useRouter()

  const LastPage = Math.ceil(total / 4)

  return (

      <div className="pt-6 pb-8 space-y-2 md:space-y-5">

      <nav className="flex justify-between">    
      <button rel="previous" className="cursor-auto disabled:opacity-50" onClick={() => router.push(`/blog?page=${page - 1}`)} disabled={page <= 1}>Previous</button>
      <span>{page} of {LastPage}</span>
      <button rel="next" className="cursor-auto disabled:opacity-50" onClick={() => router.push(`/blog?page=${page + 1}`)} disabled={page >= LastPage}>Next</button>
      </nav>


      </div>
  )
}
