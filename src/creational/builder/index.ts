import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log('-'.repeat(50));
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
console.log('-'.repeat(50));

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log('-'.repeat(50));
console.log(veganMeal);
console.log(veganMeal.getPrice());
console.log('-'.repeat(50));
