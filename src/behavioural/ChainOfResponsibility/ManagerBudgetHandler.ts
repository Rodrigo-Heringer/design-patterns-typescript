import { BasebudgetHandler } from './BaseBudgetHandler';
import { CustomerBudget } from './CustomerBudget';

export class ManagerBudgetHandler extends BasebudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('O gerente tratou o orçamento');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
