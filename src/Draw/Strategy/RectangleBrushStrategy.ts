import SetCanvasActionStrategy from "./SetCanvasActionStrategy.js";
import Canvas from "../../Element/Canvas.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import Color from "../../Color.js";

export default class RectangleBrushStrategy implements SetCanvasActionStrategy
{
    private readonly FPS: number = 60
    private lastX: number
    private lastY: number
    private pressed: boolean = false
    private canvas: Canvas
    private configContainer: ConfigContainer

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
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
        let brushWidth = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_WIDTH_PROPERTY)
        let brushHeight = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY)
        let elementWidth = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_WIDTH_PROPERTY)
        let elementHeight = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_HEIGHT_PROPERTY)
        let contourOnly = this.configContainer.isContourOnly()
        let elementRedSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY)
        let elementGreenSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY)
        let elementBlueSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY)
        this.canvas.ctx.lineWidth = this.configContainer.getLineWidth()
        this.canvas.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let color = new Color(this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY))
            color.addRandomRgbInRanges(
                elementRedSpreadLimit,
                elementGreenSpreadLimit,
                elementBlueSpreadLimit
            )
            this.canvas.ctx.fillStyle = color.toString()
            this.canvas.ctx.strokeStyle = color.toString()
            let elementX = this.lastX - (brushWidth / 2) + Math.random() * (brushWidth - elementWidth)
            let elementY = this.lastY - (brushHeight / 2) + Math.random() * (brushHeight - elementHeight)

            this.canvas.ctx.beginPath()
            this.canvas.ctx.rect(
                elementX,
                elementY,
                elementWidth,
                elementHeight
            )

            if (contourOnly) {
                this.canvas.ctx.stroke()
            } else {
                this.canvas.ctx.fill()
            }
        }
    }
}