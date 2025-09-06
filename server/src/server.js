const express = require("express");
const cors = require("cors");
const path = require("path");
const { port } = require("./config");

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images statically from the correct uploads folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Upload route for handling image uploads
app.use('/api/upload', require('./routes/uploadRoutes'));

// Global error handler
app.use(require("./middleware/errorMiddleware"));

app.listen(port, () => {
  console.log(`EcoFinds server listening on port ${port}`);
});
