const data = [
  {
    step: 1,
    title: "Draw the axis and also name the VP and HP",
    questions: [
      {
        question: "The type of projection discussed here is related to",
        options: ["Curves", "Planes", "Points", "Lines"],
        answer: 1,
        buttonClass: "btnAxis",
      },
      {
        question:
          "What is the correct way to abbreviate Drawing on the grid sheet?",
        options: ["Drng", "DRG", "Drwg", "Drg"],
        answer: 1,
        buttonClass: "btnVPHP",
      },
    ],
  },
  {
    step: 2,
    title: "Draw the top view of pentagon",
    questions: [
      {
        question: "Number of edges in a pentagon?",
        options: ["1", "4", "3", "5"],
        answer: 3,
        buttonClass: "btnPentagon",
      },
      {
        question: "Number of vertices in a pentagon?",
        options: ["4", "6", "5", "7"],
        answer: 2,
        buttonClass: "btnNameVertices",
      },
      {
        question: "We are dealing with projection of pentagon of side?",
        options: ["10mm", "40mm", "35mm", "25mm"],
        answer: 3,
        buttonClass: "btnProject",
      },
      {
        question: "Choose the correct projection points",
        options: [
          "a'b'c'd'e'",
          "(e')a'b'(c')f'",
          "e'(a')b'(d')c'",
          "c'(a')b'(e')d'",
        ],
        answer: 2,
        buttonClass: "btnTopview",
      },
    ],
  },
  {
    step: 3,
    title: "Draw the apparent front view of Pentagon inclined to HP(θ)",
    questions: [
      {
        question: "What is the inclination angle to the HP(θ)",
        options: ["30", "45", "60", "90"],
        answer: 0,
        buttonClass: "btnInclination",
      },
      {
        question: "Color of the projection lines",
        options: ["black", "red", "green", "grey"],
        answer: 3,
        buttonClass: "btnProjectionBottom",
      },
    ],
  },
  {
    step: 4,
    title: "Draw the side on the HP making of Pentagon inclined to VP(α)",
    questions: [
      {
        question: "What is the inclination angle to the VP(α)",
        options: ["30", "45", "60", "90"],
        answer: 2,
        buttonClass: "btnSidePlot",
      },
    ],
  },
  {
    step: 5,
    title: "Draw the actual front view of pentagon",
    questions: [
      {
        question: "The Top view of an object is viewed on which plane?",
        options: [
          "Horizontal Plane",
          "Parallel Plane",
          "Vertical Plane",
          "Profile Plane",
        ],
        answer: 0,
        buttonClass: "btnProjectionUp",
      },
    ],
  },
];
const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");
const taskTitle = document.querySelector(".task-title");
// buttons
const btnAxis = document.querySelector(".btn-axis");
btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");
btnVPHP.addEventListener("click", nameVPHP);
const btnPentagon = document.querySelector(".btn-pentagon");
btnPentagon.addEventListener("click", topView);
const btnNameVertices = document.querySelector(".btn-vertices");
btnNameVertices.addEventListener("click", nameVerices);
const btnProject = document.querySelector(".btn-project");
btnProject.addEventListener("click", projectLines);
const btnTopview = document.querySelector(".btn-topview");
btnTopview.addEventListener("click", drawTopview);
const btnInclination = document.querySelector(".btn-inclination");
btnInclination.addEventListener("click", drawInclinedLine);
const btnProjectionBottom = document.querySelector(".btn-project-bottom");
btnProjectionBottom.addEventListener("click", drawBottomProjectionLines);
const btnSidePlot = document.querySelector(".btn-side-plot");
btnSidePlot.addEventListener("click", plotSideProjection);
const btnProjectionUp = document.querySelector(".btn-projection-up");
btnProjectionUp.addEventListener("click", drawUpProjectionLines);
const btnFinalPlot = document.querySelector(".btn-final-plot");
btnFinalPlot.addEventListener("click", finalPlot);
const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", nextStep);
const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", resetAll);
const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitle.textContent = "Objective";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
  }
  if (ele.classList.contains("tool-practice")) {
    taskTitle.textContent = "Solution";
    document.querySelector(".practice").classList.remove("hide");
    if (currentStep === undefined) initialSetup();
  }
}

const animationsSets = [
  {
    animation: [
      [100, 300],
      [100, 350],
      [100 + 50 * Math.cos(Math.PI / 10), 350 + 50 * Math.sin(Math.PI / 10)],
      [
        100 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
        350 + 50 * Math.sin(Math.PI / 10) - 50 * Math.cos(Math.PI / 5),
      ],
      [100 + 50 * Math.cos(Math.PI / 10), 300 - 50 * Math.sin(Math.PI / 10)],
      [100, 300],
    ],
  },
];

function nextStep() {
  currentStep = data.find((step) => currentStepCount === step.step);
  console.log(currentStepCount);
  stepNumber.textContent = currentStepCount;
  stepTitle.textContent = currentStep.title;
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("blink");
  initialSetup();
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    displayQuestionDiv(currentQuestions[currentQuestionIndex]);
  } else {
    quizDiv.classList.add("hide");
    if (currentStepCount === data.length) {
      stepNumber.classList.add("hide");
      stepTitle.classList.add("hide");
      document.querySelector(".final-statement").classList.remove("hide");
      btnNext.classList.add("hide");
      btnNext.classList.remove("blink");
    } else {
      currentStepCount += 1;
      btnNext.removeAttribute("disabled");
      btnNext.classList.add("blink");
    }
  }
}

function canvasScrollIntoView() {
  // Scroll into view
  canvas.scrollIntoView({
    behavior: "smooth", // Smooth scrolling animation
    block: "start", // Align the top of the element to the top of the viewport
  });
}

function drawAxis() {
  canvasScrollIntoView();
  canvas.classList.remove("hide");
  canvas.scrollIntoView();
  btnTop.classList.remove("hide");
  ctx.strokeStyle = "#B9B6B1";
  animate(30, 200, 690, 200, 0, nameAxis);
}

function nameAxis() {
  ctx.font = "bold 20px Nunito sans MS";
  ctx.fillText("X", 10, 205);
  ctx.fillText("Y", 690, 205);

  btnAxis.classList.add("hide");
  nextQuestion();
}

function nameVPHP() {
  ctx.fillText("HP", 40, 220);
  ctx.fillText("VP", 40, 190);
  btnVPHP.classList.add("hide");
  nextQuestion();
}

function topView() {
  canvasScrollIntoView();
  ctx.strokeStyle = "#000000";
  const animSet = animationsSets[0].animation;
  animSet.forEach((anim, index) => {
    if (index < animSet.length - 1) {
      animateRecursively(
        animSet[index][0],
        animSet[index][1],
        animSet[index + 1][0],
        animSet[index + 1][1],
        0
      );
    } else {
      btnPentagon.classList.add("hide");
      nextQuestion();
    }
  });
}

function nameVerices() {
  canvasScrollIntoView();
  ctx.fillText("a", 90, 300);
  ctx.fillText(
    "d",
    100 + 50 * Math.cos(Math.PI / 10),
    360 + 50 * Math.sin(Math.PI / 10)
  );
  ctx.fillText(
    "c",
    105 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    350 + 50 * Math.sin(Math.PI / 10) - 50 * Math.cos(Math.PI / 5)
  );
  ctx.fillText(
    "b",
    100 + 50 * Math.cos(Math.PI / 10),
    295 - 50 * Math.sin(Math.PI / 10)
  );
  ctx.fillText("e", 90, 350);
  btnNameVertices.classList.add("hide");
  nextQuestion();
}

