export default class HTMLElementFactory {
    static createInput(type, attributes = {}) {
        let input = document.createElement('input');
        input.type = type;
        for (let attribute in attributes) {
            input[attribute] = attributes[attribute];
        }
        return input;
    }
    static createActionButton(text, title) {
        let button = document.createElement('button');
        button.title = title;
        button.innerText = text;
        button.classList.add('button--action');
        return button;
    }
    static createConfigLabel(text) {
        let label = document.createElement('label');
        label.classList.add('config-label');
        label.innerText = text;
        return label;
    }
    static createConfigRow(configItem) {
        let label = document.createElement('label');
        label.classList.add('config-row');
        let paragraph = document.createElement('span');
        paragraph.classList.add('config-label');
        paragraph.innerText = configItem.getLabel();
        label.append(paragraph);
        label.append(configItem.getElementWithValue());
        return label;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTEVsZW1lbnRGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VsZW1lbnQvSFRNTEVsZW1lbnRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sa0JBQWtCO0lBRTVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBWSxFQUFFLGFBQWlDLEVBQUU7UUFFdkUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixLQUFLLElBQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUM5QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQzNDO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUV4RCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFZO1FBRXhDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDbkMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFFdEIsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBc0I7UUFFaEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUVqQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3ZDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRTNDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBO1FBRTlDLE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7Q0FDSiJ9