
import {
  ArrowRight,
  Sparkles,
  Play,
  CheckCircle2,
  Clock3,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';

import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">

        {/* Left: Hero Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={16} />
            <span>AI-POWERED PRODUCTIVITY WORKSPACE</span>
          </div>

        <h1>
           <span className="heading-line">Less chaos.</span>
           <span className="heading-line">
          More <span className="highlight-text">momentum.</span>
           </span>
        </h1>
 

          <p className="hero-description">
            Turn your goals into action with an intelligent
            workspace that helps you plan smarter, stay focused
            and make meaningful progress every day.
          </p>

          <div className="hero-actions">
            <a href="#get-started" className="hero-primary-btn">
              Explore NovaFlow
              <ArrowRight size={18} />
            </a>

            <a href="#how-it-works" className="hero-secondary-btn">
              <Play size={17} />
              See how it works
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-icon">
              <CheckCircle2 size={18} />
            </div>
            <span>Plan better. Focus deeper. Achieve more.</span>
          </div>

        </div>

        {/* Right: Dashboard Preview */}
        <div className="hero-visual">

          <div className="dashboard-card">

            <div className="dashboard-header">
              <div>
                <span className="dashboard-label">YOUR WORKSPACE</span>
                <h3>Good morning!</h3>
                <p>Here's your productivity overview.</p>
              </div>

              <span className="dashboard-more" aria-hidden="true">
              <MoreHorizontal size={22} />
              </span>
            </div>

            {/* Productivity Summary */}
            <div className="dashboard-stats">

              <div className="stat-card">
                <div className="stat-icon green-icon">
                  <CheckCircle2 size={19} />
                </div>
                <span>Completed</span>
                <strong>12</strong>
                <small>Tasks this week</small>
              </div>

              <div className="stat-card">
                <div className="stat-icon purple-icon">
                  <Clock3 size={19} />
                </div>
                <span>Focus time</span>
                <strong>18.5h</strong>
                <small>This week</small>
              </div>

            </div>

            {/* Weekly Progress */}
            <div className="progress-panel">
              <div className="panel-heading">
                <div>
                  <h4>Weekly progress</h4>
                  <p>You're making great progress!</p>
                </div>

                <TrendingUp size={21} className="trend-icon" />
              </div>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <div className="progress-footer">
                <span>Goal completion</span>
                <strong>75%</strong>
              </div>
            </div>

            {/* Today's Tasks */}
            <div className="tasks-panel">
              <div className="tasks-heading">
                <h4>Today's priorities</h4>
                <span>3 tasks</span>
              </div>

              <div className="task-row">
                <CheckCircle2 size={19} className="task-completed" />
                <span>Review project requirements</span>
                <small>Done</small>
              </div>

              <div className="task-row">
                <div className="task-pending"></div>
                <span>Build React components</span>
                <small>In progress</small>
              </div>

              <div className="task-row">
                <div className="task-pending"></div>
                <span>Practice problem solving</span>
                <small>Upcoming</small>
              </div>
            </div>

            <div className="ai-insight">
              <Sparkles size={18} />
              <div>
                <strong>Smart insight</strong>
                <p>You're on track to achieve your weekly goal!</p>
              </div>
            </div>

          </div>

          {/* Floating AI Badge */}
          <div className="floating-badge">
            <Sparkles size={17} />
            <span>AI-powered planning</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
