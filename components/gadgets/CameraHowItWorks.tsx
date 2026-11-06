
import {
  Smartphone,
  Database,
  QrCode,
  ScanLine,
  Camera,
  BookOpen,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Get a Registered 4G SIM Card",
    description:
      "Choose a properly registered SIM card from the network provider with the best 4G coverage in your area.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Load Data on Your SIM",
    description:
      "Make sure your SIM card has an active data plan so your camera can connect to the internet.",
    icon: Database,
  },
  {
    number: "03",
    title: "Download the V380 App",
    description:
      "Scan the QR code on the camera with your smartphone. It will take you to download the V380 app. Install the app and register an account.",
    icon: QrCode,
  },
  {
    number: "04",
    title: "Add Your Camera to the App",
    description:
      "Open the V380 app, tap Add Camera, and scan the same QR code on your camera to add the device to your account.",
    icon: ScanLine,
  },
  {
    number: "05",
    title: "Mount Your Camera",
    description:
      "Install your camera in your preferred location and position the solar panel where it can receive sufficient sunlight.",
    icon: Camera,
  },
  {
    number: "06",
    title: "Get Your Comprehensive Setup Guide",
    description:
      "Purchase your camera from us and receive a comprehensive guide to help you set it up and get started with confidence.",
    icon: BookOpen,
  },
];

export default function CameraHowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-700">
            Simple Setup Process
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Getting Started Is Easier Than You Think
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Follow these simple steps to get your V380 solar camera connected
            and ready to help you monitor what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:bg-white hover:shadow-lg sm:p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span className="text-3xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance */}
        <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-6 text-center md:mt-12 md:p-8">
          <h3 className="text-lg font-semibold text-gray-900">
            Need Help Setting It Up?
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-gray-600">
            We've got you covered. Every purchase comes with a comprehensive
            setup guide to help you get your camera working.
          </p>
        </div>
      </div>
    </section>
  );
}
