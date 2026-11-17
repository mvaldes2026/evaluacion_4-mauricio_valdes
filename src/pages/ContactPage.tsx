import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { ContactFormErrors, ContactFormValues } from '../types';
import { StatusMessage } from '../components/StatusMessage/StatusMessage';
import './ContactPage.css';

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = (data: ContactFormValues): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!data.fullName.trim()) {
      nextErrors.fullName = 'Por favor, ingresa tu nombre completo.';
    }

    if (!data.email.trim()) {
      nextErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = 'Ingresa un correo electrónico válido (ej. nombre@dominio.cl).';
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      nextErrors.message = 'Escribe un mensaje de al menos 10 caracteres.';
    }

    return nextErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(INITIAL_VALUES);
    }
  };

  return (
    <section className="contact-section" aria-labelledby="titulo-contacto">
      <header className="contact-section__header">
        <h2 id="titulo-contacto" className="contact-section__title">
          Contacto
        </h2>
      </header>

      <p className="contact-section__intro">
        ¿Te interesa mi trabajo? Envíame un mensaje y te responderé a la brevedad.
      </p>

      {submitted && (
        <StatusMessage
          variant="success"
          message="¡Mensaje enviado correctamente! Gracias por contactarme, responderé a la brevedad."
        />
      )}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Formulario de contacto personal"
      >
        <fieldset className="contact-form__fieldset">
          <legend className="contact-form__legend">Formulario de Contacto</legend>

          <ul className="contact-form__grid">
            <li className="contact-form__group">
              <label htmlFor="nombre" className="contact-form__label">
                Nombre completo <strong aria-hidden="true">*</strong>:
              </label>
              <input
                type="text"
                id="nombre"
                name="fullName"
                className="contact-form__input"
                value={values.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'error-nombre' : undefined}
              />
              {errors.fullName && (
                <p id="error-nombre" className="contact-form__error" role="alert">
                  {errors.fullName}
                </p>
              )}
            </li>

            <li className="contact-form__group">
              <label htmlFor="email" className="contact-form__label">
                Correo electrónico <strong aria-hidden="true">*</strong>:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form__input"
                value={values.email}
                onChange={handleChange}
                required
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'error-email' : undefined}
              />
              {errors.email && (
                <p id="error-email" className="contact-form__error" role="alert">
                  {errors.email}
                </p>
              )}
            </li>

            <li className="contact-form__group contact-form__group--full">
              <label htmlFor="asunto" className="contact-form__label">
                Asunto:
              </label>
              <input
                type="text"
                id="asunto"
                name="subject"
                className="contact-form__input"
                value={values.subject}
                onChange={handleChange}
                autoComplete="off"
              />
            </li>

            <li className="contact-form__group contact-form__group--full">
              <label htmlFor="mensaje" className="contact-form__label">
                Mensaje <strong aria-hidden="true">*</strong>:
              </label>
              <textarea
                id="mensaje"
                name="message"
                rows={4}
                className="contact-form__textarea"
                value={values.message}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'error-mensaje' : undefined}
              />
              {errors.message && (
                <p id="error-mensaje" className="contact-form__error" role="alert">
                  {errors.message}
                </p>
              )}
            </li>

            <li className="contact-form__group contact-form__group--full">
              <button type="submit" className="contact-form__submit">
                Enviar Mensaje
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}