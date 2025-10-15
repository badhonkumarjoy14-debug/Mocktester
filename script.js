const questions = [
  { q: "কোন মৌলটির আয়ন পানিতে দ্রবীভূত হলে বিদ্যুৎ পরিবহন করে?", options: ["Na⁺", "Mg²⁺", "Cl⁻", "CO2"], answer: 0 },
  { q: "কোন যৌগটি হাইড্রোজেন বন্ডিং প্রদর্শন করে?", options: ["CH4", "H2O", "CO2", "O2"], answer: 1 },
  { q: "কোন যৌগটি নন-পোলার এবং লন্ডন ডিসপারশন ফোর্স প্রদর্শন করে?", options: ["CH4", "H2O", "NH3", "CH3OH"], answer: 0 },
  { q: "কোন মৌলটির আয়নিক রেডিয়াস সবচেয়ে বড়?", options: ["Na⁺", "K⁺", "Mg²⁺", "Ca²⁺"], answer: 1 },
  { q: "কোন যৌগটি দ্বি-মেরু মুহূর্ত (dipole moment) সবচেয়ে বেশি?", options: ["CH3Cl", "CH4", "CO2", "CCl4"], answer: 0 },
  { q: "কোন যৌগটি আয়ন এবং কভ্যালেন্ট বন্ধন দুইই ধারণ করে?", options: ["NaCl", "CH4", "H2O", "CO2"], answer: 0 },
  { q: "কোন যৌগটি দ্রাব্যতা গুণফল (Ksp) সর্বনিম্ন?", options: ["AgCl", "BaSO4", "CaCO3", "Na2SO4"], answer: 0 },
  { q: "কোন যৌগটি দ্রাব্যতা দ্বারা সীমাবদ্ধ?", options: ["AgCl", "NaCl", "CH4", "H2O"], answer: 0 },
  { q: "কোন মৌলটির আয়ন শনাক্তকরণের জন্য Ba²⁺ আয়ন ব্যবহার করা হয়?", options: ["SO₄²⁻", "CO₃²⁻", "Cl⁻", "NO₃⁻"], answer: 0 },
  { q: "কোন যৌগটি আয়নিক চার্জ সবচেয়ে বেশি?", options: ["Na⁺", "K⁺", "Mg²⁺", "Ca²⁺"], answer: 2 },
  { q: "কোন যৌগটি পানিতে দ্রবীভূত হলে বিদ্যুৎ পরিবহন করে না?", options: ["CH4", "NaCl", "KCl", "MgCl2"], answer: 0 },
  { q: "কোন মৌলটির পারমাণবিক সংখ্যা 12?", options: ["Mg", "Na", "Al", "Ca"], answer: 0 },
  { q: "কোনটি হাইড্রোজেন বন্ডিং দ্বারা স্থিতিশীল?", options: ["NH3", "CH4", "CCl4", "O2"], answer: 0 },
  { q: "কোন যৌগটি ভ্যান ডার ভ্যাল্স বল দ্বারা স্থিতিশীল?", options: ["CH4", "H2O", "NaCl", "NH3"], answer: 0 },
  { q: "কোন মৌলটি তাপমাত্রা বৃদ্ধির সাথে দ্রাব্যতা বৃদ্ধি পায়?", options: ["KNO3", "NaCl", "BaSO4", "AgCl"], answer: 0 },
  { q: "কোন মৌলটির গলনাঙ্ক সবচেয়ে বেশি?", options: ["NaCl", "KCl", "CaCl2", "CH4"], answer: 0 },
  { q: "কোন যৌগটি আয়ন-ডিপোল ইন্টারঅ্যাকশন প্রদর্শন করে?", options: ["NaCl in H2O", "CH4 in H2O", "CO2 in H2O", "O2 in H2O"], answer: 0 },
  { q: "কোন মৌলটি তেজস্ক্রিয় নয়?", options: ["Uranium", "Thorium", "Lead", "Radium"], answer: 2 },
  { q: "কোন মৌলটির আয়ন শনাক্তকরণের জন্য HCl ব্যবহার করা হয়?", options: ["Cl⁻", "SO4²⁻", "NO3⁻", "CO3²⁻"], answer: 0 },
  { q: "কোন যৌগটির আয়নী দ্রাব্যতা সবচেয়ে কম?", options: ["BaSO4", "NaCl", "KCl", "MgCl2"], answer: 0 },
  { q: "কোন যৌগটি আয়ন রূপান্তর দ্বারা বিদ্যুৎ পরিবহন করে?", options: ["NaCl in water", "CH4 in water", "CCl4 in water", "CO2 in water"], answer: 0 },
  { q: "কোন যৌগটি কেবল কভ্যালেন্ট বন্ধন দ্বারা গঠিত?", options: ["CH4", "NaCl", "CaCl2", "KBr"], answer: 0 },
  { q: "কোন যৌগটি দ্রাব্যতা গুণফল (Ksp) দ্বারা পরিমাপযোগ্য?", options: ["AgCl", "CH4", "CCl4", "H2O"], answer: 0 },
  { q: "কোন মৌলটির আয়ন শনাক্তকরণের জন্য Ag⁺ ব্যবহার করা হয়?", options: ["Cl⁻", "SO4²⁻", "NO3⁻", "CO3²⁻"], answer: 0 },
  { q: "কোন মৌলটির দ্রাব্যতা পানির তাপমাত্রার সাথে পরিবর্তন হয় না?", options: ["NaCl", "KCl", "BaSO4", "KNO3"], answer: 0 }
];


const quizArea = document.getElementById("quiz-area");
const timerDisplay = document.getElementById("timer");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");

let selectedAnswers = new Array(questions.length).fill(null);

// render all questions
questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question-block");
  div.innerHTML = `
    <h3>${index + 1}. ${q.q}</h3>
    ${q.options.map(
      (opt, i) =>
        `<button class="option-btn" data-q="${index}" data-a="${i}">
          ${String.fromCharCode(65 + i)}. ${opt}
        </button>`
    ).join("")}
  `;
  quizArea.appendChild(div);
});

// Handle clicks (one attempt per question)
quizArea.addEventListener("click", (e) => {
  if (!e.target.classList.contains("option-btn")) return;
  const qIndex = parseInt(e.target.dataset.q);
  const aIndex = parseInt(e.target.dataset.a);
  if (selectedAnswers[qIndex] !== null) return; // already answered

  selectedAnswers[qIndex] = aIndex;
  e.target.style.backgroundColor = "#ffb400";
  e.target.style.color = "#222";
});

// Timer setup
let time = 60 * 60;
const timer = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `সময় বাকি: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  time--;

  if (time < 0) {
    clearInterval(timer);
    submitExam();
  }
}, 1000);

// Submit
submitBtn.addEventListener("click", submitExam);

function submitExam() {
  clearInterval(timer);
  let score = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) score++;
  });

  document.getElementById("question-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreDisplay.textContent = `আপনার স্কোর: ${score} / ${questions.length}`;
}

