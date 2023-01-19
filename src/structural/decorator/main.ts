import { ProductCustomizationDecorator } from './product/ProductCustomization';
import { ProductStampDecorator } from './product/ProductStampDecorator';
import { Tshirt } from './product/Tshirt';

const tShirt = new Tshirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());

