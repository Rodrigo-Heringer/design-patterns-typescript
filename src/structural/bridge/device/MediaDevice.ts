import { DeviceImplementation } from './DeviceImplementation';

export abstract class MediaDevice implements DeviceImplementation {
  private volume = 10;
  private power = false;
  protected abstract name: string;

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
