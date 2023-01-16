import { EnterpriseCreateCustomerVehicleFactory } from '../factories/EnterpriseCustomerVehicleFactory';
import { IndividualCreateCustomerVehicleFactory } from '../factories/IndividualCustomerVehicleFactory';

const enterpriseFactory = new EnterpriseCreateCustomerVehicleFactory();
const individualFactory = new IndividualCreateCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
