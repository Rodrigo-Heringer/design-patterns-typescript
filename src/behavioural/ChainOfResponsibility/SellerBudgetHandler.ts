import { BasebudgetHandler } from './BaseBudgetHandler';
import { CustomerBudget } from './CustomerBudget';

export class SellerBudgetHandler extends BasebudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O vendedor tratou o orçamento');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
