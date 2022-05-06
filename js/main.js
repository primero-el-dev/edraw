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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFBO0FBRXhDLE9BQU8sbUJBQW1CLE1BQU0seUNBQXlDLENBQUE7QUFFekUsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxhQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFTdEQsU0FBUyxtQkFBbUIsQ0FBQyxTQUFpQjtJQUUxQyxNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLE9BQU8sQ0FBQTtLQUNqQjtTQUFNO1FBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsU0FBUyxhQUFhLENBQUMsQ0FBQTtLQUM5RDtBQUNMLENBQUM7QUFFRCxJQUFJO0lBQ0EsTUFBTSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUM5RCxNQUFNLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN0RCxNQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLENBQXNCLENBQUE7SUFDekUsTUFBTSxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM3RCxNQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM3QyxNQUFNLGVBQWUsR0FBb0IsYUFBYSxDQUFDLDRCQUE0QixFQUFFLENBQUE7SUFFckYsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFBO0lBQ3hCLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQTtJQUV4QixpQkFBaUI7SUFDakIsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQ3hFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDOUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQTtJQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNGLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDekMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQTtRQUNqRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFBO0lBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0YsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUM5QyxLQUFLLEdBQUcsSUFBSSxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDNUUsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ2hELEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUE7SUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDRixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDM0MsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ0YsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ2hELEtBQUssR0FBRyxJQUFJLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDbEUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUMzQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFBO1FBQzlDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUE7SUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDRixZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3RDLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6RCxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLFFBQVEsQ0FDWCxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUM5QyxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUNoRCxDQUFBO1FBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQTtRQUM5QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFBO0lBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0YsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ1osS0FBSyxHQUFHLElBQUksQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0scUJBQXFCLEdBQW9CLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNoRyxtSEFBbUg7SUFDbkgsdUhBQXVIO0lBQ3ZILDRHQUE0RztJQUM1RyxNQUFNLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNwRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBRXhELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3pGLE1BQU0sWUFBWSxHQUFxQixtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQy9FLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtJQUNuRCxXQUFXLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0lBQzdFLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7SUFDbEYsV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtJQUMvRSxXQUFXLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0lBQzlFLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7SUFDdkYsV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtJQUNyRixXQUFXLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZGLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7SUFDckYsV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtJQUN2RixXQUFXLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGdDQUFnQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0lBQzdGLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7SUFDOUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtJQUMvRSxXQUFXLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0lBQy9FLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0NBRTFCO0FBQUMsT0FBTyxLQUFLLEVBQUU7SUFDWixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQ3ZCIn0=