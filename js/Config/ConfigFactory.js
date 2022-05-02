import ConfigItem from "./ConfigItem.js";
import ConfigContainer from "./ConfigContainer.js";
import ConfigCheckboxAdapter from "../Element/Input/ConfigCheckboxAdapter.js";
import ConfigInputAdapter from "../Element/Input/ConfigInputAdapter.js";
import HTMLElementFactory from "../Element/HTMLElementFactory.js";
import CanvasWidthConfigItem from "./CanvasWidthConfigItem.js";
import CanvasHeightConfigItem from "./CanvasHeightConfigItem.js";
export default class ConfigFactory {
    static createCanvasConfigContainer(canvas) {
        return new ConfigContainer([
            ConfigFactory.createCanvasWidthConfig(canvas),
            ConfigFactory.createCanvasHeightConfig(canvas),
        ]);
    }
    static createDefaultConfigContainer() {
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
        ]);
    }
    static createCanvasWidthConfig(canvas) {
        let input = HTMLElementFactory.createInput('number', { min: 1 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.CANVAS_WIDTH_PROPERTY, '300');
        return new CanvasWidthConfigItem(ConfigItem.CANVAS_WIDTH_PROPERTY, 'Canvas width', inputAdapter, canvas);
    }
    static createCanvasHeightConfig(canvas) {
        let input = HTMLElementFactory.createInput('number', { min: 1 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.CANVAS_HEIGHT_PROPERTY, '300');
        return new CanvasHeightConfigItem(ConfigItem.CANVAS_HEIGHT_PROPERTY, 'Canvas height', inputAdapter, canvas);
    }
    static createLineWidthConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.LINE_WIDTH_PROPERTY, '5');
        return new ConfigItem(ConfigItem.LINE_WIDTH_PROPERTY, 'Line width', inputAdapter);
    }
    static createColorConfig() {
        let input = HTMLElementFactory.createInput('color');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.COLOR_PROPERTY, '#000');
        return new ConfigItem(ConfigItem.COLOR_PROPERTY, 'Color', inputAdapter);
    }
    static createOpacityConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0, max: 1, step: 0.01 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.OPACITY_PROPERTY, '1');
        return new ConfigItem(ConfigItem.OPACITY_PROPERTY, 'Opacity', inputAdapter);
    }
    static createContourConfig() {
        let input = HTMLElementFactory.createInput('checkbox');
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.CONTOUR_PROPERTY, 'off');
        return new ConfigItem(ConfigItem.CONTOUR_PROPERTY, 'Contour only', inputAdapter);
    }
    static createRoundCapConfig() {
        let input = HTMLElementFactory.createInput('checkbox');
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.ROUND_CAP_PROPERTY, 'off');
        return new ConfigItem(ConfigItem.ROUND_CAP_PROPERTY, 'Round cap', inputAdapter);
    }
    static createTouchesPerTickConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.TOUCHES_PER_TICK_PROPERTY, '10');
        return new ConfigItem(ConfigItem.TOUCHES_PER_TICK_PROPERTY, 'Touches per tick', inputAdapter);
    }
    static createBrushAreaDiameterConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY, '10');
        return new ConfigItem(ConfigItem.BRUSH_AREA_DIAMETER_PROPERTY, 'Brush area diameter', inputAdapter);
    }
    static createBrushAreaWidthConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_WIDTH_PROPERTY, '10');
        return new ConfigItem(ConfigItem.BRUSH_AREA_WIDTH_PROPERTY, 'Brush area width', inputAdapter);
    }
    static createBrushAreaHeightConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY, '10');
        return new ConfigItem(ConfigItem.BRUSH_AREA_HEIGHT_PROPERTY, 'Brush area height', inputAdapter);
    }
    static createElementDiameterConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_DIAMETER_PROPERTY, '1');
        return new ConfigItem(ConfigItem.ELEMENT_DIAMETER_PROPERTY, 'Element diameter', inputAdapter);
    }
    static createElementWidthConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_WIDTH_PROPERTY, '10');
        return new ConfigItem(ConfigItem.ELEMENT_WIDTH_PROPERTY, 'Element width', inputAdapter);
    }
    static createElementHeightConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_HEIGHT_PROPERTY, '10');
        return new ConfigItem(ConfigItem.ELEMENT_HEIGHT_PROPERTY, 'Element height', inputAdapter);
    }
    static createBrushAreaRotationConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 360 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BRUSH_AREA_ROTATION_PROPERTY, '10');
        return new ConfigItem(ConfigItem.BRUSH_AREA_ROTATION_PROPERTY, 'Brush area rotation (degrees)', inputAdapter);
    }
    static createElementRotationConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 360 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_ROTATION_PROPERTY, '0');
        return new ConfigItem(ConfigItem.ELEMENT_ROTATION_PROPERTY, 'Element rotation (degrees)', inputAdapter);
    }
    static createElementEdgesCountConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 3, max: 30 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY, '3');
        return new ConfigItem(ConfigItem.ELEMENT_EDGES_COUNT_PROPERTY, 'Element edges count', inputAdapter);
    }
    static createElementRandomRedColorSpreadConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 255 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY, '0');
        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_RED_COLOR_SPREAD_PROPERTY, 'Element random red color spread around current color RGB red value', inputAdapter);
    }
    static createElementRandomGreenColorSpreadConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 255 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY, '0');
        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_GREEN_COLOR_SPREAD_PROPERTY, 'Element random green color spread around current color RGB red value', inputAdapter);
    }
    static createElementRandomBlueColorSpreadConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0', max: 255 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY, '0');
        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_BLUE_COLOR_SPREAD_PROPERTY, 'Element random blue color spread around current color RGB red value', inputAdapter);
    }
    static createElementRandomDiameterSpreadConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0' });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_RANDOM_DIAMETER_SPREAD_PROPERTY, '0');
        return new ConfigItem(ConfigItem.ELEMENT_RANDOM_DIAMETER_SPREAD_PROPERTY, 'Element random diameter spread around current given value', inputAdapter);
    }
    static createElementDistanceFromClickConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0' });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY, '10');
        return new ConfigItem(ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY, 'Element distance from click', inputAdapter);
    }
    static createElementLapsPerSecondConfig() {
        let input = HTMLElementFactory.createInput('number', { min: '0', step: 0.01 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY, '3');
        return new ConfigItem(ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY, 'Element laps per second', inputAdapter);
    }
    static createGumElasticityConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0, max: 1, step: 0.01 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.GUM_ELASTICITY_PROPERTY, '0.5');
        return new ConfigItem(ConfigItem.GUM_ELASTICITY_PROPERTY, 'Gum elasticity', inputAdapter);
    }
    static createStripedLineConfig() {
        let input = HTMLElementFactory.createInput('checkbox');
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.STRIPED_LINE_PROPERTY, 'off');
        return new ConfigItem(ConfigItem.STRIPED_LINE_PROPERTY, 'Striped line', inputAdapter);
    }
    static createStripeLineLengthConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0, step: 1 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.STRIPE_LINE_LENGTH_PROPERTY, '5');
        return new ConfigItem(ConfigItem.STRIPE_LINE_LENGTH_PROPERTY, 'Stripe line length', inputAdapter);
    }
    static createStripeGapLengthConfig() {
        let input = HTMLElementFactory.createInput('number', { min: 0, step: 1 });
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.STRIPE_GAP_LENGTH_PROPERTY, '5');
        return new ConfigItem(ConfigItem.STRIPE_GAP_LENGTH_PROPERTY, 'Stripe gap length', inputAdapter);
    }
    static createLineWidthFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY, '5');
        return new ConfigItem(ConfigItem.LINE_WIDTH_FUNCTION_PROPERTY, 'Line width function (from time)', inputAdapter);
    }
    static createColorFunctionEnabledConfig() {
        let input = HTMLElementFactory.createInput('checkbox');
        let inputAdapter = new ConfigCheckboxAdapter(input, ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY, 'off');
        return new ConfigItem(ConfigItem.COLOR_FUNCTION_ENABLED_PROPERTY, 'Color function enabled', inputAdapter);
    }
    static createRedValueFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.RED_VALUE_FUNCTION_PROPERTY, '0');
        return new ConfigItem(ConfigItem.RED_VALUE_FUNCTION_PROPERTY, 'RGB red color value function (from time)', inputAdapter);
    }
    static createGreenValueFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY, '0');
        return new ConfigItem(ConfigItem.GREEN_VALUE_FUNCTION_PROPERTY, 'RGB green color value function (from time)', inputAdapter);
    }
    static createBlueValueFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY, '0');
        return new ConfigItem(ConfigItem.BLUE_VALUE_FUNCTION_PROPERTY, 'RGB blue color value function (from time)', inputAdapter);
    }
    static createOpacityFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.OPACITY_FUNCTION_PROPERTY, '1');
        return new ConfigItem(ConfigItem.OPACITY_FUNCTION_PROPERTY, 'Opacity value function (from time)', inputAdapter);
    }
    static createElementDiameterFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY, '1');
        return new ConfigItem(ConfigItem.ELEMENT_DIAMETER_FUNCTION_PROPERTY, 'Element diameter function (from time)', inputAdapter);
    }
    static createElementRotationFunctionConfig() {
        let input = HTMLElementFactory.createInput('text');
        let inputAdapter = new ConfigInputAdapter(input, ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY, '0');
        return new ConfigItem(ConfigItem.ELEMENT_ROTATION_FUNCTION_PROPERTY, 'Element rotation function (from time, 2 * PI as full circle)', inputAdapter);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWcvQ29uZmlnRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLGVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLHFCQUFxQixNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sa0JBQWtCLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxrQkFBa0IsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRSxPQUFPLHFCQUFxQixNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sc0JBQXNCLE1BQU0sNkJBQTZCLENBQUM7QUFFakUsTUFBTSxDQUFDLE9BQU8sT0FBTyxhQUFhO0lBRXZCLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxNQUFjO1FBRXBELE9BQU8sSUFBSSxlQUFlLENBQUM7WUFDdkIsYUFBYSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztZQUM3QyxhQUFhLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO1NBQ2pELENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxNQUFNLENBQUMsNEJBQTRCO1FBRXRDLE9BQU8sSUFBSSxlQUFlLENBQUM7WUFDdkIsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1lBQ3JDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxhQUFhLENBQUMsbUJBQW1CLEVBQUU7WUFDbkMsYUFBYSxDQUFDLG1CQUFtQixFQUFFO1lBQ25DLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRTtZQUNwQyxhQUFhLENBQUMsMEJBQTBCLEVBQUU7WUFDMUMsYUFBYSxDQUFDLDZCQUE2QixFQUFFO1lBQzdDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRTtZQUMxQyxhQUFhLENBQUMsMkJBQTJCLEVBQUU7WUFDM0MsYUFBYSxDQUFDLDJCQUEyQixFQUFFO1lBQzNDLGFBQWEsQ0FB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