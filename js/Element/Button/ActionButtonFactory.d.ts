import Canvas from "../Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import ConfigPanel from "../ConfigPanel.js";
import ExportButton from "./ExportButton.js";
import ImportButton from "./ImportButton.js";
import AboutButton from "./AboutButton.js";
import DrawActionButton from "./DrawActionButton.js";
export default class ActionButtonFactory {
    private canvas;
    private configContainer;
    private configPanel;
    constructor(canvas: Canvas, configContainer: ConfigContainer, configPanel: ConfigPanel);
    createAboutButton(): AboutButton;
    createPencilButton(): DrawActionButton;
    createLineButton(): DrawActionButton;
    createCircleButton(): DrawActionButton;
    createImportButton(): ImportButton;
    createExportButton(): ExportButton;
}
