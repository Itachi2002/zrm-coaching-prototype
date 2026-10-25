import zoePortrait from '../assets/zoe-robin-may.jpg'
import { biographyPlaceholders, philosophy } from '../content'

export default function About() {
  return (
    <section id="about" tabIndex={-1} className="section-space">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
        <figure>
          <img
            src={zoePortrait}
            alt="Zoe Robin May, founder of ZRM Coaching, in a warm studio portrait."
            width="1024"
            height="576"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[72%_22%] shadow-[0_24px_50px_rgb(36_24_18_/_0.12)]"
          />
          <figcaption className="mt-4 text-sm text-muted">
            Zoe Robin May, founder. Studio portrait supplied for this prototype.
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">The coach</p>
          <h2 className="display mt-4 text-5xl text-chocolate sm:text-6xl">Zoe Robin May</h2>
          <p className="display-italic mt-3 text-2xl text-chocolate-soft">Made for your next chapter.</p>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Zoe is the founder of ZRM Coaching. She works with women who are capable in the rest of their life and want their training and health to feel just as held.
            </p>
            <p>
              The practice rests on a clear belief: women who keep starting over usually need structure that fits, someone who stays in touch, and support for the mindset that makes consistency possible. Training, nutrition, and the way a hard week feels are coached together. The aim is progress you can still recognise months from now.
            </p>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-dashed border-chocolate/25 bg-paper/80 p-5 sm:p-6">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-chocolate-soft">Needs confirmation</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              These biographical details are left open on purpose. Replace them with confirmed facts before this page is used outside usability testing.
            </p>
            <ul className="mt-4 space-y-3">
              {biographyPlaceholders.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-chocolate">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-deep" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-10 font-serif text-2xl text-chocolate">How Zoe coaches</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {philosophy.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-deep px-4 py-4 text-sm leading-relaxed text-chocolate">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
