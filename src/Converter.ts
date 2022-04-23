export default class Converter
{
    public static intToHexWith2HexDigits(value: number): string
    {
        if (value < 0) {
            return '00'
        } else if (value > 255) {
            return 'ff'
        }

        let parsed: string = parseInt(''+value).toString(16)

        return (value > 16) ? parsed : ('0' + parsed)
    }
}