import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Box, Typography, List, ListItem } from "@mui/material";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.getOrders().then(res => setOrders(res.data));
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Order History</Typography>
      <List>
        {orders.map(order => (
          <ListItem key={order.id}>
            <Typography>
              Order #{order.id} – {new Date(order.createdAt).toLocaleString()} – Products: {order.products.length}
            </Typography>
          </ListItem>
        ))}
      </List>
      {orders.length === 0 && <Typography>No orders found.</Typography>}
    </Box>
  );
}

export default OrdersPage;
