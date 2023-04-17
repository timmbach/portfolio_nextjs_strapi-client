import axios from "axios";
const qs = require("qs");

const api = axios.create({
  baseURL:
    process.env.STRAPI_PUBLIC_API_URL || "https://tim-portfolio.onrender.com",
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});

export const fetchExperiences = async () => {
  const params = qs.stringify({
    populate: "*",
  });
  return api.get(`/api/experiences?${params}`);
};
export const fetchSkills = async () => {
  const params = qs.stringify({
    populate: "*",
  });
  return api.get(`/api/skills?${params}`);
};
export const fetchProjects = async () => {
  const params = qs.stringify({
    populate: "*",
  });
  return api.get(`/api/projects?${params}`);
};

export const fetchContacts = async () => {
  return api.get("/api/contacts");
};
