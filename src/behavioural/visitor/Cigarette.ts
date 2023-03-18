import { TaxVisitorProtocol } from './TaxVisitorProtocol';
import { VisitableProduct } from './VisitableProduct';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
