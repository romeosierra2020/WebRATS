
export default class Display {
    constructor() {
        
    }
    static get() {
        if(!Display.display) {
            Display.display = new Display();
        }
        return Display.display;
    }
    init () {
        console.info("Display Initialised.")
    }
}