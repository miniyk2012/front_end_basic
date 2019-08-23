/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
    let firstBottle = num > 1 ? 'bottles' : 'bottle';
    let secondBottle = num === 2 ? 'bottle' : 'bottles';
    let output = `${num} ${firstBottle} of juice on the wall! ${num} ${firstBottle} of juice! Take one down, pass it around... ${num-1} ${secondBottle} of juice on the wall!`;
    console.log(output);
    num--;
}
