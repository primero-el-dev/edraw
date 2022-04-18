import InterpreterInterface from "./InterpreterInterface";
import PropertyMap from "./PropertyMap.js";
export default class DefaultValueFunctionInterpreter implements InterpreterInterface {
    protected propertyMap: PropertyMap;
    constructor(propertyMap: PropertyMap);
    interpret(input: string): void | never;
}
