import { ICustomer } from '../customer/ICustomer';
import { IVehicle } from '../vehicle/IVehicle';

export interface CreaterCustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicle;
}
