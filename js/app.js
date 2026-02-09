// ===== Data =====

var songTypes = [
  { name: 'Song of My Leaving', desc: 'A song about departure, moving on, or hitting the road.' },
  { name: 'Song of Disdain', desc: 'A song of contempt, rejection, or sharp-tongued wit.' },
  { name: 'Political/Protest Song', desc: 'A song confronting injustice, power, or social conditions.' },
  { name: 'Religious Song', desc: 'A song exploring faith, the divine, or spiritual searching.' },
  { name: 'Song of Despair', desc: 'A song of deep sorrow, loss, or hopelessness.' },
  { name: 'Song of the Mist', desc: 'A mysterious, dreamlike song full of imagery and ambiguity.' },
  { name: 'Song of Love', desc: 'A song of romantic love \u2014 its joy, heartbreak, or longing.' },
  { name: 'Song of Origins', desc: 'A song about where you came from, roots, or beginnings.' },
  { name: 'The Blues', desc: 'A song rooted in hardship, grit, and resilience.' },
  { name: 'Song of the Legal Process Gone Wrong', desc: 'A song about injustice in the courts, wrongful conviction, or the law failing.' },
  { name: 'Song of the Darkness and Nighttime', desc: 'A song set in the shadows \u2014 nocturnal, eerie, or introspective.' }
];

var themes = [
  { name: 'Creativity', desc: 'Thinking of novel ways to do things; not being content with doing something the conventional way.' },
  { name: 'Curiosity', desc: 'Taking an interest in ongoing experience for its own sake; finding things fascinating.' },
  { name: 'Judgment', desc: 'Thinking things through and examining them from all sides; weighing evidence fairly.' },
  { name: 'Love of Learning', desc: 'Mastering new skills, topics, and bodies of knowledge.' },
  { name: 'Perspective', desc: 'Being able to provide wise counsel to others; seeing the big picture.' },
  { name: 'Bravery', desc: 'Not shrinking from threat, challenge, difficulty, or pain; acting on convictions.' },
  { name: 'Perseverance', desc: 'Finishing what one starts; persisting in a course of action in spite of obstacles.' },
  { name: 'Honesty', desc: 'Speaking the truth; presenting oneself in a genuine way and acting sincerely.' },
  { name: 'Zest', desc: 'Approaching life with excitement and energy; feeling alive and activated.' },
  { name: 'Love', desc: 'Valuing close relations with others; being close to people.' },
  { name: 'Kindness', desc: 'Doing favors and good deeds for others; helping them; taking care of them.' },
  { name: 'Social Intelligence', desc: 'Being aware of the motives and feelings of other people and oneself.' },
  { name: 'Teamwork', desc: 'Working well as a member of a group or team; being loyal to the group.' },
  { name: 'Fairness', desc: 'Treating all people the same according to notions of fairness and justice.' },
  { name: 'Leadership', desc: 'Encouraging a group of which one is a member to get things done; organizing activities.' },
  { name: 'Forgiveness', desc: 'Forgiving those who have done wrong; accepting shortcomings; giving people a second chance.' },
  { name: 'Humility', desc: 'Letting accomplishments speak for themselves; not regarding oneself as more special than one is.' },
  { name: 'Prudence', desc: 'Being careful about choices; not taking undue risks; not saying or doing things that might later be regretted.' },
  { name: 'Self-Regulation', desc: 'Regulating what one feels and does; being disciplined; controlling appetites and emotions.' },
  { name: 'Appreciation of Beauty and Excellence', desc: 'Noticing and appreciating beauty, excellence, or skilled performance in all domains of life.' },
  { name: 'Gratitude', desc: 'Being aware of and thankful for the good things that happen; taking time to express thanks.' },
  { name: 'Hope', desc: 'Expecting the best in the future and working to achieve it; believing a good future is something that can be brought about.' },
  { name: 'Humor', desc: 'Liking to laugh and tease; bringing smiles to other people; seeing the light side.' },
  { name: 'Spirituality', desc: 'Having coherent beliefs about the higher purpose and meaning of the universe.' }
];

var usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var usCities = [
  'New York, New York', 'Los Angeles, California', 'Chicago, Illinois', 'Houston, Texas',
  'Philadelphia, Pennsylvania', 'Phoenix, Arizona', 'San Diego, California', 'San Antonio, Texas',
  'Dallas, Texas', 'Detroit, Michigan', 'San Jose, California', 'Indianapolis, Indiana',
  'Jacksonville, Florida', 'San Francisco, California', 'Columbus, Ohio', 'Austin, Texas',
  'Memphis, Tennessee', 'Baltimore, Maryland', 'Charlotte, North Carolina', 'Fort Worth, Texas',
  'Boston, Massachusetts', 'Milwaukee, Wisconsin', 'El Paso, Texas', 'Washington, District of Columbia',
  'Nashville, Tennessee', 'Seattle, Washington', 'Denver, Colorado', 'Las Vegas, Nevada',
  'Portland, Oregon', 'Oklahoma City, Oklahoma', 'Tucson, Arizona', 'Albuquerque, New Mexico',
  'Atlanta, Georgia', 'Long Beach, California', 'Kansas City, Missouri', 'Fresno, California',
  'New Orleans, Louisiana', 'Cleveland, Ohio', 'Sacramento, California', 'Mesa, Arizona',
  'Virginia Beach, Virginia', 'Omaha, Nebraska', 'Colorado Springs, Colorado', 'Oakland, California',
  'Miami, Florida', 'Tulsa, Oklahoma', 'Minneapolis, Minnesota', 'Honolulu, Hawaii',
  'Arlington, Texas', 'Wichita, Kansas', 'St. Louis, Missouri', 'Raleigh, North Carolina',
  'Santa Ana, California', 'Cincinnati, Ohio', 'Anaheim, California', 'Tampa, Florida',
  'Toledo, Ohio', 'Pittsburgh, Pennsylvania', 'Aurora, Colorado', 'Bakersfield, California',
  'Riverside, California', 'Stockton, California', 'Corpus Christi, Texas', 'Lexington, Kentucky',
  'Buffalo, New York', 'St. Paul, Minnesota', 'Anchorage, Alaska', 'Newark, New Jersey',
  'Plano, Texas', 'Fort Wayne, Indiana', 'St. Petersburg, Florida', 'Glendale, Arizona',
  'Lincoln, Nebraska', 'Norfolk, Virginia', 'Jersey City, New Jersey', 'Greensboro, North Carolina',
  'Chandler, Arizona', 'Birmingham, Alabama', 'Henderson, Nevada', 'Scottsdale, Arizona',
  'North Hempstead, New York', 'Madison, Wisconsin', 'Hialeah, Florida', 'Baton Rouge, Louisiana',
  'Chesapeake, Virginia', 'Orlando, Florida', 'Lubbock, Texas', 'Garland, Texas',
  'Akron, Ohio', 'Rochester, New York', 'Chula Vista, California', 'Reno, Nevada',
  'Laredo, Texas', 'Durham, North Carolina', 'Modesto, California', 'Huntington, New York',
  'Montgomery, Alabama', 'Boise, Idaho', 'Arlington, Virginia', 'San Bernardino, California'
];

var worldCities = [
  'London, England', 'Paris, France', 'Tokyo, Japan', 'Sydney, Australia',
  'Rio de Janeiro, Brazil', 'Cairo, Egypt', 'Mumbai, India', 'Berlin, Germany',
  'Mexico City, Mexico', 'Toronto, Canada', 'Buenos Aires, Argentina', 'Istanbul, Turkey',
  'Bangkok, Thailand', 'Rome, Italy', 'Havana, Cuba', 'Marrakech, Morocco',
  'Dublin, Ireland', 'Kyoto, Japan', 'Lisbon, Portugal', 'Cape Town, South Africa',
  'Reykjavik, Iceland', 'Nairobi, Kenya', 'Barcelona, Spain', 'Amsterdam, Netherlands',
  'Stockholm, Sweden', 'Athens, Greece', 'Prague, Czech Republic', 'Hanoi, Vietnam',
  'Kingston, Jamaica', 'Nashville of the North (Tampere, Finland)',
  'Bogota, Colombia', 'Lima, Peru', 'Santiago, Chile', 'Wellington, New Zealand',
  'Accra, Ghana', 'Lagos, Nigeria', 'Beirut, Lebanon', 'Kathmandu, Nepal',
  'Saigon (Ho Chi Minh City), Vietnam', 'Marseille, France', 'Edinburgh, Scotland',
  'Vienna, Austria', 'Budapest, Hungary', 'Tangier, Morocco', 'Cartagena, Colombia',
  'Montevideo, Uruguay', 'Dakar, Senegal', 'Addis Ababa, Ethiopia', 'Bruges, Belgium',
  'Osaka, Japan'
];

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];

