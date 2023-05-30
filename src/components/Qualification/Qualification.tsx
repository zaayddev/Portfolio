import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleSate, setToggleState] = useState<number>(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="services">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <li
            className={
              toggleSate === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap  qualification_icon"></i>
            Education
          </li>

          <li
            className={
              toggleSate === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </li>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleSate === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">BACCALAUREATE DEGREE</h3>
                <span className="qualification_subtitle">
                  La Victoire School
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">COMPUTER SCIENCE</h3>
                <span className="qualification_subtitle">1337 School</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleSate === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Front-End Web Developer Intern
                </h3>
                <span className="qualification_subtitle">WebMastery</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 (3 months)
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
