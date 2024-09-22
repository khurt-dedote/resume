import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
            <Education />
            <Skills />
          </div>
          <div className="MainContent">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Kristofer Khurt de Dote</h1>
      <h2>
        <i>Web Designer</i>
      </h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <p>✉️ khurtdedote456@gmail.com</p>
      <p>📞 +639454126201</p>
      <p>📍 Pampanga, Philippines</p>

      <p>
        <strong>GitHub:</strong>{" "}
        <a target="_blank" href="https://github.com/khurt-dedote">
          github.com/khurt-dedote
        </a>
      </p>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h3>Work Experience</h3>
      <div>
        <h4>Web Designer Pebble Design </h4>
        <p>Manila Philippines | 2020 - 2021</p>
        <ul>
          <li>
            Developed wireframes, prototypes, and mockups using tools like Adobe
            XD, Figma, and Sketch, transforming client visions into functional
            web interfaces.
          </li>
          <li>
            Conducted usability testing and gathered feedback from users to
            iterate on designs, improving conversion rates by 15% for e-commerce
            websites.
          </li>
          <li>
            <strong>Successfully led the design of over 30 websites</strong>,
            catering to various industries such as retail, hospitality, and
            finance..
          </li>
        </ul>
      </div>
      <div>
        <h4>Senior Web Designer Pebble Design </h4>
        <p>Manila Phippines | 2021-Current</p>
        <ul>
          <li>
            <strong>
              PLed a team of 6 web designers and front-end developers
            </strong>{" "}
            , overseeing the design and development of web projects from concept
            to deployment.
          </li>
          <li>
            <u>
              <strong>
                Successfully managed and delivered 15+ high-profile web projects
              </strong>
            </u>{" "}
            , increasing overall client satisfaction by 20%.
          </li>
          <li>
            Reduced design-to-development handoff errors by 25% through the
            introduction of a standardized design system.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="Education">
      <h3>Education</h3>
      <p>Bachelor of Science in Information Technology</p>
      <p>University of the Assumption, 2021 - 2026</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="Skills">
      <h3>Skills</h3>
      <ul>
        <li>C++</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Python</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}

export default App;
