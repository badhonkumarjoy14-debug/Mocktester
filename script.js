const questions = [
  {
    question: "Cl₂ অণুর জন্য কোন বিবৃতি সঠিক?",
    options: [
      "Cl₂ এ পোলার বন্ধন আছে",
      "Cl₂ এ অ-ধ্রুবক বন্ধন আছে",
      "Cl₂ এ একই দুই ক্লোরিন পারমাণুর মধ্যে সমবণ্টিত ইলেকট্রন",
      "Cl₂ একটি আয়নিক যৌগ"
    ],
    answer: 2,
    reason: "Cl₂ এ দুই ক্লোরিন পারমাণুর ইলেকট্রন যুগল সমভাবে ভাগ হয় → সমযোজী (nonpolar covalent)।"
  },
  {
    question: "NO অণুকে 고려 করলে, NO অণুতে ___ আছে।",
    options: [
      "একটি অদ্বিতীয় (unpaired) ইলেকট্রন",
      "পূর্ণ এলেকট্রন যুগল",
      "শূণ্য লোন পেয়ার",
      "দুই ডাবল-বন্ড"
    ],
    answer: 0,
    reason: "NO তে ইলেকট্রন সংখ্যা ঐরূপ যে একটি অদ্বিতীয় ইলেকট্রন থাকে।"
  },
  {
    question: "HF ও HCl — কোনটি হাইড্রোজেন বন্ধন গড়তে সক্ষম এবং কেন?",
    options: [
      "HF, কারণ F খুব ইলেকট্রোনেগেটিভ",
      "HCl, কারণ Cl বড় আণবিক",
      "HF ও HCl উভয়ই",
      "কোনটাই নয়"
    ],
    answer: 0,
    reason: "HF-তে H এবং F এর মধ্যে ইলেকট্রোনেগেটিভ পার্থক্য বেশি → শক্তিশালী হাইড্রোজেন বন্ধন গঠন।"
  },
  {
    question: "CO₂ অণুতে গঠন ও পোলারিটি সম্পর্কে সঠিক হলো —",
    options: [
      "Antibonding orbitals বেশি, অণু পোলার",
      "Linear গঠন, পোলার অণু",
      "Linear গঠন, অ-পোলার অণু",
      "Bent গঠন, পোলার অণু"
    ],
    answer: 2,
    reason: "CO₂ রৈখিক গঠন, দুটি C=O বন্ধনই বিপরীত দিকের ডিপোল উত্পন্ন → সামগ্রিক পোলারিটি নল।"
  },
  {
    question: "NH₄⁺ (অ্যামোনিয়াম আয়ন) — এর বন্ধন গঠনকে কোন বলা যায়?",
    options: [
      "সমযোজী বন্ধন সব",
      "আয়নিক বন্ধন সব",
      "সমবণ্টিত + দান করা বন্ধন",
      "সমবণ্টিত + আয়নিক"
    ],
    answer: 2,
    reason: "NH₄⁺ এর এক বন্ধন N থেকে H⁺-কে দান করা (coordinate / dative) এবং বাকিগুলি সমবণ্টিত covalent।"
  },
  {
    question: "PCl₅ অণুতে P এর হাইব্রিডিকেশন কী হবে?",
    options: [
      "sp³",
      "sp³d",
      "sp³d²",
      "sp²"
    ],
    answer: 1,
    reason: "PCl₅-এ ৫ বন্ধন, ৫ σ-বন্ডের জন্য sp³d হাইব্রিডিকেশন সঠিক।"
  },
  {
    question: "SF₆ অণুর জন্য কোন বন্ধন কোণ আছে?",
    options: [
      "90° ও 120°",
      "90° ও 180°",
      "109.5° সব",
      "120° সব"
    ],
    answer: 1,
    reason: "SF₆ এ অষ্টধাতুবিন্যাস (octahedral) গঠন → কোণগুলো 90° ও 180°।"
  },
  {
    question: "NO₃⁻ অণুর রেজোন্যান্স গঠন আছে — কোনটি বৈশিষ্ট্য?",
    options: [
      "সব N–O বন্ধন সম দৈর্ঘ্য",
      "একটি ডাবল, দুইটি একক বন্ধন",
      "একক বন্ধন সব",
      "দুটি ডাবল বন্ধন"
    ],
    answer: 0,
    reason: "NO₃⁻ এ ৩টি অসম দিক রেজোন্যান্স গঠন → সব N–O বন্ধন সম দৈর্ঘ্য।"
  },
  {
    question: "BeCl₂ গ্যাস অবস্থা → গঠন ও বন্ধন?",
    options: [
      "Linear গঠন, পোলার",
      "Bent গঠন, পোলার",
      "Linear গঠন, অ-পোলার",
      "Trigonal গঠন, পোলার"
    ],
    answer: 2,
    reason: "BeCl₂ গ্যাস-ম্যানে দুইবিন্দু, linear এবং অ-পোলার (Be-Cl সমভাবে)।"
  },
  {
    question: "H₂O₂ (Hydrogen peroxide) অণুর গঠন কি হবে?",
    options: [
      "Linear, অ-পোলার",
      "Bent, পোলার",
      "T-shape, পোলার",
      "Trigonal, পোলার"
    ],
    answer: 1,
    reason: "H₂O₂-তে দুই O–O এবং দুই O–H গঠন, বেন্ড টাইপ এবং পোলার অণু।"
  },
  {
    question: "CO (carbon monoxide) অণুতে কোন ধরনের বন্ধন আছে?",
    options: [
      "এক ডাবল + এক একক",
      "ট্রি-bond + একটি দান করা বোন্ড",
      "দুটি ডাবল",
      "এক একক + এক আয়নিক"
    ],
    answer: 1,
    reason: "CO তে একটি ট্রিপল বন্ড (২ π + ১ σ) এবং একটি coordinate bond (C → O) থাকে।"
  },
  {
    question: "তারপরেই, CN⁻ (cyanide ion) গঠন কেমন?",
    options: [
      "Double + single",
      "Triple + lone pair",
      "Single bond only",
      "Quadruple bond"
    ],
    answer: 1,
    reason: "CN⁻ এ একটি ট্রিপল বন্ড + এক lone pair on C।"
  },
  {
    question: "O₂ মোলেকিউলে কোন গঠন ও বৈশিষ্ট্য প্রযোজ্য?",
    options: [
      "Di-radical nature, দুটি unpaired electron",
      "সব ইলেকট্রন জোড় করে থাকে",
      "Polar molecule",
      "Ionic bond"
    ],
    answer: 0,
    reason: "O₂ এ দুটি unpaired electron থাকে → di-radical।"
  },
  {
    question: "আপনি যদি দুটি H₂O মলেকিউল পেতে চান, কোন বন্ধন অবশ্যই থাকবে?",
    options: [
      "একটি হাইড্রোজেন বন্ধন",
      "Covalent bond একমাত্র",
      "আয়নিক bond",
      "Van der Waals bond"
    ],
    answer: 0,
    reason: "দুটি H₂O মলেকিউল একে অপরকে হাইড্রোজেন বন্ধন দ্বারা যুক্ত হতে পারে।"
  },
  {
    question: "NaCl কঠিন অবস্থা — কোন বন্ধনের বৈশিষ্ট্য বেশি?",
    options: [
      "আয়নিক বাধা, উচ্চ গলনাঙ্ক",
      "কম ধ্রুবকতা",
      "হাইড্রোজেন বন্ধন",
      "ভ্যান ডার ওয়ালস"
    ],
    answer: 0,
    reason: "NaCl কঠিন → আয়নিক বন্ধন শক্তিশালী → গলনাঙ্ক বেশি।"
  },
  {
    question: "CH₄ অণুর ইলেকট্রনীয় গঠন ও পোলারিটি কি?",
    options: [
      "Tetrahedral, পোলার",
      "Tetrahedral, অ-পোলার",
      "Square planar, পোলার",
      "Linear, অ-পোলার"
    ],
    answer: 1,
    reason: "CH₄ গঠন Tetrahedral, সব C–H বন্ধন সমভাবে বন্টিত → অ-পোলার।"
  },
  {
    question: "Which of the following has maximum ionic character?",
    options: [
      "NaCl",
      "KCl",
      "MgO",
      "LiF"
    ],
    answer: 3,
    reason: "LiF-এ Li ও F পারস্পরিক ইলেকট্রোনেগেটিভ পার্থক্য সর্বোচ্চ → সর্বাধিক আয়নিক চরিত্র।"
  },
  {
    question: "NO₂ অণুর বৈশিষ্ট্য কি হবে?",
    options: [
      "Linear গঠন, অ-পোলার",
      "Bent গঠন, পোলার, একটি unpaired electron",
      "Trigonal planar, অ-পোলার",
      "Square planar, অ-পোলার"
    ],
    answer: 1,
    reason: "NO₂ bends due to lone electron → পোলার + একটি unpaired electron।"
  },
  {
    question: "Which has the highest bond dissociation energy?",
    options: [
      "C–C single bond",
      "C=C double bond",
      "C≡C triple bond",
      "C–H single bond"
    ],
    answer: 2,
    reason: "Triple bond (C≡C) শক্ত সবথেকে বেশি বন্ধন শক্তি।"
  },
  {
    question: "BeCl₂ (solid state) এ গঠন এবং বন্ধন কি হবে?",
    options: [
      "Linear molecules in lattice",
      "Chain structure via bridging Cl",
      "Bent molecules",
      "Discrete linear molecules only"
    ],
    answer: 1,
    reason: "Solid BeCl₂ এ কিছু bridging Cl-এর কারণে শৃঙ্খল (chain) গঠন হয়।"
  }
];

