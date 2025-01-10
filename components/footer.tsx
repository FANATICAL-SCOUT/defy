'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GithubIcon, TwitterIcon, LinkedinIcon, FileTextIcon, BookOpenIcon, LayoutDashboardIcon, ShieldCheckIcon, SendIcon } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const footerLinks = {
  about: {
    title: "About",
    links: [
      { name: "Our Mission", href: "#" },
      { name: "Governance Model", href: "#" },
      { name: "Team", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Create Petition", href: "/create-petition" },
      { name: "Explore Petitions", href: "/explore" },
      { name: "My Petitions", href: "/my-petitions" },
      { name: "Dashboard", href: "/dashboard" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#", icon: BookOpenIcon },
      { name: "Governance Guide", href: "#", icon: FileTextIcon },
      { name: "Dashboard", href: "#", icon: LayoutDashboardIcon },
      { name: "Security", href: "#", icon: ShieldCheckIcon },
    ],
  },
}

const socialLinks = [
  { name: "GitHub", href: "#", icon: GithubIcon },
  { name: "Twitter", href: "#", icon: TwitterIcon },
  { name: "LinkedIn", href: "#", icon: LinkedinIcon },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setEmail("")
    setIsSubscribing(false)
  }

  return (
    <footer className="relative mt-24 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-75 blur-sm" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background">
                  <FileTextIcon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                E-Governance
              </span>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              Empowering democracy through blockchain technology. Create, sign, and track petitions with transparency and security.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-full border border-border/40 p-2 transition-colors hover:border-primary"
                >
                  <item.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">{footerLinks.about.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.about.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">{footerLinks.quickLinks.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.quickLinks.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold">{footerLinks.resources.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.resources.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <item.icon className="mr-2 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for the latest updates and features.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="gradient-border"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubscribing}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  >
                    {isSubscribing ? (
                      "Subscribing..."
                    ) : (
                      <SendIcon className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} E-Governance DApp. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}