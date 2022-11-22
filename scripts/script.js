// random number
const randomNumber = Math.floor(Math.random() * 100) + 1;

let score = 10;

document.querySelector(".btn-submit").addEventListener("click", function () {
  const userInput = Math.ceil(Number(document.querySelector(".user").value));

  if (userInput < 1 || randomNumber > 100) {
    document.querySelector(".error-message").style.display = "black";

    document.querySelector(".error-message").style.color = "rad";

    document.querySelector(".error-message").innerText = "Enter a valid input";
  } else {
    if (score > 1) {
      if (userInput === randomNumber) {
        document.querySelector(".error-message").style.display = "black";

        document.querySelector(".error-message").style.color = "green";

        document.querySelector(".random-guess").innerText = randomNumber;

        document.querySelector(
          ".error-message"
        ).innerText = `You Won, Score : ${score}`;
      } else {
        if (randomNumber > userInput) {
          document.querySelector(".error-message").style.display = "black";

          document.querySelector(".error-message").style.color = "rad";

          document.querySelector(".error-message").innerText =
            "Your Guess is Lower";

          score = score - 1;
          document.querySelector(".score").innerText = score;
        }
        if (randomNumber < userInput) {
          document.querySelector(".error-message").style.display = "black";

          document.querySelector(".error-message").style.color = "rad";

          document.querySelector(".error-message").innerText =
            "Your Guess is Greater";

          score = score - 1;
          document.querySelector(".score").innerText = score;
        }
      }
    } else {
      document.querySelector(".error-message").style.display = "black";

      document.querySelector(".error-message").innerText = "The Game is Over";

      document.querySelector(".random-guess").innerText = randomNumber;
    }
  }

  console.log(userInput);
});
