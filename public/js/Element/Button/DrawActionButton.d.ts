import Canvas from '../Canvas.js';
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
export default abstract class DrawActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    abstract addListeners(): void;
    setListeners(): void;
    getButtonElement(): HTMLElement;
}
