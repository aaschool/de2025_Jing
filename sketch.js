let breathing = false;
let historyMode = false;
let settingsMode = false;
let radius = 50;
let growing = true;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('p5-canvas-container');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(250);

  if (breathing) {
    drawBreathingCircle();
  } else if (historyMode) {
    drawHistoryGraph();
  } else if (settingsMode) {
    drawSettingsUI();
  } else {
    drawDashboard();
  }
}

function drawBreathingCircle() {
  fill(173, 216, 230, 150);
  noStroke();
  
  if (growing) {
    radius += 1;
    if (radius >= 150) growing = false;
  } else {
    radius -= 1;
    if (radius <= 50) growing = true;
  }
  
  ellipse(width / 2, height / 2, radius * 2);
  
  fill(0);
  textSize(16);
  text("Follow the circle\nBreathe in... Breathe out...", width / 2, height - 50);
}

function drawHistoryGraph() {
  fill(0);
  text("Biometric Data History (Simulated)", width / 2, 30);
  stroke(100);
  noFill();

  beginShape();
  for (let x = 50; x < width - 50; x += 10) {
    let y = height / 2 + sin(x * 0.1) * 50;
    vertex(x, y);
  }
  endShape();
}

function drawSettingsUI() {
  fill(0);
  textSize(16);
  text("Settings Panel\n(Coming Soon...)", width / 2, height / 2);
}

function drawDashboard() {
  fill(0);
  textSize(18);
  text("Dashboard Overview", width / 2, 50);

  fill(100);
  text("Stress Level: Moderate", width / 2, 100);
  text("Heart Rate: 72 bpm", width / 2, 140);
}

function login() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("dashboard-container").style.display = "block";
}

function startBreathing() {
  breathing = true;
  historyMode = false;
  settingsMode = false;
}

function showHistory() {
  breathing = false;
  historyMode = true;
  settingsMode = false;
}

function openSettings() {
  breathing = false;
  historyMode = false;
  settingsMode = true;
}
