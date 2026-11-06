const questions = [
  {
    category: 'HTML',
    question: 'Which declaration tells the browser to use modern HTML?',
    options: ['<html modern>', '<!DOCTYPE html>', '<head version="5">', '<meta html="5">'],
    correctAnswer: 1,
  },
  {
    category: 'HTML',
    question: 'Which HTML element is best suited for a website’s main navigation links?',
    options: ['<aside>', '<section>', '<nav>', '<footer>'],
    correctAnswer: 2,
  },
  {
    category: 'CSS',
    question: 'Which CSS layout is designed to arrange items along one axis?',
    options: ['Flexbox', 'Float', 'Table layout', 'Positioning'],
    correctAnswer: 0,
  },
  {
    category: 'CSS',
    question: 'In the CSS box model, what is the space between content and border called?',
    options: ['Margin', 'Padding', 'Outline', 'Gutter'],
    correctAnswer: 1,
  },
  {
    category: 'JavaScript',
    question: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
    options: ['var', 'let', 'const', 'static'],
    correctAnswer: 2,
  },
  {
    category: 'JavaScript',
    question: 'What does the strict equality operator (===) compare?',
    options: [
      'Only the values',
      'Only the types',
      'The values and their types',
      'Whether two variables have the same name',
    ],
    correctAnswer: 2,
  },
  {
    category: 'JavaScript',
    question: 'Which array method creates a new array by transforming every item?',
    options: ['filter()', 'map()', 'find()', 'forEach()'],
    correctAnswer: 1,
  },
  {
    category: 'React',
    question: 'What is a React component?',
    options: [
      'A reusable piece of UI',
      'A special CSS selector',
      'A browser storage API',
      'A type of HTML attribute',
    ],
    correctAnswer: 0,
  },
  {
    category: 'React',
    question: 'Which React Hook is commonly used to add state to a function component?',
    options: ['useFetch', 'useStyle', 'useState', 'useMarkup'],
    correctAnswer: 2,
  },
  {
    category: 'React',
    question: 'Why should list items in React have a key prop?',
    options: [
      'To apply a default CSS style',
      'To help React identify items between renders',
      'To make each item clickable',
      'To prevent components from receiving props',
    ],
    correctAnswer: 1,
  },
]

export default questions
