"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechIconCardExperience from "../components/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../data";

gsap.registerPlugin(ScrollTrigger);

export const TechStackSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#TechStack",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section id="TechStack" className="py-20">
      <h1 className="heading text-center">
        My <span className="text-purple">Skillsets</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="grid grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:grid-cols-6 my-10">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card group overflow-visible rounded-lg xl:rounded-full min-h-[12rem]"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content flex flex-col items-center justify-center p-4 space-y-3">
                <div className="tech-icon-wrapper h-[100px] w-[100px]">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-center text-base font-semibold leading-tight">
                    {techStackIcon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
