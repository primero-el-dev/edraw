import SetCanvasActionStrategy from "./SetCanvasActionStrategy.js";
import Canvas from "../../Element/Canvas.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import f from "../../functions.js";

export default class BrushStrategy implements SetCanvasActionStrategy
{
    private readonly FPS: number = 60
    private lastX: number
    private lastY: number
    private pressed: boolean = false
    private canvas: Canvas
    private configContainer: ConfigContainer

    public setAction(canvas: Canvas, configContainer: ConfigContainer): void
    {
        this.canvas = canvas
        this.configContainer = configContainer

        const startFunction = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
            this.pressed = true

            setInterval(() => {
                if (this.pressed) {
                    this.drawSingleTick()
                }
            }, 1000 / this.FPS)
        }

        const endFunction = e => {
            this.pressed = false
        }

        const moveFunction = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
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

    private drawSingleTick(): void
    {
        let lineWidth = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY)
        let brushDiameter = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY)
        this.canvas.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.canvas.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        this.canvas.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let radius = f.randomInt(0, (brushDiameter - lineWidth) / 2)
            let angleRatio = Math.random()
            let dx = Math.sin(angleRatio * Math.PI * 2) * radius
            let dy = Math.cos(angleRatio * Math.PI * 2) * radius

            this.canvas.ctx.beginPath()
            this.canvas.ctx.ellipse(
                this.lastX + dx,
                this.lastY + dy,
                lineWidth / 2,
                lineWidth / 2,
                0,
                0,
                2 * Math.PI
            )
            this.canvas.ctx.fill()
        }
    }
}