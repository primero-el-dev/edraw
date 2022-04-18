import ConfigContainer from "../Config/ConfigContainer.js";

export default class Canvas
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
        this.canvas.width = this.canvas.offsetWidth
        this.canvas.height = this.canvas.offsetHeight
    }

    public onResize(): void
    {
        let imageData: ImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.width = this.canvas.offsetWidth
        this.canvas.height = this.canvas.offsetHeight
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
}