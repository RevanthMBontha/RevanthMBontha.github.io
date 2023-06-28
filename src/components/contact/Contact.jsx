import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vdf963s',
      'template_gg49zv7',
      form.current,
      'zE-pfdl1qiyU3sWqk'
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Details</h2>
      <span className="section__subtitle">Get in Touch!</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to Me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">To send me a Mail: </h3>

              <a
                href="mailto:revanthmbontha@gmail.com"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Click Here{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">To connect on Whatsapp: </h3>

              <a
                href="https://api.whatsapp.com/send?phone=918309805502&text=Hello!"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Click Here{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Want my help on a Banger Project?</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name:{' '}
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                E-mail:{' '}
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="project" className="contact__form-tag">
                Idea:{' '}
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Detail your project idea here!"
              />
            </div>
            <button type="submit" href="" className="button button--flex">
              Send Message{' '}
              <i
                className="uil uil-message"
                style={{ marginLeft: '0.25rem' }}
              ></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
