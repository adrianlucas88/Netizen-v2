//Menu animation
let hello1 = document.getElementById("hello1");
let hello2 = document.getElementById("hello2");
let hello3 = document.getElementById("hello3");
let tapMob = document.getElementById("mob");
hello1.addEventListener("mouseover", stat1);
hello1.addEventListener("mouseout", back);
hello2.addEventListener("mouseover", stat2);
hello2.addEventListener("mouseout", back);
hello3.addEventListener("mouseover", stat3);
hello3.addEventListener("mouseout", back);
//tapMob.addEventListener("click", tapScreen);

function stat1() {
  hello1.innerHTML = "About";
  hello1.classList.toggle("menu");
}
function stat2() {
  hello2.innerHTML = "Projects";
  hello2.classList.toggle("menu");
}
function stat3() {
  hello3.innerHTML = "Contact";
  hello3.classList.toggle("menu");
}
function back() {
  hello1.innerHTML = "Hello";
  hello2.innerHTML = "World";
  hello3.innerHTML = "{}";
  hello3.classList.remove("menu");
  hello3.classList.remove("menu");
  hello3.classList.remove("menu");
}
function tapScreen() {
  if (window.innerWidth <= 1100 && hello1.innerHTML == "Hello") {
    // console.log("Xdouble tap");
    stat1();
    stat2();
    stat3();
    console.log(window.innerWidth);
  } else if (hello1.innerHTML == "About" && window.innerWidth <= 1100) {
    back();
    console.log("double tap");
  }
}

//Background animation
// Some random colors
const colors = [
  "#a9927d",
  "#49111c",
  "#8d99ae",
  "#db3a34",
  "#ff6701",
  "#fcecdd",
];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
