# 🕶️ THALAIVAR.AI — Superstar Rajinikanth Fan Platform

> *"நான் ஒருத்தன் சொன்னா நூறு பேர் கேப்பாங்க"* — Baasha (1995)

A full-stack, MNC-level fan platform dedicated to the one and only **Superstar Rajinikanth**. Built with a cinematic dark theme, golden accents, and an interactive UI that feels like a **First Day First Show** experience.

---

## 🌟 Live Features

| Page | Description |
|------|-------------|
| 🏠 **Home** | SUPER STAR intro animation, Rajini hero photo, stats |
| 🎬 **Filmography** | 37+ movies from 1975–2026 with Era filters & Search |
| 💬 **Punch Dialogues** | Iconic dialogues + AI Generator with Java Spring Boot API |
| 📊 **Box Office Analytics** | Interactive Chart.js charts with decade filters & tooltips |
| 🏆 **Fan Arena** | Interactive quiz to test your Thalaivar knowledge |

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5 + Vanilla CSS (Glassmorphism, Cinematic Dark Theme)
- Vanilla JavaScript (ES6+)
- Chart.js (Interactive Analytics)
- Google Fonts: Outfit, Cinzel, Rye

**Backend:**
- Java 17
- Spring Boot 3.x
- Spring Web (REST API)
- Maven

---

## 🚀 How to Run

### Frontend (Instant Preview)
Just open `frontend/index.html` in any browser — no setup needed!

### Backend (Java Spring Boot API)
```bash
cd backend
mvn spring-boot:run
```
Server starts at `http://localhost:8080`

**API Endpoints:**
- `GET /api/movies` — Returns all movie data
- `GET /api/dialogue/random` — Returns a random punch dialogue

---

## 📁 Project Structure

```
thalaivar-ai/
├── frontend/
│   ├── index.html          # Home Page
│   ├── movies.html         # Filmography
│   ├── dialogue.html       # Punch Dialogues
│   ├── analytics.html      # Box Office Charts
│   ├── fan-arena.html      # Quiz Game
│   ├── css/
│   │   └── style.css       # Global Cinematic Theme
│   ├── js/
│   │   ├── movies.js       # Movie database & filter logic
│   │   ├── analytics.js    # Chart.js configurations
│   │   ├── dialogue.js     # Dialogue generator
│   │   ├── fan-arena.js    # Quiz game logic
│   │   └── particles.js    # Background particles
│   └── assets/
│       └── rajni.jpg       # Superstar photo
└── backend/
    ├── pom.xml
    └── src/main/java/com/thalaivar/
        ├── ThalaivarApplication.java
        └── controller/
            ├── MovieController.java
            └── DialogueController.java
```

---

## 👨‍💻 Developer

Built with ❤️ for the biggest fan of the biggest star.

**Selva Kumar S** | Full-Stack Developer

---

*"Style is not just what you wear, it's how you carry yourself."* — Superstar Rajinikanth 🕶️
