'use client';
import Image from 'next/image'; import Link from 'next/link';
import { Heart, ArrowUpRight } from 'lucide-react';
import { Product } from '@/lib/products';
import { useAppDispatch,useAppSelector } from '@/store/hooks';
import { toggleWishlist } from '@/store/shopSlice';
export default function ProductCard({product}:{product:Product}){
 const dispatch=useAppDispatch(); const saved=useAppSelector(s=>s.shop.wishlist.includes(product.id));
 return <article className="product-card"><div className="product-image"><Link href={`/product/${product.slug}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" /></Link>{product.tag&&<span className="product-tag">{product.tag}</span>}<button className={saved?'save-button saved':'save-button'} aria-label={saved?'Remove from wishlist':'Add to wishlist'} onClick={()=>dispatch(toggleWishlist(product.id))}><Heart size={17} fill={saved?'currentColor':'none'}/></button><Link className="quick-view" href={`/product/${product.slug}`}>View piece <ArrowUpRight size={15}/></Link></div><div className="product-info"><div><span className="product-category">{product.category}</span><h3><Link href={`/product/${product.slug}`}>{product.name}</Link></h3></div><span className="enquire-price">Price on enquiry</span></div></article>
}
