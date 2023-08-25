// DOM Elements
const roadline = document.querySelector(".roadline");
const title = document.querySelector("h2");

/* disable start */
// Disable right-click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable F12 (DevTools shortcut), Ctrl+Shift+I (Inspect Element), Command+Option+I, and Ctrl+Shift+C
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 123 || 
      (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
      (e.metaKey && e.altKey && e.keyCode == 73) || 
      (e.ctrlKey && e.shiftKey && e.keyCode == 67)) {
      e.preventDefault();
  }
});

// Disable dragging of elements
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

// Disable copying of content
document.addEventListener('copy', function(e) {
  e.preventDefault();
  alert('Copying is not allowed!');
});

// Disable text selection
document.body.style.userSelect = 'none';

/* disable end */

// Array of motivational messages for each day
const motivationalMessages = [
  "Every big journey begins with the first step. You've taken yours!",
  "Two days in! Remember, consistency is the key to success.",
  "Three days down! Every step you take is a step closer to your goal.",
  "Four days strong! Your dedication is inspiring.",
  "A high five for five days! Keep pushing forward.",
  "Almost a week! Your commitment is shining through.",
  "One week completed! Great things never come from comfort zones.",
  "Eight days and counting! Success is the sum of small efforts.",
  "Nine days of dedication! Keep the momentum going.",
  "A perfect 10! Double digits now. Keep climbing.",
  "Every day is a chance to get better. Keep it up!",
  "12 days in! Remember why you started.",
  "Lucky 13! Your progress is your motivation.",
  "Two weeks of consistency! You're setting a benchmark.",
  "15 days of dedication! Every day brings a new challenge and a new opportunity.",
  "16 days and unstoppable! Your journey is your reward.",
  "Pushing through 17 days! Remember, the pain you feel today will be the strength you feel tomorrow.",
  "18 days of hard work! You're not here to be average, you're here to be awesome.",
  "Nearing 20! Every accomplishment starts with the decision to try.",
  "20 days of commitment! Believe in yourself and all that you are.",
  "Three weeks in! Know that there's something inside you greater than any obstacle.",
  "22 days! Don't watch the clock; do what it does. Keep going.",
  "23 days and counting! Small daily improvements lead to long-term results.",
  "24 days strong! The harder you work for something, the greater you'll feel when you achieve it.",
  "A quarter of the way there! Your dedication is paying off.",
  "26 days! It's not about being the best. It's about being better than you were yesterday.",
  "27 days in! Keep your dreams alive.",
  "Four weeks completed! Understand to achieve anything requires faith and belief in yourself.",
  "29 days! Remember, the only limit to our realization of tomorrow is our doubts of today.",
  "30 days of hard work! Stay committed to your decisions, but stay flexible in your approach.",
  "A month in! The future depends on what you do today.",
  "32 days! Success is no accident. It's hard work, perseverance, and love of what you're doing.",
  "33 days strong! Don't stop when you're tired. Stop when you're done.",
  "34 days and counting! You're closer than you think.",
  "Over a third of the way there! Every day is another chance to get stronger.",
  "36 days! Your passion is your fire.",
  "37 days in! Remember, the only way to do great work is to love what you do.",
  "38 days! The best time to start was yesterday. The next best time is now.",
  "39 days of dedication! Keep your eyes on the stars and your feet on the ground.",
  "40 days strong! You've come too far to only come this far.",
  "41 days! Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
  "Six weeks in! Every day may not be good, but there's good in every day.",
  "43 days! Believe you can and you're halfway there.",
  "44 days and counting! The harder you work, the luckier you get.",
  "45 days! Your potential is endless.",
  "46 days strong! Go as far as you can see; when you get there, you'll be able to see further.",
  "47 days! The best way to predict the future is to create it.",
  "48 days in! The only place where success comes before work is in the dictionary.",
  "49 days! Dreams don't work unless you do.",
  "Halfway there! Remember, it's not about how bad you want it, it's about how hard you're willing to work for it.",
  "51 days! The only limit to our realization of tomorrow is our doubts of today.",
  "52 days strong! Don't wait for opportunity. Create it.",
  "53 days and counting! Sometimes later becomes never. Do it now.",
  "54 days in! Great things never come from comfort zones.",
  "55 days! Your limitation—it's only your imagination.",
  "56 days strong! Push yourself, because no one else is going to do it for you.",
  "57 days! Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
  "58 days and counting! The harder you work for something, the greater you'll feel when you achieve it.",
  "59 days in! Dream it. Believe it. Build it.",
  "Two months down! Your success and happiness lie in you.",
  "61 days! The future belongs to those who believe in the beauty of their dreams.",
  "62 days strong! The only way to do great work is to love what you do.",
  "63 days! Success is not the key to happiness. Happiness is the key to success.",
  "64 days and counting! Success usually comes to those who are too busy to be looking for it.",
  "65 days in! Don't be afraid to give up the good to go for the great.",
  "66 days! Opportunities don't happen. You create them.",
  "67 days strong! Success is not in what you have, but who you are.",
  "68 days! The road to success and the road to failure are almost exactly the same.",
  "69 days and counting! Success is liking yourself, liking what you do, and liking how you do it.",
  "70 days in! Success is not just about making money. It's about making a difference.",
  "71 days! Success is the sum of small efforts, repeated day in and day out.",
  "72 days strong! Don't wait. The time will never be just right.",
  "73 days! If you really look closely, most overnight successes took a long time.",
  "74 days and counting! Success is not the key to happiness. Happiness is the key to success.",
  "Three-quarters of the way there! If you love what you are doing, you will be successful.",
  "76 days in! The only place success comes before work is in the dictionary.",
  "77 days! Success is not how high you have climbed, but how you make a positive difference to the world.",
  "78 days strong! Success is doing what you want to do, when you want, where you want, with whom you want, as much as you want.",
  "79 days! If you want to achieve greatness stop asking for permission.",
  "80 days in! Things work out best for those who make the best of how things work out.",
  "81 days! Success is walking from failure to failure with no loss of enthusiasm.",
  "82 days strong! The road to success is dotted with many tempting parking spaces.",
  "83 days! Success is knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
  "84 days and counting! Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.",
  "85 days in! It's not what you achieve, it's what you overcome. That's what defines your career.",
  "86 days! The best revenge is massive success.",
  "87 days strong! I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.",
  "88 days! Success is not just about making money. It's about making a difference.",
  "89 days and counting! Success usually comes to those who are too busy to be looking for it.",
  "Three months of dedication! There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  "91 days in! If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "92 days! Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea.",
  "93 days strong! All our dreams can come true if we have the courage to pursue them.",
  "94 days! Good things come to people who wait, but better things come to those who go out and get them.",
  "95 days and counting! If you do what you always did, you will get what you always got.",
  "96 days in! Success is not in what you have, but who you are.",
  "97 days! Just when the caterpillar thought the world was ending, he turned into a butterfly.",
  "98 days strong! Opportunities don't happen. You create them.",
  "99 days! Trying to do it all and expecting that all can be done exactly right is a recipe for disappointment. Perfection is the enemy.",
  "Congratulations on 100 days! Remember, it's not about the destination, it's about the journey. You've transformed into a completely new you.",
];

