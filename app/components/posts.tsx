import Image from "next/image"

import Link from 'next/link'
import { formatDate, getProjectPosts } from '@/app/projects/utils'

export function ProjectPosts() {
  const allProjects = getProjectPosts()

  return (
    <div className="flex flex-col gap-16 mx-auto max-w-lg">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/projects/${post.slug}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image alt={post.metadata.title} src={post.metadata.image} width={200} height={200} />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <span className="mx-1">
                  -
                </span>
                <p className="text-lg font-medium text-neutral-400 dark:text-neutral-100 tracking-tight">
                  {post.metadata.subtitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
