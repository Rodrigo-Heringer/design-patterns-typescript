import { SmartHouseCommand } from './SmartHouseCommand';
import { SmartHouseLight } from './SmartHouseLight';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly Light: SmartHouseLight) {}
  execute(): void {
    const intensity = this.Light.increaseIntensity();
    console.log(`Intensidade da luz de ${this.Light.name} é ${intensity}`);
  }
  undo(): void {
    const intensity = this.Light.decreaseIntensity();
    console.log(`Intensidade da luz de ${this.Light.name} é ${intensity}`);
  }
}
