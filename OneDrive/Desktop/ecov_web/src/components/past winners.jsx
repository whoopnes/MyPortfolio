"use client"

import blobBiru from "../images/blob biru.png"
import blobIjo from "../images/blob ijo.png"
import firstWinnerBadge from "../images/1st winner.png"
import secondWinnerBadge from "../images/2nd winner.png"
import thirdWinnerBadge from "../images/3rd winner.png"
import nicholas from "../images/nicholas_sandwich.jpeg"
import taniya from "../images/taniya.jpeg"
import kayla from "../images/kayla.jpg"
import linkedinIcon from "../images/linkedin.png"

const teamImages = {
  team1: kayla,
  team2: nicholas,
  team3: taniya,
}

export default function PastWinners() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={blobBiru || "/placeholder.svg"}
          alt=""
          className="absolute top-0 right-0 w-[300px] md:w-[500px] h-auto opacity-20"
          style={{ transform: "translateX(30%)" }}
        />

        <img
          src={blobIjo || "/placeholder.svg"}
          alt=""
          className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-auto opacity-20"
          style={{ transform: "translateY(40%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 md:mb-12 font-gotham">
          PAST WINNERS' TESTIMONY
        </h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* 1st Winner */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-5/12">
              <img
                src={teamImages.team1 || "/placeholder.svg"}
                alt="Kayla Tarliman"
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-7/12">
              <div className="flex items-center mb-3">
                <img src={firstWinnerBadge || "/placeholder.svg"} alt="1st Winner" className="h-8 w-auto mr-2" />
                <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                  1st Winner
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-gotham flex items-center gap-2">
                Kayla Tarliman
                <a
                  href="https://www.linkedin.com/in/kayla-tarliman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
                </a>
              </h3>
              <p className="text-right text-sm mb-4 font-myriad">Team Gula Tomat - Ecovation '24</p>
              <p className="text-gray-700 font-myriad">
                Winning EcoVation '24 with our GTM deliverables for TAVI was a thrilling milestone. We immersed ourselves in shaping their market identity, turning complex ideas into a compelling narrative that stood out. The process was a deep dive into creativity and strategy, revealing how powerful branding can drive recognition and credibility in today's market. From the highs of breakthrough moments to the grit of solving tough problems, every stage taught us something valuable. I'd highly recommend jumping into this challenge, even if it's tough, you'll come out with a stronger grasp of case solving and a fresh perspective.
              </p>
            </div>
          </div>

          {/* 2nd Winner */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-5/12 md:order-2">
              <img
                src={teamImages.team2 || "/placeholder.svg"}
                alt="Nicholas"
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            <div className="w-full md:w-7/12 md:order-1">
              <div className="flex items-center mb-3">
                <img src={secondWinnerBadge || "/placeholder.svg"} alt="2nd Winner" className="h-8 w-auto mr-2" />
                <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">2nd Winner</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-gotham flex items-center gap-2">
                Nicholas
                <a
                  href="https://www.linkedin.com/in/nicholas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
                </a>
              </h3>
              <p className="text-right text-sm mb-4 font-myriad">Team Sandwich Solution - Ecovation '24</p>
              <p className="text-gray-700 font-myriad">
                EcoVation last year was a genuinely enriching experience. Tackling a case that sits at the intersection of marketing and sustainability challenged us to think beyond surface-level solutions and consider the deeper trade-offs and long-term implications of every decision. With sustainability becoming an increasingly urgent (and often complex) issue, being able to critically engage with it in a practical context was both timely and eye-opening.
              </p>
            </div>
          </div>

          {/* 3rd Winner */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-5/12">
              <img
                src={teamImages.team3 || "/placeholder.svg"}
                alt="Taniya Vanessa Ken"
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-7/12">
              <div className="flex items-center mb-3">
                <img src={thirdWinnerBadge || "/placeholder.svg"} alt="3rd Winner" className="h-8 w-auto mr-2" />
                <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                  3rd Winner
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-gotham flex items-center gap-2">
                Taniya Vanessa Ken
                <a
                  href="https://www.linkedin.com/in/taniya-vanessa-ken?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
                </a>
              </h3>
              <p className="text-right text-sm mb-4 font-myriad">Team Vincitore - Ecovation '24</p>
              <p className="text-gray-700 font-myriad">
                EcoVation 2024 was an unforgettable journey that taught me so much about tackling real-world business cases with both analytical precision and creative thinking. Earning 3rd place was a proud moment, but more importantly, the experience pushed me out of my comfort zone and helped me grow both as a problem-solver and team player. The entire competition was well-executed, insightful, and deeply inspiring. I'm incredibly grateful for the opportunity and can't wait to join the next EcoVation to learn, compete, and grow even more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

