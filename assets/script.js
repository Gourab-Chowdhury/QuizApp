const questions = [
    {
      'que': 'Which HTML element is used to define the largest heading?',
      'a': '<h1>',
      'b': '<h6>',
      'c': '<head>',
      'd': '<header>',
      'correct': 'a'
    },
    {
      'que': 'Which CSS property is used to change the text color of an element?',
      'a': 'font-color',
      'b': 'text-color',
      'c': 'color',
      'd': 'background-color',
      'correct': 'c'
    },
    {
      'que': 'What is the correct syntax for linking an external JavaScript file in HTML?',
      'a': '<script src="script.js"></script>',
      'b': '<link href="script.js" />',
      'c': '<javascript src="script.js"></javascript>',
      'd': '<js file="script.js"></js>',
      'correct': 'a'
    },
    {
      'que': 'Which JavaScript method is used to add an event listener to an element?',
      'a': 'addEventListener()',
      'b': 'onEvent()',
      'c': 'attachEvent()',
      'd': 'bindEvent()',
      'correct': 'a'
    },
    {
      'que': 'What does the HTTP status code 404 indicate?',
      'a': 'Server Error',
      'b': 'Page Not Found',
      'c': 'Request Successful',
      'd': 'Unauthorized Access',
      'correct': 'b'
    }
];
  

let index = 0;
let total = questions.length;
let right =0, wrong = 0;

const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll(".options")
const loadquestion = () => {
  if(index === total){
    return endQuiz()
  }
    reset();
    const data = questions[index]
    quesbox.innerText = `${index +1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText =  data.a;
    optionInputs[1].nextElementSibling.innerText =  data.b;
    optionInputs[2].nextElementSibling.innerText =  data.c;
    optionInputs[3].nextElementSibling.innerText =  data.d;
} ;


const submitquiz = () =>{
  const data = questions[index]
  const ans = getAns()
  if (ans === data.correct){
    right++
  } else{
    wrong++;
  }
  index++;
  loadquestion();
  return;
}

const getAns =() =>{
  let ans;
  optionInputs.forEach(
        (input) =>{
          if(input.checked){
            ans =  input.value;
          }
        }
  )
  return ans
}
    

const reset = () =>{
  optionInputs.forEach(
    (input) => {
      input.checked = false      
    }
  )
}


const endQuiz =() =>{
  document.getElementById("box").innerHTML= `
  <div>
    <h3>Thanks for attempting the quiz.</h3>
    <h2>You answered correctly at ${right} questions.</h2><br>
    <h2>You answered wrong at ${wrong} questions.</h2><br>
    <h2>You scored ${right} out of ${total}.</h2>
    
  </div>  `
}


// Question call
loadquestion();