import HTMLAttributeDictionary from "./HTMLAttributeDistionary.js";
export default class HTMLElementFactory {
    static createInput(type, attributes = {}) {
        let input = document.createElement('input');
        input.type = type;
        for (let attribute in attributes) {
            input[attribute] = attributes[attribute];
        }
        return input;
    }
    static createActionButton(text, title) {
        let button = document.createElement('button');
        button.title = title;
        button.innerText = text;
        button.classList.add('button--action');
        return button;
    }
    static createConfigRow(configItem) {
        let label = document.createElement('label');
        label.classList.add('config-row');
        let paragraph = document.createElement('span');
        paragraph.classList.add('config-label');
        paragraph.innerText = configItem.getLabel();
        label.append(paragraph);
        label.append(configItem.getElementWithValue());
        return label;
    }
    static createModal(content) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.classList.add(HTMLAttributeDictionary.DISPLAY_NONE_CLASS);
        modal.innerHTML += '<h3 class="modal__header">About <span class="modal__close">&times;</span></h3>'
            + '<div class="modal__content">'
            + content
            + '</div>';
        modal.querySelector('.modal__close').onclick = () => {
            modal.classList.add(HTMLAttributeDictionary.DISPLAY_NONE_CLASS);
        };
        return modal;
    }
    static createAboutModal() {
        return this.createModal('<p class="modal__paragraph">This app was made by Przemek Krogulski from Poland.</p>'
            + '<a target="_blank" href="https://github.com/primero-el-dev">Github</a>'
            + '<p class="modal__paragraph">'
            + 'This app was made to give joy. It\'s still the first version, so there will be changes and fixes in the future.'
            + '</p>'
            + '<p class="modal__paragraph">Issues that I\'ll probably try to repair.</p>'
            + '<a target="_blank" href="https://github.com/primero-el-dev/edraw/issues">Issues</a>'
            + '<p class="modal__paragraph">PS: I\'m not a professional frontend developer but I\'m interested in it.</p>'
            + '</div>');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTEVsZW1lbnRGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VsZW1lbnQvSFRNTEVsZW1lbnRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sdUJBQXVCLE1BQU0sOEJBQThCLENBQUM7QUFFbkUsTUFBTSxDQUFDLE9BQU8sT0FBTyxrQkFBa0I7SUFFNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFZLEVBQUUsYUFBaUMsRUFBRTtRQUV2RSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzNDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLEtBQUssSUFBSSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDM0M7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVksRUFBRSxLQUFhO1FBRXhELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDcEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUV0QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFzQjtRQUVoRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzNDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRWpDLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdkMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUE7UUFFOUMsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBZTtRQUVyQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFFL0QsS0FBSyxDQUFDLFNBQVMsSUFBSSxnRkFBZ0Y7Y0FDN0YsOEJBQThCO2NBQzlCLE9BQU87Y0FDUCxRQUFRLENBQUE7UUFFZCxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNuRSxDQUFDLENBQUE7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUUxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQ25CLHFGQUFxRjtjQUNuRix3RUFBd0U7Y0FDeEUsOEJBQThCO2NBQzlCLGlIQUFpSDtjQUNqSCxNQUFNO2NBQ04sMkVBQTJFO2NBQzNFLHFGQUFxRjtjQUNyRiwyR0FBMkc7Y0FDM0csUUFBUSxDQUNiLENBQUE7SUFDTCxDQUFDO0NBQ0oifQ==