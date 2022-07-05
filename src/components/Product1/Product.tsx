import React from "react";

function Product1(props:any){
  return(
    <div key={props.item.id} className="col-lg-6 border">
        <p>id:{props.item.id}</p>
        <p>name:{props.item.name}</p>
        <p>price:{props.item.price}$</p>
    </div>
  )
}

export default Product1