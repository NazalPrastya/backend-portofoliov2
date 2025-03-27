import { findProject } from "./project.repository";

const getProjects = async () => {
  const data = await findProject();
  return data;
};

export { getProjects };
