import GetHtmlElementInterface from "../Element/GetHtmlElementInterface.js";
import GetValueInterface from "../Element/GetValueInterface.js";
import ConfigItem from "./ConfigItem.js";
import Canvas from "../Element/Canvas.js";
export default abstract class CanvasConfigItem extends ConfigItem {
    protected propertyName: string;
    protected label: string;
    protected input: GetHtmlElementInterface & GetValueInterface;
    protected canvas: Canvas;
    constructor(propertyName: string, label: string, input: GetHtmlElementInterface & GetValueInterface, canvas: Canvas);
    protected abstract onChange(): void;
}
