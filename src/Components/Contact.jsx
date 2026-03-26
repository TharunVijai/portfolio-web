import './Contact.css'
import emailjs from 'emailjs-com'
import '../App.css'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_emailtharun',
      'template_ak0i3jf',
      e.target,
      'zne72VTSa0oFz3AmS'
    ).then(
      () => {
        alert("Message Sent ✅");
      },
      () => {
        alert("Failed ❌");
      }
    );

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">

      <h1 className="contact-title">Contact</h1>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <p className="contact-row">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M3 5h18v14H3V5zm9 7L3 6h18l-9 6z"/>
            </svg>
            tharunrust@gmail.com
          </p>

          <p className="contact-row">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"/>
            </svg>
            8754246207
          </p>

          <p className="contact-row">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/>
            </svg>
            Chennai, India
          </p>

          <a 
            href="https://www.linkedin.com/in/tharunvijay011"
            target="_blank"
            rel="noreferrer"
            className="contact-row link"
          >
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M6.94 6.5A2.44 2.44 0 114.5 4.06 2.44 2.44 0 016.94 6.5zM4.5 8h4.88v12H4.5zm7.44 0h4.68v1.64h.07a5.14 5.14 0 014.63-2.55c4.95 0 5.86 3.26 5.86 7.5V20h-4.88v-6.06c0-1.45 0-3.32-2-3.32s-2.3 1.58-2.3 3.21V20h-4.88z"/>
            </svg>
            LinkedIn Profile
          </a>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-right glass" onSubmit={sendEmail}>

          <h3>Quick Message</h3>

          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
          />

          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
          />

          <textarea 
            name="message" 
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send</button>

        </form>

      </div>
    </section>
  )
}

export default Contact