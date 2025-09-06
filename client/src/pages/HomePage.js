import React from "react";
import { Navigate } from "react-router-dom";

function HomePage() {
  // Redirect to products listing for MVP simplicity
  return <Navigate to="/products" />;
}

export default HomePage;
