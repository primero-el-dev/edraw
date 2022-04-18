import DrawActionButton from "./DrawActionButton.js";
import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
export default abstract class DrawWithTemporaryImageActionButton extends DrawActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    protected lastMouseDownX: number | null;
    protected lastMouseDownY: number | null;
    protected pressed: boolean;
    protected lastImageData: ImageData | null;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    protected abstract initContextProperties(): void;
    protected abstract drawTo(xEnd: number, yEnd: number): void;
    addListeners(): void;
    setListeners(): void;
    getButtonElement(): HTMLElement;
    protected restoreLastImageIfPresentAndReset(): void;
    protected setLastImageDataToCurrentPainting(): void;
    protected drawTemporaryTo(xEnd: number, yEnd: number): void;
}
