import { redirect } from "next/navigation"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

// This would normally check for authentication
const isAuthenticated = true

export default function AdminPage() {
  // In a real app, you would check if the user is authenticated
  if (!isAuthenticated) {
    redirect("/login")
  }

  return <AdminDashboard />
}
