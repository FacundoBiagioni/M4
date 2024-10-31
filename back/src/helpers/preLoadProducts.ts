import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

import { iphoneProducts } from "../data/iphoneProducts";
import { macProducts } from "../data/macProducts";
import { ipadProducts } from "../data/ipadProducts";
import { watchProducts } from "../data/watchProducts";
import { airpodsProducts } from "../data/airpodsProducts";

const productsToPreLoad = [...iphoneProducts, ...macProducts, ...ipadProducts, ...watchProducts, ...airpodsProducts];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
