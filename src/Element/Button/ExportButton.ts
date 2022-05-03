import Canvas from "../Canvas.js";
import ActionButton from "./ActionButton.js";

export default class ExportButton extends ActionButton
{
    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas
    ) {
        super(buttonElement)
    }

    protected onClick(): any
    {
        return () => {
            const link = document.createElement('a')
            link.download = 'edraw_image_download.png'
            link.href = this.target.canvas.toDataURL()
            link.click()
        }
    }
}