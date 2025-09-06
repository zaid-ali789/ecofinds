import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, MenuItem, Typography } from "@mui/material";
import api from "../services/api";
import axios from "axios";

const categories = ["ELECTRONICS", "FURNITURE", "CLOTHING", "BOOKS", "OTHER"];

function AddProductPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", price: "", category: "ELECTRONICS" });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = e => setImageFile(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let imageUrl = "https://via.placeholder.com/150";
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        const uploadRes = await axios.post('http://localhost:5000/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        imageUrl = `http://localhost:5000${uploadRes.data.imageUrl}`;
      }
      await api.createProduct({ ...form, price: parseFloat(form.price), imageUrl });
      alert("Product added!");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to add product: " + err.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={2}>Add New Product with Image Upload</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField name="title" label="Title" required fullWidth margin="normal" value={form.title} onChange={handleChange} />
        <TextField name="description" label="Description" required fullWidth multiline rows={4} margin="normal" value={form.description} onChange={handleChange} />
        <TextField name="price" label="Price" type="number" required fullWidth margin="normal" value={form.price} onChange={handleChange} />
        <TextField name="category" label="Category" select fullWidth margin="normal" value={form.category} onChange={handleChange}>
          {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
        </TextField>
        <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginTop: 16, marginBottom: 16 }} />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Add Product</Button>
      </Box>
    </Box>
  );
}

export default AddProductPage;
