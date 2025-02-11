import Image from "next/image"

const partners = [
  { name: "바이오텍 Inc.", logo: "/placeholder.svg?height=100&width=200", description: "바이오센서 기술 협력" },
  { name: "메디컬 시스템즈", logo: "/placeholder.svg?height=100&width=200", description: "의료기기 공동 개발" },
  { name: "글로벌 제약", logo: "/placeholder.svg?height=100&width=200", description: "신약 개발 파트너" },
  { name: "테크놀로지 솔루션스", logo: "/placeholder.svg?height=100&width=200", description: "AI 진단 기술 협력" },
  { name: "헬스케어 이노베이션", logo: "/placeholder.svg?height=100&width=200", description: "디지털 헬스케어 협력" },
  { name: "바이오 리서치 랩", logo: "/placeholder.svg?height=100&width=200", description: "임상시험 파트너" },
]

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">협력 파트너</h1>
          <p className="text-xl">함께 혁신을 만들어가는 파트너들</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">혁신적인 협력</h2>
          <p className="text-lg text-gray-600">
            각 분야별 최고의 기업을 사업 파트너로 하여 최적의 제품을 고객에게 공급하고자 노력하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{partner.name}</h3>
              <p className="text-gray-600 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

