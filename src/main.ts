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
import HTMLAttributeDictionary from "./Element/HTMLAttributeDistionary.js";

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
    if (localStorage.getItem('cookie_info_displayed') !== '1') {
        const cookieModal = document.createElement('div')
        cookieModal.setAttribute('id', 'storageInfoModal')
        const paragraph = document.createElement('p')
        paragraph.innerText = 'This website uses local storage to store your drawing configuration and to check if this message was displayed.'
        const close = document.createElement('span')
        close.innerHTML = '&times;'
        cookieModal.appendChild(paragraph)
        cookieModal.appendChild(close)

        close.onclick = () => {
            cookieModal.classList.add(HTMLAttributeDictionary.DISPLAY_NONE_CLASS)
            localStorage.setItem('cookie_info_displayed', '1')
        }

        document.body.appendChild(cookieModal)
    }

    const canvasContainer = getByIdOrThrowError('canvasContainer')
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
        lastY = e.clientY + canvasContainer.scrollTop
    })
    verticalResizer.addEventListener('drag', e => {
        lastY = lastY || (e.clientY + canvasContainer.scrollTop)
        canvas.resizeUp(0, e.clientY + canvasContainer.scrollTop - lastY)
        lastY = e.clientY + canvasContainer.scrollTop
    })
    verticalResizer.addEventListener('dragleave', e => {
        lastY = null
    })

    const horizontalResizer = document.getElementById('canvasHorizontalResizer')
    horizontalResizer.addEventListener('dragstart', e => {
        lastX = e.clientX + canvasContainer.scrollLeft
    })
    horizontalResizer.addEventListener('drag', e => {
        lastX = lastX || (e.clientX + canvasContainer.scrollLeft)
        canvas.resizeUp(e.clientX + canvasContainer.scrollLeft - lastX, 0)
        lastX = e.clientX + canvasContainer.scrollLeft
    })
    horizontalResizer.addEventListener('dragleave', e => {
        lastX = null
    })

    const slantResizer = document.getElementById('canvasSlantResizer')
    slantResizer.addEventListener('dragstart', e => {
        lastX = e.clientX + canvasContainer.scrollLeft
        lastY = e.clientY + canvasContainer.scrollTop
    })
    slantResizer.addEventListener('drag', e => {
        lastX = lastX || (e.clientX + canvasContainer.scrollLeft)
        lastY = lastY || (e.clientY + canvasContainer.scrollTop)
        canvas.resizeUp(
            e.clientX + canvasContainer.scrollLeft - lastX,
            e.clientY + canvasContainer.scrollTop - lastY
        )
        lastX = e.clientX + canvasContainer.scrollLeft
        lastY = e.clientY + canvasContainer.scrollTop
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
    configPanel.renderConfigPanel('Pencil', configContainer)

    const actionButtonFactory = new ActionButtonFactory(canvas, configContainer, configPanel)
    const pencilButton: DrawActionButton = actionButtonFactory.createPencilButton()
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
    buttonPanel.append(actionButtonFactory.createAboutButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createImportButton().getButtonElement())
    buttonPanel.append(actionButtonFactory.createExportButton().getButtonElement())
    pencilButton.getButtonElement().click()

    canvas.resize(500, 500)

} catch (error) {
    alert(error)
    console.error(error)
}