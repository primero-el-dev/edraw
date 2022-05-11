import Canvas from './Element/Canvas.js';
import ActionButtonFactory from "./Element/Button/ActionButtonFactory.js";
import ConfigPanel from "./Element/ConfigPanel.js";
import ConfigFactory from './Config/ConfigFactory.js';
import HTMLAttributeDictionary from "./Element/HTMLAttributeDistionary.js";
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
    if (localStorage.getItem('cookie_info_displayed') !== '1') {
        const cookieModal = document.createElement('div');
        cookieModal.setAttribute('id', 'storageInfoModal');
        const paragraph = document.createElement('p');
        paragraph.innerText = 'This website uses local storage to store your drawing configuration and to check if this message was displayed.';
        const close = document.createElement('span');
        close.innerHTML = '&times;';
        cookieModal.appendChild(paragraph);
        cookieModal.appendChild(close);
        close.onclick = () => {
            cookieModal.classList.add(HTMLAttributeDictionary.DISPLAY_NONE_CLASS);
            localStorage.setItem('cookie_info_displayed', '1');
        };
        document.body.appendChild(cookieModal);
    }
    const canvasContainer = getByIdOrThrowError('canvasContainer');
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
        lastY = e.clientY + canvasContainer.scrollTop;
    });
    verticalResizer.addEventListener('drag', e => {
        lastY = lastY || (e.clientY + canvasContainer.scrollTop);
        canvas.resizeUp(0, e.clientY + canvasContainer.scrollTop - lastY);
        lastY = e.clientY + canvasContainer.scrollTop;
    });
    verticalResizer.addEventListener('dragleave', e => {
        lastY = null;
    });
    const horizontalResizer = document.getElementById('canvasHorizontalResizer');
    horizontalResizer.addEventListener('dragstart', e => {
        lastX = e.clientX + canvasContainer.scrollLeft;
    });
    horizontalResizer.addEventListener('drag', e => {
        lastX = lastX || (e.clientX + canvasContainer.scrollLeft);
        canvas.resizeUp(e.clientX + canvasContainer.scrollLeft - lastX, 0);
        lastX = e.clientX + canvasContainer.scrollLeft;
    });
    horizontalResizer.addEventListener('dragleave', e => {
        lastX = null;
    });
    const slantResizer = document.getElementById('canvasSlantResizer');
    slantResizer.addEventListener('dragstart', e => {
        lastX = e.clientX + canvasContainer.scrollLeft;
        lastY = e.clientY + canvasContainer.scrollTop;
    });
    slantResizer.addEventListener('drag', e => {
        lastX = lastX || (e.clientX + canvasContainer.scrollLeft);
        lastY = lastY || (e.clientY + canvasContainer.scrollTop);
        canvas.resizeUp(e.clientX + canvasContainer.scrollLeft - lastX, e.clientY + canvasContainer.scrollTop - lastY);
        lastX = e.clientX + canvasContainer.scrollLeft;
        lastY = e.clientY + canvasContainer.scrollTop;
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
    configPanel.renderConfigPanel('Pencil', configContainer);
    const actionButtonFactory = new ActionButtonFactory(canvas, configContainer, configPanel);
    const pencilButton = actionButtonFactory.createPencilButton();
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
    buttonPanel.append(actionButtonFactory.createAboutButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createImportButton().getButtonElement());
    buttonPanel.append(actionButtonFactory.createExportButton().getButtonElement());
    pencilButton.getButtonElement().click();
    canvas.resize(500, 500);
}
catch (error) {
    alert(error);
    console.error(error);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFBO0FBRXhDLE9BQU8sbUJBQW1CLE1BQU0seUNBQXlDLENBQUE7QUFFekUsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxhQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFRdEQsT0FBTyx1QkFBdUIsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxTQUFTLG1CQUFtQixDQUFDLFNBQWlCO0lBRTFDLE1BQU0sT0FBTyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9ELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sT0FBTyxDQUFBO0tBQ2pCO1NBQU07UUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixTQUFTLGFBQWEsQ0FBQyxDQUFBO0tBQzlEO0FBQ0wsQ0FBQztBQUVELElBQUk7SUFDQSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDdkQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRCxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBQ2xELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxpSEFBaUgsQ0FBQTtRQUN2SSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzNCLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEMsV0FB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