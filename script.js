const questions = [
  { q: "هل تحب الرياضيات والمنطق؟", tag: "رياضيات" },
  { q: "هل تستمتع بحل المسائل والمعادلات؟", tag: "رياضيات" },
  { q: "هل تفضل العمل مع الحاسوب أو البرمجة؟", tag: "حاسوب" },
  { q: "هل تحب مساعدة الآخرين وتحليل سلوكهم؟", tag: "علم نفس" },
  { q: "هل تفضل التعامل مع الأمور الطبية أو الصحة؟", tag: "طب" },
  { q: "هل تحب الرسم أو التصميم أو التصوير؟", tag: "فنون" },
  { q: "هل تحب النقاشات والقراءة والكتابة؟", tag: "إعلام" },
  { q: "هل تحب العلوم والبحث والتجارب؟", tag: "علوم" },
  { q: "هل تهتم بالأعمال والإدارة والمال؟", tag: "إدارة" }
];

let index = 0;
let scores = {};

function showQuestion() {
  if (index < questions.length) {
    document.getElementById("question").innerText = questions[index].q;
  } else {
    showResult();
  }
}

function answer(choice) {
  const current = questions[index];
  if (choice === "yes") {
    scores[current.tag] = (scores[current.tag] || 0) + 1;
  }
  index++;
  showQuestion();
}

function showResult() {
  document.getElementById("question-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";

  let best = "";
  let max = 0;
  for (const key in scores) {
    if (scores[key] > max) {
      max = scores[key];
      best = key;
    }
  }

  const advice = {
    "رياضيات": "ننصحك بتخصصات مثل: رياضيات، هندسة، أو تحليل البيانات.",
    "حاسوب": "برمجة، هندسة برمجيات، أو أمن سيبراني قد تكون مناسبة لك.",
    "علم نفس": "علم النفس أو الإرشاد التربوي يمكن أن يناسبك.",
    "طب": "الطب أو التمريض أو الصيدلة خيارات قوية لك.",
    "فنون": "فنون جميلة، تصميم، أو إعلام بصري ممكن تكون اختيارك.",
    "إعلام": "الصحافة، الإعلام، أو الترجمة مناسبة لك.",
    "علوم": "كيمياء، فيزياء، أو أحياء تخصصات رائعة لك.",
    "إدارة": "إدارة أعمال، اقتصاد، أو محاسبة مناسبة لك."
  };

  document.getElementById("result").innerText = best
    ? advice[best]
    : "لم يتم تحديد تخصص بناءً على إجاباتك. حاول مرة أخرى.";
}

function restart() {
  index = 0;
  scores = {};
  document.getElementById("result-box").style.display = "none";
  document.getElementById("question-box").style.display = "block";
  showQuestion();
}

window.onload = showQuestion;
