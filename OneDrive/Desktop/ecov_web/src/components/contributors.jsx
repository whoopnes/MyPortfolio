"use client";

import { useState, useEffect, useRef } from "react";
import aiesecLogo from '../images/aiesec.png';
import akademi from '../images/akademibusinesscase.png';
import himatekitb from '../images/himatekitb.png';
import himfoodtech from '../images/himfoodtech.png';
import himti from '../images/HIMTI.PNG';
import ITGIRLS from '../images/ITGIRLS.png';
import lifeatfmcg from '../images/lifeatfmcg.png';
import bnfc from '../images/bnfc.png';
import himsis from '../images/HIMSIS.png';
import iels from '../images/iels.png';
import ACC from '../images/Logo_ACC.png';
import bbic from '../images/LOGO_BBIC.png';
import bpre from '../images/LOGO_BPRE.png';
import bslc from '../images/Logo_BSLC.png';
import growthhub from '../images/Logo_Growthhub.png';
import growthskill from '../images/Logo_Growthskill.png';
import hima from '../images/LOGO_HIMA.png';
import isg from '../images/LOGO_ISG.png';
import uiwib from '../images/Logo_UIWIB.PNG';
import shareUB from '../images/ShARE_UB.png';
import shareunj from '../images/shareUNJ.png';
import shelevate from '../images/shelevate.png';
import talentgrowth from '../images/Talent_Growth.png';
import tutormyid from '../images/tutormyid.png';
import youthinspace from '../images/youthInspace.png';
import grantThornton from '../images/granthornton.png'; 
import gengLogo from '../images/logogeng.png';
import pmkLogo from '../images/LOGO_PMK.png';
import antamLogo from '../images/antam.png';

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: grantThornton },
  { id: 2, name: "Sponsor 2", logo: antamLogo },
  { id: 3, name: "Sponsor 3", logo:  pmkLogo },
  { id: 4, name: "Grant Thornton", logo: gengLogo }, 
];

const mediaPartners = [
  { id: 1, name: "AIESEC", logo: aiesecLogo },
  { id: 2, name: "akademi", logo: akademi },
  { id: 3, name: "himatekitb", logo: himatekitb },
  { id: 4, name: "himfoodtech", logo: himfoodtech },
  { id: 5, name: "himti", logo: himti },
  { id: 6, name: "itgirls", logo: ITGIRLS },
  { id: 7, name: "lifeatfmcg", logo: lifeatfmcg },
  { id: 8, name: "bnfc", logo: bnfc },
  { id: 9, name: "himsis", logo: himsis },
  { id: 10, name: "iels", logo: iels },
  { id: 11, name: "ACC", logo: ACC },
  { id: 12, name: "bbic", logo: bbic },
  { id: 13, name: "bpre", logo: bpre },
  { id: 14, name: "bslc", logo: bslc },
  { id: 15, name: "growthub", logo: growthhub },
  { id: 16, name: "growthskill", logo: growthskill },
  { id: 17, name: "hima", logo: hima },
  { id: 18, name: "isg", logo: isg },
  { id: 19, name: "uiwib", logo: uiwib },
  { id: 20, name: "shareub", logo: shareUB },
  { id: 21, name: "shareunj", logo: shareunj },
  { id: 22, name: "shelevate", logo: shelevate },
  { id: 23, name: "talentgrowth", logo: talentgrowth },
  { id: 24, name: "tutormyid", logo: tutormyid },
  { id: 25, name: "youthinspace", logo: youthinspace },
];

const AutomaticSlider = ({ items, title }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const animationRef = useRef(null);
  const speed = 1;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(containerRef.current.scrollWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(containerRef.current.scrollWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  useEffect(() => {
    const animate = () => {
      setScrollPosition((prevPosition) => {
        if (prevPosition >= contentWidth) {
          return 0;
        }
        return prevPosition + speed;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [contentWidth]);


  const duplicatedItems = [...items, ...items];
  const duplicatesNeeded = Math.ceil(contentWidth / containerWidth);  
  for (let i = 0; i < duplicatesNeeded; i++) {
    duplicatedItems.push(...items);
  }

  return (
    <div className="py-8">
      <div className="flex justify-center mb-6">
        <div className="bg-emerald-400 text-black rounded-full px-12 py-2 text-xl font-medium">{title}</div>
      </div>

      <div className="relative overflow-hidden" ref={containerRef}>
        <div
          className="flex"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            width: "fit-content",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-2 bg-white-200 flex items-center justify-center"
              style={{
                width: "180px",
                height: "100px",
                padding: "10px",
              }}
            >
              <img
                src={item.logo || "/placeholder.svg"}
                alt={item.name}
                style={{
                  height: "80px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ContributorsSection() {
  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">CONTRIBUTORS</h2>

        <div className="space-y-12">
          <AutomaticSlider items={sponsors} title="Sponsors" />
          <AutomaticSlider items={mediaPartners} title="Media Partner" />
        </div>
      </div>
    </div>
  );
}
