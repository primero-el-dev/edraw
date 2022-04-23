export default class Converter {
    static intToHexWith2HexDigits(value) {
        if (value < 0) {
            return '00';
        }
        else if (value > 255) {
            return 'ff';
        }
        let parsed = parseInt('' + value).toString(16);
        return (value > 16) ? parsed : ('0' + parsed);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVM7SUFFbkIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQWE7UUFFOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUE7U0FDZDthQUFNLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQTtTQUNkO1FBRUQsSUFBSSxNQUFNLEdBQVcsUUFBUSxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFcEQsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0oifQ==