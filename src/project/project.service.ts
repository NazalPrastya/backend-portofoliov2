const prisma = require("../db");

const getProjects = async () => {
  const data = await prisma.project.findMany();
  return data;
};

export { getProjects };
