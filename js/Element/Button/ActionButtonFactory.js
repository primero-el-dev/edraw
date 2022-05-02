import PencilButton from "./PencilButton.js";
import ConfigItem from "../../Config/ConfigItem.js";
import RectangleButton from "./RectangleButton.js";
import CircleButton from "./CircleButton.js";
import BrushButton from "./BrushButton.js";
import HTMLElementFactory from "../HTMLElementFactory.js";
import RectangleBrushButton from "./RectangleBrushButton.js";
import LineButton from "./LineButton.js";
import ExportButton from "./ExportButton.js";
import PolygonBrushButton from "./PolygonBrushButton.js";
import RotatingPencilButton from "./RotatingPencilButton.js";
import BungeePencilButton from "./BungeePencilButton.js";
import AdvancedPencilButton from "./AdvancedPencilButton.js";
import AdvancedPolygonBrushButton from "./AdvancedPolygonBrushButton.js";
import MoveButton from "./MoveButton.js";
export default class ActionButtonFactory {
    constructor(canvas, configContainer, configPanel) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
    }
    createPencilButton() {
        let button = HTMLElementFactory.createActionButton('pencil', 'pencil');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
        ]);
        return new PencilButton(button, this.canvas, newContainer, this.configPanel);
    }
    createMoveButton() {
        let button = HTMLElementFactory.createActionButton('move', 'move');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.CANVAS_WIDTH_PROPERTY,
            ConfigItem.CANVAS_HEIGHT_PROPERTY,
        ]);
        return new MoveButton(button, this.canvas, newContainer, this.configPanel);
    }
    createLineButton() {
        let button = HTMLElementFactory.createActionButton('line', 'line');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.ROUND_CAP_PROPERTY,
        ]);
        return new LineButton(button, this.canvas, newContainer, this.configPanel);
    }
    createRectangleButton() {
        let button = HTMLElementFactory.createActionButton('rectangle', 'rectangle');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ]);
        return new RectangleButton(button, this.canvas, newContainer, this.configPanel);
    }
    createCircleButton() {
        let button = HTMLElementFactory.createActionButton('circle', 'circle');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ]);
        return new CircleButton(button, this.canvas, newContainer, this.configPanel);
    }
    createBrushButton() {
        let button = HTMLElementFactory.createActionButton('brush', 'brush');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.TOUCHES_PER_TICK_PROPERTY,
            ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
        ]);
        return new BrushButton(button, this.canvas, newContainer, this.configPanel);
    }
    createRectangleBrushButton() {
        let button = HTMLElementFactory.createActionButton('rectangle brush', 'rectangle brush');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
            ConfigItem.TOUCHES_PER_TICK_PROPERTY,
            ConfigItem.BRUSH_AREA_WIDTH_PROPERTY,
            ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY,
            ConfigItem.ELEMENT_WIDTH_PROPERTY,
            ConfigItem.ELEMENT_HEIGHT_PROPERTY,
            ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY,
            ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY,
            ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY,
        ]);
        return new RectangleBrushButton(button, this.canvas, newContainer, this.configPanel);
    }
    createPolygonBrushButton() {
        let button = HTMLElementFactory.createActionButton('polygon brush', 'polygon brush');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
            ConfigItem.TOUCHES_PER_TICK_PROPERTY,
            ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_ROTATION_PROPERTY,
            ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY,
            ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY,
            ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY,
            ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY,
        ]);
        return new PolygonBrushButton(button, this.canvas, newContainer, this.configPanel);
    }
    createRotatingPencilButton() {
        let button = HTMLElementFactory.createActionButton('rotating pencil', 'rotating pencil');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY,
            ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY,
        ]);
        return new RotatingPencilButton(button, this.canvas, newContainer, this.configPanel);
    }
    createBungeePencilButton() {
        let button = HTMLElementFactory.createActionButton('bungee pencil', 'bungee pencil');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.STRIPED_LINE_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.GUM_ELASTICITY_PROPERTY,
            ConfigItem.STRIPE_LINE_LENGTH_PROPERTY,
            ConfigItem.STRIPE_GAP_LENGTH_PROPERTY,
        ]);
        return new BungeePencilButton(button, this.canvas, newContainer, this.configPanel);
    }
    createAdvancedPencilButton() {
        let button = HTMLElementFactory.createActionButton('advanced pencil', 'advanced pencil');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY,
            ConfigItem.RED_VALUE_FUNCTION_PROPERTY,
            ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY,
            ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY,
            ConfigItem.OPACITY_FUNCTION_PROPERTY,
        ]);
        return new AdvancedPencilButton(button, this.canvas, newContainer, this.configPanel);
    }
    createAdvancedPolygonBrushButton() {
        let button = HTMLElementFactory.createActionButton('advanced polygon brush', 'advanced polygon brush');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
            ConfigItem.TOUCHES_PER_TICK_PROPERTY,
            ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY,
            ConfigItem.RED_VALUE_FUNCTION_PROPERTY,
            ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY,
            ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY,
            ConfigItem.OPACITY_FUNCTION_PROPERTY,
            ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY,
        ]);
        return new AdvancedPolygonBrushButton(button, this.canvas, newContainer, this.configPanel);
    }
    createExportButton() {
        let button = HTMLElementFactory.createActionButton('export', 'export');
        let newContainer = this.configContainer.getWithProperties([]);
        return new ExportButton(button, this.canvas, newContainer, this.configPanel);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uQnV0dG9uRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9BY3Rpb25CdXR0b25GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFBO0FBRzVDLE9BQU8sVUFBVSxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE9BQU8sZUFBZSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLGtCQUFrQixDQUFDO0FBQzNDLE9BQU8sa0JBQWtCLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxvQkFBb0IsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLGtCQUFrQixNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sb0JBQW9CLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxrQkFBa0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLG9CQUFvQixNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sMEJBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxVQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFekMsTUFBTSxDQUFDLE9BQU8sT0FBTyxtQkFBbUI7SUFFcEMsWUFDWSxNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUcsa0JBQWtCO1FBRXJCLElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FB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