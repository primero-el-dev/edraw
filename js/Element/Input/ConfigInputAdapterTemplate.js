export default class ConfigInputAdapterTemplate {
    constructor(input, storageKey, defaultValue) {
        this.input = input;
        this.storageKey = storageKey;
        this.initValue(defaultValue);
        this.input.addEventListener('change', e => {
            this.setValueFromElement();
            localStorage.setItem(this.storageKey, this.value);
        });
        localStorage.setItem(this.storageKey, this.value);
    }
    getValue() {
        return this.value;
    }
    getElement() {
        return this.input;
    }
    initValue(defaultValue) {
        this.initLocalStorageIfKeyMissing(defaultValue);
        this.value = localStorage.getItem(this.storageKey);
        this.initInputValue(this.value);
    }
    initLocalStorageIfKeyMissing(defaultValue) {
        if (typeof localStorage.getItem(this.storageKey) !== 'string') {
            localStorage.setItem(this.storageKey, defaultValue);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnSW5wdXRBZGFwdGVyVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRWxlbWVudC9JbnB1dC9Db25maWdJbnB1dEFkYXB0ZXJUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLENBQUMsT0FBTyxPQUFnQiwwQkFBMEI7SUFJcEQsWUFDYyxLQUF1QixFQUN2QixVQUFrQixFQUM1QixZQUFvQjtRQUZWLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFHNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFBO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBTU0sUUFBUTtRQUVYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRU0sVUFBVTtRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRVMsU0FBUyxDQUFDLFlBQW9CO1FBRXBDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFUyw0QkFBNEIsQ0FBQyxZQUFvQjtRQUV2RCxJQUFJLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzNELFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQTtTQUN0RDtJQUNMLENBQUM7Q0FDSiJ9