<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React State Management Capstone Project  
*A beginner-friendly hands-on project demonstrating how to manage and share user data in React.*

---

## Overview of the Chosen Tech: React + State Management

This capstone focuses on **React**, a powerful JavaScript library for building dynamic user interfaces.

The goal of this project is to help beginners **understand how data (state)** flows between components in React using:
- **`useState`** hook for local component state  
- **Lifting state up** to share data between sibling components  
- **Props** for communication between parent and child  

You’ll build a **Login → Profile** workflow where a user logs in, their data is stored in state, and they can later view and edit that data in a profile page.

---

## Set Up Instructions

### Prerequisites
- Node.js ≥ 18  
- npm or yarn  
- Basic understanding of React fundamentals (components, hooks, props)

### 🛠 Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Goddy-2024/moringaGENAI-capstone-project.git
   cd moringaGENAI-capstone-project
2. **Access the minimal working example that demonstrates state management in react:**
   ```bash
   code .
  
3. **Install the project dependencies**
   ```bash
   pnpm install
4. **Run the Project in your local machine**
   ```bash
   pnpm run dev
**The app runs locally at:**
  ```bash
  http://localhost:5173/
```
## Result:
 You can access the login form →Enter your username & password → switch between login & signup

### AI Prompts Used (Documentation Reference)
These are the conceptual prompts used to guide learning, not implementation directly.
You can reuse them for classroom teaching or self-learning:
Learning Goal
Prompt
Concept Learned
Local State
```bash
“How can I capture user data in a login form using useState?”
Controlled components
```

Lifting State
```bash
“How can I make user data accessible to multiple components?”
Parent-child communication
```
Prop Drilling
```bash
“What’s a cleaner way to share data across components?”
ContextAPI
```
Updating State
```bash
“How do I edit and reflect changes in real-time?”
State updates & re-rendering
```


## Learning Reflections
### State is the heart of React.
 Everything in the UI reflects your component’s state — change state → UI reacts.

### Data flow is unidirectional.
 State moves downward (from parent to child).
 Updates bubble upward (child → parent through callbacks).


### Prop drilling can become messy.
 Context or external state libraries (Redux, Zustand) solve this for larger apps.


### Editing and persisting state teaches immutability.
 Always create new state objects rather than mutating existing ones.



 ## Common Errors & Fixes
```bash
Cannot read property 'name' of null
```
Accessing state before it’s set
Add conditional rendering (user && user.name)
```bash
Inputs not updating
```
Not binding state correctly
Use controlled inputs (value + onChange)
```bash
Form reloads page
```
Missing e.preventDefault()
Always prevent default on form submit
```bash
State doesn’t update instantly
```
Async nature of setState
Don’t rely on immediate value after calling setter


### Reference Resources
Official Docs
- React Documentation (State & Lifecycle)


- React useState Hook


- React Context API


- React Router


Recommended Tutorials
freeCodeCamp: React State Management Explained


W3Schools React State Tutorial


Scrimba React Course



 # License
MIT License © 2025 Godswill

>>>>>>> 55ed1573a126255a45b90463f82dbe1d6ec074be
