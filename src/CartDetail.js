import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { ProductData } from "./ProductData";
import { removeSingleProduct, deleteItem, addToCart } from "./Cartslice";

function CartDetail() {
  const [price, setprice] = useState("");

  const { cart } = useSelector((state) => state.allcart);

  const dispatch = useDispatch();

  const chatList = JSON.parse(localStorage.getItem("cartData")) || [];

  const deleteAll = (e) => {
    dispatch(deleteItem(e.id));
  };

  const send = (e) => {
    dispatch(addToCart(e));
  };

  const deleteOne = (e) => {
    dispatch(removeSingleProduct(e));
  };

  const grandTotal = () => {
    let totalPrice = 0;
    chatList.map((item) => (totalPrice += item.quantity * item.price));
    setprice(totalPrice.toFixed(2));
  };

  useEffect(() => {
    grandTotal();
  }, [chatList]);

  // console.log(typeof price)
  return (
    <div>
      <h2>Cart Detail</h2>
      <Link to="/">Home page</Link>

      <br />
      {chatList.length
        ? 
        chatList?.map((value) => {
            return (
              <div key={value.id}>
                <p >Product Category : {value.category}</p>
                <img
                  src={value.image}
                  style={{ height: "350px", width: "200px" }}
                />
                <p>Product Name : {value.name}</p>
                <p>Price : ₹{value.price}</p>
                <button onClick={() => send(value)}>+</button>
                {value.quantity}
                <button
                  onClick={
                    value.quantity <= 1
                      ? () => deleteAll(value)
                      : () => deleteOne(value)
                  }
                > - </button>
                <p>Total Price : ₹{value.quantity * value.price}</p>
                <button onClick={() => deleteAll(value)}>Delete</button>
                <br />
                <hr />
              </div>
            );
          })
    
        : "NO DATA TO SHOW "}
          
      <h3>{price ? `Grand Total : ${price}` : null}</h3>
    </div>
  );
}

export default CartDetail;
// api key 7f4871ed3bf06ef8eade0c2daac26c41

// secret 52603c8ae70c23aed5718ec3d6431406