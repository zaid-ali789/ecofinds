const express = require("express");
const cors = require("cors");
const { port } = require("./config");

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Global error handler
app.use(require("./middleware/errorMiddleware"));

app.listen(port, () => {
  console.log(`EcoFinds server listening on port ${port}`);
});
