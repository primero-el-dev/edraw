import DrawActionButton from "./DrawActionButton.js";
export default class DrawWithTemporaryImageActionButton extends DrawActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        super(buttonElement, target, configContainer, configPanel);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.lastMouseDownX = null;
        this.lastMouseDownY = null;
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
                this.drawTemporaryTo(e.offsetX, e.offsetY);
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
    restoreLastImageIfPresentAndReset() {
        if (this.lastImageData) {
            this.target.ctx.putImageData(this.lastImageData, 0, 0);
            this.lastImageData = null;
        }
    }
    setLastImageDataToCurrentPainting() {
        this.lastImageData = this.target.ctx.getImageData(0, 0, this.target.canvas.width, this.target.canvas.height);
    }
    drawTemporaryTo(xEnd, yEnd) {
        this.drawTo(xEnd, yEnd);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd1dpdGhUZW1wb3JhcnlJbWFnZUFjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9EcmF3V2l0aFRlbXBvcmFyeUltYWdlQWN0aW9uQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCLE1BQU0sdUJBQXVCLENBQUM7QUFLckQsTUFBTSxDQUFDLE9BQU8sT0FBZ0Isa0NBQW1DLFNBQVEsZ0JBQWdCO0lBT3JGLFlBQ2MsYUFBMEIsRUFDMUIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCO1FBRWxDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUxoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVDVCLG1CQUFjLEdBQWdCLElBQUksQ0FBQTtRQUNsQyxtQkFBYyxHQUFnQixJQUFJLENBQUE7UUFDbEMsWUFBTyxHQUFZLEtBQUssQ0FBQTtRQUN4QixrQkFBYSxHQUFtQixJQUFJLENBQUE7SUFTOUMsQ0FBQztJQU1NLFlBQVk7UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtRQUNoQyxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFBO2dCQUN4QyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUM3QztRQUNMLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQTtZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO1lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFTSxZQUFZO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRU0sZ0JBQWdCO1FBRW5CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0lBRVMsaUNBQWlDO1FBRXZDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7U0FDNUI7SUFDTCxDQUFDO0lBRVMsaUNBQWlDO1FBRXZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hILENBQUM7SUFFUyxlQUFlLENBQUMsSUFBWSxFQUFFLElBQVk7UUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztDQUNKIn0=