import ConfigInterface from './ConfigInterface.js';
declare class Config implements ConfigInterface {
    protected storageKey: string;
    data: object;
    constructor(storageKey: string);
    protected getInitAndDefaultConfig(): object;
    protected getDefaultConfig(): object;
}
export default Config;
