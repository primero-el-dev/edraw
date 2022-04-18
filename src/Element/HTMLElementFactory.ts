import ConfigItem from "../Config/ConfigItem.js";
import HTMLAttributeArray from "./HTMLAttributeArray.js";

export default class HTMLElementFactory
{
    public static createInput(type: string, attributes: HTMLAttributeArray = {}): HTMLInputElement
    {
        let input = document.createElement('input')
        input.type = type
        for (let attribute in attributes) {
            input[attribute] = attributes[attribute]
        }

        return input
    }

    public static createActionButton(text: string, title: string): HTMLButtonElement
    {
        let button = document.createElement('button')
        button.title = title
        button.innerText = text
        button.classList.add('button--action')

        return button
    }

    public static createConfigLabel(text: string): HTMLLabelElement
    {
        let label = document.createElement('label')
        label.classList.add('config-label')
        label.innerText = text

        return label
    }

    public static createConfigRow(configItem: ConfigItem): HTMLElement
    {
        let label = document.createElement('label')
        label.classList.add('config-row')

        let paragraph = document.createElement('span')
        paragraph.classList.add('config-label')
        paragraph.innerText = configItem.getLabel()

        label.append(paragraph)
        label.append(configItem.getElementWithValue())

        return label
    }
}