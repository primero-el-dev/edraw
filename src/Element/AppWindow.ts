export default class AppWindow
{
    public intervalIds: number[] = []
    private static instance: AppWindow = null

    public static getInstance(): AppWindow
    {
        if (!this.instance) {
            AppWindow.instance = new this()
        }
        return AppWindow.instance
    }

    private constructor() {}

    public addIntervalId(intervalId: number): void
    {
        this.intervalIds.push(intervalId)
    }

    public clearIntervals(): void
    {
        for (let id of this.intervalIds) {
            clearInterval(id)
        }
        this.intervalIds = []
    }
}