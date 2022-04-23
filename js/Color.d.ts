export default class Color {
    rgb: string;
    protected red: number;
    protected green: number;
    protected blue: number;
    constructor(rgb: string);
    addToRgbValues(red: number, green: number, blue: number, modulo?: boolean): void;
    addRandomRgbInRanges(red: number, green: number, blue: number, modulo?: boolean): void;
    toString(): string;
    toDecmalStringWithOpacity(opacity: number): string;
    protected processOpacity(opacity: number): number;
    protected stringifyColorValue(value: number): string;
    protected addValueToColor(first: number, second: number, modulo?: boolean): number;
    protected addRandomValueToColor(first: number, radius: number, modulo?: boolean): number;
}
