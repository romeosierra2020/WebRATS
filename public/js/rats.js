import MessageManager from "./MessageManager.js"
import Platform from "./Platform/Platform.js"
import RATSApp from "./RATSApp/RATSApp.js"
import GC from "./GC.js"

GC.init();
MessageManager.get().init()
Platform.get().init();
RATSApp.get().init();
let elapsedFrameTime = 0;
let nextFrame = 1000;
let lastTime = 0;
function tick(timeStamp) {
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;
    elapsedFrameTime += dt;
    if(!Platform.get().quit) {
        if(elapsedFrameTime>nextFrame) {
            console.log("Tick")
            Platform.get().update();
            RATSApp.get().update(dt);
            RATSApp.get().render();
            Platform.get().audio();
            Platform.get().render();
            MessageManager.get().clear()
            elapsedFrameTime -= nextFrame
        }
        window.requestAnimationFrame(tick)
    } else {
        console.info('Goodbye')
    }
}

window.requestAnimationFrame(tick);