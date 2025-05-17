"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { use } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogContent } from "@/components/blog/blog-content"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogComments } from "@/components/blog/blog-comments"
import { BlogRelated } from "@/components/blog/blog-related"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Copy, Bookmark, ThumbsUp } from "lucide-react"
import { useEffect, useState } from "react"
import React from "react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
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

// This would normally come from a database or CMS
const getBlogPost = (slug: string) => {
  // For this example, we'll just return the first post for any slug
  return {
    title: "Building Scalable React Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js features to build performant and scalable React applications that can handle growth and maintain excellent user experience.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 12, 2025",
    category: "React",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Sarah is a senior frontend developer with over 8 years of experience building web applications with React and Next.js.",
    },
    tags: ["React", "Next.js", "Performance", "Architecture"],
  }
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const unwrappedParams = React.use(params)
  const post = getBlogPost(unwrappedParams.slug)

  // Simulate loading
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-green-950 dark:via-gray-900 dark:to-yellow-950"
        >
          <SiteHeader />
          <main className="container mx-auto px-4 py-8">
            <article className="py-12">
              {/* Breadcrumbs */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <Link
                        href="/"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="w-3 h-3 text-gray-400 mx-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <Link
                          href="/blog"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Blog
                        </Link>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg
                          className="w-3 h-3 text-gray-400 mx-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{post.title}</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[40vh] md:h-[50vh] w-full mb-8 overflow-hidden rounded-2xl"
              >
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="p-6 md:p-10 w-full"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white"
                      >
                        {post.category}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white"
                      >
                        {post.readTime}
                      </motion.span>
                    </div>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                      {post.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="text-lg text-white/90 max-w-3xl"
                    >
                      {post.excerpt}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-4 gap-8">
                {/* Sidebar with table of contents and sharing */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="lg:col-span-1 order-2 lg:order-1"
                >
                  <div className="lg:sticky lg:top-24 space-y-8">
                    {/* Table of Contents */}
                    <motion.div
                      variants={slideIn}
                      className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
                    >
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Table of Contents</h3>
                      <nav className="space-y-2 text-sm">
                        <a
                          href="#introduction"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Introduction
                        </a>
                        <a
                          href="#why-nextjs"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Why Next.js?
                        </a>
                        <a
                          href="#project-structure"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Project Structure
                        </a>
                        <a
                          href="#data-fetching"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Data Fetching Strategies
                        </a>
                        <a
                          href="#performance"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Performance Optimization
                        </a>
                        <a
                          href="#deployment"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Deployment
                        </a>
                        <a
                          href="#conclusion"
                          className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          Conclusion
                        </a>
                      </nav>
                    </motion.div>

                    {/* Share */}
                    <motion.div
                      variants={slideIn}
                      className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
                    >
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Share</h3>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Share on Facebook</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Share on Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">Share on LinkedIn</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                          <Copy className="h-4 w-4" />
                          <span className="sr-only">Copy link</span>
                        </Button>
                      </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                      variants={slideIn}
                      className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg"
                    >
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
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
                  </div>
                </motion.div>

                {/* Main content */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 md:p-10 shadow-lg bg-gradient-to-bl from-green-100/30 to-yellow-100/30 dark:from-green-900/30 dark:to-yellow-900/30"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-yellow-600 dark:text-yellow-400">{post.date}</span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                          <Bookmark className="mr-1 h-4 w-4" />
                          <span className="hidden sm:inline">Save</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                          <ThumbsUp className="mr-1 h-4 w-4" />
                          <span className="hidden sm:inline">Like</span>
                        </Button>
                      </div>
                    </div>

                    <BlogContent />
                  </motion.div>

                  {/* Author bio */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <BlogAuthor author={post.author} />
                  </motion.div>

                  {/* Comments */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <BlogComments />
                  </motion.div>

                  {/* Related posts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <BlogRelated />
                  </motion.div>
                </div>
              </div>
            </article>
          </main>
          <SiteFooter />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
