import MessageManager from "../MessageManager.js";
import GC from "../GC.js";
import Cue from "./Cue.js";

export default class CueManager {
    constructor() {
        this.cues = [];
        let show = document.getElementById('show').innerText;
        if(show) {
            try {
                let showJSON = JSON.parse(show);
                console.log(showJSON.cues.length)
                showJSON.cues.forEach(cue => {
                    console.log("Creating Cue")
                    this.cues.push(new Cue(cue))
                })
                console.log('Successfully Parsed')
            } catch(err) {
                console.log("File Corrupt")
            }
        }
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