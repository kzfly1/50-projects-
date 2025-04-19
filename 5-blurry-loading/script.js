const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

function int(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

async function blurring() {
  if (load > 99) return;

  load++;
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  await int(30); //等待30ms
  await blurring(); //递归调用自己
}

blurring();
