const questions = [
  // অধ্যায় ১ : পরিবেশ রসায়ন
  {
    question: "কোন গ্যাসটি গ্রীনহাউস প্রভাবের জন্য প্রধানত দায়ী?",
    options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই-অক্সাইড", "আর্গন"],
    answer: 2
  },
  {
    question: "অ্যাসিড বৃষ্টির প্রধান কারণ কোনটি?",
    options: ["কার্বন মনোক্সাইড", "সালফার ডাই-অক্সাইড", "ওজোন", "মিথেন"],
    answer: 1
  },
  {
    question: "নিম্নের কোনটি একটি দ্বিতীয়ক দূষক (secondary pollutant)?",
    options: ["SO₂", "NO₂", "O₃", "CO"],
    answer: 2
  },
  {
    question: "খাদ্য শৃঙ্খলের উচ্চস্তরের জীবের মধ্যে বিষাক্ত পদার্থ জমা হওয়াকে বলে —",
    options: ["জীববিস্তার", "জীবসঞ্চয়", "ইউট্রোফিকেশন", "জীবক্ষয়"],
    answer: 0
  },
  {
    question: "কোন pH মানে দ্রবণকে অম্লীয় বলা হয়?",
    options: ["pH > 7", "pH = 7", "pH < 7", "pH = 0"],
    answer: 2
  },
  {
    question: "ওজোন স্তর ক্ষয়কারী পদার্থ হলো —",
    options: ["CO₂", "CFC", "CH₄", "SO₂"],
    answer: 1
  },
  {
    question: "গ্লোবাল ওয়ার্মিং বলতে বোঝায় —",
    options: [
      "পৃথিবীর তাপমাত্রা হ্রাস",
      "পৃথিবীর তাপমাত্রা বৃদ্ধি",
      "বৃষ্টিপাতের পরিমাণ হ্রাস",
      "ওজোন স্তর বৃদ্ধি"
    ],
    answer: 1
  },
  {
    question: "বায়ুদূষণের ফলে শ্বাসযন্ত্রের রোগ সৃষ্টি করে কোনটি?",
    options: ["SO₂", "N₂", "O₂", "Ar"],
    answer: 0
  },
  {
    question: "CO গ্যাস মানুষের শরীরে ক্ষতি করে কীভাবে?",
    options: [
      "ফুসফুস নষ্ট করে",
      "হিমোগ্লোবিনের সঙ্গে যুক্ত হয়ে অক্সিজেন পরিবহন বাধাগ্রস্ত করে",
      "রক্তচাপ কমায়",
      "কোষ ধ্বংস করে"
    ],
    answer: 1
  },
  {
    question: "পানিদূষণের একটি প্রধান কারণ হলো —",
    options: ["SO₂", "CO₂", "অধিক সার ব্যবহার", "বায়ু"],
    answer: 2
  },

  // অধ্যায় ২ : রাসায়নিক বন্ধন
  {
    question: "NaCl যৌগে বন্ধনের ধরন কোনটি?",
    options: ["সমযোজী বন্ধন", "আয়নিক বন্ধন", "ধাতব বন্ধন", "হাইড্রোজেন বন্ধন"],
    answer: 1
  },
  {
    question: "কোন বন্ধনে ইলেকট্রন যুগল ভাগাভাগি হয়?",
    options: ["আয়নিক", "সমযোজী", "ধাতব", "হাইড্রোজেন"],
    answer: 1
  },
  {
    question: "হাইড্রোজেন বন্ধন গঠনের জন্য প্রয়োজন —",
    options: ["H ও Cl", "H ও O", "H ও Na", "H ও Mg"],
    answer: 1
  },
  {
    question: "মিথেন (CH₄) অণুর আকৃতি —",
    options: ["রৈখিক", "ত্রিভুজীয় সমতল", "চতুর্মুখী (tetrahedral)", "V আকৃতি"],
    answer: 2
  },
  {
    question: "NH₃ অণুর বন্ধন কোণ প্রায় —",
    options: ["90°", "104.5°", "107°", "120°"],
    answer: 2
  },
  {
    question: "একই মৌলের বিভিন্ন অণুতে ভিন্ন ভিন্ন বন্ধনের উপস্থিতিকে বলে —",
    options: ["সমস্থানিক", "অ্যালোট্রপি", "আইসোমেরিজম", "রেজোন্যান্স"],
    answer: 3
  },
  {
    question: "BF₃ অণুর আকৃতি —",
    options: ["চতুর্মুখী", "ত্রিভুজীয় সমতল", "V আকৃতি", "রৈখিক"],
    answer: 1
  },
  {
    question: "হাইড্রোজেন বন্ধন সবচেয়ে শক্তিশালী হয় কোনটির মধ্যে?",
    options: ["H–F", "H–O", "H–N", "H–Cl"],
    answer: 0
  },
  {
    question: "ধাতব বন্ধনের মূল বৈশিষ্ট্য —",
    options: [
      "ইলেকট্রন ভাগাভাগি",
      "ইলেকট্রন দান-গ্রহণ",
      "ইলেকট্রন মেঘে ধনাত্মক আয়নের বিন্যাস",
      "ইলেকট্রন স্থানান্তর"
    ],
    answer: 2
  },
  {
    question: "কোন বন্ধনটি তুলনামূলকভাবে দুর্বল?",
    options: ["আয়নিক", "সমযোজী", "ধাতব", "হাইড্রোজেন"],
    answer: 3
  },
  {
    question: "পোলার সমযোজী বন্ধনে —",
    options: [
      "ইলেকট্রন সম্পূর্ণ স্থানান্তর হয়",
      "ইলেকট্রন অসমভাবে ভাগ হয়",
      "ইলেকট্রন মেঘ সৃষ্টি হয় না",
      "সমভাবে ভাগ হয়"
    ],
    answer: 1
  },
  {
    question: "ইলেকট্রোনেগেটিভিটি পার্থক্য বেশি হলে বন্ধনটি হবে —",
    options: ["সমযোজী", "আয়নিক", "ধাতব", "ভ্যান ডার ওয়ালস"],
    answer: 1
  },
  {
    question: "কোন অণুতে হাইড্রোজেন বন্ধন নেই?",
    options: ["H₂O", "HF", "CH₄", "NH₃"],
    answer: 2
  },
  {
    question: "অণু বন্ধনে রেজোন্যান্স বলতে বোঝায় —",
    options: [
      "একাধিক গঠন যা বাস্তবে গড় রূপে থাকে",
      "অণুর কম্পন",
      "বন্ধনের শক্তি বৃদ্ধি",
      "ইলেকট্রন হারানো"
    ],
    answer: 0
  },
  {
    question: "CO₂ অণুর আকৃতি —",
    options: ["রৈখিক", "V আকৃতি", "ত্রিভুজীয়", "চতুর্মুখী"],
    answer: 0
  }
];

let timer;
let timeLeft = 60 * 25; // 5 minutes test

const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const submitBtn = document.getElementById("submitBtn");
const timerDisplay = document.getElementById("timer");
const timeSpan = document.getElementById("time");
const result = document.getElementById("result");

startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", submitTest);

function startTest() {
  startBtn.classList.add("hidden");
  timerDisplay.classList.remove("hidden");
  quizContainer.classList.remove("hidden");
  submitBtn.classList.remove("hidden");
  showQuestions();
  startTimer();
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
  questions.forEach((q, index) => {
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

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const options = questionDivs[index].querySelectorAll(".option");

    options.forEach((opt, i) => {
      opt.classList.remove("correct", "wrong");
      if (i === q.answer) opt.classList.add("correct");
    });

    if (selected) {
      const selectedValue = parseInt(selected.value);
      if (selectedValue === q.answer) {
        score++;
      } else {
        options[selectedValue]?.classList.add("wrong");
      }
    }
  });

  quizContainer.querySelectorAll("input").forEach(i => i.disabled = true);
  submitBtn.disabled = true;
  result.classList.remove("hidden");
  result.innerHTML = `<h2>তোমার স্কোর: ${score}/${questions.length}</h2>`;
}