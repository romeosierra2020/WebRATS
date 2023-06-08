import MessageManager from "../MessageManager.js";
import GC from "../GC.js";
import Camera from "./Camera.js";

export default class CameraManager {
    constructor() {}
    update() {
        MessageManager.get().messages[GC.MSG_SOURCE_WINDOW].forEach(
            (message) => {
                switch (message.type) {
                    case GC.MSG_WINDOW_RESIZE:
                        {
                            console.log(
                                "CameraManager rcvd Window Resize Message"
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
