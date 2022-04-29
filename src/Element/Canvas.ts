import ConfigContainer from "../Config/ConfigContainer.js";
import ResizeUpInterface from "./ResizeUpInterface.js";

export default class Canvas implements ResizeUpInterface
{
    public ctx: CanvasRenderingContext2D

    public constructor(
        public canvas: HTMLCanvasElement,
        private configContainer: ConfigContainer
    ) {
        this.configureCanvasSize()
        this.initContext()
    }

    public configureCanvasSize(): void
    {
        // this.canvas.width = this.canvas.offsetWidth
        // this.canvas.height = this.canvas.offsetHeight
        this.canvas.style.width = this.canvas.offsetWidth + 'px'
        this.canvas.style.height = this.canvas.offsetHeight + 'px'
    }

    public resize(width: number, height: number): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.width = width
        this.canvas.height = height
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

    protected initContext(): void
    {
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = this.configContainer.getValueByProperty('color')
        this.ctx.lineWidth = this.configContainer.getValueByProperty('lineWidth') as unknown as number
    }

    public resizeUp(width: number, height: number): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        // this.canvas.width += width
        // this.canvas.height += height
        // this.canvas.style.width = this.canvas.width > 0 ? (this.canvas.width + 'px') : '1px'
        // this.canvas.style.height = this.canvas.height > 0 ? (this.canvas.height + 'px') : '1px'
        this.canvas.style.width = (parseInt(this.canvas.style.width) + width) + 'px'
        this.canvas.style.height = (parseInt(this.canvas.style.height) + height) + 'px'
        // this.canvas.width = this.canvas.offsetWidth
        // this.canvas.height = this.canvas.offsetHeight
        this.ctx.putImageData(imageData, 0, 0)
    }
}