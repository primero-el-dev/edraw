import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageActionButton.js";
export default class LineButton extends DrawWithTemporaryImageActionButton {
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
}
