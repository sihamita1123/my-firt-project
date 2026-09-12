
```
/* =========================================================
   MATHLY — HIGH SCHOOL MATH STUDY APP
   script.js
   ========================================================= */

"use strict";

/* =========================================================
   APP DATA
   ========================================================= */

const MATH_DATA = {
  "Algebra": {
    icon: "∑",
    color: "#6366f1",
    topics: [
      {
        id: "linear-equations",
        title: "Linear Equations",
        difficulty: "Beginner",
        description: "Solve equations with one variable.",
        formula: "ax + b = c  →  x = (c - b) / a",
        example: {
          question: "Solve: 3x + 7 = 22",
          steps: [
            "Start with: 3x + 7 = 22",
            "Subtract 7 from both sides: 3x = 15",
            "Divide both sides by 3: x = 5"
          ],
          answer: "x = 5"
        }
      },
      {
        id: "systems",
        title: "Systems of Equations",
        difficulty: "Intermediate",
        description: "Solve two or more equations together.",
        formula: "Use substitution or elimination.",
        example: {
          question: "Solve: x + y = 10 and x - y = 2",
          steps: [
            "Add the equations: 2x = 12",
            "Divide by 2: x = 6",
            "Substitute x = 6 into x + y = 10",
            "6 + y = 10, so y = 4"
          ],
          answer: "x = 6, y = 4"
        }
      },
      {
        id: "quadratics",
        title: "Quadratic Equations",
        difficulty: "Intermediate",
        description: "Work with equations containing x².",
        formula: "x = (-b ± √(b² - 4ac)) / 2a",
        example: {
          question: "Solve x² - 5x + 6 = 0",
          steps: [
            "Factor the quadratic.",
            "x² - 5x + 6 = (x - 2)(x - 3)",
            "Set each factor equal to zero.",
            "x - 2 = 0 → x = 2",
            "x - 3 = 0 → x = 3"
          ],
          answer: "x = 2 or x = 3"
        }
      },
      {
        id: "polynomials",
        title: "Polynomials",
        difficulty: "Intermediate",
        description: "Add, subtract, multiply, and factor polynomials.",
        formula: "(a + b)² = a² + 2ab + b²",
        example: {
          question: "Expand: (x + 3)(x + 2)",
          steps: [
            "Multiply x by every term: x² + 2x",
            "Multiply 3 by every term: 3x + 6",
            "Combine like terms.",
            "x² + 5x + 6"
          ],
          answer: "x² + 5x + 6"
        }
      },
      {
        id: "exponents",
        title: "Exponents",
        difficulty: "Beginner",
        description: "Understand powers and exponent rules.",
        formula: "aᵐ · aⁿ = aᵐ⁺ⁿ",
        example: {
          question: "Simplify: x³ · x⁴",
          steps: [
            "The bases are the same.",
            "Add the exponents: 3 + 4 = 7."
          ],
          answer: "x⁷"
        }
      },
      {
        id: "radicals",
        title: "Radicals",
        difficulty: "Intermediate",
        description: "Simplify and operate with square roots.",
        formula: "√(ab) = √a · √b",
        example: {
          question: "Simplify √50",
          steps: [
            "Break 50 into 25 × 2.",
            "√50 = √25 × √2",
            "√25 = 5"
          ],
          answer: "5√2"
        }
      },
      {
        id: "inequalities",
        title: "Inequalities",
        difficulty: "Beginner",
        description: "Solve and graph inequalities.",
        formula: "Reverse the inequality when multiplying/dividing by a negative.",
        example: {
          question: "Solve: 2x + 4 > 10",
          steps: [
            "Subtract 4: 2x > 6",
            "Divide by 2: x > 3"
          ],
          answer: "x > 3"
        }
      },
      {
        id: "absolute-value",
        title: "Absolute Value",
        difficulty: "Intermediate",
        description: "Solve equations and inequalities involving absolute value.",
        formula: "|x| = a → x = ±a",
        example: {
          question: "Solve |x| = 7",
          steps: [
            "Absolute value represents distance from zero.",
            "Both 7 and -7 are 7 units from zero."
          ],
          answer: "x = 7 or x = -7"
        }
      }
    ]
  },

  "Geometry": {
    icon: "△",
    color: "#0ea5e9",
    topics: [
      {
        id: "pythagorean",
        title: "Pythagorean Theorem",
        difficulty: "Beginner",
        description: "Find missing sides of right triangles.",
        formula: "a² + b² = c²",
        example: {
          question: "A right triangle has legs 3 and 4. Find the hypotenuse.",
          steps: [
            "Use a² + b² = c².",
            "3² + 4² = c²",
            "9 + 16 = 25",
            "√25 = 5"
          ],
          answer: "c = 5"
        }
      },
      {
        id: "area",
        title: "Area",
        difficulty: "Beginner",
        description: "Find the area of common two-dimensional shapes.",
        formula: "Rectangle: A = lw",
        example: {
          question: "Find the area of a rectangle with length 8 and width 5.",
          steps: [
            "Use A = lw.",
            "A = 8 × 5",
            "A = 40"
          ],
          answer: "40 square units"
        }
      },
      {
        id: "circles",
        title: "Circles",
        difficulty: "Intermediate",
        description: "Work with radius, diameter, circumference, and area.",
        formula: "A = πr², C = 2πr",
        example: {
          question: "Find the area of a circle with radius 4.",
          steps: [
            "Use A = πr².",
            "A = π(4²)",
            "A = 16π"
          ],
          answer: "16π square units"
        }
      },
      {
        id: "similarity",
        title: "Similarity",
        difficulty: "Intermediate",
        description: "Use proportions between similar figures.",
        formula: "Corresponding sides have equal ratios.",
        example: {
          question: "Two similar triangles have side ratio 2:3. What is the scale factor from small to large?",
          steps: [
            "Compare corresponding sides.",
            "Large / Small = 3 / 2."
          ],
          answer: "3/2"
        }
      },
      {
        id: "volume",
        title: "Volume",
        difficulty: "Beginner",
        description: "Find the amount of space inside 3D shapes.",
        formula: "Rectangular prism: V = lwh",
        example: {
          question: "Find the volume of a 2 × 3 × 5 rectangular prism.",
          steps: [
            "V = lwh",
            "V = 2 × 3 × 5",
            "V = 30"
          ],
          answer: "30 cubic units"
        }
      }
    ]
  },

  "Trigonometry": {
    icon: "sin",
    color: "#8b5cf6",
    topics: [
      {
        id: "sohcahtoa",
        title: "SOH-CAH-TOA",
        difficulty: "Intermediate",
        description: "Use sine, cosine, and tangent in right triangles.",
        formula: "sin = opposite/hypotenuse",
        example: {
          question: "If opposite = 3 and hypotenuse = 5, find sin θ.",
          steps: [
            "Use SOH.",
            "sin θ = opposite / hypotenuse",
            "sin θ = 3/5"
          ],
          answer: "sin θ = 0.6"
        }
      },
      {
        id: "unit-circle",
        title: "Unit Circle",
        difficulty: "Advanced",
        description: "Understand exact trigonometric values.",
        formula: "x = cos θ, y = sin θ",
        example: {
          question: "What is sin(90°)?",
          steps: [
            "Locate 90° on the unit circle.",
            "The y-coordinate is 1."
          ],
          answer: "1"
        }
      },
      {
        id: "trig-identities",
        title: "Trig Identities",
        difficulty: "Advanced",
        description: "Simplify expressions using identities.",
        formula: "sin²θ + cos²θ = 1",
        example: {
          question: "If sin θ = 3/5, find cos²θ.",
          steps: [
            "Use sin²θ + cos²θ = 1.",
            "(3/5)² + cos²θ = 1",
            "9/25 + cos²θ = 1",
            "cos²θ = 16/25"
          ],
          answer: "16/25"
        }
      }
    ]
  },

  "Functions": {
    icon: "ƒ",
    color: "#ec4899",
    topics: [
      {
        id: "function-basics",
        title: "Function Basics",
        difficulty: "Beginner",
        description: "Understand inputs, outputs, domain, and range.",
        formula: "f(x) = output",
        example: {
          question: "If f(x) = 2x + 1, find f(4).",
          steps: [
            "Replace x with 4.",
            "f(4) = 2(4) + 1",
            "f(4) = 8 + 1"
          ],
          answer: "9"
        }
      },
      {
        id: "domain-range",
        title: "Domain & Range",
        difficulty: "Intermediate",
        description: "Identify allowed inputs and possible outputs.",
        formula: "Domain = possible x-values; Range = possible y-values.",
        example: {
          question: "Find the domain of f(x) = 1/x.",
          steps: [
            "A denominator cannot equal zero.",
            "Therefore x cannot be 0."
          ],
          answer: "x ≠ 0"
        }
      },
      {
        id: "composition",
        title: "Function Composition",
        difficulty: "Advanced",
        description: "Combine functions such as f(g(x)).",
        formula: "(f ∘ g)(x) = f(g(x))",
        example: {
          question: "f(x)=x+2 and g(x)=3x. Find f(g(x)).",
          steps: [
            "Start with g(x) = 3x.",
            "Put 3x into f.",
            "f(3x) = 3x + 2"
          ],
          answer: "3x + 2"
        }
      }
    ]
  },

  "Statistics": {
    icon: "▥",
    color: "#14b8a6",
    topics: [
      {
        id: "mean",
        title: "Mean, Median & Mode",
        difficulty: "Beginner",
        description: "Find common measures of center.",
        formula: "Mean = sum of values / number of values",
        example: {
          question: "Find the mean of 2, 4, 6, 8.",
          steps: [
            "Add the values: 2 + 4 + 6 + 8 = 20.",
            "There are 4 values.",
            "20 ÷ 4 = 5."
          ],
          answer: "5"
        }
      },
      {
        id: "probability",
        title: "Probability",
        difficulty: "Beginner",
        description: "Calculate the likelihood of events.",
        formula: "P(event) = favorable outcomes / total outcomes",
        example: {
          question: "What is the probability of rolling a 3 on a fair six-sided die?",
          steps: [
            "There is 1 favorable outcome.",
            "There are 6 total outcomes.",
            "P(3) = 1/6"
          ],
          answer: "1/6"
        }
      },
      {
        id: "standard-deviation",
        title: "Standard Deviation",
        difficulty: "Advanced",
        description: "Measure how spread out data is.",
        formula: "Standard deviation measures typical distance from the mean.",
        example: {
          question: "What does a larger standard deviation mean?",
          steps: [
            "Standard deviation measures spread.",
            "A larger value means data points are generally farther from the mean."
          ],
          answer: "The data is more spread out."
        }
      }
    ]
  },

  "Precalculus": {
    icon: "π",
    color: "#f97316",
    topics: [
      {
        id: "sequences",
        title: "Sequences & Series",
        difficulty: "Advanced",
        description: "Study ordered lists of numbers and their sums.",
        formula: "Arithmetic: aₙ = a₁ + (n−1)d",
        example: {
          question: "Find the 10th term of 2, 5, 8, 11...",
          steps: [
            "a₁ = 2",
            "d = 3",
            "a₁₀ = 2 + (10−1)(3)",
            "a₁₀ = 2 + 27"
          ],
          answer: "29"
        }
      },
      {
        id: "limits-intro",
        title: "Introduction to Limits",
        difficulty: "Advanced",
        description: "Understand what a function approaches.",
        formula: "lim f(x) as x→a",
        example: {
          question: "Find lim(x+2) as x approaches 3.",
          steps: [
            "For this continuous function, substitute x = 3.",
            "3 + 2 = 5."
          ],
          answer: "5"
        }
      },
      {
        id: "complex-numbers",
        title: "Complex Numbers",
        difficulty: "Advanced",
        description: "Work with numbers involving i.",
        formula: "i² = -1",
        example: {
          question: "Simplify i² + 4.",
          steps: [
            "Use i² = -1.",
            "-1 + 4 = 3."
          ],
          answer: "3"
        }
      }
    ]
  },

  "Calculus": {
    icon: "∫",
    color: "#ef4444",
    topics: [
      {
        id: "derivatives",
        title: "Derivatives",
        difficulty: "Advanced",
        description: "Find instantaneous rates of change.",
        formula: "d/dx(xⁿ) = nxⁿ⁻¹",
        example: {
          question: "Find the derivative of x³.",
          steps: [
            "Use the power rule.",
            "Multiply the exponent by the coefficient.",
            "Reduce the exponent by 1."
          ],
          answer: "3x²"
        }
      },
      {
        id: "integrals",
        title: "Integrals",
        difficulty: "Advanced",
        description: "Find antiderivatives and accumulated change.",
        formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
        example: {
          question: "Find ∫x² dx.",
          steps: [
            "Increase the exponent from 2 to 3.",
            "Divide by the new exponent.",
            "Add C."
          ],
          answer: "x³/3 + C"
        }
      }
    ]
  }
};

/* =========================================================
   QUIZ QUESTIONS
   ========================================================= */

const QUIZ_QUESTIONS = [
  {
    question: "Solve: 2x + 6 = 14",
    answers: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "Subtract 6 to get 2x = 8, then divide by 2."
  },
  {
    question: "What is the value of 3²?",
    answers: ["6", "8", "9", "12"],
    correct: 2,
    explanation: "3² means 3 × 3 = 9."
  },
  {
    question: "What is the area of a rectangle 7 × 4?",
    answers: ["11", "22", "28", "32"],
    correct: 2,
    explanation: "Area = length × width = 7 × 4 = 28."
  },
  {
    question: "What is √81?",
    answers: ["7", "8", "9", "10"],
    correct: 2,
    explanation: "9 × 9 = 81."
  },
  {
    question: "What is the slope of y = 3x + 2?",
    answers: ["2", "3", "-3", "5"],
    correct: 1,
    explanation: "In y = mx + b, m is the slope."
  },
  {
    question: "What is sin(90°)?",
    answers: ["0", "1/2", "√2/2", "1"],
    correct: 3,
    explanation: "The sine of 90° is 1."
  },
  {
    question: "What is the mean of 4, 6, 8?",
    answers: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "(4 + 6 + 8) ÷ 3 = 6."
  },
  {
    question: "What is 5!?",
    answers: ["20", "60", "100", "120"],
    correct: 3,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120."
  }
];

/* =========================================================
   APPLICATION STATE
   ========================================================= */

const defaultState = {
  currentScreen: "home",
  selectedSubject: null,
  selectedTopic: null,

  completedTopics: [],
  favoriteTopics: [],

  xp: 0,
  streak: 1,
  level: 1,

  quizScore: 0,
  quizQuestion: 0,

  darkMode: false,
  userName: "Student",

  recentTopics: []
};

let state = loadState();

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  applyTheme();
  setupNavigation();
  setupSearch();
  setupKeyboardShortcuts();
  setupGlobalClicks();

  renderSubjects();
  renderHome();
  renderProgress();
  renderFavorites();

  updateUserInterface();
}

/* =========================================================
   STORAGE
   ========================================================= */

function loadState() {
  try {
    const saved = localStorage.getItem("mathlyState");

    if (!saved) {
      return structuredClone(defaultState);
    }

    return {
      ...structuredClone(defaultState),
      ...JSON.parse(saved)
    };
  } catch (error) {
    console.warn("Could not load saved data.", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem("mathlyState", JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save app data.", error);
  }
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {
  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-nav]");

    if (!nav) return;

    const screen = nav.dataset.nav;

    navigate(screen);
  });
}

function navigate(screen) {
  state.currentScreen = screen;

  hideAllScreens();

  const target = document.querySelector(
    `[data-screen="${screen}"]`
  );

  if (target) {
    target.classList.add("active");
  }

  if (screen === "home") {
    renderHome();
  }

  if (screen === "subjects") {
    renderSubjects();
  }

  if (screen === "progress") {
    renderProgress();
  }

  if (screen === "favorites") {
    renderFavorites();
  }

  updateNavigationState();
  saveState();
}

function hideAllScreens() {
  document.querySelectorAll("[data-screen]").forEach(screen => {
    screen.classList.remove("active");
  });
}

function updateNavigationState() {
  document.querySelectorAll("[data-nav]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.nav === state.currentScreen
    );
  });
}

/* =========================================================
   HOME
   ========================================================= */

function renderHome() {
  const greeting = document.querySelector("[data-user-greeting]");
  const xpElement = document.querySelector("[data-xp]");
  const streakElement = document.querySelector("[data-streak]");
  const levelElement = document.querySelector("[data-level]");

  if (greeting) {
    greeting.textContent = `Welcome back, ${state.userName}!`;
  }

  if (xpElement) {
    xpElement.textContent = state.xp;
  }

  if (streakElement) {
    streakElement.textContent = state.streak;
  }

  if (levelElement) {
    levelElement.textContent = state.level;
  }

  renderRecentTopics();
  renderDailyGoal();
}

function renderRecentTopics() {
  const container = document.querySelector("[data-recent-topics]");

  if (!container) return;

  if (state.recentTopics.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📚</div>
        <h3>Start learning</h3>
        <p>Your recently studied topics will appear here.</p>
        <button data-nav="subjects">Explore Math</button>
      </div>
    `;

    return;
  }

  const topics = state.recentTopics
    .map(id => findTopic(id))
    .filter(Boolean)
    .slice(0, 5);

  container.innerHTML = topics
    .map(topicCardHTML)
    .join("");
}

