import Header from '@/components/Header'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
        <Header title='404 - Page Not Found' />
        <div>
            <Link href="/" >
                Retun Home
            </Link>
        </div>
    </div>
  )
}