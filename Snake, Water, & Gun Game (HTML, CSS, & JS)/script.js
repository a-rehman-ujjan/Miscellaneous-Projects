var audio = new Audio("Files/interface-124464.mp3");
var audio2 = new Audio("Files/click-for-game-menu-trial-131903.mp3")
let pchoice;
let pscore = 0;
let cscore = 0;

const pcs = async () => {
  await audio2.play()
  pchoice = "S"
  document.getElementById("ips").classList.remove("unselected")
  document.getElementById("ipw").classList.add("unselected")
  document.getElementById("ipg").classList.add("unselected")
  document.getElementById("cs").classList.add("unselected")
  document.getElementById("cw").classList.add("unselected")
  document.getElementById("cg").classList.add("unselected")
  document.getElementById("result").innerHTML = "-"
  document.getElementById("score").innerHTML = "-"
  lrun()
}
const pcw = async () => {
  await audio2.play()
  pchoice = "W"
  document.getElementById("ipw").classList.remove("unselected")
  document.getElementById("ips").classList.add("unselected")
  document.getElementById("ipg").classList.add("unselected")
  document.getElementById("cs").classList.add("unselected")
  document.getElementById("cw").classList.add("unselected")
  document.getElementById("cg").classList.add("unselected")
  document.getElementById("result").innerHTML = "-"
  document.getElementById("score").innerHTML = "-"
  lrun()
}
const pcg = async () => {
  await audio2.play()
  pchoice = "G"
  document.getElementById("ipg").classList.remove("unselected")
  document.getElementById("ipw").classList.add("unselected")
  document.getElementById("ips").classList.add("unselected")
  document.getElementById("cs").classList.add("unselected")
  document.getElementById("cw").classList.add("unselected")
  document.getElementById("cg").classList.add("unselected")
  document.getElementById("result").innerHTML = "-"
  document.getElementById("score").innerHTML = "-"
  lrun()
}




const lrun = async () => {
  setTimeout(async () => {
    const ccn = Math.floor(Math.random() * 3) + 1
    let cc;
    if (ccn == 1) {
      cc = "S"
      document.getElementById("cs").classList.remove("unselected")
      document.getElementById("cw").classList.add("unselected")
      document.getElementById("cg").classList.add("unselected")
    }
    else if (ccn == 2) {
      cc = "W"
      document.getElementById("cw").classList.remove("unselected")
      document.getElementById("cs").classList.add("unselected")
      document.getElementById("cg").classList.add("unselected")
    }
    else {
      cc = "G"
      document.getElementById("cg").classList.remove("unselected")
      document.getElementById("cs").classList.add("unselected")
      document.getElementById("cw").classList.add("unselected")
    }

    if (pchoice == "S" && cc == "S") {
      await audio.play();
      document.getElementById("result").innerHTML = "Its A draw, Try Again Kid"
      document.getElementById("score").innerHTML = "Score For None"
    }
    else if (pchoice == "S" && cc == "W") {
      await audio.play();
      document.getElementById("result").innerHTML = "OH NO!! \"Your Snake Drank My Water\""
      document.getElementById("score").innerHTML = "Score For You"
      document.getElementById("pscore").innerHTML = `${++pscore}`
      if (pscore == 3) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final-again").style.display = "flex"
      } else if (cscore == 3) {
        document.getElementById("final").innerHTML = "You Lost"
        document.getElementById("final-again").style.display = "flex"
      }
    }
    else if (pchoice == "S" && cc == "G") {
      await audio.play();
      document.getElementById("result").innerHTML = "HEHE!! \"I Shot Your Little Snake\""
      document.getElementById("score").innerHTML = "Score For Computer"
      document.getElementById("cscore").innerHTML = `${++cscore}`
      if (pscore == 3) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final-again").style.display = "flex"
      } else if (cscore == 3) {
        document.getElementById("final").innerHTML = "You Lost"
        document.getElementById("final-again").style.display = "flex"
      }
    }
    else if (pchoice == "W" && cc == "S") {
      await audio.play();
      document.getElementById("result").innerHTML = "HEHE!! \"My Snake Drank Your Water\""
      document.getElementById("score").innerHTML = "Score For Computer"
      document.getElementById("cscore").innerHTML = `${++cscore}`
      if (pscore == 3) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final-again").style.display = "flex"
      } else if (cscore == 3) {
        document.getElementById("final").innerHTML = "You Lost"
        document.getElementById("final-again").style.display = "flex"
      }
    }
    else if (pchoice == "W" && cc == "W") {
      await audio.play();
      document.getElementById("result").innerHTML = "Its A draw, Try Again Kid"
      document.getElementById("score").innerHTML = "Score For None"
    }
    else if (pchoice == "W" && cc == "G") {
      await audio.play();
      document.getElementById("result").innerHTML = "OH NO!! \"My Gun Drowned In Water you brought\""
      document.getElementById("score").innerHTML = "Score For You"
      document.getElementById("pscore").innerHTML = `${++pscore}`
      if (pscore == 3) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final-again").style.display = "flex"
      } else if (cscore == 3) {
        document.getElementById("final").innerHTML = "You Lost"
        document.getElementById("final-again").style.display = "flex"
      }
    }
    else if (pchoice == "G" && cc == "S") {
      await audio.play();
      document.getElementById("result").innerHTML = "OH NO!! \"You Shot My Snake, Have Some Mercy\""
      document.getElementById("score").innerHTML = "Score For You"
      document.getElementById("pscore").innerHTML = `${++pscore}`
      if (pscore == 3) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final-again").style.display = "flex"
      } else if (cscore == 3) {
        document.getElementById("final").innerHTML = "You Lost"
        document.getElementById("final-again").style.display = "flex"
      }
    }
    else if (pchoice == "G" && cc == "W") {
      await audio.play();
      document.getElementById("result").innerHTML = "HEHE!! \"Your Gun Drowned In Water I brought\""
      document.getElementById("score").innerHTML = "Score For Computer"
      document.getElementById("cscore").innerHTML = `${++cscore}`
      if (pscore == 3) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final-again").style.display = "flex"
      } else if (cscore == 3) {
        document.getElementById("final").innerHTML = "You Lost"
        document.getElementById("final-again").style.display = "flex"
      }
    }
    else if (pchoice == "G" && cc == "G") {
      await audio.play();
      document.getElementById("result").innerHTML = "Its A draw, Try Again Kid"
      document.getElementById("score").innerHTML = "Score For None"
    }

  }, 2000)



}

