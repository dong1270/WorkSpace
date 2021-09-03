const shell = require('shelljs');

const self = {};

self.led = async (signal) => {
    const mySignal = signal.ledSwitch;
    let ret;
    if(mySignal == 'on'){
        await shell.exec('sudo ./src/C_Language/ledOn');
        ret = 'led On!!';
        // ret = shell.pwd();
    }
    else {
        await shell.exec('sudo ./src/C_Language/ledOff');
        ret = 'led Off!!';
    }

    return ret;
}

module.exports = self;