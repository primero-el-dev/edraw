export default class InterpreterError extends Error
{
    public constructor(m: string)
    {
        super(m)
        Object.setPrototypeOf(this, InterpreterError.prototype)
    }
}