import ConfigItem from "./ConfigItem.js";
import GetHtmlElementInterface from "../Element/GetHtmlElementInterface.js";
import GetValueInterface from "../Element/GetValueInterface.js";
import InterpreterInterface from "../Dsl/Interpreter/InterpreterInterface.js";
export default class FunctionConfigItem extends ConfigItem {
    protected interpreter: InterpreterInterface;
    constructor(propertyName: string, label: string, input: GetHtmlElementInterface & GetValueInterface, interpreter: InterpreterInterface);
}
