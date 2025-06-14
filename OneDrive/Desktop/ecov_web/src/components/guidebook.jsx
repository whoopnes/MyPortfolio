import { FiDownload } from "react-icons/fi"

function GuideBook({ title = "GUIDEBOOK" }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 md:mb-12 font-gotham">{title}</h2>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-3 sm:p-4 bg-gray-50 border-b">
          <div className="flex justify-between items-center">
            <div className="text-xs sm:text-sm">EcoVation Guidebook</div>
          </div>
        </div>

        <div className="flex justify-center p-2 sm:p-4 bg-white">
          <iframe
            src="/guidebook2.pdf#toolbar=0&zoom=55"
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] border-0"
            title="PDF Viewer"
          />
        </div>
      </div>

      <div className="flex justify-center mt-4 sm:mt-8">
        <a
          href="https://drive.google.com/drive/folders/1Bt-GYKQGS5wFR2w1_vDtz48u4h7ZEfsF?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-emerald-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FiDownload className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
          Download Guidebook
        </a>
      </div>
    </div>
  )
}

export default GuideBook
