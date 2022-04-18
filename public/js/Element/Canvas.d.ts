import ConfigContainer from "../Config/ConfigContainer.js";
export default class Canvas {
    canvas: HTMLCanvasElement;
    private configContainer;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement, configContainer: ConfigContainer);
    configureCanvasSize(): void;
    onResize(): void;
    removeEventListeners(): void;
    protected initContext(): void;
}
