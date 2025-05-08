# SoftSell - Responsive License Resale Landing Page

A modern, single-page responsive React landing site for a fictional software resale startup called **SoftSell**.

---

## 🚀 Live Demo

(https://softsell-website.netlify.app/)

---

## 🛠️ Tech Stack

### Frontend:
- **React.js** with **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Axios** for API requests

### Chatbot:
- **OpenAI GPT-3.5 API** (Optional, replace with your API key)
- Optional use of **Langchain-compatible logic**

---

## ✅ Features Implemented

### 📄 Layout
- Hero Section with CTA button
- How It Works Section (step-by-step with icons)
- Why Choose Us (with individual icons + image)
- Customer Testimonials
- Contact Form with input validation
- Image illustrations for every section
- Light/dark-themed styling capability

### ✨ Interactions
- Smooth scroll from Hero to Contact Form
- Framer Motion scroll and hover animations
- AI-powered customer chat widget (OpenAI-powered or mocked)

### 🧠 Chat Widget
- Toggleable chatbot in bottom corner
- Works with OpenAI Chat Completion API
- Handles basic queries like:
  - "How do I sell my license?"
  - "How does it work?"
  - "What are payout options?"

---

## 📂 Folder Structure
/public
/src
├── /assets # Section images, icons
├── /components # Reusable components (ChatWidget)
├── /sections # Hero, HowItWorks, Testimonials, etc.
├── App.jsx
└── main.jsx
