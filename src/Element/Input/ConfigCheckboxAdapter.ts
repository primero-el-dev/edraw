import ConfigInputAdapterTemplate from "./ConfigInputAdapterTemplate.js";

export default class ConfigCheckboxAdapter extends ConfigInputAdapterTemplate
{
    protected setValueFromElement(): void
    {
        this.value = this.input.checked ? 'true' : 'false'
    }

    protected initInputValue(value: string): void
    {
        this.input.checked = value === 'true'
    }
}