import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";

export default interface SetCanvasActionStrategy
{
    setAction(canvas: Canvas, configContainer: ConfigContainer): void
}