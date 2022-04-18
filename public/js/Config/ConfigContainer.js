import ConfigItem from "./ConfigItem.js";
import f from '../functions.js';
export default class ConfigContainer {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    getValueByProperty(property) {
        let item = this.getConfigByProperty(property);
        return f.isEmpty(item) ? null : item.getValue();
    }
    getWithProperties(properties) {
        let items = properties
            .map(property => this.getConfigByProperty(property))
            .filter(item => item !== null);
        return new ConfigContainer(items);
    }
    getConfigByProperty(property) {
        let items = this.items.filter(item => item.getPropertyName() === property);
        return f.isEmpty(items[0]) ? null : items[0];
    }
    getValueByPropertyOrThrowError(property) {
        let item = this.getConfigByProperty(property);
        if (item) {
            return item.getValue();
        }
        else {
            throw new Error(`Config with property '${property}' doesn't exist`);
        }
    }
    getValueAsNumber(property) {
        return this.getValueByPropertyOrThrowError(property);
    }
    getValueAsBoolean(property) {
        return this.getValueByPropertyOrThrowError(property) === 'true';
    }
    getLineWidth() {
        return this.getValueByPropertyOrThrowError(ConfigItem.LINE_WIDTH_PROPERTY);
    }
    getColor() {
        return this.getValueByPropertyOrThrowError(ConfigItem.COLOR_PROPERTY);
    }
    isContourOnly() {
        return this.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbmZpZy9Db25maWdDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxDQUFDLE1BQU0saUJBQWlCLENBQUE7QUFFL0IsTUFBTSxDQUFDLE9BQU8sT0FBTyxlQUFlO0lBRWhDLFlBQTZCLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7SUFBRyxDQUFDO0lBRTdDLFFBQVE7UUFFWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFFBQWdCO1FBRXRDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUU3QyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25ELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxVQUFvQjtRQUV6QyxJQUFJLEtBQUssR0FBRyxVQUFVO2FBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUE7UUFFbEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRU0sbUJBQW1CLENBQUMsUUFBZ0I7UUFFdkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUE7UUFFMUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRU0sOEJBQThCLENBQUMsUUFBZ0I7UUFFbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTdDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDekI7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLFFBQVEsaUJBQWlCLENBQUMsQ0FBQTtTQUN0RTtJQUNMLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUVwQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLENBQXNCLENBQUE7SUFDN0UsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFFBQWdCO1FBRXJDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU0sQ0FBQTtJQUNuRSxDQUFDO0lBRU0sWUFBWTtRQUVmLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBc0IsQ0FBQTtJQUNuRyxDQUFDO0lBRU0sUUFBUTtRQUVYLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRU0sYUFBYTtRQUVoQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0NBQ0oifQ==