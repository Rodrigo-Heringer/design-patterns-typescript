import { SmartHouseCommand } from "./SmartHouseCommand";
import { SmartHouseLight } from "./SmartHouseLight";

export class LightPowerCommand implements SmartHouseCommand {
    constructor(private readonly Light: SmartHouseLight){}
    execute(): void {
        this.Light.on();
    }
    undo(): void {
        this.Light.off();
    }
}