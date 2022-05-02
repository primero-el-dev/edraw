import PencilButton from "./PencilButton.js"
import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigPanel from "../ConfigPanel.js";
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

export default class ActionButtonFactory
{
    public constructor(
        private canvas: Canvas,
        private configContainer: ConfigContainer,
        private configPanel: ConfigPanel
    ) {}

    public createPencilButton(): PencilButton
    {
        let button = HTMLElementFactory.createActionButton('pencil', 'pencil')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
        ])

        return new PencilButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createMoveButton(): MoveButton
    {
        let button = HTMLElementFactory.createActionButton('move', 'move')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.CANVAS_WIDTH_PROPERTY,
            ConfigItem.CANVAS_HEIGHT_PROPERTY,
        ])

        return new MoveButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createLineButton(): LineButton
    {
        let button = HTMLElementFactory.createActionButton('line', 'line')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.ROUND_CAP_PROPERTY,
        ])

        return new LineButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createRectangleButton(): RectangleButton
    {
        let button = HTMLElementFactory.createActionButton('rectangle', 'rectangle')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ])

        return new RectangleButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createCircleButton(): CircleButton
    {
        let button = HTMLElementFactory.createActionButton('circle', 'circle')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ])

        return new CircleButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createBrushButton(): BrushButton
    {
        let button = HTMLElementFactory.createActionButton('brush', 'brush')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.TOUCHES_PER_TICK_PROPERTY,
            ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
        ])

        return new BrushButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createRectangleBrushButton(): RectangleBrushButton
    {
        let button = HTMLElementFactory.createActionButton('rectangle brush', 'rectangle brush')
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
        ])

        return new RectangleBrushButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createPolygonBrushButton(): PolygonBrushButton
    {
        let button = HTMLElementFactory.createActionButton('polygon brush', 'polygon brush')
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
        ])

        return new PolygonBrushButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createRotatingPencilButton(): RotatingPencilButton
    {
        let button = HTMLElementFactory.createActionButton('rotating pencil', 'rotating pencil')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY,
            ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY,
        ])

        return new RotatingPencilButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createBungeePencilButton(): BungeePencilButton
    {
        let button = HTMLElementFactory.createActionButton('bungee pencil', 'bungee pencil')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.STRIPED_LINE_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.GUM_ELASTICITY_PROPERTY,
            ConfigItem.STRIPE_LINE_LENGTH_PROPERTY,
            ConfigItem.STRIPE_GAP_LENGTH_PROPERTY,
        ])

        return new BungeePencilButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createAdvancedPencilButton(): AdvancedPencilButton
    {
        let button = HTMLElementFactory.createActionButton('advanced pencil', 'advanced pencil')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY,
            ConfigItem.RED_VALUE_FUNCTION_PROPERTY,
            ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY,
            ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY,
            ConfigItem.OPACITY_FUNCTION_PROPERTY,
        ])

        return new AdvancedPencilButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createAdvancedPolygonBrushButton(): AdvancedPolygonBrushButton
    {
        let button = HTMLElementFactory.createActionButton('advanced polygon brush', 'advanced polygon brush')
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
        ])

        return new AdvancedPolygonBrushButton(button, this.canvas, newContainer, this.configPanel)
    }

    public createExportButton(): ExportButton
    {
        let button = HTMLElementFactory.createActionButton('export', 'export')
        let newContainer = this.configContainer.getWithProperties([])

        return new ExportButton(button, this.canvas, newContainer, this.configPanel)
    }
}