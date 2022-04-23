import Canvas from "../../Canvas.js";
import ConfigContainer from "../../../Config/ConfigContainer.js";
import InterpreterInterface from "../../../Dsl/Interpreter/InterpreterInterface.js";
export default class ColorFunctionWithContourOptionPartial {
    private target;
    private configContainer;
    private interpreter;
    constructor(target: Canvas, configContainer: ConfigContainer, interpreter: InterpreterInterface);
    initColor(time: number): void;
    protected initColorWhenColorFunctionFunctionDisabled(): void;
    protected initCustomColorFromConfigFunctions(time: number): void;
    protected getCustomColor(time: number): string;
    protected getFunctionFromTimeValueFor(configName: string, time: number): number;
}
