import grantLogo from "../images/granthornton.png"
import blobBiru from "../images/blob biru.png"
import blobIjo from "../images/blob ijo.png"
import antam from "../images/antam.png"

export default function Collaborator() {
  return (
    <section className="bg-white relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={blobBiru}
          alt=""
          className="absolute top-1/3 right-0 w-[250px] md:w-[400px] h-auto opacity-15"
          style={{ transform: "translateX(30%)" }}
        />

        <img
          src={blobIjo}
          alt=""
          className="absolute -bottom-20 -left-20 w-[200px] md:w-[350px] h-auto opacity-15"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 font-gotham break-words">
          OUR COLLABORATOR
        </h2>
        <div className="max-w-md mx-auto flex items-center justify-center mb-8">
          <img src={grantLogo || "/placeholder.svg"} alt="Grand Thorton" className="max-w-full h-auto max-h-24" />
        </div>
      </div>
    </section>
  )
}