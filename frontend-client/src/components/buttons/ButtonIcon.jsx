import PropTypes from 'prop-types';

const ButtonIcon = ({ className, iconName, type, onClick, disabled, classNameIcon }) => {
  return (
    <>
      <button
        className={`btn-admin-header ${ className }`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <span className={`material-icons ${ classNameIcon }`}> { iconName }</span> 
      </button>
    </>
  )
}

ButtonIcon.propTypes = {
  buttonName: PropTypes.string
}

ButtonIcon.defaul = {
  className: '',
  type: 'button'
}

export default ButtonIcon;
