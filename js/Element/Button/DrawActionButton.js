import AppWindow from "../AppWindow.js";
import ActionButton from "./ActionButton.js";
export default class DrawActionButton extends ActionButton {
    constructor(buttonElement, target, configContainer, configPanel, drawStrategy) {
        super(buttonElement);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.drawStrategy = drawStrategy;
    }
    onClick() {
        return () => {
            this.configPanel.renderConfigPanel(this.buttonElement.innerText, this.configContainer);
            AppWindow.getInstance().clearIntervals();
            this.target.removeEventListeners();
            this.drawStrategy.setAction(this.target, this.configContainer);
        };
    }
    getButtonElement() {
        return this.buttonElement;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd0FjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9EcmF3QWN0aW9uQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRzdDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUV0RCxZQUNjLGFBQTBCLEVBQzFCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixZQUFxQztRQUUvQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFOVixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtJQUduRCxDQUFDO0lBRVMsT0FBTztRQUViLE9BQU8sR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDdEYsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRU0sZ0JBQWdCO1FBRW5CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0NBQ0oifQ==