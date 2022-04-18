export default class ConfigInputAdapter {
    protected input: HTMLInputElement;
    protected storageKey: string;
    protected value: string;
    constructor(input: HTMLInputElement, storageKey: string, defaultValue: string);
    setValue(value: string): ConfigInputAdapter;
    getValue(): string;
    protected initValue(defaultValue: string): void;
    protected initLocalStorageIfKeyMissing(defaultValue: string): void;
    protected setValueFromElement(): void;
}
