import DrawWithTemporaryImageActionButton from "./DrawWithTemporaryImageStrategy.js";
export default class CircleStrategy extends DrawWithTemporaryImageActionButton {
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
}
