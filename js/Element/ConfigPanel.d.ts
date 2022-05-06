import ConfigContainer from "../Config/ConfigContainer.js";
export default class ConfigPanel {
    private element;
    constructor(element: HTMLElement);
    renderConfigPanel(title: string, configContainer: ConfigContainer): void;
    private getSectionTitle;
    private createConfigRow;
}
