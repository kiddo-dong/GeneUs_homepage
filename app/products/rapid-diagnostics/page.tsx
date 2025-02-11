import Image from 'next/image'

const products = [
  {
    name: "care START™ COVID-19 Antigen",
    description: "COVID-19 항원을 신속하게 검출하는 진단키트",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "care START™ Malaria Pf/PAN",
    description: "말라리아 감염을 신속하게 진단하는 키트",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "care START™ Influenza A&B",
    description: "인플루엔자 A와 B 바이러스를 동시에 검출하는 키트",
    image: "/placeholder.svg?height=300&width=300"
  }
]

export default function RapidDiagnosticsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[url('/images/rapid_bg.jpg')] bg-cover bg-center text-white py-20 opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">신속진단</h1>
          <p className="text-xl">빠르고 정확한 진단 솔루션</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">신속진단 기술</h2>
          <p className="text-lg text-gray-600">
            웰스바이오의 신속진단 기술은 최첨단 바이오센서와 나노기술을 결합하여 
            빠르고 정확한 진단 결과를 제공합니다. 현장에서 즉시 사용 가능한 
            우리의 제품들은 의료 현장에 혁신을 가져오고 있습니다. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

