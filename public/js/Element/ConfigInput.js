export default class ConfigInput {
    constructor(input, storageKey) {
        this.input = input;
        this.storageKey = storageKey;
        this.input.addEventListener('click', e => {
            if (e.target.type === 'checkbox') {
                this.value = e.target.checked;
            }
            else {
                this.value = e.target.value;
            }
            localStorage.setItem(this.storageKey, this.value);
        });
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRWxlbWVudC9Db25maWdJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxPQUFPLFdBQVc7SUFJOUIsWUFBNkIsS0FBdUIsRUFBWSxVQUFrQjtRQUFyRCxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFZLGVBQVUsR0FBVixVQUFVLENBQVE7UUFFaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTthQUM1QjtZQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWE7UUFFM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFFbEIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRU0sUUFBUTtRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0NBQ0YifQ==