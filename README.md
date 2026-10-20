# Name of The Project

 Dev Stack SPA Project

 # Project Description

Dev Stack is a modern and responsive web application that helps developers explore popular technologies and build their ideal development stack. Users can browse technologies by category, compare their features, and add selected technologies to a personalized stack.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify (NPM Package)
* Vite 

## Key Features

- Explore Technologies — Browse a collection of frontend, backend, database, programming language, styling, and DevOps technologies with their descriptions, difficulty levels, and ratings.
- Building Own Stack — Select technologies and add them to Your Stack, allowing developers to create a personalized technology stack for their projects.
- Clean & Responsive Design — A modern, user-friendly interface with responsive layouts, technology cards, navigation, and a structured footer that works across different screen sizes

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

Ans: JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Ans: Props are used to pass data from a parent to a child component. State is used to store data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

Ans: The useState hook is used to store and update changing data in a component. I used it to store the selected technology IDs and update the stack when a user adds or removes a technology.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: The useEffect hook is used to perform side effects after a component renders. I used it to load the JSON data when the component starts.

### 5. Why does every item in a .map() list need a unique key prop?

Ans: Every item needs a unique key so React can identify each item and efficiently update the list when something changes.

### 6. What is conditional rendering? Show one place you used it.

Ans: Conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when no technology is selected.

Example:

```tsx
{selectedIds.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: We pass data from a parent to a child using props. To send something back, the parent passes a function as a prop, and the child calls that function.