import Image from "next/image"
import Link from "next/link"

// Mock data for related posts
const relatedPosts = [
  {
    id: 1,
    title: "Advanced TypeScript Patterns for Better Code",
    excerpt: "Discover advanced TypeScript patterns that will help you write more maintainable and type-safe code.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "advanced-typescript-patterns",
    date: "May 10, 2025",
    category: "TypeScript",
  },
  {
    id: 2,
    title: "Optimizing Database Queries for Performance",
    excerpt: "Tips and techniques to optimize your database queries and improve application performance.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "optimizing-database-queries",
    date: "May 8, 2025",
    category: "Databases",
  },
  {
    id: 3,
    title: "Implementing Authentication with JWT",
    excerpt: "A comprehensive guide to implementing secure authentication using JSON Web Tokens.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "implementing-authentication-jwt",
    date: "May 5, 2025",
    category: "Security",
  },
]

export function BlogRelated() {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="h-full overflow-hidden rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">{post.date}</p>
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 line-clamp-2">{post.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
