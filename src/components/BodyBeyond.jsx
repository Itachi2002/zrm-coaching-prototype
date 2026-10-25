import { programmeFeatures } from '../content'

export default function BodyBeyond({ onChoose }) {
  return (
    <section id="body-beyond" tabIndex={-1} className="section-space bg-chocolate text-cream">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-blush">Online coaching</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl">Body & Beyond</h2>
          <p className="mt-6 max-w-md text-cream/85">
            An online coaching programme of three to six months, for women who want a personalised plan and someone alongside them while they live it.
          </p>
          <p className="mt-4 max-w-md text-cream/75">
            The length sits in that range on purpose. Where you land is agreed on an intro call, from your goal and your starting point.
          </p>
          <a
            href="#start"
            className="btn btn-light mt-8"
            onClick={(event) => {
              event.preventDefault()
              onChoose()
            }}
          >
            Start with Body & Beyond
          </a>
        </div>

        <ol className="divide-y divide-cream/15 border-y border-cream/15">
          {programmeFeatures.map((feature, index) => (
            <li key={feature.title} className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr] sm:items-start">
              <span className="display-italic text-2xl text-blush">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-lg font-medium text-cream">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{feature.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
