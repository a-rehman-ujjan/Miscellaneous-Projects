// Guess the Number

let guessed_number = (Math.floor(Math.random() * 100) + 1)
// console.log(guessed_number)
let input_number;
let i = 0;

const f1 = () => {
  input_number = document.getElementById("input_num").value
  console.log(input_number)
  let score = 100 - i;
  i++
  if (i <= 100) {
    if (input_number < 1 || input_number > 100) {
      document.getElementById("invalid-number").style.display = "initial"
      document.getElementById("result").innerHTML = ""
    }
    else {
      document.getElementById("invalid-number").style.display = "none"
      if (input_number == guessed_number) {
        document.getElementById("result").innerHTML = `That's Correct!! Your Score is ${score}/100`
        document.getElementById("num_sub").style.display = "none"
      }
      else if (input_number > guessed_number) {
        document.getElementById("result").innerHTML = `Number Is Greater!!`
      }
      else if (input_number < guessed_number) {
        document.getElementById("result").innerHTML = `Number Is Smaller!!`
      }
    }
  }
  else {
    document.getElementById("result").innerHTML = `You Lost The Number Was ${guessed_number}`
    document.getElementById("num_sub").style.display = "none"
  }
}

