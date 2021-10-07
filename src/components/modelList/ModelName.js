import React from "react";
import './ModelList.css'
function ModelName(props) {
  const { name, age, city,image,drama, charge} = props.model;
 
  return (
    
    <div >
     <div className="col ">
            <div className="card h-100" className="card-design">
              <img src={image} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <h5 className="card-title">City: {city}</h5>
                <h5 className="card-title">Age: {age}</h5>
                <h5 className="card-title">Drama: {drama}</h5>
                <h5 className="card-title">Charge: {charge} tk</h5>
                <button className="btn btn-primary" onClick={()=>props.cartHandler(props.model)} > <span><i className="fas fa-cart-plus"></i></span> Add To Hire</button>
                <p style={{"marginTop":'20px'}}><span><i style={{"fontSize":'1.5rem',"marginRight":'50px'}} className="fab fa-instagram"></i></span> <span><i style={{"fontSize":'1.5rem'}} className="fab fa-youtube"></i></span> </p>
              </div>
            </div>
          </div>
      </div>
    
  );
}

export default ModelName;
