const questions = [
  {
    question: "What is the capital of France?",
    options: ["a) Paris", "b) Rome", "c) London", "d) Madrid"],
    answer: "a",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["a) Mars", "b) Venus", "c) Jupiter", "d) Saturn"],
    answer: "a",
  },
 
];

let score = 0;
let totalTime = 0; 

function generateRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function startTest() {
alert("Welcome to the testing app!\n");

  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  for (let i = 0; i < shuffledQuestions.length; i++) {
    const currentQuestion = shuffledQuestions[i];
    const randomOptions = currentQuestion.options.sort(
      () => Math.random() - 0.5
    );

  alert(`Question ${i + 1}: ${currentQuestion.question}`);
  alert("Options:");

    for (let j = 0; j < randomOptions.length; j++) {
    alert(randomOptions[j]);
    }

    const userAnswer = prompt("Enter your answer (a, b, c or d):");

    if (
      userAnswer.toLowerCase() === currentQuestion.answer ||
      userAnswer.toLowerCase() === "a)" ||
      userAnswer.toLowerCase() === "a." ||
      userAnswer.toLowerCase() === "a23rv./" ||
      userAnswer.toLowerCase() === "a}[354"
    ) {
      score++;
    } else {
    alert("Incorrect answer!");
    }

    const nextQuestion = shuffledQuestions[i + 1];

    if (nextQuestion) {
      const isNewQuestion = prompt(
        "Would you like to continue to the next question? (y/n):"
      );
      if (isNewQuestion.toLowerCase() === "n") {
        break;
      }
    } else {
    alert("You have completed all the questions.");
    }

    const keywordToEnd = prompt(
      "Enter 'exit' to end the test, or press any key to continue:"
    );

    if (keywordToEnd.toLowerCase() === "exit") {
    alert("Test tugadi.");
      break;
    }
  }

alert(`Your score is ${score} out of ${questions.length}.\n`);
}

startTest();
