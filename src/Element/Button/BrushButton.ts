import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";
import f from '../../functions.js'

export default class BrushButton extends DrawActionButton
{
    private readonly FPS: number = 60
    private lastX: number
    private lastY: number
    private pressed: boolean = false

    public addListeners(): void
    {
        this.target.canvas.onmousedown = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
            this.pressed = true
            setInterval(() => {
                if (this.pressed) {
                    this.drawSingleTick()
                }
            }, 1000 / this.FPS)
        }
        this.target.canvas.onmousemove = e => {
            this.lastX = e.offsetX
            this.lastY = e.offsetY
        }
        this.target.canvas.onmouseup = e => {
            this.pressed = false
        }
    }

    private drawSingleTick(): void
    {
        let lineWidth = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY)
        let brushDiameter = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY)
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)

        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let radius = f.randomInt(0, (brushDiameter - lineWidth) / 2)
            let angleRatio = Math.random()
            let dx = Math.sin(angleRatio * Math.PI * 2) * radius
            let dy = Math.cos(angleRatio * Math.PI * 2) * radius
            this.target.ctx.beginPath()
            this.target.ctx.ellipse(
                this.lastX + dx,
                this.lastY + dy,
                lineWidth / 2,
                lineWidth / 2,
                0,
                0,
                2 * Math.PI
            )
            this.target.ctx.fill()
        }
    }
}