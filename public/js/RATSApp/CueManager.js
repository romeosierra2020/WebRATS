import MessageManager from "../MessageManager.js";
import GC from "../GC.js";
import Cue from "./Cue.js";

export default class CueManager {
    constructor() {
        let show = document.getElementById('show').innerText;
        //TODO Parse show to individual cues
    }
    update(){
        MessageManager.get().messages[GC.MSG_SOURCE_WINDOW].forEach(message => {
            switch(message.type) {
                case GC.MSG_WINDOW_RESIZE: {
                    console.log("CueManager rcvd Window Resize Message")
                }
                break;
                default:
                    break;
            }
        })
    }
}