"use strict";

const app = document.getElementById("app");
const tabs = document.querySelectorAll(".tab");

const STORE_KEY = "francais-a1-progress";
let state = {
  view: "home",
  lessonId: null,
  cardLessonId: null,
  cardIndex: 0,
  cardFlipped: false,
  quizLessonId: null,
  quizIndex: 0,
  quizScore: 0,
  quizAnswers: [],
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return { quizzes: {}, cardsSeen: {} };
}

function saveProgress(progress) {
  localStorage.setItem(STORE_KEY, JSON.stringify(progress || loadProgress()));
}

const getLesson = (id) => LESSONS.find((l) => l.id === id);

function setView(view) {
  state.view = view;
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.view === view));
  render();
  window.scrollTo(0, 0);
}

tabs.forEach((t) =>
  t.addEventListener("click", () => setView(t.dataset.view))
);

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function render() {
  if (state.view === "home") renderHome();
  else if (state.view === "lesson") renderLesson(state.lessonId);
  else if (state.view === "cards") renderCards();
  else if (state.view === "quiz") renderQuiz();
  else if (state.view === "progress") renderProgress();
}

/* ---------- Accueil : liste des leçons ---------- */

function renderHome() {
  const progress = loadProgress();
  const cards = LESSONS.map((lesson) => {
    const quiz = progress.quizzes[lesson.id];
    const best = quiz ? Math.round((quiz.bestPercent)) : null;
    const pct = best === null ? 0 : best;
    return `
      <article class="card">
        <h3>${lesson.emoji} ${esc(lesson.title)}</h3>
        <p>${lesson.quiz.length} questions de quiz · ${lesson.vocab.length} cartes mémoire</p>
        <div class="progressbar"><div style="width:${pct}%"></div></div>
        <div class="detail" style="color:var(--muted);font-size:.85rem;">
          ${best === null ? "Pas encore de quiz" : `Meilleur score : ${best}%`}
        </div>
        <div class="actions">
          <button class="btn primary" data-lesson="${lesson.id}">📖 Voir le cours</button>
          <button class="btn" data-cards="${lesson.id}">🃏 Cartes</button>
          <button class="btn" data-quiz="${lesson.id}">✅ Quiz</button>
        </div>
      </article>
    `;
  }).join("");

  app.innerHTML = `
    <section class="hero">
      <h2>Bienvenue ! 👋</h2>
      <p>Révise les bases du français niveau A1 : dates, prononciation, vocabulaire et grammaire. Choisis une leçon, révise avec les cartes mémoire puis teste-toi avec le quiz.</p>
    </section>
    <div class="grid">${cards}</div>
  `;

  app.querySelectorAll("[data-lesson]").forEach((b) =>
    b.addEventListener("click", () => {
      state.lessonId = b.dataset.lesson;
      setView("lesson");
    })
  );
  app.querySelectorAll("[data-cards]").forEach((b) =>
    b.addEventListener("click", () => {
      state.cardLessonId = b.dataset.cards;
      state.cardIndex = 0;
      state.cardFlipped = false;
      setView("cards");
    })
  );
  app.querySelectorAll("[data-quiz]").forEach((b) =>
    b.addEventListener("click", () => startQuiz(b.dataset.quiz))
  );
}

/* ---------- Leçon ---------- */

