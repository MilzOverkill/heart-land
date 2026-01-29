import Image from 'next/image';

const events = [
  {
    image: '/maroons night.png',
    icon: '🏏',
    title: 'Maroons Night',
  },
  {
    image: '/royal college.png',
    icon: '🎭 ',
    title: 'Royal College Dinner Dance',
  },
  {
    image: '/sl bankers.png',
    icon: '🏦 ',
    title: 'Sri Lankan Bankers Association Dinner Dance',
  },
];

const projects = [
  {
    image: '/project blueprint.png',
    icon: '📚 ',
    title: 'Project Blueprint',
    subtitle: '(Personal development by Wesley College OBA)',
    span: 'double',
  },
  {
    image: '/avrudu fest.png',
    icon: '🎊',
    title: 'The Grand Avurudu Festival',
    span: 'single',
  },
];

export default function SchoolProfessionalTies() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <h2 
          className="text-2xl font-nunito md:text-[36px] lg:text-[40px] font-bold mb-4 text-black"
          
        >
          Fostering School & Professional Ties
        </h2>
        <p 
          className="text-base font-roboto font-light md:text-lg text-black max-w-[1400px]"
         
        >
          Heartland is the preferred partner for Sri Lankan Old Boys Associations (OBAs) and professional bodies in the UAE. 
          We are proud to have associated our brand with iconic events that celebrate our shared heritage, including:
        </p>
      </div>

      {/* First Row - Three Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 lg:mb-8 max-w-[1200px]">
        {events.map((event, index) => (
          <article
            key={index}
            className="bg-white rounded-[20px] border border-[#E0E0E0] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full aspect-[378/300] overflow-hidden rounded-t-[20px]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover rounded-t-[20px]"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl">{event.icon}</span>
                <h3
                  className="text-lg font-roboto md:text-2xl font-bold text-black leading-tight"
                >
                  {event.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Second Row - Two Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1200px]">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-white rounded-[20px] border border-[#E0E0E0] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full aspect-[583/300] overflow-hidden rounded-t-[20px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-[20px]"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl">{project.icon}</span>
                <h3
                  className="text-lg font-roboto md:text-2xl font-bold text-black leading-tight"
                >
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p
                    className="text-sm font-roboto font-bold md:text-2xl text-black"
                  >
                    {project.subtitle}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}