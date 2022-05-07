import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import DrawStrategy from "./DrawStrategy.js";

export default abstract class DrawWithTemporaryImageActionButton implements DrawStrategy
{
    protected canvas: Canvas
    protected configContainer: ConfigContainer
    protected lastMouseDownX: number|null = null
    protected lastMouseDownY: number|null = null
    protected pressed: boolean = false
    protected lastImageData: ImageData|null = null

    protected abstract initContextProperties(): void

    protected abstract drawTo(xEnd: number, yEnd: number): void

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
        this.canvas = canvas
        this.configContainer = configContainer

        const startFunction = e => {
            this.lastMouseDownX = e.offsetX
            this.lastMouseDownY = e.offsetY
            this.pressed = true
            this.initContextProperties()
        }

        const endFunction = e => {
            this.restoreLastImageIfPresentAndReset()
            this.drawTo(e.offsetX, e.offsetY)
            this.lastMouseDownX = null
            this.lastMouseDownY = null
            this.pressed = false
        }

        const moveFunction = e => {
            if (this.pressed) {
                this.restoreLastImageIfPresentAndReset()
                this.setLastImageDataToCurrentPainting()
                this.drawTemporaryTo(e.offsetX, e.offsetY)
            }
        }

        canvas.canvas.onmouseover = null
        canvas.canvas.onmousedown = startFunction
        canvas.canvas.ontouchstart = startFunction
        canvas.canvas.onmouseup = endFunction
        canvas.canvas.ontouchend = endFunction
        canvas.canvas.onmousemove = moveFunction
        canvas.canvas.ontouchmove = moveFunction
        canvas.canvas.onmouseleave = null
    }

    protected restoreLastImageIfPresentAndReset(): void
    {
        if (this.lastImageData) {
            this.canvas.ctx.putImageData(this.lastImageData, 0, 0)
            this.lastImageData = null
        }
    }

    protected setLastImageDataToCurrentPainting(): void
    {
        this.lastImageData = this.canvas.ctx.getImageData(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
    }

    protected drawTemporaryTo(xEnd: number, yEnd: number): void
    {
        this.drawTo(xEnd, yEnd)
    }
}