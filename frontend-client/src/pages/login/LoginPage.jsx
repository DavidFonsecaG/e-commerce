import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginWithEmailPassword } from '../../actions/auth';

// Styles
import '../../scss/loginPage.scss';

// Componenets
import ButtonLogin from '../../components/buttons/ButtonLogin';



const LoginPage = () => {

  const dispatch = useDispatch()

  // Handling form
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  // Handeling Logins
  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch(login('jh34g5j34hg53', 'David Fonseca'));
    dispatch(startLoginWithEmailPassword(email, password));
  }

  return (
    <div className="container container-login-color">

      <div className="container-90 container-login-flex">

        <div className="login-section"></div>

        <div className="login-section">
          <form onSubmit={handleLogin}>

            <p className="login-section-title">Welcome Back!</p>

            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Email Address..."
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                className="checkbox-input"
                id="customCheck"
              />
              <label
                className="checkbox-label"
                htmlFor="customCheck"
              ><span>Remember Me</span></label>
            </div>

            <div className="form-group">
              <ButtonLogin
                buttonName='Login'
                type='submit'
                className='login-email'
              />

              <ButtonLogin
                buttonName='Login with Google'
                type='submit'
                className='login-google'
              />

              <ButtonLogin
                buttonName='Login with Facebook'
                type='submit'
                className='login-facebook'
              />
            </div>

            <div className="text-center">
              <Link
                className="forgot-password-link" to="/forgot-password">Forgot Password?</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
