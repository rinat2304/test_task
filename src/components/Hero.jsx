function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            AI-платформа для вашего бренда
          </p>

          <h1 className="hero__title">
            Создавайте контент
            <br />
            в рамках вашего бренда
          </h1>

          <p className="hero__description">
            Сайты, изображения, видео, баннеры и презентации
            в единой дизайн-системе компании.
          </p>

          <div className="hero__actions">
            <a href="#demo" className="button">
              Начать сейчас
            </a>

            <a href="#product" className="hero__link">
              Узнать больше →
            </a>
          </div>
        </div>

        <div className="hero__preview">
          <div className="preview__header">

            <div className="preview__dots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="preview__body">
            <div className="preview__sidebar">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="preview__main">
              <div className="preview__label" />
              <div className="preview__title" />
              <div className="preview__text" />

              <div className="preview__cards">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero