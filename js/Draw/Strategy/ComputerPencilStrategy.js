import ConfigItem from "../../Config/ConfigItem.js";
export default class ComputerPencilStrategy {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcHV0ZXJQZW5jaWxTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EcmF3L1N0cmF0ZWd5L0NvbXB1dGVyUGVuY2lsU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxVQUFVLE1BQU0sNEJBQTRCLENBQUM7QUFJcEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxzQkFBc0I7SUFBM0M7UUFJWSxZQUFPLEdBQVksS0FBSyxDQUFBO0lBNENwQyxDQUFDO0lBMUNVLFNBQVMsQ0FBQyxNQUFjLEVBQUUsZUFBZ0M7UUFFN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7WUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3RGLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDcEYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUN0RixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNWLENBQUMsQ0FBQyxPQUFPLEVBQ1QsQ0FBQyxDQUFDLE9BQU8sRUFDVCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUNwRSxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQ1gsS0FBSyxDQUNSLENBQUE7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3JCLENBQUMsQ0FBQTtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLENBQUMsQ0FBQTtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7Z0JBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQ3BGLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQ3RGLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtnQkFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtnQkFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTthQUN6QjtRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FDSiJ9