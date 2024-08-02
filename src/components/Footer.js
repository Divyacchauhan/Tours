import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
            <h1>Tripp</h1>
            <p>Choose Your Favorite Destination</p>
        </div>
        <div>
            <a href="/"></a>
            <i class="fa-brands fa-square-facebook"></i>
            <a href="/"></a>
            <i class="fa-brands fa-instagram"></i>
            <a href="/"></a>
            <i class="fa-brands fa-whatsapp"></i>
            <a href="/"></a>
            <i class="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">Download</a>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>Other</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
            
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
            
        </div>

      </div>
    </div>
  )
}

export default Footer

