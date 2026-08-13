const features = [
  {
    number: '01',
    title: 'Создание контента',
    text: 'Создавайте сайты, изображения, видео и презентации с помощью AI.',
  },
  {
    number: '02',
    title: 'Единый бренд',
    text: 'Каждый материал сохраняет цвета, типографику и визуальный язык вашей компании.',
  },
  {
    number: '03',
    title: 'Быстрая адаптация',
    text: 'Превращайте одну идею в разные форматы без ручной пересборки дизайна.',
  },
  {
    number: '04',
    title: 'Работа всей команды',
    text: 'Маркетинг, дизайн, продукт и продажи работают в одной визуальной системе.',
  },
]

function ProductOverview() {
  return (
    <section className="product-overview" id="product">
      <div className="container">
        <div className="product-overview__heading">
          <div className="section-heading">
            <p className="section-heading__eyebrow">
              Возможности платформы
            </p>

            <h2>
              Всё необходимое
              <br />
              для вашего бренда
            </h2>
          </div>

          <p>
            Snapbuild объединяет создание контента и дизайн-систему
            бренда в одном рабочем пространстве.
          </p>
        </div>

        <div className="product-overview__grid">
          {features.map((feature) => (
            <article
              className="product-feature"
              key={feature.number}
            >
              <span className="product-feature__number">
                {feature.number}
              </span>

              <div className="product-feature__content">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>

              <span className="product-feature__arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductOverview