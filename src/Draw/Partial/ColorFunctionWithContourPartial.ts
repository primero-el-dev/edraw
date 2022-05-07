import Canvas from "../../Element/Canvas.js";
import ConfigContainer from "../../Config/ConfigContainer.js";
import InterpreterInterface from "../../Dsl/Interpreter/InterpreterInterface.js";
import ConfigItem from "../../Config/ConfigItem.js";
import ColorFactory from "../../ColorFactory.js";
import Color from "../../Color.js";

export default class ColorFunctionWithContourOptionPartial
{
    public constructor(
        private target: Canvas,
        private configContainer: ConfigContainer,
        private interpreter: InterpreterInterface
    ) {}

    public initColor(time: number): void
    {
        if (this.configContainer.getValueAsBoolean(ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY)) {
            this.initCustomColorFromConfigFunctions(time)
        } else {
            this.initColorWhenColorFunctionFunctionDisabled()
        }
    }

    protected initColorWhenColorFunctionFunctionDisabled(): void
    {
        let contourOnly = this.configContainer.isContourOnly()

        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY)
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY)
        this.target.ctx.strokeStyle = contourOnly ? this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY) : 'transparent'
    }

    protected initCustomColorFromConfigFunctions(time: number): void
    {
        let color: string = this.getCustomColor(time)
        let contourOnly = this.configContainer.isContourOnly()

        this.target.ctx.strokeStyle = contourOnly ? color : 'transparent'
        this.target.ctx.fillStyle = color
    }

    protected getCustomColor(time: number): string
    {
        let color: Color = ColorFactory.fromNumericValues(
            this.getFunctionFromTimeValueFor(ConfigItem.RED_VALUE_FUNCTION_PROPERTY, time),
            this.getFunctionFromTimeValueFor(ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY, time),
            this.getFunctionFromTimeValueFor(ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY, time)
        )
        let opacity: number = this.getFunctionFromTimeValueFor(ConfigItem.OPACITY_FUNCTION_PROPERTY, time)

        return color.toDecmalStringWithOpacity(opacity)
    }

    protected getFunctionFromTimeValueFor(configName: string, time: number): number
    {
        let functionString = this.configContainer.getValueByProperty(configName)

        return this.interpreter.interpret(functionString, {$s: time})
    }
}