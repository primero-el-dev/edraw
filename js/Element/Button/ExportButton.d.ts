import DrawActionButton from "./DrawActionButton.js";
import Canvas from "../Canvas";
import ConfigContainer from "../../Config/ConfigContainer";
import ConfigPanel from "../ConfigPanel";
export default class ExportButton extends DrawActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    addListeners(): void;
}
