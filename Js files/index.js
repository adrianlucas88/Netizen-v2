//Menu animation
let hello1 = document.getElementById("hello1");
let hello2 = document.getElementById("hello2");
let hello3 = document.getElementById("hello3");
let tapMob = document.getElementById("mob");
hello1.addEventListener("mouseover", stat1);
hello1.addEventListener("mouseout", back);
hello1.addEventListener("click", typewriter);
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

// Text animation
// set up text to print, each item in array is new line
let aText = new Array(
  " Hi, I'm Adrian, a Frontend Developer with a passion for creating intuitive and user-friendly websites.<br /><br />As a Frontend Developer, I bring a fresh perspective to every project, along with a hunger to learn and grow. I have a solid foundation in HTML, CSS, and JavaScript.<br /><br /> What sets me apart is my dedication to creating user-centered designs. I believe that great design is about more than just making things look pretty - it's about creating an experience that's engaging, intuitive, and easy to use. That's why I always start with a deep understanding of the end user, conducting user research and testing to ensure that every design decision is backed by data and user feedback.<br /><br /> Whether you need a new website, a redesign of an existing one, or a custom web application, I'm here to help. I'm a fast learner, a team player, and I'm committed to delivering high-quality work that exceeds your expectations.<br /><br /> So if you're looking for a Frontend Developer with a passion for user experience and a hunger to learn, look no further. Let's work together to create something amazing!"
);
let iSpeed = 50; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ""; // initialise contents variable
let iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  let destination = document.getElementById("typeD");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
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
