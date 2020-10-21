const API_URL =
"https://opentdb.com/api.php?amount=20&category=9&type=multiple"

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

const accesData = (url) => {
  fetch(url)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Network response not ok!");
    })
    .then(function (data) {
      let questions = [];
      data.results.forEach((item) => {
        let choises = item.incorrect_answers;
        choises.push(item.correct_answer);
        let q = new Question(
          item.question,
          randomChoises(choises),
          item.correct_answer
        );
        questions.push(q);
      });

      return questions;
    })
    .then(function (questions) {
      // continue here
      let score = 0;
      seedData(questions, (index = 0), score);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const randomChoises = (choises) => {
  let index = 4;
  let randomChoises = [];

  while (choises.length !== 0) {
    let randomIndex = Math.floor(Math.random() * index);
    let removed = choises.splice(randomIndex, 1);
    index = index - 1;
    randomChoises.push(removed);
  }
  return randomChoises;
};

const seedData = (questions, index, score) => {
  const handleAnswer = (event) => {
    //verify answer
    if (
      document.getElementById(event.target.id).innerHTML ===
      questions[index].answer
    ) {
      score += 1;

    } 
    //move to next question
    seedData(questions, index + 1, score);
  };
  //verify if quiz is over
  if (index === questions.length) {
    //display score
    let gameOverHTML =
      '<h1 style="background-color: deepskyblue;">Results</h1>';
    gameOverHTML += "<h2 id='score'> Your scores: " + score +" of "+ questions.length+"</h2>";
    const element = document.querySelector(".container");
    element.innerHTML = gameOverHTML;
  } else {
    // display question
    const questionText = document.getElementById("question");
    questionText.innerHTML = questions[index].text;

    //display choices
    questions[index].choices.forEach((item, index) => {
      let button = document.querySelector("#btn" + index);
      button.innerHTML = item;
      button.addEventListener("click", handleAnswer);
    });

    // display question number in the footer
    let answer = index + 1;
    document.getElementById("progress").innerText =
      "Question " + answer + " of " + questions.length;
  }
};

accesData(API_URL);
