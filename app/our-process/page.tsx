import TimelineStep from '../components/TimelineStep';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    step: 1,
    title: 'Planning & Permitting',
    imageSrc: '/images/grok-planning.jpg',
    shortDesc: 'Alignment and approvals.',
    detail: 'We begin by aligning your vision with feasibility. From detailed blueprints to navigating local city permitting and HOA approvals, we handle the red tape so you can focus on the design.',
  },
  {
    step: 2,
    title: 'Site Preparation',
    imageSrc: '/images/site-prep.jpg',
    shortDesc: 'Clearing the way.',
    detail: 'The ground up. We clear the lot, grade the soil for drainage, and bring in necessary utilities like water and temporary power to set the stage for a solid build.',
  },
  {
    step: 3,
    title: 'Foundation',
    imageSrc: '/images/foundation.jpg',
    shortDesc: 'Pouring the rock.',
    detail: 'Engineered for Texas soil. We form and pour a post-tension slab foundation, inspected rigorously to ensure the structural integrity of your future home.',
  },
  {
    step: 4,
    title: 'Framing',
    imageSrc: '/images/josh-olalde-framing-unsplash.jpg',
    shortDesc: 'The skeleton rises.',
    detail: 'This is when your home takes shape. Walls go up, the roof line appears, and you can finally walk the layout of your rooms in real life.',
  },
  {
    step: 5,
    title: 'Exterior',
    imageSrc: '/images/exterior.jpg',
    shortDesc: 'Weather-tight shell.',
    detail: 'We install the roof, windows, and exterior finishes. This "dried-in" phase protects the interior work and enhances curb appeal with limestone or siding.',
  },
  {
    step: 6,
    title: 'MEP',
    imageSrc: '/images/mep.jpg',
    shortDesc: 'Systems rough-in.',
    detail: 'Mechanical, Electrical, and Plumbing. We run the "veins" of the house inside the walls—HVAC ducts, wiring, and pipes—before closing them up.',
  },
  {
    step: 7,
    title: 'Interior',
    imageSrc: '/images/interior.jpg',
    shortDesc: 'Finishes and fixtures.',
    detail: 'Insulation, drywall, texture, and paint transform the frame into rooms. Cabinets, flooring, and trim add the character and style you selected.',
  },
  {
    step: 8,
    title: 'Final Inspection & Move In',
    imageSrc: '/images/final%20inspection.jpg',
    shortDesc: 'The blue tape walk.',
    detail: 'We perform a final walkthrough to ensure every detail meets our high standards. Once clean and polished, we hand you the keys to your legacy.',
  },
];

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mb-6 tracking-tight">Our Custom Process</h1>
        <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
          From blueprint to move-in, our process ensures quality—let us jump in at any step for your needs.
        </p>
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Persistent Dotted Path (Desktop View) */}
        {/* Positioned to align with the center of the step markers (w-16) => left-[32px] approx */}
        <div className="hidden md:block absolute left-[31px] top-6 bottom-32 w-px z-0 border-l-2 border-dashed border-[#1E3A8A]/30"></div>
        {/* Steps Container */}
        <div className="relative z-10 space-y-4">
          {steps.map((s) => (
            <TimelineStep key={s.step} {...s} />
          ))}
        </div>
        {/* End Monogram Section */}
        <div className="flex flex-col items-center justify-center mt-32 relative z-10">
          {/* Connecting line to monogram */}
          <div className="w-px h-16 bg-gradient-to-b from-[#1E3A8A]/30 to-transparent mb-4 hidden md:block"></div>
          <div className="relative w-24 h-24 mb-6 transform hover:scale-110 transition-transform duration-500">
            <Image
              src="/images/Icon/BMC_Icon_DkGold.png"
              alt="Bar Moon Monogram"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          <p className="text-[#1E3A8A] font-serif italic text-2xl tracking-wide">Crafting Texas Legacies</p>
          <Link href="/contact" className="mt-8 px-10 py-4 bg-[#1E3A8A] text-white rounded-full text-lg font-bold hover:bg-[#E76F1E] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
