import Canvas from "../Canvas.js";
import ActionButton from "./ActionButton.js";
export default class ImportButton extends ActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected importInput: HTMLInputElement;
    constructor(buttonElement: HTMLElement, target: Canvas);
    protected onClick(): any;
    protected initImportInput(): void;
    protected assignImportInputClickEvent(): void;
}
