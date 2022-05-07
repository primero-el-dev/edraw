import SetCanvasActionStrategy from "./SetCanvasActionStrategy.js";
import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
export default class RectangleBrushStrategy implements SetCanvasActionStrategy {
    private readonly FPS;
    private lastX;
    private lastY;
    private pressed;
    private canvas;
    private configContainer;
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
    private drawSingleTick;
}
