var Gpio = require('onoff').Gpio;
var LedPin1 = new Gpio(4, 'out');
var LedPin2 = new Gpio(17, 'out');

LedPin1.writeSync(1)
LedPin2.writeSync(1)

var blinkInterval1=setInterval(blinkLED1,250);
var blinkInterval2=setInterval(blinkLED2,250);

setTimeout(endBlink, 15000); //計時器
process.on('SIGINT',endBlink)


function blinkLED1(){
    if(LedPin1.readSync()===0){
        LedPin1.writeSync(1);
    }else{
        LedPin1.writeSync(0);
    }
}
function blinkLED2(){
    if(LedPin2.readSync()===0){
        LedPin2.writeSync(1);
    }else{
        LedPin2.writeSync(0);
    }
}


// 結束
function endBlink() {
    LedPin1.writeSync(0)
    LedPin2.writeSync(0)
    LedPin1.unexport(); //把pin腳釋放出去，不要再被佔住。使其他人也可以使用
    LedPin2.unexport();
}