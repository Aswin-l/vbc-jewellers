import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '@/lib/products';

// Replace this base URL when the backend is ready. Keep endpoint contracts stable for UI integration.
export const commerceApi = createApi({
 reducerPath:'commerceApi',
 baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL || '/api'}),
 tagTypes:['Products','Enquiries'],
 endpoints:(builder)=>({
  getProducts:builder.query<Product[],void>({query:()=>'/products', providesTags:['Products']}),
  getProductById:builder.query<Product,{id:string}>({query:({id})=>`/products/${id}`, providesTags:(_result,_error,arg)=>[{type:'Products',id:arg.id}]}),
  submitEnquiry:builder.mutation<{success:boolean;message:string},{name:string;phone:string;message:string;productIds:string[]}>({query:(body)=>({url:'/enquiries',method:'POST',body}), invalidatesTags:['Enquiries']})
 })
});
export const {useGetProductsQuery,useGetProductByIdQuery,useSubmitEnquiryMutation}=commerceApi;
