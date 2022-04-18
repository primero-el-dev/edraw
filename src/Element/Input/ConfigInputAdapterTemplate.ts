import GetValueInterface from "../GetValueInterface.js";
import GetHtmlElementInterface from "../GetHtmlElementInterface.js";

export default abstract class ConfigInputAdapterTemplate implements GetHtmlElementInterface, GetValueInterface
{
    protected value: string

    public constructor(
        protected input: HTMLInputElement,
        protected storageKey: string,
        defaultValue: string
    ) {
        this.initValue(defaultValue)
        this.input.addEventListener('change', e => {
            this.setValueFromElement()
            localStorage.setItem(this.storageKey, this.value)
        })
        localStorage.setItem(this.storageKey, this.value)
    }

    protected abstract setValueFromElement(): void

    protected abstract initInputValue(value: string): void

    public getValue(): string
    {
        return this.value
    }

    public getElement(): HTMLInputElement
    {
        return this.input
    }

    protected initValue(defaultValue: string): void
    {
        this.initLocalStorageIfKeyMissing(defaultValue)
        this.value = localStorage.getItem(this.storageKey)
        this.initInputValue(this.value)
    }

    protected initLocalStorageIfKeyMissing(defaultValue: string): void
    {
        if (typeof localStorage.getItem(this.storageKey) !== 'string') {
            localStorage.setItem(this.storageKey, defaultValue)
        }
    }
}