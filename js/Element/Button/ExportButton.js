import ActionButton from "./ActionButton.js";
export default class ExportButton extends ActionButton {
    constructor(buttonElement, target) {
        super(buttonElement);
        this.buttonElement = buttonElement;
        this.target = target;
    }
    onClick() {
        return () => {
            const link = document.createElement('a');
            link.download = 'edraw_image_download.png';
            link.href = this.target.canvas.toDataURL();
            link.click();
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwb3J0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VsZW1lbnQvQnV0dG9uL0V4cG9ydEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxNQUFNLENBQUMsT0FBTyxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBRWxELFlBQ2MsYUFBMEIsRUFDMUIsTUFBYztRQUV4QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFIVixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRzVCLENBQUM7SUFFUyxPQUFPO1FBRWIsT0FBTyxHQUFHLEVBQUU7WUFDUixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsMEJBQTBCLENBQUE7WUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDaEIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNKIn0=