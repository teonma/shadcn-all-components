import Link from "next/link"
import { VercelLogo } from "./vercel-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AuthFormProps {
  type: 'login' | 'signup'
}

export function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === 'login'
  const title = isLogin ? 'Log in to Vercel' : 'Create your account'
  const buttonText = isLogin ? 'Continue with Email' : 'Sign Up with Email'
  const footerText = isLogin ? "Don't have an account?" : "Already have an account?"
  const footerLinkText = isLogin ? 'Sign Up' : 'Log In'
  const footerLinkHref = isLogin ? '/signup' : '/login'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <VercelLogo />
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
            Contact
          </Link>
          <Link href={footerLinkHref} className="text-sm text-gray-600 hover:text-black transition-colors">
            {footerLinkText}
          </Link>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="Email address"
                type="email"
                required
                className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-shadow"
              />
            </div>
            <Button 
              type="submit"
              className="w-full h-12 bg-black text-white hover:bg-gray-900 transition-colors"
            >
              {buttonText}
            </Button>
          </form>
          <div className="text-center">
            <Link href={`/${type}/options`} className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              ← Other {isLogin ? 'Login' : 'Sign Up'} options
            </Link>
          </div>
        </div>
      </main>
      <footer className="p-6 text-center">
        <p className="text-sm text-gray-600">
          {footerText}{" "}
          <Link href={footerLinkHref} className="text-blue-600 hover:text-blue-800 transition-colors">
            {footerLinkText}
          </Link>
        </p>
      </footer>
    </div>
  )
}

