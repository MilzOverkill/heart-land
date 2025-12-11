"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export default function Founders() {
  // Correctly typed ref for array of HTMLDivElement or null
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Scroll effect for parallax images
  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const offset = rect.top * 0.15;

        const img = card.querySelector<HTMLImageElement>(".parallax-img");
        if (img) img.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const founders = [
    {
      name: "Mr. Aravinda Perera",
      title: "Director",
      img: "/founder 1.png",
    },
    {
      name: "Ms. Dulani Fernando",
      title: "Co-Founder & Director of Operations",
      img: "/founder 2.png",
    },
    {
      name: "Mr. Nuwan Jayasuriya",
      title: "HR Manager",
      img: "/founder 3.png",
    },
  ];

  // Callback ref function for proper TypeScript typing
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section className="py-20 bg-white">
      <div className={`text-center text-2xl max-w-4xl mb-16 mx-auto ${nunito.className}`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Founders</h2>
        <p className="text-black text-xl leading-relaxed">
          At <span className="font-bold">Heartland General Trading</span>, we take pride in offering more than just quality products —
          we deliver trust, consistency, and a commitment to excellence in every partnership.
          Here’s what makes us stand out in Sri Lanka’s food industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-9">
        {founders.map((founder, index) => (
          <div
            key={index}
            ref={(el) => setCardRef(el, index)}
            className="relative overflow-hidden bg-white group"
          >
            {/* Image */}
            <div className="h-[420px] w-full overflow-hidden relative">
              <Image
                src={founder.img}
                alt={founder.name}
                fill
                className="parallax-img object-cover w-full h-full transition-transform duration-300 ease-out"
              />
            </div>

            {/* Info box */}
            <div className="px-4 py-5 mx-auto w-[80%] text-center border-t-4 border-red-600 bg-white relative -mt-10 z-20 h-32">
              <h3 className={`${openSans.className} font-bold text-xl text-[#000000]`}>
                {founder.name}
              </h3>
              <p className={`${openSans.className} text-lg font-semibold text-[#000000]`}>
                {founder.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
