export default class Color
{
    protected red: number
    protected green: number
    protected blue: number

    public constructor(public rgb: string)
    {
        let result = rgb.match(/^\#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/)
        if (result) {
            this.red = parseInt(result[1], 16)
            this.green = parseInt(result[2], 16)
            this.blue = parseInt(result[3], 16)
            return
        }
        result = rgb.match(/^\#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/)
        if (result) {
            this.red = parseInt(result[1] + result[1], 16)
            this.green = parseInt(result[2] + result[2], 16)
            this.blue = parseInt(result[3] + result[3], 16)
        } else {
            throw new Error(`Invalid RGB format, '${rgb}' given`)
        }
    }

    public addToRgbValues(red: number, green: number, blue: number, modulo: boolean = false): void
    {
        this.red = this.addValueToColor(this.red, red, modulo)
        this.green = this.addValueToColor(this.green, green, modulo)
        this.blue = this.addValueToColor(this.blue, blue, modulo)
    }

    public addRandomRgbInRanges(red: number, green: number, blue: number, modulo: boolean = false): void
    {
        this.red = this.addRandomValueToColor(this.red, red, modulo)
        this.green = this.addRandomValueToColor(this.green, green, modulo)
        this.blue = this.addRandomValueToColor(this.blue, blue, modulo)
    }

    public toString(): string
    {
        return '#' + this.stringifyColorValue(this.red) + this.stringifyColorValue(this.green) + this.stringifyColorValue(this.blue)
    }

    public toDecmalStringWithOpacity(opacity: number): string
    {
        return `rgba(${this.red},${this.green},${this.blue},${opacity})`
    }

    protected stringifyColorValue(value: number): string
    {
        return (value > 16) ? value.toString(16) : ('0' + value.toString(16))
    }

    protected addValueToColor(first: number, second: number, modulo: boolean = false): number
    {
        let sum: number = first + second
        if (sum < 0) {
            return modulo ? Math.round(sum % 256) : 0
        } else if (sum > 255) {
            return modulo ? Math.round(sum % 256) : 255
        }
        return Math.round(sum)
    }

    protected addRandomValueToColor(first: number, radius: number, modulo: boolean = false): number
    {
        return this.addValueToColor(first - radius, Math.round(Math.random() * 2 * radius), modulo)
    }
}