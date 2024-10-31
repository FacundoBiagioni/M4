import { IProduct } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(categoryId?: number): Promise<IProduct[]> {
    try {
        const url = categoryId ? `${APIURL}/products?categoryId=${categoryId}` : `${APIURL}/products`;
        const res = await fetch(url, {
            next: { revalidate: 0 },
            cache: "no-store"
        });
        const products = await res.json();
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getProductsById(id: string): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProductsDB()
        const productsFiltered = products.find((product) => product.id.toString() === id)
        if(!productsFiltered) throw new Error("Product not found")
        return productsFiltered;
    } catch (error: any) {
        throw new Error(error);
    }
}