import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <p>Hello Next.js 잠시 수정</p>
  </div>
)

export default Index