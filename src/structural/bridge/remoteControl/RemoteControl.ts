import { DeviceImplementation } from '../device/DeviceImplementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    const status = this.device.getPower() ? 'On' : 'Off';
    console.log(`${this.device.getName()} power status: ${status}`);
  }
}
