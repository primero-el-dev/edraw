import GetValueInterface from "../GetValueInterface.js";
import GetHtmlElementInterface from "../GetHtmlElementInterface.js";
export default abstract class ConfigInputAdapterTemplate implements GetHtmlElementInterface, GetValueInterface {
    protected input: HTMLInputElement;
    protected storageKey: string;
    protected value: string;
    constructor(input: HTMLInputElement, storageKey: string, defaultValue: string);
    protected abstract setValueFromElement(): void;
    protected abstract initInputValue(value: string): void;
    getValue(): string;
    getElement(): HTMLInputElement;
    protected initValue(defaultValue: string): void;
    protected initLocalStorageIfKeyMissing(defaultValue: string): void;
}
