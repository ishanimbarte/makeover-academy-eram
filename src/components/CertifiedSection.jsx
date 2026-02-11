export default function CertifiedSection() {
  return (
    <section className="bg-[#f3f3f3] py-16 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          BECOME A CERTIFIED MAKEUP ARTIST. ACCREDITED. RESPECTED. TRUSTED
        </h2>

        {/* Button */}
        <div className="mt-8 md:mt-10">
          <button className="relative overflow-hidden bg-[#EBD6FB] text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">

            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></span>

            <span className="relative z-10">
              ENROLL TODAY!
            </span>
          </button>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 md:mt-20 text-left text-gray-800">
        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          <span className="font-semibold">
            Vizio Makeup Academy is proud to be an accredited, award-winning
            online makeup school with over 15 years of proven excellence in
            beauty education.
          </span>{" "}
          We’re trusted by thousands of students worldwide and proudly
          featured in the official <em>Urban Decay Artist Directory</em>—the
          only online makeup academy with this distinction. Our school holds
          a stellar reputation on Trustpilot, maintains an A+ rating with the
          Better Business Bureau (BBB), and is an approved vendor for charter
          high schools across California. These affiliations reflect our deep
          commitment to quality, credibility, and student success in the
          ever-evolving Aesthetics industry.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Number #1 makeup school in the USA! I already knew makeup artistry,
          but I just took my skills to a whole new level.
        </p>
      </div>
    </section>
  );
}
