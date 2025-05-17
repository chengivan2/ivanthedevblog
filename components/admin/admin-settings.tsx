"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function AdminSettings() {
  const [siteSettings, setSiteSettings] = useState({
    siteName: "CodeInsight",
    siteDescription: "Sharing knowledge and insights about software engineering, programming, and technology.",
    siteUrl: "https://codeinsight.com",
    postsPerPage: "10",
    enableComments: true,
    enableSubscriptions: true,
    enableDarkMode: true,
    enableSocialSharing: true,
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    footerText: "© 2025 CodeInsight. All rights reserved.",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSiteSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSiteSettings((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <Tabs defaultValue="general">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Manage your site's basic information and configuration.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input id="siteName" name="siteName" value={siteSettings.siteName} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="siteDescription">Site Description</Label>
              <Textarea
                id="siteDescription"
                name="siteDescription"
                value={siteSettings.siteDescription}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="siteUrl">Site URL</Label>
              <Input id="siteUrl" name="siteUrl" value={siteSettings.siteUrl} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="postsPerPage">Posts Per Page</Label>
              <Input
                id="postsPerPage"
                name="postsPerPage"
                type="number"
                value={siteSettings.postsPerPage}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="footerText">Footer Text</Label>
              <Input id="footerText" name="footerText" value={siteSettings.footerText} onChange={handleChange} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="appearance">
        <Card>
          <CardHeader>
            <CardTitle>Appearance Settings</CardTitle>
            <CardDescription>Customize how your site looks and feels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enableDarkMode">Enable Dark Mode</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Allow users to switch between light and dark themes.
                </p>
              </div>
              <Switch
                id="enableDarkMode"
                checked={siteSettings.enableDarkMode}
                onCheckedChange={(checked) => handleSwitchChange("enableDarkMode", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enableSocialSharing">Enable Social Sharing</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Show social sharing buttons on blog posts.</p>
              </div>
              <Switch
                id="enableSocialSharing"
                checked={siteSettings.enableSocialSharing}
                onCheckedChange={(checked) => handleSwitchChange("enableSocialSharing", checked)}
              />
            </div>

            <div className="grid gap-2 pt-4">
              <Label>Theme Colors</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primaryColor" className="text-xs">
                    Primary Color
                  </Label>
                  <div className="flex mt-1">
                    <div className="h-10 w-10 rounded-l-md bg-green-500" />
                    <Input id="primaryColor" defaultValue="#4ade80" className="rounded-l-none" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="accentColor" className="text-xs">
                    Accent Color
                  </Label>
                  <div className="flex mt-1">
                    <div className="h-10 w-10 rounded-l-md bg-yellow-500" />
                    <Input id="accentColor" defaultValue="#facc15" className="rounded-l-none" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="advanced">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Settings</CardTitle>
            <CardDescription>Configure advanced features and integrations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enableComments">Enable Comments</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Allow users to comment on blog posts.</p>
              </div>
              <Switch
                id="enableComments"
                checked={siteSettings.enableComments}
                onCheckedChange={(checked) => handleSwitchChange("enableComments", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enableSubscriptions">Enable Subscriptions</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Allow users to subscribe to your newsletter.</p>
              </div>
              <Switch
                id="enableSubscriptions"
                checked={siteSettings.enableSubscriptions}
                onCheckedChange={(checked) => handleSwitchChange("enableSubscriptions", checked)}
              />
            </div>

            <div className="grid gap-2 pt-4">
              <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
              <Input
                id="googleAnalyticsId"
                name="googleAnalyticsId"
                value={siteSettings.googleAnalyticsId}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="customCss">Custom CSS</Label>
              <Textarea id="customCss" placeholder="Add custom CSS here..." className="font-mono text-sm h-32" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
