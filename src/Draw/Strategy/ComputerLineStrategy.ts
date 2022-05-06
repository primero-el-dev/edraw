import SetCanvasActionStrategy from "./SetCanvasActionStrategy.js";
import Canvas from "../../Element/Canvas.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigContainer from "../../Config/ConfigContainer.js";

export default class ComputerLineStrategy implements SetCanvasActionStrategy
{
    private lastX: number
    private lastY: number
    private pressed: boolean = false

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
        canvas.canvas.onmousedown = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
            this.pressed = true
            canvas.ctx.lineWidth = configContainer.getLineWidth()
            canvas.ctx.globalAlpha = configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
            canvas.ctx.fillStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            canvas.ctx.strokeStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            canvas.ctx.beginPath()
            canvas.ctx.moveTo(this.lastX, this.lastY)
            canvas.ctx.arc(
                e.offsetX,
                e.offsetY,
                configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY) / 2,
                0,
                2 * Math.PI,
                false
            )
            canvas.ctx.fill()
        }
        canvas.canvas.onmouseup = e => {
            this.lastX = null
            this.lastY = null
            this.pressed = false
        }
        canvas.canvas.onmousemove = e => {
            if (this.pressed) {
                canvas.ctx.lineWidth = configContainer.getLineWidth()
                canvas.ctx.fillStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
                canvas.ctx.strokeStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
                canvas.ctx.lineCap = 'round'
                canvas.ctx.beginPath()
                canvas.ctx.moveTo(this.lastX, this.lastY)
                canvas.ctx.lineTo(e.offsetX, e.offsetY)
                canvas.ctx.stroke()
                this.lastX = e.offsetX
                this.lastY = e.offsetY
            }
        }
    }
}