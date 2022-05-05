export default interface ResizeInterface {
    resize(width: number, height: number): void;
    resizeWidth(width: number): void;
    resizeHeight(width: number): void;
    resizeWidthUp(width: number): void;
    resizeHeightUp(width: number): void;
}
