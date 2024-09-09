import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Cartslice";
import { Link} from "react-router-dom";
import { ProductData } from "./ProductData";

function Homepage() {

  const [Data, setdata] = useState();
 
  const dispatch = useDispatch();

    useEffect(()=>{   
      setdata(ProductData)
    },[])

 const send = (e) =>{
  dispatch(addToCart(e))
}

  return (
    <>
    <Link to='/cart'>Cart</Link>
      <h2>Home Page</h2>
      {Data &&
        Data?.map((item) => {
          return (
            <>
              <p>Product Category : {item.category}</p>
              <img
                src={item.image}
                style={{ height: "350px", width: "200px" }}
              />
              <p>Product Name : {item.title}</p>
              <p>Price :  ₹{item.price}</p>
              <button onClick={() => send(item)}>
                Add cart +
              </button>
              <hr/>
            </>
          );
        })}
    </>
  );
}

export default Homepage;






