import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export function TrustedSection() {
  
  return (
    <>
    <section className="relative bg-black text-white overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[200px_1fr] items-start gap-8 md:gap-12 lg:gap-x-24">
        
        {/* Left Image - Woman */}
        <div className="flex  md:justify-start">
          <Image
            src="/woman.png"
            alt="Smiling woman"
            width={180}
            height={180}
            className="rounded-2xl object-cover w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
          />
        </div>

        {/* Right Content - Text */}
        <div className="text-left my-12 px-2 sm:px-4 max-w-4xl lg:px-0 lg:ml-0 lg:pt-24">
          <h2 className="text-4xl lg:text-6xl md:text-lg font-bold leading-[1.2] text-white font-sans">
            <span className="block font-Baserville font-bold">
              Trusted by patients and FDA-cleared —
            </span>
            <span className="block italic font-serif text-white">
              Innovation that keeps your smile journey on track.
            </span>
          </h2>
          <p className="mt-4   md:text-base text-xs   max-w-3xl leading-relaxed text-gray-300 font-grostek">
            Our aligners deliver smoother, predictable progress — so you can enjoy life confidently, knowing your smile is on track.**
          </p>
        </div>
       {/* Bottom Right Image - Teeth */}
          <div className="relative md:static lg:absolute lg:bottom-0 lg:right-8 mt-8 lg:mt-0 flex justify-end pr-4 lg:pr-0">
  <div className="relative rounded-[1.5rem] overflow-hidden">
    <Image
      src="/teeth.png"
      alt="Aligners"
      width={180}
      height={180}
      className="rounded-2xl"
    />
  </div>
</div>
</div>
</section>
{/* Why it different Section */}
<section className="bg-black text-white py-36 px-4 md:px-12">
  <div className="max-w-6xl mx-auto text-left">
    
    {/* Heading */}
    <h2 className="font-Baskerville text-6xl md:text-8xl leading-tight mb-8">
      Why are we <span className=" font-baskerville text-blue-100">different?</span>
    </h2>

    {/* Split Subheading */}
    <div className="mb-6">
      <div className="flex items-center gap-2 mt-4">
  <div className="border-t border-white w-16"></div>
  <span className="text-white text-sm font-medium">01</span>
</div>


      <h5 className="font-grostek text-gray-100 text-2xl md:text-3xl leading-snug">
        Comfort meets
      </h5>
      <h5 className="font-grostek text-gray-100 text-2xl md:text-3xl leading-snug">
        Efficiency
      </h5>
    </div>

    {/* Paragraph */}
    <p className="font-grostek text-gray-300 text-base md:text-lg leading-relaxed max-w-7xl text-left mb-12">
      Our aligners apply optimal force with a gentle, consistent touch. While traditional aligners may use up to 8.4x more force, ours deliver precise control for a more comfortable experience.
    </p>

    {/* Image Below Paragraph */}
    <div className="flex justify-start mb-20 overflow-hidden">
      <Image
        src="/graph.png"
        alt="Aligner Force Comparison"
        width={720}
        height={416}
        className=" rounded-2xl w-auto h-auto max-w-full max-h-[480px] object-contain"
      />
    </div>

  </div>
   <div className="max-w-6xl mx-auto text-left">
    
    {/* Heading */}
     {/* Split Subheading */}
  <div className="mb-6">
      <div className="flex items-center gap-2 mt-4">
  <div className="border-t border-white w-16"></div>
  <span className="text-white text-sm font-medium">02</span>
</div>
      <h5 className="font-grostek text-gray-100 text-2xl md:text-3xl leading-snug">
        AirFlex™ aligners,
      </h5>
      <h5 className="font-grostek text-gray-100 text-2xl md:text-3xl leading-snug">
        advanced material
      </h5>
    </div>

    {/* Paragraph */}
    <p className="font-grostek text-gray-300 text-lg md:text-base leading-relaxed max-w-none text-left mb-12">
      AirFlex™ is the new generation of clear aligners, featuring patented HyperElastic™ polymer for sustained optimal force delivery. It supports natural bone remodeling and reduces daytime relapse when not wearing aligners.**
    </p>
    <Button className="text-lg bg-gray-950 mb-8 text-white rounded-4xl px-4 py-5 hover:bg-gray-200 hover:text-gray-950 ">
      OrthoFX Difference
      <ArrowRight className="max-w-full text-gray-900 rounded-full bg-gray-100" />
    </Button>
    {/* Image Below Paragraph */}
    <div className="flex justify-start mb-20 overflow-hidden">
      <Image
        src="/braces.png"
        alt="Aligner Force Comparison"
        width={720}
        height={416}
        className=" rounded-2xl w-auto h-auto max-w-full max-h-[480px] object-contain"
      />
    </div>

  </div>
</section>






    </>
  )
}
