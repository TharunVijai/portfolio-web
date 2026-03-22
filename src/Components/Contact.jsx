import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-section">

        {/* LEFT TITLE */}
        <div className="contact-left">
            <h1>Contact</h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="contact-right">

            <div className="contact-item">
            <span>📧</span>
            <p>tharunrust@gmail.com</p>
            </div>

            <div className="contact-item">
            <span>📞</span>
            <p>8754246207</p>
            </div>

            <div className="contact-item">
            <span>📍</span>
            <p>Chennai, India</p>
            </div>

            <div className="contact-item">
            <span>🔗</span>
            <a href="https://www.linkedin.com/in/tharunvijay011" target="_blank">
                LinkedIn Profile
            </a>
            </div>

        </div>

        </div>
  )
}

export default Contact