function renderDailyGoal() {
  const container = document.querySelector("[data-daily-goal]");

  if (!container) return;

  const totalTopics = getAllTopics().length;
  const completed = state.completedTopics.length;

  const percentage = totalTopics
    ? Math.round((completed / totalTopics) * 100)
    : 0;

  container.innerHTML = `
    <div class="goal-progress">
      <div class="goal-progress-bar">
        <span style="width:${percentage}%"></span>
      </div>
      <div class="goal-details">
        <strong>${percentage}%</strong>
        <span>${completed}/${totalTopics} topics completed</span>
      </div>
    </div>
  `;
}

/* =========================================================
   SUBJECTS
   ========================================================= */

function renderSubjects() {
  const container = document.querySelector("[data-subjects]");

  if (!container) return;

  container.innerHTML = Object.entries(MATH_DATA)
    .map(([subject, data]) => {
      const completed = data.topics.filter(topic =>
        state.completedTopics.includes(topic.id)
      ).length;

      const percentage = Math.round(
        (completed / data.topics.length) * 100
      );

      return `
        <article
          class="subject-card"
          data-subject="${escapeHTML(subject)}"
          style="--subject-color:${data.color}"
        >
          <div class="subject-icon">${data.icon}</div>

          <div class="subject-info">
            <h3>${escapeHTML(subject)}</h3>
            <p>${data.topics.length} topics</p>

            <div class="subject-progress">
              <span style="width:${percentage}%"></span>
            </div>

            <small>${completed} completed</small>
          </div>

          <button
            class="subject-open"
            data-open-subject="${escapeHTML(subject)}"
            aria-label="Open ${escapeHTML(subject)}"
          >
            →
          </button>
        </article>
      `;
    })
    .join("");
}

