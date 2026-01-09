<div align="center">

# 🎯 Soc Ops

### The Social Bingo Game for In-Person Mixers

*Break the ice, spark conversations, and make connections—one square at a time!*

[![Live Demo](https://img.shields.io/badge/🎮-Play_Now-2563eb?style=for-the-badge)](https://poxler.github.io/agent_ops_bingo/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Built with React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[**🚀 Quick Start**](#-quick-start) • [**✨ Features**](#-features) • [**🎨 Customize**](#-customization) • [**📖 How to Play**](#-how-to-play)

</div>

---

## 📸 Screenshots

<div align="center">

### Start Screen
<img src="https://github.com/user-attachments/assets/1dc05cb9-88f9-40d4-8c70-79325f9a6c5e" alt="Start Screen" width="600"/>

### Game Board
<img src="https://github.com/user-attachments/assets/4664703d-1a97-4d54-b332-77de284fa632" alt="Game Board" width="600"/>

</div>

## 🎮 What is Soc Ops?

**Soc Ops** is an interactive social bingo game designed to turn awkward networking events into fun, engaging experiences. Instead of standing around making small talk, players mingle with a mission: find people who match each square on their bingo board!

Perfect for:
- 🏢 **Team building events** - Help new team members connect
- 🎓 **Conferences & meetups** - Turn networking into a game
- 🎉 **Social gatherings** - Break the ice at parties
- 🤝 **Community events** - Get people talking and laughing

## ✨ Features

- **📱 Mobile-First Design** - Optimized for smartphones, perfect for events
- **🎲 Randomized Boards** - Every player gets a unique board layout
- **💾 Auto-Save Progress** - Your progress is saved automatically using localStorage
- **🏆 Instant Win Detection** - Celebrates your victory the moment you get 5-in-a-row
- **🎨 Customizable Questions** - Easy to adapt for your event or audience
- **⚡ Zero Setup** - No accounts, no downloads—just open and play
- **🌐 Works Offline** - Once loaded, play without internet connection

## 📖 How to Play

1. **Get your board** - Each player opens the app on their phone
2. **Start mingling** - Walk around and talk to people
3. **Find matches** - When someone matches a square, tap it to mark it
4. **Get 5 in a row** - First to get a line (horizontal, vertical, or diagonal) wins!
5. **Keep playing** - Multiple rounds mean everyone can win

> 💡 **Pro tip**: The center square is always FREE, giving you a head start!

## 🚀 Quick Start

### Play Now
👉 **[Launch the game](https://poxler.github.io/agent_ops_bingo/)** - No installation needed!

### Run Locally

```bash
# Clone the repository
git clone https://github.com/poxler/agent_ops_bingo.git
cd agent_ops_bingo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

Want to customize the game for your event? It's easy!

### Change the Questions

Edit [`src/data/questions.ts`](src/data/questions.ts):

```typescript
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "has a pet",
  // Add your own questions here!
];
```

You need at least 24 questions (25 squares minus the FREE SPACE).

### Customize the Theme

Edit [`src/index.css`](src/index.css) to change colors:

```css
@theme {
  --color-accent: #2563eb;        /* Primary brand color */
  --color-marked: #dcfce7;        /* Marked square background */
  --color-marked-border: #22c55e; /* Marked square border */
  --color-bingo: #fbbf24;         /* Winning square highlight */
}
```

### Ideas for Custom Themes

- **Tech Conference**: "uses Linux", "contributes to open source", "speaks at meetups"
- **Holiday Party**: "loves eggnog", "wraps gifts early", "has ugly sweater"
- **Book Club**: "reads fantasy", "owns 100+ books", "has met an author"
- **Company Onboarding**: "works remotely", "joined this year", "plays on sports team"

## 🛠️ Development

### Prerequisites

- [Node.js 22+](https://nodejs.org/)

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Check code style
npm run test     # Run tests
```

### Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling with modern CSS features
- **Vite** - Lightning-fast build tool
- **Vitest** - Unit testing

## 📦 Deployment

The app automatically deploys to GitHub Pages when you push to `main`. Or build and deploy anywhere:

```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🎨 Submit design improvements
- 📝 Improve documentation

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - feel free to use this for your events!

## 🌟 Show Your Support

If you use Soc Ops at your event, we'd love to hear about it! Star the repo ⭐ and share your experience.

---

<div align="center">

**Made with ❤️ for bringing people together**

[Report Bug](https://github.com/poxler/agent_ops_bingo/issues) • [Request Feature](https://github.com/poxler/agent_ops_bingo/issues)

</div>
