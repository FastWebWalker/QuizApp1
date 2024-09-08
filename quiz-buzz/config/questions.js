const reactQuestions = [
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A template language for Java",
      "A library for CSS",
      "A browser API",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
  {
    question: "What is a React component?",
    options: [
      "A piece of code that controls the browser",
      "A function or class that can accept inputs and returns a React element",
      "A tool for compiling JSX",
      "A type of JavaScript variable",
    ],
    correctAnswer:
      "A function or class that can accept inputs and returns a React element",
  },
  {
    question: "What hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
  {
    question: "What is the purpose of useEffect in React?",
    options: [
      "To directly manipulate the DOM",
      "To fetch data from an API",
      "To perform side effects in function components",
      "To update component state",
    ],
    correctAnswer: "To perform side effects in function components",
  },
  {
    question:
      "Which lifecycle method is equivalent to useEffect with an empty dependency array?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentWillUnmount",
      "shouldComponentUpdate",
    ],
    correctAnswer: "componentDidMount",
  },
  {
    question: "How do you pass data to a child component in React?",
    options: ["Through state", "Using props", "With hooks", "Using context"],
    correctAnswer: "Using props",
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A JavaScript representation of the actual DOM",
      "A database of elements",
      "A server-side rendering engine",
      "A method for storing state",
    ],
    correctAnswer: "A JavaScript representation of the actual DOM",
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      "To manage global state",
      "To enable navigation between different views in a React app",
      "To compile JSX into HTML",
      "To manage the component lifecycle",
    ],
    correctAnswer:
      "To enable navigation between different views in a React app",
  },
  {
    question: "Which hook is used to access context in a functional component?",
    options: ["useContext", "useState", "useReducer", "useEffect"],
    correctAnswer: "useContext",
  },
  {
    question: "What is React's default way of handling form inputs?",
    options: [
      "Through controlled components",
      "Through uncontrolled components",
      "Through direct DOM manipulation",
      "Using refs",
    ],
    correctAnswer: "Through controlled components",
  },
];


export default reactQuestions;