import ResizeUpInterface from "../ResizeUpInterface.js";
export default class Resizer2 {
    protected resizer: HTMLElement;
    protected resizable: ResizeUpInterface;
    protected readonly VERTICAL: boolean;
    protected readonly HORIZONTAL: boolean;
    protected readonly X_OFFSET: number;
    protected readonly Y_OFFSET: number;
    protected previousClientX: number;
    protected previousClientY: number;
    protected pressed: boolean;
    constructor(resizer: HTMLElement, resizable: ResizeUpInterface, VERTICAL?: boolean, HORIZONTAL?: boolean, X_OFFSET?: number, Y_OFFSET?: number);
}
