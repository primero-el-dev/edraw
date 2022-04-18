export default class AppWindow {
    constructor() {
        this.intervalIds = [];
    }
    static getInstance() {
        if (!this.instance) {
            AppWindow.instance = new this();
        }
        return AppWindow.instance;
    }
    addIntervalId(intervalId) {
        this.intervalIds.push(intervalId);
    }
    clearIntervals() {
        for (let id of this.intervalIds) {
            clearInterval(id);
        }
        this.intervalIds = [];
    }
}
AppWindow.instance = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwV2luZG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VsZW1lbnQvQXBwV2luZG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sU0FBUztJQWExQjtRQVhPLGdCQUFXLEdBQWEsRUFBRSxDQUFBO0lBV1YsQ0FBQztJQVJqQixNQUFNLENBQUMsV0FBVztRQUVyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7U0FDbEM7UUFDRCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUE7SUFDN0IsQ0FBQztJQUlNLGFBQWEsQ0FBQyxVQUFrQjtRQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRU0sY0FBYztRQUVqQixLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDN0IsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFDekIsQ0FBQzs7QUF2QmMsa0JBQVEsR0FBYyxJQUFJLENBQUEifQ==