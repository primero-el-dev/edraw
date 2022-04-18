import InterpreterInterface from "./InterpreterInterface";
import PropertyMap from "./PropertyMap.js";

export default class DefaultValueFunctionInterpreter implements InterpreterInterface
{
    public constructor(
        protected propertyMap: PropertyMap
    ) {}

    public interpret(input: string): void|never
    {
        // let s =
    }
}