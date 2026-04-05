import { createSlice } from "@reduxjs/toolkit";

const whyChooseSlice = createSlice({
    name: "whyChoose",
    initialState: {
        left: [
           {
            id: 1,
            title: "Wide Selection",
            description: "Ahsan Store offers a diverse range of gadgets, from smartphones to smart home devices, ensuring you find what you need to elevate your lifestyle and meet your tech requirements.",
           },
           {
             id: 2,
            title: "Quality Assurance",
            description: "Every gadget at Ahsan Store undergoes rigorous quality checks, guaranteeing reliability and performance, so you can shop with confidence knowing you're getting the best.",
           },
           {
             id: 3,
            title: "Competitive Prices",
            description: "Enjoy great value with Ahsan Store's competitive prices on high-quality gadgets, making top-of-the-line technology accessible to all without compromising on quality or performance.",
           },
        ],
        right: [
            {
             id: 4,
            title: "Expert Guidance",
            description: "Our knowledgeable staff provides expert guidance, helping you choose the right gadget to meet your needs and preferences, ensuring you make informed decisions every step of the way.",
           },
           {
             id: 5,
            title: "Convenient Shopping",
            description: "With Ahsan Store, shopping for gadgets is easy and convenient. Our user-friendly website and secure payment options ensure a seamless experience from browsing to checkout, all from the comfort of your home.",
           },
           {
             id: 6,
            title: "Excellent Service",
            description: "Ahsan Store is committed to providing excellent service to our customers. From prompt assistance with inquiries to efficient handling of orders and deliveries, we prioritize your satisfaction every step of the way.",
           },
        ]
    }
})

export const WhyChooseUsActions = whyChooseSlice.actions;
export default whyChooseSlice.reducer;