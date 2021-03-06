import ConfigItem from "../../Config/ConfigItem.js";
import f from "../../functions.js";
export default class BrushStrategy {
    constructor() {
        this.FPS = 60;
        this.pressed = false;
    }
    setAction(canvas, configContainer) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        const startFunction = e => {
            this.lastX = e.offsetX;
            this.lastY = e.offsetY;
            this.pressed = true;
            setInterval(() => {
                if (this.pressed) {
                    this.drawSingleTick();
                }
            }, 1000 / this.FPS);
        };
        const endFunction = e => {
            this.pressed = false;
        };
        const moveFunction = e => {
            this.lastX = e.offsetX;
            this.lastY = e.offsetY;
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
    drawSingleTick() {
        let lineWidth = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY);
        let brushDiameter = this.configContainer.getValueAsNumber(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY);
        this.canvas.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY);
        this.canvas.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
        this.canvas.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
        for (let i = 0; i < this.configContainer.getValueAsNumber(ConfigItem.TOUCHES_PER_TICK_PROPERTY); i++) {
            let radius = f.randomInt(0, (brushDiameter - lineWidth) / 2);
            let angleRatio = Math.random();
            let dx = Math.sin(angleRatio * Math.PI * 2) * radius;
            let dy = Math.cos(angleRatio * Math.PI * 2) * radius;
            this.canvas.ctx.beginPath();
            this.canvas.ctx.ellipse(this.lastX + dx, this.lastY + dy, lineWidth / 2, lineWidth / 2, 0, 0, 2 * Math.PI);
            this.canvas.ctx.fill();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJ1c2hTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EcmF3L1N0cmF0ZWd5L0JydXNoU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxVQUFVLE1BQU0sNEJBQTRCLENBQUM7QUFFcEQsT0FBTyxDQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxhQUFhO0lBQWxDO1FBRXFCLFFBQUcsR0FBVyxFQUFFLENBQUE7UUFHekIsWUFBTyxHQUFZLEtBQUssQ0FBQTtJQW1FcEMsQ0FBQztJQS9EVSxTQUFTLENBQUMsTUFBYyxFQUFFLGVBQWdDO1FBRTdELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFBO1FBRXRDLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFFbkIsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2lCQUN4QjtZQUNMLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQTtRQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLENBQUMsQ0FBQTtRQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZ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