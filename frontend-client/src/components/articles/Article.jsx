import React from 'react'

const Article = () => {

  // Notifications Array
  const articleOptions = [
    {
      titleOne: 'PASO UNO',
      mainText: 'Inicia tu aplicacion.',
      titleTwo: 'DOCUMENTACION',
    },
    {
      titleOne: 'PASO DOS',
      mainText: 'Aplica para una visa.',
      titleTwo: 'ENTREVISTA',
    },
    {
      titleOne: 'PASO TRES',
      mainText: 'Viaje a tu destino',
      titleTwo: 'INICIA CLASES',
    }
  ];

  return (
    articleOptions.map(({titleOne, mainText, titleTwo}) => {
      return (
        <div className="container-color bg-dark-color" key={titleOne}>
          <article className="container-main container-90 container-flex container-1300">
            <div className="article-main-body">
              <p className="article-main-title title-one article-container">{titleOne}</p>
              <h3 className="article-three-title article-container">{mainText}</h3>
              <p className="article-main-title article-container">{titleTwo}</p>
              <div className="article-button">
                <button>Como Funciona</button>
              </div>
            </div>
          </article>
        </div>
      )
    })
  )
}

export default Article