import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from './navSlice.js'
import cartReducer from './cartSlice.js'
import authReducer from './authSlice.js'
import createAccReducer from './CreateAccSlice.js'
import profileReducer from './profileSlice.js'
import heroReducer from './heroSlice.js'
import saleReducer from './SaleSlice.js'
import productReducer from './ProductSlice.js'
import whyChooseReducer from './WhyChooseSlice.js'
import footerReducer from './footerSlice.js'


export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cart: cartReducer,
        auth: authReducer,
        createAcc: createAccReducer,
        profile: profileReducer,
        hero: heroReducer,
        sale: saleReducer,
        product: productReducer,
        whyChoose: whyChooseReducer,
        footer: footerReducer,
    }
})
 