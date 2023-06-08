import MessageManager from "../MessageManager.js";
import GC from "../GC.js";
import CueManager from "./CueManager.js";
import SoundManager from "./SoundManager.js";
import CameraManager from "./CameraManager.js";

export default class RATSApp {
    constructor() {
        
    }
    static get() {
        if(!RATSApp.ratsApp) {
            RATSApp.ratsApp = new RATSApp();
        }
        return RATSApp.ratsApp;
    }
    init(){
        this.soundManager = new SoundManager();
        this.cueManager = new CueManager();
        this.cameraManager = new CameraManager();
        //Init Focus
        //Init Camera Manager
        //Init Background
        //Init Global Controls
    }
    update(dt){
        MessageManager.get().messages[GC.MSG_SOURCE_WINDOW].forEach(message => {
            switch(message.type) {
                case GC.MSG_WINDOW_RESIZE: {
                    console.log("RATS rcvd Window Resize Message")
                }
                break;
                default:
                    break;
            }
        })
        this.cueManager.update(dt)
        this.soundManager.update(dt)
        this.cameraManager.update(dt)
    }
}