// ===== Utility =====

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatHour(h) {
  if (h === 12) return 'noon';
  if (h === 0 || h === 24) return 'midnight';
  if (h < 12) return h + ' am';
  return (h - 12) + ' pm';
}

function getToday() {
  var d = new Date();
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

function showResult(el, html) {
  el.innerHTML = html;
  el.classList.remove('visible');
  // Force reflow for animation restart
  void el.offsetWidth;
  el.classList.add('visible');
}

// ===== localStorage helpers =====

function loadTodayData() {
  var key = 'songfarmer_' + getToday();
  var raw = localStorage.getItem(key);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* ignore */ }
  }
  return { score: 0, log: [], completedHabits: [] };
}

function saveTodayData(data) {
  var key = 'songfarmer_' + getToday();
  localStorage.setItem(key, JSON.stringify(data));
}

function getStreak() {
  var streak = 0;
  var d = new Date();
  d.setDate(d.getDate() - 1); // start checking yesterday
  while (true) {
    var key = 'songfarmer_' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    var raw = localStorage.getItem(key);
    if (raw) {
      try {
        var data = JSON.parse(raw);
        if (data.score > 0) {
          streak++;
          d.setDate(d.getDate() - 1);
          continue;
        }
      } catch (e) { /* ignore */ }
    }
    break;
  }
  return streak;
}

// ===== Setting Seed =====

function generateSetting() {
  var locationType = document.querySelector('input[name="locationType"]:checked').value;
  var location;

  if (locationType === 'cities') {
    location = pickRandom(usCities);
  } else if (locationType === 'states') {
    location = pickRandom(usStates);
  } else {
    location = pickRandom(worldCities);
  }

  var hour = Math.floor(Math.random() * 24);
  var day = pickRandom(days);
  var direction = pickRandom(directions);

  var html = '<div class="result-text">You are in <strong>' + location + '</strong>. ' +
    'It is <strong>' + formatHour(hour) + '</strong> on a <strong>' + day + '</strong> ' +
    'and you are facing <strong>' + direction + '</strong>.</div>';

  showResult(document.getElementById('settingResult'), html);
  return { location: location, hour: formatHour(hour), day: day, direction: direction };
}

// ===== Type Seed =====

function generateType() {
  var type = pickRandom(songTypes);
  var html = '<div class="result-text">Write a <strong>' + type.name + '</strong>.</div>' +
    '<div class="result-detail">' + type.desc + '</div>';
  showResult(document.getElementById('frameResult'), html);
  return type;
}

// ===== Theme Seed =====

function generateTheme() {
  var theme = pickRandom(themes);
  var html = '<div class="result-text">The theme is <strong>' + theme.name + '</strong>.</div>' +
    '<div class="result-detail">' + theme.desc + '</div>';
  showResult(document.getElementById('themeResult'), html);
  return theme;
}

// ===== Generate All =====

function generateAll() {
  var setting = generateSetting();
  var type = generateType();
  var theme = generateTheme();

  var html = '<div class="result-line">You\u2019re in <strong>' + setting.location + '</strong>. ' +
    'It\u2019s <strong>' + setting.hour + '</strong> on a <strong>' + setting.day + '</strong>, ' +
    'facing <strong>' + setting.direction + '</strong>.</div>' +
    '<div class="result-line">Write a <strong>' + type.name + '</strong> about <strong>' + theme.name + '</strong>.</div>' +
    '<div class="result-detail">' + type.desc + '</div>' +
    '<div class="result-detail" style="margin-top:2px;">' + theme.desc + '</div>';

  showResult(document.getElementById('combinedResult'), html);
}

// ===== Habits =====

var habitState = {
  active: false,
  currentHabit: null,
  timerInterval: null,
  timerSeconds: 0,
  sessionMinutes: 0
};

function isNormalMode() {
  return document.getElementById('modeSwitch').checked;
}

function getMaxTimer() {
  return isNormalMode() ? 30 : 5;
}

function getScoreIncrement() {
  return isNormalMode() ? 5 : 1;
}

function updateScoreDisplay() {
  var data = loadTodayData();
  document.getElementById('scoreDisplay').textContent = data.score;

  var streak = getStreak();
  var streakEl = document.getElementById('streakInfo');
  if (data.score > 0 || streak > 0) {
    var dayStreak = streak + (data.score > 0 ? 1 : 0);
    streakEl.textContent = dayStreak > 1 ? dayStreak + '-day streak!' : '';
  } else {
    streakEl.textContent = '';
  }
}

