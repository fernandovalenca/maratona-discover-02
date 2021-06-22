import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  return response.render("");
});

router.get("/job", (request, response) => {
  return response.render("job");
});

router.post("/job", (request, response) => {
  return response.render("job");
});

router.put("/job/:id", (request, response) => {
  return response.render("job");
});

router.delete("/job/:id", (request, response) => {
  return response.render("job-edit");
});

router.get("/profile", (request, response) => {
  return response.render("profile");
});

router.post("/profile/:id", (request, response) => {
  return response.render("profile");
});

router.put("/profile/:id/:id", (request, response) => {
  return response.render("profile");
});

router.delete("/profile", (request, response) => {
  return response.render("profile");
});

export default router;