// Generate levels, checkboxes, and locks
for (let i = 1; i <= 10; i++) {
  const level = document.createElement("div");
  level.classList.add("level");
  if (i !== 1) {
    level.classList.add("disabled"); // Disable all levels except the first one
  }
  const levelHeader = document.createElement("div");
  levelHeader.classList.add("level-header");
  levelHeader.textContent = `Level ${i} 🌟`;
  level.appendChild(levelHeader);
  const days = document.createElement("div");
  days.classList.add("days");
  level.appendChild(days);
  roadline.appendChild(level);

  for (let j = 1; j <= 10; j++) {
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox-wrapper");
    checkboxWrapper.innerHTML = `
    <input type="checkbox" id="cbx${(i - 1) * 10 + j}">
    <svg viewBox="0 0 35.6 35.6">
        <circle r="17.8" cy="17.8" cx="17.8" class="background"></circle>
        <circle r="14.37" cy="17.8" cx="17.8" class="stroke"></circle>
        <polyline points="11.78 18.12 15.55 22.23 25.17 12.87" class="check"></polyline>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="14px">${
          (i - 1) * 10 + j
        }</text>
    </svg>
`;

    const checkbox = checkboxWrapper.querySelector("input");
    checkbox.addEventListener("change", function () {
      markCompleted(event, (i - 1) * 10 + j);
    });

    // Load the completion status from localStorage
    if (localStorage.getItem(checkbox.id) === "completed") {
      checkbox.checked = true;
      checkbox.disabled = true; // Disable the checkbox if it's already checked
    }

    days.appendChild(checkboxWrapper);
  }

  const lock = document.createElement("div");
  lock.classList.add("lock");
  lock.textContent = "🔒";
  level.appendChild(lock);
}

