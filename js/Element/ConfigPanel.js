import HTMLElementFactory from "./HTMLElementFactory.js";
export default class ConfigPanel {
    constructor(element) {
        this.element = element;
    }
    renderConfigPanel(configContainer) {
        this.element.innerHTML = '';
        for (let config of configContainer.getItems()) {
            this.createConfigRow(config);
        }
    }
    createConfigRow(configItem) {
        this.element.append(HTMLElementFactory.createConfigRow(configItem));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnUGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRWxlbWVudC9Db25maWdQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLGtCQUFrQixNQUFNLHlCQUF5QixDQUFDO0FBRXpELE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBVztJQUU1QixZQUEyQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztJQUU1QyxpQkFBaUIsQ0FBQyxlQUFnQztRQUVyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDM0IsS0FBSyxJQUFJLE1BQU0sSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUMvQjtJQUNMLENBQUM7SUFFTyxlQUFlLENBQUMsVUFBc0I7UUFFMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztDQUNKIn0=