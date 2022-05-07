import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import DrawStrategy from "./DrawStrategy.js";
export default abstract class DrawWithTemporaryImageActionButton implements DrawStrategy {
    protected canvas: Canvas;
    protected configContainer: ConfigContainer;
    protected lastMouseDownX: number | null;
    protected lastMouseDownY: number | null;
    protected pressed: boolean;
    protected lastImageData: ImageData | null;
    protected abstract initContextProperties(): void;
    protected abstract drawTo(xEnd: number, yEnd: number): void;
    setAction(canvas: Canvas, configContainer: ConfigContainer): void;
    protected restoreLastImageIfPresentAndReset(): void;
    protected setLastImageDataToCurrentPainting(): void;
    protected drawTemporaryTo(xEnd: number, yEnd: number): void;
}
