import blobIjo from "../images/blob ijo.png"
import blobBiru from "../images/blob biru.png"

export default function Prize() {
  return (
    <section className="bg-white relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Added blue blob with better positioning for mobile */}
        <img
          src={blobBiru || "/placeholder.svg"}
          alt=""
          className="absolute top-0 left-0 w-[200px] md:w-[400px] h-auto opacity-15"
          style={{ transform: "translate(-20%, -20%)" }}
        />

        <img
          src={blobIjo || "/placeholder.svg"}
          alt=""
          className="absolute bottom-0 right-0 w-[200px] md:w-[605px] h-auto opacity-20"
          style={{ transform: "translate(20%, 20%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Adjusted text size for mobile */}
        <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 md:mb-16 font-gotham">TOTAL PRIZE</h2>

        {/* Prize amount with responsive text sizing */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-gotham bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-transparent bg-clip-text inline-block">
              IDR
            </h3>
            <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-gotham bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-transparent bg-clip-text inline-block mt-2">
              XX,000,000
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}