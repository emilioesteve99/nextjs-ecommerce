import { Product } from "../entities/product/Product";
import { ApiHttpService } from "./ApiHttp.service";

export class ProductHttpService {
	public static async getCategoryProducts(categoryId: number): Promise<Product[]> {
		const { products } = await ApiHttpService.get({
			path: 'category/getCategoryProducts',
			queryParams: {
				categoryId,
			}
		});
		return products.map(product => Object.assign(new Product(), product));
	}

	public static async getProduct(productId: number, combinationId: number) {
		const { product } = await ApiHttpService.get({
			path: 'product/getProduct',
			queryParams: {
				productId,
				combinationId,
			}
		});
		return Object.assign(new Product(), product);
	}
}