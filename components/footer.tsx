import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function Footer() {
  return (
    <footer className={`${openSans.className} bg-[#1B1D21] text-white md:pb-10 md:pt-10 mt-10px-6 md:px-15 md:py-0 py-1`}>
   
      {/* Container to center the content */}
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">

          {/* LEFT SECTION */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Stay Connected With Heartland!</h3>

            <div className="flex items-center gap-2 mb-4 cursor-pointer w-fit">
              <p className="text-sm">info@heartlandtrading.ae</p>
              <span className="text-4xl ml-[400px] ">⭧</span>
            </div>
            <div className="w-[600px] h-px bg-gray-600 mb-7 "></div>


            <p className="text-sm text-white leading-8 mb-4 w-[570px]">
              Subscribe to our newsletter and discover the authentic taste of Sri Lanka in every update.
              Be the first to know about new product launches, exclusive offers, and Heartland community
              stories from Sri Lankan producers to UAE homes. <br />
              Join our global community that celebrates authentic flavour, quality, and sustainability.
            </p>

            

            <div className="flex gap-6 text-sm mt-4 cursor-pointer">
              <a href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          
            {/* RIGHT 3 COLUMNS */}
<div className="flex flex-col md:flex-row md:col-span-3 justify-center items-center gap-10">
  
  <div>
    <h4 className="font-semibold -mt-5 mb-4">Quick Link</h4>
    <ul className="space-y-5 text-sm text-gray-300">
      <li><a href="/About">About Us</a></li>
      <li><a href="/Product">Our Products</a></li>
      <li><a href="/CSR">CSR Initiatives</a></li>
      <li><a href="/About">Careers</a></li>
      <li><a href="/Contact">Contact Us</a></li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold -mt-24 mb-4">Information</h4>
    <ul className="space-y-5 text-sm text-gray-300">
      <li><a href="/FAQ">FAQ</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">News</a></li>
    </ul>
  </div>

  <div className="-mr-44">
    <h4 className="font-bold text-xl mb-4">Contact Us</h4>
    <p className="text-sm text-gray-300 leading-6 mb-4">
      <span className="font-semibold">Corporate Office</span><br/>
      Heartland General Trading FZE<br/>
      Warehouse No. 18, Industrial Area 3,<br/>
      Al Qusais, Dubai, United Arab Emirates
    </p>

    <p className="text-sm text-gray-300 leading-6 mb-4">
      <span className="font-semibold">Sri Lanka Office</span><br/>
      No. 10, Palm Grove,<br/>
      Colombo 03, Sri Lanka
    </p>

    <p className="text-sm mb-1">info@heartlandtrading.ae</p>
    <p className="text-sm mb-4">+971 4 265 9072</p>
    <button className="text-sm underline transition-all duration-300 ease-out hover:scale-105 hover:text-[#D11417] hover:shadow-[0_8px_16px_rgba(209,20,23,0.2)] hover:-translate-y-1 transform-gpu">Inquire Now</button>
  </div>

</div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col  md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
          <p>© 2025 Heartland General Trading FZE. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>


           <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
      >
        <FaFacebookF className="text-white" size={10} />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
      >
        <FaTwitter className="text-white" size={10} />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
      >
        <FaInstagram className="text-white" size={10} />
      </a>

      

      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
      >
        <FaYoutube className="text-white" size={10} />
      </a>
    </div>

          
        </div>

      </div>
    </footer>
  );
}
