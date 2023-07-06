export default class GC {
    constructor() {
        console.error("GC is a Static Class");
    }
    static init() {
        GC.NONE = 0;
        GC.MSG_SOURCE_NONE = 0;
        GC.MSG_SOURCE_WINDOW = 1;
        GC.MSG_SOURCE_INPUT = 2;
        GC.MSG_SOURCE_AUDIO = 3;
        GC.MSG_SOURCE_RATS = 4;

        GC.MSG_WINDOW_RESIZE = 5;

        GC.MSG_KEY_DOWN = 6;
        GC.MSG_KEY_UP = 7;
        GC.MSG_MOUSE_MOTION = 8;
        GC.MSG_MOUSE_BUTTON_DOWN = 9;
        GC.MSG_MOUSE_BUTTON_UP = 10;
        GC.MSG_MOUSE_WHEEL = 11;
        GC.MSG_GAMEPAD_AXIS = 13;
        GC.MSG_GAMEPAD_BUTTON = 14;

        GC.MSG_AUDIO_SET_VOLUME = 15;
        GC.MSG_AUDIO_PLAY = 16
        GC.MSG_AUDIO_STOP = 17
        GC.MSG_AUDIO_PAUSE = 18
        GC.MSG_AUDIO_RESUME = 19
        GC.MSG_AUDIO_SKIP_TO = 20
        
        GC.RENDER = 21

        GC.QUIT = 22;

        GC.SOUND_INITIALISING = 23;
        GC.SOUND_READY = 24;
        GC.SOUND_PLAYING = 25;
        GC.SOUND_PAUSED = 26;
        GC.SOUND_FADING = 27;
        GC.SOUND_DELAYED = 28;

        GC.MSG_RENDER_STROKERECT = 29;
        GC.MSG_RENDER_FILLRECT = 30;
        GC.MSG_RENDER_TEXT = 31;
        
        GC.COLOR_ACCENT = '#150578';
        GC.COLOR_SECONDARY = '#3913B7'
        GC.COLOR_PRIMARY = '#78C0E0'
        GC.COLOR_ACCENT2 = '#449DD1'
        GC.COLOR_BLACK = '#0B0A07'
        GC.COLOR_WHITE = '#F7F6F3'
    }
}
