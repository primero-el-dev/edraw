import ConfigItem from "../../../Config/ConfigItem.js";
import ColorFactory from "../../../ColorFactory.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JGdW5jdGlvbldpdGhDb250b3VyT3B0aW9uUGFydGlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9QYXJ0aWFsL0NvbG9yRnVuY3Rpb25XaXRoQ29udG91ck9wdGlvblBhcnRpYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sK0JBQStCLENBQUM7QUFFdkQsT0FBTyxZQUFZLE1BQU0sMEJBQTBCLENBQUM7QUFLcEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxxQ0FBcUM7SUFFdEQsWUFDWSxNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBaUM7UUFGakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFDMUMsQ0FBQztJQUVHLFNBQVMsQ0FBQyxJQUFZO1FBRXpCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEQ7YUFBTTtZQUNILElBQUksQ0FBQywwQ0FBMEMsRUFBRSxDQUFBO1NBQ3BEO0lBQ0wsQ0FBQztJQUVTLDBDQUEwQztRQUVoRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXRELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2hHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUM5RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFBO0lBQ2xJLENBQUM7SUFFUyxrQ0FBa0MsQ0FBQyxJQUFZO1FBRXJELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUV0RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO0lBQ3JDLENBQUM7SUFFUyxjQUFjLENBQUMsSUFBWTtRQUVqQyxJQUFJLEtBQUssR0FBVSxZQUFZLENBQUMsaUJBQWlCLENBQzdDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLEVBQzlFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLEVBQ2hGLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQ2xGLENBQUE7UUFDRCxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFBO1FBRWxHLE9BQU8sS0FBSyxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFUywyQkFBMkIsQ0FBQyxVQUFrQixFQUFFLElBQVk7UUFFbEUsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUV4RSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Q0FDSiJ9