import Canvas from "../Canvas.js";
import ActionButton from "./ActionButton.js";

export default class ImportButton extends ActionButton
{
    protected importInput: HTMLInputElement

    public constructor(
        protected buttonElement: HTMLElement,
        protected target: Canvas
    ) {
        super(buttonElement)
    }

    protected onClick(): any
    {
        if (!this.importInput) {
            this.initImportInput()
            this.assignImportInputClickEvent()
        }

        return () => this.importInput.click()
    }

    protected initImportInput(): void
    {
        this.importInput = document.createElement('input')
        this.importInput.setAttribute('type', 'file')
        this.importInput.setAttribute('id', 'importImage')
        this.importInput.style.display = 'none'

        document.body.append(this.importInput)
    }

    protected assignImportInputClickEvent(): void
    {
        this.importInput.onchange = () => {
            console.log(21)
            let img = new Image()
            let reader = new FileReader()
            reader.onload = event => {
                img.onload = () => {
                    this.target.resize(img.width, img.height)
                    this.target.ctx.drawImage(img, 0, 0)
                }
                img.src = event.target.result as unknown as string
            }
            reader.readAsDataURL(this.importInput.files[0])
        }
    }
}