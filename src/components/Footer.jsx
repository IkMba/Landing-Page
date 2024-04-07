function Footer() {
  return (
    <footer className="section">
      <div className="footer-top">
        <h2 className="footer-heading">
          Join our community by using our services and grow your business.
        </h2>
        <button className="footer-link">Try it for free</button>
      </div>
      <div className="footer-down">
        <div className="footer-info">
          <h2>Adex</h2>
          <p>&copy; codewithIk</p>
          <p>All rights reserved</p>
        </div>
        <div className="footer-address">
          <h3>Get in Touch</h3>
          <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
          <p>info@email.com</p>
          <p>00 123 234</p>
        </div>
        <div className="footer-more">
          <h4>Learn More</h4>
          <ul>
            <li>About us</li>
            <li>Our Story</li>
            <li>Projects</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-news">
          <h3>Our Newsletter</h3>
          <p>
            Subscribe to our newsletter to get our news & deals delivered to you
          </p>
          <div className="footer-form">
            <input type="text" placeholder="Email Address" />
            <button>Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
