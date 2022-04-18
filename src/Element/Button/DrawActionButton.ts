import Canvas from '../Canvas.js'
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import AppWindow from "../AppWindow.js";

export default abstract class DrawActionButton
{
    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel
    ) {
        this.buttonElement.onclick = () => {
            this.configPanel.renderConfigPanel(configContainer)
            AppWindow.getInstance().clearIntervals()
            this.setListeners()
        }
    }

    public abstract addListeners(): void

    public setListeners(): void
    {
        this.target.removeEventListeners()
        this.addListeners()
    }

    public getButtonElement(): HTMLElement
    {
        return this.buttonElement
    }
}