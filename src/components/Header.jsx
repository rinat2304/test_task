function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="logo">
          snapbuild
        </a>

        <nav className="header__nav">
          <a href="#product">Продукт</a>
          <a href="#features">Возможности</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#demo" className="button button--small">
          Начать сейчас
        </a>
      </div>
    </header>
  )
}

export default Header