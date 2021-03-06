import ConfigItem from "../Config/ConfigItem.js";
import HTMLAttributeArray from "./HTMLAttributeArray.js";
export default class HTMLElementFactory {
    static createInput(type: string, attributes?: HTMLAttributeArray): HTMLInputElement;
    static createActionButton(text: string, title: string): HTMLButtonElement;
    static createConfigRow(configItem: ConfigItem): HTMLElement;
    static createModal(content: string): HTMLElement;
    static createAboutModal(): HTMLElement;
}
