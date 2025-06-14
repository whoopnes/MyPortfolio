import chirag from "../images/speakers.png"
import albert from "../images/speakers2.jpeg"
import rivaldo from "../images/rivaldo.png"
import blobBiru from "../images/blob biru.png"
import blobIjo from "../images/blob ijo.png"
import comingSoon from "../images/comingsoon.png"
import marcheline from "../images/judge_marcheline.jpg"
import tasya from "../images/judge_tasya.jpg"

//ganti sm pic masing masing speakers
const speakerImages = {
  chirag: "../images/speakers.png",
  maemunah: "/placeholder.svg?height=400&width=200",
  anton: "/placeholder.svg?height=400&width=200",
  rusdi: "/placeholder.svg?height=400&width=200",
  fitri: "/placeholder.svg?height=400&width=200",
}

export default function Speakers() {
  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <img
          src={blobBiru || "/placeholder.svg"}
          alt=""
          className="absolute top-0 left-0 w-[400px] md:w-[765px] h-auto opacity-20"
          style={{
            transform: "translate(-30%, -30%)",
          }}
        />
        <img
          src={blobIjo || "/placeholder.svg"}
          alt=""
          className="absolute bottom-0 right-0 w-[300px] md:w-[605px] h-auto opacity-20"
          style={{
            transform: "translate(30%, 30%)",
          }}
        />
      </div>

      {/* judges section - now first */}
      <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
        <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 md:mb-12 font-gotham">JUDGES</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/*judge 1*/}
          <div className="w-[200px] h-[400px] rounded-[10px] overflow-hidden shadow-lg relative group">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={marcheline || "/placeholder.svg"}
                alt="Marcheline Natasya Santoso"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
          <div className="absolute top-0 right-0">
          <div className="bg-emerald-500 text-white px-2 py-1 text-xs font-bold shadow-md transform rotate-0 origin-top-right">
            Pre-Eliminary Judge
          </div>
        </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-500 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <div className="h-[60px] flex flex-col justify-end">
                  <h3 className="text-xl font-black font-gotham">Marcheline Natasya</h3>
                </div>
                <div className="h-[40px] overflow-hidden">
                  <p className="text-sm font-myriad-semibold-it">Assurance Associate at EY Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* judge 2 */}
          <div className="w-[200px] h-[400px] rounded-[10px] overflow-hidden shadow-lg relative group">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={tasya || "/placeholder.svg"}
                alt="Tasya Augustiya"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
          <div className="absolute top-0 right-0">
          <div className="bg-emerald-500 text-white px-2 py-1 text-xs font-bold shadow-md transform rotate-0 origin-top-right">
            Pre-Eliminary, Semi Final Judge
          </div>
        </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-500 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <div className="h-[60px] flex flex-col justify-end">
                  <h3 className="text-xl font-black font-gotham">Tasya Augustiya</h3>
                </div>
                <div className="h-[40px] overflow-hidden">
                  <p className="text-sm font-myriad-semibold-it">Founder and CEO at Pojok MejaKursi</p>
                </div>
              </div>
            </div>
          </div>

          {/* judge 3*/}
          <div className="w-[200px] h-[400px] rounded-[10px] overflow-hidden shadow-lg relative group">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={comingSoon || "/placeholder.svg"}
                alt="Coming Soon"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-500 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <div className="h-[60px] flex flex-col justify-end">
                  <h3 className="text-xl font-black font-gotham">COMING SOON</h3>
                </div>
                <div className="h-[40px] overflow-hidden">
                  <p className="text-sm font-myriad-semibold-it"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* speakers section - now second */}
        <h2 className="text-3xl md:text-[48px] text-center font-black mt-16 md:mt-20 mb-8 md:mb-12 font-gotham">
          SPEAKERS
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {/* speaker1 */}
          <div className="w-[200px] h-[400px] rounded-[10px] overflow-hidden shadow-lg relative group">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={chirag || "/placeholder.svg"}
                alt="Chirag"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* overlay green grad*/}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-500 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <div className="h-[60px] flex flex-col justify-end">
                  <h3 className="text-xl font-black font-gotham">Chirag Mangwani</h3>
                </div>
                <div className="h-[40px] overflow-hidden">
                  <p className="text-sm font-myriad-semibold-it">PGD in Computer Science & Artificial Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* speaker2*/}
          <div className="w-[200px] h-[400px] rounded-[10px] overflow-hidden shadow-lg relative group">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={albert || "/placeholder.svg"}
                alt="Albert"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-500 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <div className="h-[60px] flex flex-col justify-end">
                  <h3 className="text-xl font-black font-gotham">Albert Lukas Pithel Hasugian</h3>
                </div>
                <div className="h-[40px] overflow-hidden">
                  <p className="text-sm font-myriad-semibold-it">Director of Gandeng Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll button*/}
        <div className="flex justify-end mt-8">
          <a
            href="#top"
            className="bg-emerald-500/80 hover:bg-emerald-500 text-white rounded-full p-3 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}