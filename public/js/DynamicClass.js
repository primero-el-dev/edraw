export class DynamicClass {
    constructor(className, opts) {
        if (className === undefined || className === null) {
            throw new Error(`Class type of \'${className}\' is not in the store`);
        }
        return new Store[className](opts);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0NsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0R5bmFtaWNDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFZLFNBQWlCLEVBQUUsSUFBUztRQUV0QyxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixTQUFTLHdCQUF3QixDQUFDLENBQUM7U0FDdkU7UUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRiJ9