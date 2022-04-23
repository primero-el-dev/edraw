import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageAndAnimationActionButton from "./DrawWithTemporaryImageAndAnimationActionButton.js";
import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import DefaultValueFunctionInterpreter from "../../Dsl/Interpreter/DefaultValueFunctionInterpreter.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import ColorFunctionPartial from "./Partial/ColorFunctionPartial.js";

export default class AdvancedPencilButton extends DrawWithTemporaryImageAndAnimationActionButton
{
    protected colorFunctionPartial: ColorFunctionPartial

    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel,
        protected interpreter: InterpreterInterface = new DefaultValueFunctionInterpreter()
    ) {
        super(buttonElement, target, configContainer, configPanel)

        this.colorFunctionPartial = new ColorFunctionPartial(this.target, this.configContainer, this.interpreter)
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
        this.target.ctx.lineCap = 'round'
        this.target.ctx.beginPath()
        this.target.ctx.moveTo(this.lastMouseDownX, this.lastMouseDownY)
        this.target.ctx.lineTo(this.currentPositionX, this.currentPositionY)
        this.target.ctx.stroke()
        this.lastMouseDownX = this.currentPositionX
        this.lastMouseDownY = this.currentPositionY
    }

    protected drawTemporaryTo(xEnd: number, yEnd: number): void
    {
        this.initLineWidth()
        this.colorFunctionPartial.initColor(this.time)
        this.target.ctx.beginPath()
        this.target.ctx.ellipse(
            this.currentPositionX,
            this.currentPositionY,
            this.target.ctx.lineWidth / 2,
            this.target.ctx.lineWidth / 2,
            0,
            0,
            2 * Math.PI
        )
        this.target.ctx.closePath()
        this.target.ctx.fill()
    }

    protected initLineWidth(): void
    {
        let lineWidthFunction = this.configContainer.getValueByProperty(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY)
        this.target.ctx.lineWidth = this.interpreter.interpret(lineWidthFunction, {$s: this.time})
    }
}