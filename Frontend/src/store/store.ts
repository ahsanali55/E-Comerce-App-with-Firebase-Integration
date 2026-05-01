import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from './navSlice'
import cartReducer from './cartSlice'
import profileReducer from './profileSlice'
import heroReducer from './heroSlice'
import saleReducer from './SaleSlice'
import productReducer from './ProductSlice'
import whyChooseReducer from './WhyChooseSlice'
import footerReducer from './footerSlice'


export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cart: cartReducer,
        profile: profileReducer,
        hero: heroReducer,
        sale: saleReducer,
        product: productReducer,
        whyChoose: whyChooseReducer,
        footer: footerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
 

