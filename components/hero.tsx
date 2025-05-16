
import { FaLocationArrow } from "react-icons/fa6";
import { StarBackground } from "@/components/ui/star-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";



export const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-[-410px] left-0 w-full h-full object-cover z+20 rotate-180"

      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>

      {/* Star Background */}
      <StarBackground />

      {/* Hero Content */}
      <div className="relative z+20 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Welcome to my portfolio !
          </h2>

          <TextGenerateEffect
  className="text-center text-[40px] md:text-5xl lg:text-6xl"
  words={`Sejal Mishra\nAn aspiring Software Developer`}
/>

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Designing the Invisible, Delivering the Intuitive.
          </p>

          
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          
        </div>
      </div>
    </div>
  );
};
