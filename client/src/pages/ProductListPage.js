import React, { useEffect, useState, useContext } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { Box, Grid, Typography, TextField, Select, MenuItem } from "@mui/material";

const categories = ["ALL", "ELECTRONICS", "FURNITURE", "CLOTHING", "BOOKS", "OTHER"];

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.getProducts({ category: category !== "ALL" ? category : undefined, search }).then(res => setProducts(res.data));
  }, [category, search]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Browse Products</Typography>
      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
        <TextField label="Search" value={search} onChange={e => setSearch(e.target.value)} />
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {products.map(product => (
          <Grid item key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductListPage;
