
function Footer() {
 return (
  <footer className="footer">
   <div className="logo"><img src="../images/logo2.svg" alt=""/></div>
   <div>
    <p className="footer-nav">Features</p>
    <p className="nav-link"><a href="#features">Link Shortening</a></p>
    <p className="nav-link"><a href="#features">Branded Links</a></p>
    <p className="nav-link"><a href="#features">Analytics</a></p>
   </div>
   <div>
    <p className="footer-nav">Resources</p>
    <p className="nav-link"><a href="#features">Blog</a></p>
    <p className="nav-link"><a href="#features">Developers</a></p>
    <p className="nav-link"><a href="#features">Support</a></p>
   </div>
   <div>
    <p className="footer-nav">Company</p>
    <p className="nav-link"><a href="#features">About</a></p>
    <p className="nav-link"><a href="#features">Our Team</a></p>
    <p className="nav-link"><a href="#features">Careers</a></p>
    <p className="nav-link"><a href="#features">Contact</a></p>
   </div>
   <div className="social-icons">
    <div className="icon"><a href="#features"><img src="../images/icon-facebook.svg" alt=""/></a></div>
    <div className="icon"><a href="#features"><img src="../images/icon-twitter.svg" alt=""/></a></div>
    <div className="icon"><a href="#features"><img src="../images/icon-pinterest.svg" alt=""/></a></div>
    <div className="icon"><a href="#features"><img src="../images/icon-instagram.svg" alt=""/></a></div>
   </div>
  </footer>
 )
}

export default Footer;