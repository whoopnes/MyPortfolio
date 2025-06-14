import React, { useEffect } from "react";
import Hero from "./hero.jsx";
import Features from "./features.jsx";
import Speakers from "./speakers.jsx";
import Collaborator from "./collaborator.jsx";
import Prize from "./prize.jsx";
import Contact from "./contact.jsx";
import GuideBook from "./guidebook.jsx";
import Registration from "./register.jsx";
import GeneralRequirements from "./requirement.jsx";
import Timeline from "./timeline.jsx";
import Footer from "./footer.jsx";
import PresidentMessage from "./president.jsx";
import PastWinners from "./past winners.jsx";
import ContributorsSlider from "./contributors.jsx";
import { useLocation } from "react-router-dom";
import President from "./president.jsx";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/guidebook") {
      const element = document.getElementById("guidebook");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen flex-col">
      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="speakers">
        <Speakers />
      </section>

      <section id="collaborator">
        <Collaborator />
      </section>

      <section id="prize">
        <Prize />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="general-requirements">
        <GeneralRequirements />
      </section>

      <section id="guidebook">
        <GuideBook />
      </section>

      <section id="past-winners">
        <PresidentMessage />
      </section>

      <section id="past-winners">
        <PastWinners />
      </section>

      <section id="contributors">
        <ContributorsSlider />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
