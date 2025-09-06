const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
  const { productIds } = req.body;
  // Stub: create order with provided products
  const products = await prisma.product.findMany({
    where: { id: { in: productIds } }
  });
  const order = await prisma.order.create({
    data: {
      buyerId: req.user.id,
      products: { connect: products.map(p => ({ id: p.id })) },
    }
  });
  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await prisma.order.findMany({
    where: { buyerId: req.user.id },
    include: { products: true }
  });
  res.json(orders);
};
