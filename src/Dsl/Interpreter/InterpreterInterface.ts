import ValueMap from "./ValueMap.js";

export default interface InterpreterInterface
{
    interpret(input: string, valueMap: ValueMap): any
}