import MessageManager from "../MessageManager.js";
import Message from "../Message.js";
import GC from "../GC.js";

export default class Display {
    constructor() {
        this.colors = {
            primary: 0x150578,
            secondary: 0x3943b7,
            contrast: 0x78c0e0,
            contrast2: 0x449dd1,
            black: 0x0b0a07,
            white: 0xf7f6f3,
        };
    }
    static get() {
        if (!Display.display) {
            Display.display = new Display();
        }
        return Display.display;
    }
    init() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.resize();
        //window.addEventListener("resize", this.resize.bind(this));
        document.querySelector("body").appendChild(this.canvas);
        document.title = "RATS";
        console.info("Display Initialised.");
    }
    resize() {
        this.width = window.innerWidth;
        this.height = Math.floor(window.innerHeight * 0.919);
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        let message = new Message(GC.MSG_WINDOW_RESIZE, {
            width: this.width,
            height: this.height,
            offsetX: window.innerWidth - this.width,
            offsetY: window.innerHeight - this.height,
        });
        MessageManager.get().send(GC.MSG_SOURCE_WINDOW, message);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    render() {
        MessageManager.get().messages[GC.MSG_SOURCE_RATS].forEach((message) => {
            switch (message.type) {
                case GC.MSG_RENDER_STROKERECT:
                    {
                        this.strokeRect(message.data);
                    }
                    break;
                case GC.MSG_RENDER_TEXT:
                    {
                        this.fillText(message.data);
                    }
                    break;

                default:
                    break;
            }
        });
    }
    strokeRect(ro) {
        this.ctx.strokeStyle = ro.color;

        console.log(ro.color);
        this.ctx.strokeRect(
            Math.floor(ro.x * this.width),
            Math.floor(ro.y * this.height),
            Math.floor(ro.width * this.width),
            Math.floor(ro.height * this.height)
        );
    }
    fillText(ro) {
        console.log(ro.font)
        this.ctx.fillStyle = ro.color;
        this.ctx.font = ro.font;
        this.ctx.fillText(
            ro.label,
            ro.x * this.width,
            ro.y * this.height,
            // ro.width * this.width,
            // ro.height * this.height
        );
    }
}
