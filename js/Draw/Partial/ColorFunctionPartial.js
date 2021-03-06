import ColorFactory from "../../ColorFactory.js";
import ConfigItem from "../../Config/ConfigItem.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JGdW5jdGlvblBhcnRpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRHJhdy9QYXJ0aWFsL0NvbG9yRnVuY3Rpb25QYXJ0aWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sVUFBVSxNQUFNLDRCQUE0QixDQUFDO0FBR3BELE1BQU0sQ0FBQyxPQUFPLE9BQU8sb0JBQW9CO0lBRXJDLFlBQ1ksTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQWlDO1FBRmpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO0lBQzFDLENBQUM7SUFFRyxTQUFTLENBQUMsSUFBWTtRQUV6QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLEVBQUU7WUFDcEYsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2hEO2FBQU07WUFDSCxJQUFJLENBQUMsMENBQTBDLEVBQUUsQ0FBQTtTQUNwRDtJQUNMLENBQUM7SUFFUywwQ0FBMEM7UUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNwRyxDQUFDO0lBRVMsa0NBQWtDLENBQUMsSUFBWTtRQUVyRCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtJQUN2QyxDQUFDO0lBRVMsY0FBYyxDQUFDLElBQVk7UUFFakMsSUFBSSxLQUFLLEdBQVUsWUFBWSxDQUFDLGlCQUFpQixDQUM3QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxFQUM5RSxJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxFQUNoRixJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUNsRixDQUFBO1FBQ0QsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVsRyxPQUFPLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRVMsMkJBQTJCLENBQUMsVUFBa0IsRUFBRSxJQUFZO1FBRWxFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFeEUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0NBQ0oifQ==