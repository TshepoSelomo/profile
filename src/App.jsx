import { useState } from "react";
import { profile, projects, roles } from "./profile.js";

const nav = [
  { id: "home", label: "Home", icon: "fa-home" },
  { id: "about", label: "About", icon: "fa-user" },
  { id: "skills", label: "Skills", icon: "fa-list" },
  { id: "portfolio", label: "Portfolio", icon: "fa-briefcase" },
  { id: "contact", label: "Contact", icon: "fa-comments" },
];

const services = [
  {
    icon: "fa-laptop",
    title: "Frontend",
    text: "Angular, TypeScript, JavaScript, HTML5 and CSS3. Interfaces, forms, dashboards and navigation.",
  },
  {
    icon: "fa-code",
    title: "Backend",
    text: "C#, .NET, ASP.NET Core and REST APIs. Connecting screens to the services behind them.",
  },
  {
    icon: "fa-database",
    title: "Data",
    text: "SQL Server, SQL, tables, joins and stored procedures for application data.",
  },
  {
    icon: "fa-cogs",
    title: "Practice",
    text: "Git, GitHub, debugging, testing, IIS deployment, and the AWS Cloud Practitioner certificate.",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "unplugg", label: "Unplugg IT" },
  { id: "ttch", label: "TTCH" },
];

function categoryOf(project) {
  return project.kind.includes("TTCH") ? "ttch" : "unplugg";
}

export default function App() {
  const [section, setSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  function openSection(id) {
    setSection(id);
    setMenuOpen(false);
  }

  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => categoryOf(project) === filter);

  return (
    <>
      <aside className={`aside ${menuOpen ? "open" : ""}`}>
        <div
          className={`nav-toggler ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </div>
        <div className="aside-inner">
          <div className="logo">
            <a href="#home" onClick={() => openSection("home")}>
              TS
            </a>
          </div>
          <ul className="nav">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={section === item.id ? "active" : ""}
                  onClick={(event) => {
                    event.preventDefault();
                    openSection(item.id);
                  }}
                >
                  <i className={`fa ${item.icon}`} /> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="copyright">© {new Date().getFullYear()} {profile.fullName}</div>
        </div>
      </aside>

      {section === "home" ? <Home onContact={() => openSection("contact")} /> : null}
      {section === "about" ? <About onContact={() => openSection("contact")} /> : null}
      {section === "skills" ? <Skills /> : null}
      {section === "portfolio" ? (
        <Portfolio
          filter={filter}
          onFilter={setFilter}
          projects={visibleProjects}
        />
      ) : null}
      {section === "contact" ? <Contact /> : null}
    </>
  );
}

function Home({ onContact }) {
  return (
    <section className="home section active" id="home">
      <div className="container">
        <div className="intro">
          <img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt={`Portrait of ${profile.fullName}`} className="shadow-dark" />
          <h1>{profile.fullName}</h1>
          <p>Software Developer</p>
          <p className="lead">{profile.intro}</p>
          <div className="social-links">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <i className="fa fa-envelope" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa fa-linkedin" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa fa-github" />
            </a>
          </div>
          <div className="row">
            <div className="buttons padd-15" style={{ marginTop: 28 }}>
              <button type="button" className="btn" onClick={onContact}>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ onContact }) {
  const jobs = roles.filter((role) => role.company);
  const study = roles.filter((role) => !role.company);

  return (
    <section className="about section active" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h2>
                  I am a <span>software developer</span>
                </h2>
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  {profile.facts.map((fact) => (
                    <div className="info-item padd-15" key={fact.label}>
                      <p>
                        {fact.label} : <span>{fact.value}</span>
                      </p>
                    </div>
                  ))}
                  <div className="info-item padd-15">
                    <p>
                      GitHub : <span>TshepoSelomo</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Status : <span>{profile.status}</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a href={profile.github} className="btn" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <button type="button" className="btn hire-me" onClick={onContact}>
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  {profile.skillGroups.map((group) => (
                    <div className="skill-item padd-15" key={group.label}>
                      <h5>{group.label}</h5>
                      <p>{group.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <Timeline title="Education" items={study} />
              <Timeline title="Experience" items={jobs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({ title, items }) {
  return (
    <div className={title === "Education" ? "education padd-15" : "experience padd-15"}>
      <h3 className="title">{title}</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {items.map((item) => (
              <div className="timeline-item" key={`${item.period}-${item.role}`}>
                <div className="circle-dot" />
                <h6 className="timeline-date">
                  <i className="fa fa-calendar" /> {item.period}
                </h6>
                <h4 className="timeline-title">
                  {item.role}
                  {item.company ? ` · ${item.company}` : ""}
                </h4>
                <p className="timeline-text">
                  {[item.note, ...(item.points || [])].filter(Boolean).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="service section active" id="skills">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="service-item padd-15" key={service.title}>
              <div className="service-item-inner">
                <div className="icon">
                  <i className={`fa ${service.icon}`} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ filter, onFilter, projects: items }) {
  return (
    <section className="portfolio section active" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter padd-15">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={filter === item.id ? "active" : ""}
                onClick={() => onFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {items.map((project) => {
            const inner = (
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.blurb}</p>
                  <div className="icon">
                    <i className={`fa ${project.url ? "fa-link" : "fa-search"}`} />
                  </div>
                </div>
              </div>
            );
            return (
              <div className="portfolio-item padd-15" key={project.title}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section active" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone" />
            </div>
            <h4>Phone</h4>
            <p>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope" />
            </div>
            <h4>Email</h4>
            <p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-linkedin" />
            </div>
            <h4>LinkedIn</h4>
            <p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                tshepo-simon-selomo
              </a>
            </p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker" />
            </div>
            <h4>Location</h4>
            <p>{profile.location}</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-github" />
            </div>
            <h4>GitHub</h4>
            <p>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/TshepoSelomo
              </a>
            </p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <h4>Availability</h4>
            <p>{profile.status}</p>
          </div>
        </div>
        <div className="row">
          <div className="padd-15">
            <p style={{ marginBottom: 18, color: "#504e70" }}>{profile.contactTitle}</p>
            <a href={`mailto:${profile.email}`} className="btn">
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
