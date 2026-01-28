import Image from 'next/image';

const partners = [
  { name: 'Nesto' },
  { name: 'Al Maya' },
  { name: 'West Zone' },
  { name: 'Talal' },
  { name: 'Madina' },
  { name: 'Passons' },
  { name: 'Safari' },
  { name: 'Baqer Mohebi' },
];

export default function HeartlandB2BNetwork() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden my-8">
      {/* Background Image */}
      <Image
        src="/string hoppers.jpg"
        alt="B2B Network Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] flex flex-col justify-center">
        {/* Heading */}
        <h2 
          className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-5 md:mb-10"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          The Heartland B2B Network
        </h2>

        {/* Description */}
        <p 
          className="text-base font-roboto font-extralight md:text-lg lg:text-xl text-white/70 max-w-[600px] mb-8 md:mb-10 leading-6"
          
        >
          Our operational excellence and ISO/HACCP certifications have made us the trusted partner for the UAE&apos;s leading retail giants. 
          You can find our extensive range of products across all major hypermarkets and supermarkets, including:
        </p>

        {/* Partner Pills/Tabs - Desktop View (2 rows) */}
        <div className="hidden md:flex flex-col gap-4 lg:gap-5">
          {/* First Row - 4 items */}
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {partners.slice(0, 4).map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-[#D11417] px-6 py-4 w-[160px] lg:w-[180px] h-[56px] lg:h-[62px] flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-[#FFF5F5] cursor-pointer"
              >
                <span 
                  className="text-base lg:text-xl font-light text-black text-center"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Row - 4 items */}
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {partners.slice(4, 8).map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-[#D11417] px-6 py-4 w-[160px] lg:w-[180px] h-[56px] lg:h-[62px] flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-[#FFF5F5] cursor-pointer"
              >
                <span 
                  className="text-base lg:text-xl font-light text-black text-center"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Pills/Tabs - Mobile View (scrollable or wrapped) */}
        <div className="flex md:hidden flex-wrap gap-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] border border-[#D11417] px-5 py-3 w-[140px] h-[52px] flex items-center justify-center shadow-sm"
            >
              <span 
                className="text-sm font-semibold text-black text-center"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}