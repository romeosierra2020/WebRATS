import GC from "../GC.js";

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

    }
    loadSound() {
        this.audio = new Audio();
        this.audio.src = `../../res/sfx/${this.name}.wav`;
        this.audio.addEventListener('canplaythrough', () => {
            console.log(this.name, " Can Play Through")
            this.state = GC.SOUND_READY;
        })
    }
}