/* =========================================================
   TOPIC DISPLAY
   ========================================================= */

function openSubject(subjectName) {
  const subject = MATH_DATA[subjectName];

  if (!subject) return;

  state.selectedSubject = subjectName;

  const container = document.querySelector("[data-topic-list]");

  if (!container) {
    navigate("subjects");
    return;
  }

  const title = document.querySelector("[data-topic-title]");

  if (title) {
    title.textContent = subjectName;
  }

  container.innerHTML = subject.topics
    .map(topicCardHTML)
    .join("");

  navigate("subjects");
}

function topicCardHTML(topic) {
  const completed = state.completedTopics.includes(topic.id);
  const favorite = state.favoriteTopics.includes(topic.id);

  return `
    <article
      class="topic-card ${completed ? "completed" : ""}"
      data-topic-id="${topic.id}"
    >
      <div class="topic-card-main">
        <div class="topic-status">
          ${completed ? "✓" : "○"}
        </div>

        <div class="topic-content">
          <h3>${escapeHTML(topic.title)}</h3>
          <p>${escapeHTML(topic.description)}</p>

          <div class="topic-meta">
            <span>${escapeHTML(topic.difficulty)}</span>
            <span>${escapeHTML(topic.formula)}</span>
          </div>
        </div>
      </div>

      <div class="topic-actions">
        <button
          data-open-topic="${topic.id}"
          title="Study topic"
        >
          Study
        </button>

        <button
          data-favorite-topic="${topic.id}"
          title="Favorite"
          aria-label="Favorite ${escapeHTML(topic.title)}"
        >
          ${favorite ? "★" : "☆"}
        </button>
      </div>
    </article>
  `;
}

