let userName = 'Niall'
let userQuestion = 'Does Eddie smell?'
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''

switch (randomNumber){
   case 0:
  eightBall = 'It is certain';
  break;
   case 1:
   eightBall = 'It is decidedly so';
  break;
   case 2:
   eightBall = 'Reply hazy try again';
  break;
   case 3:
   eightBall = 'Cannot predict now';
  break;
   case 4:
   eightBall = 'Do not count on it';
  break;
   case 5:
   eightBall = 'My sources say no';
  break;
   case 6:
   eightBall = 'Outlook not so good';
  break;
   case 7:
   eightBall = 'Signs point to yes';
  break;
  default:
  console.log('You did not roll the dice');
  break;
}

userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello!');
console.log(`${userName} asked ${userQuestion}`);
console.log(`The magic eightball says: ${eightBall}`);
