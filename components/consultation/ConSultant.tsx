import { steps } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ConSultant = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute  w-full h-full">
        <Image
          src="/doctor.png"
          alt="Doctor background"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center gap-12 w-full relative z-10 px-4 md:px-6">

        {/* Left Side: Heading + CTA */}
        <div className="flex flex-col justify-center">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="border-t border-white w-16"></div>
            <span className="text-white font-Baserville text-sm font-medium">
              How it Works
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] max-w-md mb-6">
            3 easy steps to a <span className="font-Baserville">confident smile</span>
          </h2>

          {/* CTA Button */}
          <div className="mb-8">
            <Button className="bg-white hover:bg-blue-100 text-black font-semibold px-6 py-3 rounded-full transition duration-300 flex items-center gap-2 w-fit">
              Find a doctor
              <ArrowRight className="text-gray-900 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Side: Step Cards */}
        <div className="flex flex-col items-center lg:items-start gap-8 pt-14">
          {steps.map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-white/80 border border-gray-200 rounded-3xl p-6 shadow-lg transition duration-300 min-h-[200px] w-full max-w-[300px] flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="text-blue-900 text-lg font-semibold font-Baserville mb-1">
                Step {step}
              </div>
              <h3 className="text-blue-950 font-bold font-Baserville text-[22px] leading-tight mb-2">
                {title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed font-Baserville">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConSultant;
