
import { Check, Sparkles, Users, Zap } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for getting started with better productivity.',
    price: '₹0',
    period: '/ forever',
    icon: Zap,
    features: [
      'Basic task management',
      'AI sample planner',
      'Daily progress tracking',
      'Access to basic features',
    ],
    buttonText: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    description: 'For individuals who want to achieve more.',
    price: '₹499',
    period: '/ month',
    icon: Sparkles,
    features: [
      'Everything in Free',
      'Advanced AI planning',
      'Unlimited task management',
      'Detailed progress insights',
      'Priority support',
    ],
    buttonText: 'Choose Pro',
    featured: true,
  },
  {
    name: 'Team',
    description: 'For teams that want to work smarter together.',
    price: '₹999',
    period: '/ month',
    icon: Users,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Shared task boards',
      'Team progress tracking',
      'Dedicated team support',
    ],
    buttonText: 'Choose Team',
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-label">SIMPLE PRICING</span>

          <h2>
            Plans that grow with your
            <span className="highlight-text"> productivity.</span>
          </h2>

          <p>
            Choose a plan that fits your workflow.
            Start free and upgrade whenever you are ready.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;

            return (
              <div
                className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`}
                key={plan.name}
              >
                {plan.featured && (
                  <span className="popular-badge">MOST POPULAR</span>
                )}

                <div className="pricing-plan-icon">
                  <PlanIcon size={23} />
                </div>

                <h3>{plan.name}</h3>

                <p className="plan-description">
                  {plan.description}
                </p>

                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>

                <a
                  href="#ai-demo"
                  className={`pricing-button ${plan.featured ? 'primary-pricing-button' : ''}`}
                >
                  {plan.buttonText}
                </a>

                <div className="plan-divider"></div>

                <p className="features-heading">
                  What's included:
                </p>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="pricing-note">
          All prices are illustrative and for demonstration purposes.
          No payment or subscription is processed.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
