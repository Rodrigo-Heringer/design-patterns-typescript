import { EnterpriseCustomer } from '../customer/EnterpriseCustomer';
import { ICustomer } from '../customer/ICustomer';
import { EnterpriseCar } from '../vehicle/EnterpriseCar';
import { IVehicle } from '../vehicle/IVehicle';

export class EnterpriseCreateCustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
