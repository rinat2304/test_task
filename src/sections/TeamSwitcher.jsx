import { useState } from 'react'

const teams = [
  {
    id: 'marketing',
    label: 'Маркетинг',
    accent: '#e7b96b',
    title: 'Быстрее запускайте маркетинговые кампании',
    description:
      'Создавайте лендинги и рекламные материалы, сохраняя единый визуальный стиль бренда.',
    items: [
      'Лендинги',
      'Рекламные баннеры',
      'Изображения для кампаний',
    ],
  },
  {
    id: 'design',
    label: 'Дизайн',
    accent: '#b8a8e8',
    title: 'Сохраняйте дизайн-систему в каждом материале',
    description:
      'Используйте существующие визуальные правила бренда при создании новых материалов.',
    items: [
      'Компоненты бренда',
      'Типографика',
      'Визуальные правила',
    ],
  },
  {
    id: 'product',
    label: 'Продукт',
    accent: '#8fb9a5',
    title: 'Создавайте материалы для продукта',
    description:
      'От презентации новой функции до полноценной страницы продукта — всё в едином стиле.',
    items: [
      'Продуктовые страницы',
      'Презентации',
      'Демонстрационные материалы',
    ],
  },
  {
    id: 'sales',
    label: 'Продажи',
    accent: '#d99a8b',
    title: 'Помогайте команде продавать продукт',
    description:
      'Создавайте презентации и материалы для встреч с клиентами без постоянного привлечения дизайнера.',
    items: [
      'Презентации',
      'Коммерческие материалы',
      'Персонализированные страницы',
    ],
  },
]

function TeamSwitcher() {
  const [activeTeam, setActiveTeam] = useState(teams[0])

  const activeIndex = teams.findIndex(
    (team) => team.id === activeTeam.id,
  )

  return (
    <section
      className="team-switcher"
      style={{ '--team-accent': activeTeam.accent }}
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">
            Для всей команды
          </p>

          <h2>
            Один бренд.
            <br />
            Любая команда.
          </h2>

          <p>
            Snapbuild помогает разным командам создавать контент,
            не теряя визуальную целостность бренда.
          </p>
        </div>

        <div className="team-switcher__tabs">
          {teams.map((team) => (
            <button
              key={team.id}
              type="button"
              className={`team-tab ${
                activeTeam.id === team.id
                  ? 'team-tab--active'
                  : ''
              }`}
              onClick={() => setActiveTeam(team)}
            >
              <span
                className="team-tab__dot"
                style={{ background: team.accent }}
              />

              {team.label}
            </button>
          ))}
        </div>

        <div className="team-switcher__content">
          <div className="team-switcher__preview">
            <div className="team-preview">
              <div className="team-preview__top">
                <span>{activeTeam.label}</span>

                <span>snapbuild</span>
              </div>

              <div
                className="team-preview__image"
                key={activeTeam.id}
              >
                <span
                  style={{
                    background: activeTeam.accent,
                  }}
                >
                  {activeTeam.label}
                </span>
              </div>

              <div className="team-preview__lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="team-switcher__info">
            <span className="team-switcher__number">
              0{activeIndex + 1}
            </span>

            <h3 key={`title-${activeTeam.id}`}>
              {activeTeam.title}
            </h3>

            <p key={`description-${activeTeam.id}`}>
              {activeTeam.description}
            </p>

            <ul>
              {activeTeam.items.map((item) => (
                <li key={item}>
                  <span
                    style={{
                      borderColor: activeTeam.accent,
                    }}
                  >
                    ↗
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSwitcher