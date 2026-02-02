import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <h2>ComponentCorner</h2>
      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;

