import ConfigItem from "../../Config/ConfigItem.js";
import ColorFactory from "../../ColorFactory.js";
export default class ColorFunctionWithContourOptionPartial {
    constructor(target, configContainer, interpreter) {
        this.target = target;
        this.configContainer = configContainer;
        this.interpreter = interpreter;
    }
    initColor(time) {
        if (this.configContainer.getValueAsBoolean(ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY)) {
            this.initCustomColorFromConfigFunctions(time);
        }
        else {
            this.initColorWhenColorFunctionFunctionDisabled();
        }
    }
    initColorWhenColorFunctionFunctionDisabled() {
        let contourOnly = this.configContainer.isContourOnly();
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY);
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
        this.target.ctx.strokeStyle = contourOnly ? this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY) : 'transparent';
    }
    initCustomColorFromConfigFunctions(time) {
        let color = this.getCustomColor(time);
        let contourOnly = this.configContainer.isContourOnly();
        this.target.ctx.strokeStyle = contourOnly ? color : 'transparent';
        this.target.ctx.fillStyle = color;
    }
    getCustomColor(time) {
        let color = ColorFactory.fromNumericValues(this.getFunctionFromTimeValueFor(ConfigItem.RED_VALUE_FUNCTION_PROPERTY, time), this.getFunctionFromTimeValueFor(ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY, time), this.getFunctionFromTimeValueFor(ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY, time));
        let opacity = this.getFunctionFromTimeValueFor(ConfigItem.OPACITY_FUNCTION_PROPERTY, time);
        return color.toDecmalStringWithOpacity(opacity);
    }
    getFunctionFromTimeValueFor(configName, time) {
        let functionString = this.configContainer.getValueByProperty(configName);
        return this.interpreter.interpret(functionString, { $s: time });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JGdW5jdGlvbldpdGhDb250b3VyUGFydGlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EcmF3L1BhcnRpYWwvQ29sb3JGdW5jdGlvbldpdGhDb250b3VyUGFydGlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLFlBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUdqRCxNQUFNLENBQUMsT0FBTyxPQUFPLHFDQUFxQztJQUV0RCxZQUNZLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUFpQztRQUZqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJQUMxQyxDQUFDO0lBRUcsU0FBUyxDQUFDLElBQVk7UUFFekIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNoRDthQUFNO1lBQ0gsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLENBQUE7U0FDcEQ7SUFDTCxDQUFDO0lBRVMsMENBQTBDO1FBRWhELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUE7UUFFdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUE7SUFDbEksQ0FBQztJQUVTLGtDQUFrQyxDQUFDLElBQVk7UUFFckQsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXRELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFBO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDckMsQ0FBQztJQUVTLGNBQWMsQ0FBQyxJQUFZO1FBRWpDLElBQUksS0FBSyxHQUFVLFlBQVksQ0FBQyxpQkFBaUIsQ0FDN0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsRUFDOUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsRUFDaEYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FDbEYsQ0FBQTtRQUNELElBQUksT0FBTyxHQUFXLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFbEcsT0FBTyxLQUFLLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVTLDJCQUEyQixDQUFDLFVBQWtCLEVBQUUsSUFBWTtRQUVsRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRXhFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztDQUNKIn0=