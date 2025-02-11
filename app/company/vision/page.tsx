import Image from 'next/image'

export default function VisionPage() {
  return (
    <div className="pt-20">
      <div className="bg-[url('/images/vision_bg.jpg')] bg-cover bg-center text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">기업 비전</h1>
          <p className="text-xl text-gray-700">Make the Better life and future</p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">GeneUs</h2>
            <p className="text-lg text-gray-600 mb-8">
              과학기술의 발전으로 무병 장수를 꿈꾸는 현 시대에 
              유전자 진단 기술을 기반으로 
              우리 모두와 인류의 삶과 미래를 이롭게 하고자 설립하였습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">혁신적인 기술</h3>
                  <p className="text-gray-600">국내외 최신 체외진단 제품군을 최적화하고</p>
                  <p className="text-gray-600">최첨단 진단 기술을 개발하고 있습니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">신속, 정확한 공급</h3>
                  <p className="text-gray-600">다양한 고객의 니즈에 최적화된 최고의 체외진단 제품을
                  </p>
                  <p className="text-gray-600">신속, 정확하게 공급하고 있습니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">지속가능한 성장</h3>
                  <p className="text-gray-600">최고의 품질과 고객만족을 최우선으로 하여</p>
                  <p className="text-gray-600">고객과 함께 성장하는 든든하고 신뢰받는 동반자가 되겠습니다.</p>

                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/lab_vision.jpg"
              alt="Company Vision"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

