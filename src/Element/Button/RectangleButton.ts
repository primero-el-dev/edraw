import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";

export default class RectangleButton extends DrawWithTemporaryImageActionButton
{
    protected initContextProperties(): void
    {
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)

        if (this.configContainer.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY)) {
            this.target.ctx.lineWidth = this.configContainer.getLineWidth()
            this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            this.target.ctx.fillStyle = 'transparent'
        } else {
            this.target.ctx.lineWidth = 1
            this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
            this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        }
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        this.target.ctx.beginPath()
        let dx = xEnd - this.lastMouseDownX
        let dy = yEnd - this.lastMouseDownY
        this.target.ctx.rect(this.lastMouseDownX, this.lastMouseDownY, dx, dy)
        if (this.configContainer.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY)) {
            this.target.ctx.stroke()
        } else {
            this.target.ctx.fill()
        }
        this.target.ctx.closePath()
    }
}