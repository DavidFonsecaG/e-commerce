
// Styles
import '../../scss/footer.scss';

// Componenets


const Footer = () => {
  return (
    <footer className="container container-1300">
      <form autoComplete="off" className="footer-form">
        <input
          type="email"
          className="form-input"
          placeholder="Enter Email Address to Join our Mailng List..."
          name="email"
        />
        <button type='submit'>Yes, Please</button>
      </form>
      <div className="container-flex footer-text">
        <p><strong>Follow us</strong></p>
        <p>© 2021 All Rights Reserved. Developed by David Fonseca.</p>
      </div>
    </footer>
  )
}

export default Footer;
