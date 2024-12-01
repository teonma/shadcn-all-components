import Link from "next/link"
import { VercelLogo } from "@/components/vercel-logo"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <VercelLogo />
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/login" className="text-sm text-gray-600 hover:text-black transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="text-sm text-gray-600 hover:text-black transition-colors">
            Sign Up
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Vercel</h1>
          <p className="text-xl text-gray-600 mb-8">
            Develop. Preview. Ship. For the best frontend teams – Vercel is the platform for developers, providing the speed and reliability innovators need to create at the moment of inspiration.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-black text-white hover:bg-gray-900 transition-colors px-8 py-3 rounded-md">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100 transition-colors px-8 py-3 rounded-md">
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="p-6 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Vercel, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

            
