import { ECommerceShoppingCart } from '../EcommerceShoppingCart';
import { DiscountStrategy } from './DiscountStrategy';

export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) this.discount = 5;

    return total * (1 - this.discount / 100);
  }
}
