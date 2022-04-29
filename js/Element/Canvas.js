export default class Canvas {
    constructor(canvas, configContainer) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        this.configureCanvasSize();
        this.initContext();
    }
    configureCanvasSize() {
        // this.canvas.width = this.canvas.offsetWidth
        // this.canvas.height = this.canvas.offsetHeight
        this.canvas.style.width = this.canvas.offsetWidth + 'px';
        this.canvas.style.height = this.canvas.offsetHeight + 'px';
    }
    resize(width, height) {
        let imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = width;
        this.canvas.height = height;
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
    resizeUp(width, height) {
        let imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        // this.canvas.width += width
        // this.canvas.height += height
        // this.canvas.style.width = this.canvas.width > 0 ? (this.canvas.width + 'px') : '1px'
        // this.canvas.style.height = this.canvas.height > 0 ? (this.canvas.height + 'px') : '1px'
        this.canvas.style.width = (parseInt(this.canvas.style.width) + width) + 'px';
        this.canvas.style.height = (parseInt(this.canvas.style.height) + height) + 'px';
        // this.canvas.width = this.canvas.offsetWidth
        // this.canvas.height = this.canvas.offsetHeight
        this.ctx.putImageData(imageData, 0, 0);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VsZW1lbnQvQ2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sTUFBTTtJQUl2QixZQUNXLE1BQXlCLEVBQ3hCLGVBQWdDO1FBRGpDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUV4QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVNLG1CQUFtQjtRQUV0Qiw4Q0FBOEM7UUFDOUMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtJQUM5RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQWEsRUFBRSxNQUFjO1FBRXZDLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3RixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVNLG9CQUFvQjtRQUV2QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO0lBQ2pDLENBQUM7SUFFUyxXQUFXO1FBRWpCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBc0IsQ0FBQTtJQUNsRyxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWEsRUFBRSxNQUFjO1FBRXpDLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3Riw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLHVGQUF1RjtRQUN2RiwwRkFBMEY7UUFDMUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQy9FLDhDQUE4QztRQUM5QyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0NBQ0oifQ==