export default class ButtonFactory {
    static create(className, opts) {
        if (className === undefined || className === null) {
            throw new Error(`Class type of \'${className}\' is not in the store`);
        }
        return new Store[className](opts);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbGVtZW50L0J1dHRvbi9CdXR0b25GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sYUFBYTtJQUV6QixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQWlCLEVBQUUsSUFBUztRQUUvQyxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixTQUFTLHdCQUF3QixDQUFDLENBQUM7U0FDdkU7UUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRiJ9