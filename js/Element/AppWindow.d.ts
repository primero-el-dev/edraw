export default class AppWindow {
    intervalIds: number[];
    private static instance;
    static getInstance(): AppWindow;
    private constructor();
    addIntervalId(intervalId: number): void;
    clearIntervals(): void;
}
