import ConfigItem from "./ConfigItem.js";
export default class ConfigContainer {
    protected items: ConfigItem[];
    constructor(items: ConfigItem[]);
    getItems(): ConfigItem[];
    getValueByProperty(property: string): string | null;
    getWithProperties(properties: string[]): ConfigContainer;
    getConfigByProperty(property: string): ConfigItem | null;
    getValueByPropertyOrThrowError(property: string): string | null;
    getValueAsNumber(property: string): number | never;
    getValueAsBoolean(property: string): boolean | never;
    getLineWidth(): number | never;
    getColor(): string | never;
    isContourOnly(): boolean | never;
}
