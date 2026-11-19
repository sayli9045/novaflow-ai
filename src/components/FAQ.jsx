
import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import './FAQ.css';

const faqItems = [
  {
    question: 'What is NovaFlow AI?',
    answer:
      'NovaFlow AI is a productivity platform concept designed to help users organize goals, manage tasks, and track their progress in one place.',
  },
  {
    question: 'How does the AI planner work?',
    answer:
      'The current demo uses predefined task-generation logic to create a sample plan based on your goal. It does not connect to a live AI service.',
  },
  {
    question: 'Can I track my daily progress?',
    answer:
      'Yes. The demo illustrates progress tracking through task completion indicators and a progress bar.',
  },
  {
    question: 'Is NovaFlow AI free to use?',
    answer:
      'The landing page displays illustrative Free, Pro, and Team plans. These are demonstration plans, and no actual subscription is currently available.',
  },
  {
    question: 'Can I use NovaFlow AI on my phone?',
    answer:
      'The landing page is designed to be responsive, so its layout adapts to desktop, tablet, and mobile screen sizes.',
  },
  {
    question: 'Does NovaFlow AI process payments?',
    answer:
      'No. This project is a frontend demonstration. The pricing buttons do not process payments or create subscriptions.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="section-label">GOT QUESTIONS?</span>

          <h2>
            Frequently Asked
            <span className="highlight-text"> Questions.</span>
          </h2>

          <p>
            Find answers to common questions about NovaFlow AI.
          </p>
        </div>

        <div className="faq-container">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>

                  <span className="faq-toggle-icon">
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  id={answerId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-contact">
          <MessageCircle size={22} />
          <div>
            <h3>Still have questions?</h3>
            <p>Explore the NovaFlow demo to see how it works.</p>
          </div>
          <a href="#ai-demo">Try the Demo</a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