// ===============================================================

let selectedQuestions = [];
let timeLeft = 0;
let timer;

const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const quizContainer = document.getElementById("quizContainer");
const setupContainer = document.getElementById("setupContainer");
const timerDisplay = document.getElementById("timer");
const result = document.getElementById("result");
const timeSpan = document.getElementById("time");

startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", submitTest);

function startTest() {
  const qCount = parseInt(document.getElementById("questionCount").value);
  const timeMin = parseInt(document.getElementById("timeInput").value);

  selectedQuestions = shuffle(allQuestions).slice(0, qCount);
  timeLeft = timeMin * 60;

  setupContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  submitBtn.classList.remove("hidden");
  timerDisplay.classList.remove("hidden");

  showQuestions();
  startTimer();
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeSpan.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) submitTest();
  }, 1000);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? "0" + s : s}`;
}

function showQuestions() {
  quizContainer.innerHTML = "";
  selectedQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
      <p><b>${index + 1}. ${q.question}</b></p>
      ${q.options
        .map(
          (opt, i) => `
        <div class="option">
          <input type="radio" name="q${index}" id="q${index}_opt${i}" value="${i}">
          <label for="q${index}_opt${i}">${opt}</label>
        </div>
      `
        )
        .join("")}
    `;
    quizContainer.appendChild(div);
  });
}

function submitTest() {
  clearInterval(timer);
  let score = 0;
  const questionDivs = document.querySelectorAll(".question");

  selectedQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const options = questionDivs[index].querySelectorAll(".option");

    options.forEach((opt, i) => {
      if (i === q.answer) opt.classList.add("correct");
    });

    if (selected) {
      const selectedValue = parseInt(selected.value);
      if (selectedValue === q.answer) {
        score++;
      } else {
        options[selectedValue].classList.add("wrong");
        const explain = document.createElement("div");
        explain.classList.add("explanation");
        explain.textContent = `❌ ভুল কারণ: ${q.reason}`;
        questionDivs[index].appendChild(explain);
      }
    } else {
      const explain = document.createElement("div");
      explain.classList.add("explanation");
      explain.textContent = `❌ উত্তর দেওয়া হয়নি। সঠিক উত্তর: ${q.options[q.answer]} — ${q.reason}`;
      questionDivs[index].appendChild(explain);
    }
  });

  quizContainer.querySelectorAll("input").forEach(i => i.disabled = true);
  submitBtn.disabled = true;
  result.classList.remove("hidden");
  result.innerHTML = `<h2>তোমার স্কোর: ${score}/${selectedQuestions.length}</h2>`;
}
