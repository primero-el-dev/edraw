import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";
export default class LineStrategy extends DrawWithTemporaryImageActionButton {
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
}
