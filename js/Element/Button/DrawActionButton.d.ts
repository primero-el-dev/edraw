import Canvas from '../Canvas.js';
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import ActionButton from "./ActionButton.js";
export default abstract class DrawActionButton extends ActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    protected onClick(): any;
    protected abstract addListeners(): void;
    protected setListeners(): void;
    getButtonElement(): HTMLElement;
}
