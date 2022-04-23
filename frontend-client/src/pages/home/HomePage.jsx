// Styles
import '../../scss/home.scss';

const HomePage = () => {
  return (
    <div className="container">

        <div className="container-color">
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body">
              <h1 className="article-title article-container">Shopping Made Easy With Ecommerce</h1>
              <p className="article-body article-container">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
              <div className="article-button">
                <button>Go to Store</button>
              </div>
            </div>
            <div className="article-main-img">
              <img src="img/Image-hero.jpg" alt="simple white desk on a white wall with a plant on the far right side" className="article-imagee" />
            </div>
          </article>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#fff" fill-opacity="1" d="M0,160L120,160C240,160,480,160,720,133.3C960,107,1200,53,1320,26.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>

        <div className="container-no-color">
          <article className="container-secondary container-90 container-1300">
            <div className="article-secondary-body">
              <p className="article-info">July 19, 2019 | 3 comments</p>
              <h2 className="article-title article-container">Keep your cooking simple </h2>
              <p className="article-body article-container">Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
              <div className="article-button">
                <button>Go to Store</button>
              </div>
            </div>
            <div className="article-recent-secondary">
              <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" className="article-image" />
            </div>
          </article>
        </div>

        <div className="container-color">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#fff" fill-opacity="1" d="M0,256L80,245.3C160,235,320,213,480,176C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body-two">
              <h1 className="article-title">Want to visit us?</h1>
              <p className="article-body article-container">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor.</p>
              <div className="article-button">
                <button>Contact Us</button>
              </div>
            </div>
            <div className="article-main-img-two">
              <img src="img/work.jpg" alt="simple white desk on a white wall with a plant on the far right side" className="article-imagee" />
            </div>
          </article>
        </div>

    </div>
  );
};

export default HomePage;
