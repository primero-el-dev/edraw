export default interface InterpreterInterface {
    interpret(input: string): void | never;
}