function projectLines() {
  canvasScrollIntoView();
  ctx.fillText("Solid lines", 570, 25);
  ctx.fillText("Projection lines", 570, 45);
  ctx.beginPath();
  ctx.strokeStyle = "#B9B6B1";
  animateRecursively(100, 300, 100, 200, 0);
  animateRecursively(
    100 + 50 * Math.cos(Math.PI / 10),
    350 + 50 * Math.sin(Math.PI / 10),
    100 + 50 * Math.cos(Math.PI / 10),
    200
  );
  animate(
    100 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    350 + 50 * Math.sin(Math.PI / 10) - 50 * Math.cos(Math.PI / 5),
    100 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    200,
    0,
    nextQuestion
  );
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(550, 20);
  ctx.arc(550, 20, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(550, 40);
  ctx.arc(550, 40, 7, 0, 2 * Math.PI);
  // ctx.fillStyle = "#d9b28a";
  ctx.fillStyle = "#B9B6B1";
  ctx.fill();
  ctx.closePath();
  btnProject.classList.add("hide");
}

function drawTopview() {
  canvasScrollIntoView();
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#000000";
  animate(
    100,
    200,
    100 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    200,
    0,
    nameTopViewVertcies
  );
  ctx.stroke();
  ctx.fillText("e'(a')", 90, 190);
  ctx.fillText("d'(b')", 90 + 50 * Math.cos(Math.PI / 10), 190);
  ctx.fillText(
    "c'",
    105 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    190
  );
  ctx.closePath();
  btnTopview.classList.add("hide");
  nextQuestion();
}

function nameTopViewVertcies() {
  ctx.fillText("e'(a')", 90, 190);
  ctx.fillText("d'(b')", 90 + 50 * Math.cos(Math.PI / 10), 190);
  ctx.fillText(
    "c'",
    105 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    190
  );
}

function drawInclinedLine() {
  canvasScrollIntoView();
  ctx.beginPath();
  ctx.strokeStyle = "#B9B6B1";
  ctx.arc(250, 200, 25, -Math.PI / 6, 0);
  ctx.stroke();

  ctx.strokeStyle = "black";

  ctx.fillText("θ", 288, 195);
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  animate(
    250,
    200,
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    200 - (50 * Math.sin(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    0,
    nextQuestion
  );
  ctx.closePath();
  btnInclination.classList.add("hide");
}

function drawBottomProjectionLines() {
  canvasScrollIntoView();
  ctx.fillText("e'(a')", 230, 190);
  ctx.fillText("d'(b')", 225 + 50 * Math.cos(Math.PI / 10), 169);
  ctx.fillText(
    "c'",
    235 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    155
  );
  ctx.fillText("a", 240, 300);
  ctx.fillText(
    "d",
    250 + 50 * Math.cos(Math.PI / 10),
    360 + 50 * Math.sin(Math.PI / 10)
  );
  ctx.fillText(
    "c",
    240 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    350 + 50 * Math.sin(Math.PI / 10) - 50 * Math.cos(Math.PI / 5)
  );
  ctx.fillText(
    "b",
    250 + 50 * Math.cos(Math.PI / 10),
    295 - 50 * Math.sin(Math.PI / 10)
  );
  ctx.fillText("e", 240, 350);
  ctx.beginPath();
  ctx.strokeStyle = "#B9B6B1";
  animateRecursively(250, 200, 250, 400);
  animateRecursively(
    250 + 50 * Math.cos(Math.PI / 10),
    200 - 50 * Math.cos(Math.PI / 10) * Math.tan(Math.PI / 6),
    250 + 50 * Math.cos(Math.PI / 10),
    400
  );
  animateRecursively(
    100,
    350,
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    350
  );
  animateRecursively(
    100,
    300,
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    300
  );
  animateRecursively(
    100 + 50 * Math.cos(Math.PI / 10),
    300 - 50 * Math.sin(Math.PI / 10),
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    300 - 50 * Math.sin(Math.PI / 10)
  );
  animateRecursively(
    100 + 50 * Math.cos(Math.PI / 10),
    350 + 50 * Math.sin(Math.PI / 10),
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    350 + 50 * Math.sin(Math.PI / 10)
  );
  animateRecursively(
    100 + 50 / (2 * Math.tan(Math.PI / 10)),
    325,
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    325
  );
  animate(
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    200 - (50 * Math.sin(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    400,
    0,
    inclinedProjection
  );
}

function inclinedProjection() {
  canvasScrollIntoView();
  ctx.beginPath();
  // ctx.strokeStyle="#00688B";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = "2";
  ctx.moveTo(250, 300);
  ctx.lineTo(250, 350);
  ctx.lineTo(
    250 + 50 * Math.cos(Math.PI / 10),
    350 + 50 * Math.sin(Math.PI / 10)
  );
  ctx.lineTo(
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    325
  );
  ctx.lineTo(
    250 + 50 * Math.cos(Math.PI / 10),
    300 - 50 * Math.sin(Math.PI / 10)
  );
  ctx.lineTo(250, 300);
  ctx.stroke();
  ctx.closePath();
  btnProjectionBottom.classList.add("hide");
  nextQuestion();
}

function plotSideProjection() {
  canvasScrollIntoView();
  ctx.beginPath();
  ctx.arc(400, 200, 30, 0, Math.PI / 3);
  ctx.stroke();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.moveTo(400, 200);
  ctx.fillText("α", 430, 225);
  ctx.fillText("a", 438, 290);
  ctx.fillText(
    "d",
    470 + 50 * Math.cos(Math.PI / 10),
    315 + 50 * Math.sin(Math.PI / 10)
  );
  ctx.fillText(
    "c",
    450 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    300 + 50 * Math.sin(Math.PI / 10) - 50 * Math.cos(Math.PI / 5)
  );
  ctx.fillText(
    "b",
    435 + 50 * Math.cos(Math.PI / 10),
    260 - 50 * Math.sin(Math.PI / 10)
  );
  ctx.fillText("e", 457, 335);
  ctx.strokeStyle = "#B9B6B1";
  ctx.lineTo(
    400 + 200 * Math.cos(Math.PI / 3),
    200 + 200 * Math.sin(Math.PI / 3)
  );
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  // ctx.strokeStyle="#0c81a8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = "2";
  ctx.moveTo(
    400 + 100 * Math.cos(Math.PI / 3),
    200 + 100 * Math.sin(Math.PI / 3)
  );
  ctx.lineTo(
    400 +
      100 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 10) * Math.cos(Math.PI / 3.75),
    200 +
      100 * Math.sin(Math.PI / 3) -
      50 * Math.cos(Math.PI / 10) * Math.sin(Math.PI / 3.75)
  );
  ctx.lineTo(
    400 +
      125 * Math.cos(Math.PI / 3) +
      (50 * Math.cos(Math.PI / 6) * Math.cos(Math.PI / 6)) /
        (2 * Math.tan(Math.PI / 10)),
    200 +
      125 * Math.sin(Math.PI / 3) -
      (25 * Math.sin(Math.PI / 3)) / (2 * Math.tan(Math.PI / 10))
  );
  ctx.lineTo(
    400 +
      150 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 15) * Math.cos(Math.PI / 10),
    200 +
      150 * Math.sin(Math.PI / 3) -
      50 * Math.cos(Math.PI / 10) * Math.sin(Math.PI / 15)
  );
  ctx.lineTo(
    400 + 150 * Math.cos(Math.PI / 3),
    200 + 150 * Math.sin(Math.PI / 3)
  );
  ctx.lineTo(
    400 + 100 * Math.cos(Math.PI / 3),
    200 + 100 * Math.sin(Math.PI / 3)
  );
  ctx.stroke();
  btnSidePlot.classList.add("hide");
  nextQuestion();
}

function drawUpProjectionLines() {
  ctx.fillText("a'", 438, 196);
  ctx.fillText("d'", 475 + 50 * Math.cos(Math.PI / 10), 173);
  ctx.fillText(
    "c'",
    445 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    158
  );
  ctx.fillText("b'", 420 + 50 * Math.cos(Math.PI / 10), 170);
  ctx.fillText("e'", 420 + 50 * Math.cos(Math.PI / 10), 196);
  ctx.beginPath();
  ctx.strokeStyle = "#B9B6B1";
  animateRecursively(
    400 + 100 * Math.cos(Math.PI / 3),
    200 + 100 * Math.sin(Math.PI / 3),
    400 + 100 * Math.cos(Math.PI / 3),
    160
  );
  animateRecursively(
    400 +
      125 * Math.cos(Math.PI / 3) +
      (50 * Math.cos(Math.PI / 6) * Math.cos(Math.PI / 6)) /
        (2 * Math.tan(Math.PI / 10)),
    200 +
      125 * Math.sin(Math.PI / 3) -
      (25 * Math.sin(Math.PI / 3)) / (2 * Math.tan(Math.PI / 10)),
    400 +
      125 * Math.cos(Math.PI / 3) +
      (50 * Math.cos(Math.PI / 6) * Math.cos(Math.PI / 6)) /
        (2 * Math.tan(Math.PI / 10)),
    160
  );
  animateRecursively(
    400 +
      150 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 15) * Math.cos(Math.PI / 10),
    200 +
      150 * Math.sin(Math.PI / 3) -
      50 * Math.cos(Math.PI / 10) * Math.sin(Math.PI / 15),
    400 +
      150 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 15) * Math.cos(Math.PI / 10),
    160
  );
  animateRecursively(
    400 + 150 * Math.cos(Math.PI / 3),
    200 + 150 * Math.sin(Math.PI / 3),
    400 + 150 * Math.cos(Math.PI / 3),
    160
  );
  animateRecursively(
    250 + 50 * Math.cos(Math.PI / 10),
    200 - 50 * Math.cos(Math.PI / 10) * Math.tan(Math.PI / 6),
    600,
    200 - 50 * Math.cos(Math.PI / 10) * Math.tan(Math.PI / 6)
  );
  animateRecursively(
    250 + (50 * Math.cos(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    200 - (50 * Math.sin(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10)),
    600,
    200 - (50 * Math.sin(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10))
  );
  animate(
    400 +
      100 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 10) * Math.cos(Math.PI / 3.75),
    200 +
      100 * Math.sin(Math.PI / 3) -
      50 * Math.cos(Math.PI / 10) * Math.sin(Math.PI / 3.75),
    400 +
      100 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 10) * Math.cos(Math.PI / 3.75),
    160,
    0,
    finalPlot
  );
  ctx.closePath();
  btnProjectionUp.classList.add("hide");
  nextQuestion();
}

function finalPlot() {
  canvasScrollIntoView();
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = "2";
  ctx.moveTo(400 + 100 * Math.cos(Math.PI / 3), 200);
  ctx.lineTo(
    400 +
      100 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 10) * Math.cos(Math.PI / 3.75),
    200 - 50 * Math.cos(Math.PI / 10) * Math.tan(Math.PI / 6)
  );
  ctx.lineTo(
    400 +
      125 * Math.cos(Math.PI / 3) +
      (50 * Math.cos(Math.PI / 6) * Math.cos(Math.PI / 6)) /
        (2 * Math.tan(Math.PI / 10)),
    200 - (50 * Math.sin(Math.PI / 6)) / (2 * Math.tan(Math.PI / 10))
  );
  ctx.lineTo(
    400 +
      150 * Math.cos(Math.PI / 3) +
      50 * Math.cos(Math.PI / 15) * Math.cos(Math.PI / 10),
    200 - 50 * Math.cos(Math.PI / 10) * Math.tan(Math.PI / 6)
  );
  ctx.lineTo(400 + 150 * Math.cos(Math.PI / 3), 200);
  ctx.lineTo(400 + 100 * Math.cos(Math.PI / 3), 200);
  ctx.stroke();
  ctx.fillText("Front View", 550, 130);
  ctx.fillText("Top View", 550, 350);
  // btnFinalPlot.classList.add("hide");
  // nextQuestion();
}

