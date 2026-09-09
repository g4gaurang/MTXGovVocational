import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const sections = navigation
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        document.getElementById('menu-button')?.focus()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview" aria-label="MTX Gov Vocational home">
          <span className="brand__mark" aria-hidden="true">M</span>
          <span><strong>MTX</strong><small>Gov Vocational</small></span>
        </a>
        <button
          id="menu-button"
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <ul>
            {navigation.map(([id, title]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <a className="button button--small" href="#contact" onClick={() => setOpen(false)}>
            Request a Demonstration <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}
