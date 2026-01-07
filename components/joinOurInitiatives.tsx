"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Initiative() {
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${y * 0.04}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-10 md:py-16 lg:pt-40 lg:pb-64 bg-white relative overflow-hidden">
      {/* Right side background image */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[700px] opacity-60 md:opacity-70 lg:opacity-80 pointer-events-none">
        <Image
          src="/initiatives bg.png"
          alt="Background Shape"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Section - Images */}
        <div
          ref={imageRef}
          className="relative mx-auto lg:mx-0 lg:ml-20 lg:-mt-30 w-72 h-72 sm:w-96 sm:h-96 lg:w-[430px] lg:h-[430px] order-2 lg:order-1"
        >
          <Image
            src="/Group 69.png"
            alt="Child Initiative"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left px-4 md:px-8 lg:px-0 order-1 lg:order-2">
          <p className="uppercase text-gray-400 text-sm sm:text-[18px] tracking-[0.2em] lg:tracking-[0.3em] font-normal">
            C S R
          </p>

          <h2 className="text-[40px] font-bold text-black leading-[100%] tracking-normal text-center lg:text-left" style={{ fontFamily: 'Open Sans' }}>
            Join our initiatives
          </h2>

          <p className="text-gray-600 text-[20px] font-nunito leading-[140%] tracking-normal max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 sm:pt-4">
            {/* Learn More Button */}
            <button className="font-nunito bg-black text-white text-base sm:text-lg lg:text-xl px-10 sm:px-12 lg:px-16 py-3.5 sm:py-4 rounded-full font-semibold border-2 border-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:bg-gray-900">
              Learn More
            </button>

            {/* Watch Videos Button */}
            <button className="font-nunito group flex items-center justify-center gap-3 border-[3px] border-[#D11417] text-black font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:bg-[#D11417] hover:border-[#D11417] hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black transition-all duration-300 group-hover:bg-white">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-white transition-all duration-300 group-hover:fill-[#D11417] group-hover:stroke-[#D11417]" />
              </div>
              <span className="group-hover:text-white transition-colors duration-300">
                Watch Videos
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
