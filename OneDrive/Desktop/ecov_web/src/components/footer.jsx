"use client"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaWhatsapp, FaLine, FaEnvelope } from "react-icons/fa";
import ecovationLogo from "../images/ecov logotype.png"
import dwdgLogo from "../images/DWDG.png"
import binuslogo from "../images/binus.png"
import igIcon from "../images/ig.png"
import linkedinIcon from "../images/linkedin.png"
import lineGisel from "../images/line_gisel.jpg";
import lineCella from "../images/line_cella.jpg";
import lineNaka from "../images/line_naka.jpg";

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId, event) => {
    event.preventDefault()
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      navigate("/#" + sectionId)
    }
  }

  return (
    <footer className="bg-gray-50 py-12 w-full border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Presented By */}
          <div className="flex flex-col items-center md:items-start">
            <img src={ecovationLogo} alt="ECOVATION" className="h-16 w-auto mb-4" />
            <p className="text-gray-600 mb-3 text-sm">Presented By:</p>
            <div className="flex items-center space-x-4">
              <img src={dwdgLogo} alt="Do Well Do Good" className="h-10 w-auto" />
              <img src={binuslogo} alt="Binus University" className="h-10 w-auto" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#00C782] text-lg font-bold mb-4 font-gotham">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "/" },
                { name: "Timeline", id: "timeline" },
                { name: "Requirements", id: "general-requirements" },
                { name: "Guidebook", id: "guidebook" },
                { name: "Past Winners", id: "past-winners" },
                { name: "Contributors", id: "contributors" },
                { name: "Contact Us", id: "contact" },
              ].map(link => (
                <li key={link.id}>
                  <a
                    href={link.id.startsWith("/") ? link.id : `/#${link.id}`}
                    className="text-gray-700 hover:text-[#00C782] transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      if (!link.id.startsWith("/")) scrollToSection(link.id, e)
                      else {
                        e.preventDefault()
                        if (location.pathname !== "/") navigate("/")
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-[#00C782] transition-colors duration-200 text-sm font-medium"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-[#00C782] text-lg font-bold mb-4 font-gotham">Contact Us</h3>
            <ul className="space-y-3">
              {/* Ekanaka - WhatsApp */}
              <li>
                <a href="https://wa.me/6281283335410" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaWhatsapp className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">Ekanaka Hasudungan Pratama</span>
                </a>
              </li>

              {/* Gisela - WhatsApp */}
              <li>
                <a href="https://wa.me/6281311813241" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaWhatsapp className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">Gisela Susanto</span>
                </a>
              </li>

              {/* Cella - WhatsApp */}
              <li>
                <a href="https://wa.me/6281290509536" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaWhatsapp className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">Marcella Hakim</span>
                </a>
              </li>

              {/* LINE Contacts */}
              <li>
                <a href={lineNaka} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaLine className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">Ekanaka Hasudungan Pratama</span>
                </a>
              </li>
              <li>
                <a href={lineGisel} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaLine className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">Gisela Susanto</span>
                </a>
              </li>
              <li>
                <a href={lineCella} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaLine className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">Marcella Hakim</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a href="mailto:ecovation@dwdgbinus.com" className="flex items-center group">
                  <div className="flex items-center justify-center bg-gray-100 group-hover:bg-[#00C782]/10 rounded-full w-8 h-8 mr-2 transition-colors duration-300">
                    <FaEnvelope className="text-gray-600 group-hover:text-[#00C782]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#00C782] text-sm">ecovation@dwdgbinus.com</span>
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <h3 className="text-[#00C782] text-lg font-bold mt-6 mb-4 font-gotham">Follow Us On</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dwdg_binus/" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-[#00C782] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative p-1.5 rounded-full group-hover:bg-[#00C782]/10 transition-colors duration-300">
                  <img src={igIcon} alt="Instagram" className="h-7 w-7" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/dwdg-binus/" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-[#00C782] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative p-1.5 rounded-full group-hover:bg-[#00C782]/10 transition-colors duration-300">
                  <img src={linkedinIcon} alt="LinkedIn" className="h-7 w-7" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">© Ecovation 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
