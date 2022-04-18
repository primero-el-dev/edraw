export default abstract class ConfigInputAdapterTemplate {
    protected input: HTMLInputElement;
    protected storageKey: string;
    protected value: string;
    constructor(input: HTMLInputElement, storageKey: string, defaultValue: string);
    protected abstract setValueFromElement(): void;
    setValue(value: string): ConfigInputAdapterTemplate;
    getValue(): string;
    protected initValue(defaultValue: string): void;
    protected initLocalStorageIfKeyMissing(defaultValue: string): void;
}
