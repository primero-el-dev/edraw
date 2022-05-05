import ActionButton from "./ActionButton.js";
import HTMLElementFactory from "../HTMLElementFactory.js";
import HTMLAttributeDictionary from "../HTMLAttributeDistionary.js";
export default class AboutButton extends ActionButton {
    constructor(buttonElement) {
        super(buttonElement);
        this.buttonElement = buttonElement;
    }
    onClick() {
        if (!this.modal) {
            this.initModal();
        }
        return () => {
            this.modal.classList.toggle(HTMLAttributeDictionary.DISPLAY_NONE_CLASS);
        };
    }
    initModal() {
        this.modal = HTMLElementFactory.createAboutModal();
        document.body.append(this.modal);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJvdXRCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRWxlbWVudC9CdXR0b24vQWJvdXRCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxrQkFBa0IsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLHVCQUF1QixNQUFNLCtCQUErQixDQUFDO0FBRXBFLE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBWSxTQUFRLFlBQVk7SUFJakQsWUFBNkIsYUFBMEI7UUFFbkQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRkssa0JBQWEsR0FBYixhQUFhLENBQWE7SUFHdkQsQ0FBQztJQUVTLE9BQU87UUFFYixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUNuQjtRQUVELE9BQU8sR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDM0UsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVTLFNBQVM7UUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFFbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDSiJ9