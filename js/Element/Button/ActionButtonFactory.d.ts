import PencilButton from "./PencilButton.js";
import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import RectangleButton from "./RectangleButton.js";
import CircleButton from "./CircleButton.js";
import BrushButton from "./BrushButton.js";
import RectangleBrushButton from "./RectangleBrushButton.js";
import LineButton from "./LineButton.js";
import ExportButton from "./ExportButton.js";
import PolygonBrushButton from "./PolygonBrushButton.js";
import RotatingPencilButton from "./RotatingPencilButton.js";
import BungeePencilButton from "./BungeePencilButton.js";
export default class ActionButtonFactory {
    private canvas;
    private configContainer;
    private configPanel;
    constructor(canvas: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    createPencilButton(): PencilButton;
    createLineButton(): LineButton;
    createRectangleButton(): RectangleButton;
    createCircleButton(): CircleButton;
    createBrushButton(): BrushButton;
    createRectangleBrushButton(): RectangleBrushButton;
    createPolygonBrushButton(): PolygonBrushButton;
    createRotatingPencilButton(): RotatingPencilButton;
    createBungeePencilButton(): BungeePencilButton;
    createExportButton(): ExportButton;
}
