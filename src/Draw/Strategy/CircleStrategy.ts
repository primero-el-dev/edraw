import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";

export default class CircleStrategy extends DrawWithTemporaryImageActionButton
{
    protected initContextProperties(): void
    {
        this.canvas.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)

        if (this.configContainer.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY)) {
            this.canvas.ctx.lineWidth = this.configContainer.getLineWidth()
            this.canvas.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            this.canvas.ctx.fillStyle = 'transparent'
        } else {
            this.canvas.ctx.lineWidth = 1
            this.canvas.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            this.canvas.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        }
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        this.canvas.ctx.beginPath()
        let dx = (xEnd - this.lastMouseDownX)
        let dy = (yEnd - this.lastMouseDownY)
        this.canvas.ctx.ellipse(
            this.lastMouseDownX + dx / 2,
            this.lastMouseDownY + dy / 2,
            Math.abs(dx / 2),
            Math.abs(dy / 2),
            0,
            0,
            2 * Math.PI
        )
        if (this.configContainer.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY)) {
            this.canvas.ctx.stroke()
        } else {
            this.canvas.ctx.fill()
        }
        this.canvas.ctx.closePath()
    }
}