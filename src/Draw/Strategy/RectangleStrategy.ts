import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";

export default class RectangleStrategy extends DrawWithTemporaryImageActionButton
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
        let dx = xEnd - this.lastMouseDownX
        let dy = yEnd - this.lastMouseDownY
        this.canvas.ctx.rect(this.lastMouseDownX, this.lastMouseDownY, dx, dy)
        if (this.configContainer.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY)) {
            this.canvas.ctx.stroke()
        } else {
            this.canvas.ctx.fill()
        }
        this.canvas.ctx.closePath()
    }
}