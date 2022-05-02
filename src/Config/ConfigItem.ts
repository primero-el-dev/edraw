import GetHtmlElementInterface from "../Element/GetHtmlElementInterface.js";
import GetValueInterface from "../Element/GetValueInterface.js";

export default class ConfigItem
{
    public static readonly CANVAS_WIDTH_PROPERTY = 'canvas_width'
    public static readonly CANVAS_HEIGHT_PROPERTY = 'canvas_height'
    public static readonly LINE_WIDTH_PROPERTY = 'line_width'
    public static readonly COLOR_PROPERTY = 'color'
    public static readonly OPACITY_PROPERTY = 'opacity'
    public static readonly CONTOUR_PROPERTY = 'contour'
    public static readonly ROUND_CAP_PROPERTY = 'round_cap'
    public static readonly TOUCHES_PER_TICK_PROPERTY = 'touches_per_tick'
    public static readonly BRUSH_AREA_DIAMETER_PROPERTY = 'brush_area_diameter'
    public static readonly BRUSH_AREA_WIDTH_PROPERTY = 'brush_area_width'
    public static readonly BRUSH_AREA_HEIGHT_PROPERTY = 'brush_area_height'
    public static readonly ELEMENT_DIAMETER_PROPERTY = 'element_diameter'
    public static readonly ELEMENT_WIDTH_PROPERTY = 'element_width'
    public static readonly ELEMENT_HEIGHT_PROPERTY = 'element_height'
    public static readonly ELEMENT_RANDOM_DIAMETER_SPREAD_PROPERTY = 'element_random_diameter_spread'
    public static readonly BRUSH_AREA_ROTATION_PROPERTY = 'brush_area_rotation'
    public static readonly ELEMENT_ROTATION_PROPERTY = 'element_rotation'
    public static readonly ELEMENT_EDGES_COUNT_PROPERTY = 'element_edges_count'
    public static readonly ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY = 'element_random_red_color_spread'
    public static readonly ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY = 'element_random_green_color_spread'
    public static readonly ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY = 'element_random_blue_color_spread'
    public static readonly ELEMENT_DISTANCE_FROM_CLICK_PROPERTY = 'element_distance_from_click'
    public static readonly ELEMENT_LAPS_PER_SECOND_PROPERTY = 'element_laps_per_second'
    public static readonly GUM_ELASTICITY_PROPERTY = 'gum_elasticity'
    public static readonly STRIPED_LINE_PROPERTY = 'striped_line'
    public static readonly STRIPE_LINE_LENGTH_PROPERTY = 'stripe_line_length'
    public static readonly STRIPE_GAP_LENGTH_PROPERTY = 'stripe_gap_length'
    public static readonly LINE_WIDTH_FUNCTION_PROPERTY = 'line_width_function'
    public static readonly COLOR_FUNCTION_ENABLED_PROPERTY = 'color_function_enabled'
    public static readonly RED_VALUE_FUNCTION_PROPERTY = 'red_value_function'
    public static readonly GREEN_VALUE_FUNCTION_PROPERTY = 'green_value_function'
    public static readonly BLUE_VALUE_FUNCTION_PROPERTY = 'blue_value_function'
    public static readonly OPACITY_FUNCTION_PROPERTY = 'opacity_function'
    public static readonly ELEMENT_DIAMETER_FUNCTION_PROPERTY = 'element_diameter_function'
    public static readonly ELEMENT_ROTATION_FUNCTION_PROPERTY = 'element_rotation_function'

    public constructor(
        protected propertyName: string,
        protected label: string,
        protected input: GetHtmlElementInterface & GetValueInterface
    ) {}

    public getPropertyName(): string
    {
        return this.propertyName
    }

    public getElementWithValue(): HTMLElement
    {
        return this.input.getElement()
    }

    public getLabel(): string
    {
        return this.label
    }

    public getValue(): string
    {
        return this.input.getValue()
    }
}