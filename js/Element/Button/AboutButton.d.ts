import ActionButton from "./ActionButton.js";
export default class AboutButton extends ActionButton {
    protected buttonElement: HTMLElement;
    protected modal: HTMLElement;
    constructor(buttonElement: HTMLElement);
    protected onClick(): any;
    protected initModal(): void;
}
