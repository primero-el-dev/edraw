import DrawActionButton from "./DrawActionButton.js";
import Canvas from "../Canvas";
import ConfigContainer from "../../Config/ConfigContainer";
import ConfigPanel from "../ConfigPanel";
export default abstract class DrawActionWithTemporaryImageButton extends DrawActionButton {
    protected buttonElement: HTMLElement;
    protected target: Canvas;
    protected configContainer: ConfigContainer;
    protected configPanel: ConfigPanel;
    private lastMouseDownX;
    private lastMouseDownY;
    private pressed;
    private lastImageData;
    constructor(buttonElement: HTMLElement, target: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    protected abstract drawTo(xEnd: number, yEnd: number): void;
    addListeners(): void;
    setListeners(): void;
    getButtonElement(): HTMLElement;
    protected initContextProperties(): void;
    protected restoreLastImageIfPresentAndReset(): void;
    protected setLastImageDataToCurrentPainting(): void;
}
