import Canvas from './Element/Canvas.js'
import AppWindow from './Element/AppWindow.js'
import ActionButtonFactory from "./Element/Button/ActionButtonFactory.js"
import DrawActionButton from "./Element/Button/DrawActionButton.js";
import ConfigPanel from "./Element/ConfigPanel.js";
import ConfigFactory from './Config/ConfigFactory.js';
import ConfigContainer from "./Config/ConfigContainer.js";
import DefaultValueFunctionInterpreter from "./Dsl/Interpreter/DefaultValueFunctionInterpreter.js";
import SouthResizer from './Element/Resizer/SouthResizer.js';
import EastResizer from "./Element/Resizer/EastResizer.js";
import SouthEastResizer from "./Element/Resizer/SouthEastResizer.js";
import Resizer from "./Element/Resizer/Resizer.js";
import ResizeUpInterface from "./Element/ResizeUpInterface.js";

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
    const buttonPanel = getByIdOrThrowError('buttonPanel')
    const mainCanvas = getByIdOrThrowError('mainCanvas') as HTMLCanvasElement
    const configPanelElement = getByIdOrThrowError('configPanel')
    const canvas: Canvas = new Canvas(mainCanvas)
    const configContainer: ConfigContainer = ConfigFactory.createDefaultConfigContainer()

    let lastX: number = null
    let lastY: number = null

    // OO not working
    const verticalResizer = document.getElementById('canvasVerticalResizer')
    verticalResizer.addEventListener('dragstart', e => {
        lastY = e.clientY
    })
    verticalResizer.addEventListener('drag', e => {
        lastY = lastY || e.clientY
        canvas.resizeUp(0, e.clientY - lastY)
        lastY = e.clientY
    })
    verticalResizer.addEventListener('dragleave', e => {
        lastY = null
    })

    const horizontalResizer = document.getElementById('canvasHorizontalResizer')
    horizontalResizer.addEventListener('dragstart', e => {
        lastX = e.clientX
    })
    horizontalResizer.addEventListener('drag', e => {
        lastX = lastX || e.clientX
        canvas.resizeUp( e.clientX - lastX, 0)
        lastX = e.clientX
    })
    horizontalResizer.addEventListener('dragleave', e => {
        lastX = null
    })

    const slantResizer = document.getElementById('canvasSlantResizer')
    slantResizer.addEventListener('dragstart', e => {
        lastX = e.clientX
        lastY = e.clientY
    })
    slantResizer.addEventListener('drag', e => {
        lastX = lastX || e.clientX
        lastY = lastY || e.clientY
        canvas.resizeUp(e.clientX - lastX, e.clientY - lastY)
        lastX = e.clientX
        lastY = e.clientY
    })
    slantResizer.addEventListener('dragleave', e => {
        lastX = null
        lastY = null
    })

    const canvasConfigContainer: ConfigContainer = ConfigFactory.createCanvasConfigContainer(canvas)
    // const canvasVerticalResizer = new Resizer(document.getElementById('canvasVerticalResizer'), canvas, true, false)
    // const canvasHorizontalResizer = new Resizer(document.getElementById('canvasHorizontalResizer'), canvas, false, true)
    // const canvasSlantResizer = new Resizer(document.getElementById('canvasSlantResizer'), canvas, true, true)
    const configPanel: ConfigPanel = new ConfigPanel(configPanelElement)
    configPanel.renderConfigPanel(configContainer)

    const actionButtonFactory = new ActionButtonFactory(canvas, configContainer, configPanel)
    const pencilButton: DrawActionButton = actionButtonFactory.createPencilButton()
    // buttonPanel.append(actionButtonFactory.createMoveButton().getButtonElement())
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
                canvas.resize(img.width, img.height)
                canvas.ctx.drawImage(img, 0, 0)
            }
            img.src = event.target.result as unknown as string
        }
        reader.readAsDataURL(this.files[0])
    }

    const importInput = getByIdOrThrowError('importImage')
    importInput.addEventListener('change', importPicture, false)

} catch (error) {
    alert(error)
    console.error(error)
}