import GC from "../GC.js";
import RenderObject from "./RenderObject.js";

export default class Sound {
    constructor(sound) {
        console.log(sound.name)
        this.id = sound.id
        this.name = sound.name;
        this.initialVolume = sound.initialVolume;
        this.isReady = false;
        this.duration = 0;
        this.isFading = false;
        this.isDelayed = false;
        this.timeToDelayedAction = 0;
        this.timeToTargetVolume = 0;
        this.delayTimeStepPerSec = 0;
        this.fadeTimeStepPerSec = 0;
        this.volume = this.initialVolume;
        this.state = GC.SOUND_INITIALISING;
        this.ros = [];
    }
    loadSound() {
        this.audio = new Audio();
        this.audio.src = `../../res/sfx/${this.name}.wav`;
        this.audio.addEventListener('canplaythrough', () => {
            console.log(this.name, " Can Play Through")
            this.state = GC.SOUND_READY;
        })
    }
    generateROs(i) {
        this.ros = [];
        let ro = new RenderObject();
        ro.color = GC.COLOR_PRIMARY;
        ro.type = GC.MSG_RENDER_STROKERECT;
        ro.x = 0.75;
        ro.y = 0.032 * i + 0.2;
        ro.width = 0.24;
        ro.height = 0.036;
        this.ros.push(ro)
        ro = new RenderObject();
        ro.color = GC.COLOR_PRIMARY;
        ro.type = GC.MSG_RENDER_TEXT;
        ro.x = 0.754;
        ro.y = 0.032 * i + 0.224;
        ro.width = 0.24;
        ro.height = 0.060;
        ro.label = this.name;
        ro.font = "24px Trebuchet MS"
        this.ros.push(ro)
        console.log(this.ros)
    }
}