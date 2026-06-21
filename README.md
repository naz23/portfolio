# AI & System Integrator Portfolio Template

A modern, responsive portfolio template built for AI engineers, system integrators, and software developers. It includes interactive AI and Machine Learning demo components powered by Google's Gemini API.

## Features

- **Modern UI/UX**: Clean, responsive design with smooth animations.
- **Interactive AI Assistant**: A built-in chat interface demonstrating AI integration.
- **Machine Learning Demo**: Visual components showcasing edge AI and ML concepts.
- **Project & Experience Showcases**: Pre-built components to highlight your work and background.
- **Easy Customization**: Built with React and Vite for fast development and simple modifications.

## Technologies Used

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Bespoke Design System)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **AI Integration**: [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)

## Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) (v16 or higher recommended).
- **Gemini API Key**: You will need an API key from [Google AI Studio](https://aistudio.google.com/) to power the interactive AI assistant.

## Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy the example environment file and add your API key.
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and replace `your_gemini_api_key_here` with your actual Gemini API key.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Visit `http://localhost:5173/` in your web browser.

## Customization

You can easily personalize this template by modifying the components in the `src/components/` directory:

- **`Hero.jsx`**: Update your name, title, and introductory text.
- **`Experience.jsx`**: Add your work history and resume details.
- **`Services.jsx`**: Outline the services or skills you offer.
- **`AIAssistant.jsx` / `InteractiveDemo.jsx` / `MLDemo.jsx`**: Customize the AI integration, prompts, and demo visualizations.
- **`Footer.jsx`**: Update your social links and contact information.

## Building for Production

When you are ready to deploy your portfolio (e.g., to GitHub Pages, Vercel, or Netlify), create an optimized production build:

```bash
npm run build
```
This will compile your application into the `dist/` folder, ready for deployment.

## License

This project is open-source and available under the [MIT License](LICENSE).
