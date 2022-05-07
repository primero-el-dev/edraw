import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import DrawWithAnimationStrategy from "./DrawWithAnimationStrategy.js";
export default class AdvancedPencilStrategy extends DrawWithAnimationStrategy {
    protected interpreter: InterpreterInterface;
    private canvas;
    private configContainer;
    private colorFunctionPartial;
    constructor(interpreter?: InterpreterInterface);
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
    protected drawTemporaryTo(xEnd: number, yEnd: number): void;
    protected initLineWidth(): void;
}
