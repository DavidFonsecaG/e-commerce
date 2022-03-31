import PropTypes from 'prop-types';

const ButtonLogin = ( { className, buttonName, type, onClick, disabled } ) => {
  return (
    <>
      <button 
        className={`btn-login ${className}`} 
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
      > { buttonName } </button>
    </>
  )
}

ButtonLogin.propTypes = {
  buttonName : PropTypes.string
}

ButtonLogin.defaul = {
  className : '',
  type : 'button'
}

export default ButtonLogin;
