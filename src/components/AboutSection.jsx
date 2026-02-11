import aboutBg from "../assets/about-makeover.jpg";

export default function AboutSection() {
  return (
    <section className="relative h-screen md:h-auto py-0 md:py-20">
      
      {/* Background Image */}
      <img
        src={aboutBg}
        alt="Makeup Academy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Glass Content Box */}
      <div className="relative z-10 h-full md:h-auto flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:ml-10 w-full">
          
          <div className="bg-black/60 backdrop-blur-md rounded-3xl 
                          p-6 sm:p-8 md:p-14 
                          text-white shadow-2xl
                          max-h-[85vh] md:max-h-none 
                          overflow-y-auto md:overflow-visible">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              <span className="font-semibold">
                Earn your professional makeup certification online and launch your career with confidence.
              </span>{" "}
              Whether you dream of working in bridal makeup, film and TV, or freelance artistry,
              our accredited online makeup courses give you the real-world skills to thrive.
              With expert instruction, certification, and flexible learning, Vizio Makeup Academy
              helps turn your passion into a high-paying profession—wherever you’re starting from.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              <span className="font-semibold">Vizio Makeup Academy</span> is an accredited,
              globally recognized online makeup school designed for aspiring makeup artists of all levels.
              Whether you’re just starting or looking to advance your career, our flexible facial,
              makeup and hair courses provide expert instruction, real-world skills,
              and a path to professional certification.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Students learn from Hollywood celebrity instructors, access a full suite of
              professional training videos, and receive personalized feedback on every assignment.
              With over 15 years of experience and thousands of graduates worldwide,
              Vizio is one of the most trusted names in online beauty education.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
