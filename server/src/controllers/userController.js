const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getMe = async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  res.json(user);
};

exports.updateMe = async (req, res) => {
  const { username } = req.body;
  const user = await prisma.user.update({
    where: { id: req.user.id },
    data: { username },
  });
  res.json(user);
};
