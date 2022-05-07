import DrawWithAnimationStrategy from "./DrawWithAnimationStrategy.js";
export default class BungeePencilStrategy extends DrawWithAnimationStrategy {
    protected readonly BASE_ELASTICITY = 0.897;
    protected lineLength: number;
    protected xVel: number;
    protected yVel: number;
    protected ballX: number;
    protected ballY: number;
    protected striped: boolean;
    protected lastDrawnBallX: number | null;
    protected lastDrawnBallY: number | null;
    protected initContextProperties(): void;
    protected additionalOnMouseUp(): void;
    protected drawTemporaryTo(xEnd: number, yEnd: number): void;
    protected drawTo(xEnd: number, yEnd: number): void;
    protected adjustParams(xEnd: number, yEnd: number): void;
    protected initBallPositionIfEmpty(xEnd: number, yEnd: number): void;
    protected adjustVelocity(xEnd: number, yEnd: number): void;
    protected adjustBallPosition(): void;
}
