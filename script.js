let randomNum = 0;

const rollBtn = document.getElementById("button");
const randLabel = document.getElementById("randLabel");
const minInp = document.getElementById("min");
const maxInp = document.getElementById("max");

rollBtn.onclick = function(){
    let min = minInp.value;
    let max = maxInp.value;

    min = Number(min);
    max = Number(max);

    randomNum = Math.round(Math.random() * (max-min)) + min;

    randLabel.textContent = randomNum;
}

