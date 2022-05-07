import SetCanvasActionStrategy from "./SetCanvasActionStrategy.js";
import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
export default class ComputerLineStrategy implements SetCanvasActionStrategy {
    private lastX;
    private lastY;
    private pressed;
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
}
