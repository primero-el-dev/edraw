import Canvas from '../Canvas.js'
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import AppWindow from "../AppWindow.js";
import ActionButton from "./ActionButton.js";

export default abstract class DrawActionButton extends ActionButton
{
    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel
    ) {
        super(buttonElement)
    }

    protected onClick(): any
    {
        return () => {
            this.configPanel.renderConfigPanel(this.configContainer)
            AppWindow.getInstance().clearIntervals()
            this.setListeners()
        }
    }

    protected abstract addListeners(): void

    protected setListeners(): void
    {
        this.target.removeEventListeners()
        this.addListeners()
    }

    public getButtonElement(): HTMLElement
    {
        return this.buttonElement
    }
}