/* =========================================================
   LESSON VIEW
   ========================================================= */

function openTopic(topicId) {
  const topic = findTopic(topicId);

  if (!topic) return;

  state.selectedTopic = topicId;

  addRecentTopic(topicId);

  const container = document.querySelector("[data-lesson]");

  if (!container) return;

  const completed = state.completedTopics.includes(topic.id);
  const favorite = state.favoriteTopics.includes(topic.id);

  container.innerHTML = `
    <div class="lesson-header">

      <button data-action="back-subjects" class="back-button">
        ← Back
      </button>

      <button
        data-favorite-topic="${topic.id}"
        class="favorite-button"
      >
        ${favorite ? "★ Saved" : "☆ Save"}
      </button>

    </div>

    <div class="lesson-title">
      <span class="lesson-badge">${escapeHTML(topic.difficulty)}</span>
      <h1>${escapeHTML(topic.title)}</h1>
      <p>${escapeHTML(topic.description)}</p>
    </div>

    <section class="lesson-section formula-section">
      <span class="section-label">KEY FORMULA</span>
      <div class="formula-box">
        ${escapeHTML(topic.formula)}
      </div>
    </section>

    <section class="lesson-section">
      <span class="section-label">WORKED EXAMPLE</span>

      <div class="example-card">

        <h2>${escapeHTML(topic.example.question)}</h2>

        <div class="solution-steps">
          ${topic.example.steps
            .map((step, index) => `
              <div class="solution-step">
                <span>${index + 1}</span>
                <p>${escapeHTML(step)}</p>
              </div>
            `)
            .join("")}
        </div>

        <div class="answer-box">
          <span>ANSWER</span>
          <strong>${escapeHTML(topic.example.answer)}</strong>
        </div>

      </div>
    </section>

    <section class="lesson-actions">

      <button
        class="primary-button"
        data-complete-topic="${topic.id}"
      >
        ${completed ? "✓ Completed" : "Mark as Complete"}
      </button>

      <button
        class="secondary-button"
        data-practice-topic="${topic.id}"
      >
        Practice This Topic
      </button>

    </section>
  `;

  navigate("lesson");
}

