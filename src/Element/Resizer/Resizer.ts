import ResizeUpInterface from "../ResizeUpInterface.js";

export default class Resizer
{
    protected previousClientX: number = null
    protected previousClientY: number = null

    public constructor(
        protected resizer: HTMLElement,
        protected resizable: ResizeUpInterface,
        protected readonly VERTICAL: boolean = false,
        protected readonly HORIZONTAL: boolean = false
    ) {
        this.resizer.addEventListener('dragstart', e => {
            this.previousClientX = e.clientX
            this.previousClientY = e.clientY
        })
        this.resizer.addEventListener('drag', e => {
            this.previousClientX = this.previousClientX || e.clientX
            this.previousClientY = this.previousClientY || e.clientY
            this.resizable.resizeUp(
                this.HORIZONTAL ? (e.clientX - Math.abs(this.previousClientX)) : 0,
                this.VERTICAL ? (e.clientY - Math.abs(this.previousClientY)) : 0
            )
            this.previousClientX = e.clientX
            this.previousClientY = e.offsetY
        })
        this.resizer.addEventListener('dragleave', e => {
            this.previousClientX = null
            this.previousClientY = null
        })
    }
}