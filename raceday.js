let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnersAge = 32;

if (registeredEarly==true && runnersAge>18){
  raceNumber += 1000;
}

if (registeredEarly==true && runnersAge>18){
  console.log(`Your race starts at 9:30am and your number is ${raceNumber}`);
}else if (registeredEarly==false && runnersAge>18){
  console.log(`Your race starts at 9:30am and your number is ${raceNumber}`)
}else if (runnersAge < 18){
  console.log(`Youth runners run at 12:30pm and your number is ${raceNumber}`)
}else if (runnersAge===18){
  console.log('18 year olds run at 12:00pm. Please see regsitration desk for further details')
}
