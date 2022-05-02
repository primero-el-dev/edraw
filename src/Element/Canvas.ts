import ConfigContainer from "../Config/ConfigContainer.js";
import ResizeUpInterface from "./ResizeUpInterface.js";

export default class Canvas implements ResizeUpInterface
{
    public ctx: CanvasRenderingContext2D

    public constructor(public canvas: HTMLCanvasElement)
    {
        this.configureCanvasSize()
        this.ctx = this.canvas.getContext('2d')
    }

    public configureCanvasSize(): void
    {
        this.canvas.width = this.canvas.offsetWidth
        this.canvas.height = this.canvas.offsetHeight
        this.canvas.style.width = this.canvas.offsetWidth + 'px'
        this.canvas.style.height = this.canvas.offsetHeight + 'px'
    }

    public resize(width: number, height: number): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.width = width
        this.canvas.height = height
        this.canvas.style.width = width + 'px'
        this.canvas.style.height = height + 'px'
        this.ctx.putImageData(imageData, 0, 0)
    }

    public removeEventListeners(): void
    {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmouseover = null
        this.canvas.onmouseout = null
    }

    public resizeUp(width: number, height: number): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.style.width = (parseInt(this.canvas.style.width) + width) + 'px'
        this.canvas.style.height = (parseInt(this.canvas.style.height) + height) + 'px'
        this.canvas.width = this.canvas.offsetWidth
        this.canvas.height = this.canvas.offsetHeight
        this.ctx.putImageData(imageData, 0, 0)
    }

    public setWidth(width: number): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.style.width = (parseInt(this.canvas.style.width) + width) + 'px'
        this.canvas.width = this.canvas.offsetWidth
        this.ctx.putImageData(imageData, 0, 0)
    }

    public setHeight(height: number): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.style.height = (parseInt(this.canvas.style.height) + height) + 'px'
        this.canvas.height = this.canvas.offsetHeight
        this.ctx.putImageData(imageData, 0, 0)
    }
}