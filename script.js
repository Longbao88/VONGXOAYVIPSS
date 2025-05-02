const prizes = ["Xe SH Mode", "8888k", "888k", "88k", "188k", "388k", "58k", "38k", "18k"];
const weights = [0, 0, 0, 5, 1, 1, 9, 15, 70];

const canvas = document.getElementById("wheel-canvas");
const ctx = canvas.getContext("2d");
const size = canvas.width;
const center = size / 2;
const radius = center * 0.9;
const numSegments = prizes.length;
const segAngle = 2 * Math.PI / numSegments;
const offset = -segAngle / 2;
const colors = ["#e63946", "#2a9d8f", "#e9c46a", "#f4a261", "#264653", "#d62828", "#f77f00", "#003049", "#6a4c93"];

for (let i = 0; i < numSegments; i++) {
  const start = offset + i * segAngle;
  const end = start + segAngle;
  ctx.beginPath();
  ctx.moveTo(center, center);
  ctx.arc(center, center, radius, start, end);
  ctx.closePath();
  ctx.fillStyle = colors[i];
  ctx.fill();
}
ctx.fillStyle = "#fff";
ctx.font = "bold 14px sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
for (let i = 0; i < numSegments; i++) {
  const angle = offset + (i + 0.5) * segAngle;
  const x = center + Math.cos(angle) * radius * 0.6;
  const y = center + Math.sin(angle) * radius * 0.6;
  ctx.fillText(prizes[i], x, y);
}
let isSpinning = false;
let currentRotation = 0;

function getRandomPrizeIndex() {
  const total = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    rand -= weights[i];
    if (rand < 0) return i;
  }
  return weights.length - 1;
}

document.getElementById("spin-btn").addEventListener("click", async () => {
  if (isSpinning) return;

  const input = document.getElementById("account-input");
  const username = input.value.trim();
  const msg = document.getElementById("message");

  if (!username) {
    msg.textContent = "Vui lòng nhập tên tài khoản!";
    msg.style.color = "orange";
    return;
  }

  const checkRes = await fetch("https://script.google.com/macros/s/AKfycbzgSJRfuyOtgBq5zuT7vpmo3q1sFmU7yyN0alDg1Em6A_OSKo4bVzWq2XU9OM4doet0ZA/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, reward: "CHECK" })
  });

  const checkText = await checkRes.text();
  if (checkText.includes("đã quay")) {
    msg.textContent = "⚠️ Tài khoản này đã quay hôm nay!";
    msg.style.color = "red";
    return;
  }

  const sound = document.getElementById("spin-sound");
  if (sound) sound.play();
let isSpinning = false;
let currentRotation = 0;

function getRandomPrizeIndex() {
  const total = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    rand -= weights[i];
    if (rand < 0) return i;
  }
  return weights.length - 1;
}

document.getElementById("spin-btn").addEventListener("click", async () => {
  if (isSpinning) return;

  const input = document.getElementById("account-input");
  const username = input.value.trim();
  const msg = document.getElementById("message");

  if (!username) {
    msg.textContent = "Vui lòng nhập tên tài khoản!";
    msg.style.color = "orange";
    return;
  }

  const checkRes = await fetch("https://script.google.com/macros/s/AKfycbzgSJRfuyOtgBq5zuT7vpmo3q1sFmU7yyN0alDg1Em6A_OSKo4bVzWq2XU9OM4doet0ZA/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, reward: "CHECK" })
  });

  const checkText = await checkRes.text();
  if (checkText.includes("đã quay")) {
    msg.textContent = "⚠️ Tài khoản này đã quay hôm nay!";
    msg.style.color = "red";
    return;
  }

  const sound = document.getElementById("spin-sound");
  if (sound) sound.play();
