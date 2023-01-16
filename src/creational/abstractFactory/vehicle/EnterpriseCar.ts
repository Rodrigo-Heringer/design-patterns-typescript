import { ICustomer } from '../customer/ICustomer';
import { IVehicle } from './IVehicle';

export class EnterpriseCar implements IVehicle {
  constructor(public name: string, private readonly customer: ICustomer) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (ENTERPRISE)`,
    );
  }
}
