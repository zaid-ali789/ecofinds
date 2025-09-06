import React from "react";
import useAuth from "../hooks/useAuth";
import { Box, Typography } from "@mui/material";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">My Dashboard</Typography>
      {user ? (
        <Box sx={{ mt: 2 }}>
          <Typography>Email: {user.email}</Typography>
          <Typography>Username: {user.username}</Typography>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
}

export default DashboardPage;
