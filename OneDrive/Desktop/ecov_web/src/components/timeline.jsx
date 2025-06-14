"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState([])

 const timelineItems = [
    {
      date: "18th May - 2nd June",
      summary: "Webinar Registration",
      details:
      <>
        <p>
          Don't forget to register for our amazing Webinar for FREE! The webinar will cover 
          <b> Role of Artificial Intelligence in Developing in Sustainable Supply Chain </b> a very important topic in today's modern world! So what are you waiting for? Sign up and learn more!
          </p>
      </>,
    },
    {
      date: "3rd June",
      summary: "Webinar",
      details:
      <>
        <p>
          Join us for an insightful webinar on the 
          <b> Role of Artificial Intelligence in Developing Sustainable Supply Chains</b> featuring Chirag Mangwani, Product Engineer at CredAble. This session will explore how AI transforms supply chains to drive efficiency, reduce waste, and foster sustainability. Our expert Chirag Mangwani brings over 3 years of experience in fintech sectors across Southeast Asia and the United Arab Emirates, specialising in developing AI-powered lending tools and building sustainable digital financial infrastructure.
        </p>
      </>,
    },
    {
      date: "5th June - 17th June",
      summary: "Competition Registration",
      details:
      <>
        <p>
          Ready, set, compete! Register now and show us what you've got! Don't forget to register at   ecovation.dwdgbinus.com/register and get the chance to win Rp. xx,000,000. Don't forget to follow @dwdg_binus for updates!
          </p>
      </>,
    },
    {
      date: "17th June",
      summary: "Technical Meeting",
      details:
      <>
        <p>
          Already in? Well, time to have a meeting! This meeting will give you information on the competition framework and guidance. So don't miss it! All the important information you need to know to help you win is here!
          </p>
      </>,
    },
    {
      date: "18th June",
      summary: "Coaching Clinic",
      details:
      <>
        <p>
          A bit nervous? Well, not to worry! We have experienced speakers who will be giving you the insights, strategies and guidance you need! So what are you waiting for? Let's level up our skills with our expert!
          </p>
      </>,
    },
    {
      date: "17th June - 27th June",
      summary: "Qualification Round",
      details:
      <>
        <p>
          The journey to victory starts here! Put your thinking caps on, it's time to unleash your skills! Teams will be given a business case and will submit a 5-page deck on how to solve the problem in the case. Good luck! 

        </p>    
      </>,
    },
    {
      date: "10th July - 17th July",
      summary: "Preliminary Round",
      details:
      <>
        <p>
          Level up! The stakes are higher, the competition fiercer, will you rise? Propose your solutions, and show us how you can solve this case! The top 20 teams will pass this round, so make sure you're on top!
        </p>
      </>,
    },
    {
      date: "29th July - 5th August",
      summary: "Semi Final Round",
      details:
      <>
        <p>
          Congrats! One step from the finals. One inch from greatness. How bad do you want it? The Semi Final round is where you need to prove yourself with a deck that has great and refined solutions, along with designs that push clarity.</p>
      </>,
    },
     {
      date: "12th August - 19th August",
      summary: "Mentoring Period",
      details:
      <>
        <p>
          The final preparation before the final round! You made it this far, now it’s time to perfect your craft with mentors who will teach you how to win this once and for all! So don’t miss out on your chance to talk to experienced winners so you can be a winner!
          </p>
      </>,
    },
     {
      date: "20th August",
      summary: "Pitching",
      details:
      <>
        <p>
          This is it! The final round, time to give it your all! Time to show the most polished version of your work, and our judges will select our winner! This is your time to give it your all for the final stage and be the victors!
          </p>
      </>,
    },
  ]

  const toggleItem = (index) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const isExpanded = (index) => expandedItems.includes(index)

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 md:mb-12 font-gotham">TIMELINE</h2>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-emerald-400"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Circle marker */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center"></div>

                {/* Content */}
                <div className="pb-2 border-b border-gray-300">
                  <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">{item.date}</h3>
                      <p className="text-gray-700">{item.summary}</p>
                    </div>
                    <button
                      onClick={() => toggleItem(index)}
                      className="p-2"
                      aria-label={isExpanded(index) ? "Collapse" : "Expand"}
                    >
                      {isExpanded(index) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

      
                  {isExpanded(index) && (
                    <div className="mt-3 pl-0 text-gray-700 animate-fadeIn">
                      <p>{item.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
