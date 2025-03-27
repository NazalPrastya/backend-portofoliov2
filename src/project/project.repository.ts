const prisma = require("../db");

const findProject = async () => {
  const data = await prisma.Project.findMany();
  return data;
};

module.exports = { findProject };
