import { trainingPoints } from '../content'

export default function PersonalTraining({ onChoose }) {
  return (
    <section id="personal-training" tabIndex={-1} className="section-space bg-cream-deep">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">In person</p>
          <h2 className="display mt-4 text-4xl text-chocolate sm:text-5xl lg:text-6xl">
            Personal training, built around gym confidence.
          </h2>
          <p className="mt-6 text-muted">
            One-to-one sessions for women who want to feel capable in the gym: how to set up, how to move, and how to trust that they belong in the room.
          </p>
          <ul className="mt-8 space-y-4">
            {trainingPoints.map((point) => (
              <li key={point} className="flex gap-3 text-chocolate">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-deep" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-paper px-5 py-4 text-sm leading-relaxed text-muted ring-1 ring-chocolate/10">
            Where in-person sessions are held is still to be confirmed. This prototype does not name a studio, a city, or a timetable.
          </p>
          <a
            href="#start"
            className="btn btn-dark mt-8"
            onClick={(event) => {
              event.preventDefault()
              onChoose()
            }}
          >
            Ask about personal training
          </a>
        </div>

        <figure className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-chocolate shadow-[0_24px_60px_rgb(36_24_18_/_0.12)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,#f0d2bc,transparent_42%),linear-gradient(165deg,#c48962_0%,#8d5840_46%,#3c291f_100%)]"
          />
          <div aria-hidden="true" className="absolute inset-5 rounded-[1.4rem] border border-cream/35 sm:inset-7" />
          <figcaption className="absolute inset-x-5 bottom-5 rounded-2xl bg-cream/95 p-5 text-chocolate sm:inset-x-7 sm:bottom-7">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-chocolate-soft">
              Placeholder photography
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              In-gym session photography will sit here. This frame is marked so it is not mistaken for a client, a result, or a stock stand-in.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
