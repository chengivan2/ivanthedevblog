"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock data for comments
const comments = [
  {
    id: 1,
    author: "Alex Johnson",
    date: "May 15, 2025",
    content:
      "Great article! I've been using Next.js for a while now and these tips are really helpful. I especially like the section on data fetching strategies.",
    replies: [
      {
        id: 101,
        author: "Sarah Johnson",
        date: "May 15, 2025",
        content:
          "Thanks Alex! I'm glad you found it helpful. Data fetching is indeed one of the most powerful features of Next.js.",
      },
    ],
  },
  {
    id: 2,
    author: "Michael Smith",
    date: "May 14, 2025",
    content:
      "I've been struggling with structuring my Next.js projects. This article gave me some great ideas on how to organize my code better. Thanks!",
    replies: [],
  },
  {
    id: 3,
    author: "Emily Davis",
    date: "May 13, 2025",
    content:
      "The deployment section was particularly useful for me. I've been deploying to AWS but might give Vercel a try after reading this.",
    replies: [],
  },
]

export function BlogComments() {
  const [commentText, setCommentText] = useState("")

  return (
    <div className="mt-12 rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg">
      <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-6">Comments ({comments.length})</h3>

      {/* Add comment form */}
      <div className="mb-8">
        <Textarea
          placeholder="Add a comment..."
          className="mb-4 bg-white/70 dark:bg-gray-800/70"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end">
          <Button disabled={!commentText.trim()}>Post Comment</Button>
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="rounded-lg bg-white/50 dark:bg-gray-800/50 p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-yellow-500 text-white">
                    {comment.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-green-800 dark:text-green-300">{comment.author}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{comment.content}</p>
                  <div className="mt-2 flex gap-4">
                    <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                      Reply
                    </button>
                    <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="rounded-lg bg-white/50 dark:bg-gray-800/50 p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-green-500 to-yellow-500 text-white">
                          {reply.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-green-800 dark:text-green-300">{reply.author}</h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{reply.content}</p>
                        <div className="mt-2 flex gap-4">
                          <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                            Like
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
