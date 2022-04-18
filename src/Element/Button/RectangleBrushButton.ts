import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";
import f from '../../functions.js'
import Color from "../../Color.js";

export default class RectangleBrushButton extends DrawActionButton
{
    private readonly FPS: number = 60
    private lastX: number
    private lastY: number
    private pressed: boolean = false

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
        let brushWidth = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_WIDTH_PROPERTY)
        let brushHeight = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY)
        let elementWidth = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_WIDTH_PROPERTY)
        let elementHeight = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_HEIGHT_PROPERTY)
        let contourOnly = this.configContainer.isContourOnly()
        let elementRedSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY)
        let elementGreenSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY)
        let elementBlueSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY)
        this.target.ctx.lineWidth = this.configContainer.getLineWidth()
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let color = new Color(this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY))
            color.addRandomRgbInRanges(
                elementRedSpreadLimit,
                elementGreenSpreadLimit,
                elementBlueSpreadLimit
            )
            this.target.ctx.fillStyle = color.toString()
            this.target.ctx.strokeStyle = color.toString()
            let elementX = this.lastX - (brushWidth / 2) + Math.random() * (brushWidth - elementWidth)
            let elementY = this.lastY - (brushHeight / 2) + Math.random() * (brushHeight - elementHeight)

            this.target.ctx.beginPath()
            this.target.ctx.rect(
                elementX,
                elementY,
                elementWidth,
                elementHeight
            )

            if (contourOnly) {
                this.target.ctx.stroke()
            } else {
                this.target.ctx.fill()
            }
        }
    }
}