import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageActionButton.js";
import AppWindow from "../AppWindow.js";

export default abstract class DrawWithTemporaryImageAndAnimationActionButton extends DrawWithTemporaryImageActionButton
{
    protected readonly RESET_TIME_AFTER_MILLIS: number = 1000000000
    protected time: number = 0
    protected currentPositionX: number
    protected currentPositionY: number

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
        this.target.canvas.onmouseover = e => {
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
        this.target.canvas.onmousedown = e => {
            this.lastMouseDownX = e.offsetX
            this.lastMouseDownY = e.offsetY
            this.pressed = true
            this.initContextProperties()
        }
        this.target.canvas.onmousemove = e => {
            this.currentPositionX = e.offsetX
            this.currentPositionY = e.offsetY
        }
        this.target.canvas.onmouseup = e => {
            this.restoreLastImageIfPresentAndReset()
            this.drawTo(e.offsetX, e.offsetY)
            this.pressed = false
            this.additionalOnMouseUp()
        }
        this.target.canvas.onmouseout = e => {
            this.restoreLastImageIfPresentAndReset()
            AppWindow.getInstance().clearIntervals()
        }
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