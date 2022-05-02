import GetHtmlElementInterface from "../Element/GetHtmlElementInterface.js";
import GetValueInterface from "../Element/GetValueInterface.js";
import ConfigItem from "./ConfigItem.js";
import Canvas from "../Element/Canvas.js";

export default abstract class CanvasConfigItem extends ConfigItem
{
    public constructor(
        protected propertyName: string,
        protected label: string,
        protected input: GetHtmlElementInterface & GetValueInterface,
        protected canvas: Canvas
    ) {
        super(propertyName, label, input)

        this.input.getElement().addEventListener('change', e => {
            this.onChange()
        })
    }

    protected abstract onChange(): void
}