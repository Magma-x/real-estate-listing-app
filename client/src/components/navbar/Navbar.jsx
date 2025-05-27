import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  // Close menu when clicking outside or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (open && !event.target.closest(".menuIcon") && !event.target.closest(".menu")) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  // Debug click events
  const handleSignInClick = (e) => {
    console.log("Sign in link clicked");
  };

  const handleSignUpClick = (e) => {
    console.log("Sign up link clicked");
  };

  // Debug clicks on the auth-links container
  const handleAuthLinksClick = (e) => {
    console.log("auth-links container clicked", e.target);
  };

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="MagmaEstate Logo" />
          <span>MagmaEstate</span>
        </Link>
        <div className="desktop-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
        </div>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="User Avatar" />
            <span className="username">{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="auth-links" onClick={handleAuthLinksClick}>
            <Link to="/login" onClick={handleSignInClick}>
              Sign in
            </Link>
            <Link to="/register" className="register" onClick={handleSignUpClick}>
              Sign up
            </Link>
          </div>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" onClick={handleMenuItemClick}>
            Home
          </Link>
          <Link to="/aboutus" onClick={handleMenuItemClick}>
            About
          </Link>
          <Link to="/contact" onClick={handleMenuItemClick}>
            Contact
          </Link>
          <Link to="/agents" onClick={handleMenuItemClick}>
            Agents
          </Link>
          {currentUser ? (
            <Link to="/profile" onClick={handleMenuItemClick}>
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login" onClick={(e) => { handleMenuItemClick(); handleSignInClick(e); }}>
                Sign in
              </Link>
              <Link to="/register" onClick={(e) => { handleMenuItemClick(); handleSignUpClick(e); }}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}

export default Navbar;