import { useEffect, useId, useRef, useState } from 'react'
import { navLinks } from '../content'
import Wordmark from './Wordmark'

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const menuId = useId()
  const solid = scrolled || open
  const tone = solid ? 'dark' : 'light'

  useEffect(() => {
    const ids = [...navLinks.map((link) => link.id), 'start']

    function onScroll() {
      setScrolled(window.scrollY > 12)
      const marker = window.scrollY + 150
      let current = ''
      for (const id of ids) {
        const section = document.getElementById(id)
        if (!section) continue
        const top = section.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const firstLink = menuRef.current?.querySelector('a')
    firstLink?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function closeAndGo() {
    setOpen(false)
  }

  const linkClass = (id) => {
    const current = active === id
    return [
      'relative py-2 text-sm tracking-wide transition-opacity hover:opacity-100',
      current ? 'opacity-100' : 'opacity-80',
      'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform',
      current ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
    ].join(' ')
  }

  return (
    <div className={`fixed inset-x-0 top-0 z-50 ${open ? 'flex h-[100svh] flex-col' : ''}`}>
      <div className="bg-sage-deep text-cream">
        <p className="wrap py-2 text-center text-[0.62rem] font-medium uppercase leading-snug tracking-[0.08em] sm:text-xs sm:tracking-[0.16em]">
          Academic Prototype — Not accepting real applications
        </p>
      </div>

      <header
        className={`transition-colors duration-200 ${
          solid
            ? 'border-b border-chocolate/10 bg-cream/95 text-chocolate backdrop-blur-md'
            : 'bg-transparent text-cream'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <a href="#top" className="rounded-sm" onClick={closeAndGo}>
            <Wordmark tone={tone} />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? 'location' : undefined}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
            <a href="#start" className={solid ? 'btn btn-dark !min-h-11 px-4' : 'btn btn-light !min-h-11 px-4'}>
              Start your journey
            </a>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/30 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {open && (
        <nav
          id={menuId}
          ref={menuRef}
          aria-label="Mobile"
          className="min-h-0 flex-1 overflow-y-auto border-t border-chocolate/10 bg-cream text-chocolate lg:hidden"
        >
          <div className="wrap flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? 'location' : undefined}
                className="border-b border-chocolate/10 py-4 font-serif text-3xl tracking-tight"
                onClick={closeAndGo}
              >
                {link.label}
              </a>
            ))}
            <a href="#start" className="btn btn-dark mt-6" onClick={closeAndGo}>
              Start your journey
            </a>
          </div>
        </nav>
      )}
    </div>
  )
}
