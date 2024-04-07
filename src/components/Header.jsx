import IonIcon from "@reacticons/ionicons";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className={showNav ? "active" : ""}>
      <div className="nav-header">
        <img src="/images/logo-light.svg" alt="logo" />
      </div>
      <nav>
        <div className="nav">
          <div className="nav-top">
            <div className="nav-side-head">
              <img src="/images/logo-light.svg" alt="logo" />
              {showNav && (
                <button onClick={() => setShowNav((show) => !show)}>
                  <IonIcon
                    name="close-outline"
                    className="nav-close-btn nav-btn"
                  />
                </button>
              )}
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-info">
            <p>info@email.com</p>
            <p>00 123 456789</p>
            <div className="social-links">
              <IonIcon name="logo-twitter" />
              <IonIcon name="logo-facebook" />
              <IonIcon name="logo-dribbble" />
              <IonIcon name="logo-instagram" />
              <IonIcon name="logo-youtube" />
            </div>
          </div>
        </div>
        <div className="nav-buttons">
          <a href="#" className="nav-link-btn">
            Free Trial
          </a>
          {!showNav && (
            <button onClick={() => setShowNav((show) => !show)}>
              <IonIcon name="menu-outline" className="nav-open-btn nav-btn" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
