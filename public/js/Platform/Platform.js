import Display from "./Display.js";
import MessageManager from "../MessageManager.js";
import InputManager from "./InputManager.js";
import GC from "../GC.js";

export default class Platform {
    constructor() {}
    static get() {
        if (!Platform.platform) {
            Platform.platform = new Platform();
        }
        return Platform.platform;
    }
    init() {
        Display.get().init();
        //TODO Input Manager
    }
    update(dt) {
        InputManager.get().update(dt)
    }
    audio() {
        MessageManager.get().messages[GC.MSG_SOURCE_RATS].forEach(message => {
            switch(message.type) {
                case GC.MSG_WINDOW_RESIZE: {
                    console.log("Audio rcvd Window Resize Message")
                }
                break;
                default:
                    break;
            }
        })
    }
    render() {
        MessageManager.get().messages[GC.MSG_SOURCE_RATS].forEach(message => {
            switch(message.type) {
                case GC.MSG_WINDOW_RESIZE: {
                    console.log("Render rcvd Window Resize Message")
                }
                break;
                default:
                    break;
            }
        })
    }
}
