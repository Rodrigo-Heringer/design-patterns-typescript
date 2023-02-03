import { ECommerceShoppingCart } from '../EcommerceShoppingCart';
import { DiscountStrategy } from './DiscountStrategy';

export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    switch (Math.trunc(total / 200)) {
      case 0:
        if (total >= 100) this.discount = 10;
        break;
      case 1:
        this.discount = 20;
        break;
      default:
        if (total >= 300) this.discount = 30;
        break;
    }
    return total * (1 - this.discount / 100);
  }
}
