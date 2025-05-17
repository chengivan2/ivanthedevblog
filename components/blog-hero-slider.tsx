"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  }),
}

// Mock data for the featured blog posts
const featuredPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    excerpt: "Learn how to leverage Next.js features to build performant and scalable React applications.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "building-scalable-react-applications",
    date: "May 12, 2025",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for Better Code",
    excerpt: "Discover advanced TypeScript patterns that will help you write more maintainable and type-safe code.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "advanced-typescript-patterns",
    date: "May 10, 2025",
  },
  {
    id: 3,
    title: "Optimizing Database Queries for Performance",
    excerpt: "Tips and techniques to optimize your database queries and improve application performance.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "optimizing-database-queries",
    date: "May 8, 2025",
  },
  {
    id: 4,
    title: "Implementing Authentication with JWT",
    excerpt: "A comprehensive guide to implementing secure authentication using JSON Web Tokens.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "implementing-authentication-jwt",
    date: "May 5, 2025",
  },
  {
    id: 5,
    title: "Microservices Architecture Best Practices",
    excerpt: "Learn the best practices for designing and implementing microservices architecture.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "microservices-architecture-best-practices",
    date: "May 2, 2025",
  },
]

export function BlogHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-5xl"
    >
      <div className="overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 shadow-xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-6 p-8 pb-16 min-h-[500px]">
              <div className="flex flex-col justify-center space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                    {featuredPosts[currentSlide].date}
                  </p>
                  <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 md:text-4xl">
                    {featuredPosts[currentSlide].title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{featuredPosts[currentSlide].excerpt}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Link
                    href={`/blog/${featuredPosts[currentSlide].slug}`}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Read More
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative h-[400px] overflow-hidden rounded-xl"
              >
                <Image
                  src={featuredPosts[currentSlide].image || "/placeholder.svg"}
                  alt={featuredPosts[currentSlide].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3"
        >
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-green-500 scale-110"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-green-300 dark:hover:bg-green-700"
              }`}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-md border-2 border-white/50 dark:border-gray-700/50 h-10 w-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-md border-2 border-white/50 dark:border-gray-700/50 h-10 w-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </motion.div>
    </motion.div>
  )
}
