
const HomePage = () => {
  return (
    <div className="container container-1200 container-flex">

      <main className="container-main">

        <article className="article-featured">
          <h2 className="article-title">Finding simplicity in life</h2>
          <img src="img/life.jpg" alt="simple white desk on a white wall with a plant on the far right side" className="article-image" />
          <p className="article-info">July 23, 2019 | 3 comments</p>
          <p className="article-body"><strong>Life can get complicated really quickly</strong>, but it doesn't have to be! There are many ways to simplify your life, <a href="#">a few of which we've explored in the past</a>. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.</p>
          <a href="#" className="article-read-more">CONTINUE READING</a>
        </article>

        <article className="article-recent">
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

      </main>

      <aside className='container-sidebar'>

        <div className="sidebar-widget">
          <h2 className="widget-title">ABOUT ME</h2>
          <p className="widget-body">I find life better, and I'm happier, when things are nice and simple.</p>
          <img src="img/about-me.jpg" alt="john doe" className="widget-image" />
        </div>

        <div className="sidebar-widget">
          <h2 className="widget-title">RECENT POSTS</h2>
          <div className="widget-recent-post">
            <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" className="widget-image" />
            <h3 className="widget-recent-post-title">Keeping cooking simple</h3>
          </div>
          <div className="widget-recent-post">
            <img src="img/work.jpg" alt="a chair white chair at a white desk on a white wall" className="widget-image" />
            <h3 className="widget-recent-post-title">Simplicity and work</h3>
          </div>
          <div className="widget-recent-post">
            <img src="img/deco.jpg" alt="a green plant in a clear, round vase with water in it" className="widget-image" />
            <h3 className="widget-recent-post-title">Simple decorations</h3>
          </div>
        </div>

      </aside>
      
    </div>
  );
};

export default HomePage;
