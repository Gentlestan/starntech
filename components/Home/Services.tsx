export default function Services() {
  const services = [
    {
      title: "Solar Installation",
      desc: "Residential and commercial solar power system installation.",
    },
    {
      title: "Inverter Systems",
      desc: "Backup power design, supply, and installation.",
    },
    {
      title: "CCTV Security",
      desc: "Smart surveillance and monitoring solutions.",
    },
    {
      title: "Fire Alarm Systems",
      desc: "Early warning fire detection and safety systems.",
    },
    {
      title: "Sales, Supply & Installation",
      desc: "We supply and install quality energy and security equipment.",
    },
    {
      title: "Maintenance & Repairs",
      desc: "System troubleshooting, servicing, and repairs.",
    },
    {
      title: "Smart Solutions",
      desc: "Automation and energy optimization systems.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-green-700 font-semibold tracking-wide text-sm md:text-base">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
            What We Do
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7">
            Complete energy and security solutions for homes, offices, and businesses across Nigeria.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
            >

              <h3 className="font-semibold text-lg md:text-xl text-gray-900 group-hover:text-green-700 transition">
                {s.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm md:text-[15px] leading-7">
                {s.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}