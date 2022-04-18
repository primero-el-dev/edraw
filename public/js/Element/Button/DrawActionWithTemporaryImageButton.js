import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem";
export default class DrawActionWithTemporaryImageButton extends DrawActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        super(buttonElement, target, configContainer, configPanel);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.pressed = false;
        this.lastImageData = null;
    }
    addListeners() {
        this.target.canvas.onmousedown = e => {
            this.lastMouseDownX = e.offsetX;
            this.lastMouseDownY = e.offsetY;
            this.pressed = true;
            this.initContextProperties();
        };
        this.target.canvas.onmousemove = e => {
            if (this.pressed) {
                this.restoreLastImageIfPresentAndReset();
                this.setLastImageDataToCurrentPainting();
                this.drawTo(e.offsetX, e.offsetY);
            }
        };
        this.target.canvas.onmouseup = e => {
            this.restoreLastImageIfPresentAndReset();
            this.drawTo(e.offsetX, e.offsetY);
            this.lastMouseDownX = null;
            this.lastMouseDownY = null;
            this.pressed = false;
        };
    }
    setListeners() {
        this.target.removeEventListeners();
        this.addListeners();
    }
    getButtonElement() {
        return this.buttonElement;
    }
    initContextProperties() {
        this.target.ctx.lineWidth = this.configContainer.getLineWidth();
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY);
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
    }
    restoreLastImageIfPresentAndReset() {
        if (this.lastImageData) {
            this.target.ctx.putImageData(this.lastImageData, 0, 0);
            this.lastImageData = null;
        }
    }
    setLastImageDataToCurrentPainting() {
        this.lastImageData = this.target.ctx.getImageData(0, 0, this.target.canvas.width, this.target.canvas.height);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd0FjdGlvbldpdGhUZW1wb3JhcnlJbWFnZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9EcmF3QWN0aW9uV2l0aFRlbXBvcmFyeUltYWdlQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxVQUFVLE1BQU0seUJBQXlCLENBQUM7QUFLakQsTUFBTSxDQUFDLE9BQU8sT0FBZ0Isa0NBQW1DLFNBQVEsZ0JBQWdCO0lBT3JGLFlBQ2MsYUFBMEIsRUFDMUIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCO1FBRWxDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUxoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUDlCLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsa0JBQWEsR0FBbUIsSUFBSSxDQUFBO0lBUzVDLENBQUM7SUFJTSxZQUFZO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7UUFDaEMsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUE7Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDcEM7UUFDTCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUE7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQTtZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDLENBQUE7SUFDTCxDQUFDO0lBRU0sWUFBWTtRQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVNLGdCQUFnQjtRQUVuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDN0IsQ0FBQztJQUVTLHFCQUFxQjtRQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNoRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDcEcsQ0FBQztJQUVTLGlDQUFpQztRQUV2QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1NBQzVCO0lBQ0wsQ0FBQztJQUVTLGlDQUFpQztRQUV2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNoSCxDQUFDO0NBQ0oifQ==