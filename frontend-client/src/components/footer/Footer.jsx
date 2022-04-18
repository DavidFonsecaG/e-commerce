
// Styles
import '../../scss/footer.scss';


const Footer = () => {
  return (
    <footer className="">
      <div>
        <form action="">
          <input 
            type="text" 
            className="form-admin-input"
            placeholder="Search for..."
            aria-label="Search" 
            aria-describedby="basic-addon2" 
          />
          <button className="" type="button">
            Yes Please
          </button>
        </form>
        <p><strong>Living the Simple Life</strong></p>
        <p>Copyright 2019</p>
      </div>
    </footer>
  )
}

export default Footer;
