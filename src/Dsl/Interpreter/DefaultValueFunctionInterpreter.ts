import InterpreterInterface from "./InterpreterInterface.js";
import PropertyMap from "./PropertyMap.js";
import ValueMap from "./ValueMap.js";

export default class DefaultValueFunctionInterpreter implements InterpreterInterface
{
    public static readonly DEFAULT_PROPERTY_MAP: PropertyMap = {
        s: 'seconds'
    }

    interpret(input: string, valueMap: ValueMap): number
    {
        let output: string = input ? input : ''

        const sin = Math.sin
        const cos = Math.cos
        const tan = Math.tan
        const asin = Math.asin
        const acos = Math.acos
        const atan = Math.atan

        for (let key in valueMap) {
            output = input.replace(key, valueMap[key]) as string
        }
        let result: any = eval(output)

        return result ? (result as unknown as number) : 0
    }
}