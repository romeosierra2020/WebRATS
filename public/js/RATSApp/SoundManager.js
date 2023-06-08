import MessageManager from "../MessageManager.js";
import GC from "../GC.js";
import Sound from "./Sound.js";

export default class SoundManager {
    constructor() {
        this.sounds = [];
        let show = document.getElementById('show').innerText;
        if(show) {
            try {
                let showJSON = JSON.parse(show);
                console.log(showJSON.sounds.length)
                showJSON.sounds.forEach(sound => {
                    console.log("Creating Sound")
                    this.sounds.push(new Sound(sound))
                })
                console.log('Successfully Parsed')
            } catch(err) {
                console.log("File Corrupt")
            }
        }
        this.sounds.forEach(sound => {
            sound.loadSound();
        })
    }
    update(){
        MessageManager.get().messages[GC.MSG_SOURCE_WINDOW].forEach(message => {
            switch(message.type) {
                case GC.MSG_WINDOW_RESIZE: {
                    console.log("SoundManager rcvd Window Resize Message")
                }
                break;
                default:
                    break;
            }
        })
    }
}