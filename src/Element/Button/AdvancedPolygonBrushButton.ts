import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";
import f from '../../functions.js'
import Color from "../../Color.js";
import ColorFunctionPartial from "./Partial/ColorFunctionPartial.js";
import Canvas from "../Canvas";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import DefaultValueFunctionInterpreter from "../../Dsl/Interpreter/DefaultValueFunctionInterpreter.js";
import ColorFunctionWithContourOptionPartial from "./Partial/ColorFunctionWithContourOptionPartial.js";

export default class AdvancedPolygonBrushButton extends DrawActionButton
{
    private readonly FPS: number = 60
    private lastX: number
    private lastY: number
    private pressed: boolean = false
    protected colorFunctionWithContourPartial: ColorFunctionWithContourOptionPartial
    protected time: number = 0

    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel,
        protected interpreter: InterpreterInterface = new DefaultValueFunctionInterpreter()
    ) {
        super(buttonElement, target, configContainer, configPanel)

        setInterval(() => {
            this.time += 1
        }, 1)
        this.colorFunctionWithContourPartial = new ColorFunctionWithContourOptionPartial(this.target, this.configContainer, this.interpreter)
    }

    public addListeners(): void
    {
        this.target.canvas.onmousedown = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
            this.pressed = true
            setInterval(() => {
                if (this.pressed) {
                    this.drawSingleTick()
                }
            }, 1000 / this.FPS)
        }
        this.target.canvas.onmousemove = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
        }
        this.target.canvas.onmouseup = e => {
            this.pressed = false
        }
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

        this.target.ctx.lineWidth = contourOnly ? this.getFunctionFromTimeValueFor(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY, this.time) : 1

        let getNthAngle = (n: number): number => 2 * Math.PI * ((elementRotateAngle / 360) + (n / elementEdgesCount))

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let elementDistanceFromClick = Math.random() * (brushDiameter - elementDiameter) / 2
            let direction = 2 * Math.PI * Math.random()
            let elementX = this.lastX + Math.sin(direction) * elementDistanceFromClick
            let elementY = this.lastY + Math.cos(direction) * elementDistanceFromClick

            this.target.ctx.beginPath()
            this.target.ctx.moveTo(
                elementX + Math.sin(getNthAngle(0)) * (elementDiameter / 2),
                elementY - Math.cos(getNthAngle(0)) * (elementDiameter / 2)
            )
            for (let j = 0; j <= elementEdgesCount + 1; j++) {
                this.target.ctx.lineTo(
                    elementX + Math.sin(getNthAngle(j)) * (elementDiameter / 2),
                    elementY - Math.cos(getNthAngle(j)) * (elementDiameter / 2)
                )
                this.target.ctx.stroke()
            }
            this.target.ctx.closePath()

            if (!contourOnly) {
                this.target.ctx.fill()
                console.log('not')
            } else {
                console.log('contour')
            }
        }
    }

    protected initLineWidth(): void
    {
        let lineWidthFunction = this.configContainer.getValueByProperty(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY)
        this.target.ctx.lineWidth = this.interpreter.interpret(lineWidthFunction, {$s: this.time})
    }

    protected getFunctionFromTimeValueFor(configName: string, time: number): number
    {
        let functionString = this.configContainer.getValueByProperty(configName)

        return this.interpreter.interpret(functionString, {$s: time})
    }
}