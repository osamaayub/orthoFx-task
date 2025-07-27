import { Cards } from "@/constants";

export default function LifestyleSection() {
  return (
    <section className="bg-black py-24 px-6">
      {/* Heading and CTA */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] items-start mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-200 tracking-tight leading-snug md:leading-tight">
          Aligned<br />
          <span className="font-Baskerville text-blue-200">to your lifestyle</span>
        </h2>
        <div className="flex justify-end mt-[5.2rem]">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
            Find a doctor
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {Cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden rounded-2xl shadow-xl flex flex-col justify-end bg-gray-900 ${
              idx === 0 ? "h-[500px]" : "h-[440px]"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <h3
                className={`text-white font-bold leading-tight mb-2 ${
                  idx === 0 ? "text-xl" : "text-[1.375rem] break-words line-clamp-2"
                }`}
              >
                {card.title}
              </h3>
              {card.description && (
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {card.description}
                </p>
              )}
              <div className="flex justify-end">
                {card.type === "button" ? (
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow hover:bg-gray-200 transition">
                    {card.cta}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <div className="text-white hover:text-blue-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
