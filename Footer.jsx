import "./Footer.css";

function Footer({ storeName, email }) {
  return (
    <footer className="footer">
      <p>{storeName} © 2026</p>
      <p>Contact: {email}</p>
    </footer>
  );
}

export default Footer;
