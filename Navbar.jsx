import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Heart, PlusCircle } from 'lucide-react'

export default function Navbar({ wishlistCount = 0 }) {
  const [open, setOpen] = useState(false)
  const nav = [
    ['Explore homes', '/properties'],
    ['Our agents', '/agents'],
    ['Saved homes', '/wishlist']
  ]
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur-xl">
    <div className="container-shell flex h-[76px] items-center justify-between gap-4">
      <Link to="/" className="brand flex items-center gap-2" onClick={() => setOpen(false)}><span className="brand-mark">h</span><span>haven<span className="brand-dot">.</span></span></Link>
      <nav className="hidden items-center gap-8 md:flex">{nav.map(([label, to]) => <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}{to === '/wishlist' && wishlistCount > 0 && <span className="count">{wishlistCount}</span>}</NavLink>)}</nav>
      <div className="hidden items-center gap-3 md:flex"><Link to="/login" className="btn-quiet">Sign in</Link><Link to="/add-property" className="btn-primary"><PlusCircle size={17}/> List a property</Link></div>
      <button className="icon-button md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="mobile-nav container-shell md:hidden">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}<Link to="/login" onClick={() => setOpen(false)}>Sign in</Link><Link to="/add-property" className="btn-primary" onClick={() => setOpen(false)}><Heart size={16}/> List a property</Link></div>}
  </header>
}