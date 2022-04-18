import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageActionButton.js";
import AppWindow from "../AppWindow.js";
export default class DrawWithTemporaryImageAndAnimationActionButton extends DrawWithTemporaryImageActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        super(buttonElement, target, configContainer, configPanel);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.RESET_TIME_AFTER_MILLIS = 1000000000;
        this.time = 0;
    }
    addListeners() {
        this.target.canvas.onmouseover = e => {
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
        this.target.canvas.onmousedown = e => {
            this.lastMouseDownX = e.offsetX;
            this.lastMouseDownY = e.offsetY;
            this.pressed = true;
            this.initContextProperties();
        };
        this.target.canvas.onmousemove = e => {
            this.currentPositionX = e.offsetX;
            this.currentPositionY = e.offsetY;
        };
        this.target.canvas.onmouseup = e => {
            this.restoreLastImageIfPresentAndReset();
            this.drawTo(e.offsetX, e.offsetY);
            this.pressed = false;
            this.additionalOnMouseUp();
        };
        this.target.canvas.onmouseout = e => {
            this.restoreLastImageIfPresentAndReset();
            AppWindow.getInstance().clearIntervals();
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd1dpdGhUZW1wb3JhcnlJbWFnZUFuZEFuaW1hdGlvbkFjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9EcmF3V2l0aFRlbXBvcmFyeUltYWdlQW5kQW5pbWF0aW9uQWN0aW9uQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sa0NBQWtDLE1BQU0seUNBQXlDLENBQUM7QUFDekYsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsTUFBTSxDQUFDLE9BQU8sT0FBZ0IsOENBQStDLFNBQVEsa0NBQWtDO0lBT25ILFlBQ2MsYUFBMEIsRUFDMUIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCO1FBRWxDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUxoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVG5CLDRCQUF1QixHQUFXLFVBQVUsQ0FBQTtRQUNyRCxTQUFJLEdBQVcsQ0FBQyxDQUFBO0lBVzFCLENBQUM7SUFNTSxZQUFZO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFBO2dCQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtpQkFDaEI7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtnQkFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7WUFDL0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ0wsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNyRCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtRQUNoQyxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7UUFDckMsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDOUIsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO1lBQ3hDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUM1QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRVMsbUJBQW1CO0lBRzdCLENBQUM7SUFFUyxhQUFhO1FBRW5CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3pELElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO1lBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQ3JFO2FBQU07WUFDSCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQTtZQUN4QyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQTtZQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtTQUNyRTtJQUNMLENBQUM7Q0FDSiJ9