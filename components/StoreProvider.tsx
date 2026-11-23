'use client';
import { Provider } from 'react-redux'; import { useEffect,useRef } from 'react';
import { makeStore,AppStore } from '@/store'; import {hydrateShop} from '@/store/shopSlice';
export default function StoreProvider({children}:{children:React.ReactNode}){
 const storeRef=useRef<AppStore|null>(null);if(!storeRef.current)storeRef.current=makeStore();
 useEffect(()=>{try{const saved=localStorage.getItem('vbc-shop-state');if(saved)storeRef.current?.dispatch(hydrateShop(JSON.parse(saved)));}catch{}const unsubscribe=storeRef.current!.subscribe(()=>{const state=storeRef.current!.getState().shop;localStorage.setItem('vbc-shop-state',JSON.stringify(state));});return unsubscribe;},[]);
 return <Provider store={storeRef.current!}>{children}</Provider>;
}
