import ActionButton from "./ActionButton.js";
export default class ImportButton extends ActionButton {
    constructor(buttonElement, target) {
        super(buttonElement);
        this.buttonElement = buttonElement;
        this.target = target;
    }
    onClick() {
        if (!this.importInput) {
            this.initImportInput();
            this.assignImportInputClickEvent();
        }
        return () => this.importInput.click();
    }
    initImportInput() {
        this.importInput = document.createElement('input');
        this.importInput.setAttribute('type', 'file');
        this.importInput.setAttribute('id', 'importImage');
        this.importInput.style.display = 'none';
        document.body.append(this.importInput);
    }
    assignImportInputClickEvent() {
        this.importInput.onchange = () => {
            console.log(21);
            let img = new Image();
            let reader = new FileReader();
            reader.onload = event => {
                img.onload = () => {
                    this.target.resize(img.width, img.height);
                    this.target.ctx.drawImage(img, 0, 0);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(this.importInput.files[0]);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wb3J0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VsZW1lbnQvQnV0dG9uL0ltcG9ydEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxNQUFNLENBQUMsT0FBTyxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBSWxELFlBQ2MsYUFBMEIsRUFDMUIsTUFBYztRQUV4QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFIVixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRzVCLENBQUM7SUFFUyxPQUFPO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQ3RCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFBO1NBQ3JDO1FBRUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3pDLENBQUM7SUFFUyxlQUFlO1FBRXJCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7UUFFdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFUywyQkFBMkI7UUFFakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDZixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFBO1lBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7WUFDN0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN4QyxDQUFDLENBQUE7Z0JBQ0QsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQTJCLENBQUE7WUFDdEQsQ0FBQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25ELENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FDSiJ9