import ConfigContainer from "../Config/ConfigContainer.js";
import ResizeUpInterface from "./ResizeUpInterface.js";
export default class Canvas implements ResizeUpInterface {
    canvas: HTMLCanvasElement;
    private configContainer;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement, configContainer: ConfigContainer);
    configureCanvasSize(): void;
    resize(width: number, height: number): void;
    removeEventListeners(): void;
    protected initContext(): void;
    resizeUp(width: number, height: number): void;
}
