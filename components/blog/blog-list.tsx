"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
}

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js features to build performant and scalable React applications that can handle growth and maintain excellent user experience.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-scalable-react-applications",
    date: "May 12, 2025",
    category: "React",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for Better Code",
    excerpt:
      "Discover advanced TypeScript patterns that will help you write more maintainable and type-safe code. From mapped types to conditional types, we cover it all.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "advanced-typescript-patterns",
    date: "May 10, 2025",
    category: "TypeScript",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Optimizing Database Queries for Performance",
    excerpt:
      "Tips and techniques to optimize your database queries and improve application performance. Learn about indexing, query planning, and caching strategies.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "optimizing-database-queries",
    date: "May 8, 2025",
    category: "Databases",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Implementing Authentication with JWT",
    excerpt:
      "A comprehensive guide to implementing secure authentication using JSON Web Tokens. Learn about token-based authentication, security best practices, and implementation details.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "implementing-authentication-jwt",
    date: "May 5, 2025",
    category: "Security",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "Microservices Architecture Best Practices",
    excerpt:
      "Learn the best practices for designing and implementing microservices architecture. From service boundaries to communication patterns, we cover everything you need to know.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "microservices-architecture-best-practices",
    date: "May 2, 2025",
    category: "Architecture",
    readTime: "14 min read",
  },
]

export function BlogList() {
  return (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      {blogPosts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <Link href={`/blog/${post.slug}`} className="group">
            <article className="overflow-hidden rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
              <div className="md:flex">
                <div className="md:shrink-0 md:w-1/3">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-yellow-600 dark:text-yellow-400">{post.date}</span>
                    <span className="text-green-600 dark:text-green-400 font-medium flex items-center">
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
