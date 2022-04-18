export default class Canvas {
    constructor(canvas, configContainer) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        this.configureCanvasSize();
        this.initContext();
    }
    configureCanvasSize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    onResize() {
        let imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.ctx.putImageData(imageData, 0, 0);
    }
    removeEventListeners() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
        this.canvas.onmouseover = null;
        this.canvas.onmouseout = null;
    }
    initContext() {
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = this.configContainer.getValueByProperty('color');
        this.ctx.lineWidth = this.configContainer.getValueByProperty('lineWidth');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VsZW1lbnQvQ2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sTUFBTTtJQUl2QixZQUNXLE1BQXlCLEVBQ3hCLGVBQWdDO1FBRGpDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUV4QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVNLG1CQUFtQjtRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQTtJQUNqRCxDQUFDO0lBRU0sUUFBUTtRQUVYLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3RixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQTtRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTSxvQkFBb0I7UUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtJQUNqQyxDQUFDO0lBRVMsV0FBVztRQUVqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQXNCLENBQUE7SUFDbEcsQ0FBQztDQUNKIn0=