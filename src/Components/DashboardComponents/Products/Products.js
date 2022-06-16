import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowProducts from './ShowProducts';

const Products = () => {
    const [product, setProduct]= useState([])
    useEffect(()=>{
        fetch()
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
           <Row xs={1} md={2} className="g-4">
            {
                product.map(getProduct=><ShowProducts
                key={getProduct.id}
                allProduct={getProduct}
                ></ShowProducts> )
            }
        </Row>
        </div>
    );
};

export default Products;