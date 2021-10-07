import React, { useEffect, useState } from 'react'
import Cart from './cart/Cart';
import './ModelList.css'
import ModelName from './ModelName';
function ModelList() {
    const [Model, setModel] = useState([]);
    const [Hire, setHire] = useState([])
    const [Name, setName]=useState([])
    useEffect(()=>{
        fetch("model.json")
        .then(response=>response.json())
        .then(data=>setModel(data))
    },[])
    const cartHandler=(model)=>{
         const newHire=[...Hire,model];
         const newName=[...Name, model.name];
         setName(newName)
         setHire(newHire);
         
    }
    return (
        <div className="main">
            
            <div className="container m-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 ">
               
            {
                Model.map((model)=><ModelName 
                key={model.name} 
                model={model} 
                cartHandler={cartHandler}
                ></ModelName>)
            }
            
            </div>
            </div>
            <div className="hire">
               <Cart Hire={Hire} Name={Name}></Cart>
            </div>
        </div>
    )
}

export default ModelList
