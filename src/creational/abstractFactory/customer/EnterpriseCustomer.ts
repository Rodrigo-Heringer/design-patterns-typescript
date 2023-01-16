import { ICustomer } from './ICustomer';

export class EnterpriseCustomer implements ICustomer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)';
  }
}
