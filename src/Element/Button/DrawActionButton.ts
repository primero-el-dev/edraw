import Canvas from '../Canvas.js'
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import AppWindow from "../AppWindow.js";
import ActionButton from "./ActionButton.js";
import SetCanvasActionStrategy from "../../Draw/Strategy/SetCanvasActionStrategy.js";

export default class DrawActionButton extends ActionButton
{
    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel,
        protected drawStrategy: SetCanvasActionStrategy
    ) {
        super(buttonElement)
    }

    protected onClick(): any
    {
        return () => {
            this.configPanel.renderConfigPanel(this.buttonElement.innerText, this.configContainer)
            AppWindow.getInstance().clearIntervals()
            this.target.removeEventListeners()
            this.drawStrategy.setAction(this.target, this.configContainer)
        }
    }

    public getButtonElement(): HTMLElement
    {
        return this.buttonElement
    }
}