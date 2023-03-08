import { BasebudgetHandler } from './BaseBudgetHandler';
import { CustomerBudget } from './CustomerBudget';

export class DirectorBudgetHandler extends BasebudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('O diretor tratou o orçamento');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
