export default class Resizer2 {
    constructor(resizer, resizable, VERTICAL = false, HORIZONTAL = false, X_OFFSET = 30, Y_OFFSET = 28) {
        this.resizer = resizer;
        this.resizable = resizable;
        this.VERTICAL = VERTICAL;
        this.HORIZONTAL = HORIZONTAL;
        this.X_OFFSET = X_OFFSET;
        this.Y_OFFSET = Y_OFFSET;
        this.previousClientX = null;
        this.previousClientY = null;
        this.pressed = false;
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
        this.resizer.addEventListener('dragstart', e => {
            this.previousClientX = e.clientX;
            this.previousClientY = e.clientY;
        });
        this.resizer.addEventListener('drag', e => {
            this.previousClientX = this.previousClientX || e.clientX;
            this.previousClientY = this.previousClientY || e.clientY;
            // this.resizable.style.width = (parseInt(this.resizable.style.width) + e.clientX - this.previousClientX) + 'px'
            // this.resizable.style.height = (parseInt(this.resizable.style.height) + e.clientY - this.previousClientY) + 'px'
            this.resizable.resizeUp(this.HORIZONTAL ? (e.clientX - Math.abs(this.previousClientX)) : 0, this.VERTICAL ? (e.clientY - Math.abs(this.previousClientY)) : 0);
            this.previousClientX = e.clientX;
            this.previousClientY = e.offsetY;
        });
        this.resizer.addEventListener('dragleave', e => {
            this.previousClientX = null;
            this.previousClientY = null;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplcjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRWxlbWVudC9SZXNpemVyL1Jlc2l6ZXIyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sUUFBUTtJQU16QixZQUNjLE9BQW9CLEVBQ3BCLFNBQTRCLEVBQ25CLFdBQW9CLEtBQUssRUFDekIsYUFBc0IsS0FBSyxFQUMzQixXQUFtQixFQUFFLEVBQ3JCLFdBQW1CLEVBQUU7UUFMOUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFWbEMsb0JBQWUsR0FBVyxJQUFJLENBQUE7UUFDOUIsb0JBQWUsR0FBVyxJQUFJLENBQUE7UUFDOUIsWUFBTyxHQUFZLEtBQUssQ0FBQTtRQVU5QixvREFBb0Q7UUFDcEQsMEJBQTBCO1FBQzFCLEtBQUs7UUFDTCxrREFBa0Q7UUFDbEQsMkJBQTJCO1FBQzNCLEtBQUs7UUFDTCxvREFBb0Q7UUFDcEQsMEJBQTBCO1FBQzFCLG1FQUFtRTtRQUNuRSxtRUFBbUU7UUFDbkUsbUNBQW1DO1FBQ25DLGtGQUFrRjtRQUNsRiwrRUFBK0U7UUFDL0UsWUFBWTtRQUNaLDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsUUFBUTtRQUNSLEtBQUs7UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDeEQsZ0hBQWdIO1lBQ2hILGtIQUFrSDtZQUNsSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQTtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7UUFDcEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSiJ9