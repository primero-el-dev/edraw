import AppWindow from "../../Element/AppWindow.js";
import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";
export default class DrawWithAnimationStrategy extends DrawWithTemporaryImageActionButton {
    constructor() {
        super(...arguments);
        this.RESET_TIME_AFTER_MILLIS = 1000000000;
        this.time = 0;
    }
    setAction(canvas, configContainer) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        const overFunction = e => {
            let intervalId = setInterval(() => {
                this.time += 0.001;
                if (this.time > this.RESET_TIME_AFTER_MILLIS) {
                    this.time = 0;
                }
                this.resolveAction();
                this.lastMouseDownX = this.currentPositionX;
                this.lastMouseDownY = this.currentPositionY;
            }, 1);
            AppWindow.getInstance().addIntervalId(intervalId);
        };
        const startFunction = e => {
            this.lastMouseDownX = e.offsetX;
            this.lastMouseDownY = e.offsetY;
            this.pressed = true;
            this.initContextProperties();
        };
        const moveFunction = e => {
            this.currentPositionX = e.offsetX;
            this.currentPositionY = e.offsetY;
        };
        const endFunction = e => {
            this.restoreLastImageIfPresentAndReset();
            this.drawTo(e.offsetX, e.offsetY);
            this.pressed = false;
            this.additionalOnMouseUp();
        };
        const leaveFunction = e => {
            this.restoreLastImageIfPresentAndReset();
            AppWindow.getInstance().clearIntervals();
        };
        canvas.canvas.onmouseover = overFunction;
        canvas.canvas.onmousedown = startFunction;
        canvas.canvas.ontouchstart = startFunction;
        canvas.canvas.onmouseup = endFunction;
        canvas.canvas.ontouchend = endFunction;
        canvas.canvas.onmousemove = moveFunction;
        canvas.canvas.ontouchmove = moveFunction;
        canvas.canvas.onmouseleave = leaveFunction;
    }
    additionalOnMouseUp() {
    }
    resolveAction() {
        if (this.pressed) {
            this.restoreLastImageIfPresentAndReset();
            this.drawTo(this.currentPositionX, this.currentPositionY);
            this.setLastImageDataToCurrentPainting();
            this.drawTemporaryTo(this.currentPositionX, this.currentPositionY);
        }
        else {
            this.restoreLastImageIfPresentAndReset();
            this.setLastImageDataToCurrentPainting();
            this.drawTemporaryTo(this.currentPositionX, this.currentPositionY);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd1dpdGhBbmltYXRpb25TdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EcmF3L1N0cmF0ZWd5L0RyYXdXaXRoQW5pbWF0aW9uU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxTQUFTLE1BQU0sNEJBQTRCLENBQUM7QUFDbkQsT0FBTyxrQ0FBa0MsTUFBTSxxQ0FBcUMsQ0FBQztBQUVyRixNQUFNLENBQUMsT0FBTyxPQUFnQix5QkFBMEIsU0FBUSxrQ0FBa0M7SUFBbEc7O1FBRXVCLDRCQUF1QixHQUFXLFVBQVUsQ0FBQTtRQUdyRCxTQUFJLEdBQVcsQ0FBQyxDQUFBO0lBOEU5QixDQUFDO0lBdEVVLFNBQVMsQ0FBQyxNQUFjLEVBQUUsZUFBZ0M7UUFFN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUE7UUFFdEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDckIsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUE7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO2lCQUNoQjtnQkFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFBO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtZQUMvQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDTCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQTtRQUVELE1B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