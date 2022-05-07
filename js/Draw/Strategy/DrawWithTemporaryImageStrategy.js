export default class DrawWithTemporaryImageActionButton {
    constructor() {
        this.lastMouseDownX = null;
        this.lastMouseDownY = null;
        this.pressed = false;
        this.lastImageData = null;
    }
    setAction(canvas, configContainer) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        const startFunction = e => {
            this.lastMouseDownX = e.offsetX;
            this.lastMouseDownY = e.offsetY;
            this.pressed = true;
            this.initContextProperties();
        };
        const endFunction = e => {
            this.restoreLastImageIfPresentAndReset();
            this.drawTo(e.offsetX, e.offsetY);
            this.lastMouseDownX = null;
            this.lastMouseDownY = null;
            this.pressed = false;
        };
        const moveFunction = e => {
            if (this.pressed) {
                this.restoreLastImageIfPresentAndReset();
                this.setLastImageDataToCurrentPainting();
                this.drawTemporaryTo(e.offsetX, e.offsetY);
            }
        };
        canvas.canvas.onmouseover = null;
        canvas.canvas.onmousedown = startFunction;
        canvas.canvas.ontouchstart = startFunction;
        canvas.canvas.onmouseup = endFunction;
        canvas.canvas.ontouchend = endFunction;
        canvas.canvas.onmousemove = moveFunction;
        canvas.canvas.ontouchmove = moveFunction;
        canvas.canvas.onmouseleave = null;
    }
    restoreLastImageIfPresentAndReset() {
        if (this.lastImageData) {
            this.canvas.ctx.putImageData(this.lastImageData, 0, 0);
            this.lastImageData = null;
        }
    }
    setLastImageDataToCurrentPainting() {
        this.lastImageData = this.canvas.ctx.getImageData(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
    }
    drawTemporaryTo(xEnd, yEnd) {
        this.drawTo(xEnd, yEnd);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd1dpdGhUZW1wb3JhcnlJbWFnZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RyYXcvU3RyYXRlZ3kvRHJhd1dpdGhUZW1wb3JhcnlJbWFnZVN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxPQUFPLE9BQWdCLGtDQUFrQztJQUFoRTtRQUljLG1CQUFjLEdBQWdCLElBQUksQ0FBQTtRQUNsQyxtQkFBYyxHQUFnQixJQUFJLENBQUE7UUFDbEMsWUFBTyxHQUFZLEtBQUssQ0FBQTtRQUN4QixrQkFBYSxHQUFtQixJQUFJLENBQUE7SUE2RGxELENBQUM7SUF2RFUsU0FBUyxDQUFDLE1BQWMsRUFBRSxlQUFnQztRQUU3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQTtRQUV0QyxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO1FBQ2hDLENBQUMsQ0FBQTtRQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUE7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUE7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDeEIsQ0FBQyxDQUFBO1FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO2dCQUN4QyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUM3QztRQUNMLENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQTtRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUE7UUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQTtRQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7SUFDckMsQ0FBQztJQUVTLGlDQUFpQztRQUV2QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1NBQzVCO0lBQ0wsQ0FBQztJQUVTLGlDQUFpQztRQUV2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNoSCxDQUFDO0lBRVMsZUFBZSxDQUFDLElBQVksRUFBRSxJQUFZO1FBRWhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDSiJ9