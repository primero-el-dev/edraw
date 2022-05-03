export default abstract class ActionButton
{
    protected constructor(protected buttonElement: HTMLElement)
    {
        this.buttonElement.onclick = this.onClick()
    }

    protected abstract onClick(): any

    public getButtonElement(): HTMLElement
    {
        return this.buttonElement
    }
}