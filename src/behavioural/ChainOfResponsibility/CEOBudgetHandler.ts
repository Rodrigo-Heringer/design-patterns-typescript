import { BasebudgetHandler } from './BaseBudgetHandler';
import { CustomerBudget } from './CustomerBudget';

export class CEOBudgetHandler extends BasebudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento');
    budget.approved = true;
    return budget;
  }
}
