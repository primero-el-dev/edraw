import Canvas from '../Canvas.js';
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import ActionButton from "./ActionButton.js";
import SetCanvasActionStrategy from "../../Draw/Strategy/SetCanvasActionStrategy.js";
export default class DrawActionButton extends ActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    protected drawStrategy: SetCanvasActionStrategy;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel, drawStrategy: SetCanvasActionStrategy);
    protected onClick(): any;
    getButtonElement(): HTMLElement;
}
