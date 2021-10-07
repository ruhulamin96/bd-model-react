import React, { useState } from "react";
import './cart.css'
function Cart(props) {
 const {Hire}=props;
 
 let total =0;
 for(let model of Hire){
   total+=parseInt(model.charge) ;
  }
  console.log(props.Name);
  return <div className="cart-design">
       <h4>Total Hire: {props.Hire.length}</h4>
       <h4>Charge: {total} tk</h4>
       <h4>Model You Added</h4>
       {
         props.Name.map((newNam)=> <h5>{newNam}</h5>)
       }
       
  </div>;
}

export default Cart;
