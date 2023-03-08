import { CustomerBudget } from './CustomerBudget';

export abstract class BasebudgetHandler {
  protected nextHandler: BasebudgetHandler | null = null;

  setNextHandler(handler: BasebudgetHandler): BasebudgetHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}
