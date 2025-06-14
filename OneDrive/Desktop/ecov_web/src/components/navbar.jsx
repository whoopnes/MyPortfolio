"use client"

import React from "react"
import dwdgLogo from "../images/DWDG.png"
import binuslogo from "../images/binus.png"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId, event) => {
    event.preventDefault()

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    } else {
      navigate("/#" + sectionId)
    }
  }

  const goToHome = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("hero")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      navigate("/")
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className="bg-[#FAF9F6]/70 shadow-sm fixed w-full z-50 backdrop-blur-md"
      style={{ borderBottom: "none", marginBottom: 0 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={goToHome}>
          <div className="flex items-center">
            <img src={dwdgLogo || "/placeholder.svg"} alt="Do Well Do Good" className="h-12 w-auto" />
          </div>
          <img src={binuslogo || "/placeholder.svg"} alt="Binus University" className="h-12 w-auto" />
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-nowrap">
          <a
            href="/#hero"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200"
            onClick={(e) => scrollToSection("hero", e)}
          >
            Home
          </a>
          <a
            href="/#timeline"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200"
            onClick={(e) => scrollToSection("timeline", e)}
          >
            Timeline
          </a>
          <a
            href="/#general-requirements"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200"
            onClick={(e) => scrollToSection("general-requirements", e)}
          >
            Requirements
          </a>
          <a
            href="/#guidebook"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200"
            onClick={(e) => scrollToSection("guidebook", e)}
          >
            Guidebook
          </a>
          <a
            href="/#past-winners"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200"
            onClick={(e) => scrollToSection("past-winners", e)}
          >
            Past Winners
          </a>
          <a
            href="/#contributors"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200"
            onClick={(e) => scrollToSection("contributors", e)}
          >
            Contributors
          </a>
          <a
            href="/#contact"
            className="text-gray-800 hover:text-[#59C287] font-medium whitespace-nowrap transition-colors duration-200 mr-4"
            onClick={(e) => scrollToSection("contact", e)}
          >
            Contact Us
          </a>
        </nav>

        {/* mobile view */}
        <div className="flex items-center space-x-2 md:hidden">
          <Link
            to="/register"
            className="bg-emerald-500 hover:bg-[#59C287] text-white px-4 py-1.5 rounded-full font-medium transition-colors duration-200 text-sm"
          >
            Register
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-[#59C287] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col justify-center items-center">
              {isMenuOpen ? (
                <>
                  <span className="block w-6 h-0.5 bg-current transform rotate-45 translate-y-0.5 transition-transform duration-200"></span>
                  <span className="block w-6 h-0.5 bg-current transform -rotate-45 transition-transform duration-200"></span>
                </>
              ) : (
                <>
                  <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-200"></span>
                  <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-200"></span>
                  <span className="block w-6 h-0.5 bg-current transition-all duration-200"></span>
                </>
              )}
            </div>
          </button>
        </div>

        <Link
          to="/register"
          className="hidden md:inline-flex bg-emerald-500 hover:bg-[#59C287] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 ml-4"
        >
          Register
        </Link>
      </div>

      {/* mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6]/80 backdrop-blur-md border-t fixed w-full z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a
                href="/#hero"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("hero", e)}
              >
                Home
              </a>
              <a
                href="/#timeline"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("timeline", e)}
              >
                Timeline
              </a>
              <a
                href="/#general-requirements"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("general-requirements", e)}
              >
                Requirements
              </a>
              <a
                href="/#guidebook"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("guidebook", e)}
              >
                Guidebook
              </a>
              <a
                href="/#past-winners"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("past-winners", e)}
              >
                Past Winners
              </a>
              <a
                href="/#contributors"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("contributors", e)}
              >
                Contributors
              </a>
              
              <a
                href="/#contact"
                className="text-gray-800 hover:text-[#59C287] font-medium py-2 transition-colors duration-200"
                onClick={(e) => scrollToSection("contact", e)}
              >
                Contact Us
              </a>
              <Link
                to="/register"
                className="bg-emerald-500 hover:bg-[#59C287] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
