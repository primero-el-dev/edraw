import ConfigItem from "../../Config/ConfigItem.js";
import DrawWithTemporaryImageAndAnimationActionButton from "./DrawWithTemporaryImageAndAnimationActionButton.js";
export default class RotatingPencilButton extends DrawWithTemporaryImageAndAnimationActionButton {
    initContextProperties() {
        this.target.ctx.lineWidth = this.configContainer.getValueAsNumber(ConfigItem.LINE_WIDTH_PROPERTY);
        this.target.ctx.globalAlpha = this.configContainer.getValueAsNumber(ConfigItem.OPACITY_PROPERTY);
        this.target.ctx.fillStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
        this.target.ctx.strokeStyle = this.configContainer.getValueByProperty(ConfigItem.COLOR_PROPERTY);
    }
    drawTo(xEnd, yEnd) {
        let elementDiameter = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DIAMETER_PROPERTY);
        let distanceFromClick = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_DISTANCE_FROM_CLICK_PROPERTY);
        let lapsPerSeconds = this.configContainer.getValueAsNumber(ConfigItem.ELEMENT_LAPS_PER_SECOND_PROPERTY);
        let distanceX = Math.sin(lapsPerSeconds * this.time * Math.PI * 8) * distanceFromClick;
        let distanceY = Math.cos(lapsPerSeconds * this.time * Math.PI * 8) * distanceFromClick;
        this.target.ctx.beginPath();
        this.target.ctx.ellipse(this.currentPositionX + distanceX, this.currentPositionY + distanceY, elementDiameter / 2, elementDiameter / 2, 0, 0, 2 * Math.PI);
        this.target.ctx.closePath();
        this.target.ctx.fill();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm90YXRpbmdQZW5jaWxCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRWxlbWVudC9CdXR0b24vUm90YXRpbmdQZW5jaWxCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyw4Q0FBOEMsTUFBTSxxREFBcUQsQ0FBQztBQUVqSCxNQUFNLENBQUMsT0FBTyxPQUFPLG9CQUFxQixTQUFRLDhDQUE4QztJQUVsRixxQkFBcUI7UUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDakcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNwRyxDQUFDO0lBRVMsTUFBTSxDQUFDLElBQVksRUFBRSxJQUFZO1FBRXZDLElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDekcsSUFBSSxpQkFBaUIsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO1FBQ3RILElBQUksY0FBYyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDL0csSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFBO1FBQ3RGLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQTtRQUV0RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLEVBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLEVBQ2hDLGVBQWUsR0FBRyxDQUFDLEVBQ3BCLGVBQWUsR0FBRyxDQUFDLEVBQ25CLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzFCLENBQUM7Q0FDSiJ9