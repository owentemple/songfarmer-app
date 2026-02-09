# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Songfarmer is a static web app (no build step, no framework) for songwriters. It does two things:
1. **Song Seed Generator** — produces randomized songwriting prompts from three dimensions: Setting (location/time/direction), Song Type (Dylan-inspired taxonomy), and Theme (Seligman & Peterson character strengths). These can be rolled individually or combined via "Generate Song Seed."
2. **Habit Tracker** — timed focus sessions (pomodoro-style) across four songwriting habits: Writing, Performing, Listening, Reading. Tracks daily score and streaks.

Live at https://app.songfarmer.com

## Architecture

Plain HTML/CSS/JS — no dependencies, no build tools, no package manager.

- `index.html` — single-page layout with all sections: seed generators, habit tracker, score/log, process diagram
- `js/app.js` — all application logic in one file:
  - **Top**: data arrays (songTypes, themes, usStates, usCities, worldCities, days, directions)
  - **Middle**: generator functions (`generateSetting`, `generateType`, `generateTheme`, `generateAll`)
  - **Bottom**: habit/timer state machine (`habitState` object, `selectHabit`, `startTimer`, `completeSession`, `finishHabit`, `resetHabits`)
  - State persisted via `localStorage` with key pattern `songfarmer_YYYY-M-D`
- `css/style.css` — CSS custom properties in `:root`, card-based layout, visibility toggled via `.visible` class
- `images/` — logo, process diagram, legacy button images

## Key Patterns

- **No frameworks or transpilation** — edit files directly; changes are immediately live
- **UI visibility** — sections show/hide by adding/removing the `visible` CSS class (e.g., `.seed-result.visible`, `.habit-cards.visible`)
- **Result animation** — `showResult()` strips then re-adds `visible` class with a reflow trick (`void el.offsetWidth`) to retrigger CSS `fadeIn` animation
- **Timer modes** — "Normal" (up to 30 min, +1 pt) vs "Mini" (up to 5 min, +5 pts), controlled by `modeSwitch` checkbox
- **Daily data shape**: `{ score: number, log: Array<{habit, minutes, points, time}>, completedHabits: string[] }`

## Development

Open `index.html` in a browser. No server required (though a local server avoids CORS issues if needed):

```
python3 -m http.server 8000
```
