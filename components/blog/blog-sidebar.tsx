"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
}

// Mock data for popular posts
const popularPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    slug: "building-scalable-react-applications",
    date: "May 12, 2025",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for Better Code",
    slug: "advanced-typescript-patterns",
    date: "May 10, 2025",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "Optimizing Database Queries for Performance",
    slug: "optimizing-database-queries",
    date: "May 8, 2025",
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Mock data for categories
const categories = [
  { name: "React", count: 12 },
  { name: "TypeScript", count: 8 },
  { name: "Databases", count: 6 },
  { name: "Security", count: 5 },
  { name: "Architecture", count: 7 },
  { name: "DevOps", count: 4 },
]

// Mock data for tags
const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "GraphQL",
  "REST",
  "API",
  "Database",
  "SQL",
  "NoSQL",
  "MongoDB",
  "PostgreSQL",
  "Authentication",
  "Security",
]

export function BlogSidebar() {
  return (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      {/* Search */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Search</h3>
        <div className="flex gap-2">
          <Input placeholder="Search articles..." className="bg-white/70 dark:bg-gray-800/70" />
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="flex gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-300 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400">
                    {post.title}
                  </h4>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.name.toLowerCase()}`}
              className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0 hover:text-green-600 dark:hover:text-green-400"
            >
              <span>{category.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{category.count}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag.toLowerCase()}`}
              className="inline-block rounded-full bg-white/50 dark:bg-gray-800/50 px-3 py-1 text-sm hover:bg-green-100 dark:hover:bg-green-900/30"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">Newsletter</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Subscribe to get the latest articles and updates.
        </p>
        <div className="space-y-2">
          <Input placeholder="Your email" className="bg-white/70 dark:bg-gray-800/70" />
          <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:opacity-90">Subscribe</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
