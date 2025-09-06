import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Box, Typography, Button } from "@mui/material";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleOrder = async () => {
    // Simple: send product IDs
    await api.createOrder({ productIds: cart.map(item => item.id) });
    clearCart();
    alert("Order placed!");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">My Cart</Typography>
      {cart.length === 0
        ? <Typography>No items in cart.</Typography>
        : <>
            {cart.map(item => (
              <ProductCard key={item.id} product={item} onAddToCart={() => removeFromCart(item.id)} showAddToCart={false} />
            ))}
            <Button variant="contained" color="primary" onClick={handleOrder}>Place Order</Button>
            <Button variant="text" color="secondary" onClick={clearCart}>Clear Cart</Button>
          </>
      }
    </Box>
  );
}

export default CartPage;
