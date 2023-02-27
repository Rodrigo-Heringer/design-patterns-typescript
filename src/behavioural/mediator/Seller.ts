import { Mediator } from './Mediator';
import { SellerProduct } from './SellerProduct';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProduct(): void {
    this.products.forEach((product) => {
      console.log(product.id, product.name, product.price);
    });
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const checkId = (product: SellerProduct): boolean => product.id === id;
    const productIndex = this.products.findIndex(checkId);

    if (productIndex === -1) return;

    const product = this.products.splice(productIndex, 1);

    return product[0];
  }
}
