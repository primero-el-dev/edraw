import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageActionButton.js";

export default class LineButton extends DrawWithTemporaryImageActionButton
{
    protected initContextProperties(): void
    {
        this.target.ctx.lineWidth = this.configContainer.getLineWidth()
        this.target.ctx.lineCap = this.configContainer.getValueAsBoolean(ConfigItem.ROUND_CAP_PROPERTY) ? 'round' : 'butt'
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        this.target.ctx.beginPath()
        this.target.ctx.moveTo(this.lastMouseDownX, this.lastMouseDownY)
        this.target.ctx.lineTo(xEnd, yEnd)
        this.target.ctx.stroke()
        this.target.ctx.closePath()
    }
}