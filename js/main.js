import Canvas from './Element/Canvas.js';
import ActionButtonFactory from "./Element/Button/ActionButtonFactory.js";
import ConfigPanel from "./Element/ConfigPanel.js";
import ConfigFactory from './Config/ConfigFactory.js';
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
    const canvas = new Canvas(mainCanvas);
    const configContainer = ConfigFactory.createDefaultConfigContainer();
    let lastX = null;
    let lastY = null;
    // OO not working
    const verticalResizer = document.getElementById('canvasVerticalResizer');
    verticalResizer.addEventListener('dragstart', e => {
        lastY = e.clientY;
    });
    verticalResizer.addEventListener('drag', e => {
        lastY = lastY || e.clientY;
        canvas.resizeUp(0, e.clientY - lastY);
        lastY = e.clientY;
    });
    verticalResizer.addEventListener('dragleave', e => {
        lastY = null;
    });
    const horizontalResizer = document.getElementById('canvasHorizontalResizer');
    horizontalResizer.addEventListener('dragstart', e => {
        lastX = e.clientX;
    });
    horizontalResizer.addEventListener('drag', e => {
        lastX = lastX || e.clientX;
        canvas.resizeUp(e.clientX - lastX, 0);
        lastX = e.clientX;
    });
    horizontalResizer.addEventListener('dragleave', e => {
        lastX = null;
    });
    const slantResizer = document.getElementById('canvasSlantResizer');
    slantResizer.addEventListener('dragstart', e => {
        lastX = e.clientX;
        lastY = e.clientY;
    });
    slantResizer.addEventListener('drag', e => {
        lastX = lastX || e.clientX;
        lastY = lastY || e.clientY;
        canvas.resizeUp(e.clientX - lastX, e.clientY - lastY);
        lastX = e.clientX;
        lastY = e.clientY;
    });
    slantResizer.addEventListener('dragleave', e => {
        lastX = null;
        lastY = null;
    });
    const canvasConfigContainer = ConfigFactory.createCanvasConfigContainer(canvas);
    // const canvasVerticalResizer = new Resizer(document.getElementById('canvasVerticalResizer'), canvas, true, false)
    // const canvasHorizontalResizer = new Resizer(document.getElementById('canvasHorizontalResizer'), canvas, false, true)
    // const canvasSlantResizer = new Resizer(document.getElementById('canvasSlantResizer'), canvas, true, true)
    const configPanel = new ConfigPanel(configPanelElement);
    configPanel.renderConfigPanel(configContainer);
    const actionButtonFactory = new ActionButtonFactory(canvas, configContainer, configPanel);
    const pencilButton = actionButtonFactory.createPencilButton();
    // buttonPanel.append(actionButtonFactory.createMoveButton().getButtonElement())
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
                canvas.resize(img.width, img.height);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFBO0FBRXhDLE9BQU8sbUJBQW1CLE1BQU0seUNBQXlDLENBQUE7QUFFekUsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxhQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFTdEQsU0FBUyxtQkFBbUIsQ0FBQyxTQUFpQjtJQUUxQyxNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLE9BQU8sQ0FBQTtLQUNqQjtTQUFNO1FBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsU0FBUyxhQUFhLENBQUMsQ0FBQTtLQUM5RDtBQUNMLENBQUM7QUFFRCxJQUFJO0lBQ0EsTUFBTSxXQUFXLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDdEQsTUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxDQUFzQixDQUFBO0lBQ3pFLE1BQU0sa0JBQWtCLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDN0QsTUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDN0MsTUFBTSxlQUFlLEdBQW9CLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFBO0lBRXJGLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQTtJQUN4QixJQUFJLEtBQUssR0FBVyxJQUFJLENBQUE7SUFFeEIsaUJBQWlCO0lBQ2pCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUN4RSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQzlD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