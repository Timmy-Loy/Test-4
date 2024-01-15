let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
const age = 15;
if (age > 18 && registeredEarly === true) { 
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true) {
  console.log('Racer ' + raceNumber + ', You will race at 9:30 am');
}else if (age > 18 && registeredEarly === false) {
  console.log('Racer ' + raceNumber + ',you registered late so you will race at 11:00 am');
}else if (age < 18) {
  console.log('Racer ' + raceNumber + ', you will race at 12:30 pm')
}else {
  console.log('Please go to the registration desk')
}