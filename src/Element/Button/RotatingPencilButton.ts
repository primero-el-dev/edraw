import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageAndAnimationActionButton from "./DrawWithTemporaryImageAndAnimationActionButton.js";

export default class RotatingPencilButton extends DrawWithTemporaryImageAndAnimationActionButton
{
    protected initContextProperties(): void
    {
        this.target.ctx.lineWidth = this.configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY)
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        let elementDiameter: number = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY)
        let distanceFromClick: number = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY)
        let lapsPerSeconds: number = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY)
        let distanceX = Math.sin(lapsPerSeconds * this.time * Math.PI * 8) * distanceFromClick
        let distanceY = Math.cos(lapsPerSeconds * this.time * Math.PI * 8) * distanceFromClick

        this.target.ctx.beginPath()
        this.target.ctx.ellipse(
            this.currentPositionX + distanceX,
            this.currentPositionY + distanceY,
             elementDiameter / 2,
            elementDiameter / 2,
            0,
            0,
            2 * Math.PI
        )
        this.target.ctx.closePath()
        this.target.ctx.fill()
    }
}