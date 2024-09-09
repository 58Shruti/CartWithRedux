import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart :[] 
}

 export const cartslice = createSlice({
    name : "cart",
    initialState ,
    reducers : {
        addToCart : (state, action) =>{  
        
            let addItem = state.cart.findIndex((item) => item.id === action.payload.id )

        // if item already present 
            if(addItem >= 0){
                state.cart[addItem].quantity += 1;
                localStorage.setItem("cartData" ,JSON.stringify(state.cart))
            }
            // if item not present
            else{
                const temp = {...action.payload ,quantity :1}
                state.cart = [...state.cart , temp]
                localStorage.setItem("cartData" ,JSON.stringify(state.cart))
                 }   
        },

          //delete item from cart
        deleteItem : (state, action) => {     
            let data = state.cart.filter((item) => item.id !== action.payload);
            state.cart = data; 
            localStorage.setItem("cartData" ,JSON.stringify(state.cart)) 
        },

         // Remove Single Item Decrement
         removeSingleProduct : (state , action) =>{
            let removeSingleProduct =state.cart.findIndex((item) => item.id === action.payload.id)
           if(state.cart[removeSingleProduct].quantity >= 1){
           state.cart[removeSingleProduct].quantity -= 1;
           localStorage.setItem("cartData" ,JSON.stringify(state.cart))
         }
         }
    }
})

export const {deleteItem ,addToCart ,removeSingleProduct} = cartslice.actions;
export default cartslice.reducer;



   