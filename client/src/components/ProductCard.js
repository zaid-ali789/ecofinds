import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductCard = ({ product, onAddToCart, showAddToCart = true }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image={product.imageUrl || "/assets/placeholder.png"}
      alt={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">{product.title}</Typography>
      <Typography variant="body2">{product.description}</Typography>
      <Typography variant="subtitle1">${product.price}</Typography>
      {showAddToCart && (
        <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      )}
    </CardContent>
  </Card>
);

export default ProductCard;
