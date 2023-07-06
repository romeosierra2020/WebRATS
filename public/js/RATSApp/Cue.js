export default class Cue {
    constructor(cue) {
        console.log(cue);
        this.id = cue.id;
        this.name = cue.name;
        this.cueActions = [...cue.cueActions];
    }
}
