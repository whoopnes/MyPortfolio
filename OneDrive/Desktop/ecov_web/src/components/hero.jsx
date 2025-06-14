import heropic from "../images/hero-pic.png"
import logotype from "../images/ecov logotype dark.png"

export default function Hero() {
  return (
    <section className="relative top-0 mt-0 pt-0">
      {/* bg pic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heropic || "/placeholder.svg"}
          alt="Business Meeting"
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center 55%" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-8 pb-32 relative z-20">
        <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-sm rounded-xl p-4 md:p-8 mt-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="relative mb-8 md:mb-0 w-full md:w-auto">
              <div className="relative">
                <img
                  src={logotype || "/placeholder.svg"}
                  alt="ECOVATION"
                  className="w-full max-w-md relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
            </div>

            <div className="border-l-0 md:border-l-2 border-gray-400 pl-0 md:pl-6 text-white text-center md:text-left">
              <h2 className="text-center text-xl md:text-2xl font-bold font-myriad">From Factor to Foundation: Shifting The Sustainability Paradigm</h2>
            </div>
          </div>
        </div>
      </div>

      {/* wave sep */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden" style={{ marginBottom: "-1px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full block">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}



