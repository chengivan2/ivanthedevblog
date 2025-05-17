"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, FileText, Home, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AdminOverview } from "@/components/admin/admin-overview"
import { AdminBlogPosts } from "@/components/admin/admin-blog-posts"
import { AdminUsers } from "@/components/admin/admin-users"
import { AdminSettings } from "@/components/admin/admin-settings"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const contentVariants = {
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
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-green-950 dark:via-gray-900 dark:to-yellow-950">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="rounded-full bg-gradient-to-r from-green-500 to-yellow-500 p-1"
              >
                <div className="rounded-full bg-white dark:bg-gray-900 p-1">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-yellow-500" />
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg font-bold text-green-800 dark:text-green-300"
              >
                Admin Panel
              </motion.span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <SidebarMenu>
                <motion.div variants={contentVariants}>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>

                <motion.div variants={contentVariants}>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "analytics"} onClick={() => setActiveTab("analytics")}>
                      <BarChart3 className="h-5 w-5" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>

                <motion.div variants={contentVariants}>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "blog-posts"} onClick={() => setActiveTab("blog-posts")}>
                      <FileText className="h-5 w-5" />
                      <span>Blog Posts</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>

                <motion.div variants={contentVariants}>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "users"} onClick={() => setActiveTab("users")}>
                      <Users className="h-5 w-5" />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>

                <motion.div variants={contentVariants}>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "settings"} onClick={() => setActiveTab("settings")}>
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              </SidebarMenu>
            </motion.div>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home className="h-5 w-5" />
                    <span>Back to Site</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/logout">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 w-full p-6">
          <div className="flex items-center gap-4 mb-6">
            <SidebarTrigger className="order-first" />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-green-800 dark:text-green-300"
            >
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "analytics" && "Analytics"}
              {activeTab === "blog-posts" && "Manage Blog Posts"}
              {activeTab === "users" && "Manage Users"}
              {activeTab === "settings" && "Settings"}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 rounded-2xl p-6 shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial="hidden" animate="visible" exit="exit" variants={contentVariants}>
                {activeTab === "overview" && <AdminOverview />}
                {activeTab === "analytics" && <AdminOverview />}
                {activeTab === "blog-posts" && <AdminBlogPosts />}
                {activeTab === "users" && <AdminUsers />}
                {activeTab === "settings" && <AdminSettings />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SidebarProvider>
  )
}
