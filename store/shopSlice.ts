import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type ShopState={cart:string[];wishlist:string[]};
const initialState:ShopState={cart:[],wishlist:[]};
const shopSlice=createSlice({name:'shop',initialState,reducers:{
 hydrateShop:(_state,action:PayloadAction<ShopState>)=>action.payload,
 addToCart:(state,action:PayloadAction<string>)=>{if(!state.cart.includes(action.payload))state.cart.push(action.payload)},
 removeFromCart:(state,action:PayloadAction<string>)=>{state.cart=state.cart.filter(id=>id!==action.payload)},
 toggleWishlist:(state,action:PayloadAction<string>)=>{state.wishlist=state.wishlist.includes(action.payload)?state.wishlist.filter(id=>id!==action.payload):[...state.wishlist,action.payload]},
 clearCart:(state)=>{state.cart=[]}
}});
export const {hydrateShop,addToCart,removeFromCart,toggleWishlist,clearCart}=shopSlice.actions;
export default shopSlice.reducer;
