import DrawActionButton from "./DrawActionButton.js";
export default class ExportButton extends DrawActionButton {
    constructor(buttonElement, target, configContainer, configPanel) {
        super(buttonElement, target, configContainer, configPanel);
        this.buttonElement = buttonElement;
        this.target = target;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
        this.buttonElement.addEventListener('click', e => {
            const link = document.createElement('a');
            link.download = 'download.png';
            link.href = this.target.canvas.toDataURL();
            link.click();
        });
    }
    addListeners() {
        //
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwb3J0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VsZW1lbnQvQnV0dG9uL0V4cG9ydEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGdCQUFnQixNQUFNLHVCQUF1QixDQUFDO0FBS3JELE1BQU0sQ0FBQyxPQUFPLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjtJQUV0RCxZQUNjLGFBQTBCLEVBQzFCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QjtRQUVsQyxLQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFMaEQsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFBO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLFlBQVk7UUFFZixFQUFFO0lBQ04sQ0FBQztDQUNKIn0=