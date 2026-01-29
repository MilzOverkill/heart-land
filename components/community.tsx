"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Open_Sans, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function CommunitySection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Layout */}
      <section className={`hidden md:flex w-full justify-start pb-12 sm:pb-16 md:pb-25 bg-white ${openSans.className}`}>
        <div className="flex flex-row gap-0 items-center w-full">

          {/* LEFT SIDE IMAGE */}
          <div className="relative w-[50%] lg:w-[55%] xl:w-[806px] h-[350px] lg:h-[380px] xl:h-[407px] shrink-0">
            <Image
              src="/community-hero.png"
              alt="Community"
              fill
              sizes="(max-width: 1024px) 50vw, 806px"
              className="object-cover rounded-tr-[400px] rounded-br-[400px]"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="px-4 lg:px-6 xl:px-8 ml-0 lg:ml-1 xl:ml-2 pt-12 lg:pt-16 xl:pt-20">
            <h2 className={`${openSans.className} text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-black mb-6 leading-tight`}>
              Be part of our journey
            </h2>

            <p className="text-base lg:text-lg xl:text-[24px] text-[#000000] font-normal leading-relaxed mb-12">
              At Heartland, we believe in growing together. Our success is built on the hard work of local farmers and female entrepreneurs in Sri Lanka, and we are deeply committed to ensuring they thrive alongside us. By sourcing directly from these communities, we provide sustainable livelihoods and foster economic growth across the island. Beyond trade, we are incredibly proud of our signature &quot;Heartland <span className="text-red-600">♥</span> Homeland&quot; initiative.
            </p>

            <Link href="/About">
              <button
                className={`${nunito.className} cursor-pointer rounded-[20px] border-[3px] border-[#E60012] py-2 px-3 gap-[15px]
                text-[#E60012] text-lg lg:text-2xl font-bold transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1`}
              >
                Initiatives to partner with us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className={`md:hidden w-full py-8 bg-[#F5F5F5] ${openSans.className}`}>
        <div className="flex flex-col items-center text-center px-6">

          {/* Heading */}
          <h2 className={`${nunito.className} text-2xl font-bold text-black mb-4 leading-tight`}>
            Be part of our journey
          </h2>

          {/* Description */}
          <p className="text-sm text-[#000000] font-normal leading-relaxed mb-6 max-w-md">
            At Heartland, we believe in growing together. Our success is built on the hard work of local farmers and female entrepreneurs in Sri Lanka, and we are deeply committed to ensuring they thrive alongside us. By sourcing directly from these communities, we provide sustainable livelihoods and foster economic growth across the island. Beyond trade, we are incredibly proud of our signature &quot;Heartland <span className="text-red-600">♥</span> Homeland&quot; initiative.
          </p>

          {/* Button */}
          <Link href="/About">
            <button
              className={`${nunito.className} cursor-pointer rounded-[20px] border-[3px] border-[#E60012] py-2.5 px-8 gap-[15px]
              text-[#E60012] bg-white text-sm font-bold transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg`}
            >
              Initiatives to partner with us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
