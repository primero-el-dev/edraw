import AppWindow from "../AppWindow.js";
import ActionButton from "./ActionButton.js";
export default class DrawActionButton extends ActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        super(buttonElement);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
    }
    onClick() {
        return () => {
            this.configPanel.renderConfigPanel(this.configContainer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd0FjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9EcmF3QWN0aW9uQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE1BQU0sQ0FBQyxPQUFPLE9BQWdCLGdCQUFpQixTQUFRLFlBQVk7SUFFL0QsWUFDYyxhQUEwQixFQUMxQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0I7UUFFbEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBTFYsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUd0QyxDQUFDO0lBRVMsT0FBTztRQUViLE9BQU8sR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDeEQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUN2QixDQUFDLENBQUE7SUFDTCxDQUFDO0lBSVMsWUFBWTtRQUVsQixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFTSxnQkFBZ0I7UUFFbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzdCLENBQUM7Q0FDSiJ9