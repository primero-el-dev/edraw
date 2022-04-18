import ConfigItem from "../Config/ConfigItem.js";
import ConfigContainer from "../Config/ConfigContainer.js";
import HTMLElementFactory from "./HTMLElementFactory.js";

export default class ConfigPanel
{
    public constructor(private element: HTMLElement) {}

    public renderConfigPanel(configContainer: ConfigContainer): void
    {
        this.element.innerHTML = ''
        for (let config of configContainer.getItems()) {
            this.createConfigRow(config)
        }
    }

    private createConfigRow(configItem: ConfigItem): void
    {
        this.element.append(HTMLElementFactory.createConfigRow(configItem))
    }
}