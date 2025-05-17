import Link from "next/link"
import { BlogHeroSlider } from "@/components/blog-hero-slider"
import { BlogGrid } from "@/components/blog-grid"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "IvanTheDev Blog",
  description: "Tips and tricks for modern software engineers",
}


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-green-950 dark:via-gray-900 dark:to-yellow-950">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 dark:text-green-300 md:text-5xl lg:text-6xl">
              Software Engineering <span className="text-yellow-600 dark:text-yellow-400">Insights</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Tips, tricks, and best practices for modern software development
            </p>
          </div>

          <div>
            <BlogHeroSlider />
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 md:text-3xl">Latest Articles</h2>
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View All
              </Link>
            </div>
            <BlogGrid />
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 md:text-3xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Get the latest articles and resources sent straight to your inbox
              </p>
              <form className="mt-6">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full px-4 py-2 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-green-500 to-yellow-500 px-6 py-2 text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
