
// Styles
import '../../scss/forms.scss';

const SearchFormAdmin = ({ className }) => {
  return (
    <form className={`form-admin ${ className }`} >

      <input 
        type="text" 
        className="form-admin-input"
        placeholder="Search for..."
        aria-label="Search" 
        aria-describedby="basic-addon2" 
      />

      <button className="form-admin-button" type="button">

        <span className="material-icons bold">search</span>

      </button>

    </form>
  )
}

SearchFormAdmin.defaul = {
  className: ''
}

export default SearchFormAdmin;
