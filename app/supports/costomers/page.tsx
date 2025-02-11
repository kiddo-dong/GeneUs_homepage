import Image from "next/image"

const customers = [
  { name: "서울대학교병원", logo: "/placeholder.svg?height=100&width=200", description: "국내 최고의 의료기관" },
  { name: "삼성서울병원", logo: "/placeholder.svg?height=100&width=200", description: "첨단 의료 서비스 제공" },
  { name: "아산병원", logo: "/placeholder.svg?height=100&width=200", description: "연구중심 병원" },
  { name: "WHO", logo: "/placeholder.svg?height=100&width=200", description: "세계보건기구" },
  { name: "CDC", logo: "/placeholder.svg?height=100&width=200", description: "미국 질병통제예방센터" },
  { name: "Red Cross", logo: "/placeholder.svg?height=100&width=200", description: "국제 인도주의 단체" },
  { name: "ㅇㅇㅇㅇ", logo: "/placeholder.svg?height=100&width=200", description: "미국 질병통제예방센터" },
  { name: "ㅇㅇㅇㅇㅇ", logo: "/placeholder.svg?height=100&width=200", description: "미국 질병통제예방센터" },
]

export default function CustomersPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">고객사</h1>
          <p className="text-xl">웰스바이오와 함께하는
            
             글로벌 파트너들</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">신뢰할 수 있는 파트너십</h2>
          <p className="text-lg text-gray-600">
            웰스바이오는 전 세계의 주요 의료기관, 연구소, 정부기관들과 협력하여 더 나은 의료 서비스와 진단 솔루션을
            제공하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer) => (
            <div key={customer.name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <Image
                  src={customer.logo || "/placeholder.svg"}
                  alt={customer.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{customer.name}</h3>
              <p className="text-gray-600 text-center">{customer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
