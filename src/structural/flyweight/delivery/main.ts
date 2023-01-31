import { DeliveryFactory } from './DeliveryFactory';
import { deliveryContext } from './deliveryContext';

const factory = new DeliveryFactory();
deliveryContext(
  factory,
  'Rodrigo',
  '35B',
  'Av Atlântica',
  'Rio de Janeiro - RJ',
);
deliveryContext(
  factory,
  'Renata',
  '35B',
  'Av Atlântica',
  'Rio de Janeiro - RJ',
);
deliveryContext(factory, 'Pedro', '10C', 'Rua Augusta', 'São Paulo - SP');
deliveryContext(
  factory,
  'Mariano',
  'Lote 1 Quadra B',
  'Córrego Esperança',
  'Lajinha - MG',
);

console.log(factory.getLocations());
