const prisma = require("../db");

interface NewUser {
  email: string;
  name: string;
  password: string;
}
const createUser = async (newUser: NewUser) => {
  const addedUser = await prisma.user.create({
    data: {
      email: newUser.email,
      name: newUser.name,
      password: newUser.password,
    },
  });
};

export { createUser };
