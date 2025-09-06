import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Box, Typography } from "@mui/material";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Product Details</Typography>
      <ProductCard product={product} onAddToCart={addToCart} />
    </Box>
  );
}

export default ProductDetailPage;
