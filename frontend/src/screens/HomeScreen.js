import React, { useState, useEffect } from "react";
// import products from "../products";
import axios from "axios";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");

      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;