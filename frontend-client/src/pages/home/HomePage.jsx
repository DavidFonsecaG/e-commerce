// Styles
import '../../scss/home.scss';

const HomePage = () => {
  return (
    <div className="container">

        <div className="container-color">
          <article className="container container-90 container-flex container-1300">
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


        <article className="container container-90 article-recent">
          <div className="article-recent-secondary">
            <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" className="article-image" />
            <p className="article-info">July 19, 2019 | 3 comments</p>
          </div>
          <div className="article-recent-main">
            <h2 className="article-title">Keep your cooking simple </h2>
            <p className="article-body">Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
            <a href="#" className="article-read-more">CONTINUE READING</a>
          </div>
        </article>

        <article className="article-recent">
          <div className="article-recent-secondary">
            <img src="img/work.jpg" alt="a chair white chair at a white desk on a white wall" className="article-image" />
            <p className="article-info">July 12, 2019 | 3 comments</p>
          </div>
          <div className="article-recent-main">
            <h2 className="article-title">Simplicity and work </h2>
            <p className="article-body">Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.</p>
            <a href="#" className="article-read-more">CONTINUE READING</a>
          </div>
        </article>

        <article className="article-recent">
          <div className="article-recent-secondary">
            <img src="img/deco.jpg" alt="a green plant in a clear, round vase with water in it" className="article-image" />
            <p className="article-info">July 3, 2019 | 3 comments</p>
          </div>
          <div className="article-recent-main">
            <h2 className="article-title">Simple decorations</h2>
            <p className="article-body">A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.</p>
            <a href="#" className="article-read-more">CONTINUE READING</a>
          </div>
        </article>


      
    </div>
  );
};

export default HomePage;
