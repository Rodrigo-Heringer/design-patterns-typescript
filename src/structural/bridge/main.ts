import { Radio } from './device/Radio';
import { Tv } from './device/Tv';
import { RemoteControl } from './remoteControl/RemoteControl';
import { RemoteControlWithVolume } from './remoteControl/RemoteControlWithVolume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
