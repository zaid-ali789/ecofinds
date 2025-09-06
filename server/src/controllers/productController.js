const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProduct = async (req, res) => {
  const { title, description, price, category, imageUrl } = req.body;
  const product = await prisma.product.create({
    data: {
      title,
      description,
      price: parseFloat(price),
      category,
      imageUrl: imageUrl || "https://via.placeholder.com/150",
      sellerId: req.user.id,
    },
  });
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const { category, search } = req.query;
  const where = {};
  if (category) where.category = category;
  if (search) where.title = { contains: search, mode: "insensitive" };
  const products = await prisma.product.findMany({ where });
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  // Only allow owner
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product || product.sellerId !== req.user.id)
    return res.status(403).json({ error: "Forbidden" });
  const updated = await prisma.product.update({
    where: { id },
    data: req.body,
  });
  res.json(updated);
};

exports.deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product || product.sellerId !== req.user.id)
    return res.status(403).json({ error: "Forbidden" });
  await prisma.product.delete({ where: { id } });
  res.json({ success: true });
};
