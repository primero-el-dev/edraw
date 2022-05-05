export default abstract class ActionButton {
    protected buttonElement: HTMLElement;
    protected constructor(buttonElement: HTMLElement);
    protected abstract onClick(): any;
    getButtonElement(): HTMLElement;
}
