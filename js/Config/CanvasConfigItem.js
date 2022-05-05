import ConfigItem from "./ConfigItem.js";
export default class CanvasConfigItem extends ConfigItem {
    constructor(propertyName, label, input, canvas) {
        super(propertyName, label, input);
        this.propertyName = propertyName;
        this.label = label;
        this.input = input;
        this.canvas = canvas;
        this.input.getElement().addEventListener('change', e => {
            this.onChange();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzQ29uZmlnSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWcvQ2FudmFzQ29uZmlnSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxNQUFNLENBQUMsT0FBTyxPQUFnQixnQkFBaUIsU0FBUSxVQUFVO0lBRTdELFlBQ2MsWUFBb0IsRUFDcEIsS0FBYSxFQUNiLEtBQWtELEVBQ2xELE1BQWM7UUFFeEIsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFMdkIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQTZDO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVE7UUFJeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUdKIn0=