function markCompleted(event, dayNumber) {
  const checkbox = event.target;

  // If the checkbox is checked, disable it to prevent deselection
  if (checkbox.checked) {
    checkbox.disabled = true;
    localStorage.setItem(checkbox.id, "completed");
    title.textContent = motivationalMessages[dayNumber - 1]; // Update the h2 content with the motivational message
  } else {
    // This line will not be executed since we're disabling the checkbox once checked
    localStorage.removeItem(checkbox.id);
  }

  const levelDiv = checkbox.closest(".level");
  const checkedBoxes = levelDiv.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;

  if (checkedBoxes === 10) {
    const lock = levelDiv.querySelector(".lock");
    lock.textContent = "🏆 Reward";
    lock.classList.add("unlocked");
    lock.addEventListener("click", () => {
      alert("Congratulations! You unlocked a reward.");
    });

    // Enable the next level
    const nextLevel = levelDiv.nextElementSibling;
    if (nextLevel && nextLevel.classList.contains("level")) {
      nextLevel.classList.remove("disabled");
    }
  }
}

// Check if any level is already completed and enable the next level
const levels = document.querySelectorAll(".level");
levels.forEach((level, index) => {
  const checkedBoxes = level.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  if (checkedBoxes === 10) {
    const nextLevel = level.nextElementSibling;
    if (nextLevel && nextLevel.classList.contains("level")) {
      nextLevel.classList.remove("disabled");
    }
  }
});

// Add Reset button at the bottom
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", resetProgress);
resetButton.style.gap = "5px";
resetButton.style.backgroundColor = "#242424";
resetButton.style.padding = "10px";
resetButton.style.borderRadius = "5px";
resetButton.style.marginBottom = "5px";
resetButton.style.color = "white"; // To make the text visible against the dark background
resetButton.style.border = "none"; // To remove the default border
resetButton.style.cursor = "pointer"; // To indicate it's clickable
roadline.appendChild(resetButton);

function resetProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.disabled = false; // Enable the checkbox
    localStorage.removeItem(checkbox.id);
  });

  // Reset locks and disable levels except the first one
  const locks = document.querySelectorAll(".lock");
  locks.forEach((lock) => {
    lock.textContent = "🔒";
    lock.classList.remove("unlocked");
  });

  const levels = document.querySelectorAll(".level");
  levels.forEach((level, index) => {
    if (index !== 0) {
      level.classList.add("disabled");
    }
  });

  // Change the reset button text to "Done ✅"
  resetButton.textContent = "Done ✅";
  resetButton.disabled = true; // Disable the button to prevent further clicks

  // After 2 seconds, revert the button text to "Reset" and re-enable it
  setTimeout(() => {
    resetButton.textContent = "Reset";
    resetButton.disabled = false;
  }, 2000);

  // Update the checkbox accessibility after resetting
  updateCheckboxAccessibility();
}

// New function to update checkbox accessibility
function updateCheckboxAccessibility() {
  const checkboxes = document.querySelectorAll(
    '.checkbox-wrapper input[type="checkbox"]'
  );
  let foundUnchecked = false;

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      if (index + 1 < checkboxes.length) {
        checkboxes[index + 1].parentElement.style.opacity = 1;
        checkboxes[index + 1].parentElement.style.pointerEvents = "all";
      }
    } else if (!foundUnchecked) {
      checkbox.parentElement.style.opacity = 1;
      checkbox.parentElement.style.pointerEvents = "all";
      foundUnchecked = true;
    } else {
      checkbox.parentElement.style.opacity = 0.5;
      checkbox.parentElement.style.pointerEvents = "none";
    }
  });
}

// Call the function to set the initial state of checkboxes
updateCheckboxAccessibility();

// Add event listener to checkboxes to update their accessibility when changed
const checkboxes = document.querySelectorAll(
  '.checkbox-wrapper input[type="checkbox"]'
);
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateCheckboxAccessibility);
});

function updateLevelState() {
  const levels = document.querySelectorAll(".level");
  levels.forEach((level, index) => {
    const checkedBoxes = level.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;
    if (checkedBoxes === 10) {
      const lock = level.querySelector(".lock");
      lock.textContent = "🏆 Reward";
      lock.classList.add("unlocked");
      lock.addEventListener("click", () => {
        alert("Congratulations! You unlocked a reward.");
      });

      // Enable the next level
      const nextLevel = level.nextElementSibling;
      if (nextLevel && nextLevel.classList.contains("level")) {
        nextLevel.classList.remove("disabled");
      }
    }
  });
}

updateLevelState();