/* =========================================================
   COMPLETION SYSTEM
   ========================================================= */

function completeTopic(topicId) {
  if (state.completedTopics.includes(topicId)) {
    showToast("You've already completed this topic.");
    return;
  }

  state.completedTopics.push(topicId);

  addXP(25);

  saveState();

  showToast("+25 XP! Topic completed 🎉");

  renderProgress();
  renderHome();

  const button = document.querySelector(
    `[data-complete-topic="${topicId}"]`
  );

  if (button) {
    button.textContent = "✓ Completed";
    button.classList.add("completed");
  }
}

/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(topicId) {
  const index = state.favoriteTopics.indexOf(topicId);

  if (index === -1) {
    state.favoriteTopics.push(topicId);
    showToast("Added to favorites ⭐");
  } else {
    state.favoriteTopics.splice(index, 1);
    showToast("Removed from favorites");
  }

  saveState();

  renderFavorites();

  document.querySelectorAll(
    `[data-favorite-topic="${topicId}"]`
  ).forEach(button => {
    const favorite = state.favoriteTopics.includes(topicId);
    button.textContent = favorite ? "★ Saved" : "☆ Save";
  });
}

function renderFavorites() {
  const container = document.querySelector("[data-favorites]");

  if (!container) return;

  const topics = state.favoriteTopics
    .map(findTopic)
    .filter(Boolean);

  if (topics.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">☆</div>
        <h3>No saved topics</h3>
        <p>Save topics while studying to find them quickly later.</p>
      </div>
    `;

    return;
  }

  container.innerHTML = topics
    .map(topicCardHTML)
    .join("");
}

/* =========================================================
   RECENT TOPICS
   ========================================================= */

function addRecentTopic(topicId) {
  state.recentTopics = [
    topicId,
    ...state.recentTopics.filter(id => id !== topicId)
  ].slice(0, 8);

  saveState();
}

/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {
  const searchInputs = document.querySelectorAll(
    "[data-search]"
  );

  searchInputs.forEach(input => {
    input.addEventListener("input", event => {
      searchTopics(event.target.value);
    });
  });
}

function searchTopics(query) {
  const term = query.trim().toLowerCase();

  const container = document.querySelector(
    "[data-search-results]"
  );

  if (!container) return;

  if (!term) {
    container.innerHTML = "";
    return;
  }

  const matches = getAllTopics().filter(topic => {
    const searchable = [
      topic.title,
      topic.description,
      topic.formula,
      topic.difficulty
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(term);
  });

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No topics found</h3>
        <p>Try searching for algebra, functions, geometry, or another topic.</p>
      </div>
    `;

    return;
  }

  container.innerHTML = matches
    .slice(0, 20)
    .map(topicCardHTML)
    .join("");
}

