import InterpreterInterface from "./InterpreterInterface.js";
import PropertyMap from "./PropertyMap.js";
import ValueMap from "./ValueMap.js";
export default class DefaultValueFunctionInterpreter implements InterpreterInterface {
    static readonly DEFAULT_PROPERTY_MAP: PropertyMap;
    interpret(input: string, valueMap: ValueMap): number;
}
