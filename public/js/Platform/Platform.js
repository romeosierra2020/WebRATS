import Display from './Display.js'

export default class Platform {
    constructor() {
        Display.get().init();
    }
    static get() {
        if (!Platform.platform) {
            Platform.platform = new Platform();
        }
        return Platform.platform;
    }
}
