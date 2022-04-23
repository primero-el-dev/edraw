import DrawWithTemporaryImageAndAnimationActionButton from "./DrawWithTemporaryImageAndAnimationActionButton.js";
import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import ColorFunctionPartial from "./Partial/ColorFunctionPartial.js";
export default class AdvancedPencilButton extends DrawWithTemporaryImageAndAnimationActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    protected interpreter: InterpreterInterface;
    protected colorFunctionPartial: ColorFunctionPartial;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel, interpreter?: InterpreterInterface);
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
    protected drawTemporaryTo(xEnd: number, yEnd: number): void;
    protected initLineWidth(): void;
}
