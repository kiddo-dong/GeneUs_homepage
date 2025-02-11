'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'care START™',
    image: '/placeholder.svg?height=300&width=300',
    description: '혁신적인 진단 솔루션',
    certifications: ['CE', 'KMFDS Approved'],
  },
  {
    name: 'care GENE™',
    image: '/placeholder.svg?height=300&width=300',
    description: '정확한 유전자 검사',
    certifications: ['CE', 'KMFDS Approved'],
  },
  {
    name: 'care US™',
    image: '/placeholder.svg?height=300&width=300',
    description: '첨단 의료 기기',
    certifications: ['CE', 'KMFDS Approved'],
  },
]

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">제품</h2>
          <p className="text-gray-600">최첨단 기술로 개발된 진단 솔루션을 제공합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 mb-6">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex gap-2">
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}