import ResizeUpInterface from "../ResizeUpInterface.js";

export default class Resizer
{
    protected previousClientX: number = null
    protected previousClientY: number = null
    protected pressed: boolean = false

    public constructor(
        protected resizer: HTMLElement,
        protected resizable: ResizeUpInterface,
        protected readonly VERTICAL: boolean = false,
        protected readonly HORIZONTAL: boolean = false,
        protected readonly X_OFFSET: number = 30,
        protected readonly Y_OFFSET: number = 28
    ) {
        // this.resizer.addEventListener('mousedown', e => {
        //     this.pressed = true
        // })
        // this.resizer.addEventListener('mouseup', e => {
        //     this.pressed = false
        // })
        // this.resizer.addEventListener('mousemove', e => {
        //     if (this.pressed) {
        //         this.previousClientX = this.previousClientX || e.clientX
        //         this.previousClientY = this.previousClientY || e.clientY
        //         this.resizable.resizeUp(
        //             this.HORIZONTAL ? (e.clientX - Math.abs(this.previousClientX)) : 0,
        //             this.VERTICAL ? (e.clientY - Math.abs(this.previousClientY)) : 0
        //         )
        //         this.previousClientX = e.clientX
        //         this.previousClientY = e.offsetY
        //     }
        // })
        this.resizer.addEventListener('drag', e => {
            console.log(e.clientY + ', ' + this.previousClientY)
            console.log(e.clientY - this.previousClientY)
            this.previousClientX = this.previousClientX || e.clientX
            this.previousClientY = this.previousClientY || e.clientY
            this.resizable.resizeUp(
                this.HORIZONTAL ? (e.clientX - Math.abs(this.previousClientX)) : 0,
                this.VERTICAL ? (e.clientY - Math.abs(this.previousClientY)) : 0
            )
            this.previousClientX = e.clientX
            this.previousClientY = -e.offsetY
        })
    }
}