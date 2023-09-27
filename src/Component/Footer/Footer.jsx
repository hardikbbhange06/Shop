import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="top" style={topStyle}>
        <div className="pages" style={pagesStyle}>
          <ul>
            <h3>Brand Name</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul>
            <h3>Careers</h3>
            <li><a href="#">Apply Online</a></li>
            <li><a href="#">Available Positions</a></li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">Our Responsibilities</a></li>
            <li><a href="#">Our Codes</a></li>
            <li><a href="#">Our Values</a></li>
          </ul>
        </div>
        <div className="newsletter" style={newsletterStyle}>
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
              style={inputStyle}
            />
            <input type="button" value="Submit" style={buttonStyle} />
          </form>
        </div>
      </div>
      <div className="social" style={socialStyle}>
        <i className="fab fa-linkedin" style={iconStyle}></i>
        <i className="fab fa-github" style={iconStyle}></i>
        <i className="fab fa-facebook" style={iconStyle}></i>
        <i className="fab fa-instagram" style={iconStyle}></i>
        <i className="fab fa-twitter" style={iconStyle}></i>
        <i className="fab fa-youtube" style={iconStyle}></i>
      </div>
      <div className="info" style={infoStyle}>
        <div className="legal">
          <a href="#" style={linkStyle}>Terms & Conditions</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
        </div>
        <div className="copyright" style={copyrightStyle}>2021 Copyright &copy; Sean B</div>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: 'rgb(46, 46, 46)',
  color: 'white',
  width: '100vw',
  maxWidth: '100vw',
  overflowX: 'hidden',
};

const topStyle = {
  padding: '2rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
};

const pagesStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const newsletterStyle = {
  paddingLeft: '2rem',
};

const inputStyle = {
  position: 'relative',
  height: '100%',
  padding: '7px 8px',
  border: '1px solid rgb(206, 206, 206)',
};

const buttonStyle = {
  border: 'none',
  padding: '7px 12px',
  background: 'rgb(79, 223, 79)',
  color: 'rgb(255, 255, 255)',
  border: '1px solid rgb(79, 223, 79)',
  cursor: 'pointer',
};

const socialStyle = {
  padding: '1.5rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const iconStyle = {
  fontSize: '1.4rem',
  margin: '2px 8px',
  cursor: 'pointer',
};

const infoStyle = {
  padding: '1rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgb(29, 29, 29)',
};

const linkStyle = {
  marginRight: '15px',
  color: 'rgb(231, 231, 231)',
  textDecoration: 'none',
};

const copyrightStyle = {
  color: 'rgb(231, 231, 231)',
};

export default Footer;
