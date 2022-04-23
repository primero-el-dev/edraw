import DrawActionButton from "./DrawActionButton.js";
import Canvas from "../Canvas";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import ColorFunctionWithContourOptionPartial from "./Partial/ColorFunctionWithContourOptionPartial.js";
export default class AdvancedPolygonBrushButton extends DrawActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    protected interpreter: InterpreterInterface;
    private readonly FPS;
    private lastX;
    private lastY;
    private pressed;
    protected colorFunctionWithContourPartial: ColorFunctionWithContourOptionPartial;
    protected time: number;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel, interpreter?: InterpreterInterface);
    addListeners(): void;
    private drawSingleTick;
    protected initLineWidth(): void;
    protected getFunctionFromTimeValueFor(configName: string, time: number): number;
}
