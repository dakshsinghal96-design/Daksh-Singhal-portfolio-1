const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
const progressValue = document.getElementById("progress-value");
const progressBar = document.getElementById("progress-bar");
const sceneNumber = document.getElementById("scene-number");
const sceneLabel = document.getElementById("scene-label");
const sceneLinks = [...document.querySelectorAll("[data-section-link]")];
const panels = [...document.querySelectorAll("[data-scene]")];
const heroPanel = document.querySelector(".hero-panel");
const signalOrbit = document.querySelector(".signal-orbit");
const signalCards = [...document.querySelectorAll(".signal-card")];
const orbitLines = [...document.querySelectorAll(".orbit-line")];
const glows = [...document.querySelectorAll(".scene-glow")];
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const signalMotion = signalCards.map((card, index) => ({
  card,
  depth: Number(card.dataset.depth || 20),
  phase: index * 1.28 + 0.7,
  x: [18, 34, 12, 27][index] || 18,
  y: [10, 14, 8, 11][index] || 9,
  speed: [0.00048, 0.00038, 0.00058, 0.00044][index] || 0.00042,
  rotate: [-1.8, 2.5, -2.2, 1.4][index] || 1,
}));

let width = 0;
let height = 0;
let dpr = 1;
let stars = [];
let pointer = { x: 0.5, y: 0.5 };
let targetPointer = { x: 0.5, y: 0.5 };

function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  seedStars();
}

function seedStars() {
  const count = Math.round(Math.min(900, Math.max(520, width * height * 0.0007)));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random() * 0.95 + 0.05,
    r: Math.random() * 0.95 + 0.16,
    phase: Math.random() * Math.PI * 2,
    tint: Math.random(),
  }));
}

function starColor(star, alpha) {
  if (star.tint > 0.93) return `rgba(255, 96, 203, ${alpha})`;
  if (star.tint > 0.82) return `rgba(85, 226, 220, ${alpha})`;
  if (star.tint > 0.7) return `rgba(120, 135, 255, ${alpha})`;
  return `rgba(245, 242, 255, ${alpha})`;
}

function drawStars(time) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#020305";
  ctx.fillRect(0, 0, width, height);

  const px = (pointer.x - 0.5) * 34;
  const py = (pointer.y - 0.5) * 22;
  const scrollShift = window.scrollY * 0.04;

  for (const star of stars) {
    const driftX = px * star.z;
    const driftY = py * star.z + scrollShift * star.z;
    let x = (star.x + driftX) % width;
    let y = (star.y + driftY) % height;
    if (x < 0) x += width;
    if (y < 0) y += height;

    const twinkle = 0.24 + Math.sin(time * 0.0018 + star.phase) * 0.16 + star.z * 0.25;
    ctx.beginPath();
    ctx.fillStyle = starColor(star, Math.max(0.12, Math.min(0.9, twinkle)));
    ctx.arc(x, y, star.r * star.z, 0, Math.PI * 2);
    ctx.fill();

    if (star.z > 0.72 && star.tint > 0.8) {
      ctx.beginPath();
      ctx.strokeStyle = starColor(star, 0.1);
      ctx.moveTo(x - star.r * 3, y);
      ctx.lineTo(x + star.r * 3, y);
      ctx.stroke();
    }
  }
}

function animate(time) {
  pointer.x += (targetPointer.x - pointer.x) * 0.06;
  pointer.y += (targetPointer.y - pointer.y) * 0.06;
  drawStars(time);
  animateSignalFrames(time);
  requestAnimationFrame(animate);
}

