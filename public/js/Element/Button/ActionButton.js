export default class ActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.buttonElement.onclick = () => {
            this.configPanel.renderConfigPanel(configContainer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VsZW1lbnQvQnV0dG9uL0FjdGlvbkJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsT0FBTyxPQUFnQixZQUFZO0lBRXRDLFlBQ2MsYUFBMEIsRUFDMUIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCO1FBSHhCLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDbkQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3ZCLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFJTSxZQUFZO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRU0sZ0JBQWdCO1FBRW5CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0NBQ0oifQ==