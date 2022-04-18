import DrawActionButton from "./DrawActionButton.js";
import Canvas from "../Canvas";
import ConfigContainer from "../../Config/ConfigContainer";
import ConfigPanel from "../ConfigPanel";

export default class ExportButton extends DrawActionButton
{
    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas,
        protected configContainer: ConfigContainer,
        protected configPanel: ConfigPanel
    ) {
        super(buttonElement, target, configContainer, configPanel)
        this.buttonElement.addEventListener('click', e => {
            const link = document.createElement('a')
            link.download = 'download.png'
            link.href = this.target.canvas.toDataURL()
            link.click()
        })
    }

    public addListeners(): void
    {
        //
    }
}