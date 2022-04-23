import ConfigItem from "../../../Config/ConfigItem.js";
import ColorFactory from "../../../ColorFactory.js";
export default class ColorFunctionPartial {
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
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY);
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
    }
    initCustomColorFromConfigFunctions(time) {
        let color = this.getCustomColor(time);
        this.target.ctx.fillStyle = color;
        this.target.ctx.strokeStyle = color;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JGdW5jdGlvblBhcnRpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRWxlbWVudC9CdXR0b24vUGFydGlhbC9Db2xvckZ1bmN0aW9uUGFydGlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSwrQkFBK0IsQ0FBQztBQUV2RCxPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUtwRCxNQUFNLENBQUMsT0FBTyxPQUFPLG9CQUFvQjtJQUVyQyxZQUNZLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUFpQztRQUZqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJQUMxQyxDQUFDO0lBRUcsU0FBUyxDQUFDLElBQVk7UUFFekIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNoRDthQUFNO1lBQ0gsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLENBQUE7U0FDcEQ7SUFDTCxDQUFDO0lBRVMsMENBQTBDO1FBRWhELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2hHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUM5RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDcEcsQ0FBQztJQUVTLGtDQUFrQyxDQUFDLElBQVk7UUFFckQsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7SUFDdkMsQ0FBQztJQUVTLGNBQWMsQ0FBQyxJQUFZO1FBRWpDLElBQUksS0FBSyxHQUFVLFlBQVksQ0FBQyxpQkFBaUIsQ0FDN0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsRUFDOUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsRUFDaEYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FDbEYsQ0FBQTtRQUNELElBQUksT0FBTyxHQUFXLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFbEcsT0FBTyxLQUFLLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVTLDJCQUEyQixDQUFDLFVBQWtCLEVBQUUsSUFBWTtRQUVsRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRXhFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztDQUNKIn0=