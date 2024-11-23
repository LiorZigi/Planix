import { products } from "../../mocks/products/products";
import { Products } from "../../mocks/products/products";


export function useFetchProducts(): Promise<Products> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  });
}