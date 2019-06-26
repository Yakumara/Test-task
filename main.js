let progress = document.querySelector('.progress-bar');
let numberBlock = document.querySelector('.number-block');
let number = document.querySelector('.number');
let numberNeed = document.querySelector('.need-number');

progress.oninput = function(){
  numberBlock.style.left = this.value*7 +'px';
  let a = number.innerHTML = this.value;
  numberNeed.innerHTML = 15 - a;
}