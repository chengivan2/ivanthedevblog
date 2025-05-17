import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, MessageSquare, Settings } from "lucide-react"

// Mock data for the dashboard
const visitData = [
  { name: "May 10", visits: 1200 },
  { name: "May 11", visits: 1900 },
  { name: "May 12", visits: 2100 },
  { name: "May 13", visits: 2400 },
  { name: "May 14", visits: 1800 },
  { name: "May 15", visits: 2800 },
  { name: "May 16", visits: 3200 },
]

const categoryData = [
  { name: "React", value: 35 },
  { name: "TypeScript", value: 25 },
  { name: "Databases", value: 15 },
  { name: "Security", value: 10 },
  { name: "Architecture", value: 15 },
]

const COLORS = ["#4ade80", "#facc15", "#38bdf8", "#fb7185", "#a78bfa"]

export function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Visits</CardDescription>
            <CardTitle className="text-4xl">13.4K</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-500">+12% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Blog Posts</CardDescription>
            <CardTitle className="text-4xl">42</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-500">+3 new this week</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Comments</CardDescription>
            <CardTitle className="text-4xl">189</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-500">+24% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Subscribers</CardDescription>
            <CardTitle className="text-4xl">2.1K</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-500">+8% from last month</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Visits</CardTitle>
            <CardDescription>Number of visits in the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={visitData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visits" fill="#4ade80" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Categories</CardTitle>
            <CardDescription>Distribution of blog posts by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions on the blog</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="mr-4 h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New blog post published</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  "Building Scalable React Applications with Next.js" - 2 hours ago
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4 h-9 w-9 rounded-full bg-yellow-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">John Doe (john@example.com) - 4 hours ago</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4 h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New comment</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  On "Advanced TypeScript Patterns for Better Code" - 6 hours ago
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4 h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center">
                <Settings className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Settings updated</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Site settings were updated - 1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
