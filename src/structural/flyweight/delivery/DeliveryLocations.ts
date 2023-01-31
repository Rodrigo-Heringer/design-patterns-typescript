import { DeliveryFlyweight } from './DeliveryFlyweight';
import { DeliveryLocationData } from './DeliveryTypes';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    const destinatario = `Entrega para ${name}`;
    console.log('\n' + destinatario);
    console.log(
      `Em ${this.intrinsicState.street}, ${this.intrinsicState.city}`,
    );
    console.log(`Número: ${number}\n`);
    console.log(`-`.repeat(destinatario.length));
  }
}
