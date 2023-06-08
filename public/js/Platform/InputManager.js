import MessageManager from "../MessageManager.js";
import Message from "../Message.js";
import GC from "../GC.js";

export default class InputManager {
    constructor() {
        this.canvasOffset = {}
    }
    static get() {
        if (!InputManager.inputManager) {
            InputManager.inputManager = new InputManager();
        }
        return InputManager.inputManager;
    }
    init() {
        window.addEventListener("keydown", (e) => {
            let msg = new Message(GC_MSG_KEY_DOWN, { key: e.key });
            MessageManager.get().send(GC.MSG_SOURCE_INPUT, msg);
        });
        window.addEventListener("keyup", (e) => {
            let msg = new Message(GC_MSG_KEY_UP, { key: e.key });
            MessageManager.get().send(GC.MSG_SOURCE_INPUT, msg);
        });
        window.addEventListener("mousemove", (e) => {
            let msg = new Message(GC_MSG_MOUSE_MOTION, {
                x: e.offsetX - this.canvasOffset.x,
                y: e.offsetY - this.canvasOffset.y,
                buttons: e.buttons,
            });
            MessageManager.get().send(GC.MSG_SOURCE_INPUT, msg);
        });
        window.addEventListener("mouseup", (e) => {
            let msg = new Message(GC_MSG_MOUSE_BUTTON_UP, {
                x: e.offsetX - this.canvasOffset.x,
                y: e.offsetY - this.canvasOffset.y,
                button: e.button,
            });
            MessageManager.get().send(GC.MSG_SOURCE_INPUT, msg);
        });
        window.addEventListener("mousedown", (e) => {
            let msg = new Message(GC_MSG_MOUSE_BUTTON_DOWN, {
                x: e.offsetX - this.canvasOffset.x,
                y: e.offsetY - this.canvasOffset.y,
                button: e.button,
            });
            MessageManager.get().send(GC.MSG_SOURCE_INPUT, msg);
        });
        window.addEventListener("wheel", (e) => {
            let msg = new Message(GC_MSG_MOUSE_WHEEL, { key: e.deltaY });
            MessageManager.get().send(GC.MSG_SOURCE_INPUT, msg);
        });
    }
    update() {
        MessageManager.get().messages[GC.MSG_SOURCE_WINDOW].forEach(
            (message) => {
                switch (message.type) {
                    case GC.MSG_WINDOW_RESIZE:
                        {
                            this.canvasOffset.x = message.data.offsetX;
                            this.canvasOffset.y = message.data.offsetY;
                            console.log(
                                `X: ${message.data.offsetX}, Y: ${message.data.offsetY}`
                            );
                        }
                        break;
                    default:
                        break;
                }
            }
        );
    }
}
