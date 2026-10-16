import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
export default function Wishlist({ properties, wishlist, toggleWishlist }) {
 const saved = properties.filter(p => wishlist.includes(p.id))
 return <main className="page-main"><div className="container-shell"><div className="page-hero-row"><div><span className="eyebrow">Your shortlist</span><h1 className="page-title">Places you’ve <em>saved.</em></h1><p className="page-subtitle">Keep the homes you love close while you decide what feels right.</p></div><div className="saved-count"><Heart/><strong>{saved.length}</strong><span>saved homes</span></div></div>{saved.length ? <div className="property-grid">{saved.map((p,i)=><PropertyCard key={p.id} property={p} index={i} saved onToggle={toggleWishlist}/>)}</div> : <div className="empty-state"><div className="empty-icon"><Heart/></div><h3>Your saved homes will live here</h3><p>Tap the heart on any property that catches your eye.</p><Link to="/properties" className="btn-primary">Explore homes <ArrowRight size={17}/></Link></div>}</div></main>
}