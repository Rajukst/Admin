import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ShowProducts from "./ShowProducts";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={4} lg={4} className="g-4">
        {product.slice(0, 40).map((getProduct) => (
          <ShowProducts
            key={getProduct.id}
            allProduct={getProduct}
          ></ShowProducts>
        ))}
      </Row>
    </div>
  );
};

export default Products;
