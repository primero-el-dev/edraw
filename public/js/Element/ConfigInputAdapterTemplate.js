export default class ConfigInputAdapterTemplate {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnSW5wdXRBZGFwdGVyVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRWxlbWVudC9Db25maWdJbnB1dEFkYXB0ZXJUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxPQUFnQiwwQkFBMEI7SUFJdEQsWUFDWSxLQUF1QixFQUN2QixVQUFrQixFQUM1QixZQUFvQjtRQUZWLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFHNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlNLFFBQVEsQ0FBQyxLQUFhO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFakQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRU0sUUFBUTtRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBRVMsU0FBUyxDQUFDLFlBQW9CO1FBRXRDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDL0IsQ0FBQztJQUVTLDRCQUE0QixDQUFDLFlBQW9CO1FBRXpELElBQUksT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFBO1NBQ3BEO0lBQ0gsQ0FBQztDQUNGIn0=