export default class ConfigInput {
    protected input: HTMLInputElement;
    protected storageKey: string;
    protected value: string;
    constructor(input: HTMLInputElement, storageKey: string);
    setValue(value: string): ConfigInput;
    getValue(): string;
}
