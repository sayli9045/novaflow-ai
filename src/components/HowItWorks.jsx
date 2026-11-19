
import {
  Target,
  BrainCircuit,
  ChartNoAxesCombined,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import './HowItWorks.css';

const steps = [
  {
    id: 1,
    number: '01',
    icon: Target,
    title: 'Set your goals',
    description:
      'Start by adding your tasks, ideas and personal goals. Bring everything you want to accomplish into one organized workspace.',
    points: [
      'Create your daily goals',
      'Add tasks and priorities',
      'Keep everything organized'
    ]
  },
  {
    id: 2,
    number: '02',
    icon: BrainCircuit,
    title: 'Let AI organize',
    description:
      'Transform your goals into structured action plans. Get intelligent suggestions to organize your priorities and manage your time.',
    points: [
      'Generate actionable plans',
      'Organize tasks by priority',
      'Get smart recommendations'
    ]
  },
  {
    id: 3,
    number: '03',
    icon: ChartNoAxesCombined,
    title: 'Track your progress',
    description:
      'See how far you have come. Monitor completed tasks, understand your productivity and keep moving towards your goals.',
    points: [
      'Monitor task completion',
      'Review your achievements',
      'Improve your productivity'
    ]
  }
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">

      <div className="container">

        {/* Section Heading */}
        <div className="how-heading">

          <span className="section-tag">
            <BrainCircuit size={15} />
            SIMPLE. SMART. EFFECTIVE.
          </span>

          <h2>
            Your workflow,
            <br />
            <span>made effortless.</span>
          </h2>

          <p>
            From your first idea to your biggest achievement,
            NovaFlow helps you move forward with clarity.
          </p>

        </div>

        {/* Steps */}
        <div className="steps-grid">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="step-card" key={step.id}>

                {/* Step Header */}
                <div className="step-top">

                  <div className="step-icon">
                    <Icon size={27} />
                  </div>

                  <span className="step-number">
                    STEP {step.number}
                  </span>

                </div>

                {/* Step Content */}
                <h3>{step.title}</h3>

                <p className="step-description">
                  {step.description}
                </p>

                {/* Step Points */}
                <ul className="step-points">

                  {step.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}

                </ul>

                {/* Step Footer */}
                <div className="step-footer">
                  <span>
                    {index === 0 && 'Start with clarity'}
                    {index === 1 && 'Work smarter'}
                    {index === 2 && 'Keep progressing'}
                  </span>

                  <ArrowRight size={18} />
                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom Message */}
        <div className="how-bottom">

          <div className="how-bottom-icon">
            <BrainCircuit size={21} />
          </div>

          <p>
            Three simple steps. One smarter way to work.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
