const photos = [
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85", alt: "Portrait en extérieur" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85", alt: "Mariage" },
  { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85", alt: "Shooting mode" },
  { src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85", alt: "Portrait masculin" },
  { src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85", alt: "Couple" },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85", alt: "Mode" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">ALEX<span>.</span></a>
        <div className="navLinks">
          <a href="#portfolio">Portfolio</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2200&q=90"
          alt="Photographie de mode"
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Photographe · France</p>
          <h1>Je raconte<br /><i>vos histoires</i> en images.</h1>
          <a className="button light" href="#portfolio">Découvrir le portfolio ↓</a>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">Sélection</p>
            <h2>Portfolio</h2>
          </div>
          <p className="intro">Des images naturelles, élégantes et intemporelles.</p>
        </div>

        <div className="gallery">
          {photos.map((photo, index) => (
            <figure className={index % 3 === 0 ? "featured" : ""} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section id="apropos" className="about">
        <div className="aboutImage">
          <img
            src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=1200&q=85"
            alt="Photographe"
          />
        </div>
        <div className="aboutText">
          <p className="eyebrow dark">À propos</p>
          <h2>Bonjour, moi c’est Alex.</h2>
          <p>
            Photographe basé en France, je capture les moments avec une approche
            simple : de belles lumières, des émotions sincères et des images qui
            restent.
          </p>
          <p>
            Portrait, mariage, mode ou projet professionnel : chaque séance est
            pensée pour vous ressembler.
          </p>
          <a className="button darkButton" href="#contact">Parlons de votre projet</a>
        </div>
      </section>

      <section className="services">
        <p className="eyebrow dark">Expertise</p>
        <h2>Ce que je photographie</h2>
        <div className="serviceGrid">
          {["Portrait", "Mariage", "Mode", "Événement"].map((item, i) => (
            <div className="service" key={item}>
              <span>0{i + 1}</span>
              <h3>{item}</h3>
              <p>Des images authentiques, pensées pour raconter votre histoire.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact</p>
        <h2>Un projet en tête ?</h2>
        <p>Écrivez-moi et parlons de votre prochaine séance photo.</p>
        <a className="button light" href="mailto:bonjour@alexphotographe.fr">
          bonjour@alexphotographe.fr
        </a>
      </section>

      <footer>
        <span>© 2026 Alex Martin</span>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </main>
  );
}
