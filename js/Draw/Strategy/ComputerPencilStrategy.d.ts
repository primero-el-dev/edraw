import SetCanvasActionStrategy from "./SetCanvasActionStrategy.js";
import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ComputerDrawStrategy from "./ComputerDrawStrategy.js";
export default class ComputerPencilStrategy implements SetCanvasActionStrategy, ComputerDrawStrategy {
    private lastX;
    private lastY;
    private pressed;
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
}
