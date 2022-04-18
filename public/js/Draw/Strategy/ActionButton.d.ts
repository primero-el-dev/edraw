import Canvas from './../../Element/Canvas.js';
declare abstract class ActionButton {
    protected initiator: HTMLElement;
    protected target: Canvas;
    protected constructor(initiator: HTMLElement, target: Canvas);
    abstract setListeners(canvas: Canvas): void;
}
export default ActionButton;
