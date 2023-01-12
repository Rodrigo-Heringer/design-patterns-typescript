import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as MyDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 70 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === MyDatabaseClassicFromModuleA);
