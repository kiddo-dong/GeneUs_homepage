import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">GeneUs Corp.</h3>
            <p className="text-sm">젠어스는 인류 건강 증진을 위하여 일하는 글로벌 체외진단 기업입니다.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">회사 소개</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/vision" className="hover:text-white transition-colors">
                  비전
                </Link>
              </li>
              <li>
                <Link href="/company/overview" className="hover:text-white transition-colors">
                  회사 개요
                </Link>
              </li>
              <li>
                <Link href="/company/history" className="hover:text-white transition-colors">
                  회사 연혁
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">제품 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/rapid-diagnostics" className="hover:text-white transition-colors">
                  신속진단
                </Link>
              </li>
              <li>
                <Link href="/products/molecular-diagnostics" className="hover:text-white transition-colors">
                  분자진단
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>geneus@geneus.co.kr</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>02-2169-2477</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-auto  w-auto" />
                <span>서울특별시 금천구 디지털로 178, B동 19층 1902~1906호(가산퍼블릭)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} GeneUs, Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}