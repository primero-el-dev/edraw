import DrawActionButton from "./DrawActionButton.js";
export default class BrushButton extends DrawActionButton {
    private readonly FPS;
    private lastX;
    private lastY;
    private pressed;
    addListeners(): void;
    private drawSingleTick;
}
