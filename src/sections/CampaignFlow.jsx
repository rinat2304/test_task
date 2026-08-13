const steps = [
  {
    number: '01',
    title: 'Идея',
    text: 'Определите задачу, сообщение и направление будущей кампании.',
  },
  {
    number: '02',
    title: 'Создание',
    text: 'Создавайте материалы, сохраняя визуальный язык вашего бренда.',
  },
  {
    number: '03',
    title: 'Адаптация',
    text: 'Превращайте одну идею в сайты, изображения, баннеры и презентации.',
  },
  {
    number: '04',
    title: 'Публикация',
    text: 'Получайте готовые материалы, которые можно сразу использовать.',
  },
]

function CampaignFlow() {
  return (
    <section className="campaign-flow" id="features">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">
            Как это работает
          </p>

          <h2>
            От одной идеи
            <br />
            до целой кампании
          </h2>

          <p>
            Snapbuild помогает пройти путь от замысла до готовых
            материалов, сохраняя единый стиль бренда на каждом этапе.
          </p>
        </div>

        <div className="campaign-flow__steps">
          {steps.map((step, index) => (
            <article
              className="campaign-step"
              key={step.number}
            >
              <div className="campaign-step__meta">
                <span className="campaign-step__number">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="campaign-step__line" />
                )}
              </div>

              <div className="campaign-step__content">
                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>

              <span className="campaign-step__arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CampaignFlow