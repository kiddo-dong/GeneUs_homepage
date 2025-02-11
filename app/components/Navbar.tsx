'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [language, setLanguage] = useState('KOR')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo.jpg" 
              alt="GeneUs Logo"
              className="h-20 w-auto"
            />
          </Link>


          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  회사소개
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/company/vision">비전</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/company/overview">회사 개요</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/company/history">회사 연혁</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  제품정보
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/products/rapid-diagnostics">신속진단</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/molecular-diagnostics">분자진단</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">
              연구/개발
            </Link>
            <Link href="/business" className="text-gray-600 hover:text-gray-900 transition-colors">
              알림/홍보
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  협력업체
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/supports/costomers">고객사</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/supports/partners">협력 파트너</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('KOR')}>
                한국어
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ENG')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

