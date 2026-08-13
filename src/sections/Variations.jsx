import { useState } from 'react'

const formats = [
  {
    id: 'website',
    label: 'Сайт',
    title: 'Полноценная страница бренда',
    text: 'Создавайте лендинги и продуктовые страницы в рамках вашей дизайн-системы.',
  },
  {
    id: 'banner',
    label: 'Баннер',
    title: 'Рекламный материал',
    text: 'Адаптируйте идею кампании под рекламные форматы и разные размеры.',
  },
  {
    id: 'social',
    label: 'Social',
    title: 'Контент для социальных сетей',
    text: 'Создавайте визуалы для социальных сетей, сохраняя узнаваемость бренда.',
  },
  {
    id: 'presentation',
    label: 'Презентация',
    title: 'Презентация продукта',
    text: 'Собирайте презентации из той же визуальной системы, что используется на сайте.',
  },
]

function Variations() {
  const [activeFormat, setActiveFormat] = useState(formats[0])
  const [isChanging, setIsChanging] = useState(false)

  function handleFormatChange(format) {
    if (format.id === activeFormat.id) return

    setIsChanging(true)

    setTimeout(() => {
      setActiveFormat(format)
      setIsChanging(false)
    }, 180)
  }

  return (
    <section className="variations" id="features">
      <div className="container">
        <div className="variations__heading">
          <div className="section-heading">
            <p className="section-heading__eyebrow">
              Один запрос
            </p>

            <h2>
              Десятки форматов.
              <br />
              Один бренд.
            </h2>
          </div>

          <p>
            Создавайте разные материалы из одной идеи, не
            перестраивая визуальный язык каждый раз заново.
          </p>
        </div>

        <div className="variations__tabs">
          {formats.map((format) => (
            <button
              key={format.id}
              type="button"
              className={`variation-tab ${
                activeFormat.id === format.id
                  ? 'variation-tab--active'
                  : ''
              }`}
              onClick={() => handleFormatChange(format)}
              aria-pressed={activeFormat.id === format.id}
            >
              {format.label}
            </button>
          ))}
        </div>

        <div
          className={`
            variation-preview
            variation-preview--${activeFormat.id}
            ${isChanging ? 'variation-preview--changing' : ''}
          `}
        >
          <div className="variation-preview__browser">
            <div className="variation-preview__bar">
              <span />
              <span />
              <span />
            </div>

            <div className="variation-preview__content">
              <span className="variation-preview__eyebrow">
                {activeFormat.label}
              </span>

              <div className="variation-preview__title">
                {activeFormat.title}
              </div>

              <div className="variation-preview__text">
                {activeFormat.text}
              </div>

              <div className="variation-preview__visual">
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

export default Variations