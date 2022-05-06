import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";

export default class LineStrategy extends DrawWithTemporaryImageActionButton
{
    protected initContextProperties(): void
    {
        this.canvas.ctx.lineWidth = this.configContainer.getLineWidth()
        this.canvas.ctx.lineCap = this.configContainer.getValueAsBoolean(ConfigItem.ROUND_CAP_PROPERTY) ? 'round' : 'butt'
        this.canvas.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.canvas.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        this.canvas.ctx.beginPath()
        this.canvas.ctx.moveTo(this.lastMouseDownX, this.lastMouseDownY)
        this.canvas.ctx.lineTo(xEnd, yEnd)
        this.canvas.ctx.stroke()
        this.canvas.ctx.closePath()
    }
}