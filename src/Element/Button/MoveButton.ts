import DrawActionButton from "./DrawActionButton.js";
import ConfigItem from "../../Config/ConfigItem.js";

export default class MoveButton extends DrawActionButton
{
    public addListeners(): void
    {
        let width = this.configContainer.getValueAsNumber(ConfigItem.CANVAS_WIDTH_PROPERTY)
        let height = this.configContainer.getValueAsNumber(ConfigItem.CANVAS_HEIGHT_PROPERTY)
    }
}