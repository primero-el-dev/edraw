class Config {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.data = JSON.parse(window.localStorage.getItem(this.storageKey)) || this.getInitAndDefaultConfig();
    }
    getInitAndDefaultConfig() {
        let config = this.getDefaultConfig();
        window.localStorage.setItem(this.storageKey, JSON.stringify(config));
        return config;
    }
    getDefaultConfig() {
        return {
            width: 3,
            color: '#000'
        };
    }
}
export default Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbmZpZy9Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxNQUFNO0lBSVIsWUFBNkIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUUzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUE7SUFDMUcsQ0FBQztJQUVTLHVCQUF1QjtRQUU3QixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUM1QyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUVwRSxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBRVMsZ0JBQWdCO1FBRXRCLE9BQU87WUFDSCxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxNQUFNO1NBQ2hCLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUFFRCxlQUFlLE1BQU0sQ0FBQSJ9