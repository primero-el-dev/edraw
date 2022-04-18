import Canvas from './../../Element/Canvas.js';
interface DrawStrategy {
    setListeners(canvas: Canvas): void;
}
export default DrawStrategy;
