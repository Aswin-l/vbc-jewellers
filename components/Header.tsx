'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, ArrowUpRight } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
const links=[['Home','/'],['Collections','/collections'],['Our Story','/about'],['Visit Us','/contact']];
export default function Header(){
 const pathname=usePathname(); const [open,setOpen]=useState(false);
 const cartCount=useAppSelector(s=>s.shop.cart.length); const wishCount=useAppSelector(s=>s.shop.wishlist.length);
 return <header className="site-header"><div className="header-inner">
  <Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><Image src="/images/vbc-logo-reference.png" alt="VBC" fill sizes="44px" /></span><span className="brand-copy"><b>VBC JEWELLERS</b><small>TRADITION · TRUST · TIMELESS</small></span></Link>
  <nav className={open?'main-nav is-open':'main-nav'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className={pathname===href?'active':''}>{label}</Link>)}<Link className="mobile-enquire" href="/contact">Enquire <ArrowUpRight size={15}/></Link></nav>
  <div className="header-actions"><Link href="/wishlist" aria-label="Wishlist" className="icon-link"><Heart size={19}/>{wishCount>0&&<i>{wishCount}</i>}</Link><Link href="/cart" aria-label="Shopping bag" className="icon-link"><ShoppingBag size={19}/>{cartCount>0&&<i>{cartCount}</i>}</Link><Link href="/contact" className="header-cta">Enquire <ArrowUpRight size={15}/></Link></div>
  <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
 </div></header>
}
