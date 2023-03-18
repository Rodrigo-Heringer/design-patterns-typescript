import { AlcoholicDrink } from './AlcoholicDrink';
import { Cigarette } from './Cigarette';
import { Food } from './Food';

import { TaxVisitorProtocol } from './TaxVisitorProtocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() * (1 + 0.05);
  }
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() * (1 + 1.5);
  }
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() * (1 + 0.5);
  }
}
