import ConfigItem from "../../Config/ConfigItem.js";
import HTMLElementFactory from "../HTMLElementFactory.js";
import ExportButton from "./ExportButton.js";
import ImportButton from "./ImportButton.js";
import AboutButton from "./AboutButton.js";
import DrawActionButton from "./DrawActionButton.js";
import PencilStrategy from "../../Draw/Strategy/PencilStrategy.js";
import LineStrategy from "../../Draw/Strategy/LineStrategy.js";
import CircleStrategy from "../../Draw/Strategy/CircleStrategy.js";
export default class ActionButtonFactory {
    constructor(canvas, configContainer, configPanel) {
        this.canvas = canvas;
        this.configContainer = configContainer;
        this.configPanel = configPanel;
    }
    createAboutButton() {
        let button = HTMLElementFactory.createActionButton('about', 'about');
        return new AboutButton(button);
    }
    createPencilButton() {
        let button = HTMLElementFactory.createActionButton('pencil', 'pencil');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
        ]);
        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new PencilStrategy());
    }
    // public createMoveButton(): MoveButton
    // {
    //     let button = HTMLElementFactory.createActionButton('move', 'move')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.CANVAS_WIDTH_PROPERTY,
    //         ConfigItem.CANVAS_HEIGHT_PROPERTY,
    //     ])
    //
    //     return new MoveButton(button, this.canvas, newContainer, this.configPanel)
    // }
    createLineButton() {
        let button = HTMLElementFactory.createActionButton('line', 'line');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.ROUND_CAP_PROPERTY,
        ]);
        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new LineStrategy());
    }
    // public createRectangleButton(): RectangleButton
    // {
    //     let button = HTMLElementFactory.createActionButton('rectangle', 'rectangle')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.LINE_WIDTH_PROPERTY,
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.CONTOUR_PROPERTY,
    //     ])
    //
    //     return new RectangleButton(button, this.canvas, newContainer, this.configPanel)
    // }
    createCircleButton() {
        let button = HTMLElementFactory.createActionButton('circle', 'circle');
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ]);
        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new CircleStrategy());
    }
    // public createBrushButton(): BrushButton
    // {
    //     let button = HTMLElementFactory.createActionButton('brush', 'brush')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.TOUCHES_PER_TICK_PROPERTY,
    //         ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
    //         ConfigItem.ELEMENT_DIAMETER_PROPERTY,
    //     ])
    //
    //     return new BrushButton(button, this.canvas, newContainer, this.configPanel)
    // }
    //
    // public createRectangleBrushButton(): RectangleBrushButton
    // {
    //     let button = HTMLElementFactory.createActionButton('rectangle brush', 'rectangle brush')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.LINE_WIDTH_PROPERTY,
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.CONTOUR_PROPERTY,
    //         ConfigItem.TOUCHES_PER_TICK_PROPERTY,
    //         ConfigItem.BRUSH_AREA_WIDTH_PROPERTY,
    //         ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY,
    //         ConfigItem.ELEMENT_WIDTH_PROPERTY,
    //         ConfigItem.ELEMENT_HEIGHT_PROPERTY,
    //         ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY,
    //         ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY,
    //         ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY,
    //     ])
    //
    //     return new RectangleBrushButton(button, this.canvas, newContainer, this.configPanel)
    // }
    //
    // public createPolygonBrushButton(): PolygonBrushButton
    // {
    //     let button = HTMLElementFactory.createActionButton('polygon brush', 'polygon brush')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.LINE_WIDTH_PROPERTY,
    //         ConfigItem.CONTOUR_PROPERTY,
    //         ConfigItem.TOUCHES_PER_TICK_PROPERTY,
    //         ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
    //         ConfigItem.ELEMENT_DIAMETER_PROPERTY,
    //         ConfigItem.ELEMENT_ROTATION_PROPERTY,
    //         ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY,
    //         ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY,
    //         ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY,
    //         ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY,
    //     ])
    //
    //     return new PolygonBrushButton(button, this.canvas, newContainer, this.configPanel)
    // }
    //
    // public createRotatingPencilButton(): RotatingPencilButton
    // {
    //     let button = HTMLElementFactory.createActionButton('rotating pencil', 'rotating pencil')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.LINE_WIDTH_PROPERTY,
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.ELEMENT_DIAMETER_PROPERTY,
    //         ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY,
    //         ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY,
    //     ])
    //
    //     return new RotatingPencilButton(button, this.canvas, newContainer, this.configPanel)
    // }
    //
    // public createBungeePencilButton(): BungeePencilButton
    // {
    //     let button = HTMLElementFactory.createActionButton('bungee pencil', 'bungee pencil')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.LINE_WIDTH_PROPERTY,
    //         ConfigItem.STRIPED_LINE_PROPERTY,
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.GUM_ELASTICITY_PROPERTY,
    //         ConfigItem.STRIPE_LINE_LENGTH_PROPERTY,
    //         ConfigItem.STRIPE_GAP_LENGTH_PROPERTY,
    //     ])
    //
    //     return new BungeePencilButton(button, this.canvas, newContainer, this.configPanel)
    // }
    //
    // public createAdvancedPencilButton(): AdvancedPencilButton
    // {
    //     let button = HTMLElementFactory.createActionButton('advanced pencil', 'advanced pencil')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY,
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY,
    //         ConfigItem.RED_VALUE_FUNCTION_PROPERTY,
    //         ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY,
    //         ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY,
    //         ConfigItem.OPACITY_FUNCTION_PROPERTY,
    //     ])
    //
    //     return new AdvancedPencilButton(button, this.canvas, newContainer, this.configPanel)
    // }
    //
    // public createAdvancedPolygonBrushButton(): AdvancedPolygonBrushButton
    // {
    //     let button = HTMLElementFactory.createActionButton('advanced polygon brush', 'advanced polygon brush')
    //     let newContainer = this.configContainer.getWithProperties([
    //         ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY,
    //         ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY,
    //         ConfigItem.CONTOUR_PROPERTY,
    //         ConfigItem.TOUCHES_PER_TICK_PROPERTY,
    //         ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
    //         ConfigItem.ELEMENT_DIAMETER_PROPERTY,
    //         ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY,
    //         ConfigItem.COLOR_PROPERTY,
    //         ConfigItem.OPACITY_PROPERTY,
    //         ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY,
    //         ConfigItem.RED_VALUE_FUNCTION_PROPERTY,
    //         ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY,
    //         ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY,
    //         ConfigItem.OPACITY_FUNCTION_PROPERTY,
    //         ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY,
    //     ])
    //
    //     return new AdvancedPolygonBrushButton(button, this.canvas, newContainer, this.configPanel)
    // }
    createImportButton() {
        let button = HTMLElementFactory.createActionButton('import', 'import');
        return new ImportButton(button, this.canvas);
    }
    createExportButton() {
        let button = HTMLElementFactory.createActionButton('export', 'export');
        return new ExportButton(button, this.canvas);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uQnV0dG9uRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9BY3Rpb25CdXR0b25GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sVUFBVSxNQUFNLDRCQUE0QixDQUFDO0FBS3BELE9BQU8sa0JBQWtCLE1BQU0sMEJBQTBCLENBQUM7QUFHMUQsT0FBTyxZQUFZLE1BQU0sbUJBQW1CLENBQUM7QUFPN0MsT0FBTyxZQUFZLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDM0MsT0FBTyxnQkFBZ0IsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLGNBQWMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLFlBQVksTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLGNBQWMsTUFBTSx1Q0FBdUMsQ0FBQztBQUVuRSxNQUFNLENBQUMsT0FBTyxPQUFPLG1CQUFtQjtJQUVwQyxZQUNZLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7SUFFRyxpQkFBaUI7UUFFcEIsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRXBFLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLGtCQUFrQjtRQUVyQixJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDdEUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0RCxVQUFVLENBQUMsbUJB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