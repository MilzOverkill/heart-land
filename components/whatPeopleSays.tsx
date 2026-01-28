"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatPeopleSays() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState(0);

  const cards = [
    {
      img: "/fathima.png",
      name: "Kelani Lanka",
      role: "Our Premium Brand",
      text: "Beyond our distribution services, Heartland is the proud home of Kelani Lanka, a brand synonymous with premium quality and authentic Sri Lankan taste. Kelani Lanka represents our commitment to excellence in every household.",
    },
    {
      img: "/farhan.png",
      name: "Maliban",
      role: "Sole Distributor",
      text: "The taste of Sri Lankan heritage. As the Sole Distributor for Maliban in the UAE, we bring Sri Lanka's most iconic biscuit brand to families across the region, maintaining the authentic flavors that generations have loved.",
    },
    {
      img: "/arjun.png",
      name: "Prima Kottumee",
      role: "Sole Distributor",
      text: "The island's favorite instant indulgence. As the Sole Distributor for Prima Kottumee, we ensure that this beloved Sri Lankan instant noodle brand is available to our community across all major retail outlets in the UAE.",
    },
  ];
  
  // auto scrolling
  useEffect(() => {
  if (typeof window === "undefined") return;

  const isMobile = window.innerWidth < 768;
  if (!isMobile) return;

  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % cards.length);
  }, 3000);

  return () => clearInterval(interval);
}, [cards.length]);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (multiplier: number) => `translateY(${scrollY * multiplier}px)`;

  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      {/* Title */}
      <h2 className="md:text-4xl text-xl font-bold mb-12" style={{ fontFamily: "Nunito" }}>
        Our Brands & Distribution Strength
      </h2>

      {/* Desktop Cards */}
      <div className="hidden md:grid grid-cols-3 gap-8 px-12">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 w-full max-w-[340px] mx-auto shadow-[5px_20px_30px_rgba(0,0,0,0.70)] transition-transform duration-300 hover:scale-110"
            style={{ transform: parallax(0.02) }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={item.img}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-[15px]" style={{ fontFamily: "Georgia", fontWeight: 600 }}>
                  {item.name}
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: "Arial" }}>
                  {item.role}
                </p>
              </div>
            </div>

            <div className="my-3">
              <div
                className="w-[294px] border-t border-[#EFEFEF] opacity-100"
                style={{ transform: "rotate(-0.17deg)" }}
              />
            </div>

            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Open Sans" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden w-full overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {cards.map((item, i) => (
            <div key={i} className="min-w-full px-2">
              <div className="bg-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={item.img} alt={item.name} width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.role}</p>
                  </div>                  

                </div>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                active === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
