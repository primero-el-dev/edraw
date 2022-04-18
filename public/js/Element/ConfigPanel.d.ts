import ConfigContainer from "../Config/ConfigContainer.js";
export default class ConfigPanel {
    private element;
    constructor(element: HTMLElement);
    renderConfigPanel(configContainer: ConfigContainer): void;
    private createConfigRow;
}
