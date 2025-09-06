import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { Box, Typography } from "@mui/material";

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (email, username, password) => {
    await register(email, username, password);
    navigate("/dashboard");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Register</Typography>
      <AuthForm onSubmit={handleRegister} isRegister />
    </Box>
  );
}

export default RegisterPage;
