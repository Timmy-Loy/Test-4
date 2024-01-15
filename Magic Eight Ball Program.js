const randomNumber = Math.floor(Math.random() * 8)
const userName = 'Timmy'.toUpperCase
let questionAsked = 'Question'
const eightBallPrediction = () => {
  switch (randomNumber) {
    case 0 : 
      return `Yes, ${userName}`;
        break; 
    case 1 : 
      return `Reply hazy, try again`;
      break;
    case 2 :
      return `The future is bright, ${userName}`;
      break;
    case 3 :
      return `I wouldn't be so sure`;
      break;
    case 4 : 
      return `My sources say no`;
      break;
    case 5 :
      return `Technical Error!`;
      break;
    case 6 : 
      return `Of course`;
     break;
    case 7 :
      return `Definitely`;
      break;
    case 8 :
      return `Signs point to yes`;
      break;
      
  }
}
console.log(`${userName} has asked - ${questionAsked}?`);
console.log(`Prediction : ${eightBallPrediction ('')}`)

//The Magic 8 Ball is a plastic sphere, made to look like an oversized eight ball , that is used for fortune-telling or seeking advice.
 Usually ‎‎Yes/no questions...
