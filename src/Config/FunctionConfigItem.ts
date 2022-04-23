import ConfigItem from "./ConfigItem.js";
import GetHtmlElementInterface from "../Element/GetHtmlElementInterface.js";
import GetValueInterface from "../Element/GetValueInterface.js";
import InterpreterInterface from "../Dsl/Interpreter/InterpreterInterface.js";

export default class FunctionConfigItem extends ConfigItem
{
    public constructor(
        propertyName: string,
        label: string,
        input: GetHtmlElementInterface & GetValueInterface,
        protected interpreter: InterpreterInterface
    ) {
        super(propertyName, label, input)
    }

    public getElementWithValue(): HTMLElement
    {
        return this.input.getElement()
    }

    public getValue(): string
    {
        return this.interpreter.interpret(this.input.getValue()) as string
    }
}