function getRandomHexCode() {
  const characters = '0123456789ABCDEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * 16)];
  }
  return hexCode;
}

function generateRandomColor(){
  for (let i = 1; i < 6; i++){
    x = getRandomHexCode();
    document.getElementById(`colorBox${i}`).style.backgroundColor = x;
    document.getElementById(`cb${i}Button`).className = '';
    document.getElementById(`cb${i}Button`).classList.add(x);
    document.getElementById(`cb${i}Code`).className = '';
    document.getElementById(`cb${i}Code`).innerHTML = `${x}`;
  }
}

function copytoclipboard(id){
  txt = document.getElementById(id).className;
  navigator.clipboard.writeText(txt);
  document.getElementById(id).textContent = 'Copied';
  setTimeout(() => {
    document.getElementById(id).textContent = 'Copy';
  }, 1000);
}
