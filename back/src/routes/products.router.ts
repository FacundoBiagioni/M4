import { Router } from "express";
import { getProducts, getProducts1 } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts1);

export default router;
