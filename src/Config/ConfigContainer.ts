import ConfigItem from "./ConfigItem.js";
import f from '../functions.js'

export default class ConfigContainer
{
    public constructor(protected items: ConfigItem[]) {}

    public getItems(): ConfigItem[]
    {
        return this.items
    }

    public getValueByProperty(property: string): string | null
    {
        let item = this.getConfigByProperty(property)

        return f.isEmpty(item) ? null : item.getValue()
    }

    public getWithProperties(properties: string[]): ConfigContainer
    {
        let items = properties
            .map(property => this.getConfigByProperty(property))
            .filter(item => item !== null)

        return new ConfigContainer(items)
    }

    public getConfigByProperty(property: string): ConfigItem|null
    {
        let items = this.items.filter(item => item.getPropertyName() === property)

        return f.isEmpty(items[0]) ? null : items[0]
    }

    public getValueByPropertyOrThrowError(property: string): string|null
    {
        let item = this.getConfigByProperty(property)

        if (item) {
            return item.getValue()
        } else {
            throw new Error(`Config with property '${property}' doesn't exist`)
        }
    }

    public getValueAsNumber(property: string): number|never
    {
        return this.getValueByPropertyOrThrowError(property) as unknown as number
    }

    public getValueAsBoolean(property: string): boolean|never
    {
        return this.getValueByPropertyOrThrowError(property) === 'true'
    }

    public getLineWidth(): number|never
    {
        return this.getValueByPropertyOrThrowError(ConfigItem.LINE_WIDTH_PROPERTY) as unknown as number
    }

    public getColor(): string|never
    {
        return this.getValueByPropertyOrThrowError(ConfigItem.COLOR_PROPERTY)
    }

    public isContourOnly(): boolean|never
    {
        return this.getValueAsBoolean(ConfigItem.CONTOUR_PROPERTY)
    }
}