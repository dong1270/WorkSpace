const shell = require('shelljs');

const self = {};

self.led = async (signal) => {
    const mySignal = signal.ledSwitch;
    if(mySignal == 'on'){
        await shell.exec('sudo ./src/C_Language/ledOn');
        // ret = shell.pwd();
    }
    else {
        await shell.exec('sudo ./src/C_Language/ledOff');
    }

}

module.exports = self;