function drawLine(x1, y1, x2, y2, ratio) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function animate(x1, y1, x2, y2, ratio, cb) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio, cb);
  if (ratio > 1) {
    cb();
  } else if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02, cb);
    });
  }
}
function animateRecursively(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animateRecursively(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

function initialSetup() {
  currentStep = data.find((d) => d.step == currentStepCount);
  stepNumber.textContent = currentStepCount;
  stepTitle.textContent = currentStep.title;
  currentQuestions = currentStep.questions;
  currentQuestionIndex = 0;
  quizDiv.classList.remove("hide");
  displayQuestionDiv(currentQuestions[currentQuestionIndex]);
}

function displayQuestionDiv(questions) {
  const { question, options, answer, buttonClass } = questions;
  questionDiv.innerHTML = `${currentQuestionIndex + 1}. ${question}`;
  answersDiv.innerHTML = "";
  options.map((option, index) => {
    answersDiv.innerHTML += `
    <div class="input-group">
    <input type="radio" name="${question}" id="ans${index}" class="option" onchange='checkAnswer(this, ${index}, ${answer}, ${buttonClass})'>
    <label for="rad1">${option}</label>
  </div>
    `;
  });
}

function checkAnswer(ele, index, answer, buttonClass) {
  const optionSelected = ele.parentNode;
  optionSelected.classList.remove("wrong");
  optionSelected.classList.remove("correct");
  if (index === answer) {
    optionSelected.classList.add("correct");
    buttonClass.classList.add("anim");
    buttonClass.classList.remove("hide");
    validateAnswer.innerHTML = "Right answer👍";
    answersDiv.appendChild(validateAnswer);
  } else {
    optionSelected.classList.add("wrong");
    buttonClass.classList.remove("anim");
    buttonClass.classList.add("hide");
    validateAnswer.innerHTML = "Wrong answer, please check the options again👎";
    answersDiv.appendChild(validateAnswer);
  }
}

function resetAll() {
  ctx.clearRect(0, 0, 750, 500);
  currentStepCount = 1;
  currentStep;
  currentQuestions;
  currentQuestionIndex = 0;
  initialSetup();
  document.querySelectorAll(".btn").forEach((b) => b.classList.add("hide"));
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("hide");
  btnReset.classList.remove("hide");
  stepNumber.classList.remove("hide");
  stepTitle.classList.remove("hide");
  document.querySelector(".final-statement").classList.add("hide");
  canvas.classList.add("hide");
}

function movetoTop() {
  practiceDiv.scrollIntoView();
}
