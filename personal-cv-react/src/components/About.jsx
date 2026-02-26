function About() {
  return (
    <section className="card">
      <img src="images/profile.jpg" alt="Profile photo" width="200" />

      <p>Contact Number: 09654706009</p>

      <p>
        Email:{" "}
        <a href="mailto:tabaniag.jvhonne@gmail.com">
          tabaniag.jvhonne@gmail.com
        </a>
      </p>

      <p>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/tabaniag.jvhonne"
          target="_blank"
          rel="noopener noreferrer"
        >
          J-vhonne Leyran Tabaniag
        </a>
      </p>

      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/jvtabaniag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          jvtabaniag
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/J-vhonneT"
          target="_blank"
          rel="noopener noreferrer"
        >
          J-vhonneT
        </a>
      </p>

      <h2 style={{ marginTop: '30px' }}>About Me</h2>
      <p>
        Hi, my name is J-vhonne Tabaniag. I’m 20 years old and currently completing
        my Bachelor of Science in Information Technology (BSIT). I enjoy learning
        about technology, programming, and problem-solving. I love building projects
        that are both fun and useful while constantly improving my skills.
      </p>
    </section>
  );
}

export default About;