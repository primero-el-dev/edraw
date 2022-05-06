import ConfigItem from "../Config/ConfigItem.js";
import ConfigContainer from "../Config/ConfigContainer.js";
import HTMLElementFactory from "./HTMLElementFactory.js";

export default class ConfigPanel
{
    public constructor(private element: HTMLElement) {}

    public renderConfigPanel(title: string, configContainer: ConfigContainer): void
    {
        this.element.innerHTML = this.getSectionTitle(title)
        for (let config of configContainer.getItems()) {
            this.createConfigRow(config)
        }
    }

    private getSectionTitle(title: string): string
    {
        return `<h3>${title}</h3>`
    }

    private createConfigRow(configItem: ConfigItem): void
    {
        this.element.append(HTMLElementFactory.createConfigRow(configItem))
    }
}