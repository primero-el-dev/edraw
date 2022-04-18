import AppWindow from "../AppWindow.js";
export default class DrawActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.buttonElement.onclick = () => {
            this.configPanel.renderConfigPanel(configContainer);
            AppWindow.getInstance().clearIntervals();
            this.setListeners();
        };
    }
    setListeners() {
        this.target.removeEventListeners();
        this.addListeners();
    }
    getButtonElement() {
        return this.buttonElement;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd0FjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9EcmF3QWN0aW9uQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE1BQU0sQ0FBQyxPQUFPLE9BQWdCLGdCQUFnQjtJQUUxQyxZQUNjLGFBQTBCLEVBQzFCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QjtRQUh4QixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWxDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQ25ELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdkIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUlNLFlBQVk7UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFTSxnQkFBZ0I7UUFFbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzdCLENBQUM7Q0FDSiJ9