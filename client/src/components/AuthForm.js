import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function AuthForm({ onSubmit, isRegister = false }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isRegister
      ? onSubmit(email, username, password)
      : onSubmit(email, password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      {isRegister && (
        <TextField
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
      )}
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        {isRegister ? "Register" : "Login"}
      </Button>
    </Box>
  );
}

export default AuthForm;
