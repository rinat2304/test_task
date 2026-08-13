const rules = [
  {
    label: 'Цвет',
    value: 'Primary / Neutral',
    preview: 'colors',
  },
  {
    label: 'Типографика',
    value: 'Brand Sans',
    preview: 'type',
  },
  {
    label: 'Компоненты',
    value: 'Buttons / Cards / Grid',
    preview: 'components',
  },
]

function DesignSystem() {
  return (
    <section className="design-system">
      <div className="container">
        <div className="design-system__layout">
          <div className="design-system__content">
            <p className="section-heading__eyebrow">
              Дизайн-система
            </p>

            <h2>
              Один визуальный
              <br />
              язык для всего
              <br />
              контента.
            </h2>

            <p className="design-system__description">
              Snapbuild анализирует ваш бренд и использует его
              визуальные правила при создании новых материалов.
              Поэтому сайт, баннер и презентация выглядят как
              части одной системы.
            </p>

            <div className="design-system__meta">
              <span>Brand system</span>
              <span>Synced</span>
            </div>
          </div>

          <div className="design-system__card">
            <div className="design-system__card-header">
              <span>snapbuild</span>

              <span className="design-system__status">
                ● Система активна
              </span>
            </div>

            <div className="design-system__brand">
              <div className="design-system__brand-mark">
                S
              </div>

              <div>
                <span>Ваш бренд</span>
                <strong>Visual identity</strong>
              </div>
            </div>

            <div className="design-system__rules">
              {rules.map((rule, index) => (
                <div className="design-rule" key={rule.label}>
                  <div className="design-rule__info">
                    <span>0{index + 1}</span>

                    <div>
                      <strong>{rule.label}</strong>
                      <small>{rule.value}</small>
                    </div>
                  </div>

                  {rule.preview === 'colors' && (
                    <div className="design-rule__colors">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  )}

                  {rule.preview === 'type' && (
                    <div className="design-rule__type">
                      Aa
                    </div>
                  )}

                  {rule.preview === 'components' && (
                    <div className="design-rule__components">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="design-system__footer">
              <span>Последняя синхронизация</span>
              <strong>Сегодня, 18:24</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSystem