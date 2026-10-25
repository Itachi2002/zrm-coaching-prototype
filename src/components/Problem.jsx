import { pillars } from '../content'

export default function Problem() {
  return (
    <section id="approach" tabIndex={-1} className="section-space">
      <div className="wrap">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">The real gap</p>
            <h2 className="display mt-4 text-4xl text-chocolate sm:text-5xl lg:text-[3.4rem]">
              Knowing what to do and staying with it are different skills.
            </h2>
          </div>
          <div className="max-w-xl text-muted lg:col-span-6 lg:col-start-7">
            <p>
              You have started before. You already understand the broad shape of it: train, eat in a way that supports you, and recover when you can. Then the week fills up, the plan slips, and Monday becomes the place where it all begins again.
            </p>
            <p className="mt-4">
              ZRM Coaching is written for women aged 21 to 35 who do well in work or higher education, and who want their health to feel as considered as the rest of their life. The work is personalised structure, accountability, and guidance that includes mindset.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid gap-10 border-t border-chocolate/10 pt-10 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar) => (
            <li key={pillar.number}>
              <p className="display-italic text-2xl text-sage-deep">{pillar.number}</p>
              <h3 className="mt-3 font-serif text-2xl text-chocolate">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
