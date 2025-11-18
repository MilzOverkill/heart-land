"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "CSR", href: "/csr" },
    { name: "Resources & Insights", href: "/resources" },
    { name: "FAQ & Support", href: "/faq" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-14">
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        {mounted && (
          <nav className="hidden md:flex gap-12 items-center text-xl font-semibold leading-10 tracking-[-1px] font-sans">
            {links.map((link) => (
              <div key={link.name} className="relative group">
                <Link href={link.href} className="cursor-pointer inline-block">
                  {link.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full bg-[#D11417]"
                      : "w-0 bg-black group-hover:w-full"
                  }`}
                ></span>
              </div>
            ))}
          </nav>
        )}

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="#">
            <Image
              src="/contact-button.png"
              alt="Contact button"
              width={160}
              height={130}
              className="object-contain mr-3.5"
            />
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 mt-30 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 ml-28 mb-20">
          <p className="text-lg font-semibold text-[#BA5561] tracking-[3px] uppercase mb-2">
            A Bit
          </p>
          <h1 className="text-4xl md:text-5xl uppercase font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            We are a Sri Lankan-based food distributor and service partner committed to delivering quality, authenticity, and freshness. Our mission is to connect local producers with consumers and businesses through trusted partnerships and transparent supply chains. From farm to table, we ensure that every product reflects the taste, culture, and values of Sri Lanka.

          </p>
          <Link
            href="#"
            className="inline-block bg-[#D11417] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Explore More
          </Link>
        </div>
        <div className="flex-1 mr-36 relative ">
          <Image
            src="/Rectangle 88.png"
            alt="About 1"
            width={650}
            height={550}
            className="rounded-xl"
          />
          
          <Image
            src="/Subtract.png"
            alt="About 2"
            width={550}
            height={450}
            className="rounded-xl mt-7" 
          /> 
          
          
          <div className="grid grid-cols-2 gap-5  absolute -bottom-16 left-0">
            <Image
              src="/Rectangle 90.png"
              alt="food 1"
              width={270}
              height={220}
              className="rounded-lg -ml-14 -mb-3"
            />
             <div className="absolute text-center ml-32 -mb-[19px] text-3xl bottom-4 left-4 bg-[#309EC4] rounded-xl text-white px-7 py-6 font-bold">
            15+ <br />Years
          </div>

             
            
          </div>
        </div>
      </section>
    </main>
  );
}
