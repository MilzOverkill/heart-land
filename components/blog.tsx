"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-white text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            BLOG
          </p>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
            The latest article
          </h2>
        </div>

        {/* Desktop Layout - 3 cards in a row */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="group">
            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Rectangle 15.png"
                alt="Star anise spices"
                width={400}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-white text-base mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center text-white text-sm tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
            >
              LEARN MORE
              <span className="ml-2 text-lg">›</span>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Rectangle 15 (1).png"
                alt="Spices on spoons"
                width={400}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-white text-base mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center text-white text-sm tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
            >
              LEARN MORE
              <span className="ml-2 text-lg">›</span>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Rectangle 15 (2).png"
                alt="Spice market shop"
                width={400}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-white text-base mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center text-white text-sm tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
            >
              LEARN MORE
              <span className="ml-2 text-lg">›</span>
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Carousel/Slider style */}
        <div className="md:hidden -mx-4 sm:-mx-6">
          {/* Single Card View */}
          <div className="w-full">
            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Rectangle 15 (1).png"
                alt="Spices on spoons"
                width={500}
                height={400}
                className="w-full h-[350px] sm:h-[400px] object-cover"
              />
              {/* Navigation Arrow */}
              <button className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl bg-black/30 rounded-full hover:bg-black/50 transition-colors">
                ›
              </button>
            </div>

            <div className="text-center px-4">
              <p className="text-white text-base sm:text-lg mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link 
                href="#"
                className="inline-flex items-center text-[#757575] text-sm tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}