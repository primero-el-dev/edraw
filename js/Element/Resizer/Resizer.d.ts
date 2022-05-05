import ResizeUpInterface from "../ResizeUpInterface.js";
export default class Resizer {
    protected resizer: HTMLElement;
    protected resizable: ResizeUpInterface;
    protected readonly VERTICAL: boolean;
    protected readonly HORIZONTAL: boolean;
    protected previousClientX: number;
    protected previousClientY: number;
    constructor(resizer: HTMLElement, resizable: ResizeUpInterface, VERTICAL?: boolean, HORIZONTAL?: boolean);
}
