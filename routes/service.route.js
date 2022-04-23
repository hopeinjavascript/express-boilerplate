import express from "express";
const router = express.Router();
import {
  getAllServices,
  createService,
  getSingleService,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";

router.route("/service_name").get(getAllServices).post(createService);

router
  .route("/service_name/:id")
  .get(getSingleService)
  .patch(auth, updateService)
  .put(auth, updateService)
  .delete(auth, deleteService);

export default router;
