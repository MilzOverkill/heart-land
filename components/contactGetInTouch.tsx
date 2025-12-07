"use client";

import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export default function ContactGetInTouch() {
  return (
    <section className={`${nunito.className} w-full bg-white py-16 px-8 md:px-20`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: Form / Text */}
        <div className="pr-4 ml-20">
          <h3 className="text-3xl font-bold text-black mb-3">Get in Touch</h3>
          <p className="text-lg text-black max-w-[480px] mb-8 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>

          <form className="space-y-6 max-w-md">
            <div>
              <label className="block text-lg mt-10 text-[#444444] mb-2">Full name</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg text-[#444444] mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg text-[#444444] mb-2">Subject</label>
              <input
                type="text"
                className="w-full bg-transparent border-0 border-b border-[#D11417 focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg text-[#444444] mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300 resize-none"
              />
            </div>

            <div>
             <button
             type="submit"
              className="inline-block h-12 bg-[#D11417] text-white px-5 py-2 shadow-md hover:shadow-lg transition-shadow
             rounded-tl-2xl rounded-br-xl rounded-tr-sm rounded-bl-sm"
            >
              Send Message
            </button>

            </div>
          </form>
        </div>

        {/* RIGHT:  pink accent  */}
        <div className="relative flex justify-center lg:justify-end">
          {/* pink block */}
          <div
            aria-hidden
            className="absolute -right-40 -top-16 w-[470px] h-[640px] bg-[#FBE8E8]"
            style={{ transform: "translateZ(0)" }}
          />

          {/* map card */}
          <div className="relative bg-white w-[520px] h-[650px] shadow-md overflow-hidden">
            <div className="absolute inset-0 p-6">
              <Image
                src="/contactMap.png"      
                alt="Map"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-sm"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
