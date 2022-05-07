import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import DrawStrategy from "./DrawStrategy.js";
import ColorFunctionWithContourOptionPartial from "../Partial/ColorFunctionWithContourPartial.js";
export default class AdvancedPolygonBrushStrategy implements DrawStrategy {
    protected interpreter: InterpreterInterface;
    private readonly FPS;
    private lastX;
    private lastY;
    private pressed;
    private canvas;
    private configContainer;
    protected colorFunctionWithContourPartial: ColorFunctionWithContourOptionPartial;
    protected time: number;
    constructor(interpreter?: InterpreterInterface);
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
    private drawSingleTick;
    protected initLineWidth(): void;
    protected getFunctionFromTimeValueFor(configName: string, time: number): number;
}
