import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { properties as initialProperties } from './data/properties'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import Wishlist from './pages/Wishlist'
import Compare from './pages/Compare'
import Agents from './pages/Agents'
import Login from './pages/Login'
import AddProperty from './pages/AddProperty'
import { ArrowUp } from 'lucide-react'

function readList(key) {
  try { const parsed = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(parsed) ? parsed : [] } catch { return [] }
}
function NotFound() {
  return <main className="page-main container-shell"><div className="empty-state"><span className="eyebrow">A little detour</span><h1>That page wandered off.</h1><p>Let’s get you back to finding a place.</p><a href="/properties" className="btn-primary">Explore homes</a></div></main>
}
export default function App() {
  const [wishlist, setWishlist] = useState(() => readList('haven-wishlist'))
  const [compared, setCompared] = useState(() => readList('haven-compare'))
  const location = useLocation()
  useEffect(() => { localStorage.setItem('haven-wishlist', JSON.stringify(wishlist)) }, [wishlist])
  useEffect(() => { localStorage.setItem('haven-compare', JSON.stringify(compared)) }, [compared])
  const toggleWishlist = id => setWishlist(old => old.includes(id) ? old.filter(n => n !== id) : [...old, id])
  const toggleCompare = id => setCompared(old => old.includes(id) ? old.filter(n => n !== id) : old.length >= 3 ? old : [...old, id])
  const [showTop, setShowTop] = useState(false)
  useEffect(() => { const fn = () => setShowTop(window.scrollY > 500); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])
  const pageProps = { properties: initialProperties, wishlist, toggleWishlist, compared, toggleCompare }
  const isAuth = location.pathname === '/login'
  return <><ScrollToTop/>{!isAuth && <Navbar wishlistCount={wishlist.length}/>}<Routes><Route path="/" element={<Home {...pageProps}/>}/><Route path="/properties" element={<Properties {...pageProps}/>}/><Route path="/properties/:id" element={<PropertyDetails {...pageProps}/>}/><Route path="/wishlist" element={<Wishlist {...pageProps}/>}/><Route path="/compare" element={<Compare {...pageProps}/>}/><Route path="/agents" element={<Agents/>}/><Route path="/login" element={<Login/>}/><Route path="/add-property" element={<AddProperty/>}/><Route path="*" element={<NotFound/>}/></Routes>{!isAuth && <Footer/>}{showTop && <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}><ArrowUp size={19}/></button>}</>
}