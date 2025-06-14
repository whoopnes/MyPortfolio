"use client"

import blobBiru from "../images/blob biru.png"
import blobIjo from "../images/blob ijo.png"
import linkedinIcon from "../images/linkedin.png"
import presidentImage from "../images/comingsoon.png"

export default function President() {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={blobBiru}
          alt="Blob Biru"
          className="absolute top-0 right-0 w-[250px] md:w-[400px] opacity-20 translate-x-1/3"
        />
        <img
          src={blobIjo}
          alt="Blob Ijo"
          className="absolute bottom-0 left-0 w-[200px] md:w-[350px] opacity-20 translate-y-1/3"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold mb-12">
          MESSAGE FROM PRESIDENT
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 flex-wrap">
          {/* Image */}
          <div className="w-full md:w-5/12 lg:w-1/2 max-w-sm mx-auto md:mx-0">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img
                src={presidentImage}
                alt="Adzin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Adzin</h3>
              <a
                href="https://www.linkedin.com/in/kayla-tarliman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              President of Do Well Do Good BINUS
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



