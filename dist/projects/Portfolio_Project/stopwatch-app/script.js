// Time variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let centis = 0; // centiseconds (1/100 sec)
let interval = null;
let isRunning = false;

// Elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("lapsList");
const modeToggle = document.getElementById("modeToggle");

// Laps stored in memory + localStorage
let laps = [];

// ---------- DISPLAY ----------
function formatTime(h, m, s, c) {
    let hh = h < 10 ? "0" + h : h;
    let mm = m < 10 ? "0" + m : m;
    let ss = s < 10 ? "0" + s : s;
    let cc = c < 10 ? "0" + c : c;
    return `${hh}:${mm}:${ss}.${cc}`;
}

function updateDisplay() {
    display.innerText = formatTime(hours, minutes, seconds, centis);
}

// ---------- TIMER LOGIC ----------
function startTimer() {
    if (isRunning) return;
    isRunning = true;

    interval = setInterval(() => {
        centis++;

        if (centis === 100) {
            centis = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 10); // 10ms = 1 centisecond
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    centis = 0;
    updateDisplay();
    laps = [];
    renderLaps();
    saveLapsToStorage();
}

// ---------- LAPS ----------
function addLap() {
    if (!isRunning && hours === 0 && minutes === 0 && seconds === 0 && centis === 0) {
        return; // ignore lap when timer not started
    }
    const currentTime = formatTime(hours, minutes, seconds, centis);
    laps.unshift(currentTime); // latest lap on top
    renderLaps();
    saveLapsToStorage();
}

function renderLaps() {
    lapsList.innerHTML = "";
    laps.forEach((lapTime, index) => {
        const li = document.createElement("li");

        const leftSpan = document.createElement("span");
        leftSpan.textContent = `Lap ${laps.length - index}`;

        const rightSpan = document.createElement("span");
        rightSpan.textContent = lapTime;

        li.appendChild(leftSpan);
        li.appendChild(rightSpan);
        lapsList.appendChild(li);
    });
}

// ---------- LOCAL STORAGE FOR LAPS ----------
function saveLapsToStorage() {
    localStorage.setItem("stopwatchLaps", JSON.stringify(laps));
}

function loadLapsFromStorage() {
    const stored = localStorage.getItem("stopwatchLaps");
    if (stored) {
        laps = JSON.parse(stored);
        renderLaps();
    }
}

// ---------- DARK MODE ----------
function applySavedTheme() {
    const savedTheme = localStorage.getItem("stopwatchTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        modeToggle.textContent = "☀";
    } else {
        document.body.classList.remove("dark");
        modeToggle.textContent = "🌙";
    }
}

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("stopwatchTheme", "dark");
        modeToggle.textContent = "☀";
    } else {
        localStorage.setItem("stopwatchTheme", "light");
        modeToggle.textContent = "🌙";
    }
});

// ---------- BUTTON EVENTS ----------
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);

// ---------- INIT ----------
updateDisplay();
loadLapsFromStorage();
applySavedTheme();
