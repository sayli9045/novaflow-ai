
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Student',
    initials: 'AS',
    feedback:
      'NovaFlow helps me organize my study goals and break big tasks into smaller steps. It makes planning much easier.',
  },
  {
    name: 'Priya Mehta',
    role: 'Freelancer',
    initials: 'PM',
    feedback:
      'I like the simple interface and progress tracking. It gives me a clearer picture of what I need to complete each day.',
  },
  {
    name: 'Rohan Patil',
    role: 'Project Manager',
    initials: 'RP',
    feedback:
      'The organized layout makes task planning feel less overwhelming. It is a great concept for improving productivity.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>

          <h2>
            Productivity that makes
            <span className="highlight-text"> a difference.</span>
          </h2>

          <p>
            See how better organization can make everyday work
            feel simpler and more manageable.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-top">
                <Quote size={27} />
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="testimonial-feedback">
                "{testimonial.feedback}"
              </p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="testimonial-note">
          Illustrative testimonials for this product demo. These are not verified customer reviews.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
