import zoePortrait from '../assets/zoe-robin-may.jpg'

export default function Hero() {
  return (
    <section id="top" tabIndex={-1} className="relative isolate min-h-[100svh] overflow-hidden bg-cocoa text-cream">
      <img
        src={zoePortrait}
        alt="Zoe Robin May seated on a stool in a warm brown studio, seen from the side in black training clothes."
        width="1024"
        height="576"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[54%_center] sm:object-[72%_center]"
      />
      <div className="hero-shade absolute inset-0" aria-hidden="true" />

      <div className="relative flex min-h-[100svh] items-end">
        <div className="wrap w-full pb-14 pt-36 sm:pb-20 lg:pb-24">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-blush">
              Personal training and online coaching
            </p>
            <h1 className="mt-5 text-cream">
              <span className="display block max-w-[12ch] text-[3.15rem] sm:max-w-none sm:text-7xl lg:text-[5.6rem]">
                Stop starting over.
              </span>
              <span className="display-italic mt-3 block max-w-[12ch] text-[2.15rem] text-cream/95 sm:max-w-[14ch] sm:text-5xl lg:text-[3.7rem]">
                Start showing up for yourself.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/90 sm:text-lg">
              For women who hold it together at work or in their studies, and want that same steadiness in their health.
              Coaching built around consistency, support, and progress you can sustain.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a href="#body-beyond" className="btn btn-light">
                Explore Body & Beyond
              </a>
              <a href="#start" className="btn btn-ghost-light">
                Start your journey
              </a>
            </div>
            <p className="mt-8 text-sm text-cream/85">
              <span className="display-italic text-xl text-cream">Zoe Robin May</span>
              <span className="mx-2 text-cream/40" aria-hidden="true">
                /
              </span>
              Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
