/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 * Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
写一个 while 循环，从 60 秒开始倒计时：

如果有正在执行的任务，则输出该任务（英文而不是翻译）
如果当前未执行任何任务，则输出 "T-x seconds"

 */

// your code goes here
let reverseSeconds = 60;
while (reverseSeconds >= 0) {
    switch (reverseSeconds) {
        case 50:
            console.log('Orbiter transfers from ground to internal power');
            break;
        case 31:
            console.log('Ground launch sequencer is go for auto sequence start');
            break;
        case 16:
            console.log('Activate launch pad sound suppression system');
            break;
        case 10:
            console.log('Activate main engine hydrogen burnoff system');
            break;
        case 6:
            console.log('Main engine start');
            break;
        case 0:
            console.log('Solid rocket booster ignition and liftoff!');
            break;
        default:
            console.log('T-' + reverseSeconds + ' seconds');
            break;
    }
    reverseSeconds--;
}