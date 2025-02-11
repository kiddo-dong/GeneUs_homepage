import Image from 'next/image'

const products = [
  {
    name: "care GENE™ COVID-19 RT-PCR Kit",
    description: "COVID-19 바이러스의 RNA를 정확하게 검출하는 RT-PCR 키트",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "care GENE™ HPV Genotyping",
    description: "인유두종 바이러스(HPV)의 유전자형을 분석하는 키트",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "care GENE™ TB/MDR Detection",
    description: "결핵균 및 다제내성 결핵균을 검출하는 분자진단 키트",
    image: "/placeholder.svg?height=300&width=300"
  }
]

export default function MolecularDiagnosticsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[url('/images/molecular_bg.jpg')] bg-cover bg-center text-white py-20 opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">분자진단</h1>
          <p className="text-xl">고감도 유전자 검출 기술</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">분자진단 기술</h2>
          <p className="text-lg text-gray-600">
            웰스바이오의 분자진단 기술은 최신 유전체학과 생물정보학을 활용하여 
            질병의 유전적 원인을 정확하게 분석합니다. 우리의 분자진단 제품들은 
            개인 맞춤 의학 시대를 앞당기는 데 기여하고 있습니다.
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

