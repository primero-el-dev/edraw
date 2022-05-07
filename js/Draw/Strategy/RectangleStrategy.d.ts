import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";
export default class RectangleStrategy extends DrawWithTemporaryImageActionButton {
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
}
