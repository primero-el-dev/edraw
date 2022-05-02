import ResizeUpInterface from "./ResizeUpInterface.js";
export default class Canvas implements ResizeUpInterface {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement);
    configureCanvasSize(): void;
    resize(width: number, height: number): void;
    removeEventListeners(): void;
    resizeUp(width: number, height: number): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
}
