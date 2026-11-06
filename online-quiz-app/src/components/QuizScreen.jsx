import Brand from './Brand.jsx'

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}

function QuizScreen({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  timeRemaining,
  onSelectAnswer,
  onNext,
  onPrevious,
}) {
  const progress = (questionNumber / totalQuestions) * 100
  const isLastQuestion = questionNumber === totalQuestions

  return (
    <main className="page-shell quiz-page">
      <header className="site-header quiz-header">
        <Brand />
        <div className="quiz-header-meta">
          <span className="quiz-session-label">THE DEVELOPER QUIZ</span>
          <div
            className={`timer-pill${timeRemaining <= 60 ? ' timer-warning' : ''}`}
            aria-label={`Time remaining: ${formatTime(timeRemaining)}`}
          >
            <span aria-hidden="true">◷</span>
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>
      </header>

      <section className="quiz-content" aria-labelledby="question-title">
        <div className="progress-heading">
          <span>
            QUESTION <strong>{String(questionNumber).padStart(2, '0')}</strong>
            <span className="progress-of"> / {String(totalQuestions).padStart(2, '0')}</span>
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin="0"
          aria-valuemax={totalQuestions}
          aria-valuenow={questionNumber}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="question-card">
          <div className="question-card-top">
            <span className="category-pill">{question.category}</span>
            <span className="single-answer-hint">CHOOSE ONE ANSWER</span>
          </div>
          <h1 id="question-title">{question.question}</h1>
          <div className="answer-list" role="group" aria-label="Answer options">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              return (
                <button
                  className={`answer-option${isSelected ? ' answer-selected' : ''}`}
                  key={option}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelectAnswer(index)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-copy">{option}</span>
                  <span className="option-indicator" aria-hidden="true">
                    {isSelected ? '✓' : ''}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="quiz-navigation">
          <button
            className="button button-secondary"
            type="button"
            onClick={onPrevious}
            disabled={questionNumber === 1}
          >
            <span aria-hidden="true">←</span>
            Previous
          </button>
          <span className="autosave-note">
            <span className="autosave-check" aria-hidden="true">✓</span>
            Your answers are saved
          </span>
          <button className="button button-primary next-button" type="button" onClick={onNext}>
            {isLastQuestion ? 'See my results' : 'Next question'}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
      <footer className="quiz-footer">TAKE YOUR TIME. YOU’VE GOT THIS.</footer>
    </main>
  )
}

export default QuizScreen
