const questions = [
  { q: "নিম্নের কোন মৌলটির ইলেকট্রোনেগেটিভিটি সর্বাধিক?", options: ["O", "N", "F", "Cl"], answer: 2 },
  { q: "নিম্নের কোনটি আয়নিক বন্ধনের উদাহরণ নয়?", options: ["NaCl", "MgO", "H2O", "KBr"], answer: 2 },
  { q: "কোন মৌলের ভ্যালেন্স ইলেকট্রন সংখ্যা 3?", options: ["Al", "B", "C", "N"], answer: 1 },
  { q: "হাইড্রোজেনের সবচেয়ে সাধারণ আইসোটোপ কোনটি?", options: ["¹H", "²H", "³H", "⁴H"], answer: 0 },
  { q: "নিম্নের কোনটি ধাতব বৈশিষ্ট্য সবচেয়ে বেশি?", options: ["Li", "Na", "K", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি নন-মেটাল?", options: ["P", "Na", "Mg", "Al"], answer: 0 },
  { q: "ইলেকট্রন কনফিগারেশন 1s² 2s² 2p⁶ 3s² 3p³ কোন মৌলের?", options: ["P", "S", "Cl", "Si"], answer: 0 },
  { q: "কোন উপ-শেলে সর্বাধিক ইলেকট্রন থাকতে পারে?", options: ["s", "p", "d", "f"], answer: 3 },
  { q: "পিরিয়ডিক টেবিলের 2য় পিরিয়ডের সর্বাধিক ধাতব মৌল কোনটি?", options: ["Li", "Be", "B", "C"], answer: 0 },
  { q: "নিম্নের কোনটি অম্লীয় গ্যাস?", options: ["CO2", "O2", "N2", "H2"], answer: 0 },
  { q: "একটি মৌলের পারমাণবিক সংখ্যা 17 হলে ইলেকট্রনের সংখ্যা কত?", options: ["17", "35", "18", "16"], answer: 0 },
  { q: "নিম্নের কোনটি ব্যান্ড গ্যাপের দিক থেকে সেমিকন্ডাক্টর?", options: ["Si", "NaCl", "MgO", "Ne"], answer: 0 },
  { q: "কোন মৌলটি সহজে ইলেকট্রন গ্রহণ করে?", options: ["F", "Na", "Mg", "Al"], answer: 0 },
  { q: "একটি অণুর ভলিউমের প্রাথমিক নির্ধারক কোনটি?", options: ["ইলেকট্রন", "প্রোটন", "নিউট্রন", "কোয়ান্টাম সংখ্যা"], answer: 3 },
  { q: "নিম্নের কোনটি অর্ধপরিবাহী বৈশিষ্ট্যযুক্ত?", options: ["Si", "Mg", "Na", "Cl2"], answer: 0 },
  { q: "নিম্নের কোনটি একই মৌলের আইসোটোপ নয়?", options: ["¹²C", "¹³C", "¹⁴C", "¹⁵N"], answer: 3 },
  { q: "কোন মৌলটি সবচেয়ে বেশি ধাতব?", options: ["Be", "Mg", "Ca", "Ba"], answer: 3 },
  { q: "ইলেকট্রন কনফিগারেশন 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ কোন মৌলের?", options: ["K", "Ca", "Sc", "Cl"], answer: 0 },
  { q: "নিম্নের কোনটি অক্সিজেনের সমজাতীয় গ্যাস?", options: ["O2", "O3", "CO2", "N2"], answer: 1 },
  { q: "নিম্নের কোন মৌলটি অক্সিডেশন সংখ্যা +3 নিতে পারে?", options: ["Al", "Mg", "Na", "K"], answer: 0 },
  { q: "কোন মৌলটি আয়ন হওয়ার সময় 2+ চার্জ রাখে?", options: ["Mg", "Na", "K", "Al"], answer: 0 },
  { q: "নিম্নের কোনটি কনফিউসিং: আয়নিক বনাম কোভালেন্ট?", options: ["HCl", "NaCl", "CO2", "KBr"], answer: 2 },
  { q: "পিরিয়ডিক টেবিলের কোন মৌল নন-মেটাল এবং হ্যালোজেন?", options: ["F", "O", "N", "C"], answer: 0 },
  { q: "কোন মৌলটি সবচেয়ে বেশি ব্যালেন্স ইলেকট্রন ধারণ করে?", options: ["Ne", "Ar", "Kr", "Xe"], answer: 3 },
  { q: "নিম্নের কোনটি হালকা আয়ন?", options: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"], answer: 0 },
  { q: "একটি মৌলের আইসোটোপের পার্থক্য কী দ্বারা নির্ধারিত?", options: ["প্রোটনের সংখ্যা", "নিউট্রনের সংখ্যা", "ইলেকট্রনের সংখ্যা", "আয়ন চার্জ"], answer: 1 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে বেশি ধাতব?", options: ["Be", "Mg", "Ca", "Sr"], answer: 3 },
  { q: "নিম্নের কোনটি একক আয়নিক ব্যান্ড গ্যাপ নির্দেশ করে?", options: ["NaCl", "Si", "MgO", "C"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে সহজে ইলেকট্রন হারায়?", options: ["K", "Na", "Li", "Cs"], answer: 3 },
  { q: "কোন মৌলের 2s²2p⁶3s²3p⁶ 4s² কনফিগারেশন আছে?", options: ["Ca", "K", "Sc", "Ti"], answer: 0 },
  { q: "নিম্নের কোনটি কোভালেন্ট বন্ডের উদাহরণ?", options: ["H2", "NaCl", "MgO", "KBr"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সর্বাধিক অম্লীয়?", options: ["F", "O", "Cl", "Br"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি ব্যালেন্স ইলেকট্রন সংখ্যা 8?", options: ["Ne", "O", "C", "N"], answer: 0 },
  { q: "কোন মৌলটি সবচেয়ে সহজে আয়ন তৈরি করে?", options: ["K", "Na", "Li", "Cs"], answer: 3 },
  { q: "নিম্নের কোনটি অর্ধপরিবাহী বৈশিষ্ট্যযুক্ত?", options: ["Si", "Na", "Mg", "Cl2"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির পারমাণবিক সংখ্যা 12?", options: ["Mg", "Al", "Na", "Si"], answer: 0 },
  { q: "কোন মৌলটি 1+ চার্জ রাখতে পারে?", options: ["Na", "Mg", "Al", "K"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে ছোট আয়ন?", options: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"], answer: 0 },
  { q: "নিম্নের কোনটি হালকা নন-মেটাল?", options: ["H", "F", "Cl", "O"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির ব্যান্ড গ্যাপ 1.1 eV?", options: ["Si", "NaCl", "MgO", "Ne"], answer: 0 },
  { q: "নিম্নের কোনটি সবচেয়ে শক্তিশালী অক্সিডাইজার?", options: ["F", "Cl", "O", "Br"], answer: 0 },
  { q: "কোন মৌলটি আয়ন হওয়ার সময় 3+ চার্জ রাখে?", options: ["Al", "Na", "K", "Mg"], answer: 0 },
  { q: "নিম্নের কোনটি নন-মেটাল এবং হ্যালোজেন?", options: ["F", "Cl", "Br", "All of above"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির 1s²2s²2p⁶3s²3p¹ কনফিগারেশন আছে?", options: ["Al", "Si", "Mg", "P"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ব্যালেন্স ইলেকট্রন ধারণ করে?", options: ["Ne", "Ar", "Kr", "Xe"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে হালকা ধাতু?", options: ["Li", "Na", "K", "Rb"], answer: 0 },
  { q: "কোন মৌলটি সবচেয়ে ধাতব?", options: ["Cs", "K", "Na", "Li"], answer: 0 },
  { q: "নিম্নের কোনটি আয়নিক ও কোভালেন্ট বন্ধনের মিলিত উদাহরণ?", options: ["H2O", "NaCl", "CO2", "NH3"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে অম্লীয়?", options: ["F", "O", "Cl", "Br"], answer: 0 },
  { q: "কোন মৌলটি সবচেয়ে সহজে ধাতব আয়ন তৈরি করে?", options: ["Li", "Na", "K", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি 2+ চার্জ রাখতে পারে?", options: ["Mg", "Na", "K", "Al"], answer: 0 },
  { q: "নিম্নের কোনটি সবচেয়ে ধাতব?", options: ["Be", "Mg", "Ca", "Ba"], answer: 3 },
  { q: "কোন মৌলটির পারমাণবিক সংখ্যা 20?", options: ["Ca", "K", "Ar", "Sc"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির ব্যান্ড গ্যাপ সেমিকন্ডাক্টর হিসেবে উপযুক্ত?", options: ["Si", "NaCl", "MgO", "Ne"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে সহজে হাইড্রোক্সাইড তৈরি করে?", options: ["K", "Na", "Li", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি নন-মেটাল?", options: ["O", "Na", "Mg", "Al"], answer: 0 },
  { q: "কোন মৌলটি সবচেয়ে বেশি ইলেকট্রন গ্রহণ করতে চায়?", options: ["F", "Cl", "O", "Br"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি 3p³ কনফিগারেশন রাখে?", options: ["P", "S", "Cl", "Si"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ব্যালেন্স ইলেকট্রন রাখে?", options: ["Ne", "Ar", "Kr", "Xe"], answer: 3 },
  { q: "কোন মৌলটি সবচেয়ে সহজে ধাতব আয়ন তৈরি করে?", options: ["Li", "Na", "K", "Cs"], answer: 3 },
  { q: "নিম্নের কোনটি আয়নিক ব্যান্ড গ্যাপ নির্দেশ করে?", options: ["NaCl", "Si", "MgO", "Ne"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে হালকা ধাতু?", options: ["Li", "Na", "K", "Rb"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ধাতব?", options: ["Cs", "K", "Na", "Li"], answer: 0 },
  { q: "কোন মৌলটি আয়ন হওয়ার সময় 2+ চার্জ রাখে?", options: ["Mg", "Na", "K", "Al"], answer: 0 },
  { q: "নিম্নের কোনটি নন-মেটাল এবং হ্যালোজেন?", options: ["F", "Cl", "Br", "All of above"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির 1s²2s²2p⁶3s²3p¹ কনফিগারেশন আছে?", options: ["Al", "Si", "Mg", "P"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ব্যালেন্স ইলেকট্রন ধারণ করে?", options: ["Ne", "Ar", "Kr", "Xe"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে সহজে হাইড্রোক্সাইড তৈরি করে?", options: ["K", "Na", "Li", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির পারমাণবিক সংখ্যা 12?", options: ["Mg", "Al", "Na", "Si"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির ব্যান্ড গ্যাপ সেমিকন্ডাক্টর হিসেবে উপযুক্ত?", options: ["Si", "NaCl", "MgO", "Ne"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে অম্লীয়?", options: ["F", "O", "Cl", "Br"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি 2+ চার্জ রাখতে পারে?", options: ["Mg", "Na", "K", "Al"], answer: 0 },
  { q: "কোন মৌলটি সবচেয়ে ধাতব?", options: ["Be", "Mg", "Ca", "Ba"], answer: 3 },
  { q: "কোন মৌলটি সবচেয়ে সহজে আয়ন তৈরি করে?", options: ["Li", "Na", "K", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ব্যালেন্স ইলেকট্রন রাখে?", options: ["Ne", "Ar", "Kr", "Xe"], answer: 3 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে সহজে ইলেকট্রন গ্রহণ করে?", options: ["F", "O", "Cl", "Br"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির পারমাণবিক সংখ্যা 20?", options: ["Ca", "K", "Ar", "Sc"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে ছোট আয়ন?", options: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির সর্বাধিক ইলেকট্রনেগেটিভিটি?", options: ["O", "N", "F", "Cl"], answer: 2 },
  { q: "নিম্নের কোন মৌলটির পারমাণবিক সংখ্যা 11?", options: ["Na", "Mg", "Al", "K"], answer: 0 },
  { q: "কোন মৌলটি আয়ন হওয়ার সময় 3+ চার্জ রাখে?", options: ["Al", "Na", "K", "Mg"], answer: 0 },
  { q: "নিম্নের কোনটি আয়নিক বন্ধনের উদাহরণ নয়?", options: ["NaCl", "MgO", "H2O", "KBr"], answer: 2 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ধাতব?", options: ["Li", "Na", "K", "Cs"], answer: 3 },
  { q: "কোন মৌলটির ব্যান্ড গ্যাপ 1.1 eV?", options: ["Si", "NaCl", "MgO", "Ne"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে হালকা ধাতু?", options: ["Li", "Na", "K", "Rb"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি নন-মেটাল?", options: ["O", "Na", "Mg", "Al"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে সহজে ইলেকট্রন গ্রহণ করে?", options: ["F", "O", "Cl", "Br"], answer: 0 },
  { q: "কোন মৌলটির 2s²2p⁶3s²3p³ কনফিগারেশন আছে?", options: ["P", "S", "Cl", "Si"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির পারমাণবিক সংখ্যা 12?", options: ["Mg", "Al", "Na", "Si"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির ব্যান্ড গ্যাপ সেমিকন্ডাক্টর হিসেবে উপযুক্ত?", options: ["Si", "NaCl", "MgO", "Ne"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির আয়ন চার্জ 2+?", options: ["Mg", "Na", "K", "Al"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে ব্যালেন্স ইলেকট্রন সংখ্যা 8?", options: ["Ne", "O", "C", "N"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে ধাতব?", options: ["Be", "Mg", "Ca", "Ba"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির 1s²2s²2p⁶3s²3p¹ কনফিগারেশন আছে?", options: ["Al", "Si", "Mg", "P"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি সবচেয়ে সহজে হাইড্রোক্সাইড তৈরি করে?", options: ["K", "Na", "Li", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে বড় আয়ন?", options: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে শক্তিশালী অক্সিডাইজার?", options: ["F", "Cl", "O", "Br"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির ব্যান্ড গ্যাপ 5.6 eV?", options: ["MgO", "Si", "NaCl", "Ne"], answer: 0 },
  { q: "নিম্নের কোন মৌলটি নন-মেটাল এবং হ্যালোজেন?", options: ["F", "Cl", "Br", "All of above"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে সহজে ধাতব আয়ন তৈরি করে?", options: ["Li", "Na", "K", "Cs"], answer: 3 },
  { q: "নিম্নের কোন মৌলটির আয়ন চার্জ 1+?", options: ["Na", "Mg", "Al", "K"], answer: 0 },
  { q: "নিম্নের কোন মৌলটির সবচেয়ে ছোট আয়ন?", options: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"], answer: 0 },


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
