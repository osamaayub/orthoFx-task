import { steps } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ConSultant = () => {
  return (
    <section className="bg-black max-w-7xl mx-auto h-[100vh] flex items-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0" >
        <Image
          src="/doctor.png"
          alt="Doctor background"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full relative z-10">
        
        {/* Heading + CTA */}
        <div className="flex flex-col justify-center px-4 md:px-6">
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

        {/* Responsive Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-xl px-4 md:px-6">
          {steps.map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-blue-100 border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 min-h-[180px] w-full max-w-[280px] flex flex-col justify-between"
            >
              <div className="text-black text-lg font-Baserville mb-1">
                Step {step}
              </div>
              <h3 className="text-gray-900 font-Baserville text-[20px] leading-tight font-bold mb-3">
                {title}
              </h3>
              <p className="text-gray-600 font-Baserville text-base leading-relaxed">
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
