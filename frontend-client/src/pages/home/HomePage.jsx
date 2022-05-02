// Styles
import '../../scss/home.scss';

//Components
import Article from '../../components/articles/Article';

const HomePage = () => {
  return (
    <div className="container">

        <div className="container-slider">
          <article className="container-secondary container-90 container-1300">
            <div className="article-secondary-body">
              <p className="article-body article-container">Mas facil de lo que piensas</p>
              <h1 className="article-title article-container">Estudia y vive en el extranjero.</h1>
              <div className="article-button">
                <button>Como Funciona</button>
              </div>
            </div>
          </article>
        </div>

        <div className="container-color">
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body">
              <p className="article-main-title article-container">DESCRUBRE GO ESTUDIOS</p>
              <h3 className="article-main-text article-container">agencia de estudios en el exterior.</h3>
              <h3 className="article-main-text-two article-container">Aplica.Viaja.<br/>Estudia.</h3>
            </div>
          </article>
        </div>

        <div className="container-color">
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body">
              <p className="article-main-title article-container">NUESTRO PROCESO</p>
              <h3 className="article-three-title article-container">Te guiamos en todos los pasos de tu aplicacion.</h3>
              <h3 className="article-three-text article-container">Creemos que nuestro proceso de aplicacion es sencillo para que puedas estudiar en el exterior.</h3>
            </div>
          </article>
        </div>

        <Article></Article>

        {/* <div className="container-color">
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body">
              <h3 className="article-title article-container">Descrubre Go Estudios</h3>
              <p className="article-body article-container">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
              <div className="article-button">
                <button>Ver Proceso</button>
              </div>
            </div>
            <div className="article-main-img">
              <img src="https://placeimg.com/640/480/people" alt="simple white desk on a white wall with a plant on the far right side" className="article-imagee" />
            </div>
          </article>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#fff" fillOpacity="1" d="M0,160L120,160C240,160,480,160,720,133.3C960,107,1200,53,1320,26.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>

        <div className="container-color">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#fff" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,176C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body-two">
              <h1 className="article-title">Want to visit us?</h1>
              <p className="article-body article-container">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor.</p>
              <div className="article-button">
                <button>Contact Us</button>
              </div>
            </div>
            <div className="article-main-img-two">
              <img src="https://placeimg.com/640/480/people" alt="simple white desk on a white wall with a plant on the far right side" className="article-imagee" />
            </div>
          </article>
        </div> */}

    </div>
  );
};

export default HomePage;
