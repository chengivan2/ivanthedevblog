import Image from "next/image"
import Link from "next/link"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    excerpt: "Learn how to leverage Next.js features to build performant and scalable React applications.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-scalable-react-applications",
    date: "May 12, 2025",
    category: "React",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for Better Code",
    excerpt: "Discover advanced TypeScript patterns that will help you write more maintainable and type-safe code.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "advanced-typescript-patterns",
    date: "May 10, 2025",
    category: "TypeScript",
  },
  {
    id: 3,
    title: "Optimizing Database Queries for Performance",
    excerpt: "Tips and techniques to optimize your database queries and improve application performance.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "optimizing-database-queries",
    date: "May 8, 2025",
    category: "Databases",
  },
  {
    id: 4,
    title: "Implementing Authentication with JWT",
    excerpt: "A comprehensive guide to implementing secure authentication using JSON Web Tokens.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "implementing-authentication-jwt",
    date: "May 5, 2025",
    category: "Security",
  },
  {
    id: 5,
    title: "Microservices Architecture Best Practices",
    excerpt: "Learn the best practices for designing and implementing microservices architecture.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "microservices-architecture-best-practices",
    date: "May 2, 2025",
    category: "Architecture",
  },
  {
    id: 6,
    title: "Getting Started with Docker and Kubernetes",
    excerpt: "A beginner's guide to containerization with Docker and orchestration with Kubernetes.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "getting-started-docker-kubernetes",
    date: "April 28, 2025",
    category: "DevOps",
  },
]

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
          <div className="h-full overflow-hidden rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
            <div className="relative h-48 w-full overflow-hidden">
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
            <div className="p-5">
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-medium">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
