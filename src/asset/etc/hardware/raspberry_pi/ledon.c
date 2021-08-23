/*
    command : 
        gcc -o ledon ledon.c -l wiringPi
        sudo ./ledon

    reference : 
        Addon -> https://aerocode.net/341
*/

#include <stdio.h>
#include <wiringPi.h>
#define led 18

int main(void) {
    wiringPiSetupGpio();
    pinMode(led, OUTPUT);

    printf("LED ON ");
    
    while(1){ // 무한루프 발생
        digitalWrite(led, HIGH); // LED ON : 1 or HIGH
    }

    return 0;

}