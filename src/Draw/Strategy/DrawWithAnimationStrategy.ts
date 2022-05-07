import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import AppWindow from "../../Element/AppWindow.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";

export default abstract class DrawWithAnimationStrategy extends DrawWithTemporaryImageActionButton
{
    protected readonly RESET_TIME_AFTER_MILLIS: number = 1000000000
    protected canvas: Canvas
    protected configContainer: ConfigContainer
    protected time: number = 0
    protected currentPositionX: number
    protected currentPositionY: number

    protected abstract initContextProperties(): void

    protected abstract drawTo(xEnd: number, yEnd: number): void

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
        this.canvas = canvas
        this.configContainer = configContainer

        const overFunction = e => {
            let intervalId = setInterval(() => {
                this.time += 0.001
                if (this.time > this.RESET_TIME_AFTER_MILLIS) {
                    this.time = 0
                }
                this.resolveAction()
                this.lastMouseDownX = this.currentPositionX
                this.lastMouseDownY = this.currentPositionY
            }, 1)
            AppWindow.getInstance().addIntervalId(intervalId)
        }

        const startFunction = e => {
            this.lastMouseDownX = e.offsetX
            this.lastMouseDownY = e.offsetY
            this.pressed = true
            this.initContextProperties()
        }

        const moveFunction = e => {
            this.currentPositionX = e.offsetX
            this.currentPositionY = e.offsetY
        }

        const endFunction = e => {
            this.restoreLastImageIfPresentAndReset()
            this.drawTo(e.offsetX, e.offsetY)
            this.pressed = false
            this.additionalOnMouseUp()
        }

        const leaveFunction = e => {
            this.restoreLastImageIfPresentAndReset()
            AppWindow.getInstance().clearIntervals()
        }

        canvas.canvas.onmouseover = overFunction
        canvas.canvas.onmousedown = startFunction
        canvas.canvas.ontouchstart = startFunction
        canvas.canvas.onmouseup = endFunction
        canvas.canvas.ontouchend = endFunction
        canvas.canvas.onmousemove = moveFunction
        canvas.canvas.ontouchmove = moveFunction
        canvas.canvas.onmouseleave = leaveFunction
    }

    protected additionalOnMouseUp(): void
    {

    }

    protected resolveAction(): void
    {
        if (this.pressed) {
            this.restoreLastImageIfPresentAndReset()
            this.drawTo(this.currentPositionX, this.currentPositionY)
            this.setLastImageDataToCurrentPainting()
            this.drawTemporaryTo(this.currentPositionX, this.currentPositionY)
        } else {
            this.restoreLastImageIfPresentAndReset()
            this.setLastImageDataToCurrentPainting()
            this.drawTemporaryTo(this.currentPositionX, this.currentPositionY)
        }
    }
}