import ActionButton from "./ActionButton.js";
import HTMLElementFactory from "../HTMLElementFactory.js";
import HTMLAttributeDictionary from "../HTMLAttributeDistionary.js";

export default class AboutButton extends ActionButton
{
    protected modal: HTMLElement

    public constructor(protected buttonElement: HTMLElement)
    {
        super(buttonElement)
    }

    protected onClick(): any
    {
        if (!this.modal) {
            this.initModal()
        }

        return () => {
            this.modal.classList.toggle(HTMLAttributeDictionary.DISPLAY_NONE_CLASS)
        }
    }

    protected initModal(): void
    {
        this.modal = HTMLElementFactory.createAboutModal()

        document.body.append(this.modal)
    }
}