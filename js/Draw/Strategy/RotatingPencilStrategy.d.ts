import DrawWithAnimationStrategy from "./DrawWithAnimationStrategy.js";
export default class RotatingPencilStrategy extends DrawWithAnimationStrategy {
    protected initContextProperties(): void;
    protected drawTo(xEnd: number, yEnd: number): void;
}
