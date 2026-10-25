import logo from '../assets/zrm-logo.jpg'
import { navLinks, socials } from '../content'

const footerLinks = [
  { href: '#approach', label: 'The real gap' },
  ...navLinks,
  { href: '#start', label: 'Start your journey' },
]

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.15fr_0.8fr_1fr] md:py-20">
        <div>
          <div className="h-40 w-40 overflow-hidden rounded-[1.6rem] bg-sage">
            <img
              src={logo}
              alt="ZRM Coaching. Made for your next chapter."
              width="1024"
              height="1024"
              className="h-full w-full scale-150 object-cover"
            />
          </div>
          <p className="display-italic mt-5 text-xl text-blush">Made for your next chapter.</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cream/60">On this page</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream/85 underline-offset-4 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cream/60">Find Zoe</p>
          <ul className="mt-4 space-y-5">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col"
                >
                  <span className="font-medium group-hover:underline">{social.name}</span>
                  <span className="text-sm text-cream/70">{social.handle}</span>
                  <span className="mt-2 inline-flex w-fit rounded-full border border-cream/25 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-cream/75">
                    Prototype link · not verified
                  </span>
                  <span className="sr-only"> Opens in a new tab.</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Academic Prototype — Not accepting real applications</p>
          <p>Built for usability testing. Not a checkout, a booking system, or a live enquiry form.</p>
        </div>
      </div>
    </footer>
  )
}