function renderLesson(id) {
  const lesson = getLesson(id);
  if (!lesson) return setView("home");

  const sections = lesson.theory
    .map((s) => {
      let content = "";
      if (s.body) content += `<p>${esc(s.body)}</p>`;
      if (s.list) content += `<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      return `<h3>${esc(s.title)}</h3>${content}`;
    })
    .join("");

  app.innerHTML = `
    <button class="backlink" id="back">← Retour aux cours</button>
    <section class="panel">
      <h2>${lesson.emoji} ${esc(lesson.title)}</h2>
      ${sections}
    </section>
    <div class="flash-controls">
      <button class="btn primary" id="to-cards">🃏 Réviser avec les cartes</button>
      <button class="btn" id="to-quiz">✅ Faire le quiz</button>
    </div>
  `;

  document.getElementById("back").addEventListener("click", () => setView("home"));
  document.getElementById("to-cards").addEventListener("click", () => {
    state.cardLessonId = id;
    state.cardIndex = 0;
    state.cardFlipped = false;
    setView("cards");
  });
  document.getElementById("to-quiz").addEventListener("click", () => startQuiz(id));
}

/* ---------- Cartes mémoire ---------- */

function renderCards() {
  const lesson = getLesson(state.cardLessonId) || LESSONS[0];
  const idx = Math.min(state.cardIndex, lesson.vocab.length - 1);
  const card = lesson.vocab[idx];

  app.innerHTML = `
    <button class="backlink" id="back">← Retour aux cours</button>
    <section class="panel">
      <h2>${lesson.emoji} Cartes mémoire — ${esc(lesson.title)}</h2>
      <div class="plain" style="color:var(--muted);font-size:.9rem;margin-bottom:6px;">
        Carte ${idx + 1} / ${lesson.vocab.length} · clique sur la carte pour voir la définition
      </div>
      <div class="progressbar" style="margin-bottom:8px;">
        <div style="width:${((idx + 1) / lesson.vocab.length) * 100}%"></div>
      </div>
      <div class="flashcard-scene">
        <div class="flashcard ${state.cardFlipped ? "flipped" : ""}" id="fc">
          <div class="face">
            <div class="word">${esc(card.fr)}</div>
            <div class="hint">Clique pour retourner ↻</div>
          </div>
          <div class="face back">
            <div class="word" style="font-size:1.15rem;">${esc(card.def)}</div>
            <div class="hint">Encore un clic pour revenir ↻</div>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="btn" id="prev">← Précédente</button>
        <button class="btn primary" id="next">Suivante →</button>
      </div>
    </section>
  `;

  const progress = loadProgress();
  if (!progress.cardsSeen[lesson.id]) progress.cardsSeen[lesson.id] = 0;
  if (idx + 1 > progress.cardsSeen[lesson.id]) {
    progress.cardsSeen[lesson.id] = idx + 1;
    saveProgress(progress);
  }

  document.getElementById("fc").addEventListener("click", () => {
    state.cardFlipped = !state.cardFlipped;
    document.getElementById("fc").classList.toggle("flipped", state.cardFlipped);
  });
  document.getElementById("back").addEventListener("click", () => setView("home"));
  document.getElementById("prev").addEventListener("click", () => {
    if (state.cardIndex > 0) {
      state.cardIndex--;
      state.cardFlipped = false;
      render();
    }
  });
  document.getElementById("next").addEventListener("click", () => {
    if (state.cardIndex < lesson.vocab.length - 1) {
      state.cardIndex++;
      state.cardFlipped = false;
      render();
    } else {
      startQuiz(lesson.id);
    }
  });
}

/* ---------- Quiz ---------- */

function startQuiz(lessonId) {
  const lesson = getLesson(lessonId);
  state.quizLessonId = lessonId;
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = shuffle(lesson.quiz).map((q) => {
    const order = shuffle(q.choices.map((_, i) => i));
    return { q, order };
  });
  setView("quiz");
}

function renderQuiz() {
  const lesson = getLesson(state.quizLessonId);
  const item = state.quizAnswers[state.quizIndex];
  if (!item) return renderQuizResult();

  app.innerHTML = `
    <button class="backlink" id="quit">← Quitter le quiz</button>
    <section class="panel">
      <h2>✅ Quiz — ${lesson.emoji} ${esc(lesson.title)}</h2>
      <div class="quiz-header">
        <span>Question ${state.quizIndex + 1} / ${state.quizAnswers.length}</span>
        <span>Score : ${state.quizScore}</span>
      </div>
      <div class="progressbar" style="margin-bottom:14px;">
        <div style="width:${(state.quizIndex / state.quizAnswers.length) * 100}%"></div>
      </div>
      <p class="quiz-question">${esc(item.q.q)}</p>
      ${item.order
        .map(
          (origIdx, i) =>
            `<button class="choice" data-orig="${origIdx}" data-i="${i}">${esc(item.q.choices[origIdx])}</button>`
        )
        .join("")}
      <div id="feedback"></div>
    </section>
  `;

  document.getElementById("quit").addEventListener("click", () => setView("home"));
  app.querySelectorAll(".choice").forEach((btn) =>
    btn.addEventListener("click", () => answerQuiz(btn))
  );
}

function answerQuiz(btn) {
  const item = state.quizAnswers[state.quizIndex];
  const chosen = parseInt(btn.dataset.orig, 10);
  const correct = chosen === item.q.answer;
  if (correct) state.quizScore++;
  state.quizAnswers[state.quizIndex].answered = true;

  app.querySelectorAll(".choice").forEach((b) => {
    b.disabled = true;
    const orig = parseInt(b.dataset.orig, 10);
    if (orig === item.q.answer) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `
    <div style="margin-top:12px;text-align:right;">
      <button class="btn primary" id="next-q">Question suivante →</button>
    </div>
  `;
  document.getElementById("next-q").addEventListener("click", () => {
    state.quizIndex++;
    render();
  });
}

function renderQuizResult() {
  const lesson = getLesson(state.quizLessonId);
  const total = state.quizAnswers.length;
  const pct = Math.round((state.quizScore / total) * 100);

  const msg =
    pct === 100 ? "Parfait ! Niveau A1 maîtrisé sur ce thème. 🎉"
    : pct >= 70 ? "Très bien, tu y es presque !"
    : pct >= 50 ? "Pas mal, continue à réviser. 💪"
    : "Relis le cours puis retente le quiz !";

  const progress = loadProgress();
  const prev = progress.quizzes[lesson.id];
  const bestPercent = prev ? Math.max(prev.bestPercent, pct) : pct;
  progress.quizzes[lesson.id] = { bestPercent, lastPercent: pct };
  saveProgress(progress);

  app.innerHTML = `
    <button class="backlink" id="back">← Retour aux cours</button>
    <section class="panel" style="text-align:center;">
      <h2>${lesson.emoji} Résultat du quiz</h2>
      <p class="result-score">${state.quizScore} / ${total} (${pct}%)</p>
      <p class="result-msg">${msg}</p>
      <div class="flash-controls">
        <button class="btn" id="retry">↻ Recommencer</button>
        <button class="btn primary" id="home">Retour aux cours</button>
      </div>
    </section>
  `;

  document.getElementById("back").addEventListener("click", () => setView("home"));
  document.getElementById("retry").addEventListener("click", () => startQuiz(lesson.id));
  document.getElementById("home").addEventListener("click", () => setView("home"));
}

/* ---------- Progression ---------- */

function renderProgress() {
  const progress = loadProgress();

  const rows = LESSONS.map((lesson) => {
    const quiz = progress.quizzes[lesson.id];
    const seen = progress.cardsSeen[lesson.id] || 0;
    return `
      <div class="stat">
        <div class="name">${lesson.emoji} ${esc(lesson.title)}</div>
        <div class="progressbar"><div style="width:${quiz ? quiz.bestPercent : 0}%"></div></div>
        <div class="detail">
          Cartes vues : ${seen} / ${lesson.vocab.length}
          · Meilleur quiz : ${quiz ? quiz.bestPercent + "%" : "—"}
        </div>
      </div>
    `;
  }).join("");

  const totalQuizzes = Object.keys(progress.quizzes).length;

  app.innerHTML = `
    <section class="panel">
      <h2>📈 Ta progression</h2>
      <p style="color:var(--muted);">
        ${totalQuizzes === 0
          ? "Fais ton premier quiz pour suivre tes progrès."
          : `Tu as tenté ${totalQuizzes} quiz sur ${LESSONS.length}. Continue !`}
      </p>
      <div class="stat-grid">${rows}</div>
    </section>
  `;
}

render();
