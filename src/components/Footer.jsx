
import {
  Sparkles,
  ArrowUp,
  Mail,
  ArrowRight,
} from 'lucide-react';

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">

          {/* Brand information */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">
                <Sparkles size={21} />
              </span>
              <span>NovaFlow</span>
            </a>

            <p>
              Bring clarity to your day, organize your goals,
              and make meaningful progress with NovaFlow AI.
            </p>

            <a href="#ai-demo" className="footer-cta">
              Explore the Demo <ArrowRight size={16} />
            </a>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
          </div>

          {/* Product links */}
          <div className="footer-links">
            <h3>Explore</h3>
            <a href="#ai-demo">AI Demo</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQs</a>
            <a href="#home">Back to Home</a>
          </div>

          {/* Contact and social links */}
          <div className="footer-social">
            <h3>Stay Connected</h3>

            <p>
              Follow us for productivity ideas and updates.
            </p>

          
<div className="social-icons">
  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <span className="social-github">GH</span>
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <span className="social-linkedin">in</span>
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <span className="social-instagram">◎</span>
  </a>
</div>


            <a href="mailto:hello@novaflow.example" className="footer-email">
              <Mail size={16} />
              hello@novaflow.example
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} NovaFlow AI. All rights reserved.
          </p>

          <p className="footer-bottom-note">
            Designed to make every day more productive.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
