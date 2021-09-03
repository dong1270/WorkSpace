#include <stdio.h>
#include <stdlib.h>
#include <wiringPi.h>

const int ledNum = 17;

int main(void){
    wiringPiSetupGpio();
    pinMode(ledNum, OUTPUT);

    digitalWrite(ledNum, LOW);
    
}

