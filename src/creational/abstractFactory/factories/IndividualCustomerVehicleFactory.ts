import { ICustomer } from '../customer/ICustomer';
import { IndividualCustomer } from '../customer/IndividualCustomer';
import { IVehicle } from '../vehicle/IVehicle';
import { IndividualCar } from '../vehicle/IndividualCar';

export class IndividualCreateCustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
