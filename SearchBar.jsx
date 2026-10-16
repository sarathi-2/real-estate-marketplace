import { Search, MapPin, SlidersHorizontal } from 'lucide-react'
export default function SearchBar({ query, setQuery, status, setStatus, onSearch }) {
  return <form className="search-bar" onSubmit={e => { e.preventDefault(); onSearch?.() }}>
    <label className="search-field"><MapPin size={19}/><span><small>Location</small><input value={query} onChange={e => setQuery(e.target.value)} placeholder="City, neighbourhood..." /></span></label>
    <span className="search-divider"/>
    <label className="search-field search-status"><SlidersHorizontal size={19}/><span><small>I'm looking to</small><select value={status} onChange={e => setStatus(e.target.value)}><option value="All">Buy or rent</option><option value="For sale">Buy a home</option><option value="For rent">Rent a home</option></select></span></label>
    <button className="btn-primary search-submit" type="submit"><Search size={18}/> Search homes</button>
  </form>
}