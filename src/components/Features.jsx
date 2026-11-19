
import {
  BrainCircuit,
  Target,
  ChartNoAxesColumnIncreasing,
  CalendarDays,
  ArrowUpRight,
} from 'lucide-react';

import './Features.css';

const features = [
  {
    id: 1,
    icon: BrainCircuit,
    title: 'Smart AI Planning',
    description:
      'Turn your ideas and goals into clear, actionable plans with intelligent assistance.',
    number: '01',
  },
  {
    id: 2,
    icon: Target,
    title: 'Focus Mode',
    description:
      'Stay focused on your priorities and make meaningful progress without distractions.',
    number: '02',
  },
  {
    id: 3,
    icon: ChartNoAxesColumnIncreasing,
    title: 'Progress Insights',
    description:
      'Understand your productivity patterns and track your progress with clear insights.',
    number: '03',
  },
  {
    id: 4,
    icon: CalendarDays,
    title: 'Smart Scheduling',
    description:
      'Organize your daily activities and create a balanced schedule around your goals.',
    number: '04',
  },
];

function Features() {
  return (
    <section
      className="features-section section"
      id="features"
    >
      <div className="container">

        {/* Section Heading */}
        <div className="features-heading">

          <span className="section-tag">
            <BrainCircuit size={15} />
            WHAT MAKES NOVAFLOW DIFFERENT
          </span>

          <h2>
            Everything you need to
            <br />
            <span>work smarter.</span>
          </h2>

          <p>
            A smarter way to organize your work, manage your time
            and stay connected to your goals.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="features-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="feature-card"
                key={feature.id}
              >

                <div className="feature-card-top">

                  <div className="feature-icon">
                    <Icon size={25} />
                  </div>

                  <span className="feature-number">
                    {feature.number}
                  </span>

                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-card-bottom">
                  <span>Explore feature</span>
                  <ArrowUpRight size={18} />
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;
