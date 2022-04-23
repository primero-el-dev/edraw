import Color from "./Color.js";
import Converter from "./Converter.js";

export default class ColorFactory
{
    public static fromNumericValues(red: number, green: number, blue: number): Color
    {
        return new Color('#'
            + Converter.intToHexWith2HexDigits(red)
            + Converter.intToHexWith2HexDigits(green)
            + Converter.intToHexWith2HexDigits(blue)
        )
    }
}