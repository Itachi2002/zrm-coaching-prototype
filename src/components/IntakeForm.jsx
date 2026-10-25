import { useEffect, useState } from 'react'
import { paths, supports } from '../content'

const emptyValues = {
  name: '',
  email: '',
  support: '',
  note: '',
  consent: false,
}

const pathLabels = {
  'body-beyond': 'Body & Beyond',
  'personal-training': 'Personal training',
  'not-sure': 'Not sure yet',
}

function validate(values, interest) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()

  if (name.length < 2) {
    errors.name = 'Add your name so this demo can check the field.'
  } else if (name.length > 80) {
    errors.name = 'Use 80 characters or fewer.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Enter an email address, such as name@email.com. It will not be sent.'
  }

  if (!values.support) {
    errors.support = 'Choose the kind of support you are looking for.'
  }

  if (!interest) {
    errors.interest = 'Choose a path, even if you are not sure yet.'
  }

  if (values.note.length > 600) {
    errors.note = 'Keep this note to 600 characters.'
  }

  if (!values.consent) {
    errors.consent = 'Confirm that you understand this form does not send a real application.'
  }

  return errors
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 text-sm text-terracotta">
      {message}
    </p>
  )
}

export default function IntakeForm({ interest, onInterestChange, directed, requestId }) {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!requestId) return undefined
    setSubmitted(false)
    setErrors({})
    const frame = requestAnimationFrame(() => {
      document.getElementById('interest-group')?.focus()
    })
    return () => cancelAnimationFrame(frame)
  }, [requestId])

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  function changeInterest(value) {
    onInterestChange(value)
    setErrors((current) => {
      if (!current.interest) return current
      const next = { ...current }
      delete next.interest
      return next
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values, interest)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        document.getElementById('form-errors')?.focus()
      })
      return
    }

    setValues(emptyValues)
    onInterestChange('')
    setSubmitted(true)
    requestAnimationFrame(() => {
      document.getElementById('form-success')?.focus()
    })
  }

  function restart() {
    setSubmitted(false)
    requestAnimationFrame(() => {
      document.getElementById('journey-name')?.focus()
    })
  }

  const errorItems = [
    errors.name && { href: '#journey-name', message: errors.name },
    errors.email && { href: '#journey-email', message: errors.email },
    errors.support && { href: '#journey-support', message: errors.support },
    errors.interest && { href: '#interest-group', message: errors.interest },
    errors.note && { href: '#journey-note', message: errors.note },
    errors.consent && { href: '#journey-consent', message: errors.consent },
  ].filter(Boolean)

  return (
    <section id="start" tabIndex={-1} className="section-space bg-[linear-gradient(180deg,#f3e6df_0%,#f6f1ea_100%)]">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
        <div>
          <p className="eyebrow">Enquiry</p>
          <h2 className="display mt-4 text-4xl text-chocolate sm:text-5xl lg:text-6xl">Start your journey</h2>
          <p className="mt-5 text-muted">
            Tell Zoe a little about what you want support with. On the live service, this note is what she would read before inviting you to an intro call.
          </p>
          <p className="mt-5 rounded-2xl bg-paper px-5 py-4 text-sm leading-relaxed text-chocolate ring-1 ring-chocolate/10">
            Academic prototype. This form checks your answers on this page only. It does not send, store, or share anything you type.
          </p>
        </div>

        <div className="rounded-[2rem] bg-paper p-5 shadow-[0_24px_70px_rgb(36_24_18_/_0.08)] ring-1 ring-chocolate/10 sm:p-8">
          {submitted ? (
            <div id="form-success" tabIndex={-1} role="status" className="py-4">
              <p className="eyebrow">Prototype only</p>
              <h3 className="display mt-3 text-4xl text-chocolate">This note stayed on the page.</h3>
              <p className="mt-4 text-muted">
                Nothing was sent, saved, or shared. Your answers were checked here and then cleared. On the real site, this is the moment Zoe would receive your note and invite you to an intro call.
              </p>
              <button type="button" className="btn btn-dark mt-8" onClick={restart}>
                Try the demo again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="text-sm text-muted">Fields marked with a star are checked before the demo can finish.</p>

              {errorItems.length > 0 && (
                <div
                  id="form-errors"
                  tabIndex={-1}
                  role="alert"
                  className="mt-5 rounded-2xl bg-[#fbf4f2] px-4 py-4 text-sm text-terracotta ring-1 ring-terracotta/20"
                >
                  <p className="font-medium">Check the highlighted fields.</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {errorItems.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="underline decoration-terracotta/40 underline-offset-2">
                          {item.message}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="journey-name" className="mb-2 block text-sm font-medium text-chocolate">
                    Your name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="journey-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={80}
                    value={values.name}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'journey-name-error' : undefined}
                    className="field"
                    onChange={(event) => update('name', event.target.value)}
                  />
                  <FieldError id="journey-name-error" message={errors.name} />
                </div>

                <div>
                  <label htmlFor="journey-email" className="mb-2 block text-sm font-medium text-chocolate">
                    Email address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="journey-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'journey-email-help journey-email-error' : 'journey-email-help'}
                    className="field"
                    onChange={(event) => update('email', event.target.value)}
                  />
                  <p id="journey-email-help" className="mt-2 text-sm text-muted">
                    For the demo only. It is checked for format, then cleared. It is not sent.
                  </p>
                  <FieldError id="journey-email-error" message={errors.email} />
                </div>

                <div>
                  <label htmlFor="journey-support" className="mb-2 block text-sm font-medium text-chocolate">
                    What do you want support with? <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="journey-support"
                    name="support"
                    value={values.support}
                    aria-invalid={errors.support ? 'true' : 'false'}
                    aria-describedby={errors.support ? 'journey-support-error' : undefined}
                    className="field"
                    onChange={(event) => update('support', event.target.value)}
                  >
                    <option value="">Choose one</option>
                    {supports.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FieldError id="journey-support-error" message={errors.support} />
                </div>

                <fieldset
                  id="interest-group"
                  tabIndex={-1}
                  aria-describedby={errors.interest ? 'journey-interest-error' : undefined}
                  className="rounded-2xl outline-none"
                >
                  <legend className="mb-3 text-sm font-medium text-chocolate">
                    Which path are you interested in? <span aria-hidden="true">*</span>
                  </legend>
                  {directed && interest && (
                    <p role="status" className="mb-3 text-sm text-chocolate-soft">
                      {pathLabels[interest]} is selected below. You can change it.
                    </p>
                  )}
                  <div className="grid gap-3">
                    {paths.map((path) => {
                      const id = `interest-${path.value}`
                      const checked = interest === path.value
                      return (
                        <label
                          key={path.value}
                          htmlFor={id}
                          className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition-colors ${
                            checked
                              ? 'border-chocolate bg-blush/50'
                              : 'border-chocolate/15 bg-cream hover:border-chocolate/40'
                          }`}
                        >
                          <input
                            id={id}
                            type="radio"
                            name="interest"
                            value={path.value}
                            checked={checked}
                            className="mt-1 h-4 w-4 accent-chocolate"
                            onChange={() => changeInterest(path.value)}
                          />
                          <span>
                            <span className="block text-sm font-medium text-chocolate">{path.label}</span>
                            <span className="block text-sm text-muted">{path.detail}</span>
                          </span>
                        </label>
                      )
                    })}
                  </div>
                  <FieldError id="journey-interest-error" message={errors.interest} />
                </fieldset>

                <div>
                  <label htmlFor="journey-note" className="mb-2 block text-sm font-medium text-chocolate">
                    Anything you want Zoe to know
                    <span className="font-normal text-muted"> (optional)</span>
                  </label>
                  <textarea
                    id="journey-note"
                    name="note"
                    maxLength={600}
                    value={values.note}
                    aria-invalid={errors.note ? 'true' : 'false'}
                    aria-describedby={errors.note ? 'journey-note-count journey-note-error' : 'journey-note-count'}
                    className="field"
                    onChange={(event) => update('note', event.target.value)}
                  />
                  <p id="journey-note-count" className="mt-2 text-sm text-muted">
                    {values.note.length}/600
                  </p>
                  <FieldError id="journey-note-error" message={errors.note} />
                </div>

                <div>
                  <label htmlFor="journey-consent" className="flex items-start gap-3 text-sm leading-relaxed text-chocolate">
                    <input
                      id="journey-consent"
                      name="consent"
                      type="checkbox"
                      checked={values.consent}
                      aria-invalid={errors.consent ? 'true' : 'false'}
                      aria-describedby={errors.consent ? 'journey-consent-error' : undefined}
                      className="mt-1 h-5 w-5 shrink-0 accent-chocolate"
                      onChange={(event) => update('consent', event.target.checked)}
                    />
                    <span>
                      I understand this is an academic prototype and that submitting will not send a real application.
                      <span aria-hidden="true"> *</span>
                    </span>
                  </label>
                  <FieldError id="journey-consent-error" message={errors.consent} />
                </div>
              </div>

              <button type="submit" className="btn btn-dark mt-7 w-full sm:w-auto">
                Submit my note
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
