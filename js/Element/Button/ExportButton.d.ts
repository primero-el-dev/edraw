import Canvas from "../Canvas.js";
import ActionButton from "./ActionButton.js";
export default class ExportButton extends ActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    constructor(buttonElement: HTMLElement, target: Canvas);
    protected onClick(): any;
}
