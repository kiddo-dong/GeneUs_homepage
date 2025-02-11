import Image from 'next/image'

export default function OverviewPage() {
  return (
    <div className="pt-20">
      <div className="bg-[url('/images/vision_bg.jpg')] bg-cover bg-center text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">회사 개요</h1>
          <p className="text-xl text-gray-700">글로벌 체외진단 전문기업</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">기업 정보</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">설립일</h3>
                <p className="text-gray-600">2015. 07. 29
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">대표이사</h3>
                <p className="text-gray-600">김성훈</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">업종</h3>
                <p className="text-gray-600">의료기기 유통·수출입·무역업
                </p>
                
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">주요제품</h3>
                <p className="text-gray-600">체외진단 의료 장비 및 시약, 원료
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">본사</h3>
                <p className="text-gray-600">서울시 금천구 디지털로 178번지</p>
                <p className="text-gray-600">B동 1902-1906호(가산동, 가산퍼블릭)</p>

              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative h-[300px]">
              <Image
                src="/images/company_building.jpg"
                alt="Company Building"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">GeneUs는</h3>
              <p className="text-gray-600">
              고객의 다양한 NEEDS에 맞게 국내외 최신 체외진단 제품군을 최적화하고
	            또한, 자사의 R&D 역량을 확보하여 최신 기술의 제품을 개발하여 고객에 공급할 예정입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

