import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageAndAnimationActionButton from "./DrawWithTemporaryImageAndAnimationActionButton.js";

export default class BungeePencilButton extends DrawWithTemporaryImageAndAnimationActionButton
{
    protected readonly BASE_ELASTICITY = 0.897
    protected lineLength: number = 0
    protected xVel: number = 0
    protected yVel: number = 0
    protected ballX: number
    protected ballY: number
    protected striped: boolean = false
    protected lastDrawnBallX: number|null = null
    protected lastDrawnBallY: number|null = null

    protected initContextProperties(): void
    {
        let lineLength = this.configContainer.getValueAsNumber(ConfigItem.STRIPE_GAP_LENGTH_PROPERTY)
        let gapLength = this.configContainer.getValueAsNumber(ConfigItem.STRIPE_GAP_LENGTH_PROPERTY)
        this.striped = this.configContainer.getValueAsBoolean(ConfigItem.STRIPED_LINE_PROPERTY)
        this.target.ctx.lineWidth = this.configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY)
        this.target.ctx.lineCap = this.striped ? 'butt' : 'round'
        this.target.ctx.setLineDash(this.striped ? [lineLength, gapLength] : [])
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
    }

    protected additionalOnMouseUp(): void
    {
        this.lastDrawnBallX = null
        this.lastDrawnBallY = null
        this.ballX = null
        this.ballY = null
    }

    protected drawTemporaryTo(xEnd: number, yEnd: number): void
    {
        this.adjustParams(xEnd, yEnd)

        this.target.ctx.beginPath()
        this.target.ctx.ellipse(
            this.ballX,
            this.ballY,
            this.target.ctx.lineWidth / 2,
            this.target.ctx.lineWidth / 2,
            0,
            0,
            2 * Math.PI
        )
        this.target.ctx.fill()
        this.target.ctx.closePath()
    }

    protected drawTo(xEnd: number, yEnd: number): void
    {
        this.adjustParams(xEnd, yEnd)

        this.target.ctx.beginPath()
        this.target.ctx.moveTo(this.lastDrawnBallX || this.ballX, this.lastDrawnBallY || this.ballY)
        this.target.ctx.lineTo(this.ballX, this.ballY)
        this.target.ctx.stroke()
        this.target.ctx.closePath()

        this.lastMouseDownX = xEnd
        this.lastMouseDownY = yEnd
        this.lastDrawnBallX = this.ballX
        this.lastDrawnBallY = this.ballY
    }

    protected adjustParams(xEnd: number, yEnd: number): void
    {
        this.initBallPositionIfEmpty(xEnd, yEnd)
        this.adjustVelocity(xEnd, yEnd)
        this.adjustBallPosition()
    }

    protected initBallPositionIfEmpty(xEnd: number, yEnd: number): void
    {
        this.ballX = this.ballX || xEnd
        this.ballY = this.ballY || yEnd
    }

    protected adjustVelocity(xEnd: number, yEnd: number): void
    {
        let elasticity = this.configContainer.getValueAsNumber(ConfigItem.GUM_ELASTICITY_PROPERTY)
        this.xVel = (this.xVel + (xEnd - this.lastMouseDownX) * 0.01 - (this.ballX - xEnd) * 0.01) * (this.BASE_ELASTICITY + elasticity / 10)
        this.yVel = (this.yVel + (yEnd - this.lastMouseDownY) * 0.01 - (this.ballY - yEnd) * 0.01) * (this.BASE_ELASTICITY + elasticity / 10)
    }

    protected adjustBallPosition(): void
    {
        this.ballX += this.xVel
        this.ballY += this.yVel
    }
}