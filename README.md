# Mr. Robogers Neighborhood

#### By Henry Sullivan

#### Application will take a number for an input, and return a list of numbers from 0 to the inputted number. It will replace numbers containing 1s, 2s, and 3s, with Beep!, Boop!, and "Won't you be my neighbor?" respectively. 

## Technologies Used

- Javascript
- HTML
- CSS
- Bootstrap

## Description

This application can take any number as an input, and create a list counting up to that number from zero, all while replacing any number that contains a 1 with "Beep!", and number that contains a 2 with "Boop!", and any number that contains a 3 with "Won't you be my neighbor?"

## Setup/Installation Requirements

- Clone this repository to the Desktop
- Navigate to the top level of the directory
- Open index.html in the browser
- Can find the project on GitHub by using link https://github.com/hbsullivan/mr-robogers-neighborhood


## Tests

Describe: countUp()

Test: "It should return an array of numbers from 0 to the user's inputted number"\
Code: \countUp(5);\
Expected Output: [0, 1, 2, 3, 4, 5]\


Describe: beepBoop(countUpArray)\

Test: "It should convert number array into a string array"\
Code:\ beepBoop(countUpArray)\
countUpArray = [0,1, 2, 3, 4, 5]\
Expected Output: ['0', '1', '2' ,'3' ,'4', '5']\

Test: "It should return an array with 3 being replaced with 'Won't you be my neighbor?'"\
Code:\ beepBoop(countUpArray)\
Expected Output: [0,1,2,"won't you be my neighbor",4,5]\

Test: "It should return an array with 2 being replaced with 'Boop!'"\
Code:\ beepBoop(countUpArray)\
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5]\

Test: "It should return an array with 1 being replaced with 'Beep!'"\
Code: \beepBoop (countUpArray)\
Expected Output: [0, "Beep!, "Boop!", "Won't you be my neighbor?", 4, 5]\

Test: "It should replace all numbers containing a three with 'Won't you be my neighbor?'"\
Code: \
countUpArray = ['31','2', '1']\
beepBoop(countUpArray)\
Expected Output: ["Won't you be my neighbor", '2', '1']\

Test: "It should replace all numbers containing a 1 and a 2 with Beep! and Boop! Respectively\
Code: \
countUpArray = ['31','21', '11']\
beepBoop(countUpArray)\
Expected Output: ["Won't you be my neighbor", 'Boop!', 'Beep!']\

## Known Bugs

- Only changes numbers containing 1, 2, and 3 up to a certain idex

## License

MIT License

Copyright (c) [2022] [Henry Sullivan]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.