import Canvas from "../../Element/Canvas.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import DefaultValueFunctionInterpreter from "../../Dsl/Interpreter/DefaultValueFunctionInterpreter.js";
import DrawWithAnimationStrategy from "./DrawWithAnimationStrategy.js";
import ColorFunctionPartial from "../Partial/ColorFunctionPartial.js";
import DrawStrategy from "./DrawStrategy.js";
import ColorFunctionWithContourOptionPartial from "../Partial/ColorFunctionWithContourPartial.js";

export default class AdvancedPolygonBrushStrategy implements DrawStrategy
{
    private readonly FPS: number = 60
    private lastX: number
    private lastY: number
    private pressed: boolean = false
    private canvas: Canvas
    private configContainer: ConfigContainer
    protected colorFunctionWithContourPartial: ColorFunctionWithContourOptionPartial
    protected time: number = 0

    public constructor(protected interpreter: InterpreterInterface = new DefaultValueFunctionInterpreter())
    {
        setInterval(() => {
            this.time += 1
        }, 1)
    }

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
        this.colorFunctionWithContourPartial = new ColorFunctionWithContourOptionPartial(canvas, configContainer, this.interpreter)
        this.canvas = canvas
        this.configContainer = configContainer

        const startFunction = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
            this.pressed = true

            setInterval(() => {
                if (this.pressed) {
                    this.drawSingleTick()
                }
            }, 1000 / this.FPS)
        }

        const endFunction = e => {
            this.pressed = false
        }

        const moveFunction = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
        }

        canvas.canvas.onmouseover = null
        canvas.canvas.onmousedown = startFunction
        canvas.canvas.ontouchstart = startFunction
        canvas.canvas.onmouseup = endFunction
        canvas.canvas.ontouchend = endFunction
        canvas.canvas.onmousemove = moveFunction
        canvas.canvas.ontouchmove = moveFunction
        canvas.canvas.onmouseleave = null
    }

    private drawSingleTick(): void
    {
        this.initLineWidth()
        this.colorFunctionWithContourPartial.initColor(this.time)

        let elementDiameter = this.getFunctionFromTimeValueFor(ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY, this.time)
        let brushDiameter = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY)
        let elementRotateAngle = this.getFunctionFromTimeValueFor(ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY, this.time)
        let elementEdgesCount = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY)
        let contourOnly = this.configContainer.isContourOnly()

        this.canvas.ctx.lineWidth = contourOnly ? this.getFunctionFromTimeValueFor(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY, this.time) : 1

        let getNthAngle = (n: number): number => 2 * Math.PI * ((elementRotateAngle / 360) + (n / elementEdgesCount))

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let elementDistanceFromClick = Math.random() * (brushDiameter - elementDiameter) / 2
            let direction = 2 * Math.PI * Math.random()
            let elementX = this.lastX + Math.sin(direction) * elementDistanceFromClick
            let elementY = this.lastY + Math.cos(direction) * elementDistanceFromClick

            this.canvas.ctx.beginPath()
            this.canvas.ctx.moveTo(
                elementX + Math.sin(getNthAngle(0)) * (elementDiameter / 2),
                elementY - Math.cos(getNthAngle(0)) * (elementDiameter / 2)
            )
            for (let j = 0; j <= elementEdgesCount + 1; j++) {
                this.canvas.ctx.lineTo(
                    elementX + Math.sin(getNthAngle(j)) * (elementDiameter / 2),
                    elementY - Math.cos(getNthAngle(j)) * (elementDiameter / 2)
                )
                this.canvas.ctx.stroke()
            }
            this.canvas.ctx.closePath()

            if (!contourOnly) {
                this.canvas.ctx.fill()
                console.log('not')
            } else {
                console.log('contour')
            }
        }
    }

    protected initLineWidth(): void
    {
        let lineWidthFunction = this.configContainer.getValueByProperty(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY)
        this.canvas.ctx.lineWidth = this.interpreter.interpret(lineWidthFunction, {$s: this.time})
    }

    protected getFunctionFromTimeValueFor(configName: string, time: number): number
    {
        let functionString = this.configContainer.getValueByProperty(configName)

        return this.interpreter.interpret(functionString, {$s: time})
    }
}