import Brand from './Brand.jsx'

function WelcomeScreen({ totalQuestions, onStart }) {
  return (
    <main className="page-shell welcome-page">
      <header className="site-header">
        <Brand />
        <span className="header-note">
          <span className="status-dot" />
          Your next big idea starts here
        </span>
      </header>

      <section className="welcome-content">
        <div className="welcome-copy">
          <span className="eyebrow">
            <span className="eyebrow-sparkle">✦</span>
            THE DEVELOPER QUIZ
          </span>
          <h1>
            A little quiz.
            <br />
            <span>A lot of </span>
            <span className="heading-accent">brainpower.</span>
          </h1>
          <p className="welcome-description">
            How well do you know the building blocks of the web? Take a quick
            challenge across HTML, CSS, JavaScript, and React.
          </p>
          <button className="button button-primary start-button" onClick={onStart}>
            Start the quiz
            <span aria-hidden="true">→</span>
          </button>
          <div className="quiz-facts" aria-label="Quiz details">
            <span>
              <span className="fact-icon fact-questions" aria-hidden="true">▤</span>
              {totalQuestions} questions
            </span>
            <span className="fact-divider" aria-hidden="true" />
            <span>
              <span className="fact-icon fact-time" aria-hidden="true">◷</span>
              15 minutes
            </span>
            <span className="fact-divider" aria-hidden="true" />
            <span>
              <span className="fact-icon fact-spark" aria-hidden="true">✦</span>
              Just for fun
            </span>
          </div>
        </div>

        <aside className="welcome-overview" aria-label="Quiz topics">
          <div className="overview-heading">
            <span className="overview-label">WHAT YOU’LL EXPLORE</span>
            <h2>The essentials of the modern web.</h2>
            <p>Four familiar technologies. Ten thoughtful questions.</p>
          </div>
          <ul className="topic-list">
            <li className="topic-item">
              <span className="topic-mark topic-html">&lt;/&gt;</span>
              <span className="topic-name">HTML<small>Structure &amp; semantics</small></span>
              <span className="topic-number">01</span>
            </li>
            <li className="topic-item">
              <span className="topic-mark topic-css">#</span>
              <span className="topic-name">CSS<small>Layout &amp; styling</small></span>
              <span className="topic-number">02</span>
            </li>
            <li className="topic-item">
              <span className="topic-mark topic-js">JS</span>
              <span className="topic-name">JavaScript<small>Language fundamentals</small></span>
              <span className="topic-number">03</span>
            </li>
            <li className="topic-item">
              <span className="topic-mark topic-react">R</span>
              <span className="topic-name">React<small>Components &amp; state</small></span>
              <span className="topic-number">04</span>
            </li>
          </ul>
          <div className="overview-footer">
            <span><strong>{totalQuestions}</strong> questions</span>
            <span className="overview-divider" />
            <span><strong>15</strong> minutes</span>
          </div>
        </aside>
      </section>

      <footer className="welcome-footer">
        <span>MADE FOR CURIOUS MINDS</span>
        <span className="footer-line" />
        <span>HTML <i>·</i> CSS <i>·</i> JS <i>·</i> REACT</span>
      </footer>
    </main>
  )
}

export default WelcomeScreen
