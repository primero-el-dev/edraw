import ConfigInputAdapterTemplate from "./ConfigInputAdapterTemplate.js";
export default class ConfigCheckboxAdapter extends ConfigInputAdapterTemplate {
    setValueFromElement() {
        this.value = this.input.checked ? 'true' : 'false';
    }
    initInputValue(value) {
        this.input.checked = value === 'true';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnQ2hlY2tib3hBZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VsZW1lbnQvSW5wdXQvQ29uZmlnQ2hlY2tib3hBZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sMEJBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFFekUsTUFBTSxDQUFDLE9BQU8sT0FBTyxxQkFBc0IsU0FBUSwwQkFBMEI7SUFFL0QsbUJBQW1CO1FBRXpCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO0lBQ3RELENBQUM7SUFFUyxjQUFjLENBQUMsS0FBYTtRQUVsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssTUFBTSxDQUFBO0lBQ3pDLENBQUM7Q0FDSiJ9