import Color from "./Color.js";
import Converter from "./Converter.js";
export default class ColorFactory {
    static fromNumericValues(red, green, blue) {
        return new Color('#'
            + Converter.intToHexWith2HexDigits(red)
            + Converter.intToHexWith2HexDigits(green)
            + Converter.intToHexWith2HexDigits(blue));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NvbG9yRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxZQUFZO0lBRXRCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFFcEUsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHO2NBQ2QsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztjQUNyQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO2NBQ3ZDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FDM0MsQ0FBQTtJQUNMLENBQUM7Q0FDSiJ9