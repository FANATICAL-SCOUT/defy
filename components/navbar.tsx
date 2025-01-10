'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { HomeIcon, FileTextIcon, SearchIcon, UserIcon, PlusCircleIcon } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Create Petition', href: '/create-petition', icon: PlusCircleIcon },
  { name: 'Explore Petitions', href: '/explore', icon: SearchIcon },
  { name: 'My Petitions', href: '/my-petitions', icon: FileTextIcon },
  { name: 'Profile', href: '/profile', icon: UserIcon },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-75 blur-sm" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background">
              <FileTextIcon className="h-4 w-4 text-primary" />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            E-Governance DApp
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="hidden md:inline-block">{item.name}</span>
              </Link>
            ))}
          </nav>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}

