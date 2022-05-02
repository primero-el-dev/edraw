import ConfigItem from "./ConfigItem.js";
import ConfigContainer from "./ConfigContainer.js";
import ConfigCheckboxAdapter from "../Element/Input/ConfigCheckboxAdapter.js";
import ConfigInputAdapter from "../Element/Input/ConfigInputAdapter.js";
import HTMLElementFactory from "../Element/HTMLElementFactory.js";
import Canvas from "../Element/Canvas.js";
import CanvasWidthConfigItem from "./CanvasWidthConfigItem.js";
import CanvasHeightConfigItem from "./CanvasHeightConfigItem.js";

export default class ConfigFactory
{
    public static createCanvasConfigContainer(canvas: Canvas): ConfigContainer
    {
        return new ConfigContainer([
            ConfigFactory.createCanvasWidthConfig(canvas),
            ConfigFactory.createCanvasHeightConfig(canvas),
        ])
    }

    public static createDefaultConfigContainer(): ConfigContainer
    {
        return new ConfigContainer([
            ConfigFactory.createLineWidthConfig(),
            ConfigFactory.createColorConfig(),
            ConfigFactory.createOpacityConfig(),
            ConfigFactory.createContourConfig(),
            ConfigFactory.createRoundCapConfig(),
            ConfigFactory.createTouchesPerTickConfig(),
            ConfigFactory.createBrushAreaDiameterConfig(),
            ConfigFactory.createBrushAreaWidthConfig(),
            ConfigFactory.createBrushAreaHeightConfig(),
            ConfigFactory.createElementDiameterConfig(),
            ConfigFactory.createElementWidthConfig(),
            ConfigFactory.createElementHeightConfig(),
            ConfigFactory.createBrushAreaRotationConfig(),
            ConfigFactory.createElementRotationConfig(),
            ConfigFactory.createElementEdgesCountConfig(),
            ConfigFactory.createElementRandomRedColorSpreadConfig(),
            ConfigFactory.createElementRandomGreenColorSpreadConfig(),
            ConfigFactory.createElementRandomBlueColorSpreadConfig(),
            ConfigFactory.createElementRandomDiameterSpreadConfig(),
            ConfigFactory.createElementDistanceFromClickConfig(),
            ConfigFactory.createElementLapsPerSecondConfig(),
            ConfigFactory.createGumElasticityConfig(),
            ConfigFactory.createStripedLineConfig(),
            ConfigFactory.createStripeLineLengthConfig(),
            ConfigFactory.createStripeGapLengthConfig(),
            ConfigFactory.createLineWidthFunctionConfig(),
            ConfigFactory.createColorFunctionEnabledConfig(),
            ConfigFactory.createRedValueFunctionConfig(),
            ConfigFactory.createGreenValueFunctionConfig(),
            ConfigFactory.createBlueValueFunctionConfig(),
            ConfigFactory.createOpacityFunctionConfig(),
            ConfigFactory.createElementDiameterFunctionConfig(),
            ConfigFactory.createElementRotationFunctionConfig(),
        ])
    }

