import Canvas from './Element/Canvas.js';
import ActionButtonFactory from "./Element/Button/ActionButtonFactory.js";
import ConfigPanel from "./Element/ConfigPanel.js";
import ConfigFactory from './Config/ConfigFactory.js';
import Resizer from "./Element/Resizer/Resizer.js";
function getByIdOrThrowError(elementId) {
    const element = document.getElementById(elementId);
    if (typeof element === 'object') {
        return element;
    }
    else {
        throw new Error(`Element with id '${elementId}' not found`);
    }
}
try {
    const buttonPanel = getByIdOrThrowError('buttonPanel');
    const mainCanvas = getByIdOrThrowError('mainCanvas');
    const configPanelElement = getByIdOrThrowError('configPanel');
    const configContainer = ConfigFactory.createDefaultConfigContainer();
    const canvas = new Canvas(mainCanvas, configContainer);
    const canvasVerticalResizer = new Resizer(document.getElementById('canvasVerticalResizer'), canvas, true, false);
    const canvasHorizontalResizer = new Resizer(document.getElementById('canvasHorizontalResizer'), canvas, false, true);
    const canvasSlantResizer = new Resizer(document.getElementById('canvasSlantResizer'), canvas, true, true);
    const configPanel = new ConfigPanel(configPanelElement);
    configPanel.renderConfigPanel(configContainer);
    const actionButtonFactory = new ActionButtonFactory(canvas, configContainer, configPanel);
    const pencilButton = actionButtonFactory.createPencilButton();
    buttonPanel.append(actionButtonFactory.createMoveButton().getButtonElement());
    buttonPanel.append(pencilButton.getButtonElement());
    buttonPanel.append(actionButtonFactory.createLineButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createRectangleButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createCircleButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createBrushButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createRectangleBrushButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createPolygonBrushButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createRotatingPencilButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createBungeePencilButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createAdvancedPencilButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createAdvancedPolygonBrushButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createExportButton().getButtonElement());
    pencilButton.getButtonElement().click();
    function importPicture() {
        let img = new Image();
        let reader = new FileReader();
        reader.onload = function (event) {
            img.onload = function () {
                canvas.canvas.width = img.width;
                canvas.canvas.height = img.height;
                canvas.ctx.drawImage(img, 0, 0);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(this.files[0]);
    }
    const importInput = getByIdOrThrowError('importImage');
    importInput.addEventListener('change', importPicture, false);
}
catch (error) {
    alert(error);
    console.error(error);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFBO0FBRXhDLE9BQU8sbUJBQW1CLE1BQU0seUNBQXlDLENBQUE7QUFFekUsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxhQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFNdEQsT0FBTyxPQUFPLE1BQU0sOEJBQThCLENBQUM7QUFFbkQsU0FBUyxtQkFBbUIsQ0FBQyxTQUFpQjtJQUUxQyxNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLE9BQU8sQ0FBQTtLQUNqQjtTQUFNO1FBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsU0FBUyxhQUFhLENBQUMsQ0FBQTtLQUM5RDtBQUNMLENBQUM7QUFFRCxJQUFJO0lBQ0EsTUFBTSxXQUFXLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDdEQsTUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxDQUFzQixDQUFBO0lBQ3pFLE1BQU0sa0JBQWtCLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDN0QsTUFBTSxlQUFlLEdBQW9CLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFBO0lBQ3JGLE1BQU0sTUFBTSxHQUFXLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUM5RCxNQUFNLHFCQUFxQixHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2hILE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxPQUFPLENBQUMs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