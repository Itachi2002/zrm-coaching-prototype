import { steps } from '../content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" tabIndex={-1} className="section-space bg-cream-deep">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">The path</p>
          <h2 className="display mt-4 text-4xl text-chocolate sm:text-5xl">How it works</h2>
          <p className="mt-4 text-muted">
            Four steps, from reading this page to beginning the work. The intro call is where you and Zoe decide whether it is the right fit, including price.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-[1.6rem] bg-paper p-6 ring-1 ring-chocolate/10 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="display-italic text-3xl text-chocolate-soft">{step.number}</span>
              <h3 className="mt-5 font-serif text-[1.7rem] text-chocolate">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
