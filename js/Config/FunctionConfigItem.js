import ConfigItem from "./ConfigItem.js";
export default class FunctionConfigItem extends ConfigItem {
    constructor(propertyName, label, input, interpreter) {
        super(propertyName, label, input);
        this.interpreter = interpreter;
    }
    getElementWithValue() {
        return this.input.getElement();
    }
    getValue() {
        return this.interpreter.interpret(this.input.getValue());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25Db25maWdJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbmZpZy9GdW5jdGlvbkNvbmZpZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0saUJBQWlCLENBQUM7QUFLekMsTUFBTSxDQUFDLE9BQU8sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBRXRELFlBQ0ksWUFBb0IsRUFDcEIsS0FBYSxFQUNiLEtBQWtELEVBQ3hDLFdBQWlDO1FBRTNDLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRnZCLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJQUcvQyxDQUFDO0lBRU0sbUJBQW1CO1FBRXRCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRU0sUUFBUTtRQUVYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBVyxDQUFBO0lBQ3RFLENBQUM7Q0FDSiJ9