import Canvas from "../../Element/Canvas.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import DefaultValueFunctionInterpreter from "../../Dsl/Interpreter/DefaultValueFunctionInterpreter.js";
import DrawWithAnimationStrategy from "./DrawWithAnimationStrategy.js";
import ColorFunctionPartial from "../Partial/ColorFunctionPartial.js";

export default class AdvancedPencilStrategy extends DrawWithAnimationStrategy
{
    private canvas: Canvas
    private configContainer: ConfigContainer
    private colorFunctionPartial: ColorFunctionPartial

    public constructor(protected interpreter: InterpreterInterface = new DefaultValueFunctionInterpreter())
    {
        super()
    }

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
        this.colorFunctionPartial = new ColorFunctionPartial(canvas, configContainer, this.interpreter)
        super.setAction(canvas, configContainer)
    }

    protected initContextProperties(): void
    {
        this.initLineWidth()
        this.colorFunctionPartial.initColor(this.time)
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        this.initLineWidth()
        this.colorFunctionPartial.initColor(this.time)
        this.canvas.ctx.lineCap = 'round'
        this.canvas.ctx.beginPath()
        this.canvas.ctx.moveTo(this.lastMouseDownX, this.lastMouseDownY)
        this.canvas.ctx.lineTo(this.currentPositionX, this.currentPositionY)
        this.canvas.ctx.stroke()
        this.lastMouseDownX = this.currentPositionX
        this.lastMouseDownY = this.currentPositionY
    }

    protected drawTemporaryTo(xEnd: number, yEnd: number): void
    {
        this.initLineWidth()
        this.colorFunctionPartial.initColor(this.time)
        this.canvas.ctx.beginPath()
        this.canvas.ctx.ellipse(
            this.currentPositionX,
            this.currentPositionY,
            this.canvas.ctx.lineWidth / 2,
            this.canvas.ctx.lineWidth / 2,
            0,
            0,
            2 * Math.PI
        )
        this.canvas.ctx.closePath()
        this.canvas.ctx.fill()
    }

    protected initLineWidth(): void
    {
        let lineWidthFunction = this.configContainer.getValueByProperty(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY)
        this.canvas.ctx.lineWidth = this.interpreter.interpret(lineWidthFunction, {$s: this.time})
    }
}