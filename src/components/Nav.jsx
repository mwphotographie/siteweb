import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className="nav">
      <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
        <span className="nav__mark" aria-hidden="true" />
        Argentique
      </NavLink>

      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-label="Ouvrir le menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}
          onClick={() => setOpen(false)}
        >
          Présentation
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}
          onClick={() => setOpen(false)}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}
