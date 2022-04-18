import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageActionButton.js";
export default abstract class DrawWithTemporaryImageAndAnimationActionButton extends DrawWithTemporaryImageActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    protected readonly RESET_TIME_AFTER_MILLIS: number;
    protected time: number;
    protected currentPositionX: number;
    protected currentPositionY: number;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    protected abstract initContextProperties(): void;
    protected abstract drawTo(xEnd: number, yEnd: number): void;
    addListeners(): void;
    protected additionalOnMouseUp(): void;
    protected resolveAction(): void;
}
