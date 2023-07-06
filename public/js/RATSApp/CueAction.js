import GC from "../GC.js"

export default class CueAction {
    constructor(cue) {
        this.targetSound = 0;
        this.requestedState = GC.SOUND_READY;
        this.target = 0;
        this.timeToTarget = 0;
        this.statePostDelay = GC.NONE;
    }
}