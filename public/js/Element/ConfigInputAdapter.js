export default class ConfigInputAdapter {
    constructor(input, storageKey, defaultValue) {
        this.input = input;
        this.storageKey = storageKey;
        this.initValue(defaultValue);
        this.input.addEventListener('click', e => {
            this.setValueFromElement();
            localStorage.setItem(this.storageKey, this.value);
        });
    }
    setValue(value) {
        this.value = value;
        localStorage.setItem(this.storageKey, this.value);
        return this;
    }
    getValue() {
        return this.value;
    }
    initValue(defaultValue) {
        this.initLocalStorageIfKeyMissing(defaultValue);
        this.value = localStorage.getItem(this.storageKey);
        this.input.value = this.value;
    }
    initLocalStorageIfKeyMissing(defaultValue) {
        if (typeof localStorage.getItem(this.storageKey) !== 'string') {
            localStorage.setItem(this.storageKey, defaultValue);
        }
    }
    setValueFromElement() {
        if (this.input.type === 'checkbox') {
            this.value = this.input.checked;
        }
        else {
            this.value = this.input.value;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnSW5wdXRBZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VsZW1lbnQvQ29uZmlnSW5wdXRBZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sa0JBQWtCO0lBSXJDLFlBQ1ksS0FBdUIsRUFDdkIsVUFBa0IsRUFDNUIsWUFBb0I7UUFGVixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBRzVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDMUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBYTtRQUUzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWpELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVNLFFBQVE7UUFFYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVTLFNBQVMsQ0FBQyxZQUFvQjtRQUV0QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQy9CLENBQUM7SUFFUyw0QkFBNEIsQ0FBQyxZQUFvQjtRQUV6RCxJQUFJLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzdELFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQTtTQUNwRDtJQUNILENBQUM7SUFFUyxtQkFBbUI7UUFFM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQTRCLENBQUE7U0FDckQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7U0FDOUI7SUFDSCxDQUFDO0NBQ0YifQ==