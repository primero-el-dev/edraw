import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";
export default abstract class DrawWithAnimationStrategy extends DrawWithTemporaryImageActionButton {
    protected readonly RESET_TIME_AFTER_MILLIS: number;
    protected canvas: Canvas;
    protected configContainer: ConfigContainer;
    protected time: number;
    protected currentPositionX: number;
    protected currentPositionY: number;
    protected abstract initContextProperties(): void;
    protected abstract drawTo(xEnd: number, yEnd: number): void;
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
    protected additionalOnMouseUp(): void;
    protected resolveAction(): void;
}
