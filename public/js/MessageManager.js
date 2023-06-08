import Message from "./Message.js";

export default class MessageManager {
    constructor() {}
    static get() {
        if(!MessageManager.messageManager) {
            MessageManager.messageManager = new MessageManager();
        }
        return MessageManager.messageManager;
    }
    init(){
        this.messages = [[],[],[],[],[]];
        
    }
    send(target, message) {
        target = Math.floor(target);
        if(target < 0 || target > this.messages.length || target !== Math.floor(target)) {
            throw new Error(`Target: ${target} is invalid`)
        }
        if(!(message instanceof(Message))) {
            throw new Error(`Message is invalid`)
        }
        this.messages[target].push(message);
        //console.log(`${target} ${message.data.width} message rcvd`)
    }
    clear(){
        this.messages = [[],[],[],[],[]];
    }
}