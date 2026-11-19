
import { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <Sparkles size={21} />
          </span>
          <span>NovaFlow</span>
        </a>

        {/* Navigation Links */}
        <nav
          id="mobile-navigation"
          className={`nav-links ${menuOpen ? 'active' : ''}`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#features" onClick={closeMenu}>
             Features
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How It Works
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
          <a href="#testimonials" onClick={closeMenu}>
            Testimonials
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          {/* Mobile CTA */}
          <a
            href="#ai-demo"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Get Started <ArrowRight size={17} />
          </a>
        </nav>

        {/* Desktop CTA */}
        <a href="#ai-demo" className="navbar-cta">
          Get Started <ArrowRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
