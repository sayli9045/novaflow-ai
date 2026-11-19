
import { useState } from 'react';

import {
  Sparkles,
  BrainCircuit,
  CheckCircle2,
  Circle,
  RotateCcw,
  ArrowRight,
  ListChecks,
  Target,
  Clock3
} from 'lucide-react';

import './AIDemo.css';

// Sample task generation logic
function generateSampleTasks(goal) {
  const cleanGoal = goal.trim();

  return [
    {
      id: 1,
      title: `Define the key steps for: ${cleanGoal}`,
      description: 'Break your goal into smaller achievable actions.',
      duration: '15 min',
      completed: false
    },
    {
      id: 2,
      title: 'Gather resources and prepare',
      description: 'Collect the tools and information you need.',
      duration: '30 min',
      completed: false
    },
    {
      id: 3,
      title: 'Work on your main task',
      description: 'Dedicate focused time to making progress.',
      duration: '60 min',
      completed: false
    },
    {
      id: 4,
      title: 'Review your progress',
      description: 'Evaluate your work and identify improvements.',
      duration: '20 min',
      completed: false
    }
  ];
}

function AIDemo() {

  // State for user input
  const [goal, setGoal] = useState('');

  // State for generated tasks
  const [tasks, setTasks] = useState([]);

  // State for validation message
  const [error, setError] = useState('');

  // Generate a sample plan
  function handleGeneratePlan() {
    if (!goal.trim()) {
      setError('Please enter a goal before generating your plan.');
      return;
    }

    const generatedTasks = generateSampleTasks(goal);

    setTasks(generatedTasks);
    setError('');
  }

  // Toggle task completion
  function handleTaskToggle(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Reset planner
  function handleReset() {
    setGoal('');
    setTasks([]);
    setError('');
  }

  // Calculate progress
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const totalTasks = tasks.length;

  const progress = totalTasks > 0
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <section className="ai-demo-section" id="ai-demo">

      <div className="container">

        {/* Section Heading */}
        <div className="ai-demo-heading">

          <span className="section-tag">
            <Sparkles size={15} />
            YOUR PERSONAL PRODUCTIVITY PLANNER
          </span>

          <h2>
            Turn your goals into
            <br />
            <span>actionable plans.</span>
          </h2>

          <p>
            Enter a goal and explore how NovaFlow helps
            organize your next steps.
          </p>

        </div>

        {/* Planner Container */}
        <div className="planner-container">

          {/* Input Panel */}
          <div className="planner-input-panel">

            <div className="planner-panel-heading">

              <div className="planner-heading-icon">
                <BrainCircuit size={23} />
              </div>

              <div>
                <h3>What do you want to achieve?</h3>
                <p>Start with a goal. We'll create a sample plan.</p>
              </div>

            </div>

            <label htmlFor="goal-input">
              Your goal
            </label>

            <textarea
              id="goal-input"
              value={goal}
              onChange={(event) => {
                setGoal(event.target.value);
                setError('');
              }}
              placeholder="Example: Prepare for my React.js interview..."
              rows={4}
              maxLength={200}
            />

            <div className="input-footer">
              <span>{goal.length}/200 characters</span>
              <span>Be clear and specific</span>
            </div>

            {error && (
              <p className="planner-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="button"
              className="generate-btn"
              onClick={handleGeneratePlan}
            >
              <Sparkles size={18} />
              Generate My Plan
              <ArrowRight size={18} />
            </button>

            <div className="planner-note">
              <CheckCircle2 size={15} />
              <span>Interactive sample planner. No account required.</span>
            </div>

          </div>

          {/* Results Panel */}
          <div className="planner-results-panel">

            <div className="results-header">

              <div>
                <span className="results-label">
                  YOUR ACTION PLAN
                </span>

                <h3>Suggested tasks</h3>
              </div>

              <div className="results-icon">
                <ListChecks size={22} />
              </div>

            </div>

            {tasks.length === 0 ? (

              /* Empty State */
              <div className="planner-empty">

                <div className="empty-icon">
                  <Target size={32} />
                </div>

                <h4>Your plan starts here</h4>

                <p>
                  Enter your goal and click Generate My Plan
                  to see your suggested tasks.
                </p>

              </div>

            ) : (

              /* Generated Tasks */
              <div className="planner-generated">

                <div className="goal-summary">
                  <span>YOUR GOAL</span>
                  <p>{goal.trim()}</p>
                </div>

                {/* Progress Overview */}
                <div className="planner-progress">

                  <div className="progress-info">
                    <span>Completion progress</span>
                    <strong>{progress}%</strong>
                  </div>

                  <div
                    className="planner-progress-track"
                    role="progressbar"
                    aria-label="Task completion progress"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="planner-progress-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <div className="progress-caption">
                    {completedTasks} of {totalTasks} tasks completed
                  </div>

                </div>

                {/* Task List */}
                <div className="generated-task-list">

                  {tasks.map((task) => (

                    <div
                      className={`generated-task ${
                        task.completed ? 'task-done' : ''
                      }`}
                      key={task.id}
                    >

                      <button
                        type="button"
                        className="task-toggle"
                        onClick={() => handleTaskToggle(task.id)}
                        aria-label={
                          task.completed
                            ? `Mark ${task.title} as incomplete`
                            : `Mark ${task.title} as complete`
                        }
                      >
                        {task.completed ? (
                          <CheckCircle2 size={21} />
                        ) : (
                          <Circle size={21} />
                        )}
                      </button>

                      <div className="generated-task-content">

                        <h4>{task.title}</h4>

                        <p>{task.description}</p>

                      </div>

                      <span className="task-duration">
                        <Clock3 size={13} />
                        {task.duration}
                      </span>

                    </div>

                  ))}

                </div>

                {/* Completion Message */}
                {progress === 100 && (
                  <div className="completion-message">
                    <CheckCircle2 size={19} />
                    <span>Excellent! You've completed all your tasks.</span>
                  </div>
                )}

                {/* Reset Button */}
                <button
                  type="button"
                  className="reset-btn"
                  onClick={handleReset}
                >
                  <RotateCcw size={16} />
                  Start a new plan
                </button>

              </div>

            )}

          </div>

        </div>

        {/* Demo Disclaimer */}
        <p className="demo-disclaimer">
          This is an interactive sample planner using predefined
          task-generation logic. It does not use a live AI service.
        </p>

      </div>

    </section>
  );
}

export default AIDemo;
