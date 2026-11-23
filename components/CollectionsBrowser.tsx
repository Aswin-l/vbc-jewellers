'use client';
import { useMemo,useState } from 'react'; import { Search,SlidersHorizontal } from 'lucide-react';
import { products,categories } from '@/lib/products'; import ProductCard from './ProductCard';
export default function CollectionsBrowser(){const [category,setCategory]=useState<string>('All');const [search,setSearch]=useState('');
 const filtered=useMemo(()=>products.filter(p=>(category==='All'||p.category===category)&&`${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase())),[category,search]);
 return <><div className="collection-tools"><div className="category-tabs">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?'selected':''}>{c}</button>)}</div><label className="search-box"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find a design"/><SlidersHorizontal size={16}/></label></div><div className="product-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>{filtered.length===0&&<div className="empty-state"><h3>No pieces found</h3><p>Try another search or category.</p></div>}</>;
}