function animateSignalFrames(time) {
  const shiftX = (targetPointer.x - 0.5) * 18;
  const shiftY = (targetPointer.y - 0.5) * 12;
  const heroRect = heroPanel.getBoundingClientRect();
  const heroExitProgress = Math.min(1, Math.max(0, -heroRect.top / Math.max(1, heroRect.height * 0.58)));
  const orbitVisibility = Math.max(0, 1 - heroExitProgress * 1.45);
  const scrollLift = Math.min(28, heroExitProgress * 28);
  const reduced = motionQuery.matches;

  if (signalOrbit) {
    signalOrbit.style.opacity = String(orbitVisibility);
    signalOrbit.style.pointerEvents = orbitVisibility > 0.08 ? "auto" : "none";
  }

  for (const item of signalMotion) {
    const wave = reduced ? 0 : time * item.speed + item.phase;
    const orbitX = reduced ? 0 : Math.sin(wave) * item.x + Math.sin(wave * 0.47) * 8;
    const orbitY = reduced ? 0 : Math.cos(wave * 1.17) * item.y + Math.sin(wave * 0.7) * 4;
    const tiltX = reduced ? 0 : Math.sin(wave * 0.84) * 4 - shiftY * 0.08;
    const tiltY = reduced ? 0 : Math.cos(wave * 0.72) * 5 + shiftX * 0.08;
    const roll = reduced ? 0 : Math.sin(wave * 0.52) * item.rotate;
    const scale = reduced ? 1 : 1 + Math.sin(wave * 0.9) * 0.025;
    const depthShift = item.depth + (reduced ? 0 : Math.sin(wave * 0.64) * 24) - heroExitProgress * 80;
    const x = shiftX * (item.depth / 22) + orbitX;
    const y = shiftY * (item.depth / 28) + orbitY - scrollLift;

    item.card.style.transform = `translate3d(${x}px, ${y}px, ${depthShift}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${roll}deg) scale(${scale})`;
    item.card.style.opacity = String(reduced ? 0.74 : 0.58 + Math.sin(wave * 1.4) * 0.16 + item.depth / 190);
    item.card.style.filter = `saturate(${reduced ? 1 : 1.02 + Math.sin(wave * 1.2) * 0.24})`;
  }

  orbitLines.forEach((line, index) => {
    const wave = reduced ? 0 : time * (0.00036 + index * 0.0001);
    const lift = reduced ? 0 : Math.sin(wave + index) * 8;
    const drift = reduced ? 0 : Math.cos(wave * 0.8 + index) * 14;
    const angle = index === 0 ? 3 : -7;
    line.style.transform = `translate3d(${drift}px, ${lift - scrollLift}px, 0) rotate(${angle + Math.sin(wave) * 1.6}deg) scaleX(${1 + Math.sin(wave * 1.3) * 0.08})`;
    line.style.opacity = String(reduced ? 0.26 : 0.2 + Math.sin(wave * 1.5 + index) * 0.12);
  });

  glows[0].style.transform = `translate3d(${shiftX * 0.6}px, ${shiftY * 0.6 - scrollLift * 0.35}px, 0)`;
  glows[1].style.transform = `translate3d(${-shiftX * 0.4}px, ${-shiftY * 0.5 - scrollLift * 0.2}px, 0)`;
}

function updatePointer(event) {
  targetPointer = {
    x: event.clientX / Math.max(1, window.innerWidth),
    y: event.clientY / Math.max(1, window.innerHeight),
  };
}

function updateScrollReadout() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  const percent = Math.round(progress * 100);
  progressValue.textContent = String(percent).padStart(3, "0") + "%";
  progressBar.style.width = `${percent}%`;

  let activePanel = panels[0];
  const trigger = window.innerHeight * 0.42;
  for (const panel of panels) {
    const rect = panel.getBoundingClientRect();
    if (rect.top <= trigger && rect.bottom >= trigger) {
      activePanel = panel;
      break;
    }
  }

  sceneNumber.textContent = activePanel.dataset.scene;
  sceneLabel.textContent = activePanel.dataset.label;
  sceneLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionLink === activePanel.id);
  });
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", updatePointer);
window.addEventListener("scroll", updateScrollReadout, { passive: true });

resizeCanvas();
updateScrollReadout();
requestAnimationFrame(animate);