/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress() {
  const total = getAllTopics().length;
  const completed = state.completedTopics.length;

  const percentage = total
    ? Math.round((completed / total) * 100)
    : 0;

  const progressBar = document.querySelector(
    "[data-progress-bar]"
  );

  const progressText = document.querySelector(
    "[data-progress-percent]"
  );

  const completedText = document.querySelector(
    "[data-completed-count]"
  );

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  if (progressText) {
    progressText.textContent = `${percentage}%`;
  }

  if (completedText) {
    completedText.textContent =
      `${completed} / ${total}`;
  }

  renderSubjectProgress();
}

function renderSubjectProgress() {
  const container = document.querySelector(
    "[data-subject-progress]"
  );

  if (!container) return;

  container.innerHTML = Object.entries(MATH_DATA)
    .map(([subject, data]) => {
      const completed = data.topics.filter(topic =>
        state.completedTopics.includes(topic.id)
      ).length;

      const percentage = Math.round(
        (completed / data.topics.length) * 100
      );

      return `
        <div class="progress-subject">
          <div>
            <strong>${escapeHTML(subject)}</strong>
            <span>${completed}/${data.topics.length}</span>
          </div>

          <div class="progress-track">
            <span
              style="
                width:${percentage}%;
                background:${data.color};
              "
            ></span>
          </div>
        </div>
      `;
    })
    .join("");
}

