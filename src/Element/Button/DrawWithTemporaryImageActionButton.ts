import DrawActionButton from "./DrawActionButton.js";
import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";

export default abstract class DrawWithTemporaryImageActionButton extends DrawActionButton
{
    protected lastMouseDownX: number|null = null
    protected lastMouseDownY: number|null = null
    protected pressed: boolean = false
    protected lastImageData: ImageData|null = null

    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel
    ) {
        super(buttonElement, target, configContainer, configPanel)
    }

    protected abstract initContextProperties(): void

    protected abstract drawTo(xEnd: number, yEnd: number): void

    public addListeners(): void
    {
        this.target.canvas.onmousedown = e => {
            this.lastMouseDownX = e.offsetX
            this.lastMouseDownY = e.offsetY
            this.pressed = true
            this.initContextProperties()
        }
        this.target.canvas.onmousemove = e => {
            if (this.pressed) {
                this.restoreLastImageIfPresentAndReset()
                this.setLastImageDataToCurrentPainting()
                this.drawTemporaryTo(e.offsetX, e.offsetY)
            }
        }
        this.target.canvas.onmouseup = e => {
            this.restoreLastImageIfPresentAndReset()
            this.drawTo(e.offsetX, e.offsetY)
            this.lastMouseDownX = null
            this.lastMouseDownY = null
            this.pressed = false
        }
    }

    public setListeners(): void
    {
        this.target.removeEventListeners()
        this.addListeners()
    }

    public getButtonElement(): HTMLElement
    {
        return this.buttonElement
    }

    protected restoreLastImageIfPresentAndReset(): void
    {
        if (this.lastImageData) {
            this.target.ctx.putImageData(this.lastImageData, 0, 0)
            this.lastImageData = null
        }
    }

    protected setLastImageDataToCurrentPainting(): void
    {
        this.lastImageData = this.target.ctx.getImageData(0, 0, this.target.canvas.width, this.target.canvas.height)
    }

    protected drawTemporaryTo(xEnd: number, yEnd: number): void
    {
        this.drawTo(xEnd, yEnd)
    }
}