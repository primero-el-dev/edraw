import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ConfigPanel from "../ConfigPanel.js";
import HTMLElementFactory from "../HTMLElementFactory.js";
import ExportButton from "./ExportButton.js";
import ImportButton from "./ImportButton.js";
import AboutButton from "./AboutButton.js";
import DrawActionButton from "./DrawActionButton.js";
import PencilStrategy from "../../Draw/Strategy/PencilStrategy.js";
import LineStrategy from "../../Draw/Strategy/LineStrategy.js";
import CircleStrategy from "../../Draw/Strategy/CircleStrategy.js";
import RectangleStrategy from "../../Draw/Strategy/RectangleStrategy.js";
import BrushStrategy from "../../Draw/Strategy/BrushStrategy.js";
import RectangleBrushStrategy from "../../Draw/Strategy/RectangleBrushStrategy.js";
import AdvancedPencilStrategy from "../../Draw/Strategy/AdvancedPencilStrategy.js";
import AdvancedPolygonBrushStrategy from "../../Draw/Strategy/AdvancedPolygonBrushStrategy.js";
import PolygonBrushStrategy from "../../Draw/Strategy/PolygonBrushStrategy.js";
import BungeePencilStrategy from "../../Draw/Strategy/BungeePencilStrategy.js";
import RotatingPencilStrategy from "../../Draw/Strategy/RotatingPencilStrategy.js";

export default class ActionButtonFactory
{
    public constructor(
        private canvas: Canvas,
        private configContainer: ConfigContainer,
        private configPanel: ConfigPanel
    ) {}

    public createAboutButton(): AboutButton
    {
        let button = HTMLElementFactory.createActionButton('about', 'about')

        return new AboutButton(button)
    }

    public createPencilButton(): DrawActionButton
    {
        let button = HTMLElementFactory.createActionButton('pencil', 'pencil')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
        ])

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new PencilStrategy())
    }

    public createLineButton(): DrawActionButton
    {
        let button = HTMLElementFactory.createActionButton('line', 'line')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.ROUND_CAP_PROPERTY,
        ])

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new LineStrategy())
    }

    public createRectangleButton(): DrawActionButton
    {
        let button = HTMLElementFactory.createActionButton('rectangle', 'rectangle')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ])

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new RectangleStrategy())
    }

    public createCircleButton(): DrawActionButton
    {
        let button = HTMLElementFactory.createActionButton('circle', 'circle')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.LINE_WIDTH_PROPERTY,
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.CONTOUR_PROPERTY,
        ])

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new CircleStrategy())
    }

    public createBrushButton(): DrawActionButton
    {
        let button = HTMLElementFactory.createActionButton('brush', 'brush')
        let newContainer = this.configContainer.getWithProperties([
            ConfigItem.COLOR_PROPERTY,
            ConfigItem.OPACITY_PROPERTY,
            ConfigItem.TOUCHES_PER_TICK_PROPERTY,
            ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY,
            ConfigItem.ELEMENT_DIAMETER_PROPERTY,
        ])

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new BrushStrategy())
    }

    public createRectangleBrushButton(): DrawActionButton
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

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new RectangleBrushStrategy())
    }

    public createPolygonBrushButton(): DrawActionButton
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

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new PolygonBrushStrategy())
    }

    public createRotatingPencilButton(): DrawActionButton
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

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new RotatingPencilStrategy())
    }

    public createBungeePencilButton(): DrawActionButton
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

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new BungeePencilStrategy())
    }

    public createAdvancedPencilButton(): DrawActionButton
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

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new AdvancedPencilStrategy())
    }

    public createAdvancedPolygonBrushButton(): DrawActionButton
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

        return new DrawActionButton(button, this.canvas, newContainer, this.configPanel, new AdvancedPolygonBrushStrategy())
    }

    public createImportButton(): ImportButton
    {
        let button = HTMLElementFactory.createActionButton('import', 'import')

        return new ImportButton(button, this.canvas)
    }

    public createExportButton(): ExportButton
    {
        let button = HTMLElementFactory.createActionButton('export', 'export')

        return new ExportButton(button, this.canvas)
    }
}