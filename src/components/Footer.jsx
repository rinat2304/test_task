function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="/test_task/" className="footer__logo">
            snapbuild
          </a>

          <p className="footer__text">
            Создано Галиевым Р. Н. All rights reserved так сказать.
          </p>

          <a href="#demo" className="footer__link">
            Начать сейчас →
          </a>
        </div>

        <div className="footer__bottom">
          <span>©2026 Snapbuild</span>

          <a href="#product">Продукт</a>
          <a href="#features">Возможности</a>
          <a href="#demo">Демо</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer