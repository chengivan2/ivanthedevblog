import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogList } from "@/components/blog/blog-list"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-green-950 dark:via-gray-900 dark:to-yellow-950">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="py-12">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 dark:text-green-300 md:text-5xl">
              The <span className="text-yellow-600 dark:text-yellow-400">Blog</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Insights, tutorials, and best practices for modern software development
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
              All
            </Button>
            <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
              React
            </Button>
            <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
              TypeScript
            </Button>
            <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
              Databases
            </Button>
            <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
              Security
            </Button>
            <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
              Architecture
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BlogList />

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <span className="sr-only">Previous page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button variant="outline" className="rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/80">
                    1
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    2
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    3
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <span className="sr-only">Next page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
