import type { Metadata } from 'next';
import './globals.css';
import StoreProvider from '@/components/StoreProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
export const metadata:Metadata={title:{default:'VBC Jewellers | Timeless Gold & Traditional Jewellery',template:'%s | VBC Jewellers'},description:'Explore traditional gold jewellery, bridal designs, chains, earrings and silver articles at VBC Jewellers, Tiruvannamalai.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/><WhatsAppButton/></StoreProvider></body></html>}
