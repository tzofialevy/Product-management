import { utimes } from "fs";
import React, { Component } from "react";
import { products } from "../data/dataProducts";
import Product1 from "../Product1/Product";



class ProductList extends Component {
    state = { arrProducts: products }
    render() {
        return (
            <div className="container">
                <div className="row">

                    {this.state.arrProducts.map((item:any)=>{
                      return (
                        <Product1 key={item.key} item={item}/>
                      );
                    })};                   
               

                 </div>
            </div>
        )
    }
}

export default ProductList;
