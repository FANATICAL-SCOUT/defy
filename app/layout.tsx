import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { Footer } from '@/components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative min-h-screen">
          <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background" />
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <Navbar />
          <main className="relative pt-16">{children}</main>
          <Footer/>
          <Toaster/>
          
          
        </div>
      </body>
    </html>
  )
}

