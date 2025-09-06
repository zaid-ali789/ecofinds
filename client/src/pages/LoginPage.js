import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { Box, Typography } from "@mui/material";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    await login(email, password);
    navigate("/dashboard");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Login</Typography>
      <AuthForm onSubmit={handleLogin} />
    </Box>
  );
}

export default LoginPage;
