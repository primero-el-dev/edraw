import CanvasConfigItem from "./CanvasConfigItem.js";

export default class CanvasWidthConfigItem extends CanvasConfigItem
{
    protected onChange(): void
    {
        console.log(this)
        console.log(this.input.getValue())
        this.canvas.setWidth(this.input.getValue())
    }
}