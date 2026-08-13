import { useState } from 'react'

function DemoForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))
  }

  function validate() {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Введите ваше имя'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Введите email'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Проверьте формат email'
    }

    if (!form.website.trim()) {
      nextErrors.website = 'Введите адрес сайта'
    } else if (
      !/^https?:\/\/.+/i.test(form.website)
    ) {
      nextErrors.website = 'Укажите адрес с http:// или https://'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="demo-form" id="demo">
        <div className="container">
          <div className="demo-form__success">
            <span className="demo-form__success-icon">
              ✓
            </span>

            <p className="section-heading__eyebrow">
              Заявка отправлена
            </p>

            <h2>
              Спасибо!
              <br />
              Мы свяжемся с вами.
            </h2>

            <p>
              Мы получили ваши данные и подготовим демонстрацию
              Snapbuild для вашего бренда.
            </p>

            <button
              type="button"
              className="button"
              onClick={() => {
                setSubmitted(false)
                setForm({
                  name: '',
                  email: '',
                  website: '',
                })
              }}
            >
              Отправить ещё раз
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="demo-form" id="demo">
      <div className="container">
        <div className="demo-form__layout">
          <div className="demo-form__intro">
            <p className="section-heading__eyebrow">
              Попробуйте Snapbuild
            </p>

            <h2>
              Посмотрите,
              <br />
              что получится
              <br />
              для вашего бренда.
            </h2>

            <p>
              Оставьте данные, чтобы увидеть, как Snapbuild
              может работать с вашей дизайн-системой.
            </p>
          </div>

          <form
            className="demo-form__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-field">
              <label htmlFor="name">Имя</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={handleChange}
              />

              {errors.name && (
                <span className="form-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Рабочий email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.ru"
                value={form.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span className="form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="website">Сайт компании</label>

              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://company.ru"
                value={form.website}
                onChange={handleChange}
              />

              {errors.website && (
                <span className="form-error">
                  {errors.website}
                </span>
              )}
            </div>

            <button type="submit" className="button form-submit">
              Получить демо →
            </button>

            <p className="form-note">
              Нажимая на кнопку, вы отправляете данные только
              для демонстрации работы формы.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DemoForm