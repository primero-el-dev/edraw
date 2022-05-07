import DrawWithAnimationStrategy from "./DrawWithAnimationStrategy.js";
import ConfigItem from "../../Config/ConfigItem.js";

export default class RotatingPencilStrategy extends DrawWithAnimationStrategy
{
    protected initContextProperties(): void
    {
        this.canvas.ctx.lineWidth = this.configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY)
        this.canvas.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.canvas.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        this.canvas.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        let elementDiameter: number = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY)
        let distanceFromClick: number = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY)
        let lapsPerSeconds: number = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY)
        let distanceX = Math.sin(lapsPerSeconds * this.time * Math.PI * 8) * distanceFromClick
        let distanceY = Math.cos(lapsPerSeconds * this.time * Math.PI * 8) * distanceFromClick

        this.canvas.ctx.beginPath()
        this.canvas.ctx.ellipse(
            this.currentPositionX + distanceX,
            this.currentPositionY + distanceY,
            elementDiameter / 2,
            elementDiameter / 2,
            0,
            0,
            2 * Math.PI
        )
        this.canvas.ctx.closePath()
        this.canvas.ctx.fill()
    }
}