import CanvasConfigItem from "./CanvasConfigItem.js";

export default class CanvasHeightConfigItem extends CanvasConfigItem
{
    protected onChange(): void
    {
        this.canvas.setHeight(this.input.getValue())
    }
}