/* =========================================================
   XP & LEVEL SYSTEM
   ========================================================= */

function addXP(amount) {
  state.xp += amount;

  const newLevel =
    Math.floor(state.xp / 100) + 1;

  if (newLevel > state.level) {
    state.level = newLevel;

    showToast(
      `Level up! You are now Level ${newLevel} 🚀`
    );
  }

  saveState();
  updateUserInterface();
}

function getXPForNextLevel() {
  return state.level * 100;
}

function getLevelProgress() {
  const previous = (state.level - 1) * 100;
  const next = state.level * 100;

  return Math.min(
    100,
    Math.round(
      ((state.xp - previous) /
        (next - previous)) *
        100
    )
  );
}

/* =========================================================
   QUIZ SYSTEM
   ========================================================= */

function startQuiz() {
  state.quizQuestion = 0;
  state.quizScore = 0;

  renderQuizQuestion();

  navigate("quiz");
}

function renderQuizQuestion() {
  const container = document.querySelector(
    "[data-quiz]"
  );

  if (!container) return;

  const question =
    QUIZ_QUESTIONS[state.quizQuestion];

  if (!question) {
    finishQuiz();
    return;
  }

  const progress = Math.round(
    (state.quizQuestion / QUIZ_QUESTIONS.length) * 100
  );

  container.innerHTML = `
    <div class="quiz-header">
      <span>
        Question ${state
```