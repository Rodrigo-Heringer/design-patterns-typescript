import { TaxVisitorProtocol } from './TaxVisitorProtocol';
import { VisitableProduct } from './VisitableProduct';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
