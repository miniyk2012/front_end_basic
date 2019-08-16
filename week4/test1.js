/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 * 
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

var quote = "Stay awhile and listen!";
console.log(quote[6]);
console.log(quote.charAt(6));
console.log('The man whispered, \"please speak to me.\"');
console.log("Up up\n\tdown down");
console.log("The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.");

/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madLib = `The Intro to JavaScript course is ${adjective1}.` +
` James and Julia are so ${adjective2}.` + 
` I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib);

/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here

var firstName = 'yang';
var interest = 'TV';
var hobby = 'play games';
var awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`;
console.log(awesomeMessage);