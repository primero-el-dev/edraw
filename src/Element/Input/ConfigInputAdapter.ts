import ConfigInputAdapterTemplate from "./ConfigInputAdapterTemplate.js";

export default class ConfigInputAdapter extends ConfigInputAdapterTemplate
{
    protected setValueFromElement(): void
    {
        this.value = this.input.value
    }

    protected initInputValue(value: string): void
    {
        this.input.value = value
    }
}