import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginWithEmailPassword } from '../../actions/auth';
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
    <div className="container-login container-login-flex">

      <div className="login-section"></div>

      <div className="login-section">
        <form autoComplete="off" onSubmit={handleLogin}>

          <p className="login-section-title">Welcome Back!</p>

          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Enter Email Address..."
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              className="form-input"
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
            >Remember Me</label>
          </div>

          <div className="form-group">
            <ButtonLogin
              buttonName='Login'
              type='submit'
              className='login-email'
            />

            <hr className="hr-login" />

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

          <hr className="hr-login" />

          <div className="text-center">
            <Link
              className="forgot-password-link" to="/forgot-password">Forgot Password?</Link>
          </div>

        </form>
      </div>

    </div>
  );
};

export default LoginPage;
