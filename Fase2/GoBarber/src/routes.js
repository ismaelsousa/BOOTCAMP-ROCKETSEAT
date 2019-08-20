import { Router } from "express";
const routes = new Router();

routes.get("/", (req, res) => {
  return res.send("show demais");
});

module.exports = routes;
