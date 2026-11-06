import { useEffect, useState } from 'react'
import './App.css'
import questions from './data/questions.js'
import QuizScreen from './components/QuizScreen.jsx'
import ResultScreen from './components/ResultScreen.jsx'
import WelcomeScreen from './components/WelcomeScreen.jsx'

const QUIZ_DURATION = 15 * 60

function App() {
  const [screen, setScreen] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null))
  const [timeRemaining, setTimeRemaining] = useState(QUIZ_DURATION)

  useEffect(() => {
    if (screen !== 'quiz') return undefined

    const deadline = Date.now() + QUIZ_DURATION * 1000
    const timerId = window.setInterval(() => {
      const remaining = Math.max(Math.ceil((deadline - Date.now()) / 1000), 0)
      setTimeRemaining(remaining)
      if (remaining === 0) setScreen('result')
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [screen])

  function startQuiz() {
    setAnswers(Array(questions.length).fill(null))
    setCurrentQuestion(0)
    setTimeRemaining(QUIZ_DURATION)
    setScreen('quiz')
  }

  function selectAnswer(answerIndex) {
    setAnswers((currentAnswers) => {
      const updatedAnswers = [...currentAnswers]
      updatedAnswers[currentQuestion] = answerIndex
      return updatedAnswers
    })
  }

  function goToNextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setScreen('result')
      return
    }

    setCurrentQuestion((questionIndex) => questionIndex + 1)
  }

  function goToPreviousQuestion() {
    setCurrentQuestion((questionIndex) => Math.max(questionIndex - 1, 0))
  }

  const correctAnswers = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.correctAnswer ? 1 : 0),
    0,
  )

  if (screen === 'quiz') {
    return (
      <QuizScreen
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={answers[currentQuestion]}
        timeRemaining={timeRemaining}
        onSelectAnswer={selectAnswer}
        onNext={goToNextQuestion}
        onPrevious={goToPreviousQuestion}
      />
    )
  }

  if (screen === 'result') {
    return (
      <ResultScreen
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        onRestart={startQuiz}
      />
    )
  }

  return <WelcomeScreen totalQuestions={questions.length} onStart={startQuiz} />
}

export default App
