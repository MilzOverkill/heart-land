'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
  const router = useRouter();

  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto px-6 md:px-[30px] py-4 md:py-[60px] pb-4 md:pb-8 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-15 bg-white">

      {/* Left content */}
      <div className="w-full md:w-[594px] flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

        {/* Title Row */}
        <div className="inline-flex items-center justify-center gap-8 font-openSans mb-3">
          <span className="font-normal text-lg leading-[160%] text-[#ED632F]">Our</span>
          <div className="w-[70px] h-px bg-[#ED632F] ml-2" />
        </div>

        {/* Subtitle */}
        <h2 className="w-full md:w-[242px] font-nunito font-semibold text-[30px] leading-[140%] text-[#10111a] mb-8 whitespace-nowrap">
          Featured Insights & Articles
        </h2>

        {/* Body Text */}
        <div className="w-full md:w-[550px] font-openSans font-normal text-[18px] leading-[160%] text-[#686868] mb-4">
          {isMobile ? (
            <p>
              Welcome to our Featured Insights and Articles section, where we provide
              valuable perspectives on industry trends, culinary traditions, and
              community initiatives. Our articles cover market developments and showcase
              recipes that celebrate Sri Lankan flavors, aimed at informing and
              inspiring you. Explore our latest content to understand our commitment to
              social responsibility and our connections within the Sri Lankan community.
              Join us on this journey of discovery.
            </p>
          ) : (
            <>
              <p className="mb-4 mt-6 tracking-wide">
                Welcome to our Featured Insights and Articles section, where we provide
                valuable perspectives on industry trends, culinary traditions, and
                community initiatives. Our articles cover market developments and
                showcase recipes that celebrate Sri Lankan flavors, aimed at informing
                and inspiring you.
              </p>
              <p>
                Explore our latest content to understand our commitment to social
                responsibility and our connections within the Sri Lankan community.
                Join us on this journey of discovery.
              </p>
            </>
          )}
        </div>

        {/* CTA Button */}
        {/* <button
          className={`w-[154px] h-11 ${isMobile ? 'bg-[#FF0000] mx-auto' : 'bg-[#0062ce]'} rounded-lg px-4 py-0.5 flex items-center justify-between border-none cursor-pointer shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0px_8px_16px_rgba(0,98,206,0.3)] mt-2 font-nunito`}
          onClick={() => router.push("/About")}
        >
          <span className="font-semibold text-xs leading-[150%] text-white text-center">Know More</span>
          <span className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center p-2.5">
            <Image
              src={isMobile ? "/Arrow.png" : "/Arrow1.png"}
              alt="arrow"
              width={14}
              height={14}
            />
          </span>
        </button> */}
      </div>

      {/* Right Image Section with Parallax */}
      <div className="flex-1 flex justify-center md:justify-end items-center w-full order-1 md:order-2">
        <div
          className="w-full md:w-[680px] h-[260px] md:h-[580px] relative transition-transform duration-100 ease-out md:mt-0 -mt-2.5"
          style={{
            transform: isMobile ? "none" : `translateY(${offsetY * 0.2}px)`,
          }}
        >
          <Image
            src="/Group20.png"
            alt="Main"
            sizes="(max-width: 650px) 100vw, 600px"
            fill
            priority
            className="object-contain"
          />

          {/* Mobile Side Images */}
          <div className="hidden max-md:block absolute w-[110px] h-[105px] -left-[30px] -bottom-[105px] rounded-[18px] overflow-hidden z-[5]">
            <Image
              src="/Union.png"
              alt="side left"
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden max-md:block absolute w-[100px] h-[90px] -right-[30px] -bottom-[380px] rounded-[18px] overflow-hidden z-[5]">
            <Image
              src="/Union1.png"
              alt="side right"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
