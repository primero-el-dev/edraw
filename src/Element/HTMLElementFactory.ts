import ConfigItem from "../Config/ConfigItem.js";
import HTMLAttributeArray from "./HTMLAttributeArray.js";
import HTMLAttributeDictionary from "./HTMLAttributeDistionary.js";

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

    public static createModal(content: string): HTMLElement
    {
        let modal = document.createElement('div')
        modal.classList.add('modal')
        modal.classList.add(HTMLAttributeDictionary.DISPLAY_NONE_CLASS)

        modal.innerHTML += '<h3 class="modal__header">About <span class="modal__close">&times;</span></h3>'
            + '<div class="modal__content">'
            + content
            + '</div>'

        modal.querySelector('.modal__close').onclick = () => {
            modal.classList.add(HTMLAttributeDictionary.DISPLAY_NONE_CLASS)
        }

        return modal
    }

    public static createAboutModal(): HTMLElement
    {
        return this.createModal(
            '<p class="modal__paragraph">This app was made by Przemek Krogulski from Poland.</p>'
            + '<a target="_blank" href="https://github.com/primero-el-dev">Github</a>'
            + '<p class="modal__paragraph">'
            + 'This app was made to give joy. It\'s still the first version, so there will be changes and fixes in the future.'
            + '</p>'
            + '<p class="modal__paragraph">Issues that I\'ll probably try to repair.</p>'
            + '<a target="_blank" href="https://github.com/primero-el-dev/edraw/issues">Issues</a>'
            + '<p class="modal__paragraph">PS: I\'m not a professional frontend developer but I\'m interested in it.</p>'
            + '</div>'
        )
    }
}