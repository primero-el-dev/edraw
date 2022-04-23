import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageAndAnimationActionButton from "./DrawWithTemporaryImageAndAnimationActionButton.js";
import DefaultValueFunctionInterpreter from "../../Dsl/Interpreter/DefaultValueFunctionInterpreter.js";
import ColorFunctionPartial from "./Partial/ColorFunctionPartial.js";
export default class AdvancedPencilButton extends DrawWithTemporaryImageAndAnimationActionButton {
    constructor(buttonElement, target, configContainer, configPanel, interpreter = new DefaultValueFunctionInterpreter()) {
        super(buttonElement, target, configContainer, configPanel);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.interpreter = interpreter;
        this.colorFunctionPartial = new ColorFunctionPartial(this.target, this.configContainer, this.interpreter);
    }
    initContextProperties() {
        this.initLineWidth();
        this.colorFunctionPartial.initColor(this.time);
    }
    drawTo(xEnd, yEnd) {
        this.initLineWidth();
        this.colorFunctionPartial.initColor(this.time);
        this.target.ctx.lineCap = 'round';
        this.target.ctx.beginPath();
        this.target.ctx.moveTo(this.lastMouseDownX, this.lastMouseDownY);
        this.target.ctx.lineTo(this.currentPositionX, this.currentPositionY);
        this.target.ctx.stroke();
        this.lastMouseDownX = this.currentPositionX;
        this.lastMouseDownY = this.currentPositionY;
    }
    drawTemporaryTo(xEnd, yEnd) {
        this.initLineWidth();
        this.colorFunctionPartial.initColor(this.time);
        this.target.ctx.beginPath();
        this.target.ctx.ellipse(this.currentPositionX, this.currentPositionY, this.target.ctx.lineWidth / 2, this.target.ctx.lineWidth / 2, 0, 0, 2 * Math.PI);
        this.target.ctx.closePath();
        this.target.ctx.fill();
    }
    initLineWidth() {
        let lineWidthFunction = this.configContainer.getValueByProperty(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY);
        this.target.ctx.lineWidth = this.interpreter.interpret(lineWidthFunction, { $s: this.time });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2YW5jZWRQZW5jaWxCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRWxlbWVudC9CdXR0b24vQWR2YW5jZWRQZW5jaWxCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyw4Q0FBOEMsTUFBTSxxREFBcUQsQ0FBQztBQUlqSCxPQUFPLCtCQUErQixNQUFNLDBEQUEwRCxDQUFDO0FBRXZHLE9BQU8sb0JBQW9CLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsTUFBTSxDQUFDLE9BQU8sT0FBTyxvQkFBcUIsU0FBUSw4Q0FBOEM7SUFJNUYsWUFDYyxhQUEwQixFQUMxQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsY0FBb0MsSUFBSSwrQkFBK0IsRUFBRTtRQUVuRixLQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFOaEQsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBOEQ7UUFJbkYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM3RyxDQUFDO0lBRVMscUJBQXFCO1FBRTNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRVMsTUFBTSxDQUFDLElBQVksRUFBRSxJQUFZO1FBRXZDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFBO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFBO0lBQy9DLENBQUM7SUFFUyxlQUFlLENBQUMsSUFBWSxFQUFFLElBQVk7UUFFaEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQzdCLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFUyxhQUFhO1FBRW5CLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUN4RyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUE7SUFDOUYsQ0FBQztDQUNKIn0=