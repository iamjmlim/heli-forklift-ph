import Link from 'next/link'
import { Facebook, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
              HELI FORKLIFT PH
            </h3>
            <p className="text-gray-400 mb-4">
              Leading supplier of industrial material handling equipment in the Philippines. 
              We provide quality forklifts, reach trucks, scissor lifts, and comprehensive services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Facebook className="h-5 w-5 text-orange-500" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Facebook
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-orange-500" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Viber
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-orange-500" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  WeChat
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:info@heliforklift.ph" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Heli Forklift Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

