export default function HistoryPage() {
  return (
    <div className="pt-20">
      <div className="bg-[url('/images/vision_bg.jpg')] bg-cover bg-center text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">회사 연혁</h1>
          <p className="text-xl text-gray-700">혁신의 발자취</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">

        <div className="border-l-4 border-gray-500 pl-8 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">2024</span>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-lg">02월</h3>
              <p className="text-gray-600">가산 퍼블릭으로 본사 이전</p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">00월</h3>
              <p className="text-gray-600">벤처, ISO, GMP 인증</p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">00월</h3>
              <p className="text-gray-600">R&D 및 생산</p>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-sky-500 pl-8 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">2023</span>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-lg">01월</h3>
              <p className="text-gray-600">인천공항 내 코로나19 검사센터에 분자진단 검사설비 납품</p>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-orange-500 pl-8 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold">2022</span>
              <div className="h-0.5 flex-1 bg-gray-200"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">메인비즈 인증</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">Seegene COVID-19 PCR 원료 공급 개시</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">Zybio 제품 공급권 획득</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">HK Genomics 대리점 계약 체결</p>
                <p className="text-gray-600">Eone Biotech 대리점 계약 체결</p>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-8 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold">2021</span>
              <div className="h-0.5 flex-1 bg-gray-200"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">연구 전담 부서 설립</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">㈜바이오세움 대리점 체결</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">SD biosensor 납품권 획득</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">인천공항 명지의원 검사센터 구축 및 납품</p>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-8 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold">2020</span>
              <div className="h-0.5 flex-1 bg-gray-200"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">(주)젠어스로 사명 변경</p>
                <p className="text-gray-600">現 금천구로 본사 이전</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">00월</h3>
                <p className="text-gray-600">연구소 확장</p>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold">2015</span>
              <div className="h-0.5 flex-1 bg-gray-200"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-lg">07월</h3>
                <p className="text-gray-600">(주)셀앤제네틱스 설립</p>
              </li>
              {/*<li>
                <h3 className="font-semibold text-lg">07월</h3>
                <p className="text-gray-600">미국 FDA 승인</p>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

