const BUFFERSIZE = 4096

class tunerProcessor extends AudioWorkletProcessor {
    constructor() {
        super();

        this._buffer = new Float32Array(BUFFERSIZE);
        this._bytesWritten = 0;
        this._full = false;
    }

    process(inputs) {
        // called for each audio frame to be processed
        //implement circular buffer
        
    }
}

registerProcessor("tuner", tunerProcessor);
