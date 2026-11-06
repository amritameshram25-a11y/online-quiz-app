import Brand from './Brand.jsx'

function getResultMessage(percentage) {
  if (percentage === 100) return ['Flawless!', 'You know your way around the web. That was seriously impressive.']
  if (percentage >= 70) return ['You’re on a roll!', 'A brilliant result. Your web development knowledge is looking sharp.']
  if (percentage >= 40) return ['Nice work!', 'You’ve got a great foundation. Keep learning and you’ll be unstoppable.']
  return ['Every expert starts somewhere.', 'Thanks for giving it a go. A little practice goes a long way!']
}

function ResultScreen({ totalQuestions, correctAnswers, onRestart }) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)
  const [title, description] = getResultMessage(percentage)

  return (
    <main className="page-shell result-page">
      <header className="site-header">
        <Brand />
        <span className="results-label">YOUR RESULTS</span>
      </header>
      <section className="result-content" aria-labelledby="result-title">
        <div className="result-confetti confetti-one">✦</div>
        <div className="result-confetti confetti-two">✳</div>
        <div className="result-confetti confetti-three">✦</div>
        <div className="result-icon" aria-hidden="true">
          <span>✦</span>
        </div>
        <span className="eyebrow result-eyebrow">QUIZ COMPLETE</span>
        <h1 id="result-title">{title}</h1>
        <p className="result-description">{description}</p>

        <div className="score-card">
          <div className="score-primary">
            <span className="score-number">{percentage}<small>%</small></span>
            <span className="score-caption">YOUR SCORE</span>
          </div>
          <div className="score-divider" />
          <div className="score-stat">
            <span className="score-stat-number">{correctAnswers}<span>/{totalQuestions}</span></span>
            <span className="score-caption">CORRECT ANSWERS</span>
          </div>
          <div className="score-divider" />
          <div className="score-stat">
            <span className="score-stat-number">{totalQuestions}</span>
            <span className="score-caption">TOTAL QUESTIONS</span>
          </div>
        </div>

        <button className="button button-primary restart-button" type="button" onClick={onRestart}>
          <span aria-hidden="true">↻</span>
          Take the quiz again
        </button>
      </section>
      <footer className="quiz-footer">KEEP CURIOUS. KEEP BUILDING.</footer>
    </main>
  )
}

export default ResultScreen