function updateLogDisplay() {
  var data = loadTodayData();
  var logEl = document.getElementById('logEntries');
  var clearBtn = document.getElementById('clearLogBtn');

  if (data.log.length === 0) {
    logEl.innerHTML = '<li class="log-empty" id="logEmpty">No sessions yet today. Start a habit above!</li>';
    clearBtn.style.display = 'none';
    return;
  }

  var html = '';
  for (var i = data.log.length - 1; i >= 0; i--) {
    var entry = data.log[i];
    html += '<li class="log-entry"><span><span class="log-habit">' + entry.habit + '</span> \u2014 ' +
      entry.minutes + ' min (+' + entry.points + ' pts)</span>' +
      '<span class="log-time">' + entry.time + '</span></li>';
  }
  logEl.innerHTML = html;
  clearBtn.style.display = '';
}

function startHabits() {
  var data = loadTodayData();
  habitState.active = true;

  var cards = document.getElementById('habitCards');
  cards.classList.add('visible');

  // Update card states from saved data
  var allCards = cards.querySelectorAll('.habit-card');
  for (var i = 0; i < allCards.length; i++) {
    var card = allCards[i];
    var habit = card.getAttribute('data-habit');
    if (data.completedHabits.indexOf(habit) >= 0) {
      card.classList.add('completed');
      card.querySelector('.habit-status').textContent = 'Done';
    } else {
      card.classList.remove('completed', 'active');
      card.querySelector('.habit-status').textContent = 'Ready';
    }
  }

  document.getElementById('habitButton').textContent = 'Habits Active';
  document.getElementById('habitButton').disabled = true;
  document.getElementById('resetAllBtn').style.display = '';
}

function selectHabit(habitName) {
  if (habitState.timerInterval) return; // timer already running

  habitState.currentHabit = habitName;

  // If re-selecting a completed habit, reset its completed state
  var data = loadTodayData();
  var idx = data.completedHabits.indexOf(habitName);
  if (idx >= 0) {
    data.completedHabits.splice(idx, 1);
    saveTodayData(data);
  }

  // Highlight card
  var allCards = document.querySelectorAll('.habit-card');
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('active');
  }
  var card = document.querySelector('[data-habit="' + habitName + '"]');
  card.classList.remove('completed');
  card.classList.add('active');
  card.querySelector('.habit-status').textContent = 'Selected';

  // Roll timer
  var minutes = Math.floor(Math.random() * getMaxTimer()) + 1;
  habitState.sessionMinutes = minutes;
  habitState.timerSeconds = minutes * 60;

  var timerArea = document.getElementById('timerArea');
  timerArea.classList.add('visible');

  document.getElementById('timerLabel').textContent = 'Focus on ' + habitName + ' for ' + minutes + ' minutes';
  updateTimerDisplay();

  document.getElementById('timerButtons').innerHTML =
    '<button class="timer-btn timer-btn--start" id="timerStartBtn">Start Timer</button>' +
    '<button class="timer-btn timer-btn--skip" id="timerSkipBtn">Skip</button>';

  document.getElementById('timerStartBtn').addEventListener('click', startTimer);
  document.getElementById('timerSkipBtn').addEventListener('click', function() {
    completeSession(true);
  });
}

