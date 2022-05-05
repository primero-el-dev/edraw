import CanvasConfigItem from "./CanvasConfigItem.js";
export default class CanvasWidthConfigItem extends CanvasConfigItem {
    onChange() {
        console.log(this);
        console.log(this.input.getValue());
        this.canvas.setWidth(this.input.getValue());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzV2lkdGhDb25maWdJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbmZpZy9DYW52YXNXaWR0aENvbmZpZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxnQkFBZ0IsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxNQUFNLENBQUMsT0FBTyxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjtJQUVyRCxRQUFRO1FBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztDQUNKIn0=