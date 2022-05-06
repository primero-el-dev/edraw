import HTMLElementFactory from "./HTMLElementFactory.js";
export default class ConfigPanel {
    constructor(element) {
        this.element = element;
    }
    renderConfigPanel(title, configContainer) {
        this.element.innerHTML = this.getSectionTitle(title);
        for (let config of configContainer.getItems()) {
            this.createConfigRow(config);
        }
    }
    getSectionTitle(title) {
        return `<h3>${title}</h3>`;
    }
    createConfigRow(configItem) {
        this.element.append(HTMLElementFactory.createConfigRow(configItem));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnUGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRWxlbWVudC9Db25maWdQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLGtCQUFrQixNQUFNLHlCQUF5QixDQUFDO0FBRXpELE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBVztJQUU1QixZQUEyQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztJQUU1QyxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZUFBZ0M7UUFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwRCxLQUFLLElBQUksTUFBTSxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQy9CO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxLQUFhO1FBRWpDLE9BQU8sT0FBTyxLQUFLLE9BQU8sQ0FBQTtJQUM5QixDQUFDO0lBRU8sZUFBZSxDQUFDLFVBQXNCO1FBRTFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7Q0FDSiJ9