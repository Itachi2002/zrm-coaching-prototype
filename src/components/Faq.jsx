import { useState } from 'react'
import { faqs } from '../content'

function PlusIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
    >
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Faq() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" tabIndex={-1} className="section-space">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 className="display mt-4 text-4xl text-chocolate sm:text-5xl">Before you enquire</h2>
          <p className="mt-4 max-w-sm text-muted">
            Duration, how coaching is delivered, who it is for, what accountability means, and how pricing is shared.
          </p>
        </div>

        <div className="border-t border-chocolate/15">
          {faqs.map((item) => {
            const open = openId === item.id
            const panelId = `faq-${item.id}`
            const buttonId = `faq-button-${item.id}`

            return (
              <div key={item.id} className="border-b border-chocolate/15">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-xl text-chocolate sm:text-2xl"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <PlusIcon open={open} />
                  </button>
                </h3>
                {open && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-6 pr-10">
                    {item.answer.map((paragraph) => (
                      <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted first:mt-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