    public static createCanvasWidthConfig(canvas: Canvas): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 1 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.CANVAS_WIDTH_PROPERTY, '300')

        return new CanvasWidthConfigItem(ConfigItem.CANVAS_WIDTH_PROPERTY, 'Canvas width', inputAdapter, canvas)
    }

    public static createCanvasHeightConfig(canvas: Canvas): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 1 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.CANVAS_HEIGHT_PROPERTY, '300')

        return new CanvasHeightConfigItem(ConfigItem.CANVAS_HEIGHT_PROPERTY, 'Canvas height', inputAdapter, canvas)
    }

    public static createLineWidthConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.LINE_WIDTH_PROPERTY, '5')

        return new ConfigItem(ConfigItem.LINE_WIDTH_PROPERTY, 'Line width', inputAdapter)
    }

    public static createColorConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('color')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.COLOR_PROPERTY, '#000')

        return new ConfigItem(ConfigItem.COLOR_PROPERTY, 'Color', inputAdapter)
    }

    public static createOpacityConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0, max: 1, step: 0.01 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.OPACITY_PROPERTY, '1')

        return new ConfigItem(ConfigItem.OPACITY_PROPERTY, 'Opacity', inputAdapter)
    }

    public static createContourConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('checkbox')
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.CONTOUR_PROPERTY, 'off')

        return new ConfigItem(ConfigItem.CONTOUR_PROPERTY, 'Contour only', inputAdapter)
    }

    public static createRoundCapConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('checkbox')
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.ROUND_CAP_PROPERTY, 'off')

        return new ConfigItem(ConfigItem.ROUND_CAP_PROPERTY, 'Round cap', inputAdapter)
    }

    public static createTouchesPerTickConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.TOUCHES_PER_TICK_PROPERTY, '10')

        return new ConfigItem(ConfigItem.TOUCHES_PER_TICK_PROPERTY, 'Touches per tick', inputAdapter)
    }

    public static createBrushAreaDiameterConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY, '10')

        return new ConfigItem(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY, 'Brush area diameter', inputAdapter)
    }

    public static createBrushAreaWidthConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_WIDTH_PROPERTY, '10')

        return new ConfigItem(ConfigItem.BRUSH_AREA_WIDTH_PROPERTY, 'Brush area width', inputAdapter)
    }

    public static createBrushAreaHeightConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY, '10')

        return new ConfigItem(ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY, 'Brush area height', inputAdapter)
    }

    public static createElementDiameterConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_DIAMETER_PROPERTY, '1')

        return new ConfigItem(ConfigItem.ELEMENT_DIAMETER_PROPERTY, 'Element diameter', inputAdapter)
    }

    public static createElementWidthConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_WIDTH_PROPERTY, '10')

        return new ConfigItem(ConfigItem.ELEMENT_WIDTH_PROPERTY, 'Element width', inputAdapter)
    }

    public static createElementHeightConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_HEIGHT_PROPERTY, '10')

        return new ConfigItem(ConfigItem.ELEMENT_HEIGHT_PROPERTY, 'Element height', inputAdapter)
    }

    public static createBrushAreaRotationConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 360 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_ROTATION_PROPERTY, '10')

        return new ConfigItem(ConfigItem.BRUSH_AREA_ROTATION_PROPERTY, 'Brush area rotation (degrees)', inputAdapter)
    }

    public static createElementRotationConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 360 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_ROTATION_PROPERTY, '0')

        return new ConfigItem(ConfigItem.ELEMENT_ROTATION_PROPERTY, 'Element rotation (degrees)', inputAdapter)
    }

    public static createElementEdgesCountConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 3, max: 30 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY, '3')

        return new ConfigItem(ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY, 'Element edges count', inputAdapter)
    }

    public static createElementRandomRedColorSpreadConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 255 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY, '0')

        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY, 'Element random red color spread around current color RGB red value', inputAdapter)
    }

    public static createElementRandomGreenColorSpreadConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 255 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY, '0')

        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY, 'Element random green color spread around current color RGB red value', inputAdapter)
    }

    public static createElementRandomBlueColorSpreadConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 255 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY, '0')

        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY, 'Element random blue color spread around current color RGB red value', inputAdapter)
    }

    public static createElementRandomDiameterSpreadConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0' })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_DIAMETER_SPREAD_PROPERTY, '0')

        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_DIAMETER_SPREAD_PROPERTY, 'Element random diameter spread around current given value', inputAdapter)
    }

    public static createElementDistanceFromClickConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0' })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY, '10')

        return new ConfigItem(ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY, 'Element distance from click', inputAdapter)
    }

    public static createElementLapsPerSecondConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: '0', step: 0.01 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY, '3')

        return new ConfigItem(ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY, 'Element laps per second', inputAdapter)
    }

    public static createGumElasticityConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0, max: 1, step: 0.01 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.GUM_ELASTICITY_PROPERTY, '0.5')

        return new ConfigItem(ConfigItem.GUM_ELASTICITY_PROPERTY, 'Gum elasticity', inputAdapter)
    }

    public static createStripedLineConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('checkbox')
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.STRIPED_LINE_PROPERTY, 'off')

        return new ConfigItem(ConfigItem.STRIPED_LINE_PROPERTY, 'Striped line', inputAdapter)
    }

    public static createStripeLineLengthConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0, step: 1 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.STRIPE_LINE_LENGTH_PROPERTY, '5')

        return new ConfigItem(ConfigItem.STRIPE_LINE_LENGTH_PROPERTY, 'Stripe line length', inputAdapter)
    }

    public static createStripeGapLengthConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('number', { min: 0, step: 1 })
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.STRIPE_GAP_LENGTH_PROPERTY, '5')

        return new ConfigItem(ConfigItem.STRIPE_GAP_LENGTH_PROPERTY, 'Stripe gap length', inputAdapter)
    }

    public static createLineWidthFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY, '5')

        return new ConfigItem(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY, 'Line width function (from time)', inputAdapter)
    }

    public static createColorFunctionEnabledConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('checkbox')
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY, 'off')

        return new ConfigItem(ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY, 'Color function enabled', inputAdapter)
    }

    public static createRedValueFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.RED_VALUE_FUNCTION_PROPERTY, '0')

        return new ConfigItem(ConfigItem.RED_VALUE_FUNCTION_PROPERTY, 'RGB red color value function (from time)', inputAdapter)
    }

    public static createGreenValueFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY, '0')

        return new ConfigItem(ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY, 'RGB green color value function (from time)', inputAdapter)
    }

    public static createBlueValueFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY, '0')

        return new ConfigItem(ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY, 'RGB blue color value function (from time)', inputAdapter)
    }

    public static createOpacityFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.OPACITY_FUNCTION_PROPERTY, '1')

        return new ConfigItem(ConfigItem.OPACITY_FUNCTION_PROPERTY, 'Opacity value function (from time)', inputAdapter)
    }

    public static createElementDiameterFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY, '1')

        return new ConfigItem(ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY, 'Element diameter function (from time)', inputAdapter)
    }

    public static createElementRotationFunctionConfig(): ConfigItem
    {
        let input = HTMLElementFactory.createInput('text')
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY, '0')

        return new ConfigItem(ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY, 'Element rotation function (from time, 2 * PI as full circle)', inputAdapter)
    }
}