import { ProjectPosts } from '@/app/components/posts'

export const metadata = {
  title: 'Projects | Satvik Virmani',
  description: 'Read about my projects',
}

export default function Page() {
  return (
    <section className="p-16">
      <h1 className="mb-16 text-center font-semibold text-4xl tracking-tighter">My Projects</h1>
      <ProjectPosts />
    </section>
  )
}
