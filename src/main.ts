import Canvas from './Element/Canvas.js'
import AppWindow from './Element/AppWindow.js'
import ActionButtonFactory from "./Element/Button/ActionButtonFactory.js"
import DrawActionButton from "./Element/Button/DrawActionButton.js";
import ConfigPanel from "./Element/ConfigPanel.js";
import ConfigFactory from './Config/ConfigFactory.js';
import ConfigContainer from "./Config/ConfigContainer.js";
import DefaultValueFunctionInterpreter from "./Dsl/Interpreter/DefaultValueFunctionInterpreter.js";

function getByIdOrThrowError(elementId: string): HTMLElement
{
    const element: HTMLElement = document.getElementById(elementId)
    if (typeof element === 'object') {
        return element
    } else {
        throw new Error(`Element with id '${elementId}' not found`)
    }
}

try {
    let interpreter = new DefaultValueFunctionInterpreter()
    interpreter.interpret('2 * s', {s: 2})

    const buttonPanel = getByIdOrThrowError('buttonPanel')
    const mainCanvas = getByIdOrThrowError('mainCanvas') as HTMLCanvasElement
    const configPanelElement = getByIdOrThrowError('configPanel')
    const configContainer: ConfigContainer = ConfigFactory.createDefaultConfigContainer()
    const canvas: Canvas = new Canvas(mainCanvas, configContainer)
    const configPanel: ConfigPanel = new ConfigPanel(configPanelElement)
    configPanel.renderConfigPanel(configContainer)

    const actionButtonFactory = new ActionButtonFactory(canvas, configContainer, configPanel)
    const pencilButton: DrawActionButton = actionButtonFactory.createPencilButton()
    buttonPanel.append(actionButtonFactory.createMoveButton().getButtonElement())
    buttonPanel.append(pencilButton.getButtonElement())
    buttonPanel.append(actionButtonFactory.createLineButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createRectangleButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createCircleButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createBrushButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createRectangleBrushButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createPolygonBrushButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createRotatingPencilButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createBungeePencilButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createAdvancedPencilButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createAdvancedPolygonBrushButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createExportButton().getButtonElement())
    pencilButton.getButtonElement().click()

    function importPicture()
    {
        let img = new Image()
        let reader = new FileReader()
        reader.onload = function (event) {
            img.onload = function () {
                canvas.canvas.width = img.width
                canvas.canvas.height = img.height
                canvas.ctx.drawImage(img, 0, 0)
            }
            img.src = event.target.result as unknown as string
        }
        reader.readAsDataURL(this.files[0])
    }

    const importInput = getByIdOrThrowError('importImage')
    importInput.addEventListener('change', importPicture, false)

    window.addEventListener('resize', e => {
        canvas.onResize()
    })

} catch (error) {
    alert(error)
    console.error(error)
}