function updateTimerDisplay() {
  var mins = Math.floor(habitState.timerSeconds / 60);
  var secs = habitState.timerSeconds % 60;
  document.getElementById('timerDisplay').textContent =
    (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function startTimer() {
  document.getElementById('timerStartBtn').disabled = true;
  document.getElementById('timerStartBtn').textContent = 'Running...';

  habitState.timerInterval = setInterval(function() {
    habitState.timerSeconds--;
    updateTimerDisplay();

    if (habitState.timerSeconds <= 0) {
      clearInterval(habitState.timerInterval);
      habitState.timerInterval = null;
      completeSession(false);
    }
  }, 1000);
}

function completeSession(skipped) {
  if (habitState.timerInterval) {
    clearInterval(habitState.timerInterval);
    habitState.timerInterval = null;
  }

  var points = getScoreIncrement();
  var data = loadTodayData();
  var now = new Date();
  var timeStr = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

  data.score += points;
  data.log.push({
    habit: habitState.currentHabit,
    minutes: skipped ? 'skipped' : habitState.sessionMinutes,
    points: points,
    time: timeStr
  });
  saveTodayData(data);

  updateScoreDisplay();
  updateLogDisplay();

  // Show completion options
  document.getElementById('timerDisplay').textContent = skipped ? 'Skipped' : 'Done!';
  document.getElementById('timerLabel').textContent = habitState.currentHabit + ' session complete! +' + points + ' points';

  document.getElementById('timerButtons').innerHTML =
    '<button class="timer-btn timer-btn--another" id="anotherBtn">Another ' + habitState.currentHabit + ' Session</button>' +
    '<button class="timer-btn timer-btn--done" id="doneHabitBtn">Finish ' + habitState.currentHabit + '</button>';

  document.getElementById('anotherBtn').addEventListener('click', function() {
    selectHabit(habitState.currentHabit);
  });

  document.getElementById('doneHabitBtn').addEventListener('click', function() {
    finishHabit(habitState.currentHabit);
  });
}

function finishHabit(habitName) {
  var data = loadTodayData();
  if (data.completedHabits.indexOf(habitName) < 0) {
    data.completedHabits.push(habitName);
    saveTodayData(data);
  }

  // Update card
  var card = document.querySelector('[data-habit="' + habitName + '"]');
  card.classList.remove('active');
  card.classList.add('completed');
  card.querySelector('.habit-status').textContent = 'Done';

  // Hide timer
  document.getElementById('timerArea').classList.remove('visible');
  habitState.currentHabit = null;

  // Check if all habits complete
  if (data.completedHabits.length >= 4) {
    document.getElementById('timerArea').classList.add('visible');
    document.getElementById('timerLabel').textContent = 'All habits complete! Great work today.';
    document.getElementById('timerDisplay').textContent = '';
    document.getElementById('timerButtons').innerHTML =
      '<button class="timer-btn timer-btn--done" id="resetHabitsBtn">Reset Habits</button>';
    document.getElementById('resetHabitsBtn').addEventListener('click', resetHabits);
  }
}

function resetHabits() {
  var data = loadTodayData();
  data.completedHabits = [];
  saveTodayData(data);
  habitState.active = false;
  habitState.currentHabit = null;

  document.getElementById('habitCards').classList.remove('visible');
  document.getElementById('timerArea').classList.remove('visible');
  document.getElementById('habitButton').textContent = 'Start Habits';
  document.getElementById('habitButton').disabled = false;
  document.getElementById('resetAllBtn').style.display = 'none';

  // Reset cards
  var allCards = document.querySelectorAll('.habit-card');
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('completed', 'active');
    allCards[i].querySelector('.habit-status').textContent = 'Ready';
  }
}

// ===== Mode Toggle =====

function updateModeLabels() {
  var normalLabel = document.getElementById('normalLabel');
  var miniLabel = document.getElementById('miniLabel');
  if (isNormalMode()) {
    normalLabel.classList.add('mode-label--active');
    miniLabel.classList.remove('mode-label--active');
  } else {
    miniLabel.classList.add('mode-label--active');
    normalLabel.classList.remove('mode-label--active');
  }
}

// ===== Init =====

document.addEventListener('DOMContentLoaded', function() {
  // Load saved data
  updateScoreDisplay();
  updateLogDisplay();

  // Restore habit state if habits were in progress
  var data = loadTodayData();
  if (data.completedHabits.length > 0) {
    startHabits();
  }

  // Seed buttons
  document.getElementById('settingButton').addEventListener('click', generateSetting);
  document.getElementById('frameButton').addEventListener('click', generateType);
  document.getElementById('themeButton').addEventListener('click', generateTheme);
  document.getElementById('generateAllBtn').addEventListener('click', generateAll);

  // Habit button
  document.getElementById('habitButton').addEventListener('click', startHabits);

  // Habit card clicks
  var habitCards = document.querySelectorAll('.habit-card');
  for (var i = 0; i < habitCards.length; i++) {
    habitCards[i].addEventListener('click', function() {
      if (habitState.active) {
        selectHabit(this.getAttribute('data-habit'));
      }
    });
  }

  // Reset all habits button
  document.getElementById('resetAllBtn').addEventListener('click', resetHabits);

  // Mode toggle
  document.getElementById('modeSwitch').addEventListener('change', updateModeLabels);
  updateModeLabels();

  // Clear log
  document.getElementById('clearLogBtn').addEventListener('click', function() {
    var data = loadTodayData();
    data.log = [];
    data.score = 0;
    saveTodayData(data);
    updateScoreDisplay();
    updateLogDisplay();
  });
});
