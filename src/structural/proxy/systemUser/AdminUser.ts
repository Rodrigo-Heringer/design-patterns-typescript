import { SystemUserAddressProtocol } from "./SystemUserProtocol";

export class AdminUser implements SystemUserAddressProtocol {
    
    public street: string;
    public number: number;

    constructor(public firstName: string, public userName: string) {}

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise(resolve => {
            return setTimeout(()=>{
                return resolve([
                    {street: 'Av Brasil', number: 50},
                    {street: 'A', number: 40}
                ])
            }, 2000)
        })
    }
}