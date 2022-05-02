import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";
import f from '../../functions.js'
import Color from "../../Color.js";

export default class PolygonBrushButton extends DrawActionButton
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
        let elementDiameter = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY)
        let brushDiameter = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY)
        let elementRotateAngle = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_ROTATION_PROPERTY)
        let elementEdgesCount = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY)
        let contourOnly = this.configContainer.isContourOnly()
        let elementRedSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY)
        let elementGreenSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY)
        let elementBlueSpreadLimit = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY)
        let opacity = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)

        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.target.ctx.lineWidth = contourOnly ? this.configContainer.getLineWidth() : 1

        let getNthAngle = (n: number): number => 2 * Math.PI * ((elementRotateAngle / 360) + (n / elementEdgesCount))

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let elementDistanceFromClick = Math.random() * (brushDiameter - elementDiameter) / 2
            let direction = 2 * Math.PI * Math.random()
            let elementX = this.lastX + Math.sin(direction) * elementDistanceFromClick
            let elementY = this.lastY + Math.cos(direction) * elementDistanceFromClick
            let color = new Color(this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY))

            color.addRandomRgbInRanges(
                elementRedSpreadLimit,
                elementGreenSpreadLimit,
                elementBlueSpreadLimit
            )

            this.target.ctx.fillStyle = color.toDecmalStringWithOpacity(opacity)
            this.target.ctx.strokeStyle = contourOnly ? color.toDecmalStringWithOpacity(opacity) : 'transparent'
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
            }
        }
    }
}