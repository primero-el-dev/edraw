import ConfigItem from "../../Config/ConfigItem.js";
export default class ComputerLineStrategy {
    constructor() {
        this.pressed = false;
    }
    setAction(canvas, configContainer) {
        canvas.canvas.onmousedown = e => {
            this.lastX = e.offsetX;
            this.lastY = e.offsetY;
            this.pressed = true;
            canvas.ctx.lineWidth = configContainer.getLineWidth();
            canvas.ctx.globalAlpha = configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY);
            canvas.ctx.fillStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
            canvas.ctx.strokeStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
            canvas.ctx.beginPath();
            canvas.ctx.moveTo(this.lastX, this.lastY);
            canvas.ctx.arc(e.offsetX, e.offsetY, configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY) / 2, 0, 2 * Math.PI, false);
            canvas.ctx.fill();
        };
        canvas.canvas.onmouseup = e => {
            this.lastX = null;
            this.lastY = null;
            this.pressed = false;
        };
        canvas.canvas.onmousemove = e => {
            if (this.pressed) {
                canvas.ctx.lineWidth = configContainer.getLineWidth();
                canvas.ctx.fillStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
                canvas.ctx.strokeStyle = configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
                canvas.ctx.lineCap = 'round';
                canvas.ctx.beginPath();
                canvas.ctx.moveTo(this.lastX, this.lastY);
                canvas.ctx.lineTo(e.offsetX, e.offsetY);
                canvas.ctx.stroke();
                this.lastX = e.offsetX;
                this.lastY = e.offsetY;
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcHV0ZXJMaW5lU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRHJhdy9TdHJhdGVneS9Db21wdXRlckxpbmVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUdwRCxNQUFNLENBQUMsT0FBTyxPQUFPLG9CQUFvQjtJQUF6QztRQUlZLFlBQU8sR0FBWSxLQUFLLENBQUE7SUE0Q3BDLENBQUM7SUExQ1UsU0FBUyxDQUFDLE1BQWMsRUFBRSxlQUFnQztRQUU3RCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDdEYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUNwRixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ3RGLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1YsQ0FBQyxDQUFDLE9BQU8sRUFDVCxDQUFDLENBQUMsT0FBTyxFQUNULGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQ3BFLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDWCxLQUFLLENBQ1IsQ0FBQTtZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFBO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDeEIsQ0FBQyxDQUFBO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtnQkFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDcEYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDdEYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO2dCQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO2dCQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO2FBQ3pCO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNKIn0=