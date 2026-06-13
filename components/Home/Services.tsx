export default function Services() {
  const services = [
    { 
      title: "Solar Installation", 
      desc: "Residential and commercial solar power system installation." 
    },
    { 
      title: "Inverter Systems", 
      desc: "Backup power design, supply, and installation." 
    },
    { 
      title: "CCTV Security", 
      desc: "Smart surveillance and monitoring solutions." 
    },
    { 
      title: "Fire Alarm Systems", 
      desc: "Early warning fire detection and safety systems." 
    },
    { 
      title: "Sales, Supply & Installation", 
      desc: "We supply and install quality energy and security equipment." 
    },
    { 
      title: "Maintenance & Repairs", 
      desc: "System troubleshooting, servicing, and repairs." 
    },
    { 
      title: "Smart Solutions", 
      desc: "Automation and energy optimization systems." 
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold">Our Services</p>
          <h2 className="text-3xl font-bold mt-2">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}