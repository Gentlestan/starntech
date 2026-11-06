
import React from "react";
import {
  WifiOff,
  Sun,
  MonitorPlay,
  MoonStar,
  BellRing,
  AudioLines,
  Smartphone,
  HardDrive,
  CloudSun,
} from "lucide-react";

const features = [
  {
    title: "No Wi-Fi Needed",
    description:
      "No Wi-Fi? No problem! Simply insert a compatible 4G SIM card and stay connected to your camera. Monitor your property from anywhere without depending on a Wi-Fi connection.",
    icon: WifiOff,
  },
  {
    title: "Solar Powered",
    description:
      "Harness sunlight to recharge your camera's battery, reducing your dependence on NEPA/PHCN electricity or generator power. Enjoy 24/7 security monitoring without constantly worrying about charging.",
    icon: Sun,
  },
  {
    title: "HD Live Viewing",
    description:
      "See what's happening around your property in clear detail. Connect through the V380 app on your phone and check in whenever you want, even when you're away.",
    icon: MonitorPlay,
  },
  {
    title: "Night Vision & Built-in Lights",
    description:
      "Darkness shouldn't mean losing sight of what matters. With built-in lights and night vision, your camera helps you monitor your surroundings and capture clearer footage even at night.",
    icon: MoonStar,
  },
  {
    title: "Motion Detection Alerts",
    description:
      "Get notified when movement is detected around your property. Whether you're at home, at work or travelling, stay informed about activity around your camera.",
    icon: BellRing,
  },
  {
    title: "Two-Way Audio",
    description:
      "See, hear and speak through your camera using your smartphone. Communicate with visitors, give instructions or warn unwanted visitors, even when you're not physically around.",
    icon: AudioLines,
  },
  {
    title: "Remote Viewing with V380 App",
    description:
      "Keep an eye on your property right from your smartphone. Simply open the V380 app to view your camera remotely and stay connected wherever you are.",
    icon: Smartphone,
  },
  {
    title: "MicroSD Card Recording",
    description:
      "Don't just watch live; save footage for later. Insert a compatible microSD card to record important moments and review recorded videos whenever you need them.",
    icon: HardDrive,
  },
  {
    title: "Weather-Resistant Design",
    description:
      "Designed for outdoor monitoring, the camera is built to withstand everyday outdoor conditions, making it suitable for your compound, shop, farm or construction site.",
    icon: CloudSun,
  },
];

export default function CameraFeatures() {
  return (
    <section className="py-14 md:py-20 bg-green-50/40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Smart Security, Made Simple
          </p>

          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2">
            Everything You Need to Keep an Eye on What Matters
          </h2>

          <p className="text-gray-600 mt-3 leading-7">
            Smart security without the stress. Your V380 solar camera comes
            packed with useful features to help you monitor your home, business
            or property, day and night, wherever you are.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-white border border-green-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-5 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-gray-950">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-7 mt-2">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
