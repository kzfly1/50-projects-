// const progress = document.getElementById("progress");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const circles = document.querySelectorAll(".circle");

// let currentActive = 1;
// next.addEventListener("click", function () {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }

//   update();
// });

// prev.addEventListener("click", function () {
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });

// function update() {
//   circles.forEach((circle, index) => {
//     index < currentActive
//       ? circle.classList.add("active")
//       : circle.classList.remove("active");
//   });

//   const actives = document.querySelectorAll(".active");

//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const totalSteps = circles.length;

let currentActive = 1;

// Event listeners using arrow functions for consistency
next.addEventListener("click", () => {
  currentActive = Math.min(currentActive + 1, totalSteps);
  update();
});

prev.addEventListener("click", () => {
  currentActive = Math.max(currentActive - 1, 1);
  update();
});

function update() {
  // Update circle states
  circles.forEach((circle, idx) =>
    circle.classList.toggle("active", idx < currentActive)
  );

  // Calculate progress width
  progress.style.width = `${((currentActive - 1) / (totalSteps - 1)) * 100}%`;

  // Update button states
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === totalSteps;
}
