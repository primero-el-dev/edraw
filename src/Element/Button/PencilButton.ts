import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";

export default class PencilButton extends DrawActionButton
{
    private lastX: number
    private lastY: number
    private pressed: boolean = false

    public addListeners(): void
    {
        this.target.canvas.onmousedown = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
            this.pressed = true
            this.target.ctx.lineWidth = this.configContainer.getLineWidth()
            this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
            this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            this.target.ctx.beginPath()
            this.target.ctx.moveTo(this.lastX, this.lastY)
            this.target.ctx.arc(
                e.offsetX,
                e.offsetY,
                this.configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY) / 2,
                0,
                2 * Math.PI,
                false
            )
            this.target.ctx.fill()
        }
        this.target.canvas.onmouseup = e => {
            this.lastX = null
            this.lastY = null
            this.pressed = false
        }
        this.target.canvas.onmousemove = e => {
            if (this.pressed) {
                this.target.ctx.lineWidth = this.configContainer.getLineWidth()
                this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
                this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
                this.target.ctx.lineCap = 'butt'
                this.target.ctx.beginPath()
                this.target.ctx.moveTo(this.lastX, this.lastY)
                this.target.ctx.lineTo(e.offsetX, e.offsetY)
                this.target.ctx.stroke()
                this.lastX = e.offsetX
                this.lastY = e.offsetY
            }
        }
    }
}