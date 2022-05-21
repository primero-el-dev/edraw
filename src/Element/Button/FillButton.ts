import DrawActionButton from "./DrawActionButton.js";

export default class FillButton extends DrawActionButton
{
    public addListeners(): void
    {
        this.target.canvas.onmouseup = e => {
            console.log(e.offsetX, e.offsetY)
            this.target.ctx.lineTo(e.offsetX, e.offsetY)
            this.target.ctx.stroke()
        }
    }
}