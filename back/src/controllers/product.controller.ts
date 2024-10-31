import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService } from "../services/products.service";
import { ProductRepository } from "../repositories/product.repository";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProducts1 = async (req: Request, res: Response) => {
  try {
      const categoryId = req.query.categoryId ? parseInt(req.query.categoryId as string, 10) : undefined;
      const products = categoryId
          ? await ProductRepository.find({ where: { categoryId } })
          : await ProductRepository.find();
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: "Error fetching products" });
  }
};
