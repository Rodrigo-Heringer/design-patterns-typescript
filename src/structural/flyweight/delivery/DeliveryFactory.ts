import { DeliveryFlyweight } from './DeliveryFlyweight';
import { DeliveryLocation as DeliveryLocation } from './DeliveryLocations';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './DeliveryTypes';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/gm, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState);

    return key in this.locations
      ? this.locations[key]
      : (this.locations[key] = new DeliveryLocation(intrinsicState));
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
