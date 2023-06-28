import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey!</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{' '}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{' '}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data qualification__data-left">
              <div>
                <h3 className="qualification__title">Full MERN Stack Course</h3>
                <span className="qualification__subtitle">by John Smilga</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Apr, 2023.
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Complete Web Development Bootcamp
                </h3>
                <span className="qualification__subtitle">by Angela Yu</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar, 2023
                </div>
              </div>
            </div>

            <div className="qualification__data qualification__data-left">
              <div>
                <h3 className="qualification__title">Bachelor of Commerce</h3>
                <span className="qualification__subtitle">IGNOU</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun,2019 - May, 2022.
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ComfySloth</h3>
                <span className="qualification__subtitle">
                  Mock E-Commerce Site
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Apr, 2023.
                </div>
              </div>
            </div>

            <div className="qualification__data qualification__data-left">
              <div>
                <h3 className="qualification__title">The Cocktail Database</h3>
                <span className="qualification__subtitle">
                  Library of Cocktails
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar, 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Reusable React Components
                </h3>
                <span className="qualification__subtitle">
                  Built from Scratch
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan,2023 - Feb, 2023.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
