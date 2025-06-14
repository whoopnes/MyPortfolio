import { Link } from "react-router-dom"
import blobBiru from "../images/blob biru.png"
import blobIjo from "../images/blob ijo.png"

export default function Features() {
  return (
    <section className="bg-white relative z-10 -mt-12"> 
    {/* Section ini tolong benerin lg biar blobsnya lebih blended w Speakers Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={blobBiru}
          className="absolute bottom-[-100px] left-[-100px] w-[500px] h-auto opacity-60"  
          style={{ transform: "translateX(20%) translateY(60%)" }} 
        />
        <img
          src={blobIjo}
          className="absolute bottom-[-100px] right-[-150px] w-[550px] h-auto opacity-60"  
          style={{ transform: "translateX(20%) translateY(60%)" }} 
        />
      </div>

      <div className="container mx-auto px-4 py-12"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Business Case */}
          <div className="text-center">
            <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-lg font-gotham">INTERNATIONAL BUSINESS CASE COMPETITION</h3>
          </div>

          {/* Company Visit */}
          <div className="text-center">
            <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="font-bold text-lg font-gotham">COMPANY VISIT</h3>
          </div>

  
          <div className="text-center">
            <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-lg font-gotham">COACHING</h3>
          </div>

        {/* cta */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              {/* <h3 className="font-bold text-lg mb-4 font-gotham">OPEN IN 21 DAYS</h3> */}
              <Link
                to="/register"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-bold transition-colors font-myriad"
              >
                Register Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
