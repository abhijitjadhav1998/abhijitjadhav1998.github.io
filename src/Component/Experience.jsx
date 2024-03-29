import React from 'react';

function Experience() {
  return (
    <section className='experience' id='experience'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <h1 className='title'>Experience</h1>
            <div className='title-bar'></div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Sept 2022 - Present</span>
                  <h5>BA3 Developer - <span className='place'>Barclays</span></h5>
                  <p>Pune</p>
                </li>
              </ul>
            </div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Dec 2020 - Sept 2022</span>
                  <h5>Application Development Analyst - <span className='place'>Accenture</span></h5>
                  <p>Pune</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <h1 className='title'>Internship</h1>
            <div className='title-bar'></div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Jan 2019 - Jun 2019</span>
                  <h5>Software Engineering Intern - <span className='place'>Persistent Systems</span></h5>
                  <p>Pune</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;